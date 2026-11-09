import fs from "fs";
import path from "path";
import Papa from "papaparse";
import { Fabric, BuyType, StockStatus } from "./types";

// Helper to create a URL-safe stable slug from name and id
export function generateSlug(name: string, id: string): string {
  const cleanName = (name || "")
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/[\s_-]+/g, "-");
  const cleanId = (id || "")
    .toLowerCase()
    .replace(/[^\w-]/g, "")
    .trim();
  return `${cleanName}-${cleanId}`.replace(/^-+|-+$/g, "");
}

// Safely parse a number; returns undefined if missing, invalid, or NaN
function parseNumber(val: unknown): number | undefined {
  if (val === undefined || val === null || val === "") return undefined;
  if (typeof val === "number") return isNaN(val) ? undefined : val;
  const cleaned = String(val).replace(/[^0-9.]/g, "").trim();
  if (!cleaned) return undefined;
  const num = parseFloat(cleaned);
  return isNaN(num) ? undefined : num;
}

// Normalize stock status string
function normalizeStockStatus(status: unknown): StockStatus {
  const s = String(status || "")
    .toLowerCase()
    .trim()
    .replace(/[-\s]/g, "_");
  if (s === "low_stock" || s === "low" || s === "limited") return "low_stock";
  if (s === "out_of_stock" || s === "out" || s === "sold_out") return "out_of_stock";
  return "in_stock";
}

// Normalize buy type string
function normalizeBuyType(buyType: unknown): BuyType {
  const b = String(buyType || "")
    .toLowerCase()
    .trim()
    .replace(/[-\s]/g, "_");
  if (b === "cut_meter" || b === "cut" || b === "meter" || b === "cut_piece") return "cut_meter";
  if (b === "both" || b === "than_and_cut" || b === "all") return "both";
  return "than";
}

// Raw row record type for CSV or JSON
type RawRow = Record<string, unknown>;

// Normalize key headers to lowercase and trim
function getField(row: RawRow, key: string): unknown {
  const direct = row[key];
  if (direct !== undefined) return direct;
  const lowerKey = key.toLowerCase();
  for (const k of Object.keys(row)) {
    if (k.trim().toLowerCase() === lowerKey) {
      return row[k];
    }
  }
  return undefined;
}

// Process and validate an array of raw rows
function processRawRows(rawRows: RawRow[], sourceName: string): Fabric[] {
  const seenIds = new Set<string>();
  const validFabrics: Fabric[] = [];
  const skipReasons: { id: string; reason: string }[] = [];

  let rowsRead = 0;

  for (const row of rawRows) {
    rowsRead++;
    const id = String(getField(row, "id") || "").trim();
    const name = String(getField(row, "name") || "").trim();
    const active = String(getField(row, "active") || "").trim().toLowerCase();

    // Check mandatory fields
    if (!id || !name) {
      skipReasons.push({ id: id || `Row #${rowsRead}`, reason: "Missing ID or Name" });
      continue;
    }

    // Check active flag
    if (active !== "yes" && active !== "true" && active !== "1") {
      skipReasons.push({ id, reason: `Inactive (active='${active}')` });
      continue;
    }

    // Check duplicates
    if (seenIds.has(id.toLowerCase())) {
      console.warn(`[MM Fashion Data Warning] Duplicate fabric ID skipped: '${id}'`);
      skipReasons.push({ id, reason: "Duplicate ID" });
      continue;
    }
    seenIds.add(id.toLowerCase());

    // Type with fallback to aliases or duplicate column name_1 from sheet typos
    const typeRaw =
      getField(row, "type") ||
      getField(row, "fabric_type") ||
      getField(row, "category") ||
      getField(row, "name_1");
    const type = String(typeRaw || "Viscose").trim();
    const compositionRaw = getField(row, "composition");
    const composition = compositionRaw ? String(compositionRaw).trim() : undefined;

    const width_inches = parseNumber(getField(row, "width_inches"));
    const gsm = parseNumber(getField(row, "gsm"));
    const weaveRaw = getField(row, "weave");
    const weave = weaveRaw ? String(weaveRaw).trim() : undefined;

    const buy_type = normalizeBuyType(getField(row, "buy_type"));
    const moqRaw = getField(row, "moq");
    const moq = moqRaw ? String(moqRaw).trim() : "1 Than (~90 m)";

    const price_wholesale = parseNumber(getField(row, "price_wholesale"));
    const price_retail = parseNumber(getField(row, "price_retail"));
    const stock_status = normalizeStockStatus(getField(row, "stock_status"));

    // Collect images, dropping empties
    const img1 = String(getField(row, "image_url") || "").trim();
    const img2 = String(getField(row, "image_url_2") || "").trim();
    const img3 = String(getField(row, "image_url_3") || "").trim();
    const images = [img1, img2, img3].filter((u) => u.length > 0);

    const descRaw = getField(row, "description");
    const description = descRaw ? String(descRaw).trim() : undefined;

    validFabrics.push({
      id,
      name,
      slug: generateSlug(name, id),
      type,
      composition: composition || undefined,
      width_inches,
      gsm,
      weave: weave || undefined,
      buy_type,
      moq,
      price_wholesale,
      price_retail,
      stock_status,
      images,
      description: description || undefined,
      active: true,
    });
  }

  const skippedSummary = skipReasons.length > 0
    ? ` (${skipReasons.map((s) => `${s.id}: ${s.reason}`).join(", ")})`
    : "";

  console.log(
    `[MM Fashion Data Layer] Summary: ${rowsRead} rows read, ${validFabrics.length} rows kept, ${skipReasons.length} skipped${skippedSummary}. Source: ${sourceName}.`
  );

  return validFabrics;
}

// Fallback loader from local JSON file
function loadFallbackData(): Fabric[] {
  try {
    const jsonPath = path.join(process.cwd(), "data", "fabrics.json");
    if (fs.existsSync(jsonPath)) {
      const content = fs.readFileSync(jsonPath, "utf-8");
      const parsed = JSON.parse(content) as RawRow[];
      return processRawRows(parsed, "Local Fallback (/data/fabrics.json)");
    }
  } catch (err) {
    console.error("[MM Fashion Data Error] Failed reading /data/fabrics.json:", err);
  }
  return [];
}

// In-memory cache for build-time caching
let cachedFabrics: Fabric[] | null = null;

/**
 * Primary data loader: Fetches Google Sheet CSV if available, or falls back to /data/fabrics.json.
 * Builds static data with 15-second timeout and robust error boundaries.
 */
export async function getAllFabrics(): Promise<Fabric[]> {
  if (cachedFabrics && cachedFabrics.length > 0) {
    return cachedFabrics;
  }

  const sheetUrl = process.env.SHEET_CSV_URL?.trim();

  if (sheetUrl) {
    try {
      console.log(`[MM Fashion Data Layer] Attempting to fetch CSV from SHEET_CSV_URL...`);
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 15000); // 15-second timeout

      const response = await fetch(sheetUrl, {
        signal: controller.signal,
      });
      clearTimeout(timeoutId);

      if (!response.ok) {
        throw new Error(`HTTP ${response.status} ${response.statusText}`);
      }

      let csvText = await response.text();

      // Handle BOM and Windows line endings
      if (csvText.charCodeAt(0) === 0xfeff) {
        csvText = csvText.slice(1);
      }
      csvText = csvText.replace(/\r\n/g, "\n").trim();

      if (!csvText) {
        throw new Error("Received empty CSV response from Google Sheet.");
      }

      const parsed = Papa.parse<RawRow>(csvText, {
        header: true,
        skipEmptyLines: "greedy",
        transformHeader: (h) => h.trim(),
      });

      if (parsed.errors && parsed.errors.length > 0) {
        console.warn(
          `[MM Fashion Data Warning] PapaParse encountered ${parsed.errors.length} parsing warning(s):`,
          parsed.errors[0]
        );
      }

      if (parsed.data && parsed.data.length > 0) {
        const fabrics = processRawRows(parsed.data, "Published Google Sheet CSV");
        if (fabrics.length > 0) {
          cachedFabrics = fabrics;
          return fabrics;
        }
      }

      console.warn(
        `[MM Fashion Data Warning] Sheet returned 0 valid rows. Falling back to local fabrics.json.`
      );
    } catch (error: unknown) {
      const msg = error instanceof Error ? error.message : String(error);
      console.warn(
        `[MM Fashion Data Warning] Google Sheet CSV fetch failed or timed out (${msg}). Falling back to /data/fabrics.json.`
      );
    }
  } else {
    console.log(
      `[MM Fashion Data Layer] No SHEET_CSV_URL configured. Loading local fallback /data/fabrics.json.`
    );
  }

  cachedFabrics = loadFallbackData();
  return cachedFabrics;
}

/**
 * Finds a fabric by its generated slug.
 */
export async function getFabricBySlug(slug: string): Promise<Fabric | undefined> {
  const fabrics = await getAllFabrics();
  return fabrics.find((f) => f.slug === slug);
}

/**
 * Returns distinct fabric types for the catalog filters.
 */
export async function getFabricTypes(): Promise<string[]> {
  const fabrics = await getAllFabrics();
  const typesSet = new Set<string>();
  for (const fabric of fabrics) {
    if (fabric.type) {
      typesSet.add(fabric.type.trim());
    }
  }
  return Array.from(typesSet);
}


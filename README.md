# MM Fashion — Surat Than Digital Catalog

A mobile-first digital fabric catalog for **MM Fashion**, a wholesale and retail raw cloth (Than) merchant in Begum wadi, Ring Road, Surat, Gujarat.

This is an **inquiry catalog, NOT an e-commerce store**: no cart, no checkout, and no payments. The objective is to drive buyers to initiate direct trade conversations on WhatsApp. Optimized for fast loading on mid-range Android devices on mobile networks (4G).

---

## Architecture & Tech Stack

- **Framework:** Next.js (App Router, TypeScript, `output: 'export'`)
- **Styling:** Tailwind CSS with custom design tokens from `Design.md` ("Greige & Indigo" theme)
- **Typography:** `Plus Jakarta Sans` (headings), `Inter` (body), `Noto Sans Gujarati`, and `Noto Sans Devanagari` via `next/font`
- **Deployment:** Cloudflare Pages as a **fully static website** (zero server runtime, static HTML/CSS/JS in `/out`)
- **Images:** Next.js Image with a custom Cloudinary loader and fallback to unoptimized rendering
- **Data Source:** Primary build-time Google Sheets CSV fetch with 15-second timeout, falling back gracefully to local `/data/fabrics.json`

---

## Environment Variables

| Variable | Scope | Required | Description |
|---|---|---|---|
| `SHEET_CSV_URL` | Build-time | No | Published Google Sheet CSV URL. If not provided or unreachable, falls back to `/data/fabrics.json`. |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | Client / Static | No | WhatsApp number in international format with country code without spaces (default: `919800000000`). |
| `NEXT_PUBLIC_PHONE_NUMBER` | Client / Static | No | Display phone number for calls (default: `+91 98000 00000`). |
| `NEXT_PUBLIC_SITE_URL` | Build-time | No | Production URL for static sitemap and Open Graph tags (default: `https://mmfashion.pages.dev`). |

Copy `.env.example` to `.env.local` for local development:
```bash
cp .env.example .env.local
```

---

## Google Sheet Data Schema

To connect a Google Sheet:
1. In Google Sheets, navigate to **File > Share > Publish to web**.
2. Select your catalog sheet tab, choose **Comma-separated values (.csv)**, and click **Publish**.
3. Copy the published CSV URL and assign it to `SHEET_CSV_URL`.

### Row 1 Columns (Exact Headers)
```csv
id,name,type,composition,width_inches,gsm,weave,buy_type,moq,price_wholesale,price_retail,stock_status,image_url,image_url_2,image_url_3,description,active
```

### Sample Row
```csv
MM-COT-60K-01,Pure Greige Raw Cotton 60s Kora Than,Cotton,100% Raw Unbleached Cotton,44,95,Plain Loom Weave,than,1 Than (~90 m),48,58,in_stock,https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=800&q=80,,,Authentic undyed raw kora cotton woven on shuttle looms in Surat. Ideal for natural dyeing and block printing.,yes
```

### Field Definitions & Normalization Rules
- `id` *(required)*: Unique SKU / trade code (e.g., `MM-COT-60K-01`). Duplicate IDs are automatically skipped with build warnings.
- `name` *(required)*: Fabric name shown on card and detail page.
- `type` *(required)*: Primary category (e.g., `Cotton`, `Rayon`, `Georgette`, `Silk`, `Viscose`, `Crepe`, `Polyester`).
- `composition` *(optional)*: Fiber content (e.g., `100% Combed Cotton`). Hidden in UI if omitted.
- `width_inches` *(optional)*: Pana width in inches (e.g., `44`, `48`, `56`).
- `gsm` *(optional)*: Weight in grams per square meter (e.g., `95`).
- `weave` *(optional)*: Weave structure (e.g., `Plain Loom Weave`, `High-Twist Twill`).
- `buy_type`: Order unit — `than` (~90m roll), `cut_meter` (cut piece), or `both`. Defaults to `than`.
- `moq`: Minimum order quantity text (e.g., `1 Than (~90 m)`).
- `price_wholesale` *(optional)*: Wholesale price in INR per meter. Omitted in UI if blank.
- `price_retail` *(optional)*: Retail / sample price in INR per meter.
- `stock_status`: `in_stock`, `low_stock`, or `out_of_stock`.
- `image_url`, `image_url_2`, `image_url_3` *(optional)*: Up to 3 gallery image URLs.
- `description` *(optional)*: Detailed trade notes and godown specifications.
- `active`: Must be `yes` (case-insensitive) for the row to be kept in the catalog.

---

## Local Development & Build

### Prerequisites
- Node.js 18+ (Node 20+ or 22+ recommended)
- npm

### Commands
```bash
# Install dependencies
npm install

# Run local development server
npm run dev

# Run production static build
npm run build

# Serve the static /out directory locally to verify zero-runtime behavior
npx serve out
```

---

## Deploying to Cloudflare Pages

1. **Push your code to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial MM Fashion Surat digital catalog"
   git remote add origin https://github.com/<your-username>/mm-fashion.git
   git push -u origin main
   ```
2. **Open Cloudflare Dashboard**:
   - Go to **Workers & Pages > Create application > Pages > Connect to Git**.
   - Select your GitHub repository (`mm-fashion`).
3. **Configure Build Settings**:
   - **Framework preset:** `Next.js (Static HTML Export)` or `None`
   - **Build command:** `npx next build`
   - **Build output directory:** `out`
4. **Add Environment Variables**:
   - `SHEET_CSV_URL`: Your published Google Sheet CSV link
   - `NEXT_PUBLIC_WHATSAPP_NUMBER`: e.g. `919800000000`
   - `NEXT_PUBLIC_PHONE_NUMBER`: e.g. `+91 98000 00000`
   - `NEXT_PUBLIC_SITE_URL`: e.g. `https://mmfashion.pages.dev`
5. Click **Save and Deploy**. Your site will be live on `https://mmfashion.pages.dev` in ~1 minute.

---

## Setting Up the Merchant "Update Website" Button

To allow the merchant to update the catalog directly from Google Sheets without touching code:

1. **Create Deploy Hook in Cloudflare Pages**:
   - Go to Cloudflare Dashboard > **Workers & Pages** > **mm-fashion** > **Settings** > **Builds & deployments** > **Deploy hooks**.
   - Click **Add deploy hook**.
   - Give it a name (e.g., `Google Sheets Update`), select branch `main`, and click **Create hook**.
   - Copy the generated Webhook URL (format: `https://api.cloudflare.com/client/v4/pages/webhooks/deploy_hooks/...`).

2. **Add Apps Script to Google Sheet**:
   - Open your Google Sheet > **Extensions** > **Apps Script**.
   - Replace any template code with the contents of [`docs/google-apps-script.js`](./docs/google-apps-script.js).
   - Paste your copied Deploy Hook URL into `CLOUDFLARE_DEPLOY_HOOK_URL`.
   - Click **Save**.

3. **Merchant Routine**:
   1. Open the Google Sheet and edit prices, stock status, or add new than lots.
   2. Click the new **Website** menu in Google Sheets.
   3. Click **Update website now**.
   4. The script sends a webhook to Cloudflare, rebuilds the site with the latest data, and updates worldwide within 1–2 minutes. A 10-minute cooldown prevents accidental multiple triggers.

---

## Design System Reference

- Defined in [`Design.md`](./Design.md): "Greige & Indigo" theme.
- **Rule on Green:** `#0E7C4A` (WhatsApp Green) is strictly reserved for WhatsApp contact actions. Stock status uses Madder Red (`#A63D2F`) for low/out of stock and Linen/Indigo for in-stock.
- **Responsive Layout:**
  - `< 360px`: 1 column
  - `360px – 767px`: 2 columns (Android mobile standard)
  - `768px – 1023px`: 3 columns (tablets)
  - `>= 1024px`: 4 columns (desktops)
- **Languages:** English, Gujarati (`ગુજ`), and Hindi (`हिં`) with instantaneous client-side UI switching and localStorage persistence.


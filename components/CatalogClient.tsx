"use client";

import React, { useState, useEffect, useMemo, useTransition } from "react";
import { Fabric, BuyType, StockStatus } from "@/lib/types";
import { Header } from "./Header";
import { TrustStrip } from "./TrustStrip";
import { WholesaleBanners } from "./WholesaleBanners";
import { SearchBar } from "./SearchBar";
import { FilterChips } from "./FilterChips";
import { FilterSheet } from "./FilterSheet";
import { FabricGrid } from "./FabricGrid";
import { EmptyState } from "./EmptyState";
import { FloatingWhatsApp } from "./FloatingWhatsApp";
import { BottomNav } from "./BottomNav";
import { LanguageProvider } from "./LanguageContext";

interface CatalogClientProps {
  initialFabrics: Fabric[];
  availableTypes: string[];
}

export function CatalogClient({
  initialFabrics,
  availableTypes,
}: CatalogClientProps) {
  const [, startTransition] = useTransition();

  // Search & Filter States
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [selectedBuyType, setSelectedBuyType] = useState<BuyType | "all">("all");
  const [selectedStockStatus, setSelectedStockStatus] = useState<
    StockStatus | "all"
  >("all");
  const [selectedWidth, setSelectedWidth] = useState<number | null>(null);
  const [isFilterSheetOpen, setIsFilterSheetOpen] = useState(false);

  // Sync initial query params from window.location after mount
  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      const q = params.get("q");
      const type = params.get("type");
      const buy = params.get("buy") as BuyType;
      const stock = params.get("stock") as StockStatus;
      const width = params.get("width");

      if (q) {
        setSearchQuery(q);
        setDebouncedSearch(q);
      }
      if (type) setSelectedType(type);
      if (buy && ["than", "cut_meter", "both"].includes(buy)) {
        setSelectedBuyType(buy);
      }
      if (stock && ["in_stock", "low_stock", "out_of_stock"].includes(stock)) {
        setSelectedStockStatus(stock);
      }
      if (width) setSelectedWidth(parseInt(width, 10));

      if (params.get("focusSearch") === "1") {
        setTimeout(() => {
          const el = document.getElementById("catalog-search-input");
          el?.focus();
        }, 150);
      }
    } catch {
      // ignore
    }
  }, []);

  // Debounce search query input (200ms)
  useEffect(() => {
    const timer = setTimeout(() => {
      startTransition(() => {
        setDebouncedSearch(searchQuery.trim());
      });
    }, 200);
    return () => clearTimeout(timer);
  }, [searchQuery]);

  // Sync state to URL without reloading page
  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const params = new URLSearchParams();
      if (debouncedSearch) params.set("q", debouncedSearch);
      if (selectedType) params.set("type", selectedType);
      if (selectedBuyType !== "all") params.set("buy", selectedBuyType);
      if (selectedStockStatus !== "all") params.set("stock", selectedStockStatus);
      if (selectedWidth) params.set("width", String(selectedWidth));

      const newQuery = params.toString();
      const newUrl = newQuery
        ? `${window.location.pathname}?${newQuery}`
        : window.location.pathname;
      window.history.replaceState(null, "", newUrl);
    } catch {
      // ignore
    }
  }, [
    debouncedSearch,
    selectedType,
    selectedBuyType,
    selectedStockStatus,
    selectedWidth,
  ]);

  // Filter computation
  const filteredFabrics = useMemo(() => {
    return initialFabrics.filter((fabric) => {
      // Text search
      if (debouncedSearch) {
        const q = debouncedSearch.toLowerCase();
        const searchableText = [
          fabric.name,
          fabric.type,
          fabric.composition,
          fabric.weave,
          fabric.description,
          fabric.id,
          fabric.gsm ? `${fabric.gsm} gsm` : "",
          fabric.width_inches ? `${fabric.width_inches} inch` : "",
        ]
          .filter(Boolean)
          .join(" ")
          .toLowerCase();

        if (!searchableText.includes(q)) return false;
      }

      // Fabric Type
      if (selectedType) {
        if (fabric.type.toLowerCase() !== selectedType.toLowerCase()) {
          return false;
        }
      }

      // Buy Type
      if (selectedBuyType !== "all") {
        if (selectedBuyType === "than" && fabric.buy_type === "cut_meter") {
          return false;
        }
        if (selectedBuyType === "cut_meter" && fabric.buy_type === "than") {
          return false;
        }
      }

      // Stock Status
      if (selectedStockStatus !== "all") {
        if (fabric.stock_status !== selectedStockStatus) {
          return false;
        }
      }

      // Width
      if (selectedWidth !== null) {
        if (selectedWidth === 56) {
          if (fabric.width_inches !== 56 && fabric.width_inches !== 58) {
            return false;
          }
        } else if (fabric.width_inches !== selectedWidth) {
          return false;
        }
      }

      return true;
    });
  }, [
    initialFabrics,
    debouncedSearch,
    selectedType,
    selectedBuyType,
    selectedStockStatus,
    selectedWidth,
  ]);

  // Active filter count for badge
  const activeFilterCount =
    (selectedType ? 1 : 0) +
    (selectedBuyType !== "all" ? 1 : 0) +
    (selectedStockStatus !== "all" ? 1 : 0) +
    (selectedWidth !== null ? 1 : 0);

  const handleResetFilters = () => {
    setSearchQuery("");
    setDebouncedSearch("");
    setSelectedType(null);
    setSelectedBuyType("all");
    setSelectedStockStatus("all");
    setSelectedWidth(null);
  };

  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col bg-canvas text-text-primary">
        {/* Slim Header */}
        <Header />

        {/* Main Content */}
        <main className="flex-1 w-full pt-14 pb-28">
          {/* Trust Strip directly below Header */}
          <TrustStrip />

          {/* Wholesale Notice & Instagram Story Banners */}
          <WholesaleBanners />

          {/* Sticky Search Bar and Horizontal Filter Chips */}
          <div className="sticky top-14 z-30 bg-canvas/95 backdrop-blur-md pt-3 pb-2 px-4 border-b border-thread/50 shadow-[0_1px_4px_rgba(27,42,74,0.03)]">
            <div className="max-w-[1200px] mx-auto flex flex-col gap-2">
              <SearchBar
                value={searchQuery}
                onChange={setSearchQuery}
                onClear={() => {
                  setSearchQuery("");
                  setDebouncedSearch("");
                }}
              />

              <FilterChips
                types={availableTypes}
                selectedType={selectedType}
                onSelectType={setSelectedType}
                onOpenFilters={() => setIsFilterSheetOpen(true)}
                activeFilterCount={activeFilterCount}
              />
            </div>
          </div>

          {/* Fabric Catalog Section */}
          <section className="w-full max-w-[1200px] mx-auto px-4 pt-4">
            {/* Header info line */}
            <div className="flex items-center justify-between pb-3">
              <span className="text-xs font-semibold text-text-secondary uppercase tracking-wider">
                {filteredFabrics.length}{" "}
                {filteredFabrics.length === 1 ? "Than Quality" : "Than Qualities"}
              </span>

              {activeFilterCount > 0 && (
                <button
                  type="button"
                  onClick={handleResetFilters}
                  className="text-xs text-madder font-semibold hover:underline"
                >
                  Clear Filters
                </button>
              )}
            </div>

            {/* Grid or Empty State */}
            {filteredFabrics.length > 0 ? (
              <FabricGrid fabrics={filteredFabrics} />
            ) : (
              <EmptyState
                query={debouncedSearch || selectedType || undefined}
                onClear={handleResetFilters}
              />
            )}
          </section>
        </main>

        {/* Filter Bottom Sheet */}
        <FilterSheet
          isOpen={isFilterSheetOpen}
          onClose={() => setIsFilterSheetOpen(false)}
          availableTypes={availableTypes}
          selectedType={selectedType}
          onSelectType={setSelectedType}
          selectedBuyType={selectedBuyType}
          onSelectBuyType={setSelectedBuyType}
          selectedStockStatus={selectedStockStatus}
          onSelectStockStatus={setSelectedStockStatus}
          selectedWidth={selectedWidth}
          onSelectWidth={setSelectedWidth}
          matchCount={filteredFabrics.length}
          onReset={handleResetFilters}
        />

        {/* Floating WhatsApp Action (Home screen only) */}
        <FloatingWhatsApp />

        {/* Bottom App Navigation */}
        <BottomNav
          onFindThanClick={() => {
            const el = document.getElementById("catalog-search-input");
            el?.focus();
            el?.scrollIntoView({ behavior: "smooth", block: "center" });
          }}
        />
      </div>
    </LanguageProvider>
  );
}


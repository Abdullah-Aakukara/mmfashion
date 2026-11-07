"use client";

import React, { useEffect } from "react";
import { BuyType, StockStatus } from "@/lib/types";
import { Icon } from "./Icon";
import { useLanguage } from "./LanguageContext";

interface FilterSheetProps {
  isOpen: boolean;
  onClose: () => void;
  availableTypes: string[];
  selectedType: string | null;
  onSelectType: (type: string | null) => void;
  selectedBuyType: BuyType | "all";
  onSelectBuyType: (buyType: BuyType | "all") => void;
  selectedStockStatus: StockStatus | "all";
  onSelectStockStatus: (status: StockStatus | "all") => void;
  selectedWidth: number | null;
  onSelectWidth: (width: number | null) => void;
  matchCount: number;
  onReset: () => void;
}

export function FilterSheet({
  isOpen,
  onClose,
  availableTypes,
  selectedType,
  onSelectType,
  selectedBuyType,
  onSelectBuyType,
  selectedStockStatus,
  onSelectStockStatus,
  selectedWidth,
  onSelectWidth,
  matchCount,
  onReset,
}: FilterSheetProps) {
  const { t } = useLanguage();

  // Lock body scroll when sheet is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="filter-sheet-title"
      className="fixed inset-0 z-50 flex items-end sm:items-center sm:justify-center bg-indigo/40 backdrop-blur-sm transition-opacity"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="w-full sm:max-w-md bg-surface rounded-t-2xl sm:rounded-2xl border border-thread p-5 pb-safe max-h-[85vh] overflow-y-auto shadow-sheet flex flex-col gap-4 animate-in slide-in-from-bottom duration-200">
        {/* Sheet Header */}
        <div className="flex items-center justify-between pb-2 border-b border-thread/60">
          <div className="flex items-center gap-2">
            <Icon name="tune" className="w-5 h-5 text-indigo" />
            <h2
              id="filter-sheet-title"
              className="font-heading font-bold text-base text-indigo"
            >
              {t.filterSheetTitle}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close filter sheet"
            className="w-9 h-9 rounded-full bg-linen flex items-center justify-center text-text-secondary hover:text-indigo active:scale-95 transition-all"
          >
            <Icon name="close" className="w-4 h-4" />
          </button>
        </div>

        {/* Section 1: Fabric Type */}
        <div className="flex flex-col gap-2">
          <label className="text-xs font-bold uppercase tracking-wider text-text-secondary">
            {t.fabricTypeFilterLabel}
          </label>
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => onSelectType(null)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                selectedType === null
                  ? "bg-indigo text-text-on-primary shadow-subtle"
                  : "bg-linen text-indigo hover:bg-thread/60"
              }`}
            >
              {t.all}
            </button>
            {availableTypes.map((type) => {
              const isSelected =
                selectedType?.toLowerCase() === type.toLowerCase();
              return (
                <button
                  key={type}
                  type="button"
                  onClick={() => onSelectType(isSelected ? null : type)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    isSelected
                      ? "bg-indigo text-text-on-primary shadow-subtle"
                      : "bg-linen text-indigo hover:bg-thread/60"
                  }`}
                >
                  {type}
                </button>
              );
            })}
          </div>
        </div>

        {/* Section 2: Order Type (Buy Type) */}
        <div className="flex flex-col gap-2">
          <label className="text-xs font-bold uppercase tracking-wider text-text-secondary">
            {t.buyTypeFilterLabel}
          </label>
          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => onSelectBuyType("all")}
              className={`py-2 px-3 rounded-lg text-xs font-semibold transition-all ${
                selectedBuyType === "all"
                  ? "bg-indigo text-text-on-primary shadow-subtle"
                  : "bg-linen text-indigo hover:bg-thread/60"
              }`}
            >
              {t.all}
            </button>
            <button
              type="button"
              onClick={() => onSelectBuyType("than")}
              className={`py-2 px-3 rounded-lg text-xs font-semibold transition-all ${
                selectedBuyType === "than"
                  ? "bg-indigo text-text-on-primary shadow-subtle"
                  : "bg-linen text-indigo hover:bg-thread/60"
              }`}
            >
              {t.than}
            </button>
            <button
              type="button"
              onClick={() => onSelectBuyType("cut_meter")}
              className={`py-2 px-3 rounded-lg text-xs font-semibold transition-all ${
                selectedBuyType === "cut_meter"
                  ? "bg-indigo text-text-on-primary shadow-subtle"
                  : "bg-linen text-indigo hover:bg-thread/60"
              }`}
            >
              {t.cutMeter}
            </button>
            <button
              type="button"
              onClick={() => onSelectBuyType("both")}
              className={`py-2 px-3 rounded-lg text-xs font-semibold transition-all ${
                selectedBuyType === "both"
                  ? "bg-indigo text-text-on-primary shadow-subtle"
                  : "bg-linen text-indigo hover:bg-thread/60"
              }`}
            >
              {t.bothThanCut}
            </button>
          </div>
        </div>

        {/* Section 3: Width (Panna) */}
        <div className="flex flex-col gap-2">
          <label className="text-xs font-bold uppercase tracking-wider text-text-secondary">
            Than Panna ({t.width})
          </label>
          <div className="grid grid-cols-3 gap-2">
            <button
              type="button"
              onClick={() => onSelectWidth(null)}
              className={`py-2 rounded-lg text-xs font-semibold transition-all ${
                selectedWidth === null
                  ? "bg-indigo text-text-on-primary shadow-subtle"
                  : "bg-linen text-indigo hover:bg-thread/60"
              }`}
            >
              {t.all}
            </button>
            <button
              type="button"
              onClick={() => onSelectWidth(44)}
              className={`py-2 rounded-lg text-xs font-semibold transition-all ${
                selectedWidth === 44
                  ? "bg-indigo text-text-on-primary shadow-subtle"
                  : "bg-linen text-indigo hover:bg-thread/60"
              }`}
            >
              44&quot; (Std)
            </button>
            <button
              type="button"
              onClick={() => onSelectWidth(56)}
              className={`py-2 rounded-lg text-xs font-semibold transition-all ${
                selectedWidth === 56 || selectedWidth === 58
                  ? "bg-indigo text-text-on-primary shadow-subtle"
                  : "bg-linen text-indigo hover:bg-thread/60"
              }`}
            >
              56&quot; / 58&quot;
            </button>
          </div>
        </div>

        {/* Section 4: Stock Status */}
        <div className="flex flex-col gap-2">
          <label className="text-xs font-bold uppercase tracking-wider text-text-secondary">
            {t.stockFilterLabel}
          </label>
          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => onSelectStockStatus("all")}
              className={`py-2 rounded-lg text-xs font-semibold transition-all ${
                selectedStockStatus === "all"
                  ? "bg-indigo text-text-on-primary shadow-subtle"
                  : "bg-linen text-indigo hover:bg-thread/60"
              }`}
            >
              All Lots
            </button>
            <button
              type="button"
              onClick={() => onSelectStockStatus("in_stock")}
              className={`py-2 rounded-lg text-xs font-semibold transition-all ${
                selectedStockStatus === "in_stock"
                  ? "bg-indigo text-text-on-primary shadow-subtle"
                  : "bg-linen text-indigo hover:bg-thread/60"
              }`}
            >
              Ready Stock Only
            </button>
          </div>
        </div>

        {/* Sheet Actions */}
        <div className="pt-3 border-t border-thread/60 flex items-center gap-2">
          <button
            type="button"
            onClick={onReset}
            className="flex-1 h-12 rounded-xl bg-linen text-indigo font-heading font-semibold text-xs active:bg-thread transition-colors"
          >
            {t.reset}
          </button>
          <button
            type="button"
            onClick={onClose}
            className="flex-[2] h-12 rounded-xl bg-indigo text-text-on-primary font-heading font-semibold text-xs shadow-sm active:scale-[0.98] transition-transform"
          >
            {t.applyFilters} ({matchCount} Thans)
          </button>
        </div>
      </div>
    </div>
  );
}


"use client";

import React from "react";
import { Icon } from "./Icon";
import { useLanguage } from "./LanguageContext";

interface FilterChipsProps {
  types: string[];
  selectedType: string | null;
  onSelectType: (type: string | null) => void;
  onOpenFilters: () => void;
  activeFilterCount: number;
}

export function FilterChips({
  types,
  selectedType,
  onSelectType,
  onOpenFilters,
  activeFilterCount,
}: FilterChipsProps) {
  const { t } = useLanguage();

  return (
    <div
      role="tablist"
      aria-label="Filter fabrics by type"
      className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1 w-full"
    >
      {/* Filters Modal Trigger */}
      <button
        type="button"
        onClick={onOpenFilters}
        className={`h-9 px-3 rounded-full flex items-center gap-1.5 whitespace-nowrap text-xs font-semibold border transition-all active:scale-95 flex-shrink-0 ${
          activeFilterCount > 0
            ? "bg-indigo text-text-on-primary border-indigo shadow-subtle"
            : "bg-surface text-indigo border-thread hover:bg-linen"
        }`}
        aria-label="Open advanced filter sheet"
      >
        <Icon
          name="tune"
          className={`w-3.5 h-3.5 ${
            activeFilterCount > 0 ? "text-text-on-primary" : "text-indigo"
          }`}
        />
        <span>{t.filters}</span>
        {activeFilterCount > 0 && (
          <span className="inline-flex items-center justify-center min-w-[18px] h-[18px] px-1 rounded-full bg-zari-mist text-zari-text text-[10px] font-bold">
            {activeFilterCount}
          </span>
        )}
      </button>

      {/* "All" Chip */}
      <button
        type="button"
        role="tab"
        aria-selected={selectedType === null}
        onClick={() => onSelectType(null)}
        className={`h-9 px-3.5 rounded-full flex items-center whitespace-nowrap text-xs font-semibold transition-all active:scale-95 flex-shrink-0 ${
          selectedType === null
            ? "bg-indigo text-text-on-primary shadow-subtle"
            : "bg-linen text-indigo hover:bg-thread/50"
        }`}
      >
        {t.all}
      </button>

      {/* Dynamic Type Chips */}
      {types.map((type) => {
        const isSelected = selectedType?.toLowerCase() === type.toLowerCase();
        return (
          <button
            key={type}
            type="button"
            role="tab"
            aria-selected={isSelected}
            onClick={() => onSelectType(isSelected ? null : type)}
            className={`h-9 px-3.5 rounded-full flex items-center whitespace-nowrap text-xs font-semibold transition-all active:scale-95 flex-shrink-0 ${
              isSelected
                ? "bg-indigo text-text-on-primary shadow-subtle"
                : "bg-linen text-indigo hover:bg-thread/50"
            }`}
          >
            {type}
          </button>
        );
      })}
    </div>
  );
}


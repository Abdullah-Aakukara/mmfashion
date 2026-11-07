"use client";

import React from "react";
import { Icon } from "./Icon";
import { useLanguage } from "./LanguageContext";

interface SearchBarProps {
  value: string;
  onChange: (val: string) => void;
  onClear: () => void;
}

export function SearchBar({ value, onChange, onClear }: SearchBarProps) {
  const { t } = useLanguage();

  return (
    <div className="relative w-full">
      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-text-muted">
        <Icon name="search" className="w-4 h-4 text-text-muted" />
      </div>

      <input
        id="catalog-search-input"
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={t.searchPlaceholder}
        className="w-full h-11 pl-10 pr-9 rounded-xl bg-surface border border-thread text-sm text-indigo placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-indigo shadow-subtle transition-all"
        aria-label={t.searchPlaceholder}
      />

      {value && (
        <button
          type="button"
          onClick={onClear}
          aria-label="Clear search input"
          className="absolute inset-y-0 right-0 pr-3 flex items-center text-text-muted hover:text-indigo active:scale-95 transition-transform"
        >
          <Icon name="close" className="w-4 h-4" />
        </button>
      )}
    </div>
  );
}


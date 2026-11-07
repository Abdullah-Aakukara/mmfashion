"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon } from "./Icon";
import { useLanguage } from "./LanguageContext";

interface BottomNavProps {
  onFindThanClick?: () => void;
}

export function BottomNav({ onFindThanClick }: BottomNavProps) {
  const pathname = usePathname();
  const { t } = useLanguage();

  const isCatalog = pathname === "/" || pathname === "";
  const isAbout = pathname.startsWith("/about");

  return (
    <nav
      aria-label="Main Navigation"
      className="fixed bottom-0 inset-x-0 z-40 bg-surface/95 backdrop-blur-xl border-t border-thread pb-safe shadow-sheet"
    >
      <div className="max-w-[1200px] mx-auto flex justify-around items-center h-16 px-4">
        {/* Catalog */}
        <Link
          href="/"
          className={`flex flex-col items-center justify-center gap-1 min-w-[56px] min-h-[48px] transition-colors ${
            isCatalog
              ? "text-indigo font-bold"
              : "text-text-secondary hover:text-indigo"
          }`}
          aria-current={isCatalog ? "page" : undefined}
        >
          <Icon name="grid" className="w-5 h-5" />
          <span className="text-[11px] leading-none">{t.catalog}</span>
        </Link>

        {/* Find Than / Search */}
        <button
          type="button"
          onClick={() => {
            if (onFindThanClick) {
              onFindThanClick();
            } else if (typeof window !== "undefined") {
              const el = document.getElementById("catalog-search-input");
              if (el) {
                el.focus();
                el.scrollIntoView({ behavior: "smooth", block: "center" });
              } else {
                window.location.href = "/?focusSearch=1";
              }
            }
          }}
          className="flex flex-col items-center justify-center gap-1 min-w-[56px] min-h-[48px] text-text-secondary hover:text-indigo transition-colors"
          aria-label={t.findThan}
        >
          <Icon name="search" className="w-5 h-5" />
          <span className="text-[11px] leading-none">{t.findThan}</span>
        </button>

        {/* About Us */}
        <Link
          href="/about/"
          className={`flex flex-col items-center justify-center gap-1 min-w-[56px] min-h-[48px] transition-colors ${
            isAbout
              ? "text-indigo font-bold"
              : "text-text-secondary hover:text-indigo"
          }`}
          aria-current={isAbout ? "page" : undefined}
        >
          <Icon name="storefront" className="w-5 h-5" />
          <span className="text-[11px] leading-none">{t.aboutUs}</span>
        </Link>
      </div>
    </nav>
  );
}


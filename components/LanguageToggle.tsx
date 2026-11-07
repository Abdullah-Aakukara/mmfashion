"use client";

import React from "react";
import { useLanguage } from "./LanguageContext";
import { Language } from "@/lib/i18n";

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  const options: { code: Language; label: string; aria: string }[] = [
    { code: "en", label: "EN", aria: "English language" },
    { code: "gu", label: "ગુજ", aria: "Gujarati language" },
    { code: "hi", label: "हिં", aria: "Hindi language" },
  ];

  return (
    <div
      role="group"
      aria-label="Language selection"
      className="flex items-center p-0.5 bg-linen rounded-full border border-thread/60"
    >
      {options.map((opt) => {
        const isActive = language === opt.code;
        return (
          <button
            key={opt.code}
            type="button"
            aria-label={opt.aria}
            aria-pressed={isActive}
            onClick={() => setLanguage(opt.code)}
            className={`min-h-[32px] px-2.5 py-1 rounded-full text-xs font-semibold tracking-wide transition-all ${
              isActive
                ? "bg-surface text-indigo shadow-subtle font-bold"
                : "text-text-secondary hover:text-indigo active:scale-95"
            }`}
          >
            {opt.label}
          </button>
        );
      })}
    </div>
  );
}


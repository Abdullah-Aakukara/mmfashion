"use client";

import React from "react";
import { siteConfig } from "@/config/site";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { Icon } from "./Icon";
import { useLanguage } from "./LanguageContext";

interface EmptyStateProps {
  query?: string;
  onClear?: () => void;
}

export function EmptyState({ query, onClear }: EmptyStateProps) {
  const { t, language } = useLanguage();

  const customMessage = query
    ? `Hello ${siteConfig.name}, I am looking for "${query}" fabric lots. Do you have this in godown stock or direct mill lots?`
    : undefined;

  const whatsappHref = getWhatsAppLink({ customMessage });

  return (
    <div className="w-full bg-surface rounded-card border border-thread p-6 shadow-subtle flex flex-col items-center text-center my-4">
      {/* Tactile Loom & Shuttle Weaving Graphic */}
      <div className="w-20 h-20 rounded-full bg-linen flex items-center justify-center mb-4 text-indigo shadow-inner">
        <svg
          width="46"
          height="46"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <ellipse
            cx="24"
            cy="15"
            rx="16"
            ry="5.5"
            fill="#F8EFD9"
            stroke="#B8862B"
            strokeWidth="1.75"
          />
          <path
            d="M8 15V22C8 25 15 27.5 24 27.5C33 27.5 40 25 40 22V15"
            fill="#FFFDF9"
            stroke="#1B2A4A"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path
            d="M8 22V29C8 32 15 34.5 24 34.5C33 34.5 40 32 40 29V22"
            fill="#E8ECF4"
            stroke="#1B2A4A"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path
            d="M8 29V36C8 39 15 41.5 24 41.5C33 41.5 40 39 40 36V29"
            fill="#F8EFD9"
            stroke="#1B2A4A"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <ellipse
            cx="24"
            cy="15"
            rx="7"
            ry="2.5"
            fill="#EFE9DD"
            stroke="#B8862B"
            strokeWidth="1.5"
          />
          <circle cx="24" cy="15" r="1.5" fill="#1B2A4A" />
        </svg>
      </div>

      {/* Pill */}
      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-madder-mist text-madder text-xs font-semibold mb-2">
        <Icon name="inventory" className="w-3.5 h-3.5 text-madder" />
        <span>0 Direct Matches</span>
      </div>

      {/* Title */}
      <h3 className="font-heading font-semibold text-lg text-indigo mb-1.5">
        {query ? `${t.emptyTitle} "${query}"` : t.emptyTitle}
      </h3>

      {/* Multilingual Regional Trade Context */}
      {language !== "gu" && (
        <p className="text-sm font-medium text-text-primary mb-1">
          અમારા ગોડાઉનમાં ઉપલબ્ધ હોઈ શકે છે. વ્હોટ્સએપ પર પૂછો.
        </p>
      )}

      <p className="text-xs text-text-secondary mb-5 max-w-sm leading-relaxed">
        {t.emptySubtitle}
      </p>

      {/* Primary WhatsApp Action */}
      <div className="w-full max-w-xs flex flex-col gap-2.5">
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full h-cta min-h-cta rounded-btn bg-cta text-text-on-primary font-heading font-semibold text-sm flex items-center justify-center gap-2 shadow-sm transition-all hover:bg-cta-pressed active:scale-[0.98]"
        >
          <Icon name="whatsapp" className="w-5 h-5 text-text-on-primary" />
          <span>{t.emptyWhatsAppCta}</span>
        </a>

        {/* Clear Filters Button if filtered */}
        {onClear && (
          <button
            type="button"
            onClick={onClear}
            className="w-full h-11 rounded-btn bg-linen text-indigo font-semibold text-xs flex items-center justify-center gap-1.5 border border-thread/60 active:bg-thread"
          >
            <Icon name="close" className="w-4 h-4 text-indigo" />
            <span>{t.clearAll}</span>
          </button>
        )}
      </div>
    </div>
  );
}


"use client";

import React from "react";
import { siteConfig } from "@/config/site";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { Icon } from "./Icon";
import { useLanguage } from "./LanguageContext";

interface StickyActionBarProps {
  fabricName: string;
  fabricId: string;
  moq?: string;
}

export function StickyActionBar({
  fabricName,
  fabricId,
  moq,
}: StickyActionBarProps) {
  const { t } = useLanguage();

  const whatsappHref = getWhatsAppLink({
    fabricName,
    fabricId,
    moq,
  });

  const callHref = `tel:${siteConfig.contact.phoneNumber.replace(/\s+/g, "")}`;

  return (
    <div className="fixed bottom-0 inset-x-0 bg-surface/95 backdrop-blur-xl border-t border-thread shadow-sheet px-4 py-3 pb-safe z-40">
      <div className="max-w-[1200px] mx-auto flex items-center gap-3">
        {/* Secondary Call Button */}
        <a
          href={callHref}
          aria-label={t.callMerchant}
          className="h-cta min-h-cta px-4 flex items-center justify-center gap-1.5 rounded-btn bg-surface text-indigo border border-thread shadow-subtle hover:bg-linen active:bg-indigo-mist transition-all active:scale-95 flex-shrink-0"
        >
          <Icon name="call" className="w-5 h-5 text-indigo" />
          <span className="font-heading font-semibold text-sm">{t.call}</span>
        </a>

        {/* Primary WhatsApp Button */}
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${t.inquireWhatsApp} for ${fabricName}`}
          className="h-cta min-h-cta flex-1 flex items-center justify-center gap-2 bg-cta text-text-on-primary rounded-btn shadow-md hover:bg-cta-pressed active:scale-[0.98] transition-all"
        >
          <Icon name="whatsapp" className="w-5 h-5 text-text-on-primary flex-shrink-0" />
          <div className="flex flex-col items-start leading-tight">
            <span className="font-heading font-semibold text-sm">
              {t.inquireWhatsApp}
            </span>
            <span className="text-[10px] text-cta-tint/90 tracking-tight font-medium">
              Auto-attaches name &amp; SKU
            </span>
          </div>
        </a>
      </div>
    </div>
  );
}


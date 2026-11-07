"use client";

import React from "react";
import { siteConfig } from "@/config/site";
import { Icon } from "./Icon";
import { useLanguage } from "./LanguageContext";

export function WholesaleBanners() {
  const { t } = useLanguage();

  return (
    <div className="w-full max-w-[1200px] mx-auto px-4 pt-3 flex flex-col gap-2.5">
      {/* Daily Lot Updates & Reel Stories */}
      <div className="bg-surface p-3 rounded-card border border-thread shadow-subtle flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-3 min-w-0">
          <div className="w-10 h-10 rounded-xl bg-indigo-mist flex items-center justify-center text-indigo flex-shrink-0">
            <Icon name="camera" className="w-5 h-5 text-indigo" />
          </div>
          <div className="flex flex-col min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="font-heading font-semibold text-sm text-indigo leading-tight">
                {t.dailyUpdates}
              </span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-indigo-mist text-indigo font-medium">
                {siteConfig.social.instagramHandle}
              </span>
            </div>
            <p className="text-xs text-text-secondary truncate mt-0.5">
              {t.instagramNotice}
            </p>
          </div>
        </div>

        <a
          href={siteConfig.social.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="min-h-touch px-4 rounded-btn bg-linen text-indigo hover:bg-indigo-mist active:scale-95 transition-all text-xs font-semibold flex items-center justify-center gap-1.5 flex-shrink-0 self-stretch sm:self-auto border border-thread/50"
        >
          <Icon name="open_in_new" className="w-4 h-4 text-indigo" />
          <span>{t.viewInstagram}</span>
        </a>
      </div>

      {/* Direct Mill Wholesale Rates */}
      <div className="bg-surface p-3 rounded-card border border-thread shadow-subtle flex items-center justify-between gap-2">
        <div className="flex items-center gap-2.5 min-w-0">
          <div className="w-7 h-7 rounded-lg bg-zari-mist flex items-center justify-center flex-shrink-0">
            <Icon name="verified" className="w-4 h-4 text-zari" />
          </div>
          <div className="flex flex-col truncate">
            <p className="text-xs text-indigo font-semibold truncate">
              {t.wholesaleNotice}
            </p>
            <p className="text-xs text-text-secondary truncate">
              {t.wholesaleNoticeSub}
            </p>
          </div>
        </div>
        <span className="flex-shrink-0 text-xs bg-indigo-mist text-indigo px-2.5 py-1 rounded-full font-semibold">
          {t.b2bBadge}
        </span>
      </div>
    </div>
  );
}


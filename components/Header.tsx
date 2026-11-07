"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { LanguageToggle } from "./LanguageToggle";
import { Icon } from "./Icon";
import { useLanguage } from "./LanguageContext";

interface HeaderProps {
  showBack?: boolean;
  backHref?: string;
  title?: string;
  subtitle?: string;
}

export function Header({
  showBack = false,
  backHref = "/",
  title,
  subtitle,
}: HeaderProps) {
  const { t } = useLanguage();

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-surface/95 backdrop-blur-md pt-safe border-b border-thread shadow-subtle">
      <div className="h-14 px-4 max-w-[1200px] mx-auto flex items-center justify-between gap-2">
        <div className="flex items-center gap-2.5 min-w-0 flex-1">
          {showBack ? (
            <Link
              href={backHref}
              aria-label={t.back}
              className="w-11 h-11 -ml-1.5 flex items-center justify-center rounded-xl text-indigo hover:bg-linen active:scale-95 transition-all flex-shrink-0"
            >
              <Icon name="arrow_back" className="w-5 h-5 text-indigo" />
            </Link>
          ) : (
            <Link
              href="/"
              className="flex items-center gap-2 min-w-0 flex-shrink-0 group"
              aria-label="MM Fashion Home"
            >
              <div className="w-9 h-9 rounded-lg overflow-hidden bg-linen p-0.5 border border-thread/80 shadow-subtle flex-shrink-0 group-active:scale-95 transition-transform flex items-center justify-center">
                <Image
                  src={siteConfig.logo}
                  alt={`${siteConfig.name} Logo`}
                  width={36}
                  height={36}
                  className="w-full h-full object-contain rounded-md"
                  priority
                />
              </div>
            </Link>
          )}

          <div className="flex flex-col truncate min-w-0">
            <h1 className="font-heading font-bold text-base text-indigo leading-tight truncate">
              {title || t.brandName}
            </h1>
            <span className="text-xs text-text-muted truncate">
              {subtitle || t.merchantSubtitle}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2 flex-shrink-0">
          <LanguageToggle />
          <a
            href={`tel:${siteConfig.contact.phoneNumber.replace(/\s+/g, "")}`}
            aria-label={t.callMerchant}
            className="w-10 h-10 flex items-center justify-center rounded-xl text-indigo bg-indigo-mist hover:bg-thread/50 active:scale-95 transition-all"
          >
            <Icon name="call" className="w-4 h-4 text-indigo" />
          </a>
          {showBack && (
            <Link
              href="/"
              aria-label="MM Fashion Home"
              className="w-8 h-8 rounded-full overflow-hidden bg-surface border border-thread/80 shadow-subtle flex items-center justify-center flex-shrink-0 active:scale-95 transition-transform"
            >
              <Image
                src={siteConfig.logo}
                alt={`${siteConfig.name} Logo`}
                width={32}
                height={32}
                className="w-full h-full object-contain rounded-full"
              />
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}

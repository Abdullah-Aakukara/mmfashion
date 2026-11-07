"use client";

import React, { useState } from "react";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { Header } from "@/components/Header";
import { BottomNav } from "@/components/BottomNav";
import { LanguageProvider, useLanguage } from "@/components/LanguageContext";
import { Icon } from "@/components/Icon";
import { getWhatsAppLink } from "@/lib/whatsapp";

function AboutContent() {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(siteConfig.marketLocation.fullAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const whatsappHref = getWhatsAppLink({
    customMessage: `Hello ${siteConfig.name}, I am visiting Surat Ring Road market and would like to visit your godown / shop at ${siteConfig.marketLocation.market}.`,
  });

  const callHref = `tel:${siteConfig.contact.phoneNumber.replace(/\s+/g, "")}`;

  return (
    <div className="min-h-screen flex flex-col bg-canvas text-text-primary">
      <Header showBack={true} backHref="/" title={t.aboutUs} />

      <main className="flex-1 w-full pt-14 pb-28">
        {/* Top Trust Strip */}
        <section className="w-full bg-indigo-mist px-4 py-2 border-b border-thread/60">
          <div className="max-w-[768px] mx-auto flex items-center justify-between text-indigo text-xs font-medium">
            <div className="flex items-center gap-1.5">
              <Icon name="verified" className="w-4 h-4 text-zari" />
              <span>Est. {siteConfig.establishedYear} • Surat</span>
            </div>
            <span className="text-text-muted/40">•</span>
            <div className="flex items-center gap-1.5">
              <Icon name="storefront" className="w-4 h-4 text-indigo" />
              <span>Begum wadi Market</span>
            </div>
            <span className="text-text-muted/40">•</span>
            <div className="flex items-center gap-1.5">
              <Icon name="shipping" className="w-4 h-4 text-indigo" />
              <span>Pan-India Dispatch</span>
            </div>
          </div>
        </section>

        <div className="max-w-[768px] mx-auto px-4 pt-4 flex flex-col gap-4">
          {/* Merchant Identity Card */}
          <section className="bg-surface rounded-card border border-thread p-4 shadow-subtle flex flex-col gap-3 relative overflow-hidden">
            <div className="flex items-start gap-3">
              <div className="w-16 h-16 rounded-xl bg-linen p-1.5 flex items-center justify-center flex-shrink-0 shadow-subtle border border-thread">
                <Image
                  src={siteConfig.logo}
                  alt={`${siteConfig.name} Logo`}
                  width={64}
                  height={64}
                  className="w-full h-full object-contain rounded-lg"
                  priority
                />
              </div>
              <div className="flex flex-col min-w-0 flex-1">
                <span className="bg-zari-mist text-zari-text text-[11px] font-semibold px-2 py-0.5 rounded-full w-fit">
                  Viscose Fabric Lump &amp; Cutpiece Wholesaler
                </span>
                <h1 className="font-heading font-bold text-lg sm:text-xl text-indigo mt-0.5 truncate">
                  {siteConfig.name}
                </h1>
              </div>
            </div>

            <div className="flex flex-col gap-2.5">
              <p className="text-xs text-text-secondary leading-relaxed">
                Wholesale specialists in premium 100% Viscose fabrics, supplying both full lumps (Than rolls) and cut pieces directly from Surat&apos;s textile market. All varieties are woven Viscose-by-Viscose and strictly Ready-For-Dyeing (RFD / 100% Dyeable), including Natural Crepe, Chinon, Organza, Muslin, Chiffon, Georgette, and allied qualities.
              </p>
              <div className="flex flex-wrap gap-1.5">
                <span className="text-[10px] font-semibold px-2.5 py-0.5 rounded-full bg-linen text-indigo border border-thread/60">
                  Viscose × Viscose
                </span>
                <span className="text-[10px] font-semibold px-2.5 py-0.5 rounded-full bg-indigo-mist text-indigo border border-indigo-mist">
                  100% Dyeable (RFD)
                </span>
                <span className="text-[10px] font-semibold px-2.5 py-0.5 rounded-full bg-linen text-indigo border border-thread/60">
                  Lump &amp; Cut Piece Available
                </span>
              </div>
            </div>

            {/* Experience & Stock Stats */}
            <div className="grid grid-cols-2 gap-2 pt-1">
              <div className="bg-canvas rounded-lg p-2.5 flex items-center gap-2 border border-thread/50">
                <Icon name="verified" className="w-5 h-5 text-zari flex-shrink-0" />
                <div className="flex flex-col min-w-0">
                  <span className="text-[11px] text-text-muted">{t.tradingExp}</span>
                  <span className="font-heading font-bold text-sm text-indigo">
                    {siteConfig.tradeInfo.experienceYears}+ Years
                  </span>
                </div>
              </div>

              <div className="bg-canvas rounded-lg p-2.5 flex items-center gap-2 border border-thread/50">
                <Icon name="inventory" className="w-5 h-5 text-indigo flex-shrink-0" />
                <div className="flex flex-col min-w-0">
                  <span className="text-[11px] text-text-muted">{t.godownStock}</span>
                  <span className="font-heading font-bold text-sm text-indigo">
                    Ready Than Lots
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* Viscose Fabric Specialties Card */}
          <section className="bg-surface rounded-card border border-thread p-4 shadow-subtle flex flex-col gap-2.5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-indigo">
                <Icon name="architecture" className="w-5 h-5 text-indigo" />
                <h2 className="font-heading font-semibold text-sm">
                  Dyeable Viscose Specialties
                </h2>
              </div>
              <span className="text-xs bg-zari-mist text-zari-text px-2 py-0.5 rounded-full font-semibold">
                Lumps &amp; Cut Pieces
              </span>
            </div>

            <p className="text-xs text-text-secondary leading-relaxed">
              All items are 100% Viscose by Viscose, pre-tested for shrinkage and optimal dye affinity (Reactive, Acid &amp; Vat):
            </p>

            <div className="grid grid-cols-2 xs:grid-cols-3 gap-2 pt-1 text-center">
              {[
                "Natural Crepe",
                "Chinon",
                "Organza",
                "Muslin",
                "Chiffon",
                "Georgette",
              ].map((item) => (
                <div
                  key={item}
                  className="bg-canvas p-2.5 rounded-lg border border-thread/60 flex flex-col items-center justify-center"
                >
                  <span className="font-heading font-semibold text-xs text-indigo block">
                    {item}
                  </span>
                  <span className="text-[10px] text-text-muted mt-0.5">
                    Viscose × Viscose
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* Shop & Godown Location Card */}
          <section className="bg-surface rounded-card border border-thread shadow-subtle overflow-hidden">
            <div className="px-4 py-3 bg-linen/60 border-b border-thread flex items-center justify-between">
              <div className="flex items-center gap-2 text-indigo">
                <Icon name="location" className="w-5 h-5 text-indigo" />
                <h2 className="font-heading font-semibold text-sm">
                  Shop &amp; Godown Location
                </h2>
              </div>
              <span className="text-xs bg-zari-mist text-zari-text px-2 py-0.5 rounded-full font-semibold">
                {t.marketHub}
              </span>
            </div>

            <div className="p-4 flex flex-col gap-3">
              <div className="flex items-start gap-2.5">
                <Icon name="storefront" className="w-5 h-5 text-indigo mt-0.5 flex-shrink-0" />
                <div className="flex flex-col min-w-0">
                  <span className="text-sm font-semibold text-indigo">
                    {siteConfig.marketLocation.shop}, {siteConfig.marketLocation.market}
                  </span>
                  <span className="text-xs text-text-secondary mt-0.5">
                    {siteConfig.marketLocation.fullAddress}
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-thread/50 flex-wrap gap-2">
                <div className="flex items-center gap-1.5 text-text-secondary text-xs">
                  <Icon name="schedule" className="w-4 h-4 text-text-muted" />
                  <span>{t.businessHours}</span>
                </div>

                <button
                  type="button"
                  onClick={handleCopyAddress}
                  className="px-3 py-1.5 bg-linen text-indigo text-xs font-semibold rounded-btn border border-thread/60 active:bg-thread transition-all flex items-center gap-1.5"
                >
                  <Icon name={copied ? "check" : "copy"} className="w-3.5 h-3.5" />
                  <span>{copied ? t.copied : t.copyAddress}</span>
                </button>
              </div>
            </div>
          </section>

          {/* Instagram Link Banner */}
          <section>
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-surface rounded-card border border-thread p-3.5 shadow-subtle flex items-center justify-between gap-3 active:bg-linen transition-colors block"
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 flex items-center justify-center flex-shrink-0 text-white shadow-sm">
                  <Icon name="camera" className="w-5 h-5 text-white" />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="font-heading font-semibold text-sm text-indigo truncate">
                    {siteConfig.social.instagramHandle}
                  </span>
                  <span className="text-xs text-text-secondary truncate">
                    {t.instagramNotice}
                  </span>
                </div>
              </div>
              <Icon name="chevron_right" className="w-5 h-5 text-text-muted flex-shrink-0" />
            </a>
          </section>

          {/* Action CTAs */}
          <section className="flex flex-col gap-2.5 pt-2">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full h-cta min-h-cta bg-cta hover:bg-cta-pressed text-text-on-primary rounded-btn flex items-center justify-center gap-2 font-heading font-semibold text-sm shadow-sm transition-all active:scale-[0.98]"
            >
              <Icon name="whatsapp" className="w-5 h-5 text-text-on-primary" />
              <span>{t.chatWhatsApp}</span>
            </a>

            <a
              href={callHref}
              className="w-full h-cta min-h-cta bg-surface text-indigo rounded-btn border border-thread flex items-center justify-center gap-2 font-heading font-semibold text-sm shadow-subtle active:bg-linen transition-all active:scale-[0.98]"
            >
              <Icon name="call" className="w-5 h-5 text-indigo" />
              <span>
                {t.directDial}: {siteConfig.contact.displayPhone}
              </span>
            </a>
          </section>
        </div>
      </main>

      <BottomNav />
    </div>
  );
}

export function AboutClient() {
  return (
    <LanguageProvider>
      <AboutContent />
    </LanguageProvider>
  );
}


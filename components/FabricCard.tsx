"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Fabric } from "@/lib/types";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { Icon } from "./Icon";
import { useLanguage } from "./LanguageContext";

interface FabricCardProps {
  fabric: Fabric;
}

export function FabricCard({ fabric }: FabricCardProps) {
  const { t } = useLanguage();
  const [imageLoaded, setImageLoaded] = useState(false);

  const mainImage = fabric.images[0] || "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=800&q=80";

  // Specs line: width, GSM, weave
  const specParts = [
    fabric.width_inches ? `${fabric.width_inches}"` : undefined,
    fabric.gsm ? `${fabric.gsm} GSM` : undefined,
    fabric.weave,
  ].filter(Boolean);

  // Stock status text and style
  const getStockBadge = () => {
    switch (fabric.stock_status) {
      case "low_stock":
        return (
          <span className="text-xs px-2 py-0.5 rounded bg-madder-mist text-madder font-semibold">
            {t.lowStock}
          </span>
        );
      case "out_of_stock":
        return (
          <span className="text-xs px-2 py-0.5 rounded bg-madder-mist text-madder font-semibold">
            {t.outOfStock}
          </span>
        );
      case "in_stock":
      default:
        return (
          <span className="text-xs px-2 py-0.5 rounded bg-linen text-indigo font-medium">
            {t.inStock}
          </span>
        );
    }
  };

  const whatsappHref = getWhatsAppLink({
    fabricName: fabric.name,
    fabricId: fabric.id,
    moq: fabric.moq,
  });

  return (
    <article className="bg-surface rounded-card border border-thread shadow-subtle overflow-hidden flex flex-col justify-between group transition-shadow hover:shadow-md">
      <div className="p-3 pb-0 flex flex-col gap-2.5">
        {/* Fabric Image with Type & Width Badge */}
        <Link
          href={`/fabrics/${fabric.slug}/`}
          className="relative w-full aspect-square bg-linen rounded-xl overflow-hidden block focus:outline-none focus:ring-2 focus:ring-indigo"
          aria-label={`View details for ${fabric.name}`}
        >
          {!imageLoaded && (
            <div className="absolute inset-0 bg-linen animate-pulse" />
          )}

          <Image
            src={mainImage}
            alt={fabric.name}
            fill
            sizes="(max-width: 360px) 100vw, (max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className={`object-cover transition-transform duration-300 group-hover:scale-105 ${
              imageLoaded ? "opacity-100" : "opacity-0"
            }`}
            onLoad={() => setImageLoaded(true)}
            loading="lazy"
          />

          {/* Type Pill */}
          <div className="absolute top-2.5 left-2.5 pointer-events-none">
            <span className="text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-indigo text-text-on-primary shadow-subtle">
              {fabric.type}
            </span>
          </div>

          {/* Width Pill */}
          {fabric.width_inches && (
            <div className="absolute bottom-2.5 right-2.5 pointer-events-none">
              <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-surface/95 text-indigo shadow-subtle">
                {fabric.width_inches}&quot; {t.width}
              </span>
            </div>
          )}
        </Link>

        {/* Content Block */}
        <div className="flex flex-col gap-1">
          <Link
            href={`/fabrics/${fabric.slug}/`}
            className="hover:underline focus:outline-none"
          >
            <h2 className="font-heading font-semibold text-base text-indigo leading-snug line-clamp-2">
              {fabric.name}
            </h2>
          </Link>

          {specParts.length > 0 && (
            <p className="text-xs text-text-secondary leading-normal">
              {specParts.join(" • ")}
            </p>
          )}
        </div>

        {/* Pricing & Stock Status */}
        <div className="flex flex-col gap-2 pt-1">
          <div className="flex items-center justify-between gap-1 flex-wrap">
            {fabric.price_wholesale !== undefined ? (
              <div className="flex items-baseline gap-1">
                <span className="font-heading text-lg font-bold text-indigo">
                  ₹{fabric.price_wholesale}
                </span>
                <span className="text-xs text-text-secondary">{t.perMeter}</span>
              </div>
            ) : (
              <span className="text-xs text-text-muted italic">
                Wholesale on Request
              </span>
            )}

            {getStockBadge()}
          </div>

          {/* MOQ Badge */}
          {fabric.moq && (
            <div className="flex items-center gap-1.5">
              <span className="text-[11px] px-2.5 py-1 rounded-full bg-zari-mist border border-zari/30 text-zari-text font-medium flex items-center gap-1">
                <Icon name="inventory" className="w-3.5 h-3.5 text-zari" />
                <span>
                  {t.moq}: {fabric.moq}
                </span>
              </span>
            </div>
          )}
        </div>
      </div>

      {/* 52px Full-Width WhatsApp CTA Button */}
      <div className="p-3 pt-3">
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${t.inquireWhatsApp} for ${fabric.name}`}
          className="w-full h-cta min-h-cta rounded-btn bg-cta text-text-on-primary font-heading font-semibold text-sm flex items-center justify-center gap-2 shadow-sm transition-all hover:bg-cta-pressed active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-cta focus:ring-offset-2"
        >
          <Icon name="whatsapp" className="w-5 h-5 text-text-on-primary" />
          <span>{t.inquireWhatsApp}</span>
        </a>
      </div>
    </article>
  );
}


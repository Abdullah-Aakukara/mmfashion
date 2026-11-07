import React from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getAllFabrics, getFabricBySlug } from "@/lib/fabrics";
import { Header } from "@/components/Header";
import { ImageGallery } from "@/components/ImageGallery";
import { SpecTable } from "@/components/SpecTable";
import { StickyActionBar } from "@/components/StickyActionBar";
import { LanguageProvider } from "@/components/LanguageContext";
import { Icon } from "@/components/Icon";
import { siteConfig } from "@/config/site";

export const dynamicParams = false;

export async function generateStaticParams() {
  const fabrics = await getAllFabrics();
  return fabrics.map((fabric) => ({
    slug: fabric.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const fabric = await getFabricBySlug(slug);

  if (!fabric) {
    return {
      title: "Fabric Not Found",
    };
  }

  const desc =
    fabric.description ||
    `Direct mill raw cloth (Than) lot for ${fabric.name}. Wholesale Surat trade rates with 1-tap WhatsApp inquiry.`;

  return {
    title: fabric.name,
    description: desc,
    openGraph: {
      title: `${fabric.name} | MM Fashion Surat`,
      description: desc,
      images:
        fabric.images.length > 0
          ? [
              {
                url: fabric.images[0],
                alt: fabric.name,
              },
            ]
          : undefined,
    },
  };
}

export default async function FabricDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const fabric = await getFabricBySlug(slug);

  if (!fabric) {
    notFound();
  }

  // JSON-LD structured data for Google Product Rich Snippets
  const jsonLd: Record<string, unknown> = {
    "@context": "https://schema.org/",
    "@type": "Product",
    name: fabric.name,
    image: fabric.images,
    description: fabric.description || `${fabric.name} raw cloth Than from Surat.`,
    sku: fabric.id,
    brand: {
      "@type": "Brand",
      name: siteConfig.name,
      logo: `${siteConfig.siteUrl}/logo.jpg`,
    },
  };

  // Add offer only if wholesale price is present
  if (fabric.price_wholesale !== undefined) {
    jsonLd.offers = {
      "@type": "Offer",
      priceCurrency: "INR",
      price: fabric.price_wholesale,
      itemCondition: "https://schema.org/NewCondition",
      availability:
        fabric.stock_status === "in_stock"
          ? "https://schema.org/InStock"
          : fabric.stock_status === "low_stock"
          ? "https://schema.org/LimitedAvailability"
          : "https://schema.org/OutOfStock",
    };
  }

  return (
    <LanguageProvider>
      {/* Product JSON-LD Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen flex flex-col bg-canvas text-text-primary">
        <Header showBack={true} backHref="/" title={fabric.name} />

        <main className="flex-1 w-full pt-14 pb-28">
          <div className="max-w-[768px] mx-auto flex flex-col">
            {/* Swipeable Gallery */}
            <ImageGallery
              images={fabric.images}
              fabricName={fabric.name}
              type={fabric.type}
              composition={fabric.composition}
            />

            {/* Fabric Details Container */}
            <div className="px-4 pt-4 flex flex-col gap-4">
              {/* Title & SKU Block */}
              <div className="flex flex-col gap-1.5">
                <div className="flex items-center gap-2 flex-wrap">
                  <span
                    className={`text-xs px-2.5 py-0.5 rounded-full font-semibold ${
                      fabric.stock_status === "in_stock"
                        ? "bg-linen text-indigo"
                        : "bg-madder-mist text-madder"
                    }`}
                  >
                    {fabric.stock_status === "in_stock"
                      ? "Ready Godown Stock"
                      : fabric.stock_status === "low_stock"
                      ? "Limited Stock"
                      : "Sold Out"}
                  </span>
                  <span className="text-xs text-text-muted font-medium">
                    SKU: {fabric.id}
                  </span>
                </div>

                <h1 className="font-heading font-bold text-xl sm:text-2xl text-indigo leading-snug">
                  {fabric.name}
                </h1>

                {/* Multilingual Trade Badges */}
                <div className="flex items-center gap-2 text-text-secondary text-xs pt-0.5 flex-wrap">
                  <span className="bg-linen px-2 py-0.5 rounded text-indigo font-medium">
                    કાચું કાપડ
                  </span>
                  <span className="text-text-muted">•</span>
                  <span className="bg-linen px-2 py-0.5 rounded text-indigo font-medium">
                    कोरा थान
                  </span>
                  <span className="text-text-muted">•</span>
                  <span className="text-text-secondary">Export &amp; Dyeing Grade</span>
                </div>
              </div>

              {/* Wholesale Pricing Tier Grid (only if price is present) */}
              {fabric.price_wholesale !== undefined && (
                <div className="bg-surface rounded-card border border-thread p-3.5 shadow-subtle flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <Icon name="payments" className="w-4 h-4 text-zari" />
                      <span className="font-heading font-semibold text-sm text-indigo">
                        Wholesale Than Pricing
                      </span>
                    </div>
                    {fabric.moq && (
                      <div className="bg-zari-mist border border-zari/30 text-zari-text px-2 py-0.5 rounded-full text-xs font-semibold">
                        MOQ: {fabric.moq}
                      </div>
                    )}
                  </div>

                  <div className="grid grid-cols-2 gap-2.5">
                    {/* Tier 1: Wholesale Than */}
                    <div className="bg-indigo-mist/70 border border-indigo-mist rounded-xl p-3 flex flex-col items-center text-center">
                      <span className="bg-indigo text-text-on-primary text-[10px] uppercase px-2 py-0.5 rounded-full tracking-wider font-semibold mb-1">
                        Full Than (~90m)
                      </span>
                      <div className="flex items-baseline gap-0.5 my-1">
                        <span className="font-heading text-2xl font-bold text-indigo">
                          ₹{fabric.price_wholesale}
                        </span>
                        <span className="text-xs text-text-muted">/m</span>
                      </div>
                      <span className="text-[11px] text-indigo font-medium">
                        Best Wholesale Rate
                      </span>
                      <span className="text-[10px] text-text-secondary mt-0.5">
                        MOQ: {fabric.moq || "1 Than"}
                      </span>
                    </div>

                    {/* Tier 2: Retail / Cut Piece (if available) */}
                    <div className="bg-canvas rounded-xl p-3 flex flex-col items-center text-center border border-thread/60">
                      <span className="bg-linen text-text-secondary text-[10px] uppercase px-2 py-0.5 rounded-full tracking-wider font-semibold mb-1">
                        {fabric.buy_type === "than" ? "Sample Swatch" : "Cut Piece"}
                      </span>
                      <div className="flex items-baseline gap-0.5 my-1">
                        <span className="font-heading text-2xl font-bold text-indigo">
                          {fabric.price_retail !== undefined
                            ? `₹${fabric.price_retail}`
                            : "Quote"}
                        </span>
                        <span className="text-xs text-text-muted">/m</span>
                      </div>
                      <span className="text-[11px] text-text-secondary font-medium">
                        Testing / Sample
                      </span>
                      <span className="text-[10px] text-text-secondary mt-0.5">
                        {fabric.buy_type === "than"
                          ? "On Request"
                          : "Cut meters allowed"}
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {/* Technical Mill Specification Table */}
              <SpecTable fabric={fabric} />

              {/* Description Block (hidden if missing) */}
              {fabric.description && (
                <div className="bg-surface rounded-card border border-thread p-4 shadow-subtle flex flex-col gap-1.5">
                  <h3 className="font-heading font-semibold text-sm text-indigo">
                    Fabric Description
                  </h3>
                  <p className="text-xs text-text-secondary leading-relaxed whitespace-pre-line">
                    {fabric.description}
                  </p>
                </div>
              )}

              {/* Dispatch & Transport Logistics Card */}
              <div className="bg-surface rounded-card border border-thread p-4 shadow-subtle flex flex-col gap-2.5">
                <div className="flex items-center gap-2 text-indigo">
                  <Icon name="shipping" className="w-5 h-5 text-indigo" />
                  <h3 className="font-heading font-semibold text-sm">
                    Dispatch &amp; Logistics
                  </h3>
                </div>
                <p className="text-xs text-text-secondary leading-relaxed">
                  {siteConfig.tradeInfo.dispatchNotice}
                </p>
                <div className="flex items-center gap-2 pt-1 flex-wrap">
                  <span className="bg-linen text-indigo text-xs px-2.5 py-1 rounded-md font-medium">
                    Next-Day Godown Dispatch
                  </span>
                  <span className="bg-linen text-indigo text-xs px-2.5 py-1 rounded-md font-medium">
                    Bale Packing Available
                  </span>
                </div>
              </div>

              {/* Original Than Quality Guarantee */}
              <div className="bg-indigo-mist/70 border border-indigo-mist rounded-card p-3.5 flex items-start gap-3">
                <Icon
                  name="shield"
                  className="w-5 h-5 text-indigo flex-shrink-0 mt-0.5"
                />
                <div className="flex flex-col">
                  <h4 className="font-heading font-semibold text-xs text-indigo">
                    Original Than Quality Guarantee
                  </h4>
                  <p className="text-[11px] text-text-secondary mt-0.5 leading-relaxed">
                    Each than roll carries verified meterage and inspected fabric grade.
                    Swatch cuttings available for bulk lot matching prior to full transport dispatch.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Fixed Thumb-Reach Action Bar */}
        <StickyActionBar
          fabricName={fabric.name}
          fabricId={fabric.id}
          moq={fabric.moq}
        />
      </div>
    </LanguageProvider>
  );
}


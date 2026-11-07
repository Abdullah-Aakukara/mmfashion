"use client";

import React from "react";
import { Fabric } from "@/lib/types";
import { Icon } from "./Icon";
import { useLanguage } from "./LanguageContext";

interface SpecTableProps {
  fabric: Fabric;
}

export function SpecTable({ fabric }: SpecTableProps) {
  const { t } = useLanguage();

  const getBuyTypeLabel = () => {
    switch (fabric.buy_type) {
      case "cut_meter":
        return t.cutMeter;
      case "both":
        return t.bothThanCut;
      case "than":
      default:
        return t.than;
    }
  };

  const getStockStatusLabel = () => {
    switch (fabric.stock_status) {
      case "low_stock":
        return { text: t.lowStock, className: "text-madder font-semibold" };
      case "out_of_stock":
        return { text: t.outOfStock, className: "text-madder font-semibold" };
      case "in_stock":
      default:
        return { text: t.inStock, className: "text-indigo font-semibold" };
    }
  };

  // Build clean list of present specification rows
  const specRows: { label: string; value: React.ReactNode }[] = [];

  // Fabric Quality
  specRows.push({
    label: "Fabric Quality",
    value: fabric.name,
  });

  // Type
  if (fabric.type) {
    specRows.push({
      label: t.fabricTypeFilterLabel,
      value: fabric.type,
    });
  }

  // Composition
  if (fabric.composition) {
    specRows.push({
      label: t.composition,
      value: fabric.composition,
    });
  }

  // Width
  if (fabric.width_inches !== undefined) {
    specRows.push({
      label: `${t.width} (Pana)`,
      value: `${fabric.width_inches} Inches (${Math.round(fabric.width_inches * 2.54)} cm)`,
    });
  }

  // GSM
  if (fabric.gsm !== undefined) {
    specRows.push({
      label: `${t.gsm} (Fabric Weight)`,
      value: `${fabric.gsm} GSM`,
    });
  }

  // Weave
  if (fabric.weave) {
    specRows.push({
      label: t.weave,
      value: fabric.weave,
    });
  }

  // Buy Type
  specRows.push({
    label: t.buyType,
    value: getBuyTypeLabel(),
  });

  // MOQ
  if (fabric.moq) {
    specRows.push({
      label: t.moq,
      value: fabric.moq,
    });
  }

  // Wholesale Price
  if (fabric.price_wholesale !== undefined) {
    specRows.push({
      label: t.wholesaleRate,
      value: `₹${fabric.price_wholesale} ${t.perMeter}`,
    });
  }

  // Retail Price
  if (fabric.price_retail !== undefined) {
    specRows.push({
      label: t.retailRate,
      value: `₹${fabric.price_retail} ${t.perMeter}`,
    });
  }

  // Stock Status
  const stock = getStockStatusLabel();
  specRows.push({
    label: t.stockFilterLabel,
    value: <span className={stock.className}>{stock.text}</span>,
  });

  return (
    <div className="bg-surface rounded-card border border-thread overflow-hidden shadow-subtle flex flex-col">
      {/* Table Header */}
      <div className="px-4 py-3 bg-linen/60 border-b border-thread flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Icon name="architecture" className="w-5 h-5 text-indigo" />
          <h2 className="font-heading font-semibold text-sm text-indigo">
            {t.specifications}
          </h2>
        </div>
        <span className="text-[11px] font-bold uppercase tracking-wider text-text-secondary">
          Trade Standard
        </span>
      </div>

      {/* Rows */}
      <div className="divide-y divide-thread/60 text-xs">
        {specRows.map((row, idx) => (
          <div
            key={idx}
            className="flex items-center justify-between px-4 py-2.5 hover:bg-canvas/40 transition-colors"
          >
            <span className="text-text-secondary font-medium">{row.label}</span>
            <span className="text-indigo font-semibold text-right max-w-[60%] truncate">
              {row.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}


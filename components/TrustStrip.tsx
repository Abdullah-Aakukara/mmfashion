import React from "react";
import { siteConfig } from "@/config/site";
import { Icon } from "./Icon";

export function TrustStrip() {
  return (
    <section className="w-full bg-indigo-mist border-b border-thread/60 px-4 py-2">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between text-indigo text-xs font-medium overflow-x-auto gap-3 no-scrollbar">
        <div className="flex items-center gap-1.5 flex-shrink-0">
          <Icon name="verified" className="w-4 h-4 text-indigo flex-shrink-0" />
          <span>Est. {siteConfig.establishedYear} (Surat)</span>
        </div>

        <span className="text-text-muted/40 select-none">•</span>

        <div className="flex items-center gap-1.5 flex-shrink-0">
          <Icon name="storefront" className="w-4 h-4 text-indigo flex-shrink-0" />
          <span>Begum wadi, Ring Road</span>
        </div>

        {siteConfig.gstRegistered && (
          <>
            <span className="text-text-muted/40 select-none">•</span>
            <div className="flex items-center gap-1.5 flex-shrink-0">
              <Icon name="inventory" className="w-4 h-4 text-indigo flex-shrink-0" />
              <span>GST Registered</span>
            </div>
          </>
        )}

        <span className="text-text-muted/40 select-none">•</span>

        <div className="flex items-center gap-1.5 flex-shrink-0">
          <Icon name="shipping" className="w-4 h-4 text-indigo flex-shrink-0" />
          <span>Pan-India Transport</span>
        </div>
      </div>
    </section>
  );
}


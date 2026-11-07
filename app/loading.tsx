import React from "react";
import { Header } from "@/components/Header";
import { TrustStrip } from "@/components/TrustStrip";
import { FabricGridSkeleton } from "@/components/Skeletons";
import { LanguageProvider } from "@/components/LanguageContext";

export default function Loading() {
  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col bg-canvas text-text-primary">
        <Header />
        <main className="flex-1 w-full pt-14 pb-28">
          <TrustStrip />
          <div className="max-w-[1200px] mx-auto px-4 pt-4">
            <div className="h-8 w-48 bg-linen rounded-lg animate-pulse mb-4" />
            <FabricGridSkeleton count={8} />
          </div>
        </main>
      </div>
    </LanguageProvider>
  );
}


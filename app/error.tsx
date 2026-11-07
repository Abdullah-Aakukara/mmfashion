"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { LanguageProvider } from "@/components/LanguageContext";
import { Icon } from "@/components/Icon";
import { getWhatsAppLink } from "@/lib/whatsapp";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Application error:", error);
  }, [error]);

  const whatsappHref = getWhatsAppLink({
    customMessage:
      "Hello MM Fashion, I noticed an error on your website catalog. Can I inquire about fabric lots directly?",
  });

  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col bg-canvas text-text-primary">
        <Header showBack={true} backHref="/" title="Error" />

        <main className="flex-1 w-full max-w-md mx-auto px-4 pt-28 pb-16 flex flex-col items-center justify-center text-center">
          <div className="w-20 h-20 rounded-full bg-madder-mist flex items-center justify-center mb-4 text-madder border border-madder/20">
            <Icon name="info" className="w-8 h-8 text-madder" />
          </div>

          <span className="text-xs font-bold uppercase tracking-wider text-madder bg-madder-mist px-3 py-1 rounded-full mb-3">
            Temporary Issue
          </span>

          <h1 className="font-heading font-bold text-xl text-indigo mb-2">
            Something Went Wrong
          </h1>

          <p className="text-xs text-text-secondary max-w-xs mb-6 leading-relaxed">
            We couldn&apos;t load the catalog items right now. You can try reloading or reach out directly to the merchant on WhatsApp.
          </p>

          <div className="w-full flex flex-col gap-2.5">
            <button
              type="button"
              onClick={() => reset()}
              className="w-full h-cta min-h-cta rounded-btn bg-indigo text-text-on-primary font-heading font-semibold text-sm flex items-center justify-center gap-2 shadow-subtle active:scale-[0.98] transition-transform"
            >
              <span>Try Again</span>
            </button>

            <Link
              href="/"
              className="w-full h-cta min-h-cta rounded-btn bg-surface text-indigo border border-thread font-heading font-semibold text-sm flex items-center justify-center gap-2 shadow-subtle active:bg-linen"
            >
              <Icon name="grid" className="w-5 h-5 text-indigo" />
              <span>Back to Home</span>
            </Link>

            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full h-cta min-h-cta rounded-btn bg-cta text-text-on-primary font-heading font-semibold text-sm flex items-center justify-center gap-2 shadow-subtle hover:bg-cta-pressed active:scale-[0.98] transition-all"
            >
              <Icon name="whatsapp" className="w-5 h-5 text-text-on-primary" />
              <span>Contact on WhatsApp</span>
            </a>
          </div>
        </main>
      </div>
    </LanguageProvider>
  );
}


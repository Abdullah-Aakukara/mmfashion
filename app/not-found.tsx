import React from "react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { LanguageProvider } from "@/components/LanguageContext";
import { Icon } from "@/components/Icon";
import { getWhatsAppLink } from "@/lib/whatsapp";

export default function NotFound() {
  const whatsappHref = getWhatsAppLink({
    customMessage:
      "Hello MM Fashion, I was looking for a fabric lot on your catalog that seems to be missing. Could you please help me find it?",
  });

  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col bg-canvas text-text-primary">
        <Header showBack={true} backHref="/" title="Page Not Found" />

        <main className="flex-1 w-full max-w-md mx-auto px-4 pt-28 pb-16 flex flex-col items-center justify-center text-center">
          <div className="w-20 h-20 rounded-full bg-linen flex items-center justify-center mb-4 text-indigo shadow-subtle border border-thread">
            <Icon name="search" className="w-8 h-8 text-indigo" />
          </div>

          <span className="text-xs font-bold uppercase tracking-wider text-madder bg-madder-mist px-3 py-1 rounded-full mb-3">
            Error 404
          </span>

          <h1 className="font-heading font-bold text-xl text-indigo mb-2">
            Fabric or Page Not Found
          </h1>

          <p className="text-xs text-text-secondary max-w-xs mb-6 leading-relaxed">
            The fabric lot you are looking for may have been archived or the URL has changed.
            Our Surat godown has hundreds of fresh than rolls available.
          </p>

          <div className="w-full flex flex-col gap-2.5">
            <Link
              href="/"
              className="w-full h-cta min-h-cta rounded-btn bg-indigo text-text-on-primary font-heading font-semibold text-sm flex items-center justify-center gap-2 shadow-subtle active:scale-[0.98] transition-transform"
            >
              <Icon name="grid" className="w-5 h-5 text-text-on-primary" />
              <span>Browse Catalog</span>
            </Link>

            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full h-cta min-h-cta rounded-btn bg-cta text-text-on-primary font-heading font-semibold text-sm flex items-center justify-center gap-2 shadow-subtle hover:bg-cta-pressed active:scale-[0.98] transition-all"
            >
              <Icon name="whatsapp" className="w-5 h-5 text-text-on-primary" />
              <span>Ask Us on WhatsApp</span>
            </a>
          </div>
        </main>
      </div>
    </LanguageProvider>
  );
}


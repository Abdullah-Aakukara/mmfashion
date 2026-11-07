"use client";

import React, { useState, useEffect } from "react";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { Icon } from "./Icon";
import { useLanguage } from "./LanguageContext";

export function FloatingWhatsApp() {
  const { t } = useLanguage();
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (currentScrollY > lastScrollY && currentScrollY > 100) {
            // Scrolling down -> hide
            setVisible(false);
          } else {
            // Scrolling up -> show
            setVisible(true);
          }
          setLastScrollY(currentScrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const whatsappHref = getWhatsAppLink();

  return (
    <aside
      aria-label="Quick contact"
      className={`fixed bottom-20 right-4 z-40 transition-all duration-300 ease-out ${
        visible
          ? "translate-y-0 opacity-100 pointer-events-auto"
          : "translate-y-20 opacity-0 pointer-events-none"
      }`}
    >
      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t.chatWhatsApp}
        className="w-14 h-14 rounded-full bg-cta hover:bg-cta-pressed active:scale-95 text-text-on-primary shadow-lg flex items-center justify-center border-2 border-surface focus:outline-none focus:ring-2 focus:ring-cta focus:ring-offset-2 group transition-transform"
      >
        <Icon
          name="whatsapp"
          className="w-7 h-7 text-text-on-primary group-hover:scale-110 transition-transform"
        />
      </a>
    </aside>
  );
}


"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import {
  Language,
  translations,
  getSavedLanguage,
  saveLanguage,
  I18nLabels,
} from "@/lib/i18n";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: I18nLabels;
}

const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  setLanguage: () => {},
  t: translations.en,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLangState] = useState<Language>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = getSavedLanguage();
    if (saved && saved !== "en") {
      setLangState(saved);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLangState(lang);
    saveLanguage(lang);
  };

  // Render English during SSR and initial hydration to guarantee zero mismatch
  const currentLang = mounted ? language : "en";
  const t = translations[currentLang];

  return (
    <LanguageContext.Provider value={{ language: currentLang, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}


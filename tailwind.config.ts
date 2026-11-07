import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "360px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      colors: {
        // Design.md Core Palette
        canvas: "#F6F2EA",
        surface: "#FFFDF9",
        "surface-warm-white": "#FFFDF9",
        linen: "#EFE9DD",
        "surface-linen": "#EFE9DD",
        thread: "#E3DBCB",
        "border-thread": "#E3DBCB",
        indigo: {
          DEFAULT: "#1B2A4A",
          mist: "#E8ECF4",
        },
        "indigo-ink": "#1B2A4A",
        "indigo-mist": "#E8ECF4",

        // Design.md Text Roles
        "text-primary": "#1B2A4A",
        "text-secondary": "#566074",
        "text-muted": "#7A8294",
        "text-on-primary": "#FFFDF9",
        "text-inverse": "#FFFDF9",

        // Design.md Accents
        zari: {
          DEFAULT: "#B8862B",
          mist: "#F8EFD9",
          text: "#6B4A0E",
        },
        "zari-gold": "#B8862B",
        "zari-mist": "#F8EFD9",
        "zari-text": "#6B4A0E",

        madder: {
          DEFAULT: "#A63D2F",
          mist: "#F8E4E0",
        },
        "madder-red": "#A63D2F",
        "madder-mist": "#F8E4E0",

        // WhatsApp Action (strictly reserved)
        cta: {
          DEFAULT: "#0E7C4A",
          pressed: "#0A6139",
          tint: "#E3F3EA",
        },
        "cta-pressed": "#0A6139",
        "cta-tint": "#E3F3EA",
        "whatsapp-green": "#0E7C4A",
        "whatsapp-green-pressed": "#0A6139",
        "whatsapp-green-tint": "#E3F3EA",
      },
      fontFamily: {
        sans: [
          "var(--font-inter)",
          "var(--font-noto-gujarati)",
          "var(--font-noto-devanagari)",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
        heading: [
          "var(--font-plus-jakarta)",
          "var(--font-noto-gujarati)",
          "var(--font-noto-devanagari)",
          "sans-serif",
        ],
      },
      borderRadius: {
        card: "14px",
        btn: "12px",
      },
      boxShadow: {
        subtle: "0 1px 2px rgba(27, 42, 74, 0.06)",
        sheet: "0 -4px 20px rgba(27, 42, 74, 0.12)",
      },
      minHeight: {
        touch: "48px",
        cta: "52px",
      },
    },
  },
  plugins: [],
};

export default config;


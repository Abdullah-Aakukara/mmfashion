import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

const inter = localFont({
  src: [
    { path: "./fonts/inter-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "./fonts/inter-latin-500-normal.woff2", weight: "500", style: "normal" },
    { path: "./fonts/inter-latin-600-normal.woff2", weight: "600", style: "normal" },
  ],
  display: "swap",
  variable: "--font-inter",
  fallback: ["system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
});

const plusJakartaSans = localFont({
  src: [
    { path: "./fonts/plus-jakarta-sans-latin-600-normal.woff2", weight: "600", style: "normal" },
    { path: "./fonts/plus-jakarta-sans-latin-700-normal.woff2", weight: "700", style: "normal" },
  ],
  display: "swap",
  variable: "--font-plus-jakarta",
  fallback: ["system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
});

const notoGujarati = localFont({
  src: [
    { path: "./fonts/noto-sans-gujarati-gujarati-400-normal.woff2", weight: "400", style: "normal" },
    { path: "./fonts/noto-sans-gujarati-gujarati-500-normal.woff2", weight: "500", style: "normal" },
    { path: "./fonts/noto-sans-gujarati-gujarati-600-normal.woff2", weight: "600", style: "normal" },
  ],
  display: "swap",
  variable: "--font-noto-gujarati",
  fallback: ["system-ui", "sans-serif"],
});

const notoDevanagari = localFont({
  src: [
    { path: "./fonts/noto-sans-devanagari-devanagari-400-normal.woff2", weight: "400", style: "normal" },
    { path: "./fonts/noto-sans-devanagari-devanagari-500-normal.woff2", weight: "500", style: "normal" },
    { path: "./fonts/noto-sans-devanagari-devanagari-600-normal.woff2", weight: "600", style: "normal" },
  ],
  display: "swap",
  variable: "--font-noto-devanagari",
  fallback: ["system-ui", "sans-serif"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#FFFDF9",
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://mmfashion.pages.dev"),
  title: {
    default: "MM Fashion | Wholesale Raw Cloth (Than) Merchant | Surat",
    template: "%s | MM Fashion Surat",
  },
  description:
    "Mobile digital catalog for MM Fashion, raw cloth (Than) merchant in Begum wadi, Ring Road, Surat. Direct mill rates for Cotton, Rayon, Georgette, Silk, Viscose & Crepe.",
  keywords: [
    "Surat textile merchant",
    "Than wholesale",
    "Kora cotton Than",
    "Raw cloth merchant Surat",
    "Ring road cloth market",
    "MM Fashion Surat",
    "Modal rayon Than",
    "Direct mill fabric",
  ],
  authors: [{ name: "MM Fashion" }],
  icons: {
    icon: "/logo.jpg",
    apple: "/logo.jpg",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    siteName: "MM Fashion Surat",
    title: "MM Fashion | Wholesale Raw Cloth (Than) Merchant | Surat",
    description:
      "Direct mill raw fabric lots (Cotton, Rayon, Georgette, Silk) from Surat textile market. 1-tap WhatsApp inquiries.",
    images: [
      {
        url: "/logo.jpg",
        width: 1024,
        height: 1024,
        alt: "MM Fashion Textile Merchant Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MM Fashion | Surat Raw Cloth (Than) Merchant",
    description: "Wholesale & Retail Raw Fabric Catalog. Begum wadi, Ring Road, Surat.",
    images: ["/logo.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${plusJakartaSans.variable} ${notoGujarati.variable} ${notoDevanagari.variable}`}
    >
      <body className="bg-canvas text-text-primary antialiased min-h-screen flex flex-col selection:bg-indigo-mist selection:text-indigo">
        {children}
      </body>
    </html>
  );
}


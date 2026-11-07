import React from "react";
import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { AboutClient } from "./AboutClient";

export const metadata: Metadata = {
  title: "About MM Fashion | Surat Than Merchant",
  description: `About MM Fashion, wholesale raw cloth merchant established in 2002. Located at ${siteConfig.marketLocation.fullAddress}.`,
};

export default function AboutPage() {
  return <AboutClient />;
}


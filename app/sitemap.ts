import type { MetadataRoute } from "next";
import { getAllFabrics } from "@/lib/fabrics";

export const dynamic = "force-static";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = (
    process.env.NEXT_PUBLIC_SITE_URL || "https://mmfashion.pages.dev"
  ).replace(/\/$/, "");

  const fabrics = await getAllFabrics();

  const fabricEntries: MetadataRoute.Sitemap = fabrics.map((f) => ({
    url: `${baseUrl}/fabrics/${f.slug}/`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about/`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    ...fabricEntries,
  ];
}

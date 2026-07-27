import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";

/**
 * Single-URL sitemap (v2 §9 — "trivial in v1, ready to expand automatically
 * if/when future routes go live"). SITE_URL is a placeholder until the
 * domain is finalized (v3, Decision 3) — never hardcode a temporary domain
 * here.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}

import type { Metadata } from "next";
import { PERSON, SITE_NAME, SITE_URL } from "./constants";
import { getCanonicalUrl } from "./seo";

/**
 * Builds the single root Metadata object for the single-page site
 * (v2, Section 9 — "one root metadata export... no per-route metadata
 * needed since there's only one route").
 *
 * Copy sourced from 10_Portfolio_Copy_Master.md / 02_Home_Page_Content.md.
 * Nothing here is invented copy — if wording needs to change, change the
 * knowledge doc / this single function, not scattered <head> tags.
 */
export function buildRootMetadata(): Metadata {
  const title = `${PERSON.fullName} — ${PERSON.title}`;
  const description =
    "Designing user-centered digital experiences through thoughtful problem solving, visual communication, and continuous iteration.";
  const canonical = getCanonicalUrl("/");

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: title,
      template: `%s — ${SITE_NAME}`,
    },
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      type: "website",
      url: canonical,
      title,
      description,
      siteName: SITE_NAME,
      // OG image generation (next/og) is wired up in a later phase once
      // Figma-accurate visuals exist — not part of the foundation.
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    icons: {
      icon: "/favicon.ico",
    },
    authors: [{ name: PERSON.fullName, url: PERSON.linkedin }],
    keywords: [
      "UI/UX Designer",
      "Product Designer",
      "User-Centered Design",
      "Zavil Huda Quraishi",
      "Portfolio",
    ],
  };
}

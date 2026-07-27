import { PERSON, SITE_URL } from "./constants";
import { absoluteUrl } from "./utils";

/**
 * SEO helper utilities.
 *
 * These build the pieces (JSON-LD, canonical URL) that app/layout.tsx's
 * metadata config consumes. Kept separate from lib/metadata.ts so the
 * "what data" (this file) stays independent from "how Next.js wires it into
 * <head>" (metadata.ts) — no UI/rendering concerns here.
 *
 * All URLs route through SITE_URL (lib/constants.ts), which is placeholder
 * until the domain is finalized (v3, Decision 3). Nothing here hardcodes a
 * temporary domain.
 */

export function getCanonicalUrl(path = "/") {
  return absoluteUrl(path);
}

/**
 * schema.org Person structured data for the root page. Populated with
 * locked, verified facts only (resume-confirmed links/email) — nothing
 * invented.
 */
export function getPersonJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: PERSON.fullName,
    jobTitle: PERSON.title,
    email: `mailto:${PERSON.email}`,
    url: SITE_URL,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lucknow",
      addressCountry: "IN",
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Integral University, Lucknow",
    },
    sameAs: [PERSON.linkedin, PERSON.github],
  } as const;
}

import type { ReactNode } from "react";
import { Inter } from "next/font/google";
import { buildRootMetadata } from "@/lib/metadata";
import { getPersonJsonLd } from "@/lib/seo";
import { AppProviders } from "@/providers";
import "./globals.css";

/**
 * Font configuration.
 *
 * FOUNDATION-STAGE PLACEHOLDER: Inter is wired up via next/font (self-hosted,
 * zero layout shift, per the performance plan v2 §12) purely as
 * infrastructure so --font-display / --font-body resolve to something real.
 * This is NOT a typography decision — the approved Figma typefaces replace
 * this once exported per the locked Figma Inspection Workflow (v3,
 * Decision 1). Do not treat "Inter" as final.
 */
const displayFont = Inter({
  subsets: ["latin"],
  variable: "--font-display-temp",
  display: "swap",
});

const bodyFont = Inter({
  subsets: ["latin"],
  variable: "--font-body-temp",
  display: "swap",
});

export const metadata = buildRootMetadata();

export default function RootLayout({ children }: { children: ReactNode }) {
  const personJsonLd = getPersonJsonLd();

  return (
    <html lang="en" className={`${displayFont.variable} ${bodyFont.variable}`}>
      <body>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <a href="#main-content" className="skip-link focus-ring">
          Skip to content
        </a>
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}

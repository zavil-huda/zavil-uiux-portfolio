import type { NavItem } from "@/types/content";

/**
 * Anchor-based navigation for the single-page layout (v2 §1/§3 — replaces
 * the earlier multi-route nav plan).
 *
 * R1 (Design Restoration Sprint) — visible label set/order restored to
 * match the approved Figma header exactly: Home, Work, About, Journey,
 * Contact. This is a label/order restoration only: every underlying
 * section from the Master Prompt flow (Hero → Selected Work → About →
 * Experience → Editorial → Certifications → Contact → Footer) still
 * exists on the page unchanged and is still scroll-spy-tracked via
 * `sectionIds` below — "Visual Work" and "Certifications" simply no
 * longer have a dedicated top-level nav shortcut, matching the 5-item
 * nav shown in the approved Figma frames. Flagged for stakeholder
 * confirmation (see Known Issues) rather than decided silently.
 *
 * "Journey" points at the existing "#experience" section id — the Figma
 * "Journey" page corresponds to this build's Experience section — no new
 * anchor was introduced.
 */
export const navItems: NavItem[] = [
  { label: "Home", href: "#hero" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Journey", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

/** Section ids in document order — used by useScrollSpy. Unchanged in R1:
 * every section still exists and is still tracked, regardless of which
 * ones have a top-level nav shortcut. */
export const sectionIds = [
  "hero",
  "work",
  "about",
  "experience",
  "contact",
];

/**
 * Nav-bar right-side CTA. R1: restored to the approved Figma's "Let's
 * Connect ↗" (was previously an incorrect Resume-download button — the
 * Resume download action remains fully available via the Hero's existing
 * "Download Resume" secondary CTA, so no functionality is lost). Export
 * name intentionally left as `resumeNavItem` per the "do not rename"
 * project contract; only its content/behavior is restored.
 */
export const resumeNavItem = {
  label: "Let's Connect",
  href: "#contact",
  analyticsEvent: "Contact CTA Click",
} as const;

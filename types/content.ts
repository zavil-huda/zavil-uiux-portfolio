/**
 * Shared content types.
 *
 * Every file in `/content` is typed against these interfaces. This is what
 * makes "content separated from code" enforceable rather than a convention
 * that can quietly drift — e.g. `alt` text on `ImageAsset` is required, so a
 * missing alt tag is a type error, not a silent accessibility gap.
 *
 * No UI/styling concerns live here — this file only describes data shape.
 */

export interface ImageAsset {
  /** Path relative to /public, e.g. "/images/portrait/subject.png" */
  src: string;
  /** Required. Enforces alt text at the content layer per the a11y plan. */
  alt: string;
  width: number;
  height: number;
}

export interface CTA {
  label: string;
  href: string;
  /** Used by lib/analytics.ts to fire the correct locked event, if any. */
  analyticsEvent?: AnalyticsEventName;
  external?: boolean;
}

export interface NavItem {
  label: string;
  /** Anchor id on the single-page layout, e.g. "#about" */
  href: string;
}

export type CaseStudyStatus = "coming-soon" | "live";

export interface ProjectSummary {
  id: string;
  title: string;
  category: string;
  description: string;
  cover: ImageAsset;
  caseStudyStatus: CaseStudyStatus;
  /** Route reserved for a future standalone case study page (unlinked in v1). */
  futureRoute?: string;
}

export interface TimelineEntry {
  role: string;
  organization: string;
  duration: string;
  overview: string;
  responsibilities: string[];
  highlights?: string[];
}

export interface CertificationEntry {
  name: string;
  issuer: string;
  completionDate?: string;
  credentialUrl?: string;
  skills: string[];
}

export interface SocialLink {
  label: string;
  href: string;
  analyticsEvent?: AnalyticsEventName;
}

export interface ModalContent {
  id: "view-all-projects" | "case-study-coming-soon" | "currently-building";
  title: string;
  body: string;
  buttonLabel: string;
}

/**
 * Exactly the 8 locked analytics events (v3, Decision 4). Using a union type
 * here — rather than a free-form string — makes it a compile error to fire
 * an event that wasn't approved, which is the enforcement mechanism for
 * "do not add additional analytics events unless requested later."
 */
export type AnalyticsEventName =
  | "Resume Download"
  | "Email Click"
  | "GitHub Click"
  | "LinkedIn Click"
  | "View All Projects"
  | "View Case Study"
  | "Currently Building Modal"
  | "Contact CTA Click";

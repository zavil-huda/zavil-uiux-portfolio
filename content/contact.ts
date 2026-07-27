import { PERSON, RESUME_PATHS } from "@/lib/constants";
import type { SocialLink } from "@/types/content";

/**
 * Source: 09_Contact_Page.md (Locked), reconciled with:
 * - Locked official email (v3 §3 client feedback): contact.zavilhuda@gmail.com
 * - Contact system locked to mailto / tel / LinkedIn / GitHub only, no form,
 *   no API, no database (v2 §8, unchanged in v3).
 */

export const contactClosingStatement = {
  heading: "Let's Build Something Meaningful.",
  copy: "Whether you're building a new product, improving an existing experience, or looking for a UI/UX Designer who enjoys solving real problems, I'd be happy to connect. I'm always open to meaningful conversations, collaborations, and new opportunities.",
} as const;

export const availability = [
  "Full-time UI/UX opportunities",
  "Product Design roles",
  "Freelance projects (selective)",
  "Creative collaborations",
] as const;

export const contactInfo = {
  email: PERSON.email,
  emailHref: `mailto:${PERSON.email}`,
  phoneDisplay: PERSON.phone,
  phoneHref: PERSON.phoneHref,
  location: PERSON.location,
  locationNote: PERSON.locationNote,
} as const;

/**
 * "Portfolio" is intentionally omitted — the resume itself has no attached
 * Portfolio URL (confirmed: ATS resume states "Portfolio: available on
 * request"). This site is that portfolio; a self-referential link can be
 * added once the domain (v3 §3) is finalized. Behance is not included per
 * the source doc's own conditional language ("if active") — not confirmed
 * as active in any provided document.
 */
export const socialLinks: SocialLink[] = [
  { label: "LinkedIn", href: PERSON.linkedin, analyticsEvent: "LinkedIn Click" },
  { label: "GitHub", href: PERSON.github, analyticsEvent: "GitHub Click" },
];

export const resumeDownloads = {
  title: "Download Resume",
  premium: {
    label: "Premium Resume (PDF)",
    href: RESUME_PATHS.premium,
    analyticsEvent: "Resume Download",
  },
  // ATS resume is a project asset only — not linked from the public UI,
  // per locked instruction ("Keep the ATS version only as a project asset").
} as const;

/**
 * Contact section hero block — heading/copy/CTA/availability line.
 * Source: 06_Contact.png (Phase 7A visual source of truth for this
 * section's exact heading/copy/CTA — supersedes `closingStatement` /
 * `availability` above the same way earlier phases let their approved PNG
 * supersede the doc's literal copy, e.g. Experience.tsx combining two doc
 * sections into one per its PNG pair).
 *
 * FLAGGED: the approved PNG's eyebrow reads "Design Philosophy" — identical
 * to the eyebrow already used on the Experience section's second block
 * (content/experience.ts `designPhilosophyIntro.eyebrow`). Reproduced
 * verbatim here as instructed ("use the uploaded Contact PNG as the visual
 * source of truth"), not corrected to something like "Get In Touch",
 * because that would be inventing copy the PNG doesn't show. Worth
 * confirming with the source Figma before this ships — see the Phase 7A
 * report's Known Issues.
 */
export const contactHero = {
  eyebrow: "Contact",
  headingLine1: "Every great product",
  headingLine2: "starts with",
  headingAccent: "conversation.",
  copy: "If you believe we'd build something meaningful together, I'd love to hear from you.",
  cta: {
    label: "Start a Conversation",
    href: `mailto:${PERSON.email}`,
    analyticsEvent: "Contact CTA Click",
  },
  availabilityNote:
    "Currently open to full-time opportunities and freelance collaborations.",
} as const;

/**
 * Contact channel list — right-hand column on the Contact PNG. Reuses the
 * same locked facts as `contactInfo`/`socialLinks`/`resumeDownloads` above;
 * this is a display-shape wrapper for that data (label + shortened display
 * value + href + whether it opens externally), not new information.
 */
export interface ContactChannel {
  key: "email" | "linkedin" | "github" | "resume" | "location";
  label: string;
  value: string;
  href?: string;
  external?: boolean;
  download?: boolean;
  analyticsEvent?: SocialLink["analyticsEvent"];
}

export const contactChannels: ContactChannel[] = [
  {
    key: "email",
    label: "Email",
    value: PERSON.email,
    href: `mailto:${PERSON.email}`,
    analyticsEvent: "Email Click",
  },
  {
    key: "linkedin",
    label: "LinkedIn",
    value: "linkedin.com/in/zavil-huda-quraishi",
    href: PERSON.linkedin,
    external: true,
    analyticsEvent: "LinkedIn Click",
  },
  {
    key: "github",
    label: "GitHub",
    value: "github.com/zavil-huda",
    href: PERSON.github,
    external: true,
    analyticsEvent: "GitHub Click",
  },
  {
    key: "resume",
    label: "Resume",
    value: "Download Resume",
    href: RESUME_PATHS.premium,
    external: true,
    download: true,
    analyticsEvent: "Resume Download",
  },
  {
    key: "location",
    label: "Location",
    value: PERSON.location,
  },
];

export const finalCta = {
  heading: "Have an idea worth building?",
  subheading: "Let's create something simple, thoughtful, and meaningful together.",
  primaryButton: {
    label: "Get in Touch",
    href: `mailto:${PERSON.email}`,
    analyticsEvent: "Contact CTA Click",
  },
  secondaryButton: {
    label: "View Resume",
    href: RESUME_PATHS.premium,
    analyticsEvent: "Resume Download",
  },
} as const;

export const footer = {
  name: PERSON.fullName,
  title: PERSON.title,
  tagline:
    "Designed and developed with curiosity, continuous learning, and attention to detail.",
} as const;

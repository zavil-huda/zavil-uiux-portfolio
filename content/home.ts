/**
 * Source: 02_Home_Page_Content.md (Locked)
 * Drives the Hero / Selected Work preview / About preview / Experience
 * preview / Philosophy preview / Contact preview sections on the single-page
 * layout. Copy reproduced verbatim from the approved knowledge document,
 * except where the Figma/PNG export explicitly supersedes it per the locked
 * source-of-truth order (see inline notes below).
 */

import type { ImageAsset } from "@/types/content";
import { foodDeliveryCover } from "@/content/case-studies/food-delivery";
import { maazsterTechCover } from "@/content/case-studies/maazster-tech";

export const hero = {
  headline: "Zavil Huda Quraishi",
  title: "UI/UX Designer",
  // Approved Hero PNG / Figma copy (R1) — supersedes 02_Home_Page_Content.md's
  // "Designing user-centered..." wording, per the locked source-of-truth
  // order; approved for Sprint R1.
  supportingStatement:
    "I design intuitive digital experiences through thoughtful problem solving, visual communication, and continuous iterations.",
  // Figma Hero export uses "View My Work" — approved override of the
  // "View Case Studies" wording in 02_Home_Page_Content.md (Figma takes
  // priority per the locked source-of-truth order; explicitly approved).
  primaryCta: { label: "View My Work", href: "#work" },
  secondaryCta: {
    label: "Download Resume",
    href: "/resume/Zavil-Huda-UI-UX-Resume.pdf",
    analyticsEvent: "Resume Download",
  },
} as const;

/**
 * Cover reused verbatim (same src/alt/dimensions) from the "editorial-design"
 * category cover already approved in content/selected-work.ts — declared
 * again here, locally, rather than modifying that file to export it, since
 * this preview card is homepage-specific short-form content (same pattern
 * already used for the other two cards, whose case-study `category` field
 * is intentionally longer-form than their homepage card tag).
 */
const editorialMagazineCover: ImageAsset = {
  src: "/images/projects/editorial-committee-cover.png",
  alt: "'To The Horizon' university magazine — editorial layout spreads",
  width: 1774,
  height: 887,
};

export interface FeaturedProjectCard {
  id: string;
  /** Short category label shown above the title (e.g. "UI/UX Design"). */
  tag: string;
  title: string;
  description: string;
  cover: ImageAsset;
  ctaLabel: string;
}

/**
 * Selected Work PNG (Phase 4A visual source of truth for this section) uses
 * different heading/description copy than 02_Home_Page_Content.md's
 * "Selected Work" / "A curated collection..." wording — the Figma export
 * takes priority per the locked source-of-truth order, explicitly approved
 * for this phase. Card titles/descriptions are reproduced verbatim from the
 * PNG. Cover images are reused, not new, from the already-approved
 * case-study summaries.
 */
export const featuredWorkPreview = {
  eyebrow: "Featured Work",
  sectionTitle: "Selected Projects",
  description:
    "A selection of projects that showcase my approach to research, problem solving, interaction design, and visual communication.",
  viewAllCtaLabel: "View all projects",
} as const;

export const featuredWorkCards: FeaturedProjectCard[] = [
  {
    id: "food-delivery",
    tag: "UI/UX Design",
    title: "Food Delivery App",
    description:
      "Designed a modern food delivery experience focused on faster discovery, personalized recommendations, and a smoother ordering journey.",
    cover: foodDeliveryCover,
    ctaLabel: "View Case Study",
  },
  {
    id: "maazster-tech",
    tag: "Branding & Digital Design",
    title: "Maazster Tech",
    description:
      "Designed digital assets, business communication materials, and brand experiences while collaborating across design and marketing initiatives.",
    cover: maazsterTechCover,
    ctaLabel: "View Case Study",
  },
  {
    id: "editorial-magazine",
    tag: "Editorial Design",
    title: "To The Horizon Magazine",
    description:
      "Created editorial layouts and visual storytelling that transformed complex articles into engaging, easy-to-read magazine experiences.",
    cover: editorialMagazineCover,
    ctaLabel: "View Case Study",
  },
];

export const featuredWorkComingSoon = {
  title: "More projects\ncoming soon.",
  ctaLabel: "Currently Building",
} as const;

export const aboutPreview = {
  title: "About Me",
  copy: "I'm a UI/UX Designer with a Computer Science background who enjoys transforming complex ideas into intuitive digital experiences. I believe good design is simple, purposeful, and always centered around the user.",
  cta: { label: "Read More", href: "#about" },
} as const;

export const experiencePreview = {
  highlight: [
    "UI/UX Designer",
    "Creative Lead",
    "Maazster Tech Next-GenX Private Limited",
  ],
  shortCopy:
    "Contributing across UI/UX, branding, visual communication, and corporate design while collaborating on real-world digital products.",
} as const;

export const philosophyPreview = {
  title: "How I Think",
  quote: "Good design should reduce effort, not increase it.",
  supportingCopy:
    "Every project starts with understanding the problem before opening any design tool.",
  cta: { label: "Explore My Process", href: "#about" },
} as const;

export const contactPreview = {
  title: "Let's Build Something Meaningful",
  copy: "Whether you're building a product, improving an existing experience, or looking for a UI/UX Designer, I'd be happy to connect.",
  primaryCta: { label: "Get in Touch", href: "#contact" },
  secondaryCta: {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/zavil-huda-quraishi-8b6685250",
    analyticsEvent: "LinkedIn Click",
    external: true,
  },
} as const;

export const toneOfVoice = [
  "Calm",
  "Professional",
  "Honest",
  "Minimal",
  "Confident (without exaggeration)",
] as const;

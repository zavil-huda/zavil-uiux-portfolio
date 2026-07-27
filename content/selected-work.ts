import type { ImageAsset } from "@/types/content";

/**
 * Source: 07_Selected_Design_Work.md (Locked)
 * Powers the "Selected Design Work" section — presented as selected work,
 * not detailed UX case studies, per the source doc's explicit guidance.
 */

export const selectedWorkIntro =
  "Alongside UI/UX design, I have worked on branding, editorial design, corporate communication, and marketing assets. These experiences strengthened my visual thinking, information hierarchy, and communication skills, which continue to influence my product design work.";

export interface SelectedWorkCategory {
  id: string;
  name: string;
  purpose: string;
  examples: string[];
  cover?: ImageAsset;
}

export const selectedWorkCategories: SelectedWorkCategory[] = [
  {
    id: "brand-communication",
    name: "Brand Communication",
    purpose: "Create consistent visual communication across business touchpoints.",
    examples: [
      "Brand assets",
      "Social media creatives",
      "Campaign visuals",
      "Marketing graphics",
    ],
  },
  {
    id: "corporate-communication",
    name: "Corporate Communication",
    purpose:
      "Design professional business documents that communicate clearly and consistently.",
    examples: [
      "Company Profiles",
      "Brochures",
      "Quotations",
      "Pitch Decks",
      "Presentations",
    ],
    cover: {
      src: "/images/projects/maazster-tech-cover.png",
      alt: "Maazster Tech corporate communication and brand asset examples",
      width: 1774,
      height: 887,
    },
  },
  {
    id: "editorial-design",
    name: "Editorial Design",
    purpose: "Transform information into engaging visual stories.",
    examples: [
      "Student magazine layouts",
      "News articles",
      "Information-rich spreads",
      "The Line (NEOM) editorial feature",
    ],
    cover: {
      src: "/images/projects/editorial-committee-cover.png",
      alt: "'To The Horizon' university magazine — editorial layout spreads",
      width: 1774,
      height: 887,
    },
  },
  {
    id: "marketing-design",
    name: "Marketing Design",
    purpose: "Strong hierarchy, clear messaging, and visual impact.",
    examples: [
      "Posters",
      "Event Creatives",
      "Promotional Campaigns",
      "Digital Banners",
    ],
  },
];

export const selectedWorkSkills = [
  "Visual Communication",
  "Information Design",
  "Typography",
  "Editorial Layout",
  "Branding",
  "Presentation Design",
  "Marketing Design",
  "Content Hierarchy",
  "Print & Digital Design",
] as const;

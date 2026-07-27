import type { TimelineEntry } from "@/types/content";

/**
 * Source: 04_Experience.md (Locked) — dates cross-verified against the
 * approved Premium Resume PDF.
 */

export const timeline: TimelineEntry[] = [
  {
    role: "Creative Lead",
    organization: "Maazster Tech Next-GenX Private Limited",
    duration: "June 2026 — Present",
    overview:
      "After successfully completing my internship, I was entrusted with broader creative responsibilities and promoted to Creative Lead. My work expanded beyond interface design into planning, creative direction, documentation, branding, and team coordination.",
    responsibilities: [
      "Lead creative planning for internal initiatives",
      "Contribute to UI/UX design for digital products",
      "Develop branding and corporate communication assets",
      "Create brochures, quotations, presentations, and company profiles",
      "Support marketing campaigns through visual communication",
      "Coordinate with stakeholders and creative contributors",
      "Review ideas and improve design quality through iteration",
    ],
    highlights: [
      "Progressed from execution-focused tasks to ownership-driven responsibilities.",
      "Earned trust through curiosity, consistency, and initiative.",
      "Began contributing to planning alongside design execution.",
    ],
  },
  {
    role: "UI/UX Designer Intern",
    organization: "Maazster Tech Next-GenX Private Limited",
    duration: "Dec 2025 — May 2026",
    overview:
      "Started as a UI/UX Design Intern while contributing to branding, visual communication, and design research. The internship focused on learning, experimentation, and understanding how design supports real business goals.",
    responsibilities: [
      "Assisted with UI/UX design tasks",
      "Created branding and marketing assets",
      "Designed brochures, quotations, presentations, and company documents",
      "Participated in research and idea generation",
      "Contributed to visual communication initiatives",
      "Worked with cross-functional teams",
    ],
  },
];

export const workingStyle =
  "My approach combines structured thinking with creative exploration. Before designing, I spend time understanding the problem, exploring references, organizing ideas, and evaluating possible solutions. Feedback is treated as an opportunity to improve rather than criticism.";

export const toolsUsed = {
  design: ["Figma", "Adobe Photoshop", "Canva"],
  collaboration: ["Google Workspace", "Microsoft Office"],
  aiWorkflow: ["ChatGPT", "Claude", "Gemini"],
} as const;

export const skillsStrengthened = [
  "UI Design",
  "UX Thinking",
  "Visual Communication",
  "Branding",
  "Corporate Communication",
  "Presentation Design",
  "Editorial Design",
  "Collaboration",
  "Creative Leadership",
  "Problem Solving",
] as const;

export const keyTakeaway =
  "This experience shaped me from a learner into a designer who understands that successful products require collaboration, continuous improvement, and thoughtful communication—not just attractive interfaces.";

/**
 * ---------------------------------------------------------------------
 * Phase 6A addition — content actually rendered by the single-page
 * "Journey" section (anchor "#experience"). Source: the approved
 * 04_Journey.png + 05_Design_Philosophy.png pair (Phase 6A visual source
 * of truth — both PNGs share one nav/section context and are treated as
 * one continuous section per this phase's instruction).
 *
 * Same precedent as Phase 5A's `content/about.ts`: the `timeline` /
 * `TimelineEntry` export above is Phase 1 Foundation content reproduced
 * verbatim from 04_Experience.md and is left byte-for-byte unchanged
 * (nothing outside this file consumed it besides the stub this phase
 * replaces). The PNGs show a more compact, differently-shaped timeline
 * (short "Key Highlights" bullets instead of full responsibility lists, a
 * status badge, a 4-stat summary bar) with copy that doesn't appear
 * verbatim in any knowledge doc — per the locked source-of-truth order
 * this is reproduced verbatim from the PNGs, the same precedent already
 * used for Hero, Selected Work, and About.
 */

export const journeyIntro = {
  eyebrow: "Experience",
  heading: "Building products. Growing with every challenge.",
  paragraphs: [
    "My journey has been driven by curiosity, continuous learning, and solving real business problems through design. Each role has expanded not only my design skills but also my understanding of collaboration, leadership, and product thinking.",
  ],
} as const;

export interface JourneyMilestone {
  role: string;
  organization: string;
  duration: string;
  badge: "Internship" | "Current";
  overview: string;
  keyHighlights: string[];
}

/**
 * Order matches the PNG (earliest first — Intern, then Creative Lead),
 * which is the reverse of `timeline` above (Phase 1 content is newest-first).
 * Role title for the current position is reproduced verbatim from the PNG
 * ("UI/UX Designer & Creative Lead"), which differs from `timeline`'s
 * "Creative Lead" — kept distinct rather than reconciled, per the same
 * "PNG supersedes doc copy for this section" reasoning as the rest of
 * this addition.
 */
export const journeyMilestones: JourneyMilestone[] = [
  {
    role: "UI/UX Designer Intern",
    organization: "Maazster Tech Next GenX Pvt. Ltd.",
    duration: "Dec 2025 -\nMay 2026",
    badge: "Internship",
    overview:
      "Worked across UI/UX design, branding, business communication, and digital marketing assets. Collaborated with the team to design user-focused interfaces while contributing to brochures, quotations, presentations, and visual content for business growth.",
    keyHighlights: [
      "Designed responsive UI concepts and digital interfaces",
      "Contributed to business communication materials",
      "Created branding and marketing assets",
      "Collaborated with cross-functional teams",
    ],
  },
  {
    role: "UI/UX Designer & Creative Lead",
    organization: "Maazster Tech Next GenX Pvt. Ltd.",
    duration: "Jun 2026 -\nPresent",
    badge: "Current",
    overview:
      "Leading creative initiatives across UI/UX, branding, and digital strategy. Responsible for planning design direction, mentoring creative contributors, managing visual communication, and supporting product and marketing teams.",
    keyHighlights: [
      "Leading creative direction",
      "Supporting product and marketing initiatives",
      "Managing design workflows",
      "Driving AI-assisted creative workflows",
      "Building visual communication systems",
    ],
  },
];

export interface JourneyStat {
  value: string;
  label: string;
}

export const journeyStats: JourneyStat[] = [
  { value: "2 Roles", label: "Career Growth" },
  { value: "6+ Months", label: "Professional Experience" },
  { value: "UI/UX + Branding", label: "Core Expertise" },
  { value: "Cross-functional", label: "Collaboration" },
];

export const designPhilosophyIntro = {
  eyebrow: "Design Philosophy",
  heading: "Design is intentional. Always.",
  paragraphs: [
    "I believe good design begins long before the first pixel. It's empathy in action, clarity in thought, and a commitment to make things effortlessly usable.",
  ],
  signatureCaption: "UI/UX Designer",
} as const;

export interface DesignPhilosophyStep {
  number: string;
  title: string;
  description: string;
}

export const designPhilosophySteps: DesignPhilosophyStep[] = [
  {
    number: "01",
    title: "Understand Deeply",
    description:
      "I start by understanding the real problem, the people behind it, and the context. Right questions lead to meaningful solutions.",
  },
  {
    number: "02",
    title: "Simplify Intentionally",
    description:
      "I remove noise, focus on what matters, and design experiences that feel natural, intuitive, and effortless.",
  },
  {
    number: "03",
    title: "Iterate with Purpose",
    description:
      "I test, learn, refine, and improve. Every iteration brings us closer to seamless and impactful experiences.",
  },
  {
    number: "04",
    title: "AI Accelerates, Human Decides",
    description:
      "I use AI to research, ideate, and accelerate my workflow but final decisions are always driven by human empathy and judgment.",
  },
];

export const designPhilosophyPromise = {
  quote:
    "When users focus on their goal instead of the interface, the design has done its job.",
  label: "My Promise",
  body: "Every screen I design should solve a real problem, feel effortless to use, and leave users with clarity not confusion.",
} as const;

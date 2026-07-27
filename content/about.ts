/**
 * Source: 03_About_Page.md (Locked)
 * Copy reproduced verbatim from the approved knowledge document.
 */

import { PERSON } from "@/lib/constants";

export const aboutIntroduction = {
  heading: "Designing with Curiosity. Improving with Every Iteration.",
  copy: [
    "I'm Zavil Huda Quraishi, a UI/UX Designer with a Computer Science background who enjoys transforming complex problems into simple, intuitive digital experiences.",
    "My journey into design started through creative work for university initiatives, where I discovered that I could spend hours exploring layouts, refining ideas, and improving user experiences without losing interest.",
    "Today, I combine logical thinking with visual communication to build interfaces that are both functional and meaningful.",
  ],
} as const;

export const myJourney = {
  copy: [
    "My background in Computer Science gave me a structured way of thinking, while design gave me a way to solve problems creatively.",
    "Over time, I expanded beyond interface design into branding, editorial design, corporate communication, and creative leadership. Every project strengthened my belief that good design is less about decoration and more about clarity.",
  ],
} as const;

export const howIThink = {
  copy: [
    "Before opening Figma, I spend time understanding the problem.",
    "I observe existing experiences, collect references, ask questions, organize ideas, and explore multiple possibilities before deciding on a direction.",
    "I believe thoughtful decisions create better products than rushed execution.",
  ],
} as const;

export const designProcess = {
  steps: [
    "Observe",
    "Understand",
    "Research",
    "Explore",
    "Visualize",
    "Iterate",
    "Refine",
    "Deliver",
  ],
  copy:
    "Each iteration is an opportunity to simplify, improve usability, and create a more meaningful experience.",
} as const;

export const coreValues = [
  "User-first thinking",
  "Simplicity over complexity",
  "Continuous learning",
  "Feedback-driven improvement",
  "Purposeful visual communication",
] as const;

export const beyondDesign = {
  copy: [
    "Outside of UI/UX, I enjoy exploring new technologies, AI-assisted workflows, branding systems, and visual storytelling.",
    "I'm particularly interested in building products that improve healthcare, government services, and education through better digital experiences.",
  ],
} as const;

export const closingStatement = {
  copy: [
    "Design, for me, is an ongoing learning process.",
    "Every project teaches something new, every iteration uncovers a better solution, and every challenge is an opportunity to grow.",
  ],
} as const;

/**
 * ---------------------------------------------------------------------
 * Phase 5A addition — content actually rendered by the single-page
 * About section (anchor "#about").
 * ---------------------------------------------------------------------
 *
 * The seven exports above this line are Phase 1 Foundation content,
 * reproduced verbatim from 03_About_Page.md's full 7-part structure
 * (Introduction, My Journey, How I Think, Design Process, Core Values,
 * Beyond Design, Closing Statement). None of them are consumed by any
 * file as of Phase 5A — left untouched rather than deleted, since that
 * richer narrative content most plausibly belongs to a future
 * Experience/Journey-style section (the single-page nav already has a
 * separate "Experience" anchor), not this compact About section, and
 * removing already-approved Phase 1 content isn't this phase's call to
 * make.
 *
 * The approved About PNG (Phase 5A visual source of truth) shows a much
 * more compact section — eyebrow, one heading, two short paragraphs,
 * three quick stats, a pull quote, three "approach" highlights, and a
 * "Beyond Design" skill-chip bar — with different copy than
 * `aboutIntroduction.heading` above. Per the locked source-of-truth order
 * (Figma/PNG export takes priority over the knowledge doc where they
 * conflict, explicitly approved for this phase, same precedent already
 * used for Hero and Selected Work), the exports below reproduce the PNG's
 * copy verbatim.
 */

export const aboutMe = {
  eyebrow: "About Me",
  /** No trailing period — JSX adds it in accent color, same convention
   *  used for the Hero and Selected Work headings. */
  heading: "Designing with purpose, not just pixels",
  paragraphs: [
    "I'm a UI/UX Designer who loves turning ideas into meaningful digital experiences. My approach combines user research, clean design, and thoughtful details to create interfaces that are intuitive, accessible, and visually engaging.",
    "I enjoy working on projects that challenge me to think, solve problems, and create impact.",
  ],
  quote:
    "I believe great design is not just about how it looks, but how it works, feels, and solves real user problems.",
} as const;

export interface AboutStat {
  label: string;
  value: string;
}

/**
 * "Based in" reuses `PERSON.location` (already the locked fact in
 * lib/constants.ts) rather than repeating the string. "Experience" and
 * "Currently learning" are reproduced verbatim from the PNG — the latter
 * doesn't appear in any knowledge doc, only the PNG; noted here for the
 * record rather than silently absorbed.
 */
export const aboutStats: AboutStat[] = [
  { label: "Based in", value: PERSON.location },
  { label: "Experience", value: "6+ Months" },
  { label: "Currently learning", value: "AI + Data Analytics" },
];

export interface AboutApproachCard {
  title: string;
  description: string;
}

export const aboutApproachCards: AboutApproachCard[] = [
  {
    title: "My Approach",
    description:
      "I follow a user-centered approach that includes research, ideation, prototyping, and iteration to design solutions that truly connect with users.",
  },
  {
    title: "What I Do",
    description:
      "I design web and mobile interfaces, create design systems, build prototypes, and collaborate with teams to deliver high quality products.",
  },
  {
    title: "Always Learning",
    description:
      "I'm constantly learning, exploring new tools, and improving my skills to stay updated and bring innovative ideas into every project.",
  },
];

/**
 * Distinct name from the Foundation-stage `beyondDesign` export above
 * (different shape: that one is prose copy, this is the PNG's skill-chip
 * bar) — kept separate rather than overwritten, per the same reasoning
 * as the rest of this addition.
 */
export const aboutBeyondDesignSkills = {
  label: "Beyond Design",
  skills: [
    "Problem Solving",
    "Communication",
    "Leadership",
    "Creative Strategy",
    "AI Workflow",
    "Continuous Learning",
  ],
} as const;

import type { ImageAsset, ProjectSummary } from "@/types/content";

/**
 * Source: 06_Case_Study_Maazster_Tech.md (Foundation Draft, NDA-Friendly)
 *
 * NDA Statement (from source doc): Specific product names, screens, and
 * confidential business information are intentionally omitted to respect
 * confidentiality obligations. This case study demonstrates professional
 * process, responsibilities, and growth without disclosing protected
 * information.
 *
 * caseStudyStatus is "coming-soon" for the v1 launch — per the locked modal
 * behavior (v2 §4a), "View Case Study" opens the CaseStudyComingSoonModal
 * for this project until a dedicated page is built.
 */

export const maazsterTechCover: ImageAsset = {
  src: "/images/projects/maazster-tech-cover.png",
  alt: "Maazster Tech Next-GenX corporate website redesign — desktop, tablet, and mobile screens",
  width: 1774,
  height: 887,
};

export const maazsterTechSummary: ProjectSummary = {
  id: "maazster-tech",
  title: "Maazster Tech Next-GenX Private Limited",
  category: "Professional Experience (NDA-Friendly)",
  description:
    "Process-focused case study covering UI/UX contributions, branding, and creative leadership at Maazster Tech.",
  cover: maazsterTechCover,
  caseStudyStatus: "coming-soon",
  futureRoute: "/work/maazster-tech",
};

export const maazsterTechCaseStudy = {
  role: "UI/UX Designer → Creative Lead",
  duration: "December 2025 — Present",
  scope:
    "Professional work completed under NDA. This case study focuses on process, responsibilities, collaboration, and growth rather than confidential product details.",
  context:
    "I joined Maazster Tech as a UI/UX Design Intern and gradually expanded my responsibilities beyond interface design. Over time I contributed to branding, corporate communication, presentations, documentation, creative planning, and UI/UX initiatives while collaborating with cross-functional teams.",
  primaryResponsibilities: [
    "UI/UX design support",
    "Branding assets",
    "Corporate presentations",
    "Company profiles",
    "Brochures and quotations",
    "Marketing creatives",
    "Documentation",
    "Creative planning",
    "Team collaboration",
  ],
  roleEvolution: [
    {
      stage: "Internship",
      description: "Focused on learning, execution, research, and design exploration.",
    },
    {
      stage: "Growth",
      description:
        "Started contributing ideas, process improvements, and planning discussions.",
    },
    {
      stage: "Creative Lead",
      description:
        "Took ownership of broader creative initiatives, coordinated work, reviewed outputs, and helped shape communication assets while continuing design work.",
    },
  ],
  designApproach: [
    "Understand the business objective",
    "Identify the audience",
    "Research references",
    "Explore multiple directions",
    "Build visual concepts",
    "Gather feedback",
    "Refine through iteration",
    "Deliver production-ready assets",
  ],
  deliverableTypes: [
    "Corporate brochures",
    "Company profiles",
    "Quotations",
    "Presentation decks",
    "Marketing creatives",
    "Brand communication assets",
    "UI design contributions",
  ],
  biggestLearning:
    "Professional design is not only about creating attractive visuals. It requires balancing business goals, stakeholder expectations, user needs, deadlines, and collaboration.",
  challenges: [
    "Working across multiple design domains",
    "Switching between branding and UI work",
    "Maintaining visual consistency",
    "Handling feedback from different stakeholders",
    "Prioritising work under deadlines",
  ],
  skillsStrengthened: [
    "UI Design",
    "Visual Communication",
    "Branding",
    "Corporate Design",
    "Presentation Design",
    "Collaboration",
    "Creative Leadership",
    "Problem Solving",
    "Communication",
  ],
  reflection:
    "This experience changed the way I approach design. I became more comfortable with ownership, cross-functional collaboration, structured thinking, and iterative improvement.",
} as const;

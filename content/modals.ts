import type { ModalContent } from "@/types/content";

/**
 * Locked modal copy — v3, Decision 2. Reproduced EXACTLY as approved.
 * Do not paraphrase or edit this content without explicit client approval.
 */

export const viewAllProjectsModal: ModalContent = {
  id: "view-all-projects",
  title: "More Projects Are on the Way",
  body: "I'm continuously expanding this portfolio with carefully documented UX case studies, product explorations, and creative work. Every project will be published only after reaching the same quality standard as the rest of this portfolio.",
  buttonLabel: "Close",
};

export const caseStudyComingSoonModal: ModalContent = {
  id: "case-study-coming-soon",
  title: "Case Study Coming Soon",
  body: "This project is currently being documented in detail. The complete design process, research, UX decisions, iterations, prototypes, and final outcomes will be available soon. Thank you for your patience.",
  buttonLabel: "Close",
};

export const currentlyBuildingModal: ModalContent = {
  id: "currently-building",
  title: "Currently Building",
  body: "I'm actively working on new product experiences, AI-focused interfaces, dashboards, and additional UX case studies. These projects will be published after documentation, validation, and final review.",
  buttonLabel: "Close",
};

export const modalsById = {
  "view-all-projects": viewAllProjectsModal,
  "case-study-coming-soon": caseStudyComingSoonModal,
  "currently-building": currentlyBuildingModal,
} as const;

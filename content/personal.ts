import type { ImageAsset } from "@/types/content";
import { PERSON } from "@/lib/constants";

/**
 * Source: 01_Personal_Brand_Foundation.md (Locked)
 * Copy reproduced verbatim from the approved knowledge document — nothing
 * paraphrased or invented.
 */
export const personal = {
  fullName: PERSON.fullName,
  title: PERSON.title,
  positioningStatement:
    "A UI/UX Designer with a Computer Science background who specializes in creating user-centered digital experiences through thoughtful problem solving, visual communication, and continuous iteration.",
  mission:
    "I believe technology should make people's lives easier—not more complicated. My goal is to transform complex ideas into simple, meaningful, and visually engaging digital experiences that people can understand and use with confidence.",
  philosophy: "Good design solves problems before it decorates.",
  corePrinciples: [
    "Solve Before Styling",
    "User First",
    "Iterate Relentlessly",
    "Design With Purpose",
    "AI Enhances Creativity (never replaces thinking)",
  ],
  designProcess: [
    "Observe",
    "Understand",
    "Research",
    "Think",
    "Explore",
    "Generate Ideas",
    "Visualize",
    "Iterate",
    "Refine",
    "Deliver",
  ],
  strengths: [
    "User-Centered Thinking",
    "Observation",
    "Visual Communication",
    "Information Simplification",
    "Iterative Design",
    "Problem Solving",
    "Curiosity",
    "Ownership",
    "Continuous Learning",
  ],
  preferredDomains: ["Healthcare", "Government Services", "Education"],
} as const;

export const portrait: ImageAsset = {
  src: "/images/portrait/portrait.png",
  alt: "Portrait of Zavil Huda Quraishi, UI/UX Designer",
  width: 1142,
  height: 1127,
};

export const brandMark: ImageAsset = {
  src: "/images/brand/signature.png",
  alt: "Zavil — signature logotype",
  width: 1536,
  height: 1024,
};

export const brandMonogram: ImageAsset = {
  src: "/images/brand/logo.png",
  alt: "ZH monogram mark",
  width: 96,
  height: 45,
};

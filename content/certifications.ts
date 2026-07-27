import type { CertificationEntry } from "@/types/content";

/**
 * Source: 08_Certifications.md (Locked) — credential links verified and
 * pulled directly from the approved Premium Resume PDF's embedded
 * hyperlinks.
 */

export const learningPhilosophy =
  "I believe learning is an ongoing process. Courses and certifications help me strengthen my fundamentals, discover new workflows, and continuously improve how I approach design problems. My goal is not to collect certificates, but to apply what I learn in real projects.";

export const certifications: CertificationEntry[] = [
  {
    name: "Google UX Design Professional Certificate",
    issuer: "Google",
    credentialUrl:
      "https://drive.google.com/file/d/144jO6XlpPi9SCTPQckPHcCuh3_JHT6vB/view?usp=drive_link",
    skills: [
      "UX Research",
      "Wireframing",
      "Prototyping",
      "User Flows",
      "Accessibility",
      "Design Process",
    ],
  },
  {
    name: "IBM Designing User Interfaces & Experiences",
    issuer: "IBM",
    credentialUrl:
      "https://drive.google.com/file/d/1wbrX6ACxWHpyYrN_qeiZpOHsz0umoR_O/view?usp=drive_link",
    skills: [
      "Interface Design",
      "UX Principles",
      "Information Architecture",
      "User Experience",
    ],
  },
  {
    name: "IBM Generative AI for UI/UX Design Specialization",
    issuer: "IBM",
    skills: [
      "AI-assisted UX workflows",
      "Prompting",
      "Ideation",
      "Productivity",
      "Design Exploration",
    ],
  },
  {
    name: "Xbox Graphic Designer Professional Certificate",
    issuer: "Xbox",
    credentialUrl:
      "https://drive.google.com/file/d/1jjsuDDWY_wqUVYKGqw5DL9rPi54T1fhx/view?usp=drive_link",
    skills: ["Branding", "Typography", "Layout", "Visual Hierarchy", "Creative Design"],
  },
];

export const skillsReinforced = [
  "UX Design",
  "UI Design",
  "Wireframing",
  "Prototyping",
  "Accessibility",
  "Information Architecture",
  "Typography",
  "Visual Hierarchy",
  "Branding",
  "AI-assisted Design",
] as const;

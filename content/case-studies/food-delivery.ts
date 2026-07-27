import type { ImageAsset, ProjectSummary } from "@/types/content";

/**
 * Source: 05_Case_Study_Food_Delivery.md (Content Locked, UI Pending)
 *
 * Portfolio Note (from source doc): Do not present this project as a
 * redesign of Zomato or Swiggy. Always describe it as a Self-Directed
 * Concept UI/UX Case Study inspired by real-world food ordering behaviour.
 *
 * caseStudyStatus is "coming-soon" for the v1 launch — per the locked modal
 * behavior (v2 §4a), "View Case Study" opens the CaseStudyComingSoonModal
 * for this project until a dedicated page is built.
 */

export const foodDeliveryCover: ImageAsset = {
  src: "/images/projects/food-delivery-cover.png",
  alt: "QuickBite food delivery app concept — home, restaurant, and order tracking screens",
  width: 1774,
  height: 887,
};

export const foodDeliverySummary: ProjectSummary = {
  id: "food-delivery",
  title: "Food Delivery App",
  category: "Self-Directed Concept UI/UX Case Study",
  description:
    "A modern food delivery concept designed to reduce search effort and prioritize familiar choices for repeat users.",
  cover: foodDeliveryCover,
  caseStudyStatus: "coming-soon",
  futureRoute: "/work/food-delivery",
};

export const foodDeliveryCaseStudy = {
  projectType: "Self-Directed Concept Project",
  duration: "Personal Learning Project",
  role: "UI/UX Designer",
  tools: ["Figma", "AI-assisted ideation", "Pinterest", "Google"],
  background:
    "Living in a hostel made food delivery apps part of my daily routine, especially during exams when schedules became unpredictable. Using these products regularly made me think about how repeat users discover food and whether frequent ordering could become faster and more personalized. That curiosity became the starting point of this project.",
  problemStatement:
    "Regular users often reorder similar meals or restaurants. However, finding those familiar choices can still require unnecessary browsing. How might we reduce the effort required for repeat ordering while keeping the experience clean and intuitive?",
  goals: [
    "Reduces search effort",
    "Prioritizes familiar choices",
    "Maintains a clean interface",
    "Makes ordering feel faster for returning users",
  ],
  myRole: [
    "Problem exploration",
    "Competitive observation",
    "UX thinking",
    "Information architecture",
    "UI Design",
    "Prototyping",
    "Visual refinement",
  ],
  userAssumptions: [
    "Frequently order food online",
    "Have preferred restaurants",
    "Reorder similar meals",
    "Want to complete ordering quickly",
  ],
  designApproach:
    "Rather than redesigning an existing brand, I explored my own concept. The key idea was simple: instead of making users repeatedly search for familiar food, surface relevant recommendations based on previous ordering behaviour.",
  process: [
    "Observe personal usage patterns",
    "Explore existing products",
    "Gather inspiration",
    "Sketch ideas",
    "Design core screens",
    "Iterate layouts",
    "Refine visual hierarchy",
  ],
  keyScreens: [
    "Home",
    "Restaurant Listing",
    "Food Details",
    "Item Customization",
    "Cart",
    "Checkout",
    "Order Tracking",
  ],
  biggestChallenge:
    "The Home screen required the most exploration because it needed to balance recommendations, discovery, and clarity. The customization screen was another challenge because multiple options had to remain easy to understand without overwhelming users.",
  designDecisions: [
    "Prioritize previously ordered content",
    "Reduce unnecessary browsing",
    "Keep navigation familiar",
    "Maintain strong visual hierarchy",
    "Focus on readability",
  ],
  whatILearned: [
    "Good UX begins with understanding behaviour.",
    "Small improvements can reduce friction.",
    "Iteration produces stronger outcomes than the first solution.",
  ],
  reflection:
    "If I rebuilt this project today, I would conduct structured user interviews, validate assumptions, and strengthen accessibility before finalizing the interface. The project remains an important milestone because it marked the transition from designing interfaces to thinking about user behaviour.",
} as const;

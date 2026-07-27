"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/animations/variants";
import { getTransition, sectionRevealTransition } from "@/animations/transitions";
import { useMotionPreference } from "@/providers";

/**
 * PageTransition — the single-page-site equivalent of a route transition
 * (v2 §1 revision: "wraps section reveal choreography rather than route
 * transitions"). Applied once around the whole page shell in app/page.tsx
 * so the initial mount fades in consistently; this is shell-level motion,
 * not per-section content animation (that's what <Reveal> is for, applied
 * once sections are built out).
 */
export interface PageTransitionProps {
  children: ReactNode;
}

export function PageTransition({ children }: PageTransitionProps) {
  const prefersReducedMotion = useMotionPreference();

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      transition={getTransition(sectionRevealTransition, prefersReducedMotion)}
    >
      {children}
    </motion.div>
  );
}

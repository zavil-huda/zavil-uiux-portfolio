"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { fadeUp, defaultViewport } from "@/animations/variants";
import { getTransition, sectionRevealTransition } from "@/animations/transitions";
import { useMotionPreference } from "@/providers";

/**
 * Reveal — the shared scroll-reveal primitive (v2 §6 "single shared
 * animations/variants.ts... every section uses the same motion language").
 *
 * This is infrastructure for when sections are built out in a later phase —
 * they will wrap their content in <Reveal> instead of each writing its own
 * whileInView boilerplate. Not applied inside any section stub yet, per
 * "do not build page content" for this phase.
 */
export interface RevealProps {
  children: ReactNode;
  /** Stagger delay in seconds, for sequenced reveals within a section. */
  delay?: number;
  as?: "div" | "li";
}

export function Reveal({ children, delay = 0, as = "div" }: RevealProps) {
  const prefersReducedMotion = useMotionPreference();
  const MotionTag = as === "li" ? motion.li : motion.div;

  return (
    <MotionTag
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      variants={fadeUp}
      transition={{
        ...getTransition(sectionRevealTransition, prefersReducedMotion),
        delay: prefersReducedMotion ? 0 : delay,
      }}
    >
      {children}
    </MotionTag>
  );
}

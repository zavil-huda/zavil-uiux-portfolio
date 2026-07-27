"use client";

import { motion } from "framer-motion";
import { useMotionPreference } from "@/providers";

/**
 * ScrollIndicator — animated hero scroll cue (v2 §4). Styled and animated
 * now as a reusable primitive; not wired into the Hero section yet (Hero
 * content is out of scope for this phase).
 */
export function ScrollIndicator() {
  const prefersReducedMotion = useMotionPreference();

  return (
    <div data-component="ScrollIndicator" aria-hidden="true" className="flex justify-center">
      <motion.span
        data-part="indicator"
        className="block h-10 w-px bg-border-strong"
        animate={prefersReducedMotion ? undefined : { y: [0, 10, 0], opacity: [1, 0.3, 1] }}
        transition={prefersReducedMotion ? undefined : { duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

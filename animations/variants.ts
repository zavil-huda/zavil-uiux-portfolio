import type { Variants } from "framer-motion";

/**
 * Shared Framer Motion variant presets (v2 §6).
 *
 * This is the "one shared motion language" referenced in the animation
 * strategy — every section/component that animates later should reference
 * these named variants instead of writing bespoke one-off animation objects.
 *
 * FOUNDATION-STAGE NOTE: these are defined but not yet applied anywhere.
 * No section, Hero, Navbar, or modal in this phase uses them — that's
 * explicit UI/animation work reserved for later phases.
 */

export const EDITORIAL_EASE = [0.65, 0, 0.35, 1] as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EDITORIAL_EASE },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease: EDITORIAL_EASE },
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

export const hoverLift: Variants = {
  rest: { y: 0 },
  hover: {
    y: -4,
    transition: { duration: 0.25, ease: EDITORIAL_EASE },
  },
};

/**
 * Default viewport config for `whileInView` scroll reveals, shared so every
 * section triggers its reveal at the same scroll threshold.
 */
export const defaultViewport = {
  once: true,
  margin: "-10% 0px -10% 0px",
} as const;

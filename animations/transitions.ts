import type { Transition } from "framer-motion";
import { EDITORIAL_EASE } from "./variants";

/**
 * Shared transition presets, separate from variants.ts so timing/easing can
 * be reused across variants, modal open/close, and the section-reveal
 * "PageTransition" wrapper without duplicating easing curves.
 *
 * Not applied to any UI in this foundation phase — infrastructure only.
 */

export const sectionRevealTransition: Transition = {
  duration: 0.6,
  ease: EDITORIAL_EASE,
};

/**
 * Used by the shared Modal shell (v2 §4a) for all three locked modals, so
 * they share identical open/close motion per the Master Prompt's
 * "consistent modal animations" rule.
 */
export const modalTransition: Transition = {
  duration: 0.3,
  ease: EDITORIAL_EASE,
};

export const instantTransition: Transition = {
  duration: 0,
};

/**
 * Returns the appropriate transition given the user's reduced-motion
 * preference (see hooks/useReducedMotion.ts) — animated components will
 * call this rather than branching ad hoc.
 */
export function getTransition(
  base: Transition,
  prefersReducedMotion: boolean,
): Transition {
  return prefersReducedMotion ? instantTransition : base;
}

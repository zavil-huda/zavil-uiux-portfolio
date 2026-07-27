"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useFirstVisitLoader } from "@/hooks/useFirstVisitLoader";
import { useMotionPreference } from "@/providers";
import { getTransition, sectionRevealTransition } from "@/animations/transitions";
import { brandMark } from "@/content/personal";
import { ResponsiveImage } from "@/components/media/ResponsiveImage";

/**
 * FirstVisitLoader — session-gated intro loader (v2 §6a, locked spec).
 * Shows only once per browser session via sessionStorage (see
 * useFirstVisitLoader).
 *
 * Phase 2: styled as a full-screen overlay using the token system, with a
 * short auto-dismissing reveal of the brand signature mark. This is
 * intentionally simple chrome, not a designed sequence — the real intro
 * treatment (timing, choreography, exact mark animation) should be
 * confirmed against Figma once that section is exported, per the locked
 * inspection workflow (v3, Decision 1). Respects prefers-reduced-motion by
 * skipping straight to the dismissed state instead of forcing a delay.
 */
const AUTO_DISMISS_MS = 1400;

export function FirstVisitLoader() {
  const { shouldShowLoader, isResolved, markLoaderComplete } = useFirstVisitLoader();
  const prefersReducedMotion = useMotionPreference();
  const isVisible = isResolved && shouldShowLoader && !prefersReducedMotion;

  useEffect(() => {
    if (!isVisible) return;
    const timer = window.setTimeout(markLoaderComplete, AUTO_DISMISS_MS);
    return () => window.clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isVisible]);

  useEffect(() => {
    // Reduced-motion users: mark complete immediately, no forced overlay.
    if (isResolved && shouldShowLoader && prefersReducedMotion) {
      markLoaderComplete();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isResolved, shouldShowLoader, prefersReducedMotion]);

  return (
    <AnimatePresence>
      {isVisible ? (
        <motion.div
          data-component="FirstVisitLoader"
          role="status"
          aria-live="polite"
          className="fixed inset-0 z-loader flex items-center justify-center bg-background"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={getTransition(sectionRevealTransition, prefersReducedMotion)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.65, 0, 0.35, 1] }}
            className="w-40"
          >
            <ResponsiveImage asset={brandMark} priority sizes="160px" />
            <span className="visually-hidden">Loading portfolio</span>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

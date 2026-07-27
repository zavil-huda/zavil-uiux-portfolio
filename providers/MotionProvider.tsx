"use client";

import { createContext, useContext, type ReactNode } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

/**
 * MotionProvider — the one cross-cutting Context called for in the state
 * management plan (v2 §8): "a small Context only if truly cross-cutting,
 * e.g. a MotionPreferenceContext if prefers-reduced-motion needs to be read
 * in many unrelated components." Sections/components read this instead of
 * each calling useReducedMotion independently.
 *
 * FOUNDATION STUB: provider plumbing only, not consumed by any UI yet.
 */
const MotionPreferenceContext = createContext<boolean>(false);

export function MotionProvider({ children }: { children: ReactNode }) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <MotionPreferenceContext.Provider value={prefersReducedMotion}>
      {children}
    </MotionPreferenceContext.Provider>
  );
}

export function useMotionPreference() {
  return useContext(MotionPreferenceContext);
}

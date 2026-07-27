"use client";

import { useEffect } from "react";

/**
 * Locks body scroll while `locked` is true — used by the shared Modal shell
 * and ImageLightbox (v2 §2/§4a) so opening either doesn't allow background
 * scroll. No modal UI is implemented in this foundation phase; this hook is
 * infrastructure only.
 */
export function useLockBodyScroll(locked: boolean) {
  useEffect(() => {
    if (!locked) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [locked]);
}

"use client";

import { useEffect, useState } from "react";

const LOADER_SESSION_KEY = "zavil_portfolio_loader_shown";

/**
 * Gates the first-visit loader to once per browser session (v2 §6a, locked
 * spec).
 *
 * - First visit in a session: `shouldShowLoader` is true until
 *   `markLoaderComplete()` is called (i.e. when the loader's intro finishes).
 * - Refresh / any subsequent navigation in the same session: loader is
 *   skipped — `shouldShowLoader` resolves to false.
 * - New tab / new session / cleared storage: loader shows again.
 *
 * The check runs synchronously on mount before the loader would otherwise
 * render, to avoid a flash-of-loader-then-skip. This hook only manages
 * state; the actual loader visuals are not implemented in this foundation
 * phase (see components/loader/FirstVisitLoader.tsx).
 */
export function useFirstVisitLoader() {
  const [shouldShowLoader, setShouldShowLoader] = useState(false);
  const [isResolved, setIsResolved] = useState(false);

  useEffect(() => {
    try {
      const alreadyShown = window.sessionStorage.getItem(LOADER_SESSION_KEY);
      setShouldShowLoader(alreadyShown !== "true");
    } catch {
      // sessionStorage unavailable (e.g. privacy mode) — fail safe by
      // skipping the loader rather than risking it showing every time.
      setShouldShowLoader(false);
    } finally {
      setIsResolved(true);
    }
  }, []);

  const markLoaderComplete = () => {
    try {
      window.sessionStorage.setItem(LOADER_SESSION_KEY, "true");
    } catch {
      // Non-fatal — worst case the loader shows again next load.
    }
    setShouldShowLoader(false);
  };

  return { shouldShowLoader, isResolved, markLoaderComplete };
}

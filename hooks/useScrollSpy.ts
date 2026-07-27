"use client";

import { useEffect, useState } from "react";

/**
 * Tracks which section (by element id) is currently in the viewport, to
 * drive the Navbar's active-anchor highlighting on the single-page layout
 * (v2 §1/§8 — replaces route-based active-link matching, since there are no
 * routes to match against on a single-page site).
 *
 * Also intended to back the anchor-link focus-management requirement in the
 * accessibility plan (v2 §11): when a nav link is clicked, focus should move
 * to the target section's heading, not just scroll visually. That focus
 * wiring happens where this hook is consumed (Navbar), not here — this hook
 * only reports state.
 *
 * BUGFIX (underline drift while scrolling/clicking):
 * IntersectionObserver callbacks only report the entries whose threshold
 * status *changed* since the last callback — never the full set of
 * currently observed elements. The previous implementation picked
 * `activeSection` from `entries[entries.length - 1]` that was intersecting,
 * i.e. "whichever changed entry happens to appear last in this particular
 * callback batch." When two sections cross their thresholds in the same
 * batch (very common: exiting section A and entering section B during a
 * smooth scroll fire together), the browser does not guarantee entries
 * order, so the wrong section could be selected as active for a frame or
 * two before "correcting" itself on the next callback. Each time activeId
 * flips, the Navbar's `motion.span` (layoutId="nav-indicator") retargets
 * its FLIP/spring animation to a new `<a>` parent — so a spurious flip
 * shows up visually as the underline overshooting/drifting left-right
 * before settling, instead of making one clean move to the real target.
 *
 * Fix: maintain the full current intersection state for every observed
 * section in a ref-like map (not just the delta from the last callback),
 * and recompute the active id from that complete state every time. Ties
 * (multiple sections intersecting at once) are broken deterministically —
 * by picking whichever section's edge is closest to the observer's
 * trigger line — rather than by incidental array order. This makes
 * activeId change once per real scroll position, so the underline now
 * only ever animates to the correct destination.
 */
export function useScrollSpy(sectionIds: string[], options?: IntersectionObserverInit) {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    if (sectionIds.length === 0) return;

    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    // Full current intersection state for every observed section, keyed by
    // id. Unlike the callback's `entries` argument, this always reflects
    // every section's last-known status, not just what changed this tick.
    const intersectionState = new Map<string, IntersectionObserverEntry>();

    const computeActiveId = (): string | null => {
      const visible = elements
        .map((el) => intersectionState.get(el.id))
        .filter((entry): entry is IntersectionObserverEntry => !!entry && entry.isIntersecting);

      if (visible.length === 0) return null;

      // Deterministic tie-break when more than one section is intersecting
      // at once: prefer whichever section's top edge sits closest to the
      // observer's trigger line, instead of relying on undefined browser
      // ordering of the entries array.
      visible.sort(
        (a, b) => Math.abs(a.boundingClientRect.top) - Math.abs(b.boundingClientRect.top),
      );

      return visible[0]?.target.id ?? null;
    };

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          intersectionState.set(entry.target.id, entry);
        }

        const nextActiveId = computeActiveId();
        if (nextActiveId) {
          setActiveId(nextActiveId);
        }
      },
      options ?? {
        rootMargin: "-40% 0px -50% 0px",
        threshold: 0,
      },
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sectionIds.join(",")]);

  return activeId;
}

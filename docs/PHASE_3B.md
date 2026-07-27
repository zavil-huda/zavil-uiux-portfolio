# Phase 3B — Hero Motion (Status Notes)

Builds on `docs/FOUNDATION.md` (Phase 1), `docs/PHASE_2.md` (Phase 2), and
`docs/PHASE_3A.md` (Phase 3A — Hero structure). Internal reference only.

## Scope

Hero entrance animation, scroll-indicator wiring, motion/accessibility/
performance polish. Explicitly **not** in scope, per instruction: no layout,
typography, spacing, color, or copy changes to Hero, and no new
interactions.

## Files Added

- `docs/PHASE_3B.md` — this file.

## Files Modified

- `sections/Hero.tsx`
  - Converted to a client component (`"use client"`), required to use
    Framer Motion.
  - Every existing element is unchanged in class name, copy, and DOM order.
    The only structural change is swapping plain tags for their `motion.*`
    equivalent (`div`→`motion.div`, `p`→`motion.p`, `h1`→`motion.h1`) so
    they can animate, plus one added `relative` class on the grid
    `Container` (needed as a positioning anchor for the scroll indicator —
    does not affect visual layout).
  - **Text column**: wrapped in a `motion.div` using the existing
    `staggerContainer` variant; each child (eyebrow, headline, divider,
    title, supporting statement, CTA row) uses the existing `fadeUp`
    variant and inherits its stagger timing automatically — no new
    variants or transitions were authored.
  - **Portrait**: wrapped in a `motion.div` using `fadeUp`, with a `0.25s`
    delay (via the existing `getTransition`/`sectionRevealTransition`
    helpers) so it settles just after the text column, per Master Prompt
    §5 ("fade, translate, opacity... avoid bounce, flashy effects").
  - **Design Stack bar**: wrapped in a `motion.div` using `fadeUp` with a
    `0.4s` delay, entering last.
  - **Reduced motion**: every animated wrapper sets
    `initial={prefersReducedMotion ? false : "hidden"}` — the idiomatic
    Framer Motion way to skip the enter animation entirely and render
    directly in the final state, with zero delay/duration. Sourced from
    the existing `useMotionPreference()` hook (`providers/MotionProvider`),
    already wired site-wide — no new reduced-motion logic was written.
  - **Scroll indicator**: `components/ui/ScrollIndicator.tsx` (built in
    Phase 2, previously unused) is now imported and rendered at the bottom
    of the Hero's content `Container`. Per explicit instruction this phase,
    it was **not modified** — it's already purely decorative (`aria-hidden`,
    no click handler) and already respects reduced motion internally. It's
    wrapped in a plain (non-motion) `div` that's `absolute`, `pointer-events-none`,
    and visible only at `lg:` and above, so it adds no spacing to the
    existing grid and can't overlap the separate Design Stack `Container`
    below it.

## Files NOT Modified

Per instruction, nothing else was touched. In particular:
`animations/variants.ts`, `animations/transitions.ts`,
`providers/MotionProvider.tsx`, `components/ui/ScrollIndicator.tsx`,
`components/ui/Button.tsx`, `lib/analytics.ts`, `content/home.ts`,
`app/globals.css`, `tailwind.config.ts` are all reused exactly as they
were in Phase 3A/2.

## Files Deleted

None.

## Analytics verification

`track("Resume Download")` in Hero's secondary CTA is unchanged and still
correctly wired. The scroll indicator has no click behavior this phase
(explicitly ruled out), so no analytics event is associated with it, and
the locked 8-event `AnalyticsEventName` union in `types/content.ts` was
not touched.

## Performance notes

- Hero's portrait `<ResponsiveImage priority fill ... />` is unchanged —
  still marked `priority` for LCP.
- All entrance motion animates only `opacity`/`transform` (via `fadeUp`'s
  `y` translate), which are compositor-only properties — no layout-shift
  risk, no animated `width`/`height`/`top`/`left`.
- The scroll indicator itself only animates `y`/`opacity` on a fixed
  1px-wide element, using `repeat: Infinity` — negligible paint cost, and
  it's `pointer-events-none` so it can't intercept input.

## Accessibility notes

- All motion is gated by the existing `prefers-reduced-motion` chain:
  OS preference → `useReducedMotion()` → `MotionProvider` →
  `useMotionPreference()`, consumed here exactly as it already is in
  `Reveal.tsx` and `PageTransition.tsx`. The global CSS
  `@media (prefers-reduced-motion: reduce)` block in `globals.css` remains
  an additional, redundant safety net for anything CSS-transition-based.
- The scroll indicator remains `aria-hidden="true"` with no interactive
  role, so it's invisible to screen readers and never enters tab order —
  unchanged from its Phase 2 implementation.
- No change to heading structure, landmark roles, focus order, or any
  existing `aria-*` attribute on Hero's content.

## Known issue (documented only, not fixed this phase)

On a genuine first visit, `FirstVisitLoader` covers the screen for
`AUTO_DISMISS_MS` (1400ms) while Hero mounts and animates underneath it.
Hero's entrance (text stagger + portrait + design stack, finishing well
under ~1.1s) will typically have already completed by the time the loader
fades out, so first-time visitors may see the Hero already in its resting
state rather than watching the entrance play out. Repeat visits in the
same session (loader skipped) see the entrance normally. Resolving this
would mean changing the loader's approved timing/sequencing, which is out
of this phase's explicit scope — flagged here for a future phase decision
rather than changed unilaterally.

## Next step

Awaiting approval to proceed to Phase 4 (next section in the single-page
build order) or further Hero polish requests.

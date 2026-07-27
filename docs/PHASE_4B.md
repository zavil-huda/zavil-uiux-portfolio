# Phase 4B — Selected Work Interactions (Status Notes)

Builds on `docs/PHASE_4A.md` (Selected Work structure). Internal reference
only.

## Scope

Only the behavior explicitly deferred by Phase 4A's "Remaining Work":
modal wiring for the 5 CTAs, hover lift, scroll-reveal entrance motion. No
structural, typographic, spacing, or copy changes.

## Files Modified

- `components/ui/ProjectCard.tsx`
  - Added `hoverable` to its internal `<Card>` (was previously omitted on
    purpose in 4A — "no hover animation" was explicit that phase).
  - Added an optional `onCtaClick?: () => void` prop, wired to the CTA
    `Button`'s `onClick`. The card itself stays a plain function component
    (no hooks, no `"use client"`) — it just forwards a callback the parent
    provides; only the parent (`SelectedWork`) needs client-side state.
- `sections/SelectedWork.tsx`
  - Added `"use client"` — required for the three `useState` calls that
    track each modal's open/closed state. This is the only structural
    change; every element, class name, and piece of copy from 4A is
    unchanged.
  - Three `useState<boolean>` flags: `isViewAllOpen`, `isCaseStudyOpen`,
    `isCurrentlyBuildingOpen`. The three "View Case Study" CTAs (one per
    real project) all set the *same* `isCaseStudyOpen` flag — verified
    `content/modals.ts`'s `caseStudyComingSoonModal` copy is generic and
    project-agnostic (not naming a specific project), so one shared modal
    instance is correct, not a shortcut; three separate instances would
    display identical content.
  - Wrapped the header block and each of the 4 grid cards in the existing
    `<Reveal>` primitive (built in Phase 2, unused until now — this is its
    first real consumer, exactly as its own code comment anticipated). Grid
    cards stagger in at `index * 0.1s`. No new animation values were
    authored — `Reveal` internally reuses the same `fadeUp` variant and
    `sectionRevealTransition` already used for Hero's entrance in 3B.
  - Mounted the three existing modals (`ViewAllProjectsModal`,
    `CaseStudyComingSoonModal`, `CurrentlyBuildingModal`) at the end of the
    section, each driven by its corresponding state flag. No analytics
    calls were added here — each modal already fires its own locked
    event internally via `useEffect` on `isOpen` (built in Phase 2), so
    this section only needed to flip the boolean.

## Files NOT Modified

Per instruction, no Phase 1–4A file was touched. Specifically verified
unchanged (fingerprinted before/after): `content/home.ts`,
`content/modals.ts`, `types/content.ts`, `components/ui/Modal.tsx`,
`components/layout/Reveal.tsx`, `animations/variants.ts`,
`animations/transitions.ts`, all three `modals/*.tsx` files and
`modals/index.ts`, and `sections/Hero.tsx`. No bug was discovered in any of
these that would have justified an exception.

## Files Added

None.

## Files Deleted

None.

## Full implementation audit

- **Imports/exports**: every newly-added import (`useState` from `react`;
  `Reveal` from `@/components/layout/Reveal`; `ViewAllProjectsModal` /
  `CaseStudyComingSoonModal` / `CurrentlyBuildingModal` from `@/modals`)
  resolves to a real, already-existing export — verified against each
  source file directly, not assumed.
- **Types**: `Reveal`'s `delay?: number` accepts the `index * 0.1` /
  `featuredWorkCards.length * 0.1` values passed to it. Each modal's
  `{ isOpen: boolean; onClose: () => void }` props are satisfied exactly.
  `ProjectCardProps.onCtaClick?: () => void` accepts the zero-arg arrow
  functions passed from `SelectedWork`, and is itself compatible with
  `Button`'s native `onClick` (a `MouseEventHandler`) since a zero-arg
  callback is assignable to any DOM event handler type.
- **Client/Server boundary**: `SelectedWork.tsx` is now correctly marked
  `"use client"` (required for `useState`); `ProjectCard.tsx` intentionally
  is not — it has no hooks of its own and is only ever rendered from
  within `SelectedWork`'s already-client subtree, so no boundary violation.
- **Syntax**: brace/paren/bracket balance verified on both changed files.
- **No duplicate/conflicting analytics**: confirmed each modal's own
  internal `track()` call is the single source of truth for its event;
  `SelectedWork` does not call `track()` directly, avoiding double-firing.
- **Reduced motion**: `Reveal`'s scroll entrance and `Card`'s hover lift
  both route through the same two existing mechanisms already verified
  during Hero/3B and Phase 2 respectively (`useMotionPreference()` for
  Framer Motion, the global CSS `prefers-reduced-motion` override for the
  CSS-transition-based hover) — nothing new was written for this, so
  nothing new to verify beyond confirming both mechanisms are still
  correctly reached from this section.
- **Grid layout regression check**: wrapping each card in `<Reveal>`
  (a `motion.div` with no explicit height) adds one extra DOM layer inside
  each grid cell. CSS Grid's default `align-items: stretch` stretches that
  wrapper to the row's height automatically, so `ProjectCard`'s/the
  coming-soon `Card`'s own `h-full` still resolves correctly — the
  equal-height card row from 4A is preserved.

## Accessibility notes

- All 5 CTAs are still real `<button type="button">` elements, now with
  actual `onClick` behavior — tab order and focus visibility are
  unchanged, they're just functional now.
- Modal focus management (trap, Esc-to-close, backdrop-click-to-close,
  focus-return-to-trigger) is entirely pre-existing `Modal.tsx` behavior
  (Phase 2) — nothing new to add or verify here beyond confirming the
  three modals are actually mounted and reachable, which they now are.

## Remaining Work

- No further Selected Work work identified — 4A structure + 4B behavior
  covers everything in the section's original scope list.
- Next section in the build order (per Master Prompt flow: Hero → Selected
  Work → About → ...).

## Known Issues

- None new.

## Next step

Awaiting instruction for the next phase.

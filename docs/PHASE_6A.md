# Phase 6A — Journey Section (Experience + Design Philosophy) (Status Notes)

Builds on `docs/PHASE_5A.md` (About). Internal reference only.

## Scope

The full "Journey" section (anchor `#experience`) — structure and motion in
one phase, per this phase's instruction. Visual source of truth: the
uploaded `04_Journey.png` + `05_Design_Philosophy.png` pair, treated as one
continuous section (two blocks within the same `<section>`): an experience
timeline and a design-philosophy process list.

## Files Added

- `docs/PHASE_6A.md` — this file.

## Files Modified

- `content/experience.ts` — **purely additive**, same pattern as Phase 5A's
  `content/about.ts`. All six pre-existing exports (`timeline`,
  `workingStyle`, `toolsUsed`, `skillsStrengthened`, `keyTakeaway`, and the
  `TimelineEntry` import) are byte-for-byte unchanged — verified nothing
  outside this file consumed them besides the stub this phase replaces, and
  left them in place rather than deleting them, since `04_Experience.md`'s
  richer per-role "What I Learned" / "Growth Highlights" content doesn't
  appear in either PNG and may still be useful for a future detail view.
  Seven new exports were added for what the PNGs actually show:
  `journeyIntro`, `journeyMilestones` (+ `JourneyMilestone` interface),
  `journeyStats` (+ `JourneyStat` interface), `designPhilosophyIntro`,
  `designPhilosophySteps` (+ `DesignPhilosophyStep` interface),
  `designPhilosophyPromise`. Copy for the new exports is reproduced
  verbatim from the PNGs; per the locked source-of-truth order this
  supersedes `04_Experience.md`'s differently-shaped timeline content for
  this specific section (short "Key Highlights" bullets instead of full
  responsibility lists, a status badge, a 4-stat summary bar, and the
  "UI/UX Designer & Creative Lead" role title vs. the doc's "Creative
  Lead") — the same precedent already used for Hero, Selected Work, and
  About. The entire Design Philosophy block (heading, 4-step process,
  "My Promise" quote) appears only in the PNG, not in any knowledge doc;
  noted inline in the file rather than silently absorbed.
- `sections/Experience.tsx` — replaced the Phase 1 stub (`<h2>Experience</h2>`
  + entry count only) with the full section.

## Files NOT Modified

Every other file from Phase 1–5A is untouched — explicitly diffed
before/after this phase, including `types/content.ts`, `content/navigation.ts`,
`sections/index.ts`, `app/page.tsx`, `sections/About.tsx`,
`sections/SelectedWork.tsx`, `components/ui/*`, `components/layout/*`,
`animations/*`, `hooks/*`, `providers/*`, `lib/*` — all confirmed identical.

No genuine bug was found in any prior-phase file this phase.

## Files Deleted

None.

## Full implementation audit

- **Imports/exports**: every import in `sections/Experience.tsx` (11 lucide
  icons, 6 named exports from `content/experience.ts`, `brandMark` from
  `content/personal.ts`, `Container`/`Reveal`/`Card`/`Tag`/`Divider`/
  `ResponsiveImage`) verified against the actual export in its source file.
- **Types**: `journeyMilestones: JourneyMilestone[]` and `journeyStats:
  JourneyStat[]` match the interfaces declared alongside them.
  `milestoneIcons`/`stepIcons`/`statIcons` local arrays verified 1:1
  length-matched against `journeyMilestones` (2), `designPhilosophySteps`
  (4), and `journeyStats` (4) respectively — same paired-by-array-index
  pattern already used for About's `statIcons`/`approachIcons`/
  `beyondDesignSkillIcons`.
- **Assets**: `brandMark` (`public/images/brand/signature.png`) confirmed
  present and already approved (previously only referenced by
  `FirstVisitLoader`, unused in any section until now) — no new image asset
  introduced this phase.
- **Syntax**: brace/paren/bracket balance verified on both changed files.
- **Composition**: `Experience` was already correctly wired into
  `sections/index.ts` and `app/page.tsx` from Phase 1 — no changes needed
  there.

## Design decisions worth flagging

- **Badge color, no new token.** The PNG shows a light-blue "Internship"
  pill and what reads as a green "Current" pill. The token system has no
  `success`/green color (only `accent`/`accent-muted`, still Phase 1/2
  grayscale placeholders per the locked Figma Inspection Workflow, same as
  every other section so far). Rather than inventing a new color token,
  the two badges are differentiated using only the existing `accent` token
  — `Internship` as a light `bg-accent-muted/10` outline, `Current` as a
  solid `bg-accent` fill — via `Tag`'s existing `className` override, no
  new component.
- **No sticky positioning.** An earlier draft made the intro column of
  each block `lg:sticky` while its adjacent timeline/steps column scrolled
  past. Removed — the PNGs are static exports and can't show scroll
  behavior, and no knowledge doc requests it, so keeping it would have
  been an invented interaction. Both blocks use the same plain two-column
  `<Reveal>` layout as About.
- **Decorative spine lines and background glow** (the vertical connector
  between timeline dots/step icons, and the soft blurred circle behind the
  signature) follow the exact precedent already set by Hero's "Decorative
  background circle" / "Decorative dot grid" — `aria-hidden="true"`, no
  new primitive, no new token.
- **`Briefcase`/`Star` on the timeline dots' companion card, plain dots on
  the spine itself** — matches the PNG, where the spine markers are small
  solid circles and the role/status icon lives inside the card header, not
  on the spine.

## Accessibility notes

- Heading hierarchy: two `<h2>`s in this section (one per PNG block —
  "Building products..." and "Design is intentional..."), each a
  standalone content block under the same `#experience` anchor; `<h3>` for
  each milestone role and each philosophy step title; `<h4>` for "Key
  Highlights" — correctly nested under its parent `<h3>`.
- All decorative icons (spine dots, card-header role icons, stat icons,
  step icons, quote/sparkle glyphs, the connecting spine lines, the
  background glow) are `aria-hidden="true"`; the accompanying visible text
  carries the meaning in every case.
- The signature image's `alt` text is reused as-is from the already-approved
  `content/personal.ts` (`brandMark`) — no new image, no missing alt text.
- `journeyStats` uses `<dl>`/`<dt>`/`<dd>` (label/value pairs), consistent
  with About's stats card. `keyHighlights` uses a real `<ul>`/`<li>` list.
- Nothing in this section is interactive, so there's no new tab-order or
  focus-visibility surface to verify beyond what already exists.
- Motion: both blocks use only the shared `<Reveal>` primitive (which
  already reads `useMotionPreference()` internally) — no bespoke
  `framer-motion` usage was added, so `prefers-reduced-motion` is respected
  automatically, the same as every other built section.

## Responsive behavior

- Single column below `lg:`, two-column grid (`lg:grid-cols-2`) at `lg:`
  and above — same breakpoint convention as About and Selected Work.
- The timeline spine and step-list spine are hidden below `sm:` (`hidden
  sm:block` / `sm:flex`) since a vertical connector between stacked
  full-width cards on narrow viewports adds visual noise without the
  side-by-side date/dot relationship the PNG shows; the milestone duration
  moves inline above the card body below `sm:` instead (`sm:hidden` on
  that paragraph) so the information isn't lost, only re-positioned.
- The "Key Highlights" list is one column below `sm:`, two columns at `sm:`
  and above, matching the PNG's desktop layout.
- The stats bar is `grid-cols-2` below `lg:`, `grid-cols-4` at `lg:` and
  above, so all four stats stay legible without horizontal scroll at any
  width.
- The "My Promise" card stacks the quote above the promise text below
  `lg:` (vertical divider becomes `hidden`), and switches to the PNG's
  side-by-side layout with a vertical divider at `lg:`.

## Remaining Work

- Next section in the build order per the Master Prompt flow: Selected
  Design Work (`sections/SelectedDesignWork.tsx` is still a Phase 1
  structural stub).
- Unrelated observation, not acted on (out of this phase's scope,
  carried forward from Phase 5A): both PNGs' navbar shows "Home, Work,
  About, Journey, Contact" — "Journey" replacing the locked nav's
  "Experience" label for this anchor. Still flagged for a future dedicated
  nav-review phase, not touched here.

## Known Issues

- The `tailwind-merge`/custom-token-scale gap noted in Phase 5A still
  applies project-wide; not triggered by anything added this phase (no
  `shadow-token-*`/`rounded-token-*` overrides were attempted here).
- Badge colors (see "Design decisions" above) currently render as
  grayscale shades of the same `accent` token rather than the PNG's
  distinct blue/green — expected and consistent with every other
  section's placeholder-color state; will resolve automatically once real
  Figma color values are pulled into `app/globals.css`.

## Next step

Awaiting instruction for the next phase.

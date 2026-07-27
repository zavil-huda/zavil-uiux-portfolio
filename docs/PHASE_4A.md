# Phase 4A — Selected Work Section (Status Notes)

Builds on `docs/FOUNDATION.md` (Phase 1), `docs/PHASE_2.md` (Phase 2), and
`docs/PHASE_3A.md` / `docs/PHASE_3B.md` (Hero). Internal reference only.

## Scope

Selected Work section only, structural/visual — no modals, no hover
animation, no scroll-reveal motion. Visual source of truth: the uploaded
`02_Selected_Work.png`, per the locked source-of-truth order (Figma/PNG
export takes priority over `02_Home_Page_Content.md` where they conflict).

## Files Added

- `components/ui/ProjectCard.tsx` — reusable project-summary card (cover
  image, tag, title, description, "View Case Study" CTA). Used 3× in the
  grid to avoid repeating the same markup.
- `docs/PHASE_4A.md` — this file.

## Files Modified

- `content/home.ts` — `featuredWorkPreview` restructured from
  `{ sectionTitle, description, cardTitles: string[] }` to match the PNG
  exactly: `eyebrow`, `sectionTitle`, `description`, `viewAllCtaLabel`,
  plus a new `featuredWorkCards: FeaturedProjectCard[]` (id, tag, title,
  description, cover, ctaLabel) and `featuredWorkComingSoon`. Verified
  nothing else consumed the old shape before restructuring it. Copy is
  reproduced verbatim from the PNG. Cover images are **reused** — imported
  from `content/case-studies/food-delivery.ts` and `maazster-tech.ts`
  (already approved); the editorial cover reuses the exact same
  `src`/`alt`/dimensions already approved in `content/selected-work.ts`,
  declared again locally rather than modifying that file to export it.
- `components/ui/Button.tsx` — added one new variant, `"link"` (accent-
  colored inline text + no box/padding), and excluded it from the boxed
  `sizeStyles` padding the same way the existing `"icon"` variant already
  is. Purely additive: `primary`/`secondary`/`ghost`/`icon` and every
  existing call site (Hero) are byte-for-byte unchanged. Added because the
  PNG uses this exact text-and-arrow pattern five times on this section
  alone ("View all projects", 3× "View Case Study", "Currently Building"),
  which doesn't match any existing variant — building it once avoids
  duplicating the same raw Tailwind classes five times.
- `components/ui/index.ts` — added the `ProjectCard` export, following the
  barrel's existing pattern (one addition, nothing else touched).
- `sections/SelectedWork.tsx` — replaced the foundation stub with the full
  section: header (eyebrow, heading with accent-dot, intro, "View all
  projects" action), a responsive 2-column project grid (3
  `<ProjectCard>`s + 1 "coming soon" `<Card>`), all built on existing
  tokens/components.

## Files NOT Modified

`Card.tsx`, `Tag.tsx`, `SectionHeader.tsx`, `ResponsiveImage.tsx`,
`types/content.ts`, `animations/*`, `providers/*`, `Hero.tsx`, and every
other section are untouched.

- `Tag.tsx` (pill/chip) was **not** used for the card category labels —
  the PNG shows plain uppercase overline text (matching the `overline`
  type-scale token already used for eyebrows site-wide), not a pill/chip.
  Using `Tag` here would have meant approximating the PNG rather than
  matching it, which was explicitly ruled out this phase.
- `SectionHeader.tsx` was **not** used for the section header — it doesn't
  currently support a trailing action slot (the "View all projects" link)
  or an accent-colored eyebrow, and no other section has adopted it yet
  (verified: still unused everywhere), so extending its contract wasn't
  low-risk enough to justify over building the header locally in
  `SelectedWork.tsx` with the same existing typography tokens it uses
  internally.

## Files Deleted

None.

## Design decisions worth flagging

- **Colors are still Phase 1/2 placeholders**, same as Hero — every accent
  color in this section (eyebrow, tag labels, heading dot, CTA links)
  currently renders in the neutral/grayscale palette via `text-accent`,
  not the PNG's blue, until `app/globals.css` tokens are finalized. Token
  *names* already map to the right roles.
- **No case-study data file was created for "To The Horizon Magazine."**
  Unlike Food Delivery and Maazster Tech, there's no locked
  `05_*`/`06_*`-style source document with a full case-study body for it —
  only the cover image + alt text already approved in
  `content/selected-work.ts`, plus the PNG's card copy. Adding a full
  `content/case-studies/editorial-magazine.ts` (implying a complete future
  case-study page) would have gone beyond what's actually locked, so its
  card data lives as a lightweight entry in `content/home.ts` only, scoped
  to what the PNG shows.
- **All 5 CTAs on this section (`View all projects`, 3× `View Case Study`,
  `Currently Building`) are real, focusable, correctly styled/positioned
  buttons with no `onClick` handler.** This is intentional — you
  explicitly scoped modal wiring to Phase 4B. They're semantically
  `<button type="button">` (not links) since they'll become JS modal
  triggers, not navigation.

## Accessibility notes

- Project titles use `<h3>`, nested correctly under the section's `<h2>`
  ("Selected Projects").
- Every cover image reuses its already-approved, descriptive `alt` text
  from the source `ImageAsset` — no new images, no missing alt text.
- The "coming soon" card's icon is `aria-hidden="true"` (decorative); its
  visible text ("More projects coming soon.") carries the meaning.
- All 5 CTA buttons are real `<button>` elements, so they're in the tab
  order and screen-reader-focusable even though they're inert this phase.

## Performance notes

- No `priority` on any card cover image — these are below the fold
  (Hero's portrait remains the only `priority`/LCP image on the page).
- Grid/card layout uses only flex/grid utilities — no JS-computed layout,
  no client component. `SelectedWork.tsx` and `ProjectCard.tsx` are both
  plain Server Components (no `"use client"`, no hooks), since nothing in
  this phase needs interactivity yet.

## Remaining Work

- Phase 4B: wire the 5 CTAs to their modals
  (`ViewAllProjectsModal` / `CaseStudyComingSoonModal` /
  `CurrentlyBuildingModal`) and their locked analytics events
  (`"View All Projects"` / `"View Case Study"` / `"Currently Building
  Modal"`), plus hover lift (`Card`'s existing `hoverable` prop) and
  scroll-reveal entrance motion (likely via the existing `<Reveal>` /
  `staggerContainer` infrastructure, consistent with how Hero's entrance
  motion was added in 3B).

## Known Issues

- None new. Colors-are-placeholders remains the same known, already-
  documented condition carried over from Phase 3A/3B.

## Next step

Awaiting approval to proceed to Phase 4B (Selected Work modal wiring +
motion) or the next section in the build order.

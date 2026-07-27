# Phase 2 — Design System & Application Shell (Status Notes)

Builds on `docs/FOUNDATION.md` (Phase 1). Internal reference only.

## What this phase delivered

**Design tokens (`tailwind.config.ts` + `app/globals.css`)**
- Full semantic color set: background, surface, surface-alt, ink, ink-muted,
  ink-inverse, accent, accent-muted, border, border-strong, overlay, focus.
- Typography scale: display-xl/lg/md/sm, body-lg/md/sm, caption, overline —
  fluid `clamp()` sizing.
- Spacing rhythm: `section-y`, `gutter`, `nav-height` (8pt-based).
- Radius, shadow, and z-index scales (nav/overlay/modal/loader layering).
- Breakpoints: `xs` (375px) through `2xl`, mobile-first.
- All values in `:root` are still neutral placeholders (see Phase 1 notes) —
  only the token *names/structure* are final.

**Container & typography system**
- `components/layout/Container.tsx` — the one place max-width/gutter is
  defined; `narrow` variant for text-heavy content.
- Base typographic rules in `app/globals.css` `@layer base` (heading/body
  font families, weights, colors) so components don't repeat them.

**Reusable UI primitives (`components/ui/`)** — now fully styled and
interactive, not stubs: `Button` (4 variants × 2 sizes), `Tag`, `Card`
(optional hover-lift), `SectionHeader`, `Divider`, `ScrollIndicator`
(animated, reduced-motion aware), `Modal` (full focus trap, Esc/backdrop
close, shared open/close motion, scroll lock).

**Motion foundation**
- `animations/variants.ts` / `transitions.ts` (from Phase 1) now actually
  consumed by real components.
- `providers/MotionProvider.tsx` supplies `useMotionPreference()` site-wide;
  every animated component reads it instead of calling
  `useReducedMotion()` independently.
- `components/layout/Reveal.tsx` — the scroll-reveal primitive sections
  will use once built (not applied to any section yet).
- `components/layout/PageTransition.tsx` — real fade-in on shell mount.
- New `hooks/useFocusTrap.ts` — shared by `Modal` and the Navbar mobile
  menu.

**Navigation shell (`components/layout/Navbar.tsx`)**
- Sticky, blurred header, scroll-spy active-link state, fully keyboard
  operable mobile menu with focus trap, Resume button wired to the locked
  `Resume Download` analytics event.

**Footer shell (`components/layout/Footer.tsx`)**
- Styled, responsive, social/email links wired to their locked analytics
  events (`LinkedIn Click`, `GitHub Click`, `Email Click`).

**Responsive foundation**
- Mobile-first breakpoints in Tailwind config; Navbar/Footer/Container all
  responsive down to 375px; fluid type/spacing via `clamp()`.

## What this phase deliberately does NOT include

- No Hero, About, Experience, Selected Work, Selected Design Work,
  Certifications, or Contact section content/layout — all seven remain
  Phase 1 structural stubs, untouched.
- No section uses `<Reveal>` yet — it exists but isn't wired into content.
- `View All` / `View Case Study` / `Currently Building` triggers aren't
  connected to anything yet (no project cards exist to trigger them) —
  the three modal components work in isolation and are ready to be wired
  once `SelectedWork` is built.

## Known placeholders, still not final

Same four caveats as Phase 1 (typography values, color values, domain,
favicon) — all still pending Figma section exports or your input.

## Next step

Awaiting approval to begin Phase 3 (single-page section-by-section
assembly, starting with Hero) per the roadmap in
`Portfolio_Implementation_Plan_v2.md` §15 — which, per the locked Figma
Inspection Workflow (v3, Decision 1), will need Figma frame exports for
each section as we reach it, starting with Hero.

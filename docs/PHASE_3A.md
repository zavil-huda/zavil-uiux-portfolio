# Phase 3A — Hero Section (Status Notes)

Builds on `docs/FOUNDATION.md` (Phase 1) and `docs/PHASE_2.md` (Phase 2).
Internal reference only.

## Scope

Hero section only, structural/visual — no animation. Per explicit
instruction this phase deliberately did **not** touch `app/globals.css` or
`tailwind.config.ts`; the existing Phase 2 token system is reused as-is.

## Files Added

- `components/media/ToolIcon.tsx` — simplified brand-colored glyphs for the
  Hero "Design Stack" bar (Figma, Illustrator, Photoshop, Canva, Blender,
  Notion). Original simplified marks, not traced logo artwork.

## Files Modified

- `sections/Hero.tsx` — replaced the Phase 1 structural stub with the full
  Hero layout: two-column grid (copy + bleed portrait on `lg:`), headline,
  eyebrow, divider, title, supporting statement, primary/secondary CTAs,
  Design Stack bar. Built entirely on existing Phase 2 tokens
  (`text-accent`, `bg-surface-alt`, `border-border`, `text-display-xl`,
  `py-section-y`, etc.) — no new tokens, no raw hex values in the
  component.
- `content/home.ts` — `hero.primaryCta.label` changed from "View Case
  Studies" to **"View My Work"**, per your explicit approval: the Figma
  Hero export takes priority over `02_Home_Page_Content.md` for this one
  label. `href` (`#work`) is unchanged. No other content changed.
- `components/media/ResponsiveImage.tsx` — added optional `className` /
  `fill` / `objectClassName` props (all optional, all backward compatible)
  so the Hero's full-bleed cropped portrait can use `next/image`'s `fill`
  layout. Existing call sites (Navbar's fixed-size monogram) are
  unaffected — they don't pass the new props.
- `components/media/index.ts` — added the `ToolIcon` export, following the
  existing barrel pattern.

## Files Deleted

None.

## Design decisions worth flagging

- **Color values are still Phase 1/2 placeholders.** Per your instruction,
  `app/globals.css` and `tailwind.config.ts` were not touched this phase.
  Hero currently renders in the existing neutral/grayscale token palette,
  not the PNG's blue accent — the token *names* the Hero uses
  (`text-accent`, `bg-accent`, `bg-surface-alt`, `border-border-strong`,
  etc.) already map to the right *roles*, so updating the palette later is
  a one-file change to `app/globals.css`, not a Hero rewrite.
- **Design Stack list lives locally in `sections/Hero.tsx`**, not in
  `content/home.ts`, per your explicit instruction — a `ToolName[]`
  constant, consumed by the new `ToolIcon` component.
- **Mobile stacking order:** the portrait renders after the headline/CTA
  block in both DOM and visual order at every breakpoint (no CSS `order`
  reversal). An initial draft used `order-first` to show the image above
  the text on mobile, but that creates a mismatch between visual reading
  order and keyboard/assistive-tech tab order (WCAG 1.3.2), so it was
  removed in favor of the accessible default: text first, image below.
- **Portrait bleed technique:** on `lg:` and above, the image column is
  pulled to the viewport's right edge with a calculated negative margin
  (`calc((100vw - var(--container-max)) / 2 * -1)`), referencing the
  existing `maxWidth.container` token via Tailwind's `theme()` helper —
  no new token, no hardcoded pixel value.
- **Design Stack tool icons** are original simplified glyphs in each
  tool's brand color (not traced reproductions of the official logo
  artwork), consistent with standard "built with" iconography.

## Known issues / not yet done

- Color tokens (`app/globals.css`) are still placeholders — Hero will look
  monochrome/gray, not blue, until that file is updated in a later phase.
- No entrance animation, scroll-indicator motion, or hover
  micro-interactions — explicitly Phase 3B.
- No mobile-specific Figma/PNG reference was provided; the responsive
  stacking (single column, image below copy, Design Stack bar wrapping)
  is a reasonable default from the desktop reference, not a pixel-matched
  mobile frame. Flag if a mobile export exists so it can be verified.
- Favicon and final domain are still pending, per Phase 1/2 notes
  (unrelated to Hero, unchanged this phase).

## Next step

Awaiting approval to begin Phase 3B (Hero entrance animation, scroll
indicator, micro-interactions) or to proceed to the next section in the
single-page build order.

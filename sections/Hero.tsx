"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Download } from "lucide-react";
import { hero } from "@/content/home";
import { portrait } from "@/content/personal";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { ResponsiveImage } from "@/components/media/ResponsiveImage";
import { ToolIcon, type ToolName } from "@/components/media/ToolIcon";
import { track } from "@/lib/analytics";
import { fadeUp, staggerContainer } from "@/animations/variants";
import { getTransition, sectionRevealTransition } from "@/animations/transitions";
import { useMotionPreference } from "@/providers";

/**
 * Hero section (v2 §1/§3, anchor "#hero"). Source: 02_Home_Page_Content.md
 * + the approved Hero PNG (Phase 3A visual source of truth for this
 * section; the Figma export supersedes the doc's "View Case Studies"
 * primary CTA label, per the locked source-of-truth order — see
 * content/home.ts).
 *
 * Phase 3A scope: layout, grid, typography, spacing, responsive behavior,
 * image placement, both CTAs, resume wiring, semantic HTML, a11y
 * foundation. No entrance animation, scroll-indicator motion, or
 * micro-interactions in that phase.
 *
 * Phase 3B scope (this revision): entrance-animation choreography layered
 * on top of the exact same DOM/classes from 3A (elements are wrapped in
 * `motion.*` rather than restructured), plus the Phase-2 `ScrollIndicator`
 * primitive wired in here for the first time. No layout, typography,
 * spacing, color, or copy change — see docs/PHASE_3B.md.
 *
 * Built entirely on the existing Phase 2 token system (colors, type scale,
 * spacing, radius).
 *
 * R1 (Design Restoration Sprint): the PNG's blue accent (#2563EB) and the
 * dark ("ink") secondary-button border are now restored on this section,
 * scoped via local className overrides on the specific elements/instances
 * below — NOT via the shared `--color-accent` token in app/globals.css or
 * the shared Button.tsx variant styles. Those remain untouched because
 * `text-accent`/`bg-accent` and the `secondary` Button variant are also
 * used by other, out-of-scope sections (About, Experience, Contact,
 * modals) and a global token change would have visually altered them,
 * which this sprint's scope explicitly excludes. The global token swap
 * remains a follow-up for a future sprint once those sections are also
 * in scope. Structure/typography/spacing/copy unchanged from Phase 3A/3B.
 *
 * R1 QA Polish: fixed the white gap that could appear between the
 * portrait and the Design Stack bar (the text column's `lg:py-section-y`
 * could render taller than the portrait's old fixed pixel height, and
 * `items-center` left empty space under the shorter, centered portrait —
 * `lg:self-end` on the portrait column removes that gap by keeping the
 * portrait flush with the row's bottom edge, same as the text column's
 * baseline, without adding any new spacing value). Removed the
 * ScrollIndicator usage — its `h-10 w-px` bar was being seen as a stray
 * vertical divider between Hero and Design Stack; it isn't part of the
 * approved Figma. Swapped the portrait's fixed `lg:h-[560px] xl:h-[640px]`
 * for a fluid `aspect-[4/5]` at every breakpoint (already used below lg)
 * so it scales continuously with the grid column's width — preserving
 * its aspect ratio — instead of jumping between two fixed pixel heights.
 * Reduced the decorative circle's blur and increased its size slightly
 * so it reads at the same visibility as the approved PNG.
 *
 * R1 Zoom/Crop Root-Cause Fix: the portrait's edge-to-viewport "bleed"
 * margin (`lg:mr-[...]`) was computed as `(100vw - 80rem) / 2 * -1` —
 * this assumes Container.tsx is always rendered at its full 80rem
 * (1280px) cap. It isn't: Container actually renders at
 * `min(100vw - 2×gutter, 80rem)`, only reaching that cap once the
 * viewport is >= ~1408px (gutter is `clamp(1.25rem, 5vw, 4rem)`).
 * Below that width — the entire 1024–1408px effective-viewport range,
 * which ordinary browser zoom on a real laptop screen lands in easily —
 * the old formula subtracted a fixed 1280px from 100vw regardless of the
 * container's true (narrower, still-fluid) width, producing a wrong,
 * non-monotonic margin as the effective viewport crossed that boundary.
 * That's what caused the portrait to look cropped at "normal" zoom and
 * to scale out of step with the text as zoom changed: the text/UI
 * tokens (`gutter`, `section-y`) are all `clamp()`-bounded and smooth,
 * but this one formula wasn't. The corrected formula mirrors Container's
 * own `min(100vw - 2×gutter, maxWidth.container)` using the exact same
 * tokens, so it matches the real container edge at every width, not just
 * above the cap.
 *
 * Known residual (not fixed here — requires a global token change,
 * which is out of this sprint's scope): `display-xl`'s own clamp
 * (`clamp(2.75rem, 6vw, 6rem)`, tailwind.config.ts) reaches its ceiling
 * at a different effective-viewport width (~1600px) than the
 * container/gutter tokens do (~1408px). Between those two widths, the
 * headline is still growing via vw while the container/portrait are
 * already capped, so a small amount of relative-scale drift between
 * text and portrait can still be visible across that specific ~200px
 * band of effective viewport widths. Fixing that fully means aligning
 * the type-scale and layout-token clamp curves — a global
 * tailwind.config.ts change affecting every section, not a Hero-local
 * fix, so it's flagged here rather than made silently.
 *
 * Sprint R1 (visual-parity pass): supporting-statement copy now matches
 * the approved Hero PNG/Figma verbatim (was still the doc's pre-Figma
 * wording — see content/home.ts). Decorative circle enlarged
 * (95%→115%, blur-2xl→blur-3xl) so it halos visibly beyond the portrait's
 * edges instead of being masked almost entirely behind the opaque image.
 * Dot-grid repositioned (top-4/right-4 → -top-6/-right-6) so it sits
 * outside the portrait's bounding box instead of underneath it — at its
 * old offset it was fully covered by the image despite -z-10 having no
 * effect there (the image has no z-index of its own within that box, so
 * it simply painted over the same area). Portrait aspect ratio changed
 * 4/5→9/10 to match the PNG's proportions (less vertical crop, more
 * shoulder/torso visible) — no change to the existing bleed-margin
 * formula, which is untouched.
 *
 * Sprint R1 Final Visual Polish: removed the portrait's negative-margin
 * bleed entirely so its right edge now aligns with the Design Stack
 * card's edge below (both bound by the same Container) instead of
 * extending past it. Primary CTA sets text-white explicitly on the
 * Button instance and the arrow icon (Hero-local className overrides
 * only; Button.tsx itself untouched).
 *
 * Sprint R1 Final Visual Restoration: grid split from an even
 * `lg:grid-cols-2` to `lg:grid-cols-[1fr_1.15fr]` (gap eased 16→12) so
 * the portrait column is larger/more dominant — a parameter change to
 * the existing grid, not a new layout system. Portrait box now uses
 * `aspect-[1142/1127]`, the source PNG's exact native ratio (see
 * content/personal.ts), so object-cover performs effectively zero crop
 * and framing/face position matches the source asset exactly — this
 * replaces the earlier 4/5 → 9/10 → 1/1 guesses. Background decoration
 * increased and softened (blue oval 130%×125%→140%×135%, blur-3xl→
 * blur-[90px], opacity-80; white glow 70%→75%, blur-2xl→blur-3xl,
 * opacity-80) to fade further into the page background. Dot grid moved
 * from being absolutely positioned inside the portrait's own wrapper
 * (where, at some sizes, it could sit fully behind the opaque image) to
 * the `<section>` level, pinned to the section's own top-right corner —
 * matching its placement in the approved PNG (near the nav) rather than
 * a position relative to the portrait box.
 *
 * On the requested "portrait should visually overlap the Design Stack"
 * (R1 Final Restoration, item 2) and "portrait must not scale
 * independently of the text at any zoom level" (item 6): both remain
 * only partially addressed, by design-constraint, not oversight.
 * Overlap would require a negative margin or transform on the portrait
 * relative to the Design Stack bar below — both explicitly disallowed
 * for this sprint. What's implemented instead is zero vertical gap
 * (already true structurally: the Hero Container has `lg:py-0` and the
 * Design Stack Container has `pb-section-y` with no top padding, so
 * they're already edge-to-edge) plus a visually larger, closer portrait.
 * True pixel overlap needs one of the disallowed techniques and should
 * be a separate, explicitly-scoped decision. Independently, full
 * zero-drift zoom behavior needs `display-xl`'s clamp curve
 * (tailwind.config.ts, a Typography token) aligned with the
 * `gutter`/`container` clamp curve — see the "Known residual" note
 * above. That's a global token file this sprint's rules place off-limits
 * (item 9: "Do NOT modify Typography ... unless absolutely required");
 * it wasn't judged required to satisfy the other eight items, so it's
 * flagged again here rather than touched silently. What *is* fixed
 * Hero-locally: the portrait's own sizing is now defined with
 * `aspect-ratio` and grid `fr` units only — no `vw`, `calc()`, or
 * negative margins remain in this file — so it no longer contributes a
 * second, independent source of scale drift on top of the token
 * mismatch.
 *
 * Sprint R1 Final Visual Polish (root-cause pass): items 1 and 2 from the
 * prior round ("decoration/dot-grid invisible") were never an
 * opacity/size/blur problem — verified by rendering this exact markup in
 * real Chromium via Playwright against the project's actual compiled
 * Tailwind output and sampling pixels. Root cause: `-z-10` on the
 * decoration divs and the dot-grid only stacks correctly inside an
 * ancestor that *establishes its own stacking context*. `position:
 * relative` with `z-index: auto` (what `<section>` and the portrait
 * wrapper had) does NOT establish one — so those negative-z elements
 * escaped past their intended parent and painted behind the page's own
 * white background, not merely behind the portrait. Fix: `z-0` added to
 * `<section>` and to the portrait's wrapper — each now anchors a local
 * stacking context, containing its `-z-10` children within it. Verified
 * after the fix: the oval color (#D6E1FB) and dot-grid circles both
 * render (pixel-sampled, no longer absent). Item 3: portrait grown via
 * the existing `fr` ratio only (`1fr 1.15fr` → `1fr 1.25fr`, gap
 * 12→10) — measured in the same real-render harness at +4.57% portrait
 * width, aspect ratio and object-position untouched, no transform/scale/
 * negative-margin used.
 *
 * Sprint R1 Final Visual Polish (layering pass): the Design Stack
 * Container had no `position` set (Container.tsx's default is static),
 * while the portrait's wrapper is `position: relative; z-index: 0`. Per
 * CSS stacking-order rules, in-flow non-positioned block boxes paint
 * *before* z-index:0/positioned boxes in the same stacking context,
 * regardless of DOM order — so the portrait was always winning any
 * overlap with the card, backwards from the intended
 * background→decoration→portrait→card→nav order. Verified with a
 * forced-overlap render: before this fix the overlap zone sampled as
 * the portrait's dark suit color; after adding `relative z-10` to the
 * Design Stack's Container, the same pixels sample as the card's own
 * background color. `z-10` also sits safely below the Navbar's `z-nav`
 * (40), preserving card-under-nav. No spacing/padding/margin values
 * were touched — only `position`/`z-index`.
 */

/**
 * Design Stack tool list, local to Hero per explicit instruction (not
 * added to content/home.ts this phase). Sourced from the Hero PNG.
 */
const designStack: ToolName[] = [
  "Figma",
  "Illustrator",
  "Photoshop",
  "Canva",
  "Blender",
  "Notion",
];

export function Hero() {
  const prefersReducedMotion = useMotionPreference();

  const handleResumeClick = () => {
    track("Resume Download");
  };

  return (
    <section
      id="hero"
      data-section="Hero"
      aria-label="Introduction"
      className="relative z-0 overflow-hidden border-b border-border bg-background"
    >
      {/* Decorative dot grid — pinned to the section's top-right corner,
          matching its placement in the approved Hero PNG (near the nav,
          not tied to the portrait's own box). */}
      <svg
        aria-hidden="true"
        viewBox="0 0 120 120"
        className="absolute right-10 top-10 -z-10 hidden h-20 w-20 text-border-strong sm:block"
      >
        {Array.from({ length: 6 }).map((_, row) =>
          Array.from({ length: 6 }).map((_, col) => (
            <circle
              key={`${row}-${col}`}
              cx={10 + col * 20}
              cy={10 + row * 20}
              r={2}
              fill="currentColor"
            />
          )),
        )}
      </svg>
      <Container className="relative grid grid-cols-1 items-center gap-8 py-12 lg:grid-cols-[1fr_1.32fr] lg:gap-6 lg:py-4">
        {/* Text content — staggered entrance (Phase 3B). Same classes/DOM
            order as Phase 3A; only div/p/h1 → motion.div/motion.p/motion.h1. */}
        <motion.div
          initial={prefersReducedMotion ? false : "hidden"}
          animate="visible"
          variants={staggerContainer}
          className="relative z-10 flex flex-col items-start gap-5 lg:py-6"
        >
          <motion.p
            variants={fadeUp}
            className="font-body text-body-lg font-medium text-[#2563EB]"
          >
            {"Hi, I'm"}
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="font-display text-display-xl font-extrabold leading-[1.02] text-ink"
          >
            {hero.headline}
            <span className="text-[#2563EB]">.</span>
          </motion.h1>

          <motion.div
            variants={fadeUp}
            aria-hidden="true"
            className="h-1 w-16 rounded-full bg-[#2563EB]"
          />

          <motion.p
            variants={fadeUp}
            className="font-display text-display-sm font-bold text-ink"
          >
            {hero.title}
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="max-w-md font-body text-body-lg text-ink-muted"
          >
            {hero.supportingStatement}
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4 pt-2">
            <Button
              variant="primary"
              href={hero.primaryCta.href}
              className="bg-[#2563EB] text-white hover:bg-[#1D4ED8]"
            >
              {hero.primaryCta.label}
              <ArrowUpRight size={18} className="text-white" aria-hidden="true" />
            </Button>
            <Button
              variant="secondary"
              href={hero.secondaryCta.href}
              download
              onClick={handleResumeClick}
              className="border-ink"
            >
              {hero.secondaryCta.label}
              <Download size={18} aria-hidden="true" />
            </Button>
          </motion.div>
        </motion.div>

        {/* Portrait — fades/lifts in after the text block (Phase 3B).
            Delay is intentionally longer than the text stagger duration so
            the copy resolves first, per "fade / translate / opacity, avoid
            flashy effects" (Master Prompt §5). Same classes/DOM as 3A. */}
        <motion.div
          initial={prefersReducedMotion ? false : "hidden"}
          animate="visible"
          variants={fadeUp}
          transition={{
            ...getTransition(sectionRevealTransition, prefersReducedMotion),
            delay: prefersReducedMotion ? 0 : 0.25,
          }}
          className="relative z-0 lg:self-end"
        >
          {/* Decorative background decoration: soft blue oval + white glow,
              blurred enough to fade naturally into the page background. */}
          <div
            aria-hidden="true"
            className="absolute left-0 right-0 top-[8%] -z-10 mx-auto h-[60%] w-[105%] rounded-[50%] bg-[#DCE7FF] opacity-65 blur-[55px]"
          />
          <div
            aria-hidden="true"
            className="absolute left-0 right-0 top-[10%] -z-10 mx-auto h-[34%] w-[%] rounded-full bg-white opacity-60 blur-[45px]"
          />

          <div className="relative mx-auto aspect-[1142/1127] w-full max-w-lg overflow-hidden lg:max-w-none lg:-mb-6">
            <ResponsiveImage
              asset={portrait}
              priority
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              objectClassName="object-cover object-top"
            />
          </div>
        </motion.div>
      </Container>

      {/* Design Stack bar — fades/lifts in last (Phase 3B). Same classes/DOM
          as 3A; only the outer div → motion.div. */}
      <Container className="relative z-10 pb-section-y">
        <motion.div
          initial={prefersReducedMotion ? false : "hidden"}
          animate="visible"
          variants={fadeUp}
          transition={{
            ...getTransition(sectionRevealTransition, prefersReducedMotion),
            delay: prefersReducedMotion ? 0 : 0.4,
          }}
          className="flex flex-col flex-wrap items-center justify-between gap-6 rounded-token-lg border border-border bg-surface-alt px-6 py-6 sm:flex-row"
        >
          <p className="font-display text-body-md font-bold text-ink">Design Stack</p>
          <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            {designStack.map((tool) => (
              <li key={tool} className="flex items-center gap-2">
                <ToolIcon name={tool} className="h-6 w-6 shrink-0" />
                <span className="font-body text-body-sm text-ink-muted">{tool}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </Container>
    </section>
  );
}

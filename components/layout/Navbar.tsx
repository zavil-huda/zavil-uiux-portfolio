"use client";

import { useRef, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { navItems, resumeNavItem, sectionIds } from "@/content/navigation";
import { brandMonogram } from "@/content/personal";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { useFocusTrap } from "@/hooks/useFocusTrap";
import { useMotionPreference } from "@/providers";
import { getTransition, modalTransition } from "@/animations/transitions";
import { track } from "@/lib/analytics";
import { Container } from "./Container";
import { Button } from "@/components/ui/Button";
import { ResponsiveImage } from "@/components/media/ResponsiveImage";
import { cn, toAnchorId } from "@/lib/utils";

/**
 * Navbar — sticky, anchor-based navigation shell with scroll-spy active
 * state (v2 §1/§3/§8), a fully keyboard-operable mobile menu (focus-trapped
 * per the a11y plan, v2 §11).
 *
 * R1 (Design Restoration Sprint): nav CTA restored to the approved Figma's
 * "Let's Connect ↗" anchor link to #contact, firing the locked
 * "Contact CTA Click" event (v3, Decision 4/9a). Resume download remains
 * available via the Hero's own "Download Resume" secondary CTA.
 *
 * This is shell/chrome, not page content — no Hero/section content is
 * built here.
 *
 * R1 Final Visual Restoration (item 5): desktop nav split from a single
 * `<nav>` holding both the link list and the CTA button into a 3-part
 * Container row — logo, a `flex-1 justify-center` `<nav>` holding just
 * the link list, and the CTA as its own sibling — so the link group
 * visually balances toward the row's center instead of hugging the CTA
 * on the right edge. Container itself untouched; still one flex row.
 *
 * R2 (Underline drift bug fix): the active-label zoom (`scale-[1.08]` /
 * `scale-[1.03]`) used to live on the `<a>` itself, which is also the
 * positioning parent of the `motion.span` underline (`layoutId="nav-indicator"`).
 * Framer Motion's layout/FLIP animation for that `layoutId` measures the
 * underline's bounding box via getBoundingClientRect() and is NOT aware of
 * plain CSS transitions running on untracked ancestors. Because the `<a>`'s
 * scale was animating on its own 500ms CSS transition clock at the same time
 * the underline's spring was animating on its own clock, the two independently
 * -timed animations fought over the same box and the underline visibly drifted
 * mid-transition (only re-settling once both animations finished, which is why
 * it looked "correct after refresh").
 *
 * Fix: the scale transform now lives on an inner `<span>` that wraps only the
 * label text. The `<a>` — the underline's actual positioning parent — no
 * longer transforms at all, so Framer's FLIP measurement for the underline is
 * never invalidated mid-flight. Visual result (zoom amount, duration, easing,
 * hover behavior) is unchanged; only which element owns the transform changed.
 */
export function Navbar() {
  const activeId = useScrollSpy(sectionIds);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobilePanelRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useMotionPreference();

  useFocusTrap(mobilePanelRef, isMobileMenuOpen);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  // R1: nav CTA restored from Resume-download to the approved "Let's
  // Connect" anchor link — fires the locked "Contact CTA Click" event.
  // Name kept as handleResumeClick per the "do not rename" contract.
  const handleResumeClick = () => {
    track("Contact CTA Click");
  };

  return (
    <header
      data-component="Navbar"
      className="fixed inset-x-0 top-0 z-nav h-nav-height border-b border-border bg-surface/90 backdrop-blur"
    >
      <Container className="flex h-full items-center justify-between">
        <a href="#hero" className="focus-ring flex items-center gap-2" aria-label="Home">
          <ResponsiveImage asset={brandMonogram} priority sizes="96px" />
        </a>

        {/* Desktop nav — link group centered between logo and CTA (R1 Final
            Restoration item 5), matching the approved Hero PNG's balance.
            Still a single flex row on Container; only the nav's own share
            of that row (flex-1 + justify-center) changed, plus the CTA
            moving to its own sibling so the link group isn't pinned to it. */}
        <nav aria-label="Primary" className="hidden flex-1 justify-center md:flex">
          <ul className="flex items-center gap-7">
            {navItems.map((item) => {
              const isActive = activeId === toAnchorId(item.href);
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    aria-current={isActive ? "true" : undefined}
                    className={cn(
                      // R2: no `transform`/`scale-*` here anymore — this element
                      // is the underline's positioning parent and must stay
                      // geometrically stable for Framer's layoutId FLIP to
                      // measure correctly. Color transition kept so the
                      // active/inactive text-color change still animates
                      // smoothly, matching prior behavior.
                      "focus-ring group relative inline-flex items-center justify-center px-1 pb-1 text-body-sm transition-colors duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
                      isActive
                        ? "font-semibold text-ink"
                        : "font-medium text-ink-muted hover:text-ink",
                    )}
                  >
                    {/* R2: the zoom now lives on this inner span instead of
                        the <a>. Same scale values, duration, and easing as
                        before — only the owner element changed, so the
                        underline's parent box never transforms. */}
                    <span
                      className={cn(
                        "inline-block transform transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
                        isActive ? "scale-[1.08]" : "group-hover:scale-[1.03]",
                      )}
                    >
                      {item.label}
                    </span>
                    {isActive ? (
                      <motion.span
                        layoutId="nav-indicator"
                        transition={{
                          type: "spring",
                          stiffness: 420,
                          damping: 32,
                        }}
                        aria-hidden="true"
                        // BUGFIX (underline drift on nav/scroll): centering used to be
                        // `left-1/2 -translate-x-1/2`, i.e. a CSS class rule setting
                        // `transform: translateX(-50%)`. Framer Motion's layoutId shared
                        // transition writes its own FLIP-interpolation transform directly
                        // onto this element's inline `style.transform` on every animation
                        // frame — and inline style always wins over a class rule for the
                        // same property, so the class's -50% offset was being silently
                        // erased for the entire duration of every transition (i.e.
                        // whenever the underline actually needed to move). That's why it
                        // was perfectly centered after a static refresh (no animation ever
                        // ran, so `transform` was never touched by Framer) but drifted by
                        // half its own width during any real navigation.
                        //
                        // Fix: center with `left` (an independent, non-transform property)
                        // instead, so there's nothing left for Framer's transform writes to
                        // collide with. `transform` is now used exclusively by Framer for
                        // its own layout-projection animation, as intended.
                        style={{ left: "calc(50% - 14px)" }}
                        className="absolute bottom-[-4px] h-[2px] w-[28px] rounded-full bg-[#2962FF]"
                      />
                    ) : null}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="hidden md:flex">
          <Button
            variant="secondary"
            size="sm"
            href={resumeNavItem.href}
            onClick={handleResumeClick}
            className="border-ink"
          >
            {resumeNavItem.label}
            <ArrowUpRight size={16} aria-hidden="true" />
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="focus-ring inline-flex items-center justify-center rounded-token p-2 text-ink md:hidden"
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-nav-panel"
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          onClick={() => setIsMobileMenuOpen((open) => !open)}
        >
          {isMobileMenuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
        </button>
      </Container>

      {/* Mobile panel */}
      <AnimatePresence>
        {isMobileMenuOpen ? (
          <motion.div
            id="mobile-nav-panel"
            ref={mobilePanelRef}
            data-component="Navbar-mobile-panel"
            className="border-b border-border bg-surface md:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={getTransition(modalTransition, prefersReducedMotion)}
          >
            <Container>
              <ul className="flex flex-col gap-1 py-4">
                {navItems.map((item) => {
                  const isActive = activeId === toAnchorId(item.href);
                  return (
                    <li key={item.href} className="flex">
                      <a
                        href={item.href}
                        aria-current={isActive ? "true" : undefined}
                        onClick={closeMobileMenu}
                        className={cn(
                          "focus-ring block rounded-token px-2 py-3 text-body-md font-medium transition-all duration-300 ease-out transform ease-editorial",
                          isActive ? "text-ink" : "text-ink-muted hover:text-ink",
                        )}
                      >
                        {item.label}
                      </a>
                    </li>
                  );
                })}
                <li className="pt-2">
                  <Button
                    variant="secondary"
                    size="sm"
                    href={resumeNavItem.href}
                    onClick={() => {
                      handleResumeClick();
                      closeMobileMenu();
                    }}
                    className="w-full border-ink"
                  >
                    {resumeNavItem.label}
                    <ArrowUpRight size={16} aria-hidden="true" />
                  </Button>
                </li>
              </ul>
            </Container>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}

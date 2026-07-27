"use client";

import { useState } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import {
  featuredWorkPreview,
  featuredWorkCards,
  featuredWorkComingSoon,
} from "@/content/home";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/layout/Reveal";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { ProjectCard } from "@/components/ui/ProjectCard";
import {
  ViewAllProjectsModal,
  CaseStudyComingSoonModal,
  CurrentlyBuildingModal,
} from "@/modals";

/**
 * SelectedWork section (anchor "#work"). Source: 02_Home_Page_Content.md +
 * the approved Selected Work PNG (heading/description copy and card content
 * — see content/home.ts for the source-of-truth note).
 *
 * Phase 4A built the static structure: heading, intro, project grid, cards,
 * typography/spacing, responsive layout, image placement, tags, and CTA
 * placement.
 *
 * Phase 4B (this revision) adds the remaining behavior only, per instructed
 * scope:
 *  - Wires all 5 CTAs ("View all projects", 3× "View Case Study",
 *    "Currently Building") to their already-built, locked-copy modals.
 *    All three "View Case Study" buttons share one modal instance/state —
 *    the modal's copy is generic/project-agnostic (content/modals.ts), not
 *    per-project, so three separate instances would be redundant.
 *  - Each modal fires its own locked analytics event internally on open
 *    (already built into each modal in Phase 2) — this section only needs
 *    to flip `isOpen`, not call `track()` itself.
 *  - Hover lift on every card via `Card`'s existing `hoverable` prop
 *    (CSS-transition based, already respects `prefers-reduced-motion`).
 *  - Scroll-reveal entrance motion via the existing `<Reveal>` primitive
 *    (built in Phase 2, unused until now) — the header block reveals first,
 *    then the four grid cards cascade in with a small stagger, consistent
 *    with the "fade, translate, avoid flashy effects" motion language
 *    already used for Hero.
 *
 * Becomes a Client Component this phase (modal open/close state) — the
 * only change of that nature; all structure/copy from 4A is unchanged.
 */
export function SelectedWork() {
  const [isViewAllOpen, setIsViewAllOpen] = useState(false);
  const [isCaseStudyOpen, setIsCaseStudyOpen] = useState(false);
  const [isCurrentlyBuildingOpen, setIsCurrentlyBuildingOpen] = useState(false);

  return (
    <section id="work" data-section="SelectedWork" aria-label="Selected work">
      <Container className="pb-section-y pt-10">
        {/* Section header: eyebrow + heading + intro on the left,
            "View all projects" action on the right. */}
        <Reveal>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
            <div className="flex max-w-2xl flex-col gap-3">
              <p className="font-body text-overline uppercase text-accent">
                {featuredWorkPreview.eyebrow}
              </p>
              <h2 className="font-display text-display-lg font-extrabold text-ink">
                {featuredWorkPreview.sectionTitle}
                <span className="text-accent">.</span>
              </h2>
              <p className="max-w-xl font-body text-body-lg text-ink-muted">
                {featuredWorkPreview.description}
              </p>
            </div>

            <Button
              type="button"
              variant="link"
              className="shrink-0 text-body-md lg:mt-2"
              onClick={() => setIsViewAllOpen(true)}
            >
              {featuredWorkPreview.viewAllCtaLabel}
              <ArrowRight size={16} aria-hidden="true" />
            </Button>
          </div>
        </Reveal>

        {/* Project grid: 3 real projects + 1 "coming soon" placeholder,
            2-column on lg:+, single column below. Small stagger on entrance. */}
        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {featuredWorkCards.map((project, index) => (
            <Reveal key={project.id} delay={index * 0.1}>
              <ProjectCard
                tag={project.tag}
                title={project.title}
                description={project.description}
                cover={project.cover}
                ctaLabel={project.ctaLabel}
                onCtaClick={() => setIsCaseStudyOpen(true)}
              />
            </Reveal>
          ))}

          <Reveal delay={featuredWorkCards.length * 0.1}>
            <Card
              data-component="ComingSoonCard"
              hoverable
              className="flex h-full min-h-[280px] flex-col items-center justify-center gap-4 border-dashed p-10 text-center"
            >
              <span
                aria-hidden="true"
                className="flex h-14 w-14 items-center justify-center rounded-token-lg text-accent"
                style={{ backgroundColor: "rgb(37 99 235 / 0.10)" }}
              >
                <Sparkles size={24} />
              </span>
              <p className="font-display text-display-sm font-bold text-ink whitespace-pre-line">
                {featuredWorkComingSoon.title}
              </p>
              <Button
                type="button"
                variant="link"
                className="text-body-md text-accent"
                onClick={() => setIsCurrentlyBuildingOpen(true)}
              >
                {featuredWorkComingSoon.ctaLabel}
                <ArrowRight size={16} aria-hidden="true" />
              </Button>
            </Card>
          </Reveal>
        </div>
      </Container>

      <ViewAllProjectsModal isOpen={isViewAllOpen} onClose={() => setIsViewAllOpen(false)} />
      <CaseStudyComingSoonModal
        isOpen={isCaseStudyOpen}
        onClose={() => setIsCaseStudyOpen(false)}
      />
      <CurrentlyBuildingModal
        isOpen={isCurrentlyBuildingOpen}
        onClose={() => setIsCurrentlyBuildingOpen(false)}
      />
    </section>
  );
}

import {
  MapPin,
  Calendar,
  Brain,
  Quote,
  Target,
  PenTool,
  Rocket,
  Puzzle,
  MessageCircle,
  Users,
  Lightbulb,
  Sparkles,
  BookOpen,
} from "lucide-react";
import {
  aboutMe,
  aboutStats,
  aboutApproachCards,
  aboutBeyondDesignSkills,
} from "@/content/about";
import { portrait } from "@/content/personal";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/layout/Reveal";
import { Card } from "@/components/ui/Card";
import { ResponsiveImage } from "@/components/media/ResponsiveImage";

/**
 * About section (anchor "#about"). Source: 03_About_Page.md + the approved
 * About PNG (Phase 5A visual source of truth for this section's exact
 * heading/copy/stats/quote/approach-card content — see content/about.ts
 * for the source-of-truth note on where the PNG supersedes the doc).
 *
 * Built as one complete phase (not split structure/motion like Hero and
 * Selected Work were) per this phase's instruction — reuses the same
 * established primitives/patterns throughout: <Container>, <Card>,
 * <ResponsiveImage>, and the <Reveal> scroll-entrance primitive (same one
 * Selected Work adopted in 4B). No new tokens, no new motion values, no
 * new UI primitives.
 *
 * Local icon arrays (`statIcons`/`approachIcons`/`beyondDesignSkillIcons`)
 * pair 1:1 by array index with their corresponding content arrays — the
 * same pattern already used for Selected Work's cards, kept consistent
 * rather than inventing a content-holds-components approach.
 */
const statIcons = [MapPin, Calendar, Brain];
const approachIcons = [Target, PenTool, Rocket];
const beyondDesignSkillIcons = [Puzzle, MessageCircle, Users, Lightbulb, Sparkles, BookOpen];

export function About() {
  return (
    <section id="about" data-section="About" aria-label="About">
      <Container className="pt-10 pb-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-start lg:gap-10">
          {/* Left column: portrait, floating stats card, pull quote. */}
          <Reveal>
            <div className="flex flex-col gap-4">
              <div className="relative overflow-hidden rounded-token-lg bg-[#EEF4FF]">
                <div className="absolute inset-0">
                   <div className="absolute -left-28 -top-10 h-80 w-80 rounded-full bg-white/45 blur-[90px]" />
                   <div className="absolute left-1/2 top-[46%] h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/25" />
                </div>
                
                <div className="relative h-[430px] w-full overflow-hidden lg:h-[430px]">
                  <ResponsiveImage
                    asset={portrait}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    objectClassName="object-contain object-bottom scale-[0.88]"
                  />
                </div>
              </div>

              <Card className="relative z-10 mx-10 -mt-12 sm:mx-14">
                <dl className="grid grid-cols-3 divide-x divide-border text-center">
                  {aboutStats.map((stat, index) => {
                    const Icon = statIcons[index]!;
                    return (
                      <div key={stat.label} className="flex flex-col items-center gap-1 px-2 py-1">
                        <Icon size={24} className="text-accent" aria-hidden="true" />
                        <dt className="font-body text-[13px] leading-tight text-ink-muted">{stat.label}</dt>
                        <dd className="font-display text-body-md font-bold text-ink">
                          {stat.value}
                        </dd>
                      </div>
                    );
                  })}
                </dl>
              </Card>

              <div className="mt-5 flex items-start gap-6 rounded-token-lg bg-[#EEF4FF] p-6">
                <span
                  aria-hidden="true"
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#DCE9FF] text-accent"
                >
                  <Quote size={20} />
                </span>
                <blockquote className="max-w-[360px] font-body text-body-md leading-7 text-ink">
                  {aboutMe.quote}
                </blockquote>
              </div>
            </div>
          </Reveal>

          {/* Right column: eyebrow, heading, copy, approach highlights. */}
          <Reveal delay={0.1}>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-4">
                <p className="font-body text-overline uppercase text-accent">
                  {aboutMe.eyebrow}
                </p>
                <h2 className="font-display text-display-lg font-extrabold text-ink">
                  {aboutMe.heading}
                  <span className="text-accent">.</span>
                </h2>
                <div className="flex flex-col gap-4">
                  {aboutMe.paragraphs.map((paragraph) => (
                    <p key={paragraph} className="font-body text-body-lg text-ink-muted">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              <div aria-hidden="true" className="h-px w-full bg-border" />

              <div className="flex flex-col gap-6">
                {aboutApproachCards.map((card, index) => {
                  const Icon = approachIcons[index]!;
                  return (
                    <div key={card.title} className="flex items-start gap-4">
                      <span
                        aria-hidden="true"
                        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-token-lg bg-[#DCE9FF] text-accent"
                      >
                        <Icon size={22} />
                      </span>
                      <div className="flex flex-col gap-1">
                        <h3 className="font-display text-body-lg font-bold text-ink">
                          {card.title}
                        </h3>
                        <p className="font-body text-body-md text-ink-muted">
                          {card.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </Reveal>
        </div>

        {/* "Beyond Design" skill-chip bar, full width beneath both columns. */}
        <Reveal delay={0.2}>
          <div className="mt-8 flex flex-col items-start gap-5 rounded-token-lg border border-border bg-surface px-6 py-4 lg:flex-row lg:items-center lg:gap-8">
            <p className="shrink-0 font-display text-[18px] font-bold text-ink lg:border-r lg:border-border lg:pr-7">
              {aboutBeyondDesignSkills.label}
            </p>
            <ul className="flex min-w-0 flex-1 items-center gap-2">
              {aboutBeyondDesignSkills.skills.map((skill, index) => {
                const Icon = beyondDesignSkillIcons[index]!;
                return (
                  <li
                 key={skill}
                 className="flex min-w-0 items-center gap-1 mr-5"
               >
                    <span
                      aria-hidden="true"
                      className="flex h-7 w-7 items-center justify-center rounded-token-lg bg-[#DCE9FF] text-accent"
                    >
                      <Icon size={13} />
                    </span>
                    <span className="whitespace-nowrap font-body text-[13px] leading-tight text-ink-muted">{skill}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

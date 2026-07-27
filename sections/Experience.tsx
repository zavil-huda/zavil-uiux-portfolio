import { Briefcase, Star, Search, Box, Layers, Sparkles, Users, Calendar, PenTool, UserCheck, Quote } from "lucide-react";
import {
  journeyIntro,
  journeyMilestones,
  journeyStats,
  designPhilosophyIntro,
  designPhilosophySteps,
  designPhilosophyPromise,
} from "@/content/experience";
import { brandMark } from "@/content/personal";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/layout/Reveal";
import { Card } from "@/components/ui/Card";
import { Tag } from "@/components/ui/Tag";
import { Divider } from "@/components/ui/Divider";
import { ResponsiveImage } from "@/components/media/ResponsiveImage";

const milestoneIcons = [Briefcase, Star];
const stepIcons = [Search, Box, Layers, Sparkles];
const statIcons = [Users, Calendar, PenTool, UserCheck];

export function Experience() {
  return (
    <section id="experience" data-section="Experience" aria-label="Experience">
      <Container className="pt-16 pb-section-y">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[470px_minmax(0,1fr)] lg:gap-12">
          <Reveal>
            <div className="flex max-w-[470px] flex-col gap-5">
              <p className="font-body text-overline uppercase text-accent">
                {journeyIntro.eyebrow}
              </p>
              <h2 className="font-display text-display-lg font-extrabold leading-[1.1] text-ink">
                Building products.
                <br />
                Growing with every
                <br />
                <span className="italic text-accent">challenge.</span>
              </h2>
              {journeyIntro.paragraphs.map((paragraph) => (
                <p key={paragraph} className="font-body text-body-lg text-ink-muted">
                  {paragraph}
                </p>
              ))}
            </div>
          </Reveal>

          <div className="relative -ml-10 flex min-w-0 flex-col gap-8">
            {journeyMilestones.map((milestone, index) => {
              const MilestoneIcon = milestoneIcons[index]!;
              return (
                <Reveal key={milestone.role} delay={index * 0.1}>
                  <div className="flex items-stretch">
                    <div className="hidden w-[160px] shrink-0 pt-9 sm:block">
  <div className="flex h-full flex-col items-center">
    <span
      aria-hidden="true"
      className="flex h-5 w-5 items-center justify-center rounded-full border border-[#E5E7EB] bg-white"
    >
      <span className="h-2 w-2 rounded-full bg-[#2962FF]" />
    </span>

    <span
      aria-hidden="true"
      className="mt-1 h-8 w-px bg-border"
    />

    <p className="mt-1 whitespace-pre-line text-center font-body text-[15px] font-semibold leading-[1.45] tracking-[-0.02em] text-ink-muted">
      {milestone.duration}
    </p>

    {index !== journeyMilestones.length - 1 && (
  <div className="mt-2 flex flex-1 justify-center">
    <span
      aria-hidden="true"
      className="w-px bg-border"
    />
  </div>
)}
  </div>
</div>

                    <div className="hidden w-12 shrink-0 pt-11 sm:flex sm:items-start">
                      <span 
                       aria-hidden="true" 
                       className="mt-2 h-px w-full bg-border"
                      />
                    </div>

                    <Card className="relative min-w-0 flex-[1_0_0] rounded-[20px] px-8 py-7">
                      <Tag
                        className={
                          "absolute right-5 top-4 px-2 py-[2px] text-[11px] font-medium leading-normal " +
                          (milestone.badge === "Current"
                            ? "border-transparent bg-[#DFF6E6] text-[#2FA25A]"
                            : "border-transparent bg-[#E8F0FF] text-[#2962FF]")
                        }
                      >
                        {milestone.badge}
                      </Tag>

                      <div className="flex min-w-0 items-center gap-5 pr-8">
                        <span
                          aria-hidden="true"
                          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#DCE9FF] text-accent"
                        >
                          <MilestoneIcon size={22} />
                        </span>
                        <div className="min-w-0 flex flex-col">
                          <h3 className="font-display text-body-lg font-bold leading-tight text-ink lg:whitespace-nowrap">
                            {milestone.role}
                          </h3>
                          <p className="font-body text-body-md font-medium text-accent whitespace-nowrap">
                            {milestone.organization}
                          </p>
                        </div>
                      </div>

                      <p className="mt-2 font-body text-body-sm font-semibold text-ink-muted sm:hidden">
                        {milestone.duration}
                      </p>

                      <p className="mt-3 font-body text-[14px] leading-[1.75] text-ink-muted">
                        {milestone.overview}
                      </p>

                      <Divider className="my-5" />

                      <h4 className="font-display text-body-md font-bold text-ink">
                        Key Highlights
                      </h4>
                      <ul className="mt-3 grid grid-cols-2 gap-x-5 gap-y-2">
                        {milestone.keyHighlights.map((highlight) => (
                          <li
                            key={highlight}
                            className="flex items-start gap-2 font-body text-[13.5px] leading-6 text-ink-muted"
                          >
                            <span
                              aria-hidden="true"
                              className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                            />
                            <span className="min-w-0">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </Card>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>

        <Reveal delay={0.2}>
          <dl className="mt-16 grid grid-cols-2 gap-x-6 gap-y-8 rounded-token-lg border border-border bg-surface p-6 sm:p-8 lg:grid-cols-4 lg:gap-x-8">
            {journeyStats.map((stat, index) => {
              const StatIcon = statIcons[index]!;
              return (
                <div key={stat.label} className="flex items-center gap-2.5">
                  <span
                    aria-hidden="true"
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-token-lg bg-[#DCE9FF] text-accent"
                  >
                    <StatIcon size={18} />
                  </span>
                  <div className="flex min-w-0 flex-col">
                    <dd className="font-display text-body-md font-bold text-ink">{stat.value}</dd>
                    <dt className="font-body text-body-sm text-ink-muted">{stat.label}</dt>
                  </div>
                </div>
              );
            })}
          </dl>
        </Reveal>
      </Container>

      <Container className="pb-section-y">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="relative flex max-w-[550px] flex-col gap-4">
              <div
                aria-hidden="true"
                className="absolute -bottom-8 -left-8 -z-10 h-48 w-64 rounded-full bg-surface-alt blur-3xl"
              />

              <p className="font-body text-overline uppercase text-accent">
                {designPhilosophyIntro.eyebrow}
              </p>
              <h2 className="font-display text-display-lg font-extrabold text-ink">
                Design is intentional.
                <br />
                <span className="text-accent">Always.</span>
              </h2>
              {designPhilosophyIntro.paragraphs.map((paragraph) => (
                <p key={paragraph} className="font-body text-body-lg text-ink-muted">
                  {paragraph}
                </p>
              ))}

              <div className="mt-4 flex flex-col items-start">
                  <ResponsiveImage
                   asset={brandMark}
                   className="ml-[-45px] -mb-8 h-auto w-[280px]"
                   sizes="280px"
                   />

                   <p className="mt-[-8px] font-body text-[18px] font-medium uppercase tracking-[0.16em] text-ink-muted">
                    {designPhilosophyIntro.signatureCaption}
                
                </p>
              </div>
            </div>
          </Reveal>

          <div className="relative flex flex-col gap-10">
            <div
              aria-hidden="true"
              className="absolute left-6 top-3 bottom-3 hidden w-px bg-border sm:block"
            />

            {designPhilosophySteps.map((step, index) => {
              const StepIcon = stepIcons[index]!;
              return (
                <Reveal key={step.number} delay={index * 0.08}>
                  <div className="flex items-start gap-6">
                    <span
                      aria-hidden="true"
                      className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-[3px] border-white bg-[#EEF4FF] text-accent shadow-[0_4px_12px_rgba(41,98,255,0.06)]"
                    >
                      <StepIcon size={20} />
                    </span>
                    <div className="flex flex-1 flex-wrap items-start gap-x-6 gap-y-2 border-b border-border pb-8">
                      <span className="font-display text-display-sm font-extrabold text-accent">
                        {step.number}
                      </span>
                      <div className="flex min-w-[200px] flex-1 flex-col gap-1">
                        <h3 className="font-display text-body-lg font-bold text-ink">
                          {step.title}
                        </h3>
                        <p className="font-body text-body-md text-ink-muted">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>

        <Reveal delay={0.2}>
          <div className="mt-14 flex flex-col gap-8 rounded-token-lg border border-border bg-surface py-5 px-7 lg:flex-row lg:items-center">
            <div className="flex flex-1 items-start gap-4">
              <span
                aria-hidden="true"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-surface-alt text-accent"
              >
                <Quote size={18} />
              </span>
              <blockquote className="font-display text-body-lg font-medium italic text-ink">
                {designPhilosophyPromise.quote}
              </blockquote>
            </div>

            <div aria-hidden="true" className="hidden h-16 w-px bg-border lg:block" />

            <div className="flex flex-1 items-start gap-4">
              <span
                aria-hidden="true"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-surface-alt text-accent"
              >
                <Sparkles size={18} />
              </span>
              <div className="flex flex-col gap-1">
                <p className="font-body text-overline uppercase text-accent">
                  {designPhilosophyPromise.label}
                </p>
                <p className="font-body text-body-sm text-ink-muted">
                  {designPhilosophyPromise.body}
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

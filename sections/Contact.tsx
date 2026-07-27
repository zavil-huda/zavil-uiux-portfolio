"use client";
import { Mail, Linkedin, Github, FileText, MapPin, ArrowUpRight } from "lucide-react";
import { contactHero, contactChannels } from "@/content/contact";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/layout/Reveal";
import { Divider } from "@/components/ui/Divider";
import { Button } from "@/components/ui/Button";
import { track } from "@/lib/analytics";

/**
 * Contact section (anchor "#contact"). Source: 09_Contact_Page.md +
 * the approved 06_Contact.png (Phase 7A visual source of truth for this
 * section's exact heading/copy/CTA/channel-list — see content/contact.ts
 * for the source-of-truth note on where the PNG supersedes the doc, same
 * pattern already used by About/Experience in earlier phases).
 *
 * Two-column layout matching the PNG: left is the closing statement +
 * "Start a Conversation" mailto CTA + availability note; right is the
 * channel list (Email / LinkedIn / GitHub / Resume / Location), each row
 * an icon roundel + label + value, external links carrying an
 * arrow-up-right glyph and firing their locked analytics event.
 *
 * Contact mechanism stays locked to mailto/tel/LinkedIn/GitHub/resume
 * links only (v2 §8) — no form, no API, no database. Reuses existing
 * primitives only: <Container>, <Reveal>, <Divider>, <Button>. No new UI
 * primitives, no new tokens, no new animation variants.
 */
const channelIcons = {
  email: Mail,
  linkedin: Linkedin,
  github: Github,
  resume: FileText,
  location: MapPin,
} as const;

export function Contact() {
  return (
    <section id="contact" data-section="Contact" aria-label="Contact">
      <Container className="pt-10 pb-section-y">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left column — closing statement, CTA, availability. */}
          <Reveal>
            <div className="relative flex flex-col gap-6">
              {/* Decorative flowing-thread graphic — purely visual, echoes
                  the PNG's bottom-left line art. Hidden on small screens
                  where there isn't room for it to read as intentional. */}
              <svg
                aria-hidden="true"
                viewBox="0 0 560 320"
                className="pointer-events-none absolute -bottom-24 -left-16 -z-10 hidden w-[128%] max-w-none text-accent opacity-40 sm:block lg:opacity-60"
              >
                {Array.from({ length: 14 }).map((_, i) => {
                  const offset = i * 6;
                  return (
                    <path
                      key={i}
                      d={`M0,${170 + offset * 0.6} C140,${120 - offset} 260,${210 + offset} 380,${90 - offset * 0.8} S560,${150 + offset} 560,${60 - offset * 0.5}`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="0.75"
                      opacity={1 - i * 0.06}
                    />
                  );
                })}
              </svg>

              <p className="font-body text-overline uppercase text-accent">
                {contactHero.eyebrow}
              </p>
              <div aria-hidden="true" className="h-1 w-12 rounded-full bg-accent" />

              <h2 className="font-display text-display-lg font-extrabold text-ink">
                {contactHero.headingLine1}
                <br />
                {contactHero.headingLine2}
                <br />
                <span className="italic text-accent">{contactHero.headingAccent}</span>
              </h2>

              <div aria-hidden="true" className="h-1 w-10 rounded-full bg-accent" />

              <p className="max-w-md font-body text-body-lg text-ink-muted">
                {contactHero.copy}
              </p>

              <div>
                <Button
                  variant="primary"
                  href={contactHero.cta.href}
                  onClick={() => track(contactHero.cta.analyticsEvent)}
                >
                  {contactHero.cta.label}
                  <ArrowUpRight size={18} aria-hidden="true" />
                </Button>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <span
                  aria-hidden="true"
                  className="h-2.5 w-2.5 shrink-0 rounded-full bg-emerald-500"
                />
                <p className="font-body text-body-sm text-ink-muted">
                  {contactHero.availabilityNote}
                </p>
              </div>
            </div>
          </Reveal>

          {/* Right column — contact channel list. */}
          <Reveal delay={0.1}>
            <dl className="mt-[88px] flex flex-col">
              {contactChannels.map((channel, index) => {
                const Icon = channelIcons[channel.key];
                const isLink = Boolean(channel.href);

                const value = isLink ? (
                  <a
                    href={channel.href}
                    target={channel.external ? "_blank" : undefined}
                    rel={channel.external ? "noreferrer noopener" : undefined}
                    download={channel.download || undefined}
                    onClick={() => {
                      if (channel.analyticsEvent) track(channel.analyticsEvent);
                    }}
                    className="focus-ring inline-flex items-center gap-1.5 font-body text-body-md font-semibold text-ink transition-colors duration-200 ease-editorial hover:text-accent"
                  >
                    {channel.value}
                    {channel.external ? (
                      <ArrowUpRight size={14} aria-hidden="true" className="shrink-0" />
                    ) : null}
                  </a>
                ) : (
                  <span className="font-body text-body-md font-semibold text-ink">
                    {channel.value}
                  </span>
                );

                return (
                  <div key={channel.key}>
                    {index > 0 ? <Divider className="my-4" /> : null}
                    <div className="flex items-center gap-4">
                      <span
                        aria-hidden="true"
                        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent-muted/10 text-accent"
                      >
                        <Icon size={20} />
                      </span>
                      <div className="flex flex-col">
                        <dt className="font-body text-overline uppercase text-accent">
                          {channel.label}
                        </dt>
                        <dd>{value}</dd>
                      </div>
                    </div>
                  </div>
                );
              })}
            </dl>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

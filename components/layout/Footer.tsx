"use client";

import { footer, socialLinks, contactInfo } from "@/content/contact";
import { brandMonogram } from "@/content/personal";
import { Container } from "./Container";
import { Divider } from "@/components/ui/Divider";
import { ResponsiveImage } from "@/components/media/ResponsiveImage";
import { track } from "@/lib/analytics";

/**
 * Footer — name, title, tagline, resume/social links (v2 §4, source: 09).
 * Phase 2: fully styled shell. Social/email links fire their locked
 * analytics events (v3, Decision 4) on click.
 *
 * Marked "use client" because it attaches onClick analytics handlers —
 * everything rendered here is still static chrome, not page content.
 */
export function Footer() {
  return (
    <footer data-component="Footer" className="border-t border-border bg-surface-alt">
      <Container className="flex flex-col gap-8 py-16">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div className="flex items-center gap-3">
            <ResponsiveImage asset={brandMonogram} sizes="72px" />
            <div>
              <p data-part="name" className="font-display text-body-lg text-ink">
                {footer.name}
              </p>
              <p data-part="title" className="text-body-sm text-ink-muted">
                {footer.title}
              </p>
            </div>
          </div>

          <nav aria-label="Social links">
            <ul className="flex items-center gap-6">
              {socialLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    onClick={() => {
                      if (link.analyticsEvent) track(link.analyticsEvent);
                    }}
                    className="focus-ring text-body-sm text-ink-muted transition-colors duration-200 ease-editorial hover:text-ink"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={contactInfo.emailHref}
                  onClick={() => track("Email Click")}
                  className="focus-ring text-body-sm text-ink-muted transition-colors duration-200 ease-editorial hover:text-ink"
                >
                  {contactInfo.email}
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <Divider />

        <div className="flex flex-col items-start justify-between gap-2 text-caption text-ink-muted md:flex-row md:items-center">
          <p data-part="tagline">{footer.tagline}</p>
          <p data-part="copyright">
            © {new Date().getFullYear()} {footer.name}
          </p>
        </div>
      </Container>
    </footer>
  );
}

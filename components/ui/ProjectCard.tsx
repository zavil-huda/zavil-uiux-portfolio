import { ArrowRight } from "lucide-react";
import type { ImageAsset } from "@/types/content";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { ResponsiveImage } from "@/components/media/ResponsiveImage";

/**
 * ProjectCard — reusable project-summary card. Built in Phase 4A (static:
 * cover image, category tag, title, description, CTA placement — no
 * hover/motion/click behavior).
 *
 * Phase 4B adds: hover lift (`Card`'s existing `hoverable` prop — CSS
 * transition, already respects `prefers-reduced-motion` via the global
 * override in app/globals.css) and `onCtaClick`, wired by the parent
 * section to open the shared `CaseStudyComingSoonModal`.
 */
export interface ProjectCardProps {
  tag: string;
  title: string;
  description: string;
  cover: ImageAsset;
  ctaLabel: string;
  onCtaClick?: () => void;
}

export function ProjectCard({
  tag,
  title,
  description,
  cover,
  ctaLabel,
  onCtaClick,
}: ProjectCardProps) {
  return (
    <Card
      data-component="ProjectCard"
      hoverable
      className="flex h-full flex-col overflow-hidden p-0"
    >
      <div className="relative aspect-[2/1] w-full overflow-hidden bg-surface-alt">
        <ResponsiveImage
          asset={cover}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          objectClassName="object-cover"
        />
      </div>

      <div className="flex flex-1 flex-col gap-3 p-6">
        <p className="font-body text-overline font-semibold uppercase text-accent">{tag}</p>
        <h3 className="font-display text-display-sm font-bold text-ink">{title}</h3>
        <p className="font-body text-body-md text-ink-muted">{description}</p>

        <div className="mt-auto flex justify-end pt-2">
          <Button type="button" variant="link" className="text-body-md" onClick={onCtaClick}>
            {ctaLabel}
            <ArrowRight size={16} aria-hidden="true" />
          </Button>
        </div>
      </div>
    </Card>
  );
}

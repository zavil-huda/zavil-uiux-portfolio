import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * SectionHeader — eyebrow + heading + optional supporting copy, used at the
 * top of every section for consistent rhythm (v2 §4). Phase 2: fully
 * styled against the typography token scale.
 */
export interface SectionHeaderProps {
  eyebrow?: string;
  heading: string;
  supportingCopy?: string;
  /** Heading level for correct document outline — see a11y plan (v2 §11). */
  as?: "h1" | "h2" | "h3";
  align?: "left" | "center";
  children?: ReactNode;
  className?: string;
}

export function SectionHeader({
  eyebrow,
  heading,
  supportingCopy,
  as: HeadingTag = "h2",
  align = "left",
  className,
}: SectionHeaderProps) {
  return (
    <header
      data-component="SectionHeader"
      className={cn(
        "flex flex-col gap-3",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p data-part="eyebrow" className="font-body text-overline uppercase text-ink-muted">
          {eyebrow}
        </p>
      ) : null}
      <HeadingTag data-part="heading" className="font-display text-display-md text-ink">
        {heading}
      </HeadingTag>
      {supportingCopy ? (
        <p data-part="supporting-copy" className="max-w-container-narrow text-body-lg text-ink-muted">
          {supportingCopy}
        </p>
      ) : null}
    </header>
  );
}

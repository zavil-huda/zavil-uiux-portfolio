import type { ElementType, ReactNode, HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

/**
 * Container — the site's horizontal-rhythm primitive (v2 §5/§7 container
 * system). Every shell/section wraps its content in this instead of
 * repeating max-width/padding utilities inline, so the container width and
 * gutter are a single token change (`--container-max`, `gutter` spacing
 * token in tailwind.config.ts) rather than a find-and-replace.
 *
 * `narrow` uses `--container-narrow-max` for text-heavy content (e.g. long
 * paragraphs) where the full-width container would hurt readability —
 * available now, applied by sections once they're built.
 */
export interface ContainerProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  narrow?: boolean;
  as?: ElementType;
}

export function Container({
  children,
  narrow = false,
  as: Tag = "div",
  className,
  ...rest
}: ContainerProps) {
  return (
    <Tag
      className={cn(
        "mx-auto w-full px-gutter",
        narrow ? "max-w-container-narrow" : "max-w-container",
        className,
      )}
      {...rest}
    >
      {children}
    </Tag>
  );
}

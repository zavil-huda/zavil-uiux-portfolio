import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Tag — small pill for skills/categories. Phase 2: fully styled against
 * the token system.
 */
export interface TagProps {
  children: ReactNode;
  className?: string;
}

export function Tag({ children, className }: TagProps) {
  return (
    <span
      data-component="Tag"
      className={cn(
        "inline-flex items-center rounded-full border border-border px-3 py-1 text-caption text-ink-muted",
        className,
      )}
    >
      {children}
    </span>
  );
}

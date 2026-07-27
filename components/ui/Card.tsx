import type { ReactNode, HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

/**
 * Card — base surface for project cards, certification cards, timeline
 * entries. Phase 2: fully styled against the token system, including a
 * subtle hover lift (respects prefers-reduced-motion via the global CSS
 * override in app/globals.css).
 */
export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  hoverable?: boolean;
}

export function Card({ children, hoverable = false, className, ...rest }: CardProps) {
  return (
    <div
      data-component="Card"
      className={cn(
        "rounded-token-lg border border-border bg-surface p-6 shadow-token-sm",
        hoverable &&
          "transition-transform duration-300 ease-editorial hover:-translate-y-1 hover:shadow-token-md",
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
}

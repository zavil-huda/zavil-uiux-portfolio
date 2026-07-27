import { cn } from "@/lib/utils";

/**
 * Divider — hairline rule for editorial sections. Phase 2: token-styled.
 */
export interface DividerProps {
  className?: string;
}

export function Divider({ className }: DividerProps) {
  return (
    <hr data-component="Divider" className={cn("border-t border-border", className)} />
  );
}

import type { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Button — reusable primitive (v2 §4), now fully styled against the token
 * system (Phase 2). Variants: primary, secondary, ghost, icon, link. Supports
 * `href` (renders as a link) or native button props (renders as a button).
 *
 * Colors/spacing still resolve to Phase-1/2 placeholder token values — see
 * app/globals.css — real values swap in per the locked Figma workflow
 * without touching this component.
 *
 * `link` variant added in Phase 4A: an inline accent-colored text link
 * (no box, no padding), for the "View all projects" / "View Case Study" /
 * "Currently Building" text-and-arrow CTAs on the Selected Work PNG. Purely
 * additive — every other variant and existing call site (Hero) is
 * unchanged.
 */

export type ButtonVariant = "primary" | "secondary" | "ghost" | "icon" | "link";
export type ButtonSize = "md" | "sm";

interface BaseButtonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
}

type ButtonAsButton = BaseButtonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsLink = BaseButtonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

const baseStyles =
  "focus-ring inline-flex items-center justify-center gap-2 rounded-token font-body font-medium transition-colors duration-200 ease-editorial disabled:cursor-not-allowed disabled:opacity-50";

const variantStyles: Record<ButtonVariant, string> = {
  primary: "bg-accent !text-white hover:!bg-[#2458E6]",
  secondary:
    "bg-transparent text-ink border border-border-strong hover:border-ink hover:bg-surface-alt",
  ghost: "bg-transparent text-ink hover:bg-surface-alt",
  icon: "bg-transparent text-ink hover:bg-surface-alt rounded-full p-2",
  link: "!text-[#2563EB] bg-transparent p-0 hover:!text-[#1D4ED8]",
};

const sizeStyles: Record<ButtonSize, string> = {
  md: "px-6 py-3 text-body-md",
  sm: "px-4 py-2 text-body-sm",
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  ...rest
}: ButtonProps) {
  const classes = cn(
    baseStyles,
    variantStyles[variant],
    variant !== "icon" && variant !== "link" ? sizeStyles[size] : undefined,
    className,
  );

  if ("href" in rest && rest.href) {
    return (
      <a data-component="Button" data-variant={variant} className={classes} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <button
      data-component="Button"
      data-variant={variant}
      className={classes}
      {...(rest as ButtonAsButton)}
    >
      {children}
    </button>
  );
}

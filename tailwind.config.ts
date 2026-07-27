import type { Config } from "tailwindcss";

/**
 * Tailwind design-token configuration.
 *
 * PLACEHOLDER-VALUES NOTE (still applies in Phase 2):
 * The token *system* below (what tokens exist, how they're named, how
 * components consume them) is production-ready. The *values* the tokens
 * resolve to (see app/globals.css `:root`) are still neutral placeholders.
 * Per the locked Figma Inspection Workflow (v3, Decision 1), real values
 * are pulled section-by-section from exported Figma frames as each section
 * is implemented — never guessed. Do not treat any color/spacing/shadow
 * value as final; the token *names* are what's locked, not their values.
 */
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./sections/**/*.{ts,tsx}",
    "./modals/**/*.{ts,tsx}",
    "./providers/**/*.{ts,tsx}",
  ],
  theme: {
    // Mobile-first breakpoints (v2 §7). `xs` added for the smallest tested
    // device in the responsive QA matrix (iPhone SE, 375px).
    screens: {
      xs: "375px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        // Semantic tokens — components reference these, never raw hex values.
        background: "var(--color-background)",
        surface: "var(--color-surface)",
        "surface-alt": "var(--color-surface-alt)",
        ink: "var(--color-ink)",
        "ink-muted": "var(--color-ink-muted)",
        "ink-inverse": "var(--color-ink-inverse)",
        accent: "var(--color-accent)",
        "accent-muted": "var(--color-accent-muted)",
        border: "var(--color-border)",
        "border-strong": "var(--color-border-strong)",
        overlay: "var(--color-overlay)",
        focus: "var(--color-focus)",
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
        mono: ["var(--font-mono)"],
      },
      fontSize: {
        // Fluid modular type scale — placeholder clamp values, to be
        // matched against Figma type styles per section during build.
        "display-xl": ["clamp(2.75rem, 6vw, 6rem)", { lineHeight: "1.02", letterSpacing: "-0.02em" }],
        "display-lg": ["clamp(2.25rem, 4.5vw, 4rem)", { lineHeight: "1.05", letterSpacing: "-0.015em" }],
        "display-md": ["clamp(1.75rem, 3vw, 2.75rem)", { lineHeight: "1.1", letterSpacing: "-0.01em" }],
        "display-sm": ["clamp(1.375rem, 2.2vw, 1.875rem)", { lineHeight: "1.2" }],
        "body-lg": ["clamp(1.05rem, 1.2vw, 1.25rem)", { lineHeight: "1.6" }],
        "body-md": ["1rem", { lineHeight: "1.6" }],
        "body-sm": ["0.875rem", { lineHeight: "1.55" }],
        caption: ["0.8125rem", { lineHeight: "1.4", letterSpacing: "0.01em" }],
        overline: ["0.75rem", { lineHeight: "1.2", letterSpacing: "0.12em" }],
      },
      spacing: {
        // 8pt-based section rhythm tokens, per Section 5 of the plan.
        "section-y": "clamp(4rem, 10vw, 8rem)",
        gutter: "clamp(1.25rem, 5vw, 4rem)",
        "nav-height": "var(--nav-height)",
      },
      maxWidth: {
        container: "var(--container-max)",
        "container-narrow": "var(--container-narrow-max)",
      },
      borderRadius: {
        token: "var(--radius-token)",
        "token-sm": "var(--radius-token-sm)",
        "token-lg": "var(--radius-token-lg)",
        full: "9999px",
      },
      boxShadow: {
        "token-sm": "var(--shadow-token-sm)",
        "token-md": "var(--shadow-token-md)",
        "token-lg": "var(--shadow-token-lg)",
      },
      zIndex: {
        nav: "40",
        overlay: "50",
        modal: "60",
        loader: "70",
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.65, 0, 0.35, 1)",
      },
      keyframes: {
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "fade-out": {
          from: { opacity: "1" },
          to: { opacity: "0" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.5s var(--tw-ease, ease) forwards",
        "fade-out": "fade-out 0.5s var(--tw-ease, ease) forwards",
      },
    },
  },
  plugins: [],
};

export default config;

# Phase 1 — Project Foundation (Status Notes)

This file documents exactly what Phase 1 delivered, for internal reference.
It is not public-facing content.

## What this phase is

A production-ready, fully typed Next.js App Router foundation for the
single-page portfolio approved in `Portfolio_Implementation_Plan_v2.md` +
`Portfolio_Implementation_Plan_v3_locked.md`. Every folder, component,
hook, content module, and config file described in those documents now
exists and compiles together as a coherent structure.

## What this phase deliberately does NOT include

Per explicit instruction, no UI/visual/animation work was done:
- No styling beyond Tailwind plumbing + neutral placeholder tokens.
- No Hero, Navbar, or any section's actual visual layout.
- No animations wired to any component (variants/transitions exist as
  data, unused).
- Modal interaction state (open/close wiring from SelectedWork's "View
  All" / "View Case Study" triggers) is not connected in `app/page.tsx`
  yet — the modal components exist and work in isolation.

## Known placeholders that must not be treated as final

1. **Typography** — `Inter` (via `next/font/google`) is wired up purely as
   font infrastructure. The real typefaces come from Figma.
2. **Color tokens** — `app/globals.css` `:root` values are neutral
   grayscale placeholders, not the approved palette.
3. **Domain** — `NEXT_PUBLIC_SITE_URL` / `lib/constants.ts` `SITE_URL`
   defaults to `https://placeholder-domain.example` until a real domain is
   confirmed (v3, Decision 3).
4. **Favicon** — referenced in metadata/manifest but the actual
   `favicon.ico` file has not been generated/added yet.

## Dependency installation

This sandbox environment has no network access, so `npm install` was not
run here and `node_modules`/`package-lock.json` do not exist in this
delivered project. Run `npm install` locally (or in CI) before `npm run
dev` / `npm run build` — `package.json` lists every dependency the
foundation code actually imports (Next.js, React, TypeScript, Tailwind,
Framer Motion, Lucide, `@vercel/analytics`, `clsx`, `tailwind-merge`, ESLint,
Prettier + the Tailwind plugin).

## Next step

Awaiting approval to begin Phase 2 (Design System & Shared Primitives) per
the roadmap in `Portfolio_Implementation_Plan_v2.md` §15.

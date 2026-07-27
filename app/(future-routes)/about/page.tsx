import { redirect } from "next/navigation";

/**
 * Scaffolded future route (v2 §1/§2/§14) — not linked from any nav in v1.
 * Redirects to the corresponding anchor on the single-page site so the
 * route exists (for a future standalone-page migration) without replacing
 * the current scrolling experience.
 */
export default function AboutFutureRoute() {
  redirect("/#about");
}

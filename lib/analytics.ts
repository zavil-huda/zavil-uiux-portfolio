import { track as vercelTrack } from "@vercel/analytics";
import type { AnalyticsEventName } from "@/types/content";

/**
 * Single analytics abstraction (v2 §10, finalized by v3 Decision 4).
 *
 * Every trigger in the app calls `track()` from this file — never
 * `@vercel/analytics` directly, and never a raw string event name (the
 * AnalyticsEventName union in types/content.ts makes an unapproved event
 * name a compile error). If GA4 is added later, this is the only file that
 * changes.
 *
 * Exactly 8 locked events, no more without a future request:
 * Resume Download, Email Click, GitHub Click, LinkedIn Click,
 * View All Projects, View Case Study, Currently Building Modal,
 * Contact CTA Click.
 */
export function track(
  event: AnalyticsEventName,
  props?: Record<string, string | number | boolean | null>,
) {
  try {
    vercelTrack(event, props);
  } catch {
    // Analytics must never break the UI. Fail silently (e.g. ad-blockers).
  }
}

import { Analytics } from "@vercel/analytics/react";

/**
 * AnalyticsProvider — wires up Vercel Analytics only (v2 §10, locked by
 * v3 Decision 4). Google Analytics/Plausible are explicitly not integrated
 * in this version. All custom event tracking flows through lib/analytics.ts
 * (`track()`), not through this component directly.
 */
export function AnalyticsProvider() {
  return <Analytics />;
}

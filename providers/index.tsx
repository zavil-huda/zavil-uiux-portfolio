import type { ReactNode } from "react";
import { AnalyticsProvider } from "./AnalyticsProvider";
import { MotionProvider } from "./MotionProvider";

/**
 * AppProviders — single composition point for all providers, mounted once
 * in app/layout.tsx. Adding a future provider (e.g. GA4) means editing this
 * file only, not every consuming component.
 */
export function AppProviders({ children }: { children: ReactNode }) {
  return (
    <MotionProvider>
      {children}
      <AnalyticsProvider />
    </MotionProvider>
  );
}

export { useMotionPreference } from "./MotionProvider";

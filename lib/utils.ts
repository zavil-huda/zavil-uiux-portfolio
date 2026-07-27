import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { SITE_URL } from "./constants";

/**
 * Merge Tailwind class names safely (handles conditional classes and
 * resolves conflicting utility classes). Used by every component instead of
 * manual string concatenation.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Strips a leading "#" from an anchor id, e.g. "#about" -> "about".
 * Used by the scroll-spy/navbar infrastructure.
 */
export function toAnchorId(href: string) {
  return href.startsWith("#") ? href.slice(1) : href;
}

/**
 * Builds an absolute URL from SITE_URL + a path, for metadata/JSON-LD use.
 */
export function absoluteUrl(path: string) {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${normalizedPath}`;
}

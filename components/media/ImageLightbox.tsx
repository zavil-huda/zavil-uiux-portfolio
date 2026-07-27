"use client";

import type { ImageAsset } from "@/types/content";
import { useLockBodyScroll } from "@/hooks/useLockBodyScroll";

/**
 * ImageLightbox — for Selected Work / case study screens (v2 §4).
 * FOUNDATION STUB: behavior scaffolding (body scroll lock) only, no
 * styling, transitions, or keyboard-nav-between-images implemented yet.
 */
export interface ImageLightboxProps {
  images: ImageAsset[];
  activeIndex: number | null;
  onClose: () => void;
}

export function ImageLightbox({ images, activeIndex, onClose }: ImageLightboxProps) {
  useLockBodyScroll(activeIndex !== null);

  if (activeIndex === null) return null;
  const activeImage = images[activeIndex];
  if (!activeImage) return null;

  return (
    <div data-component="ImageLightbox" role="dialog" aria-modal="true" onClick={onClose}>
      <img src={activeImage.src} alt={activeImage.alt} />
    </div>
  );
}

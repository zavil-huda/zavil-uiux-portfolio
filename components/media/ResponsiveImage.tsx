import Image from "next/image";
import type { ImageAsset } from "@/types/content";

/**
 * ResponsiveImage — wraps next/image with consistent aspect-ratio handling
 * (v2 §4/§12).
 *
 * `className` / `fill` / `objectClassName` are optional additions for
 * art-directed placements (e.g. the Hero's bleed portrait, which needs to
 * fill a positioned container rather than render at its intrinsic size).
 * All existing call sites (e.g. Navbar's fixed-size monogram) are
 * unaffected — they never pass these props, so behavior there is
 * unchanged.
 */
export interface ResponsiveImageProps {
  asset: ImageAsset;
  priority?: boolean;
  sizes?: string;
  /** Applied to the wrapping element when `fill` is used, or to the <img> itself otherwise. */
  className?: string;
  /** Use next/image's `fill` layout inside a positioned parent instead of intrinsic width/height. */
  fill?: boolean;
  /** Extra classes for the <img> itself when `fill` is used (e.g. object-position). */
  objectClassName?: string;
}

export function ResponsiveImage({
  asset,
  priority,
  sizes,
  className,
  fill,
  objectClassName,
}: ResponsiveImageProps) {
  if (fill) {
    return (
      <Image
        data-component="ResponsiveImage"
        src={asset.src}
        alt={asset.alt}
        fill
        priority={priority}
        sizes={sizes}
        className={objectClassName ?? "object-cover"}
      />
    );
  }

  return (
    <Image
      data-component="ResponsiveImage"
      src={asset.src}
      alt={asset.alt}
      width={asset.width}
      height={asset.height}
      priority={priority}
      sizes={sizes}
      className={className}
    />
  );
}

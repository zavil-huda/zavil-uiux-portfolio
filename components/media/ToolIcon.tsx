/**
 * ToolIcon — simplified, recognizable marks for the Hero "Design Stack"
 * bar (Figma, Illustrator, Photoshop, Canva, Blender, Notion). These are
 * original simplified glyphs in each tool's brand color, not reproductions
 * of the official logo artwork.
 */

export type ToolName =
  | "Figma"
  | "Illustrator"
  | "Photoshop"
  | "Canva"
  | "Blender"
  | "Notion";

export interface ToolIconProps {
  name: ToolName;
  className?: string;
}

function FigmaGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path d="M8 1a3.5 3.5 0 0 0 0 7h3.5V1H8Z" fill="#F24E1E" />
      <path d="M11.5 8H8a3.5 3.5 0 1 0 3.5 3.5V8Z" fill="#A259FF" />
      <path d="M11.5 1H15a3.5 3.5 0 1 1 0 7h-3.5V1Z" fill="#FF7262" />
      <path d="M15 8a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z" fill="#1ABCFE" />
      <path d="M8 15a3.5 3.5 0 1 0 3.5 3.5V15H8Z" fill="#0ACF83" />
    </svg>
  );
}

function IllustratorGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="3" fill="#330000" />
      <text
        x="12"
        y="16.5"
        textAnchor="middle"
        fontSize="10"
        fontWeight="700"
        fontFamily="Arial, sans-serif"
        fill="#FF9A00"
      >
        Ai
      </text>
    </svg>
  );
}

function PhotoshopGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="3" fill="#001E36" />
      <text
        x="12"
        y="16.5"
        textAnchor="middle"
        fontSize="10"
        fontWeight="700"
        fontFamily="Arial, sans-serif"
        fill="#31A8FF"
      >
        Ps
      </text>
    </svg>
  );
}

function CanvaGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="10" fill="#00C4CC" />
      <path
        d="M12 6.5a5.5 5.5 0 1 0 4.9 8h-2.6a3 3 0 1 1 0-4h2.9a5.5 5.5 0 0 0-5.2-4Z"
        fill="#ffffff"
      />
    </svg>
  );
}

function BlenderGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <circle cx="12" cy="9.5" r="7" fill="#E87D0D" />
      <path d="M7 17.5 12 21l5-3.5-5-3-5 3Z" fill="#E87D0D" />
      <circle cx="12" cy="9.5" r="3.4" fill="#ffffff" />
    </svg>
  );
}

function NotionGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="3" fill="#000000" />
      <path
        d="M7 6.5h2.6l4.8 7.4V6.5H17v11h-2.5l-4.9-7.5v7.5H7v-11Z"
        fill="#ffffff"
      />
    </svg>
  );
}

const glyphs: Record<ToolName, (props: { className?: string }) => JSX.Element> = {
  Figma: FigmaGlyph,
  Illustrator: IllustratorGlyph,
  Photoshop: PhotoshopGlyph,
  Canva: CanvaGlyph,
  Blender: BlenderGlyph,
  Notion: NotionGlyph,
};

export function ToolIcon({ name, className }: ToolIconProps) {
  const Glyph = glyphs[name];
  return <Glyph className={className} />;
}

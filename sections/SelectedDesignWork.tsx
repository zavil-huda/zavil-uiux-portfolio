import { selectedWorkIntro } from "@/content/selected-work";

/**
 * SelectedDesignWork section (anchor "#selected-design-work"). Source:
 * 07_Selected_Design_Work.md. FOUNDATION STUB — structure only.
 */
export function SelectedDesignWork() {
  return (
    <section
      id="selected-design-work"
      data-section="SelectedDesignWork"
      aria-label="Selected design work"
    >
      <h2>Selected Design Work</h2>
      <p>{selectedWorkIntro}</p>
    </section>
  );
}

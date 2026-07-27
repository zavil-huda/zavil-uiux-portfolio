import { certifications } from "@/content/certifications";

/**
 * Certifications section (anchor "#certifications"). Source:
 * 08_Certifications.md. FOUNDATION STUB — structure only.
 */
export function Certifications() {
  return (
    <section
      id="certifications"
      data-section="Certifications"
      aria-label="Certifications"
    >
      <h2>Certifications</h2>
      <p data-part="entry-count">{certifications.length} certifications</p>
    </section>
  );
}

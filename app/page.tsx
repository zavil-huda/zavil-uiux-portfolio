import { Navbar, Footer, PageTransition } from "@/components/layout";
import { FirstVisitLoader } from "@/components/loader";
import {
  Hero,
  SelectedWork,
  About,
  Experience,
  Contact,
} from "@/sections";

/**
 * The entire public site — a single scrolling page composed of ordered
 * section stubs (v2 §1/§3), matching the Master Prompt's approved flow:
 * Hero → Selected Work → About → Experience → Selected Design Work →
 * Certifications → Contact → Footer.
 *
 * Phase 2 adds the application shell around these sections (sticky Navbar,
 * page-level fade-in via PageTransition, Footer) and reserves top spacing
 * for the fixed nav height. Section internals themselves are still
 * unstyled structural stubs — no Hero/About/Projects/Experience/Contact
 * content design happens in this phase.
 */
export default function HomePage() {
  return (
    <>
      <FirstVisitLoader />
      <Navbar />
      <PageTransition>
        <main id="main-content" className="pt-nav-height">
          <Hero />
          <SelectedWork />
          <About />
          <Experience />
          <Contact />
        </main>
      </PageTransition>
      <Footer />
    </>
  );
}

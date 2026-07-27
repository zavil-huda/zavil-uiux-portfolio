# Phase 7A — Contact Section (Status Notes)

Builds on `docs/PHASE_6A.md` (Journey / Experience + Design Philosophy).
Internal reference only.

## Scope

The complete Contact section (anchor `#contact`) — structure, content, and
motion in one phase, replacing the Foundation-stage structural stub.
Visual source of truth: the uploaded `06_Contact.png`, per this phase's
explicit instruction. No form, no API, no database — contact mechanism
stays locked to mailto / LinkedIn / GitHub / resume-download links only
(v2 §8, unchanged since the original stub).

## Files Added

- `docs/PHASE_7A.md` — this file.

## Files Modified

- `content/contact.ts` — **purely additive**. All five pre-existing
  exports (`closingStatement`, `availability`, `contactInfo`,
  `socialLinks`, `resumeDownloads`, `finalCta`, `footer`) are unchanged —
  `footer` still backs the already-shipped `Footer.tsx` from an earlier
  phase, untouched. Two new exports added for what the PNG actually shows:
  `contactHero` (eyebrow/heading lines/copy/CTA/availability note) and
  `contactChannels` (+ `ContactChannel` interface) — the five-row channel
  list (Email, LinkedIn, GitHub, Resume, Location), each entry reusing the
  same locked facts already in `PERSON/RESUME_PATHS` rather than
  duplicating new data.
- `sections/Contact.tsx` — full rewrite of the structural stub into the
  real section: two-column layout (closing statement + CTA on the left,
  channel list on the right), built only from existing primitives
  (`Container`, `Reveal`, `Divider`, `Button`) and the existing `track()`
  analytics wrapper. No new UI primitives, no new Tailwind tokens, no new
  Framer Motion variants.

## Files Deleted

- None.

## Known Issues

1. **Eyebrow text mismatch.** The approved `06_Contact.png` labels this
   section "Design Philosophy" — the exact same eyebrow text already used
   on the Experience section's second block
   (`content/experience.ts` → `designPhilosophyIntro.eyebrow`). This reads
   like a copy/paste leftover in the exported frame rather than intentional
   copy for a closing/contact section. Per this phase's explicit
   instruction to treat the PNG as visual source of truth, it's reproduced
   verbatim rather than silently corrected. Recommend confirming the
   intended eyebrow text (e.g. "Get In Touch") against the source Figma
   before this ships publicly.
2. **Heading/copy diverges from the locked `09_Contact_Page.md`.** The doc's
   locked heading ("Let's Build Something Meaningful.") and its four-item
   bulleted Availability list are superseded here by the PNG's heading
   ("Every great product starts with conversation.") and single-line
   availability note, consistent with how earlier phases (About,
   Experience) already let an approved PNG supersede the doc's literal
   copy. The doc's original exports are left in place, unused, in case a
   future phase needs them.
3. **Footer doesn't match the PNG's footer strip.** `06_Contact.png` shows
   a bottom bar with "Designed & Developed by [name]", a copyright line,
   and a "Back to Top" control. The already-shipped `components/layout/
   Footer.tsx` (an earlier, separately-approved phase) has a different
   layout — name/title, social nav, tagline/copyright, no "Back to Top".
   Left untouched per this phase's scope (Contact section only) and the
   "don't modify a previously approved phase without a genuine bug"
   instruction. Flagging for a dedicated Footer-review phase.
4. **Nav label precedent, not re-litigated here.** `06_Contact.png`'s
   navbar still shows "Journey" (not "Experience") and a "Let's Connect"
   CTA (not "Resume") — same discrepancy already flagged and deliberately
   left alone in Phase 5A/6A. Not touched in this phase either.
5. **Resume "download" link opens the PDF as a same-tab/new-tab download**
   depending on browser handling of the `download` attribute on a
   cross-origin-safe same-origin file — matches the existing Navbar resume
   button's pattern (`download` + `target` not both forced), not a new
   behavior introduced here.

## Remaining Work

- Resolve the eyebrow/heading Known Issues above against the source Figma.
- A dedicated Footer-review phase to reconcile `Footer.tsx` with the
  bottom strip shown across the later PNGs (Contact included).
- The long-flagged nav-label rename ("Journey" / "Let's Connect") remains
  outside this phase's scope.
- Phone number / time zone are in `content/contact.ts` → `contactInfo`
  (locked doc calls for both) but are not shown in the approved PNG, so
  they're intentionally not rendered in this section — available if a
  future phase asks for them.

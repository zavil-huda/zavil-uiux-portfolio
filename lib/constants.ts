/**
 * Project-wide constants.
 *
 * Values here are locked facts from the approved knowledge documents and
 * resume (verified Premium PDF), not placeholders — except SITE_URL, which
 * is explicitly a placeholder per the locked domain decision (v3, Decision 3)
 * and must never be hardcoded elsewhere in the app.
 */

export const SITE_NAME = "Zavil Huda Quraishi — UI/UX Designer";

export const PERSON = {
  fullName: "Zavil Huda Quraishi",
  title: "UI/UX Designer",
  email: "contact.zavilhuda@gmail.com",
  phone: "+91 7985980225",
  phoneHref: "tel:+917985980225",
  location: "Lucknow, India",
  locationNote: "Open to Relocate",
  linkedin: "https://www.linkedin.com/in/zavil-huda-quraishi-8b6685250",
  github: "https://github.com/zavil-huda",
} as const;

/**
 * Root site URL. Domain is not finalized (v3, Decision 3). This reads from
 * an environment variable so the real domain is a one-line swap later —
 * never hardcode a temporary/preview domain in its place.
 */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://placeholder-domain.example";

export const RESUME_PATHS = {
  /** Public download — Premium PDF only, per locked instruction. */
  premium: "/resume/Zavil-Huda-UI-UX-Resume.pdf",
  /** Project asset only — never linked from the public UI in v1. */
  atsInternalOnly: "/resume/Zavil-Huda-Quraishi-Resume-ATS.docx",
} as const;

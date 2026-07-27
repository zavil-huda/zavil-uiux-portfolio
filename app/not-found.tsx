import Link from "next/link";

/**
 * FOUNDATION STUB: minimal, unstyled 404 page. Since this is a single-page
 * site, this mainly catches the scaffolded-but-unlinked future routes
 * (v2 §2) if someone hits an unexpected path.
 */
export default function NotFound() {
  return (
    <main data-page="not-found">
      <h1>Page not found</h1>
      <p>
        <Link href="/">Return home</Link>
      </p>
    </main>
  );
}

import Link from "next/link";

/**
 * Amintra logo mark — an abstract "A" that reads as an open doorway
 * with a path leading in. Original SVG, drawn for Amintra.
 * The outer arch forms the A silhouette; the inner arch is the open
 * door; the small center line is the path through it.
 */
export function LogoMark({ className = "h-7 w-7" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M4 20.5v-6.9C4 8.4 7.6 4.6 12 4.6s8 3.8 8 9v6.9"
        stroke="#4A9FCC"
        strokeWidth="2.3"
        strokeLinecap="round"
      />
      <path
        d="M8.4 20.5v-3.9c0-2.1 1.6-3.8 3.6-3.8s3.6 1.7 3.6 3.8v3.9"
        stroke="#79BFE8"
        strokeWidth="2.3"
        strokeLinecap="round"
      />
      <path
        d="M12 20.5v-1.9"
        stroke="#4A9FCC"
        strokeWidth="2.3"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Logo() {
  return (
    <Link
      href="#top"
      aria-label="Amintra — back to top"
      className="inline-flex shrink-0 items-center gap-2"
    >
      <LogoMark />
      <span className="text-[21px] font-semibold leading-none tracking-[-0.01em] text-ink">
        Amintra
      </span>
    </Link>
  );
}

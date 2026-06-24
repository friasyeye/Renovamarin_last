import type { SVGProps } from "react";

export function ArrowUpRightIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </svg>
  );
}

export function ArrowRightIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M5 12h14" />
      <path d="M13 6l6 6-6 6" />
    </svg>
  );
}

export function MenuIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 28 14" fill="none" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" {...props}>
      <path d="M1 2h26" />
      <path d="M1 12h26" />
    </svg>
  );
}

export function StarIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2.5l2.7 6.1 6.6.6-5 4.4 1.5 6.5L12 17.3 6.2 20.6l1.5-6.5-5-4.4 6.6-.6z" />
    </svg>
  );
}

/** Decorative four-point sparkle (used as a small accent). */
export function SparkleIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 10.8 12" fill="currentColor" {...props}>
      <path d="M 2.4 12 L 4.8 7.5 L 0 6.9 L 7.2 0 L 8.4 0 L 6 4.5 L 10.8 5.1 L 3.6 12 Z" />
    </svg>
  );
}

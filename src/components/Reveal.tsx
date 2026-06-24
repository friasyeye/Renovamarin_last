"use client";

import { useEffect, useRef, type ElementType, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface RevealProps {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  delay?: number;
  /** "fade" = slide up + fade · "mask" = clip-path line reveal (for display headings). */
  variant?: "fade" | "mask";
}

/** Animates content into view when it scrolls into the viewport (IntersectionObserver). */
export function Reveal({
  children,
  className,
  as: Tag = "div",
  delay = 0,
  variant = "fade",
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let activated = false;
    const activate = () => {
      if (activated) return;
      activated = true;
      el.classList.add("is-visible");
      io.unobserve(el);
    };

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) activate();
        });
      },
      // No rootMargin offset and threshold:0 so any intersection fires immediately.
      { threshold: 0, rootMargin: "0px" },
    );
    io.observe(el);

    // Safety fallback: if the element is already visible on mount, activate it
    // after a short delay (enough for the entry animation to feel intentional).
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      const t = setTimeout(activate, delay + 80);
      return () => { clearTimeout(t); io.disconnect(); };
    }

    return () => io.disconnect();
  }, [delay]);

  return (
    <Tag
      ref={ref}
      className={cn(variant === "mask" ? "reveal-mask" : "reveal", className)}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}

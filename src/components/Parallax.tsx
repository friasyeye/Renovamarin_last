"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ParallaxProps {
  children: ReactNode;
  className?: string;
  /** Total travel in px across the element's full pass through the viewport. */
  amount?: number;
}

/**
 * Subtle vertical parallax. Wrap an oversized media layer; it translates slower
 * than the scroll as the element passes through the viewport.
 */
export function Parallax({ children, className, amount = 90 }: ParallaxProps) {
  const outer = useRef<HTMLDivElement>(null);
  const inner = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = outer.current;
    const layer = inner.current;
    if (!el || !layer) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let ticking = false;
    const update = () => {
      ticking = false;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      // 0 when the element's top is at the bottom of the viewport, 1 when it has left the top.
      const prog = (vh - r.top) / (vh + r.height);
      const clamped = Math.max(0, Math.min(1, prog));
      const move = (clamped - 0.5) * amount;
      layer.style.transform = `translate3d(0, ${move.toFixed(2)}px, 0)`;
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [amount]);

  return (
    <div ref={outer} className={cn("absolute inset-0 overflow-hidden", className)}>
      <div ref={inner} className="absolute inset-x-0 -top-[10%] h-[120%] will-change-transform">
        {children}
      </div>
    </div>
  );
}

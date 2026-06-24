"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/Reveal";

// ─── Data ─────────────────────────────────────────────────────────────────────

const steps = [
  {
    title: "Visita sin compromiso",
    description:
      "Quedamos en tu piso, vemos el estado real y entendemos qué quieres conseguir. Sin formularios, sin presión.",
  },
  {
    title: "Presupuesto cerrado",
    description:
      "Presupuesto detallado, sin letra pequeña y con render 3D si lo necesitas. El precio acordado es el precio final.",
  },
  {
    title: "Obra con seguimiento",
    description:
      "Joel coordina todos los gremios y te mantiene informado en todo momento. Tú no tienes que hablar con nadie más.",
  },
  {
    title: "Entrega y limpieza final",
    description:
      "Cuando terminamos, recogemos, limpiamos y te entregamos el espacio listo para estrenar.",
  },
];

// ─── SVG path builder ─────────────────────────────────────────────────────────

// Gentle bulges — distinct per segment but not dramatic
const BULGES = [18, -22, 15, -20];

/**
 * anchorYs: card-centre Y positions in viewBox units (0..VB_H)
 * VB_H: total viewBox height
 * Both control points of each bezier share the same X → vertical tangent
 * at every anchor → zero cusps.
 */
function buildPath(anchorYs: number[], VB_H: number): string {
  const cx = 50;
  const tension = 0.38;

  let d = `M ${cx} 0 L ${cx} ${anchorYs[0]}`;

  for (let i = 1; i < anchorYs.length; i++) {
    const y0 = anchorYs[i - 1];
    const y1 = anchorYs[i];
    const segH = y1 - y0;
    const bx = BULGES[(i - 1) % BULGES.length];
    const t = segH * tension;
    d += ` C ${cx + bx} ${y0 + t}, ${cx + bx} ${y1 - t}, ${cx} ${y1}`;
  }

  d += ` L ${cx} ${VB_H}`;
  return d;
}

// ─── Geometry snapshot ────────────────────────────────────────────────────────

interface Geometry {
  // Absolute document Y at which scroll-drawing begins (line starts)
  scrollStart: number;
  // Absolute document Y at which drawing is complete (progress = 1)
  scrollEnd: number;
  // progress [0..1] at which each card should appear
  cardThresholds: number[];
}

// How far above the container the line starts drawing (px before it enters viewport)
const LEAD_PX = 200;

// ─── ProcessSection ───────────────────────────────────────────────────────────

export function ProcessSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef       = useRef<SVGSVGElement>(null);
  const pathRef      = useRef<SVGPathElement>(null);
  const cardRefs     = useRef<(HTMLDivElement | null)[]>([]);

  const [progress, setProgress]   = useState(0);
  const [geometry, setGeometry]   = useState<Geometry | null>(null);

  // ── Measure: builds SVG path + computes all scroll coordinates ──────────────
  const measure = useCallback(() => {
    const container = containerRef.current;
    const path      = pathRef.current;
    if (!container || !path) return;

    const VB_H = 100;

    // All positions in absolute document coordinates (immune to scroll position)
    const cRect      = container.getBoundingClientRect();
    const cTopAbs    = cRect.top + window.scrollY;
    const cBottomAbs = cRect.bottom + window.scrollY;
    const cH         = cRect.height;
    const vh         = window.innerHeight;

    // Line starts drawing LEAD_PX before container top enters the viewport bottom
    const scrollStart = cTopAbs - vh - LEAD_PX;
    // Line finishes when the container bottom reaches the viewport centre
    const scrollEnd   = cBottomAbs - vh * 0.5;

    // Build SVG path anchored to real card positions
    const anchorYs = cardRefs.current.map((card) => {
      if (!card) return VB_H / 2;
      const r = card.getBoundingClientRect();
      const cardCenterAbs = r.top + window.scrollY + r.height / 2;
      return ((cardCenterAbs - cTopAbs) / cH) * VB_H;
    });

    path.setAttribute("d", buildPath(anchorYs, VB_H));

    // Measure path length after updating the d attribute
    const pathLength = path.getTotalLength();
    if (!pathLength) return;

    path.style.strokeDasharray  = `${pathLength}`;
    path.style.strokeDashoffset = `${pathLength}`; // start hidden

    // For each card, find the scroll-progress value at which the drawn line
    // reaches that card's anchor — binary search along the path.
    const scrollRange = scrollEnd - scrollStart;

    const cardThresholds = anchorYs.map((targetY) => {
      // Binary search: find pathLength fraction where path Y = targetY
      let lo = 0, hi = pathLength;
      for (let k = 0; k < 32; k++) {
        const mid = (lo + hi) / 2;
        if (path.getPointAtLength(mid).y < targetY) lo = mid; else hi = mid;
      }
      const pathFraction = (lo + hi) / 2 / pathLength;

      // Map pathFraction → scrollProgress
      // When scrollProgress = pathFraction, the drawn line has reached this card.
      // We want the card to appear right as the line arrives, so threshold = pathFraction.
      return pathFraction;
    });

    setGeometry({ scrollStart, scrollEnd, cardThresholds });
  }, []);

  // ── Scroll listener — pure absolute arithmetic ────────────────────────────
  useEffect(() => {
    if (!geometry) return;

    const { scrollStart, scrollEnd } = geometry;
    const range = scrollEnd - scrollStart;

    const onScroll = () => {
      const p = Math.min(1, Math.max(0, (window.scrollY - scrollStart) / range));
      setProgress(p);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // sync on mount
    return () => window.removeEventListener("scroll", onScroll);
  }, [geometry]);

  // ── Drive strokeDashoffset from progress ──────────────────────────────────
  useEffect(() => {
    const path = pathRef.current;
    if (!path || !geometry) return;
    const id = requestAnimationFrame(() => {
      const length = path.getTotalLength();
      path.style.strokeDashoffset = `${length * (1 - progress)}`;
    });
    return () => cancelAnimationFrame(id);
  }, [progress, geometry]);

  // ── Build on mount (two rAFs to ensure layout is complete) ────────────────
  useEffect(() => {
    let id1: number, id2: number;
    id1 = requestAnimationFrame(() => {
      id2 = requestAnimationFrame(measure);
    });
    return () => { cancelAnimationFrame(id1); cancelAnimationFrame(id2); };
  }, [measure]);

  // ── Rebuild on resize ─────────────────────────────────────────────────────
  useEffect(() => {
    const ro = new ResizeObserver(measure);
    if (containerRef.current) ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, [measure]);

  return (
    <section className="bg-[var(--color-beige)] px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-[560px]">

        <Reveal
          as="h2"
          variant="mask"
          className="mb-20 text-center font-serif text-[clamp(36px,5vw,72px)] font-medium leading-[0.9] text-[var(--color-red)]"
        >
          Así trabajamos
        </Reveal>

        <div ref={containerRef} className="relative flex flex-col gap-20">

          {/* SVG — fills the container exactly, behind all cards */}
          <svg
            ref={svgRef}
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 h-full w-full"
            fill="none"
          >
            <path
              ref={pathRef}
              d="M 50 0 L 50 100"
              stroke="var(--color-ink)"
              strokeOpacity={0.22}
              strokeWidth={0.5}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          {steps.map((step, i) => {
            const threshold = geometry?.cardThresholds[i] ?? 1;
            const visible   = progress >= threshold - 0.005;

            return (
              <div
                key={i}
                ref={(el) => { cardRefs.current[i] = el; }}
                className={cn(
                  "relative z-10 mx-auto w-full max-w-[360px] rounded-2xl bg-white/45 px-7 py-7",
                  "shadow-[0_6px_40px_rgba(43,44,44,0.12)] backdrop-blur-md",
                  "transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]",
                  visible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0",
                )}
              >
                <p className="font-serif text-[26px] font-medium leading-tight text-[var(--color-ink)]">
                  {step.title}
                </p>
                <p className="mt-3 font-sans text-[13px] font-normal leading-relaxed text-[var(--color-ink)]/55">
                  {step.description}
                </p>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}

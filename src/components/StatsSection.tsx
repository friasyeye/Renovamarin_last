"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export function StatsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0, rootMargin: "0px 0px -35% 0px" }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative h-[100svh] min-h-[600px] overflow-hidden">
      <Image
        src="/images/cocina_negra.webp"
        alt="Reforma de cocina"
        fill
        className="object-cover"
        sizes="100vw"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 flex h-full flex-col px-7 py-10 md:px-16 md:py-14">

        {/* ── TOP: stats en dos columnas que se reparten todo el ancho ── */}
        <div className="grid grid-cols-2" style={{ marginTop: "28vh" }}>

          {/* Stat 1 */}
          <div
            className="flex flex-col pr-8 md:pr-16"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(24px)",
              transition: "opacity 0.9s cubic-bezier(0.16,1,0.3,1), transform 0.9s cubic-bezier(0.16,1,0.3,1)",
            }}
          >
            <span
              className="font-serif font-medium leading-none"
              style={{ color: "#B09656", fontSize: "clamp(52px, 10vw, 100px)" }}
            >
              30+
            </span>
            <div
              style={{
                height: "1px",
                backgroundColor: "#B09656",
                marginTop: "12px",
                width: visible ? "100%" : "0%",
                transition: "width 1.1s 0.3s cubic-bezier(0.16,1,0.3,1)",
              }}
            />
            <span
              className="font-sans font-medium mt-3"
              style={{ color: "#F9F9F9", fontSize: "clamp(11px, 1.5vw, 14px)" }}
            >
              Años de experiencia
            </span>
          </div>

          {/* Stat 2 */}
          <div
            className="flex flex-col"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(24px)",
              transition: "opacity 0.9s 0.15s cubic-bezier(0.16,1,0.3,1), transform 0.9s 0.15s cubic-bezier(0.16,1,0.3,1)",
            }}
          >
            <span
              className="font-serif font-medium leading-none"
              style={{ color: "#B09656", fontSize: "clamp(52px, 10vw, 100px)" }}
            >
              123
            </span>
            <div
              style={{
                height: "1px",
                backgroundColor: "#B09656",
                marginTop: "12px",
                width: visible ? "100%" : "0%",
                transition: "width 1.1s 0.45s cubic-bezier(0.16,1,0.3,1)",
              }}
            />
            <span
              className="font-sans font-medium mt-3"
              style={{ color: "#F9F9F9", fontSize: "clamp(11px, 1.5vw, 14px)" }}
            >
              Reformas completadas
            </span>
          </div>
        </div>

        {/* ── BOTTOM: frase grande izquierda + descripción derecha ── */}
        <div className="mt-auto grid grid-cols-1 gap-8 md:grid-cols-2 md:items-end md:gap-12">

          {/* Frase grande */}
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(32px)",
              transition: "opacity 1s 0.25s cubic-bezier(0.16,1,0.3,1), transform 1s 0.25s cubic-bezier(0.16,1,0.3,1)",
            }}
          >
            <p
              className="font-serif font-medium leading-[1.05]"
              style={{ color: "#F9F9F9", fontSize: "clamp(20px, 3.5vw, 42px)" }}
            >
              Más de treinta años haciendo reformas de las que nos enorgullecemos.
            </p>
          </div>

          {/* Descripción — anchura completa de su columna */}
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(32px)",
              transition: "opacity 1s 0.4s cubic-bezier(0.16,1,0.3,1), transform 1s 0.4s cubic-bezier(0.16,1,0.3,1)",
            }}
          >
            <p
              className="font-sans leading-relaxed"
              style={{ color: "rgba(249,249,249,0.72)", fontSize: "clamp(13px, 1.3vw, 16px)" }}
            >
              Somos una empresa familiar de reformas en Barcelona. Llevamos más de treinta años
              transformando pisos, cocinas y baños, y lo que más nos enorgullece es lo que dicen
              nuestros clientes cuando terminamos: que quedó exactamente como lo imaginaban, en
              el plazo acordado y sin sorpresas en el precio.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

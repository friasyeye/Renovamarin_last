"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const servicios = [
  { label: "Reformas integrales", href: "#reformas-integrales" },
  { label: "Reformas de cocinas", href: "#reformas-cocinas" },
  { label: "Reformas de baños", href: "#reformas-banos" },
  { label: "Reformas de locales", href: "#reformas-locales" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [serviciosOpen, setServiciosOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkClass = cn(
    "text-[13px] font-medium tracking-normal transition-colors duration-200",
    scrolled ? "text-[var(--color-ink)] hover:text-[var(--color-red)]" : "text-white/85 hover:text-white",
  );

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-500",
        scrolled ? "bg-[var(--color-cream)]/95 backdrop-blur-sm" : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-[74px] items-center justify-between px-5 md:px-8">

        {/* Logo — izquierda */}
        <a href="/">
          <Image
            src="/images/logo-leon.png"
            alt="Renovamarín"
            width={22}
            height={22}
            className="object-contain"
          />
        </a>

        {/* Nav desktop */}
        <nav className="hidden items-center gap-8 md:flex">
          {/* Servicios con desplegable */}
          <div
            className="relative"
            onMouseEnter={() => setServiciosOpen(true)}
            onMouseLeave={() => setServiciosOpen(false)}
          >
            <button className={cn(linkClass, "flex items-center gap-1")}>
              Servicios
              <svg
                width="12" height="12" viewBox="0 0 12 12" fill="none"
                className={cn("transition-transform duration-200", serviciosOpen ? "rotate-180" : "")}
              >
                <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {/* Dropdown */}
            <div className={cn(
              "absolute left-1/2 top-full -translate-x-1/2 pt-3 transition-all duration-200",
              serviciosOpen ? "pointer-events-auto opacity-100 translate-y-0" : "pointer-events-none opacity-0 -translate-y-1",
            )}>
              <div className="min-w-[220px] overflow-hidden rounded-xl border border-[var(--color-stone)]/15 bg-white shadow-[0_8px_32px_rgba(0,0,0,0.10)]">
                {servicios.map((s, i) => (
                  <a
                    key={s.href}
                    href={s.href}
                    className={cn(
                      "block px-5 py-3.5 text-[13px] text-[var(--color-ink)] transition-colors hover:bg-[var(--color-red)]/10 hover:text-[var(--color-red)]",
                      i !== servicios.length - 1 && "border-b border-[var(--color-stone)]/10",
                    )}
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <a href="#proyectos" className={linkClass}>Proyectos</a>
          <a href="#calculadora" className={linkClass}>Calculadora reformas</a>
          <a href="#contacto" className={linkClass}>Contacto</a>
        </nav>

        {/* Mobile — hamburguesa */}
        <button className={cn(
          "flex items-center gap-1.5 text-[13px] tracking-wide transition-colors md:hidden",
          scrolled ? "text-[var(--color-ink)]" : "text-white",
        )}>
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            <path d="M3 6h16M3 11h16M3 16h16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        </button>

      </div>
    </header>
  );
}

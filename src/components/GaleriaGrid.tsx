"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";


const photos = [
  {
    src: "/images/sagrada-familia-cocina-panoramica.webp",
    alt: "Cocina panorámica con vistas",
    w: 3024,
    h: 4032,
    category: "Cocinas",
  },
  {
    src: "/images/cocina_d2.webp",
    alt: "Cocina moderna en blanco",
    w: 1080,
    h: 1350,
    category: "Cocinas",
  },
  {
    src: "/images/cocina_galeria.jpg",
    alt: "Cocina con encimera de madera y muebles blancos",
    w: 960,
    h: 1200,
    category: "Cocinas",
  },
  {
    src: "/images/baño_azul1.webp",
    alt: "Baño con iluminación azul",
    w: 1080,
    h: 1350,
    category: "Baños",
  },
  {
    src: "/images/bañob_después.webp",
    alt: "Baño reformado estilo nórdico",
    w: 1080,
    h: 1350,
    category: "Baños",
  },
  {
    src: "/images/salon_galeria.jpg",
    alt: "Salón comedor reformado estilo nórdico",
    w: 960,
    h: 1200,
    category: "Salones",
  },
];


function PhotoCard({ photo, index }: { photo: typeof photos[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [lightbox, setLightbox] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.08 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <div
        ref={ref}
        className="group relative cursor-zoom-in overflow-hidden bg-[var(--color-stone)]/10 h-full"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(32px)",
          transition: `opacity 0.8s cubic-bezier(0.16,1,0.3,1) ${index * 80}ms, transform 0.8s cubic-bezier(0.16,1,0.3,1) ${index * 80}ms`,
        }}
        onClick={() => setLightbox(true)}
      >
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Hover overlay */}
        <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 p-5">
          <p className="font-serif text-[17px] leading-snug text-white">
            {photo.alt}
          </p>
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 md:p-10"
          onClick={() => setLightbox(false)}
        >
          <button
            className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            onClick={() => setLightbox(false)}
            aria-label="Cerrar"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M2 2l14 14M16 2L2 16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </button>
          <div
            className="relative max-h-full max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              width={photo.w}
              height={photo.h}
              className="max-h-[90vh] w-auto mx-auto object-contain"
              priority
            />
            <p className="mt-3 text-center font-serif text-[15px] text-white/60">
              {photo.alt}
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export function GaleriaGrid() {
  return (
    <section className="min-h-screen bg-[var(--color-cream)] px-5 pt-36 pb-24 md:px-8">
      <div className="mx-auto max-w-[1280px]">

        {/* Header */}
        <div className="mb-12 md:mb-16">
          <h1 className="font-serif text-[clamp(36px,6vw,72px)] font-medium leading-[1.0] text-[var(--color-red)]">
            Así quedan<br />
            nuestras reformas
          </h1>
          <p className="mt-5 max-w-xl font-sans text-[16px] leading-relaxed text-[var(--color-stone)]">
            Cada proyecto es único. Aquí te mostramos algunos de los espacios que hemos transformado en Barcelona.
          </p>
        </div>

        {/* Grid uniforme — todas las celdas a la misma altura */}
        <div
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
          style={{ gridAutoRows: "420px" }}
        >
          {photos.map((photo, i) => (
            <PhotoCard key={photo.src} photo={photo} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}

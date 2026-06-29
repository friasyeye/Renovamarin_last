"use client";

import { StarIcon } from "@/components/icons";
import { Reveal } from "@/components/Reveal";

const reviews = [
  {
    name: "Sheila Toledo",
    quote:
      "Desde el primer momento la atención recibida por parte de Joel ha sido excelente. La reforma se ha hecho con una excelente coordinación y ejecución técnica, respetando plazos y presupuesto establecidos, manteniendo el equipo el espacio limpio y ordenado durante toda la obra.",
  },
  {
    name: "Mario Morales",
    quote:
      "Se encargaron de la reforma integral de mi piso y ha quedado fantástico. El cambio fue espectacular, de un piso viejo con suelo de cerámica ochentera, paredes estucadas y cocina del terror, a un piso moderno con parquet y paredes lisas.",
  },
  {
    name: "Esteban Martinez",
    quote:
      "Desde el primer momento fueron muy profesionales, atentos y transparentes. Se nota que tienen experiencia: cuidaron cada detalle y supieron adaptarse a lo que necesitaba, incluso proponiendo mejoras que no había considerado.",
  },
  {
    name: "Kilian Ginesta",
    quote:
      "Son profesionales, trabajan bien y cumplen con los plazos. Además te asesoran en todo y hacen que la reforma sea mucho más fácil.",
  },
  {
    name: "Alex Barranco",
    quote:
      "Han sido profesionales desde el primer día, claros con el presupuesto y cumpliendo los plazos. Trabajan con cuidado y mantienen todo bastante limpio.",
  },
  {
    name: "Fabio Nisticò",
    quote:
      "Excelentes profesionales y mejores personas. Un trato exquisito y siempre atentos a los cambios o decisiones nuevas.",
  },
];

// Duplicate for seamless infinite loop
const loop = [...reviews, ...reviews];

export function TestimonialsSection() {
  return (
    <section className="relative bg-[var(--color-cream)] py-24">
      {/* Header */}
      <div className="mb-14 px-5 text-center md:px-8">
        <Reveal as="h2" variant="mask" className="font-serif text-[clamp(36px,5vw,72px)] font-medium leading-[0.9] text-[var(--color-red)]">
          Lo que dicen nuestros clientes
        </Reveal>
        <a
          href="https://share.google/mQKWSgEBMYkgdoCM8"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block font-serif text-[clamp(15px,1.6vw,20px)] font-medium text-[var(--color-ink)] underline underline-offset-[5px] decoration-[1px] transition-opacity hover:opacity-70"
        >
          Ver todas las reseñas en Google
        </a>
      </div>

      {/* Marquee */}
      <div className="overflow-hidden py-4">
        <div className="flex w-max animate-marquee gap-6">
          {loop.map((review, i) => (
            <figure
              key={i}
              className="flex w-[340px] shrink-0 flex-col gap-5 rounded-[16px] bg-[var(--color-beige)] p-6"
            >
              <div className="flex gap-1 text-[var(--color-red)]">
                {Array.from({ length: 5 }).map((_, j) => (
                  <StarIcon key={j} className="size-4" />
                ))}
              </div>
              <blockquote className="flex-1 text-[15px] leading-relaxed text-[var(--color-ink)]/75">
                &ldquo;{review.quote}&rdquo;
              </blockquote>
              <figcaption className="font-serif text-[18px] text-[var(--color-red)]">
                {review.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

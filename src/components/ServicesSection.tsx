import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { GalleryStrip } from "@/components/GalleryStrip";
import { services } from "@/lib/content";

export function ServicesSection() {
  return (
    <>
    <section className="relative bg-[var(--color-beige)] px-5 py-24 md:px-8">
      <div className="mx-auto max-w-[1280px]">
        <Reveal as="h2" variant="mask" className="text-center font-serif text-[clamp(36px,5vw,72px)] font-medium leading-[0.9] text-[var(--color-red)]">
          Lo que hacemos
        </Reveal>

        {/* Sticky-stacking cards */}
        <div className="relative mt-16">
          {services.map((service, i) => (
            <div
              key={service.number}
              className="sticky"
              style={{ top: `${90 + i * 24}px` }}
            >
              <Link href={service.href} className="group relative mb-8 block h-[70vh] min-h-[460px] overflow-hidden rounded-[18px] shadow-[0_-12px_50px_rgba(43,44,44,0.22)] md:h-[78vh]">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 1280px"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-black/15" />

                {/* Flecha navegación — arriba derecha */}
                <div className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-cream)] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M3 13L13 3M13 3H5M13 3V11" stroke="var(--color-red)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>

                {/* Número */}
                <span className="absolute left-8 top-6 font-serif text-[64px] font-medium leading-none text-[var(--color-cream)] md:text-[88px]">
                  {service.number}
                </span>

                {/* Bloque inferior */}
                <div className="absolute inset-x-6 bottom-7 flex flex-col gap-0 md:inset-x-10 md:flex-row md:items-end md:justify-between">

                  {/* Izquierda: título + badges */}
                  <div className="flex flex-col gap-3">
                    <div className="flex flex-wrap gap-2 md:order-last">
                      {service.tags.map((tag) => (
                        <span
                          key={tag}
                          className="whitespace-nowrap rounded-full bg-[var(--color-cream)] px-3 py-1.5 font-serif text-[11px] font-medium text-[var(--color-red)] md:px-4 md:py-2 md:text-[13px]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="font-serif text-[clamp(30px,5vw,56px)] font-medium leading-none text-[var(--color-cream)] md:-translate-y-6">
                      {service.title}
                    </h3>
                  </div>

                  {/* Derecha: descripción */}
                  <p className="max-w-[340px] whitespace-pre-line font-serif text-[16px] leading-snug text-[var(--color-cream)] md:block md:text-right md:text-[20px]">
                    {service.description}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>

      </div>
    </section>
    <GalleryStrip />
    </>
  );
}

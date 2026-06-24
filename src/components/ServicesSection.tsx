import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { services, extraComfortsImage } from "@/lib/content";

export function ServicesSection() {
  return (
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
              <div className="relative mb-8 h-[70vh] min-h-[460px] overflow-hidden rounded-[18px] shadow-[0_-12px_50px_rgba(43,44,44,0.22)] md:h-[78vh]">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 1280px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-black/15" />

                {/* Número */}
                <span className="absolute left-8 top-6 font-serif text-[64px] font-medium leading-none text-[var(--color-cream)] md:text-[88px]">
                  {service.number}
                </span>

                {/* Título — desktop arriba a la derecha */}
                <h3 className="absolute right-10 top-8 hidden font-serif text-[clamp(34px,4vw,56px)] font-medium leading-none text-[var(--color-cream)] md:block md:text-right">
                  {service.title}
                </h3>

                {/* Bloque inferior */}
                <div className="absolute inset-x-6 bottom-7 flex flex-col gap-0 md:inset-x-10 md:flex-row md:items-end md:justify-between">

                  {/* Mobile: badges → título → texto */}
                  <div className="flex flex-col md:hidden">
                    <div className="flex flex-nowrap gap-2 pb-4">
                      {service.tags.map((tag) => (
                        <span
                          key={tag}
                          className="whitespace-nowrap rounded-full bg-[var(--color-cream)] px-3 py-1.5 font-serif text-[11px] font-medium text-[var(--color-red)]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="pb-4 font-serif text-[clamp(30px,8vw,44px)] font-medium leading-none text-[var(--color-cream)]">
                      {service.title}
                    </h3>
                    <p className="max-w-[360px] whitespace-pre-line font-serif text-[16px] leading-snug text-[var(--color-cream)]">
                      {service.description}
                    </p>
                  </div>

                  {/* Desktop: izquierda = badges, derecha = descripción */}
                  <div className="hidden md:flex md:flex-col md:gap-6">
                    <div className="flex flex-wrap gap-2.5">
                      {service.tags.map((tag) => (
                        <span
                          key={tag}
                          className="whitespace-nowrap rounded-full bg-[var(--color-cream)] px-4 py-2 font-serif text-[13px] font-medium text-[var(--color-red)]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <p className="hidden max-w-[340px] whitespace-pre-line font-serif text-[20px] leading-snug text-[var(--color-cream)] md:block md:text-right">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Extra Comforts */}
        <div className="mt-24 grid items-center gap-12 md:grid-cols-2">
          <Reveal className="relative h-[360px] overflow-hidden rounded-[18px] md:h-[460px]">
            <Image
              src={extraComfortsImage}
              alt="Maravilla extra comforts"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 600px"
            />
          </Reveal>
          <Reveal className="flex flex-col items-start gap-6">
            <h3 className="font-serif text-[clamp(40px,6vw,80px)] font-medium leading-[0.9] text-[var(--color-red)]">
              Extra
              <br />
              <span className="italic">Comforts</span>
            </h3>
            <p className="max-w-[420px] text-[17px] leading-relaxed text-[var(--color-ink)]/70">
              Discover the little touches and thoughtful services that make every
              moment feel easy.
            </p>
            <a
              href="#"
              className="rounded-full bg-[var(--color-red)] px-8 py-3.5 text-[13px] font-medium text-[var(--color-cream)] transition-colors duration-300 hover:bg-[var(--color-red-bright)]"
            >
              View all Services
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Reformas de locales comerciales en Barcelona | Renovamarín",
  description:
    "Adecuamos tu local para que puedas abrir cuanto antes. Nos encargamos de la obra y de los trámites.",
};

const checklist = [
  "Adecuación completa de local en bruto",
  "Reforma de locales con cambio de actividad",
  "Gestión de licencias y permisos municipales",
  "Instalación eléctrica y de fontanería",
  "Tabiquería, pavimento y pintura",
  "Iluminación y escaparate",
  "Coordinación de todos los gremios",
  "Entrega en plazo acordado",
];

export default function ReformasLocalesPage() {
  return (
    <>
      <SmoothScroll />
      <Header theme="light" />
      <main>

        {/* ── Hero ─────────────────────────────────────────────────── */}
        <section className="relative bg-white px-5 pb-16 pt-24 md:px-8 md:pt-28">
          <div className="mx-auto w-full max-w-[1280px]">

            <Reveal as="nav" variant="fade" immediate className="mb-10 flex items-center gap-2 font-sans text-[12px] font-medium tracking-[0.12em] uppercase">
              <a href="/" className="text-[var(--color-stone)]/40 transition-colors hover:text-[var(--color-stone)]">
                Inicio
              </a>
              <span className="text-[var(--color-stone)]/25">/</span>
              <a href="/#servicios" className="text-[var(--color-stone)]/40 transition-colors hover:text-[var(--color-stone)]">
                Servicios
              </a>
              <span className="text-[var(--color-stone)]/25">/</span>
              <span className="text-[var(--color-red)]">Reformas de locales</span>
            </Reveal>

            <Reveal as="h1" variant="mask" immediate className="font-serif text-[clamp(36px,5vw,72px)] font-medium leading-[0.9] text-[var(--color-red)]">
              Reformas de locales<br />
              comerciales en Barcelona
            </Reveal>

            <Reveal delay={160} immediate className="mt-8 max-w-[520px]">
              <p className="font-serif text-[clamp(16px,2vw,21px)] leading-[1.4] text-[var(--color-stone)]">
                Adecuamos tu local para que puedas abrir cuanto antes. Nos encargamos de la obra y de los trámites.
              </p>
            </Reveal>
          </div>
        </section>

        {/* ── Imagen — partida 50/50 entre blanco (arriba) y gris (abajo) ──── */}
        <div className="bg-[linear-gradient(to_bottom,#ffffff_0%,#ffffff_50%,var(--color-maroon)_50%,var(--color-maroon)_100%)] px-5 md:px-8">
          <div className="mx-auto max-w-[1280px]">
            {/* Móvil: 4/5 */}
            <div className="relative aspect-[4/5] w-full overflow-hidden shadow-[0_8px_48px_rgba(43,44,44,0.22)] md:hidden">
              <Image
                src="/images/local_mv.png"
                alt="Reforma de local comercial en Barcelona"
                fill
                className="object-cover"
                sizes="100vw"
                priority
              />
            </div>
            {/* Desktop: 16/9 */}
            <div className="relative hidden aspect-[16/9] w-full overflow-hidden shadow-[0_8px_48px_rgba(43,44,44,0.22)] md:block">
              <Image
                src="/images/local_ord.jpg"
                alt="Reforma de local comercial en Barcelona"
                fill
                className="object-cover"
                sizes="1280px"
                priority
              />
            </div>
          </div>
        </div>

        {/* ── Texto + Lista ─────────────────────────────────────────── */}
        <section className="bg-[var(--color-maroon)] px-5 pb-24 md:px-8 md:pb-36">
          <div className="mx-auto grid max-w-[1280px] gap-16 pt-16 md:grid-cols-[1fr_1fr] md:gap-28 md:pt-24">

            {/* Columna izquierda: cuerpo de texto */}
            <Reveal delay={100}>
              <p className="font-sans text-[15px] leading-[1.75] text-[var(--color-cream)]/65 md:text-[17px]">
                Reformar un local no es solo una cuestión estética — es cumplir con la normativa, conseguir las licencias necesarias y ejecutar la obra en el menor tiempo posible. Cada día sin abrir es dinero que se pierde.
              </p>
              <p className="mt-5 font-sans text-[15px] font-semibold leading-[1.75] text-[var(--color-cream)] md:text-[17px]">
                Gestionamos la obra de principio a fin y nos encargamos de los trámites administrativos para que tú te centres en lo importante: preparar tu negocio para abrir.
              </p>
            </Reveal>

            {/* Columna derecha: lista con guiones */}
            <Reveal delay={150}>
              <ul className="flex flex-col">
                {checklist.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-4 border-b border-[var(--color-cream)]/10 py-4 first:pt-0 last:border-0 last:pb-0"
                  >
                    <span className="shrink-0 font-sans text-[var(--color-red)] text-[17px] leading-snug">—</span>
                    <span className="font-sans text-[14px] leading-snug text-[var(--color-cream)]/80 md:text-[15px]">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>

          </div>
        </section>

        {/* ── CTA final ────────────────────────────────────────────── */}
        <section className="bg-white px-5 py-24 md:px-8 md:py-32">
          <div className="mx-auto max-w-[1280px]">
            <Reveal>
              <div className="mx-auto max-w-[780px] rounded-[24px] bg-[var(--color-maroon)] px-10 py-16 text-center md:px-16 md:py-20">
                <h2 className="font-serif text-[clamp(34px,5.5vw,68px)] font-medium leading-[0.92] text-[var(--color-cream)]">
                  ¿Tienes un local<br />que reformar?
                </h2>

                <p className="mx-auto mt-7 max-w-[460px] font-serif text-[18px] leading-[1.6] text-[var(--color-cream)]/60">
                  Cada reforma empieza con una visita. La tuya puede ser esta semana.
                </p>

                <p className="mt-3 font-sans text-[13px] text-[var(--color-cream)]/30 uppercase tracking-widest">
                  Explícanos qué necesitas. Sin formularios, sin esperas.
                </p>

                <div className="mt-10 flex items-center justify-center gap-4 font-sans text-[15px] font-medium">
                  <a
                    href="tel:+34667804973"
                    className="text-[var(--color-cream)] transition-colors duration-200 hover:text-[var(--color-red)]"
                  >
                    +34 667 804 973
                  </a>
                  <span className="text-[var(--color-cream)]/25">|</span>
                  <a
                    href="mailto:renovamarin@gmail.com"
                    className="text-[var(--color-cream)] transition-colors duration-200 hover:text-[var(--color-red)]"
                  >
                    renovamarin@gmail.com
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}

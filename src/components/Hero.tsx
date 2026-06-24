import Image from "next/image";

export function Hero() {
  return (
    <section className="relative h-screen min-h-[680px] w-full overflow-hidden bg-black">
      <Image
        src="/images/cocina_negra.webp"
        alt="Reforma de cocina"
        fill
        className="object-cover"
        priority
      />
      {/* Overlay vertical suave */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40" />
      {/* Overlay horizontal — oscurece la izquierda donde está el texto */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/30 to-transparent" />

      {/* Content — left aligned */}
      <div className="absolute inset-0 flex items-center px-6 md:px-16 lg:px-24">
        <div className="flex w-full max-w-3xl flex-col items-start">

          {/* H1 — dorado */}
          <h1
            style={{ animationDelay: "200ms", textShadow: "0 1px 12px rgba(0,0,0,0.9)" }}
            className="anim-rise font-sans text-[clamp(12px,1.2vw,14px)] font-medium tracking-normal text-[var(--color-red)]"
          >
            Reformas integrales en Barcelona
          </h1>

          {/* Subtítulo — blanco */}
          <p
            style={{ animationDelay: "420ms", textShadow: "0 2px 20px rgba(0,0,0,0.7)" }}
            className="anim-rise mt-10 font-serif text-[clamp(38px,5.5vw,80px)] font-medium leading-[0.92] text-white"
          >
            <span className="block whitespace-nowrap">Hacemos la reforma que imaginas,</span>
            <span className="block whitespace-nowrap italic">sin complicaciones.</span>
          </p>

          {/* CTA */}
          <div
            style={{ animationDelay: "680ms" }}
            className="anim-rise mt-16"
          >
            <a
              href="#contacto"
              className="rounded-full bg-[var(--color-red)] px-9 py-4 text-[14px] font-medium text-[var(--color-cream)] transition-colors duration-300 hover:bg-[var(--color-red-bright)]"
            >
              Pedir presupuesto
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

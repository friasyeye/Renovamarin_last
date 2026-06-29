"use client";

import { useState } from "react";
import { Reveal } from "@/components/Reveal";

const faqs = [
  {
    question: "¿Trabajáis únicamente en Barcelona?",
    answer:
      "Realizamos proyectos en toda Barcelona y alrededores, desplazando a nuestro equipo para asegurar el mismo nivel de control y acabado en cada obra.",
  },
  {
    question: "¿Tenéis opciones de financiación?",
    answer:
      "Sí. Facilitamos el pago a plazos durante el periodo de la obra, adaptando los pagos al avance del proyecto para tu mayor comodidad.",
  },
  {
    question: "¿Qué opciones de materiales ofrecéis?",
    answer:
      "Trabajamos con distintas gamas de materiales (suelos, grifería, sanitarios, etc.) que se adaptan a cada estilo y presupuesto, asegurando calidad y durabilidad.",
  },
  {
    question: "¿Cómo gestionáis la limpieza y los escombros?",
    answer:
      "Gestionamos la retirada diaria de escombros mediante contenedores autorizados y mantenemos el orden durante toda la obra para minimizar las molestias.",
  },
];

export function FaqSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section style={{ backgroundColor: "#2B2C2C" }} className="px-5 py-24 md:px-8">
      <div className="mx-auto max-w-[860px]">
        <Reveal
          as="h2"
          variant="mask"
          className="mb-14 text-center font-serif text-[clamp(36px,5vw,72px)] font-medium leading-[0.9] text-[var(--color-cream)]"
        >
          Preguntas frecuentes
        </Reveal>

        <div className="flex flex-col">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className="border-t border-[var(--color-cream)]/15 last:border-b"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-[clamp(17px,2vw,22px)] font-medium leading-snug text-[var(--color-cream)]">
                    {faq.question}
                  </span>
                  <span
                    className="shrink-0 text-[var(--color-cream)] transition-transform duration-300"
                    style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}
                    aria-hidden
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                      <line x1="12" y1="5" x2="12" y2="19" />
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                  </span>
                </button>

                <div
                  className="overflow-hidden transition-all duration-300 ease-in-out"
                  style={{ maxHeight: isOpen ? "300px" : "0px" }}
                >
                  <p className="pb-6 text-[15px] leading-relaxed text-[var(--color-cream)]/70">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { diningCards } from "@/lib/content";

export function DiningSection() {
  return (
    <section className="relative overflow-hidden bg-[var(--color-cream)] px-5 py-24 md:px-8">
      <div className="mx-auto max-w-[1280px]">
        <Reveal as="h2" variant="mask" className="text-center font-serif text-[clamp(44px,8vw,116px)] font-medium leading-[0.9] text-[var(--color-red)]">
          Indulge &amp;
          <br />
          <span className="italic">Unwind</span>
        </Reveal>

        <div className="mt-16 grid gap-7 md:grid-cols-2">
          {diningCards.map((card) => (
            <Reveal
              key={card.title}
              className="group relative flex h-[560px] flex-col items-center overflow-hidden rounded-[18px] bg-[var(--color-beige)] px-8 pt-12 md:h-[640px]"
            >
              <h3 className="font-serif text-[clamp(32px,3.6vw,46px)] font-medium text-[var(--color-ink)]/70">
                {card.title}
              </h3>
              <p className="mt-1 font-serif text-[18px] italic text-[var(--color-ink)]/45">
                {card.subtitle}
              </p>

              <div className="relative mt-8 w-full flex-1 overflow-hidden rounded-[12px]">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 600px"
                />
                <div className="absolute inset-x-0 bottom-0 flex justify-center pb-6">
                  <span className="rounded-full bg-[var(--color-cream)] px-7 py-3 text-[12px] font-medium text-[var(--color-red)]">
                    {card.cta}
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

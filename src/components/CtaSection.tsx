import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { CircleButton } from "@/components/CircleButton";
import { ctaCards } from "@/lib/content";

export function CtaSection() {
  return (
    <section className="bg-[var(--color-cream)] px-5 pb-0 md:px-8">
      <div className="mx-auto grid max-w-[1280px] gap-7 md:grid-cols-2">
        {ctaCards.map((card) => (
          <Reveal
            key={card.title}
            className="group relative flex h-[300px] items-end overflow-hidden rounded-[18px]"
          >
            <Image
              src={card.image}
              alt={card.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 620px"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-[var(--color-maroon)]/30 to-[var(--color-maroon)]/85" />
            <div className="relative flex w-full items-end justify-between p-7">
              <div className="flex flex-col gap-1 text-[var(--color-cream)]">
                <span className="text-[12px] opacity-80">
                  {card.label}
                </span>
                <span className="font-serif text-[clamp(40px,5vw,64px)] font-medium leading-none">
                  {card.title}
                </span>
              </div>
              <a href="#" aria-label={`Explore ${card.title}`} className="group/btn">
                <CircleButton size={52} />
              </a>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

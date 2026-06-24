import Image from "next/image";
import { Parallax } from "@/components/Parallax";
import { Reveal } from "@/components/Reveal";
import { luxuryImage } from "@/lib/content";

export function LuxurySection() {
  return (
    <section className="relative h-[88vh] min-h-[620px] w-full overflow-hidden bg-black">
      <Parallax amount={120}>
        <Image
          src={luxuryImage}
          alt="Luxury hotel chandelier"
          fill
          className="object-cover"
          sizes="100vw"
        />
      </Parallax>
      <div className="absolute inset-0 bg-black/10" />

      {/* Outlined display words */}
      <h2 className="pointer-events-none absolute inset-x-0 bottom-[14%] flex items-end justify-between px-[3%] font-serif text-[clamp(60px,12vw,180px)] font-medium leading-none text-white/25">
        <Reveal as="span" variant="mask">Luxury</Reveal>
        <Reveal as="span" variant="mask" delay={120} className="italic">Retreats</Reveal>
      </h2>

      <div className="absolute bottom-[8%] left-1/2 -translate-x-1/2">
        <a
          href="#"
          className="rounded-full bg-[var(--color-cream)] px-8 py-3.5 text-[13px] font-medium text-[var(--color-red)] transition-colors duration-300 hover:bg-[var(--color-red)] hover:text-[var(--color-cream)]"
        >
          Explore Rooms
        </a>
      </div>
    </section>
  );
}

import Image from "next/image";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/Reveal";
import { CircleButton } from "@/components/CircleButton";
import { galleryItems } from "@/lib/content";

const rotations = ["-rotate-3", "rotate-2", "-rotate-1", "rotate-3", "-rotate-2"];
const offsets = ["mt-0", "mt-10", "mt-4", "mt-14", "mt-6"];

export function GallerySection() {
  return (
    <section className="relative overflow-hidden bg-[var(--color-cream)] px-5 py-28 md:px-8">
      <div className="mx-auto max-w-[1280px]">
        {/* View Gallery CTA */}
        <div className="flex items-center justify-center gap-3">
          <a
            href="#"
            className="rounded-full bg-[var(--color-cream)] px-14 py-7 font-serif text-[clamp(30px,4vw,52px)] font-medium text-[var(--color-red)] shadow-[0_10px_40px_rgba(176,150,86,0.12)] transition-colors duration-300 hover:bg-[var(--color-red)] hover:text-[var(--color-cream)]"
          >
            View Gallery
          </a>
          <a href="#" aria-label="View Gallery" className="group">
            <CircleButton size={80} variant="cream" className="shadow-[0_10px_40px_rgba(176,150,86,0.12)]" />
          </a>
        </div>

        {/* Polaroids */}
        <div className="mt-24 flex flex-wrap items-start justify-center gap-x-6 gap-y-10">
          {galleryItems.map((item, i) => (
            <Reveal
              key={item.caption}
              delay={i * 80}
              className={cn(
                "w-[230px] rounded-[8px] bg-white p-3 pb-5 shadow-[0_14px_40px_rgba(43,44,44,0.12)]",
                rotations[i % rotations.length],
                offsets[i % offsets.length],
              )}
            >
              <div className="relative h-[190px] w-full overflow-hidden rounded-[4px]">
                <Image src={item.image} alt={item.caption} fill className="object-cover" sizes="230px" />
              </div>
              <p className="mt-3 px-1 text-center font-hand text-[18px] text-[var(--color-maroon)]">
                {item.caption}
              </p>
            </Reveal>
          ))}
        </div>

        {/* Display text */}
        <div className="mt-20 text-center font-serif font-medium leading-[0.82] text-[var(--color-red)]">
          <span className="block text-[clamp(36px,5vw,76px)]">Warm</span>
          <span className="block text-[clamp(36px,5vw,76px)]">Stay</span>
          <span className="block text-[clamp(120px,22vw,320px)] italic">Vibes</span>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/Reveal";
import { CircleButton } from "@/components/CircleButton";
import { rooms } from "@/lib/content";

export function RoomsSection() {
  return (
    <section className="relative overflow-hidden bg-[var(--color-cream)] px-5 py-24 md:px-8">
      <div className="mx-auto max-w-[1280px]">
        {/* Heading row */}
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <Reveal as="h2" variant="mask" className="font-serif text-[clamp(36px,5vw,72px)] font-medium leading-[0.9] text-[var(--color-red)]">
            Spaces made for Relaxation
          </Reveal>
          <Reveal className="max-w-[360px] md:pb-4">
            <p className="text-[16px] leading-relaxed text-[var(--color-ink)]/70">
              From soft textures to serene interiors, every room is created to
              help you unwind and feel at home.
            </p>
            <a
              href="#"
              className="mt-5 inline-block text-[14px] text-[var(--color-red)] underline-offset-8 hover:underline"
            >
              View all Rooms
            </a>
          </Reveal>
        </div>

        {/* Rooms */}
        <div className="mt-20 flex flex-col gap-24">
          {rooms.map((room, i) => (
            <Reveal
              key={room.name}
              className={cn(
                "group grid items-center gap-8 md:grid-cols-2 md:gap-14",
                i % 2 === 1 && "md:[&>div:first-child]:order-2",
              )}
            >
              <div className="relative overflow-hidden rounded-[14px]">
                <Image
                  src={room.image}
                  alt={room.name}
                  width={640}
                  height={460}
                  className="h-[300px] w-full object-cover transition-transform duration-700 group-hover:scale-105 md:h-[440px]"
                />
                <div className="absolute left-4 top-4 flex gap-2">
                  <span className="rounded-full bg-[var(--color-cream)]/90 px-4 py-1.5 text-[12px] tracking-wide text-[var(--color-ink)]">
                    {room.size}
                  </span>
                  <span className="rounded-full bg-[var(--color-cream)]/90 px-4 py-1.5 text-[12px] tracking-wide text-[var(--color-ink)]">
                    {room.bed}
                  </span>
                </div>
              </div>

              <div className="flex flex-col items-start gap-5">
                <h3 className="font-serif text-[clamp(28px,3.4vw,40px)] font-medium leading-tight text-[var(--color-red)]">
                  {room.name}
                </h3>
                <p className="max-w-[440px] text-[16px] leading-relaxed text-[var(--color-ink)]/65">
                  {room.description}
                </p>
                <a href="#" aria-label={`View ${room.name}`} className="group/btn">
                  <CircleButton size={56} />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

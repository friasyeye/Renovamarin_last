import Image from "next/image";
import { Parallax } from "@/components/Parallax";
import { Counter } from "@/components/Counter";
import { walkStats } from "@/lib/content";

export function LocationSection() {
  return (
    <section className="relative bg-[var(--color-cream)]">
      {walkStats.map((stat) => (
        <div
          key={stat.number}
          className="relative flex h-[78vh] min-h-[520px] w-full items-center justify-end overflow-hidden px-5 md:px-12"
        >
          <Parallax amount={110}>
            <Image
              src={stat.image}
              alt=""
              fill
              className="scale-105 object-cover blur-[2px] brightness-[0.7]"
              sizes="100vw"
            />
          </Parallax>
          <div className="relative w-full max-w-[380px] rounded-[18px] bg-[var(--color-cream)] p-4">
            <div className="relative h-[180px] w-full overflow-hidden rounded-[12px]">
              <Image src={stat.image} alt="" fill className="object-cover" sizes="380px" />
            </div>
            <div className="mt-3 flex items-end justify-between">
              <Counter
                value={Number(stat.number)}
                className="font-serif text-[96px] font-medium leading-none text-[var(--color-red)]"
              />
              <span className="whitespace-pre-line pb-3 text-right text-[15px] leading-snug text-[var(--color-ink)]/70">
                {stat.label}
              </span>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

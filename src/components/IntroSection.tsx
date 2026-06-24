import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { introPortraits } from "@/lib/content";

export function IntroSection() {
  return (
    <section className="relative overflow-hidden bg-[var(--color-cream)] px-5 pt-28 pb-0 md:px-8">
      <div className="mx-auto max-w-[1200px]">
        <Reveal as="h2" variant="mask" className="text-center font-serif text-[clamp(36px,5vw,72px)] font-medium leading-[0.92] text-[var(--color-red)]">
          Where every stay becomes a Story
        </Reveal>

        <Reveal className="mx-auto mt-12 grid max-w-[820px] gap-6 text-center text-[17px] leading-relaxed text-[var(--color-ink)]/75">
          <p>
            At Maravilla, hospitality is crafted with intention and elegance. Our
            spaces are designed to offer more than comfort — they create an
            atmosphere where guests can unwind, connect, and experience.
          </p>
          <p>
            Whether you are enjoying a peaceful stay, savoring refined culinary
            experiences, or embracing moments of wellness and renewal, Maravilla
            invites you to slow down and indulge in life&rsquo;s finer moments.
          </p>
        </Reveal>

        <div className="mt-10 flex justify-center">
          <a
            href="#"
            className="text-[14px] text-[var(--color-red)] underline-offset-8 hover:underline"
          >
            About us
          </a>
        </div>
      </div>

      {/* Decorative curved line */}
      <svg
        className="pointer-events-none absolute left-0 top-[58%] hidden h-[320px] w-[40%] text-[var(--color-red)]/40 md:block"
        viewBox="0 0 400 320"
        fill="none"
        preserveAspectRatio="none"
      >
        <path d="M0 40 C 120 60, 260 180, 400 300" stroke="currentColor" strokeWidth="1" />
      </svg>

      {/* Staggered portraits */}
      <div className="relative mx-auto mt-20 flex max-w-[840px] items-start justify-center gap-6 pb-28">
        <Reveal className="w-[46%] translate-y-0">
          <Image
            src={introPortraits[0]}
            alt="Woman portrait in red editorial style"
            width={367}
            height={480}
            className="h-auto w-full rounded-[10px] object-cover"
          />
        </Reveal>
        <Reveal delay={120} className="w-[46%] translate-y-16">
          <Image
            src={introPortraits[1]}
            alt="Woman portrait in red editorial style"
            width={367}
            height={480}
            className="h-auto w-full rounded-[10px] object-cover"
          />
        </Reveal>
      </div>
    </section>
  );
}

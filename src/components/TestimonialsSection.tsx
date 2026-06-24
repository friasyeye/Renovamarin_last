import Image from "next/image";
import { Parallax } from "@/components/Parallax";
import {
  testimonialBg,
  testimonialAvatars,
  testimonials,
  partnerLogos,
} from "@/lib/content";
import { StarIcon } from "@/components/icons";

export function TestimonialsSection() {
  const loop = [...testimonials, ...testimonials];
  const logoLoop = [...partnerLogos, ...partnerLogos];

  return (
    <section className="relative bg-[var(--color-cream)]">
      {/* Corridor hero */}
      <div className="relative flex min-h-[78vh] flex-col justify-between overflow-hidden px-5 py-16 md:px-12">
        <Parallax amount={100}>
          <Image src={testimonialBg} alt="" fill className="object-cover" sizes="100vw" />
        </Parallax>
        <div className="absolute inset-0 bg-black/35" />

        <div className="relative flex flex-col justify-between gap-8 md:flex-row md:items-start">
          <h2 className="font-serif text-[clamp(36px,5vw,72px)] font-medium leading-[0.9] text-[var(--color-cream)]">
            What guests are Saying
          </h2>

          <div className="flex w-full max-w-[360px] flex-col gap-4 rounded-[16px] bg-[var(--color-cream)]/95 p-5">
            <div className="flex items-center justify-between">
              <div className="flex -space-x-3">
                {testimonialAvatars.map((a, i) => (
                  <Image
                    key={i}
                    src={a}
                    alt="Maravilla guest"
                    width={44}
                    height={44}
                    className="size-11 rounded-full border-2 border-[var(--color-cream)] object-cover"
                  />
                ))}
              </div>
              <div className="flex gap-1 text-[var(--color-red)]">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon key={i} className="size-4" />
                ))}
              </div>
            </div>
            <div className="flex items-end justify-between">
              <span className="font-serif text-[52px] leading-none text-[var(--color-red)]">
                4.9<span className="text-[24px]">/5</span>
              </span>
              <span className="pb-2 text-right text-[14px] leading-snug text-[var(--color-ink)]/70">
                Loved by
                <br />
                100K+ Customers
              </span>
            </div>
          </div>
        </div>

        {/* Partner band */}
        <div className="relative mt-12 flex flex-col gap-6">
          <p className="max-w-[460px] font-serif text-[clamp(22px,2.6vw,32px)] leading-snug text-[var(--color-cream)]">
            We partner with trusted names to ensure exceptional guest experiences.
          </p>
        </div>
      </div>

      {/* Testimonial marquee */}
      <div className="overflow-hidden py-16">
        <div className="flex w-max animate-marquee gap-6">
          {loop.map((t, i) => (
            <figure
              key={i}
              className="flex w-[340px] shrink-0 flex-col gap-5 rounded-[16px] bg-[var(--color-beige)] p-6"
            >
              <Image
                src={t.image}
                alt={t.name}
                width={300}
                height={200}
                className="h-[200px] w-full rounded-[10px] object-cover"
              />
              <blockquote className="text-[15px] leading-relaxed text-[var(--color-ink)]/75">
                {t.quote}
              </blockquote>
              <figcaption className="font-serif text-[18px] text-[var(--color-red)]">
                {t.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      {/* Partner logos marquee */}
      <div className="overflow-hidden border-y border-[var(--color-red)]/10 py-10">
        <div className="flex w-max animate-marquee items-center gap-16">
          {logoLoop.map((logo, i) => (
            <Image
              key={i}
              src={logo}
              alt="Partner logo"
              width={120}
              height={48}
              className="h-10 w-auto object-contain opacity-60"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

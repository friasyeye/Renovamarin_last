import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { CircleButton } from "@/components/CircleButton";
import { packages, packageQuote } from "@/lib/content";

export function PackagesSection() {
  return (
    <section className="relative overflow-hidden bg-[var(--color-cream)] px-5 py-24 md:px-8">
      <div className="mx-auto max-w-[1280px]">
        <Reveal as="h2" variant="mask" className="text-center font-serif text-[clamp(36px,5vw,72px)] font-medium leading-[0.9] text-[var(--color-red)]">
          Maravilla Packages
        </Reveal>

        <div className="mt-16 grid gap-7 lg:grid-cols-[1fr_1fr_0.9fr]">
          {packages.map((pkg) => (
            <Reveal
              key={pkg.name}
              className="group relative flex h-[560px] flex-col justify-end overflow-hidden rounded-[18px]"
            >
              <Image
                src={pkg.image}
                alt={pkg.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 420px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/10" />
              <span className="absolute left-5 top-5 rounded-full bg-[var(--color-cream)]/90 px-4 py-1.5 text-[12px] text-[var(--color-ink)]">
                {pkg.badge}
              </span>
              <div className="relative flex flex-col gap-4 p-6 text-[var(--color-cream)]">
                <h3 className="font-serif text-[34px] font-medium leading-none">{pkg.name}</h3>
                <p className="text-[14px] leading-relaxed text-[var(--color-cream)]/80">
                  {pkg.description}
                </p>
                <div className="mt-1 flex items-center justify-between">
                  <span className="font-serif text-[22px]">{pkg.price}</span>
                  <a href="#" className="group/btn flex items-center gap-3 text-[13px] tracking-wide">
                    More Info
                    <CircleButton size={44} variant="cream" />
                  </a>
                </div>
              </div>
            </Reveal>
          ))}

          {/* Info column */}
          <Reveal className="flex flex-col justify-center gap-8 lg:pl-4">
            <span className="font-serif text-[60px] leading-none text-[var(--color-red)]/40">&ldquo;</span>
            <p className="font-serif text-[clamp(22px,2.4vw,30px)] leading-snug text-[var(--color-ink)]/70">
              Our packages bring together the best of what we offer, thoughtfully
              curated to suit every kind of guest and every kind of escape.
            </p>
            <a
              href="#"
              className="self-start rounded-full bg-[var(--color-red)] px-8 py-3.5 text-[13px] font-medium text-[var(--color-cream)] transition-colors duration-300 hover:bg-[var(--color-red-bright)]"
            >
              Explore all Packages
            </a>
          </Reveal>
        </div>

        {/* Quote / author */}
        <Reveal className="mx-auto mt-24 flex max-w-[900px] flex-col items-center gap-6 text-center">
          <p className="font-serif text-[clamp(24px,3.2vw,42px)] font-medium leading-snug text-[var(--color-red)]">
            A thoughtfully designed escape where dining, wellness, and stays come
            together with quiet sophistication.
          </p>
          <div className="flex items-center gap-4">
            <Image
              src={packageQuote.image}
              alt={packageQuote.name}
              width={56}
              height={56}
              className="size-14 rounded-full object-cover"
            />
            <div className="text-left">
              <p className="font-serif text-[18px] text-[var(--color-ink)]">{packageQuote.name}</p>
              <p className="text-[13px] text-[var(--color-ink)]/55">{packageQuote.role}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

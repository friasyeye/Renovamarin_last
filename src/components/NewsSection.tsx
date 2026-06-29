import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { newsPosts } from "@/lib/content";

export function NewsSection() {
  return (
    <section className="relative overflow-hidden bg-[var(--color-cream)] px-5 py-24 md:px-8">
      <div className="mx-auto max-w-[1280px]">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <Reveal as="h2" variant="mask" className="font-serif text-[clamp(44px,7vw,104px)] font-medium leading-[0.9] text-[var(--color-red)]">
            What&rsquo;s happening
            <br />
            <span className="italic">around here</span>
          </Reveal>
          <Reveal className="max-w-[380px] md:pb-3">
            <p className="text-[16px] leading-relaxed text-[var(--color-ink)]/70">
              From events and seasonal highlights to stories, tips, and
              inspiration, discover what makes every stay more memorable.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {newsPosts.map((post, i) => (
            <Reveal key={post.title} delay={i * 100} className="group flex flex-col gap-5">
              <div className="relative h-[300px] w-full overflow-hidden rounded-[14px]">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
              </div>
              <span className="text-[13px] text-[var(--color-red)]">
                {post.category}
              </span>
              <h3 className="font-serif text-[26px] font-medium leading-tight text-[var(--color-ink)]">
                {post.title}
              </h3>
              <span className="text-[14px] text-[var(--color-ink)]/50">{post.date}</span>
            </Reveal>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center gap-6 text-center">
          <p className="max-w-[520px] text-[16px] leading-relaxed text-[var(--color-ink)]/70">
            Discover the charm that surrounds Maravilla, from local spots to
            must-visit attractions just a short walk away.
          </p>
          <a
            href="#"
            className="rounded-full bg-[var(--color-red)] px-8 py-3.5 text-[13px] font-medium text-[var(--color-cream)] transition-colors duration-300 hover:bg-[var(--color-cream)] hover:text-[var(--color-red)]"
          >
            View all News
          </a>
        </div>
      </div>
    </section>
  );
}

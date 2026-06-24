"use client";

import { Logo } from "@/components/Logo";
import { ArrowUpRightIcon } from "@/components/icons";

const sitemap = ["Home", "About", "Services", "Reviews", "Packages", "Gallery", "News"];
const offerings = ["Stay", "Dine", "Wellness"];
const contact = ["+00 1234567890", "hello@maravilla.com", "Contact us", "FAQ's"];

export function Footer() {
  return (
    <footer className="bg-[var(--color-maroon)] px-5 pt-20 pb-8 text-[var(--color-cream)] md:px-8">
      <div className="mx-auto max-w-[1280px]">
        {/* Newsletter */}
        <div className="flex flex-col items-center gap-6 border-b border-white/10 pb-16 text-center">
          <Logo size="text-[40px]" className="text-[var(--color-cream)]" />
          <p className="font-serif text-[20px] leading-snug text-[var(--color-cream)]/80">
            Subscribe to our newsletter and bring
            <br />a touch of Maravilla to your inbox.
          </p>
          <form className="flex items-center gap-2" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="your@email.com"
              className="h-[56px] w-[280px] rounded-full border border-white/20 bg-transparent px-6 text-[15px] text-[var(--color-cream)] placeholder:text-[var(--color-cream)]/40 focus:outline-none"
            />
            <button
              type="submit"
              aria-label="Subscribe to newsletter"
              className="flex size-[56px] items-center justify-center rounded-full bg-[var(--color-red)] text-[var(--color-cream)] transition-colors duration-300 hover:bg-[var(--color-red-bright)]"
            >
              <ArrowUpRightIcon className="w-[18px]" />
            </button>
          </form>
        </div>

        {/* Columns */}
        <div className="grid gap-12 py-16 md:grid-cols-4">
          <div className="flex flex-col gap-6">
            <span className="text-[12px] tracking-[0.18em] text-[var(--color-cream)]/75 uppercase">
              Maravilla
            </span>
            <p className="font-serif text-[26px] leading-snug">
              Passeig Marítim 42,
              <br />
              07015 Palma de Mallorca,
              <br />
              Spain
            </p>
            <a
              href="#"
              className="flex w-fit items-center gap-2 rounded-full bg-[var(--color-red)] py-3 pr-3 pl-6 text-[15px] text-[var(--color-cream)] transition-colors duration-300 hover:bg-[var(--color-red-bright)]"
            >
              Book now
              <span className="flex size-9 items-center justify-center rounded-full bg-white/15">
                <ArrowUpRightIcon className="w-4" />
              </span>
            </a>
          </div>

          <div className="flex flex-col gap-4">
            <span className="text-[12px] tracking-[0.18em] text-[var(--color-cream)]/75 uppercase">
              Contact
            </span>
            {contact.map((c) => (
              <a key={c} href="#" className="text-[16px] text-[var(--color-cream)]/85 hover:text-[var(--color-cream)]">
                {c}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            <span className="mb-1 text-[12px] tracking-[0.18em] text-[var(--color-cream)]/75 uppercase">
              Sitemap
            </span>
            {sitemap.map((s) => (
              <a key={s} href="#" className="font-serif text-[30px] leading-tight hover:text-[var(--color-cream)]/70">
                {s}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            <span className="mb-1 text-[12px] tracking-[0.18em] text-[var(--color-cream)]/75 uppercase">
              Maravilla
            </span>
            {offerings.map((o) => (
              <a key={o} href="#" className="font-serif text-[30px] leading-tight hover:text-[var(--color-cream)]/70">
                {o}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col gap-4 border-t border-white/10 pt-8 text-[14px] text-[var(--color-cream)]/70 md:flex-row md:items-center md:justify-between">
          <div className="flex gap-6">
            <a href="#" className="underline underline-offset-4">Privacy Policy</a>
            <a href="#" className="underline underline-offset-4">Terms &amp; Conditions</a>
          </div>
          <p>© 2026 Maravilla. Created by Zaid Khan</p>
        </div>
      </div>
    </footer>
  );
}

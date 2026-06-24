# Maravilla — Page Topology & Build Notes

Target: https://maravilla.framer.website/ (luxury hotel landing page, Spain).
Cloned into Next.js 16 / React 19 / Tailwind v4. Built section-by-section with
live visual QA against the original at 1440px and 390px.

## Design tokens
- **Cream** `#f5ece0` (page base) · **Beige** `#f2e8d8` (services) · **Red** `#ad1a1a`
  (brand) · **Maroon** `#48120e` (footer) · **Rose** = red @ ~45% (faded display headings).
- **Fonts:** Libre Caslon Condensed (self-hosted woff2, display/serif, roman+italic),
  DM Sans (UI/body), Gochi Hand (handwritten captions + "THE" in logo).
- **Smooth scroll:** Lenis (`src/components/SmoothScroll.tsx`).
- **Scroll reveal:** IntersectionObserver fade-up (`src/components/Reveal.tsx`).

## Sections (top → bottom) → component → interaction model
1. **Header** `Header.tsx` — fixed; scroll-driven state: transparent/white over hero →
   cream bg + red logo + red "Book your stay" pill after 60px.
2. **Hero** `Hero.tsx` — full-bleed autoplay video; giant `maravilla` wordmark
   (mara roman + villa italic); "Since 1975" + two pill badges. Static.
3. **Intro** `IntroSection.tsx` — rose display heading, two paragraphs, "About us",
   staggered portraits + decorative curve. Reveal-on-scroll.
4. **Luxury Retreats** `LuxurySection.tsx` — full-bleed chandelier image, outlined
   `Luxury`/`Retreats` words, "Explore Rooms" pill. Static.
5. **Rooms** `RoomsSection.tsx` — alternating image/text room cards w/ size+bed badges
   and circle arrow. Reveal + hover zoom.
6. **Services** `ServicesSection.tsx` — faded "Care in every detail" heading; 4 stacked
   full-bleed image cards (number, title, pill tags, description) + Extra Comforts block.
7. **Dining** `DiningSection.tsx` — two "Curated Dining/Relaxation" cards w/ CTA pills.
8. **Location** `LocationSection.tsx` — stacked full-bleed blurred bg panels, each with a
   card (photo + big red number + walk label): 05/09/12/18.
9. **Packages** `PackagesSection.tsx` — two package cards (Azure €260, Velvet €400) +
   quote column + author (Sofía Navarro).
10. **Testimonials** `TestimonialsSection.tsx` — corridor hero w/ heading + 4.9/5 rating
    card; auto-marquee testimonial cards; partner-logo marquee.
11. **Gallery** `GallerySection.tsx` — "View Gallery" pill; rotated polaroids w/ Gochi
    captions; giant "Warm Stay Vibes" display text.
12. **News** `NewsSection.tsx` — 3 article cards (category/title/date) + "View all News".
13. **CTA** `CtaSection.tsx` — two gradient image cards (Stay / Dining).
14. **Footer** `Footer.tsx` — maroon; newsletter signup; address/contact/sitemap columns.

## Known approximations
- Decorative connecting curves between cards are simplified single SVG paths.
- Polaroid scatter is a flex-wrap with per-item rotation/offset (original is absolutely
  positioned); content + captions are exact.
- Framer "Buy Template / Made in Framer" badges intentionally excluded.

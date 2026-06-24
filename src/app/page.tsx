import { SmoothScroll } from "@/components/SmoothScroll";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { IntroSection } from "@/components/IntroSection";
import { LuxurySection } from "@/components/LuxurySection";
import { RoomsSection } from "@/components/RoomsSection";
import { ServicesSection } from "@/components/ServicesSection";
import { ProcessSection } from "@/components/ProcessSection";
import { DiningSection } from "@/components/DiningSection";
import { LocationSection } from "@/components/LocationSection";
import { PackagesSection } from "@/components/PackagesSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { GallerySection } from "@/components/GallerySection";
import { NewsSection } from "@/components/NewsSection";
import { CtaSection } from "@/components/CtaSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <SmoothScroll />
      <Header />
      <main>
        <Hero />
        <ServicesSection />
        <ProcessSection />
        <IntroSection />
        <LuxurySection />
        <RoomsSection />
        <DiningSection />
        <LocationSection />
        <PackagesSection />
        <TestimonialsSection />
        <GallerySection />
        <NewsSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}

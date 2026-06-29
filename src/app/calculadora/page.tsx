import { SmoothScroll } from "@/components/SmoothScroll";
import { Header } from "@/components/Header";
import { CalculadoraSection } from "@/components/CalculadoraSection";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Calculadora de presupuesto de reforma | Renovamarín",
  description:
    "Calcula en segundos el coste orientativo de tu reforma de piso, cocina o baño en Barcelona. Sin compromiso.",
};

export default function CalculadoraPage() {
  return (
    <>
      <SmoothScroll />
      <Header theme="light" />
      <main>
        <CalculadoraSection />
      </main>
      <Footer />
    </>
  );
}

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { GaleriaGrid } from "@/components/GaleriaGrid";

export const metadata = {
  title: "Galería de reformas | Renovamarín",
  description: "Descubre nuestras reformas de cocinas, baños y espacios completos en Barcelona.",
};

export default function GaleriaPage() {
  return (
    <>
      <Header theme="light" />
      <main>
        <GaleriaGrid />
      </main>
      <Footer />
    </>
  );
}

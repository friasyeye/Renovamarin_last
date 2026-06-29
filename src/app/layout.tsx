import type { Metadata } from "next";
import { DM_Sans, Gochi_Hand } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const gochi = Gochi_Hand({
  variable: "--font-hand",
  subsets: ["latin"],
  weight: "400",
});

const caslon = localFont({
  variable: "--font-serif",
  src: [
    { path: "../../public/fonts/LibreCaslonCondensed-Regular.woff2", weight: "400", style: "normal" },
    { path: "../../public/fonts/LibreCaslonCondensed-Italic.woff2", weight: "400", style: "italic" },
    { path: "../../public/fonts/LibreCaslonCondensed-Medium.woff2", weight: "500", style: "normal" },
    { path: "../../public/fonts/LibreCaslonCondensed-MediumItalic.woff2", weight: "500", style: "italic" },
    { path: "../../public/fonts/LibreCaslonCondensed-SemiBold.woff2", weight: "600", style: "normal" },
  ],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Reformas Integrales en Barcelona | Renovamarin",
  description:
    "✔️ Presupuesto cerrado y plazos garantizados · Reformas de pisos, cocinas y baños en Barcelona · Más de 30 años de experiencia · 5⭐ en Google → Pide tu visita sin compromiso",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${dmSans.variable} ${gochi.variable} ${caslon.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}

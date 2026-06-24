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
  title: "Maravilla",
  description:
    "Our spaces are designed to offer more than comfort — they create an atmosphere where guests can unwind, connect, and experience.",
  icons: {
    icon: "/seo/rL3xTmP2lgu72fbUlLFhDYttp8.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${gochi.variable} ${caslon.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}

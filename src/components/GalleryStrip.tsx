"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";

const photos = [
  { src: "/images/sagrada-familia-cocina-panoramica.webp", alt: "Cocina panorámica", w: 3024, h: 4032 },
  { src: "/images/cocina_d2.webp", alt: "Cocina moderna en blanco", w: 1080, h: 1350 },
  { src: "/images/baño_azul1.webp", alt: "Baño con iluminación azul", w: 1080, h: 1350 },
  { src: "/images/bañob_después.webp", alt: "Baño reformado estilo nórdico", w: 1080, h: 1350 },
];

// Photo display widths on desktop
const DESKTOP_W = [300, 320, 320, 320];
// Photo display width on mobile
const MOBILE_W = 220;

export function GalleryStrip() {
  const outerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [trackShiftX, setTrackShiftX] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.05 }
    );
    if (outerRef.current) observer.observe(outerRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!outerRef.current) return;
      const rect = outerRef.current.getBoundingClientRect();
      const outerH = outerRef.current.offsetHeight;
      const windowH = window.innerHeight;
      const scrollable = outerH - windowH;
      const progress = scrollable > 0
        ? Math.max(0, Math.min(1, -rect.top / scrollable))
        : 0;
      setScrollProgress(progress);

      const mobile = window.innerWidth < 768;
      if (mobile && trackRef.current) {
        // Total width of all photos + gaps
        const trackW = trackRef.current.scrollWidth;
        const viewW = window.innerWidth;
        // How far we need to shift to show the last photo
        const maxShift = Math.max(0, trackW - viewW + 24); // 24 = end padding
        setTrackShiftX(-progress * maxShift);
      } else {
        setTrackShiftX(-progress * 50);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Mobile: outer needs enough height to scroll through all photos.
  // Each photo needs ~80vh of scroll range. Outer = 100vh (viewport) + scroll range.
  const mobileOuterHeight = `calc(100vh + ${(photos.length - 1) * 80}vh)`;

  return (
    <div
      ref={outerRef}
      style={{ height: isMobile ? mobileOuterHeight : "auto", position: "relative" }}
    >
      {/* Sticky panel — fills exactly 100vh on mobile, auto height on desktop */}
      <div
        style={{
          backgroundColor: "#2B2C2C",
          position: isMobile ? "sticky" : "relative",
          top: 0,
          height: isMobile ? "100vh" : "auto",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          // On desktop keep normal padding; on mobile center content vertically
          justifyContent: "center",
          padding: isMobile ? "0" : "6rem 0",
        }}
      >
        {/* Grain texture */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
            backgroundSize: "128px 128px",
          }}
        />

        {/* Header — centered */}
        <div
          className="relative z-10 px-5 text-center md:px-8"
          style={{
            marginBottom: isMobile ? "1.5rem" : "3.5rem",
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(28px)",
            transition: "opacity 1s cubic-bezier(0.16,1,0.3,1), transform 1s cubic-bezier(0.16,1,0.3,1)",
          }}
        >
          <h2
            className="font-serif font-medium leading-[1.05]"
            style={{
              color: "#F9F9F9",
              fontSize: isMobile ? "clamp(26px,7vw,36px)" : "clamp(32px,4.5vw,64px)",
            }}
          >
            Así quedan nuestras reformas
          </h2>
          <a
            href="/galeria"
            className="mt-2 inline-block font-serif font-medium"
            style={{
              color: "#F9F9F9",
              fontSize: isMobile ? "clamp(14px,4vw,16px)" : "clamp(15px,1.6vw,20px)",
              textDecoration: "underline",
              textUnderlineOffset: "5px",
              textDecorationThickness: "1px",
            }}
          >
            Ver galería de fotos
          </a>
        </div>

        {/* Photo strip */}
        <div
          ref={trackRef}
          className="relative z-10"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: isMobile ? "flex-start" : "center",
            gap: isMobile ? "1rem" : "2rem",
            paddingLeft: isMobile ? "1.5rem" : "3rem",
            paddingRight: isMobile ? "1.5rem" : "3rem",
            flexWrap: "nowrap",
            transform: isMobile ? `translateX(${trackShiftX}px)` : "none",
            transition: isMobile ? "transform 0.04s linear" : "none",
            willChange: isMobile ? "transform" : "auto",
          }}
        >
          {photos.map((photo, i) => {
            const ratio = photo.h / photo.w;
            const displayW = isMobile ? MOBILE_W : DESKTOP_W[i];
            const displayH = Math.round(displayW * ratio);
            const cardShift = 0;
              return (
              <div
                key={photo.src}
                style={{
                  flexShrink: 0,
                  transform: `translateY(${cardShift}px)`,
                  transition: "transform 0.08s linear, opacity 1s cubic-bezier(0.16,1,0.3,1)",
                  willChange: "transform",
                  opacity: isVisible ? 1 : 0,
                  transitionDelay: `${i * 100}ms`,
                }}
              >
                <div>
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    width={displayW}
                    height={displayH}
                    style={{ display: "block", width: displayW, height: "auto" }}
                    sizes="(max-width: 768px) 70vw, 400px"
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Scroll hint — mobile only, fades once user scrolls */}
        <div
          className="absolute bottom-6 left-0 right-0 z-20 flex justify-center md:hidden"
          style={{
            opacity: scrollProgress < 0.05 && isVisible ? 1 : 0,
            transition: "opacity 0.5s ease",
          }}
        >
          <span
            className="font-sans font-medium uppercase"
            style={{
              color: "rgba(249,249,249,0.45)",
              fontSize: "10px",
              letterSpacing: "0.2em",
            }}
          >
            ← desliza →
          </span>
        </div>
      </div>
    </div>
  );
}

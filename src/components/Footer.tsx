import Image from "next/image";

const navLinks = [
  { label: "Servicios", href: "#" },
  { label: "Galería", href: "#proyectos" },
  { label: "Calculadora de reformas", href: "#calculadora" },
  { label: "Contacto", href: "#contacto" },
];

const servicios = [
  { label: "Reformas integrales", href: "/servicios/reformas-integrales" },
  { label: "Reformas de cocinas", href: "#reformas-cocinas" },
  { label: "Reformas de baños", href: "#reformas-banos" },
  { label: "Reformas de locales", href: "#reformas-locales" },
];

export function Footer() {
  return (
    <footer className="bg-[var(--color-cream)] px-5 pt-20 pb-8 text-[var(--color-red)] md:px-8">
      <div className="mx-auto max-w-[1280px]">

        {/* Columns */}
        <div className="grid gap-12 border-b border-[var(--color-red)]/20 py-16 md:grid-cols-4">

          {/* Logo + tagline */}
          <div className="flex flex-col gap-6">
            <Image
              src="/images/logo_renovamarin.webp"
              alt="Renovamarín"
              width={200}
              height={48}
              className="object-contain"
              style={{ filter: "invert(63%) sepia(30%) saturate(500%) hue-rotate(5deg) brightness(90%)" }}
            />
            <p className="font-serif text-[17px] leading-snug text-[var(--color-red)]/70">
              Creamos hogares con alma. Reformas diseñadas para que cada rincón de tu casa cuente tu historia.
            </p>
          </div>

          {/* Contacto */}
          <div className="flex flex-col gap-5">
            <span className="text-[12px] tracking-[0.18em] uppercase text-[var(--color-red)]/50">
              Contacto
            </span>
            <a
              href="mailto:renovamarin@gmail.com"
              className="flex items-center gap-3 font-serif text-[22px] leading-tight text-[var(--color-red)] transition-colors hover:text-[var(--color-red)]/60"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 opacity-60">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m2 7 10 7 10-7" />
              </svg>
              renovamarin@gmail.com
            </a>
            <a
              href="https://wa.me/34667804973"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 font-serif text-[22px] leading-tight text-[var(--color-red)] transition-colors hover:text-[var(--color-red)]/60"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="shrink-0 opacity-60">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              +34 667 80 49 73
            </a>
            <a
              href="https://www.instagram.com/renovamarin/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 font-serif text-[22px] leading-tight text-[var(--color-red)] transition-colors hover:text-[var(--color-red)]/60"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 opacity-60">
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
              </svg>
              @renovamarin
            </a>
          </div>

          {/* Navegación */}
          <div className="flex flex-col gap-3">
            <span className="mb-1 text-[12px] tracking-[0.18em] uppercase text-[var(--color-red)]/50">
              Navegación
            </span>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-serif text-[22px] leading-tight text-[var(--color-red)] transition-colors hover:text-[var(--color-red)]/60"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Servicios */}
          <div className="flex flex-col gap-3">
            <span className="mb-1 text-[12px] tracking-[0.18em] uppercase text-[var(--color-red)]/50">
              Servicios
            </span>
            {servicios.map((s) => (
              <a
                key={s.label}
                href={s.href}
                className="font-serif text-[22px] leading-tight text-[var(--color-red)] transition-colors hover:text-[var(--color-red)]/60"
              >
                {s.label}
              </a>
            ))}
          </div>

        </div>

        {/* Bottom */}
        <div className="flex flex-col gap-2 border-t border-[var(--color-red)]/20 pt-8 text-[13px] text-[var(--color-red)]/50 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Renovamarín. Todos los derechos reservados.</p>
          <div className="flex items-center gap-4">
            <p>Barcelona, España</p>
            <span className="hidden md:block">·</span>
            <a
              href="https://pulsarstudioo.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-[var(--color-red)]"
            >
              Desarrollado por Pulsar Studio
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}

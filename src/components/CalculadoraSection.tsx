"use client";

import { useState } from "react";
import { Reveal } from "@/components/Reveal";

type TipoReforma = "integral" | "cocina" | "bano" | null;
type Gama = "basico" | "confort" | "premium" | null;

const trabajosCocina = [
  "Cambiar suelo",
  "Abrir al comedor",
  "Alicatar paredes",
  "Electricidad y fontanería",
  "Muebles y encimera",
  "Cambiar puerta",
  "Electrodomésticos",
  "Cambiar aluminio",
  "Isla de cocina",
];

const trabajosBano = [
  "Cambiar suelo",
  "Cambiar ventana",
  "Alicatar paredes",
  "Puerta del baño",
  "Sanitarios y muebles",
  "Bañera o plato ducha",
  "Electricidad y fontanería",
  "Mampara",
];

const gamaLabels: Record<string, string> = {
  basico: "Básico",
  confort: "Confort",
  premium: "Premium",
};

const tipoLabels: Record<string, string> = {
  integral: "reforma integral",
  cocina: "reforma de cocina",
  bano: "reforma de baño",
};

function calcularPresupuesto(tipo: TipoReforma, gama: Gama, metros: number) {
  if (!tipo || !gama) return { min: "—", max: "—" };
  const fmt = (n: number) =>
    n.toLocaleString("es-ES", { style: "currency", currency: "EUR", maximumFractionDigits: 0 });
  if (tipo === "integral") {
    const r: Record<string, [number, number]> = { basico: [600, 800], confort: [800, 1000], premium: [1000, 1200] };
    return { min: fmt(metros * r[gama][0]), max: fmt(metros * r[gama][1]) };
  }
  if (tipo === "cocina") {
    const r: Record<string, [number, number]> = { basico: [8000, 12000], confort: [12000, 18000], premium: [18000, 30000] };
    return { min: fmt(r[gama][0]), max: fmt(r[gama][1]) };
  }
  const r: Record<string, [number, number]> = { basico: [4000, 6000], confort: [6000, 10000], premium: [10000, 18000] };
  return { min: fmt(r[gama][0]), max: fmt(r[gama][1]) };
}

export function CalculadoraSection() {
  const [step, setStep] = useState(1);
  const [tipo, setTipo] = useState<TipoReforma>(null);
  const [metros, setMetros] = useState(80);
  const [banos, setBanos] = useState(1);
  const [ventanas, setVentanas] = useState(0);
  const [puertas, setPuertas] = useState(0);
  const [trabajos, setTrabajos] = useState<string[]>([]);
  const [gama, setGama] = useState<Gama>(null);

  const totalSteps = 4;

  function canAdvance() {
    if (step === 1) return tipo !== null;
    if (step === 2) return tipo === "integral" ? metros > 0 : trabajos.length > 0;
    if (step === 3) return gama !== null;
    return true;
  }

  function toggleTrabajo(t: string) {
    setTrabajos((prev) => prev.includes(t) ? prev.filter((x) => x !== t) : [...prev, t]);
  }

  function reset() {
    setStep(1); setTipo(null); setGama(null);
    setTrabajos([]); setMetros(80); setBanos(1); setVentanas(0); setPuertas(0);
  }

  function Counter({ label, value, onChange, min = 0 }: {
    label: string; value: number; onChange: (v: number) => void; min?: number;
  }) {
    return (
      <div className="flex items-center justify-between border-b border-[var(--color-ink)]/8 py-4 last:border-0">
        <span className="font-sans text-[14px] text-[var(--color-ink)]/60">{label}</span>
        <div className="flex items-center gap-4">
          <button
            onClick={() => onChange(Math.max(min, value - 1))}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-[var(--color-ink)]/15 text-[var(--color-ink)]/40 transition-colors hover:border-[var(--color-red)] hover:text-[var(--color-red)]"
            aria-label={`Reducir ${label}`}
          >
            <svg width="12" height="2" viewBox="0 0 12 2" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><line x1="1" y1="1" x2="11" y2="1" /></svg>
          </button>
          <span className="w-5 text-center font-serif text-[18px] font-medium text-[var(--color-ink)]">{value}</span>
          <button
            onClick={() => onChange(value + 1)}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-[var(--color-ink)]/15 text-[var(--color-ink)]/40 transition-colors hover:border-[var(--color-red)] hover:text-[var(--color-red)]"
            aria-label={`Aumentar ${label}`}
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><line x1="6" y1="1" x2="6" y2="11" /><line x1="1" y1="6" x2="11" y2="6" /></svg>
          </button>
        </div>
      </div>
    );
  }

  const presupuesto = calcularPresupuesto(tipo, gama, metros);
  const whatsappMsg = encodeURIComponent(
    `Hola, acabo de usar la calculadora de Renovamarin. Quiero reformar ${tipo ? tipoLabels[tipo] : ""} con materiales ${gama ? gamaLabels[gama] : ""}. ¿Podéis darme un presupuesto?`
  );
  const whatsappUrl = `https://wa.me/34667804973?text=${whatsappMsg}`;

  return (
    <section className="bg-white px-5 pb-24 pt-24 md:px-8 md:pb-32 md:pt-28">
      <div className="mx-auto w-full max-w-[1280px]">

        {/* Breadcrumb */}
        <Reveal as="nav" variant="fade" immediate className="mb-10 flex items-center gap-2 font-sans text-[12px] font-medium tracking-[0.12em] uppercase">
          <a href="/" className="text-[var(--color-stone)]/40 transition-colors hover:text-[var(--color-stone)]">Inicio</a>
          <span className="text-[var(--color-stone)]/25">/</span>
          <span className="text-[var(--color-red)]">Calculadora de reformas</span>
        </Reveal>

        {/* Hero text */}
        <Reveal as="h1" variant="mask" immediate className="font-serif text-[clamp(36px,5vw,72px)] font-medium leading-[0.9] text-[var(--color-red)]">
          Calcula el coste<br />de tu reforma
        </Reveal>

        <Reveal delay={160} immediate className="mt-8 max-w-[520px]">
          <p className="font-serif text-[clamp(16px,2vw,21px)] leading-[1.4] text-[var(--color-stone)]">
            Orientativo y sin compromiso — en menos de un minuto sabrás qué rango de inversión necesitas.
          </p>
        </Reveal>

        {/* Tarjeta */}
        <Reveal delay={220} className="mt-16 max-w-[780px] mx-auto">
          <div className="rounded-2xl bg-white/45 px-7 py-8 shadow-[0_6px_40px_rgba(43,44,44,0.12)] backdrop-blur-md md:px-10 md:py-10">

            {/* Header de la card */}
            <div className="mb-7 flex items-center justify-between border-b border-[var(--color-ink)]/8 pb-6">
              <span className="font-sans text-[11px] uppercase tracking-[0.18em] text-[var(--color-ink)]/30">
                Paso {step} de {totalSteps}
              </span>
              <div className="flex items-center gap-1.5">
                {Array.from({ length: totalSteps }).map((_, i) => (
                  <div
                    key={i}
                    className="rounded-full transition-all duration-500"
                    style={{
                      width: i + 1 === step ? "18px" : "5px",
                      height: "5px",
                      background: i + 1 <= step ? "var(--color-red)" : "rgba(43,44,44,0.15)",
                    }}
                  />
                ))}
              </div>
            </div>

            {/* PASO 1 */}
            {step === 1 && (
              <div>
                <p className="mb-6 font-serif text-[26px] font-medium leading-tight text-[var(--color-ink)]">
                  ¿Qué quieres reformar?
                </p>
                <div className="flex flex-col">
                  {(
                    [
                      { id: "integral", label: "Reforma integral",  desc: "Todo el piso o local" },
                      { id: "cocina",   label: "Reforma de cocina", desc: "Cocina nueva o renovada" },
                      { id: "bano",     label: "Reforma de baño",   desc: "Baño completo o parcial" },
                    ] as const
                  ).map(({ id, label, desc }) => (
                    <button
                      key={id}
                      onClick={() => setTipo(id)}
                      className="group flex w-full items-center justify-between border-b border-[var(--color-ink)]/8 py-4 text-left last:border-0 transition-colors duration-200"
                    >
                      <div>
                        <span className={`block font-serif text-[20px] font-medium leading-none transition-colors duration-200 ${tipo === id ? "text-[var(--color-red)]" : "text-[var(--color-ink)] group-hover:text-[var(--color-red)]"}`}>
                          {label}
                        </span>
                        <span className="mt-0.5 block font-sans text-[12px] text-[var(--color-ink)]/40">{desc}</span>
                      </div>
                      <div
                        className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 transition-all duration-200"
                        style={{
                          borderColor: tipo === id ? "var(--color-red)" : "rgba(43,44,44,0.20)",
                          background: tipo === id ? "var(--color-red)" : "transparent",
                        }}
                      >
                        {tipo === id && <div className="h-2 w-2 rounded-full bg-white" />}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* PASO 2 */}
            {step === 2 && (
              <div>
                <p className="mb-6 font-serif text-[26px] font-medium leading-tight text-[var(--color-ink)]">
                  {tipo === "integral" ? "¿Cuántos metros tiene tu piso?" : "¿Qué trabajos hay que realizar?"}
                </p>

                {tipo === "integral" && (
                  <div>
                    <div className="mb-2 border-b border-[var(--color-ink)]/8 pb-6">
                      <label className="mb-2 block font-sans text-[11px] uppercase tracking-[0.18em] text-[var(--color-ink)]/30">
                        Metros cuadrados
                      </label>
                      <div className="flex items-end gap-2">
                        <input
                          type="number"
                          min={10}
                          max={1000}
                          value={metros}
                          onChange={(e) => setMetros(Math.max(1, parseInt(e.target.value) || 1))}
                          className="w-28 bg-transparent font-serif text-[48px] font-medium leading-none text-[var(--color-ink)] outline-none"
                        />
                        <span className="mb-2 font-sans text-[18px] text-[var(--color-ink)]/30">m²</span>
                      </div>
                    </div>
                    <Counter label="Baños a reformar" value={banos} onChange={setBanos} min={0} />
                    <Counter label="Ventanas y puertas de aluminio" value={ventanas} onChange={setVentanas} />
                    <Counter label="Puertas de madera interiores" value={puertas} onChange={setPuertas} />
                  </div>
                )}

                {(tipo === "cocina" || tipo === "bano") && (
                  <div className="flex flex-col">
                    {(tipo === "cocina" ? trabajosCocina : trabajosBano).map((t) => {
                      const sel = trabajos.includes(t);
                      return (
                        <button
                          key={t}
                          onClick={() => toggleTrabajo(t)}
                          className="flex items-center gap-3 border-b border-[var(--color-ink)]/8 py-3.5 text-left last:border-0 transition-colors duration-200"
                        >
                          <div
                            className="flex h-4 w-4 shrink-0 items-center justify-center rounded border-[1.5px] transition-all duration-200"
                            style={{
                              borderColor: sel ? "var(--color-red)" : "rgba(43,44,44,0.22)",
                              background: sel ? "var(--color-red)" : "transparent",
                            }}
                          >
                            {sel && (
                              <svg width="8" height="6" viewBox="0 0 8 6" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="1,3 3,5 7,1" stroke="white" strokeWidth="1.5" />
                              </svg>
                            )}
                          </div>
                          <span className={`font-sans text-[14px] transition-colors duration-200 ${sel ? "text-[var(--color-ink)]" : "text-[var(--color-ink)]/55"}`}>
                            {t}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            )}

            {/* PASO 3 */}
            {step === 3 && (
              <div>
                <p className="mb-6 font-serif text-[26px] font-medium leading-tight text-[var(--color-ink)]">
                  ¿Qué gama de materiales prefieres?
                </p>
                <div className="flex flex-col">
                  {(
                    [
                      { id: "basico",  label: "Básico",   desc: "Materiales de calidad estándar, funcional y duradero" },
                      { id: "confort", label: "Confort",  desc: "Mejor acabado y materiales de gama media-alta" },
                      { id: "premium", label: "Premium",  desc: "Materiales de alta gama y acabados exclusivos" },
                    ] as const
                  ).map(({ id, label, desc }) => (
                    <button
                      key={id}
                      onClick={() => setGama(id)}
                      className="group flex w-full items-center justify-between border-b border-[var(--color-ink)]/8 py-4 text-left last:border-0 transition-colors duration-200"
                    >
                      <div>
                        <span className={`block font-serif text-[20px] font-medium leading-none transition-colors duration-200 ${gama === id ? "text-[var(--color-red)]" : "text-[var(--color-ink)] group-hover:text-[var(--color-red)]"}`}>
                          {label}
                        </span>
                        <span className="mt-0.5 block font-sans text-[12px] text-[var(--color-ink)]/40">{desc}</span>
                      </div>
                      <div
                        className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 transition-all duration-200"
                        style={{
                          borderColor: gama === id ? "var(--color-red)" : "rgba(43,44,44,0.20)",
                          background: gama === id ? "var(--color-red)" : "transparent",
                        }}
                      >
                        {gama === id && <div className="h-2 w-2 rounded-full bg-white" />}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* PASO 4 — Resultado */}
            {step === 4 && (
              <div>
                <p className="mb-1 font-sans text-[11px] uppercase tracking-[0.18em] text-[var(--color-ink)]/30">
                  {tipo ? tipoLabels[tipo].charAt(0).toUpperCase() + tipoLabels[tipo].slice(1) : ""} · Gama {gama ? gamaLabels[gama] : ""}
                </p>
                <p className="mb-8 font-serif text-[26px] font-medium leading-tight text-[var(--color-ink)]">
                  Tu presupuesto orientativo
                </p>

                <div className="mb-8 border-b border-[var(--color-ink)]/8 pb-8">
                  <p className="mb-3 font-sans text-[11px] uppercase tracking-[0.18em] text-[var(--color-ink)]/30">Rango estimado</p>
                  <p className="font-serif text-[clamp(36px,8vw,56px)] font-medium leading-none text-[var(--color-red)]">
                    {presupuesto.min}
                  </p>
                  <p className="my-1 font-sans text-[13px] text-[var(--color-ink)]/30">— hasta —</p>
                  <p className="font-serif text-[clamp(36px,8vw,56px)] font-medium leading-none text-[var(--color-red)]">
                    {presupuesto.max}
                  </p>
                  {tipo === "integral" && (
                    <p className="mt-3 font-sans text-[12px] text-[var(--color-ink)]/35">Calculado para {metros} m²</p>
                  )}
                </div>

                <p className="mb-7 font-sans text-[13px] leading-[1.7] text-[var(--color-ink)]/55">
                  Este presupuesto es orientativo. Para un precio exacto y sin compromiso,
                  cuéntanos tu reforma por WhatsApp.
                </p>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 rounded-lg px-6 py-3.5 font-sans text-[14px] font-semibold text-white transition-all duration-200 hover:opacity-90 active:scale-[0.98]"
                  style={{ background: "var(--color-red)" }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp
                </a>

                <button
                  onClick={reset}
                  className="mt-4 block font-sans text-[12px] text-[var(--color-ink)]/30 underline underline-offset-4 transition-colors hover:text-[var(--color-ink)]/60"
                >
                  Volver a empezar
                </button>
              </div>
            )}

            {/* Footer — barra de progreso + navegación */}
            <div className="mt-8 border-t border-[var(--color-ink)]/8 pt-6">
              <div className="mb-5 h-px bg-[var(--color-ink)]/8">
                <div
                  className="h-full transition-all duration-500 ease-in-out"
                  style={{ width: `${(step / totalSteps) * 100}%`, background: "var(--color-red)" }}
                />
              </div>

              {step < 4 && (
                <div className="flex items-center justify-between">
                  <button
                    onClick={() => setStep((s) => s - 1)}
                    disabled={step === 1}
                    className="flex items-center gap-1.5 font-sans text-[13px] text-[var(--color-ink)]/35 transition-colors duration-200 disabled:pointer-events-none disabled:opacity-0 hover:text-[var(--color-ink)]/70"
                  >
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="9,2 4,7 9,12" />
                    </svg>
                    Anterior
                  </button>

                  <button
                    onClick={() => canAdvance() && setStep((s) => s + 1)}
                    disabled={!canAdvance()}
                    className="flex items-center gap-1.5 rounded-lg px-6 py-2.5 font-sans text-[13px] font-semibold text-white transition-all duration-200 disabled:pointer-events-none disabled:opacity-30 hover:opacity-85 active:scale-[0.98]"
                    style={{ background: "var(--color-red)" }}
                  >
                    {step === 3 ? "Ver presupuesto" : "Siguiente"}
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="5,2 10,7 5,12" />
                    </svg>
                  </button>
                </div>
              )}
            </div>

          </div>
        </Reveal>

      </div>
    </section>
  );
}

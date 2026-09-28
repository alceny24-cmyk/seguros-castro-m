"use client";

import { useState } from "react";
import Image from "next/image";

const WHATSAPP = "18296656648";

// ── Base de datos de marcas y modelos populares en RD ──────────────────────
const VEHICLE_DATA: Record<string, string[]> = {
  Toyota:         ["Corolla", "Camry", "RAV4", "Yaris", "Hilux", "Land Cruiser", "Fortuner", "Prado", "Avanza", "Rush", "Otro modelo"],
  Honda:          ["Civic", "Accord", "CR-V", "HR-V", "Fit/Jazz", "Pilot", "Odyssey", "Otro modelo"],
  Hyundai:        ["Tucson", "Santa Fe", "Elantra", "Accent", "Creta", "Sonata", "Otro modelo"],
  Kia:            ["Sportage", "Sorento", "Rio", "Picanto", "Cerato", "Seltos", "Otro modelo"],
  Nissan:         ["Sentra", "Altima", "Rogue", "X-Trail", "Frontier", "Pathfinder", "Versa", "Otro modelo"],
  Mazda:          ["Mazda 3", "Mazda 6", "CX-5", "CX-30", "CX-3", "Otro modelo"],
  Mitsubishi:     ["Outlander", "ASX", "Montero Sport", "L200", "Eclipse Cross", "Mirage", "Otro modelo"],
  Suzuki:         ["Grand Vitara", "Jimny", "Swift", "S-Cross", "Otro modelo"],
  Chevrolet:      ["Silverado", "Traverse", "Equinox", "Trax", "Malibu", "Spark", "Otro modelo"],
  Ford:           ["F-150", "Explorer", "Escape", "Mustang", "Ranger", "Expedition", "Otro modelo"],
  Jeep:           ["Grand Cherokee", "Wrangler", "Cherokee", "Compass", "Renegade", "Otro modelo"],
  BMW:            ["Serie 3", "Serie 5", "X1", "X3", "X5", "Otro modelo"],
  "Mercedes-Benz":["Clase C", "Clase E", "GLC", "GLE", "Clase A", "Otro modelo"],
  Lexus:          ["RX", "NX", "ES", "GX", "IS", "Otro modelo"],
  Audi:           ["A3", "A4", "A5", "Q3", "Q5", "Otro modelo"],
  Volkswagen:     ["Golf", "Tiguan", "Passat", "Jetta", "T-Cross", "Otro modelo"],
  Peugeot:        ["208", "308", "2008", "3008", "5008", "Otro modelo"],
  Renault:        ["Logan", "Duster", "Sandero", "Koleos", "Otro modelo"],
  "Otra marca":   ["Otro modelo"],
};

const BRANDS = Object.keys(VEHICLE_DATA);
const YEARS = ["2020", "2019", "2018", "2017", "2016", "2015", "2014", "2013", "2012", "2011"];

const PROVINCIAS = [
  "Distrito Nacional", "Santo Domingo", "Santiago", "La Altagracia (Bávaro/Punta Cana)",
  "La Romana", "San Pedro de Macorís", "Puerto Plata", "San Cristóbal",
  "La Vega", "Duarte (San Francisco de Macorís)", "Espaillat (Moca)", "Monseñor Nouel (Bonao)",
  "Peravia (Baní)", "Valverde (Mao)", "María Trinidad Sánchez (Nagua)", "Samaná",
  "Hato Mayor", "El Seibo", "Barahona", "Azua", "San Juan", "Otra provincia",
];

function buildMessage(brand: string, model: string, year: string, name: string, phone: string, provincia: string, email: string) {
  const lines = [
    "Hola, quisiera información sobre las opciones de seguro para mi vehículo.",
    "",
    `Vehículo: ${year} ${brand} ${model}`,
    "",
    `Nombre: ${name}`,
    `WhatsApp: ${phone}`,
    `Provincia: ${provincia}`,
    email ? `Correo: ${email}` : "",
    "",
    "Por favor orientarme sobre las opciones disponibles.",
  ].filter((l, i, arr) => !(l === "" && arr[i - 1] === ""));
  return lines.join("\n");
}

const WA_ICON = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 shrink-0">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

function scrollToForm() {
  document.getElementById("formulario-vehiculo")?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function VehiculoFunnel() {
  const [brand, setBrand]       = useState("");
  const [model, setModel]       = useState("");
  const [year, setYear]         = useState("");
  const [name, setName]         = useState("");
  const [phone, setPhone]       = useState("");
  const [provincia, setProvincia] = useState("");
  const [email, setEmail]       = useState("");
  const [submitted, setSubmitted] = useState(false);

  const models = brand ? VEHICLE_DATA[brand] ?? [] : [];
  const isValid = brand.length > 0 && model.length > 0 && year.length > 0 &&
                  name.trim().length > 0 && phone.trim().length > 0 && provincia.length > 0;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!isValid) return;
    if (typeof window !== "undefined" && (window as any).fbq) {
      (window as any).fbq("track", "Lead");
    }
    const msg = buildMessage(brand, model, year, name.trim(), phone.trim(), provincia, email.trim());
    window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`, "_blank", "noopener,noreferrer");
    setSubmitted(true);
  }

  return (
    <>
      {/* ── STICKY CTA MOBILE ── */}
      <div className="fixed bottom-0 left-0 right-0 z-50 sm:hidden" style={{ paddingBottom: "env(safe-area-inset-bottom)" }}>
        <button
          onClick={scrollToForm}
          className="flex w-full items-center justify-center gap-2.5 bg-[#25d366] py-4 text-base font-bold tracking-wide text-white shadow-[0_-4px_20px_rgba(0,0,0,0.25)]"
        >
          {WA_ICON}
          VER OPCIONES PARA MI VEHÍCULO
        </button>
      </div>

      {/* ── STICKY CTA DESKTOP ── */}
      <div className="fixed bottom-6 right-6 z-50 hidden sm:block">
        <button
          onClick={scrollToForm}
          className="group flex items-center gap-2 rounded-full bg-[#25d366] px-5 py-3 text-sm font-bold text-white shadow-[0_4px_24px_rgba(37,211,102,0.45)] transition hover:bg-[#1ebe5c] hover:shadow-[0_6px_28px_rgba(37,211,102,0.6)]"
        >
          {WA_ICON}
          Cotizar vehículo
        </button>
      </div>

      {/* ══════════════════════════════════
          HERO
      ══════════════════════════════════ */}
      <section className="pb-6 text-center">
        {/* Imagen del anuncio — ocupa todo el ancho en mobile */}
        <div className="relative w-full overflow-hidden">
          <Image
            src="/images/vehiculo-og.png"
            alt="¿Tu vehículo es 2011–2015? Todavía puede estar asegurado."
            width={1086}
            height={1448}
            priority
            className="w-full object-cover"
            style={{ maxHeight: "52dvh", objectPosition: "top" }}
          />
          {/* Gradiente inferior para transición suave al fondo oscuro */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#081729] to-transparent" />
        </div>

        <div className="px-5 pt-4">
          <p className="text-base text-white/65 max-w-xs mx-auto leading-relaxed">
            Coloca los datos de tu vehículo y un asesor te orientará sobre las coberturas disponibles.
          </p>

          <button
            onClick={scrollToForm}
            className="mt-5 inline-flex items-center gap-2 rounded-xl bg-[#25d366] px-7 py-3.5 text-base font-bold text-white shadow-[0_4px_20px_rgba(37,211,102,0.4)] transition hover:bg-[#1ebe5c]"
          >
            Ver opciones para mi vehículo →
          </button>
        </div>
      </section>

      {/* ══════════════════════════════════
          FORM
      ══════════════════════════════════ */}
      <section id="formulario-vehiculo" className="px-5 pb-28 sm:pb-16">
        <div className="mx-auto max-w-sm">

          {submitted ? (
            /* ── ESTADO POST-ENVÍO ── */
            <div className="rounded-2xl border border-white/15 bg-white/6 px-6 py-8 text-center">
              <div className="mb-3 text-4xl">✅</div>
              <h2 className="text-xl font-bold text-white leading-snug">
                Consulta recibida.
              </h2>
              <p className="mt-3 text-sm text-white/65 leading-relaxed">
                Nuestro equipo revisará las opciones disponibles para tu{" "}
                <strong className="text-white">{year} {brand} {model}</strong>{" "}
                y te contactará por WhatsApp para orientarte con tu cotización.
              </p>
              <p className="mt-5 text-xs text-white/35">
                Si WhatsApp no se abrió automáticamente, puedes escribirnos directamente al{" "}
                <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noopener noreferrer" className="text-[#25d366] underline">
                  +1 (829) 665-6648
                </a>
              </p>
              <button
                onClick={() => { setSubmitted(false); setYear(""); setModel(""); setBrand(""); setName(""); setPhone(""); setProvincia(""); setEmail(""); }}
                className="mt-6 text-xs text-white/40 hover:text-white/70 transition underline"
              >
                Cotizar otro vehículo
              </button>
            </div>
          ) : (
            <>
              <div className="mb-7 text-center">
                <h2 className="text-xl font-bold text-white">Consulta tus opciones</h2>
                <p className="mt-1.5 text-sm text-white/55">
                  Atención personalizada por WhatsApp · Sin compromiso
                </p>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>

                {/* ── DATOS DEL VEHÍCULO ── */}
                <div className="rounded-2xl border border-white/10 bg-white/4 px-5 py-5 flex flex-col gap-4">
                  <p className="text-xs font-semibold uppercase tracking-widest text-blue-300/60">
                    Datos del vehículo
                  </p>

                  {/* Marca */}
                  <div className="relative">
                    <select
                      required
                      value={brand}
                      onChange={(e) => { setBrand(e.target.value); setModel(""); }}
                      className="w-full appearance-none rounded-xl border border-white/20 bg-white/8 px-5 py-4 text-base text-white outline-none transition focus:border-blue-400/60 focus:bg-white/12"
                    >
                      <option value="" disabled className="bg-slate-900 text-white">Marca del vehículo</option>
                      {BRANDS.map((b) => (
                        <option key={b} value={b} className="bg-slate-900 text-white">{b}</option>
                      ))}
                    </select>
                    <span className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-white/40 text-sm">▾</span>
                  </div>

                  {/* Modelo — aparece al elegir marca */}
                  {brand && (
                    <div className="relative">
                      <select
                        required
                        value={model}
                        onChange={(e) => setModel(e.target.value)}
                        className="w-full appearance-none rounded-xl border border-white/20 bg-white/8 px-5 py-4 text-base text-white outline-none transition focus:border-blue-400/60 focus:bg-white/12"
                      >
                        <option value="" disabled className="bg-slate-900 text-white">Modelo</option>
                        {models.map((m) => (
                          <option key={m} value={m} className="bg-slate-900 text-white">{m}</option>
                        ))}
                      </select>
                      <span className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-white/40 text-sm">▾</span>
                    </div>
                  )}

                  {/* Año — chips táctiles */}
                  <div>
                    <p className="mb-3 text-sm font-medium text-white/70">Año</p>
                    <div className="grid grid-cols-5 gap-2">
                      {YEARS.map((y) => (
                        <label key={y} className="cursor-pointer">
                          <input
                            type="radio"
                            name="year"
                            value={y}
                            checked={year === y}
                            onChange={() => setYear(y)}
                            className="sr-only"
                          />
                          <span
                            className={`flex h-11 w-full items-center justify-center rounded-xl border text-sm font-bold transition
                              ${year === y
                                ? "border-blue-400 bg-blue-500/25 text-white"
                                : "border-white/15 bg-white/6 text-white/55 hover:border-white/35 hover:text-white"
                              }`}
                          >
                            {y}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>

                {/* ── DATOS DE CONTACTO ── */}
                <div className="rounded-2xl border border-white/10 bg-white/4 px-5 py-5 flex flex-col gap-4">
                  <p className="text-xs font-semibold uppercase tracking-widest text-blue-300/60">
                    Tus datos
                  </p>

                  <input
                    type="text"
                    required
                    placeholder="Nombre completo"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full rounded-xl border border-white/20 bg-white/8 px-5 py-4 text-base text-white placeholder-white/40 outline-none transition focus:border-blue-400/60 focus:bg-white/12"
                  />

                  <input
                    type="tel"
                    required
                    placeholder="WhatsApp (ej. 809-555-0000)"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full rounded-xl border border-white/20 bg-white/8 px-5 py-4 text-base text-white placeholder-white/40 outline-none transition focus:border-blue-400/60 focus:bg-white/12"
                  />

                  <div className="relative">
                    <select
                      required
                      value={provincia}
                      onChange={(e) => setProvincia(e.target.value)}
                      className="w-full appearance-none rounded-xl border border-white/20 bg-white/8 px-5 py-4 text-base text-white outline-none transition focus:border-blue-400/60 focus:bg-white/12"
                    >
                      <option value="" disabled className="bg-slate-900 text-white">Provincia / ciudad</option>
                      {PROVINCIAS.map((p) => (
                        <option key={p} value={p} className="bg-slate-900 text-white">{p}</option>
                      ))}
                    </select>
                    <span className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-white/40 text-sm">▾</span>
                  </div>

                  <input
                    type="email"
                    placeholder="Correo electrónico (opcional)"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-xl border border-white/20 bg-white/8 px-5 py-4 text-base text-white placeholder-white/40 outline-none transition focus:border-blue-400/60 focus:bg-white/12"
                  />
                </div>

                {/* ── CTA ── */}
                <button
                  type="submit"
                  disabled={!isValid}
                  className="group relative overflow-hidden rounded-2xl bg-[#25d366] px-6 py-6 text-xl font-extrabold tracking-wide text-white transition-all duration-200
                    shadow-[0_6px_32px_rgba(37,211,102,0.40)]
                    hover:bg-[#1ebe5c] hover:shadow-[0_10px_40px_rgba(37,211,102,0.60)] hover:scale-[1.02]
                    active:scale-[0.98]
                    disabled:cursor-not-allowed disabled:opacity-40 disabled:shadow-none"
                >
                  {isValid && (
                    <span className="absolute inset-0 rounded-2xl animate-ping bg-[#25d366] opacity-15" />
                  )}
                  <span className="relative flex flex-col items-center gap-1">
                    <span className="flex items-center gap-3">
                      {WA_ICON}
                      Ver opciones para mi vehículo
                      <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                    </span>
                    <span className="text-sm font-normal text-white/75">
                      Respuesta personalizada por WhatsApp · Sin compromiso
                    </span>
                  </span>
                </button>

                <p className="text-center text-xs text-white/35">
                  🔒 Sus datos son privados y solo se usan para su cotización
                </p>
              </form>
            </>
          )}
        </div>
      </section>
    </>
  );
}

import { HeartPulse, Shield, Car, Home, Plane, Building2, ArrowRight } from "lucide-react";
import { buildWhatsappLink } from "@/lib/contact";

const SERVICES = [
  {
    icon: HeartPulse,
    title: "Seguro de Salud",
    description: "Cobertura médica integral para ti y tu familia.",
  },
  {
    icon: Shield,
    title: "Seguro de Vida",
    description: "Protege el futuro financiero de quienes más quieres.",
  },
  {
    icon: Car,
    title: "Seguro de Vehículos",
    description: "Protección completa para tu auto o flota empresarial.",
  },
  {
    icon: Home,
    title: "Seguro del Hogar",
    description: "Resguarda tu vivienda ante cualquier eventualidad.",
  },
  {
    icon: Plane,
    title: "Seguro de Viajes",
    description: "Viaja tranquilo con asistencia médica internacional.",
  },
  {
    icon: Building2,
    title: "Seguro Empresarial",
    description: "Soluciones integrales para empresas del sector turístico.",
  },
];

export function Services() {
  return (
    <section id="servicios" className="bg-bg">
      <div className="mx-auto max-w-[1200px] px-6 py-16 sm:py-24">
        <div className="max-w-[60ch]">
          <h2 className="font-display text-[clamp(1.5rem,2.5vw+1rem,2.25rem)] font-medium text-ink">
            Nuestros servicios
          </h2>
          <p className="mt-3 text-[17px] text-muted">
            Seguros diseñados para proteger cada aspecto de tu vida, tu
            familia y tu negocio. Toca un servicio para cotizarlo.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-x-10 gap-y-0 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <a
              key={service.title}
              href={buildWhatsappLink(
                `Hola. Me interesa el ${service.title.toLowerCase()}. Quisiera más información.`,
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="group border-t border-border py-8 transition-colors duration-150"
            >
              <service.icon
                className="h-6 w-6 text-primary"
                strokeWidth={1.75}
                aria-hidden="true"
              />
              <h3 className="mt-5 text-[17px] font-semibold text-ink">
                {service.title}
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-muted">
                {service.description}
              </p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-[14px] font-semibold text-primary">
                Cotizar por WhatsApp
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

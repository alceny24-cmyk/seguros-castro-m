import { HeartPulse, Shield, Car, Home, Plane, Building2, ArrowRight } from "lucide-react";
import { buildWhatsappLink } from "@/lib/contact";
import type { Dictionary } from "@/lib/i18n/types";

const ICONS = [HeartPulse, Shield, Car, Home, Plane, Building2];

export function Services({ dict }: { dict: Dictionary }) {
  return (
    <section id="servicios" className="bg-bg">
      <div className="mx-auto max-w-[1200px] px-6 py-16 sm:py-24">
        <div className="max-w-[60ch]">
          <h2 className="font-display text-[clamp(1.5rem,2.5vw+1rem,2.25rem)] font-medium text-ink">
            {dict.services.title}
          </h2>
          <p className="mt-3 text-[17px] text-muted">{dict.services.subtitle}</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-x-10 gap-y-0 sm:grid-cols-2 lg:grid-cols-3">
          {dict.services.items.map((service, index) => {
            const Icon = ICONS[index];
            return (
              <a
                key={service.title}
                href={buildWhatsappLink(service.whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="group border-t border-border py-8 transition-colors duration-150"
              >
                <Icon
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
                  {dict.services.ctaLabel}
                  <ArrowRight
                    className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

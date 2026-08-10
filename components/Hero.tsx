import Image from "next/image";
import { CtaButton } from "@/components/CtaButton";
import { PHONE_E164, PHONE_DISPLAY, DEFAULT_WHATSAPP_MESSAGE } from "@/lib/contact";

export function Hero() {
  return (
    <section id="inicio" className="bg-bg">
      <div className="mx-auto grid max-w-[1200px] items-center gap-14 px-6 py-16 sm:py-20 lg:grid-cols-[1.1fr_1fr] lg:gap-16 lg:py-28">
        <div>
          <h1 className="text-balance font-display text-[clamp(2rem,4vw+1.25rem,3.25rem)] font-medium leading-[1.15] text-ink">
            Protegemos lo que más valoras.
          </h1>
          <p className="mt-6 max-w-[46ch] text-[17px] leading-relaxed text-muted">
            Soluciones en seguros para personas, familias y empresas con
            atención personalizada y asesoría profesional en Bayahíbe y
            Dominicus.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <CtaButton message={DEFAULT_WHATSAPP_MESSAGE}>
              Cotizar por WhatsApp
            </CtaButton>
            <CtaButton variant="secondary" href={`tel:${PHONE_E164}`} external={false}>
              Llámanos · {PHONE_DISPLAY}
            </CtaButton>
          </div>
          <p className="mt-4 text-[14px] text-muted">
            Cotización sin compromiso, directo por WhatsApp.
          </p>
        </div>

        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-border">
          <Image
            src="/images/hero-bayahibe.jpg"
            alt="Costa de Bayahíbe, República Dominicana"
            fill
            priority
            sizes="(min-width: 1024px) 540px, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import { CtaButton } from "@/components/CtaButton";
import { PHONE_E164, PHONE_DISPLAY } from "@/lib/contact";
import type { Dictionary } from "@/lib/i18n/types";

export function Hero({ dict }: { dict: Dictionary }) {
  return (
    <section id="inicio" className="bg-bg">
      <div className="mx-auto grid max-w-[1200px] items-center gap-14 px-6 py-16 sm:py-20 lg:grid-cols-[1.1fr_1fr] lg:gap-16 lg:py-28">
        <div>
          <h1 className="text-balance font-display text-[clamp(2rem,4vw+1.25rem,3.25rem)] font-medium leading-[1.15] text-ink">
            {dict.hero.title}
          </h1>
          <p className="mt-6 max-w-[46ch] text-[17px] leading-relaxed text-muted">
            {dict.hero.subtitle}
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <CtaButton message={dict.whatsapp.defaultMessage}>
              {dict.hero.ctaWhatsapp}
            </CtaButton>
            <CtaButton
              variant="secondary"
              href={`tel:${PHONE_E164}`}
              external={false}
              message={dict.whatsapp.defaultMessage}
            >
              {dict.hero.ctaCall} · {PHONE_DISPLAY}
            </CtaButton>
          </div>
          <p className="mt-4 text-[14px] text-muted">{dict.hero.note}</p>
        </div>

        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-border">
          <Image
            src="/images/hero-bayahibe.jpg"
            alt={dict.hero.imageAlt}
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

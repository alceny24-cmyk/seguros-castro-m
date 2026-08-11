import { Phone, Mail } from "lucide-react";
import { CtaButton } from "@/components/CtaButton";
import { PHONE_E164, PHONE_DISPLAY, CONTACT_EMAIL } from "@/lib/contact";
import type { Dictionary } from "@/lib/i18n/types";

export function Contact({ dict }: { dict: Dictionary }) {
  return (
    <section id="contacto" className="bg-surface">
      <div className="mx-auto max-w-[640px] px-6 py-16 text-center sm:py-24">
        <h2 className="font-display text-[clamp(1.5rem,2.5vw+1rem,2.25rem)] font-medium text-ink">
          {dict.contact.title}
        </h2>
        <p className="mx-auto mt-3 max-w-[46ch] text-[17px] text-muted">
          {dict.contact.subtitle}
        </p>

        <div className="mt-9 flex justify-center">
          <CtaButton
            message={dict.whatsapp.defaultMessage}
            className="w-full sm:w-auto"
          >
            {dict.contact.ctaWhatsapp}
          </CtaButton>
        </div>

        <div className="mx-auto mt-10 flex max-w-[380px] flex-col items-center gap-4 border-t border-border pt-8 text-[15px] text-muted sm:flex-row sm:justify-center sm:gap-8">
          <a
            href={`tel:${PHONE_E164}`}
            className="flex items-center gap-2 transition-colors duration-150 hover:text-primary"
          >
            <Phone className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
            {PHONE_DISPLAY}
          </a>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="flex items-center gap-2 transition-colors duration-150 hover:text-primary"
          >
            <Mail className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
            {CONTACT_EMAIL}
          </a>
        </div>
      </div>
    </section>
  );
}

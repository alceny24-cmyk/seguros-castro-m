import { MessageCircle } from "lucide-react";
import { buildWhatsappLink } from "@/lib/contact";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import type { Dictionary } from "@/lib/i18n/types";

// Anclado con env(safe-area-inset-*) para no quedar bajo la barra de gestos
// de iPhone; visible en todos los breakpoints (antes el botón de WhatsApp
// era solo móvil).
export function FloatingActions({ dict }: { dict: Dictionary }) {
  return (
    <div
      className="fixed z-40 flex items-center gap-2.5 sm:gap-3"
      style={{
        bottom: "calc(1.25rem + env(safe-area-inset-bottom))",
        right: "calc(1.25rem + env(safe-area-inset-right))",
      }}
    >
      <div className="rounded-full border border-border bg-bg/95 px-1 py-1.5 shadow-[0_8px_20px_-8px_rgba(0,0,0,0.25)] backdrop-blur">
        <LanguageSwitcher dict={dict} />
      </div>

      <a
        href={buildWhatsappLink(dict.whatsapp.defaultMessage)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={dict.stickyCta.ariaLabel}
        className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary text-primary-ink shadow-[0_8px_20px_-6px_rgba(0,0,0,0.35)] transition-colors duration-150 hover:bg-primary-hover"
      >
        <MessageCircle className="h-7 w-7" strokeWidth={1.75} aria-hidden="true" />
      </a>
    </div>
  );
}

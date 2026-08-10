import { MessageCircle } from "lucide-react";
import { buildWhatsappLink, DEFAULT_WHATSAPP_MESSAGE } from "@/lib/contact";

export function StickyMobileCta() {
  return (
    <a
      href={buildWhatsappLink(DEFAULT_WHATSAPP_MESSAGE)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Cotizar por WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-ink shadow-[0_8px_20px_-6px_rgba(0,0,0,0.35)] transition-colors duration-150 hover:bg-primary-hover sm:hidden"
    >
      <MessageCircle className="h-7 w-7" strokeWidth={1.75} aria-hidden="true" />
    </a>
  );
}

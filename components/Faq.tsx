"use client";

import { useState } from "react";
import { ChevronDown, ArrowRight } from "lucide-react";
import type { FaqItem } from "@/types/faq";
import { buildWhatsappLink } from "@/lib/contact";

const FAQ_ITEMS: FaqItem[] = [
  {
    question: "¿Qué tipos de seguros ofrecen?",
    answer:
      "Ofrecemos seguros de salud, vida, vehículos, hogar, viajes y seguros empresariales adaptados a sus necesidades específicas.",
  },
  {
    question: "¿Cuánto cuesta un seguro con ustedes?",
    answer:
      "El costo depende del tipo de cobertura, el perfil de riesgo y tus necesidades específicas. Escríbenos por WhatsApp y te damos una cotización personalizada sin compromiso.",
    ctaLabel: "Pedir cotización",
    ctaMessage: "Hola. Quisiera saber cuánto costaría un seguro para mi caso.",
  },
  {
    question: "¿Cómo puedo cotizar un seguro?",
    answer:
      "Puede contactarnos directamente por WhatsApp para recibir una cotización personalizada.",
    ctaLabel: "Cotizar ahora",
    ctaMessage: "Hola. Quisiera cotizar un seguro.",
  },
  {
    question: "¿Atienden en toda la zona de Bayahíbe?",
    answer:
      "Sí, prestamos servicios en Bayahíbe, Dominicus, San Rafael del Yuma, Boca de Yuma, Boca de Chavón, Benerito y Padre Nuestro.",
  },
  {
    question: "¿Ofrecen seguros para empresas del sector turístico?",
    answer:
      "Sí, contamos con planes diseñados específicamente para hoteles, restaurantes, operadores turísticos y empresas del sector.",
    ctaLabel: "Consultar plan empresarial",
    ctaMessage: "Hola. Quisiera información sobre seguros para mi empresa del sector turístico.",
  },
];

function FaqRow({ item, index }: { item: FaqItem; index: number }) {
  const [open, setOpen] = useState(false);
  const panelId = `faq-panel-${index}`;
  const buttonId = `faq-button-${index}`;

  return (
    <div className="border-b border-border">
      <h3>
        <button
          id={buttonId}
          type="button"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((v) => !v)}
          className="flex w-full items-center justify-between gap-4 py-6 text-left"
        >
          <span className="text-[16px] font-semibold text-ink">
            {item.question}
          </span>
          <ChevronDown
            className={`h-5 w-5 shrink-0 text-muted transition-transform duration-200 ${
              open ? "rotate-180" : ""
            }`}
            aria-hidden="true"
          />
        </button>
      </h3>
      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        className={`grid overflow-hidden transition-[grid-template-rows] duration-300 ease-out ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="min-h-0 pb-6">
          <p className="text-[15px] leading-relaxed text-muted">
            {item.answer}
          </p>
          {item.ctaLabel && item.ctaMessage && (
            <a
              href={buildWhatsappLink(item.ctaMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-1.5 text-[14px] font-semibold text-primary"
            >
              {item.ctaLabel}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export function Faq() {
  return (
    <section id="faq" className="bg-bg">
      <div className="mx-auto max-w-[700px] px-6 py-16 sm:py-24">
        <h2 className="text-center font-display text-[clamp(1.5rem,2.5vw+1rem,2.25rem)] font-medium text-ink">
          Preguntas frecuentes
        </h2>

        <div className="mt-12 border-t border-border">
          {FAQ_ITEMS.map((item, index) => (
            <FaqRow key={item.question} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

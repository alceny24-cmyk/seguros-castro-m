"use client";

import { useState } from "react";
import { ChevronDown, ArrowRight } from "lucide-react";
import type { FaqItemContent, Dictionary } from "@/lib/i18n/types";
import { buildWhatsappLink } from "@/lib/contact";

function FaqRow({ item, index }: { item: FaqItemContent; index: number }) {
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

export function Faq({ dict }: { dict: Dictionary }) {
  return (
    <section id="faq" className="bg-bg">
      <div className="mx-auto max-w-[700px] px-6 py-16 sm:py-24">
        <h2 className="text-center font-display text-[clamp(1.5rem,2.5vw+1rem,2.25rem)] font-medium text-ink">
          {dict.faq.title}
        </h2>

        <div className="mt-12 border-t border-border">
          {dict.faq.items.map((item, index) => (
            <FaqRow key={item.question} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

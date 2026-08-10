"use client";

import { useRef } from "react";
import Link from "next/link";
import { CtaButton } from "@/components/CtaButton";
import { DEFAULT_WHATSAPP_MESSAGE } from "@/lib/contact";

const NAV_LINKS = [
  { href: "#inicio", label: "Inicio" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#servicios", label: "Servicios" },
  { href: "#faq", label: "Preguntas" },
  { href: "#contacto", label: "Contacto" },
];

export function Header() {
  const detailsRef = useRef<HTMLDetailsElement>(null);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-bg/95 backdrop-blur">
      <div className="mx-auto flex h-[72px] max-w-[1200px] items-center justify-between gap-4 px-6">
        <Link
          href="#inicio"
          className="shrink-0 font-display text-lg font-semibold text-ink"
        >
          Castro &amp; M
        </Link>

        <nav aria-label="Navegación principal" className="hidden items-center gap-9 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[14px] font-medium text-muted transition-colors duration-150 hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden sm:block">
            <CtaButton message={DEFAULT_WHATSAPP_MESSAGE} className="!min-h-[42px] !px-5 !text-[14px]">
              WhatsApp
            </CtaButton>
          </div>

          <details ref={detailsRef} className="relative md:hidden">
            <summary
              className="flex h-11 w-11 cursor-pointer list-none items-center justify-center rounded-lg border border-border text-ink [&::-webkit-details-marker]:hidden"
              aria-label="Abrir menú"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                className="h-5 w-5"
                aria-hidden="true"
              >
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            </summary>
            <nav aria-label="Menú móvil" className="absolute right-0 top-[calc(100%+8px)] w-56 rounded-lg border border-border bg-bg p-2 shadow-[0_8px_20px_-8px_rgba(0,0,0,0.15)]">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => {
                    if (detailsRef.current) detailsRef.current.open = false;
                  }}
                  className="block rounded-md px-4 py-3 text-[15px] font-medium text-ink transition-colors duration-150 hover:bg-surface"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}

import type { Dictionary, Locale } from "@/lib/i18n/types";
import { locales, localePath } from "@/lib/i18n/config";

const LABEL_KEY: Record<Locale, keyof Dictionary["languageSwitcher"]> = {
  es: "es",
  it: "it",
  en: "en",
  fr: "fr",
};

// Enlaces nativos (no next/link): el cambio de idioma exige una recarga
// completa para que el <html lang> del layout raíz se re-evalúe en el
// servidor; una transición cliente conserva el layout montado y no lo
// actualiza.
export function LanguageSwitcher({
  dict,
  className = "",
}: {
  dict: Dictionary;
  className?: string;
}) {
  return (
    <div
      className={`flex items-center gap-1 text-[13px] font-semibold text-muted ${className}`}
      role="group"
      aria-label={dict.languageSwitcher.label}
    >
      {locales.map((locale, index) => {
        const isActive = dict.locale === locale;
        return (
          <span key={locale} className="flex items-center gap-1">
            {index > 0 && <span className="text-border">|</span>}
            <a
              href={localePath(locale)}
              aria-current={isActive ? "page" : undefined}
              className={`rounded-md px-2 py-1 transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
                isActive ? "bg-surface text-ink" : "hover:text-ink"
              }`}
            >
              {dict.languageSwitcher[LABEL_KEY[locale]]}
            </a>
          </span>
        );
      })}
    </div>
  );
}

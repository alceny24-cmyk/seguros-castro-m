import type { Locale, Dictionary } from "@/lib/i18n/types";
import { es } from "@/lib/i18n/es";
import { it } from "@/lib/i18n/it";
import { en } from "@/lib/i18n/en";
import { fr } from "@/lib/i18n/fr";

export const locales: Locale[] = ["es", "it", "en", "fr"];
export const defaultLocale: Locale = "es";

export const dictionaries: Record<Locale, Dictionary> = { es, it, en, fr };

export function localePath(locale: Locale) {
  return locale === defaultLocale ? "/" : `/${locale}/`;
}

export function hreflangAlternates(): Record<string, string> {
  const alternates: Record<string, string> = {};
  for (const locale of locales) {
    alternates[locale] = localePath(locale);
  }
  alternates["x-default"] = localePath(defaultLocale);
  return alternates;
}

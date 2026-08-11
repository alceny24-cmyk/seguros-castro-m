import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { locales, localePath, hreflangAlternates } from "@/lib/i18n/config";

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = Object.fromEntries(
    Object.entries(hreflangAlternates()).map(([lang, path]) => [
      lang,
      `${SITE_URL}${path}`,
    ]),
  );

  return locales.map((locale) => ({
    url: `${SITE_URL}${localePath(locale)}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: locale === "es" ? 1 : 0.8,
    alternates: { languages },
  }));
}

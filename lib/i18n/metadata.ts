import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";
import { hreflangAlternates, localePath } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/types";

const siteName = "Inversiones Castro & M SRL";

export function localeMetadata(dict: Dictionary): Metadata {
  const path = localePath(dict.locale);

  return {
    title: {
      default: dict.meta.title,
      template: dict.meta.titleTemplate,
    },
    description: dict.meta.description,
    keywords: dict.meta.keywords,
    alternates: {
      canonical: path,
      languages: hreflangAlternates(),
    },
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      type: "website",
      locale: dict.meta.ogLocale,
      alternateLocale: ["es_DO", "it_IT", "en_US", "fr_FR"].filter(
        (l) => l !== dict.meta.ogLocale,
      ),
      url: `${SITE_URL}${path}`,
      siteName,
      title: dict.meta.title,
      description: dict.meta.description,
      images: [
        {
          url: "/images/hero-bayahibe.jpg",
          width: 1200,
          height: 630,
          alt: dict.hero.imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: dict.meta.title,
      description: dict.meta.description,
      images: ["/images/hero-bayahibe.jpg"],
    },
  };
}

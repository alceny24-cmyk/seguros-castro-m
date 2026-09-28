export type Locale = "es" | "it" | "en" | "fr";

export type EducationItem = {
  degree: string;
  detail: string;
  year: string;
};

export type ServiceItem = {
  title: string;
  description: string;
  whatsappMessage: string;
  href?: string;
};

export type FaqItemContent = {
  question: string;
  answer: string;
  ctaLabel?: string;
  ctaMessage?: string;
};

export type Dictionary = {
  locale: Locale;
  htmlLang: string;
  meta: {
    title: string;
    titleTemplate: string;
    description: string;
    ogLocale: string;
    keywords: string[];
  };
  nav: {
    inicio: string;
    nosotros: string;
    servicios: string;
    faq: string;
    contacto: string;
    whatsapp: string;
    openMenu: string;
    mobileMenu: string;
  };
  hero: {
    title: string;
    subtitle: string;
    ctaWhatsapp: string;
    ctaCall: string;
    note: string;
    imageAlt: string;
    priceBadge: string;
  };
  services: {
    title: string;
    subtitle: string;
    ctaLabel: string;
    items: ServiceItem[];
  };
  about: {
    title: string;
    name: string;
    role: string;
    photoAlt: string;
    bioParagraphs: string[];
    educationLabel: string;
    education: EducationItem[];
    familyTitle: string;
    familyText: string;
  };
  trust: {
    title: string;
    items: string[];
  };
  coverage: {
    title: string;
    subtitle: string;
    towns: string[];
  };
  faq: {
    title: string;
    items: FaqItemContent[];
  };
  leadFunnel: {
    productName: string;
    productTagline: string;
    coverage: string;
    price: string;
    highlights: string[];
    title: string;
    subtitle: string;
    namePlaceholder: string;
    phonePlaceholder: string;
    insuranceLabel: string;
    insuranceOptions: string[];
    cta: string;
    messageTemplate: string;
  };
  contact: {
    title: string;
    subtitle: string;
    ctaWhatsapp: string;
  };
  footer: {
    rights: string;
  };
  stickyCta: {
    ariaLabel: string;
  };
  whatsapp: {
    defaultMessage: string;
  };
  languageSwitcher: {
    es: string;
    it: string;
    en: string;
    fr: string;
    label: string;
  };
};

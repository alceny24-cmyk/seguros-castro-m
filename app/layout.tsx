import type { Metadata } from "next";
import { Newsreader, DM_Sans } from "next/font/google";
import { SITE_URL } from "@/lib/site";
import { JsonLd } from "@/components/JsonLd";
import "./globals.css";

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  weight: ["500", "600"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const siteName = "Inversiones Castro & M SRL";
const siteDescription =
  "Seguros de salud, vida, vehículo, hogar, viaje y empresariales en Bayahíbe, Dominicus y la región este de República Dominicana. Asesoría personalizada por WhatsApp.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${siteName} — Seguros en Bayahíbe y Dominicus`,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  keywords: [
    "seguros Bayahíbe",
    "seguros Dominicus",
    "seguro de salud República Dominicana",
    "seguro de vida",
    "seguro de vehículo",
    "seguro de hogar",
    "seguro empresarial turístico",
    "correduría de seguros región este",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    locale: "es_DO",
    url: SITE_URL,
    siteName,
    title: `${siteName} — Seguros en Bayahíbe y Dominicus`,
    description: siteDescription,
    images: [
      {
        url: "/images/hero-bayahibe.jpg",
        width: 1200,
        height: 630,
        alt: "Costa de Bayahíbe, República Dominicana",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} — Seguros en Bayahíbe y Dominicus`,
    description: siteDescription,
    images: ["/images/hero-bayahibe.jpg"],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${newsreader.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-bg text-ink">
        <JsonLd />
        {children}
      </body>
    </html>
  );
}

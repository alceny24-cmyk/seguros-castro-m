import type { Metadata } from "next";
import { headers } from "next/headers";
import { Newsreader, DM_Sans } from "next/font/google";
import { SITE_URL } from "@/lib/site";
import { JsonLd } from "@/components/JsonLd";
import { localeMetadata } from "@/lib/i18n/metadata";
import { es } from "@/lib/i18n/es";
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

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  ...localeMetadata(es),
  icons: {
    icon: "/favicon.ico",
  },
  manifest: "/site.webmanifest",
};

const LOCALE_PREFIXES = ["it", "en", "fr"] as const;

export default async function RootLayout({ children }: LayoutProps<"/">) {
  const headersList = await headers();
  const pathname = headersList.get("x-pathname") ?? "/";
  const prefix = LOCALE_PREFIXES.find((code) => pathname.startsWith(`/${code}`));
  const lang = prefix ?? "es";

  return (
    <html
      lang={lang}
      className={`${newsreader.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-bg text-ink">
        <JsonLd />
        {children}
      </body>
    </html>
  );
}

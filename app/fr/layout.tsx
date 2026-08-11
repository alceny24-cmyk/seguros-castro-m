import type { Metadata } from "next";
import { localeMetadata } from "@/lib/i18n/metadata";
import { fr } from "@/lib/i18n/fr";

export const metadata: Metadata = localeMetadata(fr);

export default function FrLayout({ children }: { children: React.ReactNode }) {
  return children;
}

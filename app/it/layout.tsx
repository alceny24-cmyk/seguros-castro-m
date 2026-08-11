import type { Metadata } from "next";
import { localeMetadata } from "@/lib/i18n/metadata";
import { it } from "@/lib/i18n/it";

export const metadata: Metadata = localeMetadata(it);

export default function ItLayout({ children }: { children: React.ReactNode }) {
  return children;
}

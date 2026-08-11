import type { Metadata } from "next";
import { localeMetadata } from "@/lib/i18n/metadata";
import { en } from "@/lib/i18n/en";

export const metadata: Metadata = localeMetadata(en);

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return children;
}

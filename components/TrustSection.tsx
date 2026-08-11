import { UserCheck, Zap, Lock, Award, Umbrella } from "lucide-react";
import type { Dictionary } from "@/lib/i18n/types";

const ICONS = [UserCheck, Zap, Lock, Award, Umbrella];

export function TrustSection({ dict }: { dict: Dictionary }) {
  return (
    <section className="bg-surface">
      <div className="mx-auto max-w-[1200px] px-6 py-16 sm:py-24">
        <h2 className="text-center font-display text-[clamp(1.5rem,2.5vw+1rem,2.25rem)] font-medium text-ink">
          {dict.trust.title}
        </h2>

        <div className="mt-14 grid grid-cols-2 gap-y-10 sm:grid-cols-5 sm:divide-x sm:divide-border">
          {dict.trust.items.map((label, index) => {
            const Icon = ICONS[index];
            return (
              <div
                key={label}
                className="flex flex-col items-center gap-3 px-4 text-center"
              >
                <Icon
                  className="h-6 w-6 text-primary"
                  strokeWidth={1.75}
                  aria-hidden="true"
                />
                <p className="text-[15px] font-medium text-ink">{label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

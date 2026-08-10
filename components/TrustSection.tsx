import { UserCheck, Zap, Lock, Award, Umbrella } from "lucide-react";

const TRUST_ITEMS = [
  { icon: UserCheck, label: "Asesoría personalizada" },
  { icon: Zap, label: "Atención rápida" },
  { icon: Lock, label: "Confianza" },
  { icon: Award, label: "Experiencia" },
  { icon: Umbrella, label: "Protección integral" },
];

export function TrustSection() {
  return (
    <section className="bg-surface">
      <div className="mx-auto max-w-[1200px] px-6 py-16 sm:py-24">
        <h2 className="text-center font-display text-[clamp(1.5rem,2.5vw+1rem,2.25rem)] font-medium text-ink">
          ¿Por qué elegirnos?
        </h2>

        <div className="mt-14 grid grid-cols-2 gap-y-10 sm:grid-cols-5 sm:divide-x sm:divide-border">
          {TRUST_ITEMS.map((item) => (
            <div
              key={item.label}
              className="flex flex-col items-center gap-3 px-4 text-center"
            >
              <item.icon
                className="h-6 w-6 text-primary"
                strokeWidth={1.75}
                aria-hidden="true"
              />
              <p className="text-[15px] font-medium text-ink">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";

const TOWNS = [
  "Bayahíbe",
  "Dominicus",
  "San Rafael del Yuma",
  "Boca de Yuma",
  "Boca de Chavón",
  "Benerito",
  "Padre Nuestro",
];

export function Coverage() {
  return (
    <section className="relative overflow-hidden bg-bg py-16 sm:py-24">
      <div className="absolute inset-0 opacity-[0.06]">
        <Image
          src="/images/coverage-bayahibe.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <div className="relative mx-auto max-w-[1200px] px-6 text-center">
        <h2 className="font-display text-[clamp(1.5rem,2.5vw+1rem,2.25rem)] font-medium text-ink">
          Cobertura regional
        </h2>
        <p className="mx-auto mt-3 max-w-[50ch] text-[17px] text-muted">
          Prestamos servicios de seguros en las principales comunidades de la
          región este.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {TOWNS.map((town) => (
            <span
              key={town}
              className="rounded-full border border-border bg-bg px-5 py-2.5 text-[15px] font-medium text-ink"
            >
              {town}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

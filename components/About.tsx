import Image from "next/image";

const EDUCATION = [
  {
    degree: "Licenciatura en Administración de Empresas",
    detail: "Cum Laude",
    year: "2017",
  },
  {
    degree: "Maestría en Dirección Comercial",
    detail: "Universidad APEC (UNAPEC)",
    year: "2022",
  },
  {
    degree: "Máster en Uso Educativo de las TIC",
    detail: "Educación 2.0 · Universidad de Sevilla",
    year: "2021",
  },
];

export function About() {
  return (
    <section id="nosotros" className="bg-bg">
      <div className="mx-auto max-w-[1200px] px-6 py-16 sm:py-24">
        <h2 className="font-display text-[clamp(1.5rem,2.5vw+1rem,2.25rem)] font-medium text-ink">
          Quiénes somos
        </h2>

        <div className="mt-12 grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-[360px] overflow-hidden rounded-2xl border border-border lg:mx-0">
            <Image
              src="/images/team/esther-castro.jpg"
              alt="Esther Castro Morla, CEO de Inversiones Castro & M SRL"
              fill
              sizes="(min-width: 1024px) 360px, 80vw"
              className="object-cover"
            />
          </div>

          <div>
            <p className="text-[19px] font-semibold text-ink">
              Esther Castro Morla
            </p>
            <p className="mt-1 text-[14px] font-medium text-muted">
              CEO, Inversiones Castro &amp; M SRL
            </p>

            <div className="mt-5 max-w-[55ch] space-y-4 text-[16px] leading-relaxed text-ink">
              <p>
                Esther Castro Morla es CEO de Inversiones Castro &amp; M SRL
                y oriunda de Bayahíbe, comunidad donde también reside. Su
                liderazgo está respaldado por una formación sólida en
                administración de empresas, dirección comercial y
                tecnologías de la información y comunicación.
              </p>
              <p className="text-muted">
                Es Licenciada en Administración de Empresas, Cum Laude, y
                amplió su preparación con una Maestría en Dirección
                Comercial en la Universidad APEC (UNAPEC). En España obtuvo
                el Máster en Uso Educativo de las Tecnologías de la
                Información y Comunicación (TIC), Educación 2.0, título
                propio de la Universidad de Sevilla, con 65 créditos ECTS.
              </p>
              <p className="text-muted">
                Esta formación constituye la base de su visión de dirección
                y gestión al frente de Inversiones Castro &amp; M SRL,
                empresa dedicada a ofrecer soluciones de seguros y asesoría
                para personas, familias y empresas.
              </p>
            </div>

            <div className="mt-8 border-t border-border pt-6">
              <p className="text-[13px] font-semibold uppercase tracking-[0.02em] text-muted">
                Formación académica
              </p>
              <div className="mt-4 space-y-3">
                {EDUCATION.map((item) => (
                  <div
                    key={item.degree}
                    className="flex items-baseline justify-between gap-4 rounded-lg border border-border px-4 py-3"
                  >
                    <div>
                      <p className="text-[15px] font-semibold text-ink">
                        {item.degree}
                      </p>
                      <p className="mt-0.5 text-[13px] text-muted">
                        {item.detail}
                      </p>
                    </div>
                    <span className="shrink-0 text-[13px] font-medium text-muted">
                      {item.year}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 grid items-center gap-6 rounded-2xl border border-border p-6 sm:grid-cols-[280px_1fr] sm:p-8">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
            <Image
              src="/images/team/familia.jpg"
              alt=""
              fill
              sizes="(min-width: 640px) 280px, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <h3 className="font-display text-[19px] font-medium text-ink">
              Lo que nos inspira a proteger
            </h3>
            <p className="mt-3 max-w-[55ch] text-[15px] leading-relaxed text-muted">
              Detrás de cada póliza hay una familia, un negocio o un
              proyecto de vida. Esa es la razón de ser de Inversiones
              Castro &amp; M SRL.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

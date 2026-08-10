import Image from "next/image";

const EDUCATION = [
  "Licenciatura en Administración — UFHEC (promoción 2021)",
  "Estudios — Universidad APEC",
  "Estudios — Universidad de Sevilla, España",
  "Educación secundaria — Colegio Sagrado Corazón de Jesús",
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
              alt="Esther Castro, CEO de Inversiones Castro & M SRL"
              fill
              sizes="(min-width: 1024px) 360px, 80vw"
              className="object-cover"
            />
          </div>

          <div>
            <p className="text-[19px] font-semibold text-ink">
              Esther Castro
            </p>
            <p className="mt-1 text-[14px] font-medium text-muted">
              CEO, Inversiones Castro &amp; M SRL
            </p>
            <p className="mt-5 max-w-[55ch] text-[17px] leading-relaxed text-ink">
              Licenciada en Administración y oriunda de Bayahíbe, dirige
              Inversiones Castro &amp; M SRL con una formación construida
              entre República Dominicana y España.
            </p>

            <div className="mt-6 max-w-[55ch] space-y-4 text-[15px] leading-relaxed text-muted">
              <p>
                Es oriunda de Bayahíbe, comunidad donde también reside, lo
                que fortalece su vínculo con la región y con las personas y
                empresas a las que sirve.
              </p>
              <p>
                Su formación y perspectiva administrativa constituyen la
                base profesional desde la que lidera Inversiones Castro &amp;
                M SRL, empresa enfocada en ofrecer soluciones de seguros y
                asesoría para personas, familias y empresas.
              </p>
            </div>

            <div className="mt-8 border-t border-border pt-6">
              <p className="text-[13px] font-semibold uppercase tracking-[0.02em] text-muted">
                Formación académica
              </p>
              <ul className="mt-3 space-y-2">
                {EDUCATION.map((item) => (
                  <li key={item} className="text-[15px] text-ink">
                    {item}
                  </li>
                ))}
              </ul>
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

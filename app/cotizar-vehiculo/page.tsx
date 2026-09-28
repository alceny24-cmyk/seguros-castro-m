import { VehiculoFunnel } from "@/components/VehiculoFunnel";
import { MetaPixel } from "@/components/MetaPixel";
import { ClarityScript } from "@/components/ClarityScript";
import { GTMScript } from "@/components/GTMScript";
import { GA4Script } from "@/components/GA4Script";

export const metadata = {
  title: "Seguro de Vehículos — Cotiza tu opción | Inversiones Castro & M",
  description:
    "Descubre qué opciones de seguro están disponibles para tu vehículo (2011–2020). Consulta sin compromiso con Inversiones Castro & M. Respuesta personalizada por WhatsApp.",
  robots: "noindex, nofollow",
  openGraph: {
    title: "¿Tu vehículo es 2011–2020? Todavía puede estar asegurado.",
    description:
      "Consulta sin compromiso qué opciones de seguro están disponibles para tu auto. Respuesta personalizada por WhatsApp.",
    images: [
      {
        url: "/images/vehiculo-og.png",
        width: 1080,
        height: 1350,
        alt: "Seguro de vehículos 2011–2020 — Inversiones Castro & M",
      },
    ],
    type: "website",
  },
};

export default function CotizarVehiculoPage() {
  return (
    <>
      <MetaPixel />
      <ClarityScript />
      <GTMScript />
      <GA4Script />
      <noscript>
        <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KN2VZ373" height="0" width="0" style={{ display: "none", visibility: "hidden" }} />
      </noscript>
      <div
        className="min-h-dvh"
        style={{
          background: "linear-gradient(170deg, #081729 0%, #0c2348 55%, #081729 100%)",
        }}
      >
        <main>
          <VehiculoFunnel />
        </main>

        <footer className="px-5 pb-6 text-center text-[10px] text-white/20">
          © {new Date().getFullYear()} Inversiones Castro &amp; M SRL · República Dominicana
        </footer>
      </div>
    </>
  );
}

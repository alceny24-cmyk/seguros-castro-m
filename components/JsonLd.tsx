import { SITE_URL } from "@/lib/site";
import { PHONE_E164, CONTACT_EMAIL } from "@/lib/contact";

// Solo datos reales confirmados: nombre, teléfono, correo y las zonas de
// cobertura que ya existen en el contenido. Sin dirección, calificaciones,
// años de fundación ni certificaciones inventadas.
const AREA_SERVED = [
  "Bayahíbe",
  "Dominicus",
  "San Rafael del Yuma",
  "Boca de Yuma",
  "Boca de Chavón",
  "Benerito",
  "Padre Nuestro",
];

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "InsuranceAgency",
    name: "Inversiones Castro & M SRL",
    url: SITE_URL,
    telephone: PHONE_E164,
    email: CONTACT_EMAIL,
    areaServed: AREA_SERVED.map((name) => ({
      "@type": "Place",
      name,
    })),
    address: {
      "@type": "PostalAddress",
      addressRegion: "La Altagracia",
      addressCountry: "DO",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

# Product

## Register

brand

## Users

Residentes y propietarios de negocios turísticos en Bayahíbe, Dominicus y comunidades cercanas de la región este de República Dominicana, buscando seguros de salud, vida, vehículo, hogar, viaje o empresariales. Llegan al sitio para entender rápido qué cubre la correduría y contactar por WhatsApp o teléfono — no completan formularios largos ni comparan pólizas en la web.

## Product Purpose

Landing de una sola página para Inversiones Castro & M SRL, correduría de seguros. El sitio existía como export de Canva con dependencias que no sobreviven fuera de esa plataforma (SDKs internos, Tailwind/Lucide por CDN). Este rediseño lo reconstruye en Next.js manteniendo el contenido comercial real, con una dirección visual editorial-corporativa en vez del look de plantilla genérica del original. Éxito = un visitante entiende la oferta en segundos y escribe por WhatsApp.

## Brand Personality

Seria, moderna, confiable, premium — una correduría establecida, no una startup ni una plantilla de marketing digital. El azul comunica confianza pero se usa con moderación, no como fondo dominante. Mucho aire, jerarquía tipográfica clara, nada sobrecargado.

## Anti-references

Landing genérica de IA: hero de imagen a pantalla completa con overlay oscuro y texto centrado, grid de tarjetas idénticas con ícono en círculo de color, sombras exageradas combinadas con borde, radios muy grandes, eyebrows en mayúscula sobre cada sección. Nada de eso.

## Design Principles

- Editorial antes que "SaaS": jerarquía tipográfica y espacio en blanco cargan el diseño, no cajas de color.
- El azul es el color de confianza, no el color de fondo — se reserva para CTA y acentos puntuales.
- No inventar información comercial: sin testimonios, estadísticas, certificaciones, años de experiencia, aseguradoras aliadas ni premios que no estén ya en el contenido original.
- Mismo botón, mismo mensaje: el CTA de WhatsApp se ve y se comporta igual en todo el sitio.
- Móvil primero en la práctica: la mayoría de esta audiencia llega desde el teléfono.

## Accessibility & Inclusion

Acordeón de FAQ con `aria-expanded`/`aria-controls`, menú móvil con estado anunciado, contraste AA en todo el texto, `prefers-reduced-motion` respetado en las transiciones de hover.

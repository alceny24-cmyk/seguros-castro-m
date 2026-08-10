// Dato real confirmado por el cliente. El correo se mantiene del sitio original
// hasta que se confirme si es real o debe reemplazarse.
export const WHATSAPP_NUMBER = "18296656648";
export const PHONE_DISPLAY = "(829) 665-6648";
export const PHONE_E164 = "+18296656648";
export const CONTACT_EMAIL = "info@castromsrl.com";

export const DEFAULT_WHATSAPP_MESSAGE =
  "Hola. Me gustaría recibir información sobre sus seguros.";

export function buildWhatsappLink(message: string = DEFAULT_WHATSAPP_MESSAGE) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

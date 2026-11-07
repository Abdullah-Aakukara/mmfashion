import { siteConfig } from "@/config/site";

/**
 * Builds a WhatsApp chat link with properly encoded message.
 * Single helper used across all cards, detail pages, floating buttons, and empty states.
 */
export function getWhatsAppLink(params?: {
  fabricName?: string;
  fabricId?: string;
  moq?: string;
  customMessage?: string;
}): string {
  const number = (
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ||
    siteConfig.contact.whatsappNumber ||
    "919800000000"
  ).replace(/[^0-9]/g, "");

  let message = "";

  if (params?.customMessage) {
    message = params.customMessage;
  } else if (params?.fabricName && params?.fabricId) {
    const moqText = params.moq ? ` (MOQ: ${params.moq})` : "";
    message = `Hi, I am interested in ${params.fabricName} (${params.fabricId})${moqText}. Please share current wholesale rate and availability.`;
  } else {
    message = `Hello ${siteConfig.name}, I am looking for raw cloth (than) lots. Please share your latest catalog and stock list.`;
  }

  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}


import { RiWhatsappFill } from "react-icons/ri";

import { WHATSAPP_NUMBER } from "@/data/fuxion-products";

const message = "Hola Andrés, tengo una pregunta sobre los productos FuXion.";

// Without a number, wa.me opens WhatsApp with the message ready and lets the
// visitor choose the chat (see WHATSAPP_NUMBER in the product data file).
const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

const WhatsAppButton = () => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="¿Tienes preguntas? Escríbenos por WhatsApp"
    className="fixed bottom-4 left-4 z-30 sm:left-auto inline-flex h-14 w-14 items-center justify-center gap-2 rounded-full bg-[#0E7A3D] font-semibold text-white shadow-lg shadow-harbor/20 transition-colors hover:bg-[#0B6431] sm:bottom-6 sm:right-6 sm:h-auto sm:w-auto sm:px-5 sm:py-3"
  >
    <RiWhatsappFill size={26} aria-hidden="true" />
    <span className="hidden sm:inline">¿Tienes preguntas?</span>
  </a>
);

export default WhatsAppButton;

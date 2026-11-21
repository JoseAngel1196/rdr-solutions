import { RiWhatsappFill } from "react-icons/ri";

import { WHATSAPP_NUMBER } from "@/data/fuxion-products";
import { copy } from "./locale";

// Hidden until WHATSAPP_NUMBER is filled in the product data file. The
// .whatsapp-fab class also hides it while the product drawer is open.
const WhatsAppButton = ({ locale = "es" }) => {
  if (!WHATSAPP_NUMBER) return null;
  const t = copy[locale];

  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(t.whatsappMessage)}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t.whatsappLabel}
      className="whatsapp-fab fixed bottom-4 right-4 z-30 inline-flex h-14 w-14 items-center justify-center gap-2 rounded-full bg-[#0E7A3D] font-semibold text-white shadow-lg shadow-harbor/20 transition-colors hover:bg-[#0B6431] sm:h-auto sm:w-auto sm:px-5 sm:py-3"
    >
      <RiWhatsappFill size={26} aria-hidden="true" />
      <span className="hidden sm:inline">{t.whatsappText}</span>
    </a>
  );
};

export default WhatsAppButton;

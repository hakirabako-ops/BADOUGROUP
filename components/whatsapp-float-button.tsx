import { siteConfig } from "@/lib/site-config";
import { WhatsAppIcon } from "./icons";

export function WhatsAppFloatButton() {
  return (
    <a
      href={siteConfig.whatsapp.href(siteConfig.defaultWhatsappMessage)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contacter BADOU GROUP sur WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-lg shadow-black/20 transition-transform hover:scale-105 cursor-pointer sm:bottom-7 sm:right-7"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
}

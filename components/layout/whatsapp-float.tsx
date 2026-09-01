import { MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/?text=Olá%20Parque%20Net!%20Preciso%20de%20ajuda.";

export function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Falar com a Parque Net pelo WhatsApp"
    >
      <MessageCircle size={23} />
      <span>Precisa de ajuda?</span>
    </a>
  );
}

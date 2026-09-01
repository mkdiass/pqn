"use client";

import { MessageCircle } from "lucide-react";

const whatsappUrl =
  "https://wa.me/5511973587469?text=Ol%C3%A1%2C%20preciso%20de%20ajuda%20com%20a%20Parque%20Net.";

export function WhatsAppFloat() {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Falar com a Parque Net pelo WhatsApp"
    >
      <MessageCircle size={20} />
      <span>Fale conosco</span>
    </a>
  );
}

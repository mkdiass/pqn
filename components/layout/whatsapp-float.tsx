"use client";

import { MessageCircle } from "lucide-react";
import { usePathname } from "next/navigation";

export function WhatsAppFloat() {
  const pathname = usePathname();
  if (pathname === "/cliente") return null;

  return (
    <a
      href="https://wa.me/5511973587469?text=Ol%C3%A1%2C%20quero%20falar%20com%20a%20Parque%20Net."
      target="_blank"
      rel="noopener noreferrer"
      className="pn-whatsapp-float"
      aria-label="Falar com a Parque Net no WhatsApp"
    >
      <MessageCircle size={23} />
      <span>Fale conosco</span>
    </a>
  );
}

import type { Metadata } from "next";
import "./globals.css";
import "./site.css";
import "./marketing.css";
import "./marketing-fixes.css";
import "./immersive.css";
import { Footer } from "@/components/layout/footer";
import { WhatsAppFloat } from "@/components/layout/whatsapp-float";

export const metadata: Metadata = {
  title: { default: "Parque Net Telecom", template: "%s | Parque Net Telecom" },
  description: "Internet 100% fibra óptica para trabalhar, jogar, assistir e viver conectado.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" data-scroll-behavior="smooth">
      <body>{children}<WhatsAppFloat /><Footer /></body>
    </html>
  );
}

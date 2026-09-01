import type { Metadata } from "next";
import "./globals.css";
import "./network.css";
import "./client.css";

import { WhatsAppFloat } from "@/components/layout/whatsapp-float";

export const metadata: Metadata = {
  title: "Parque Net Telecom",
  description:
    "Internet 100% fibra óptica para trabalhar, jogar, assistir e viver conectado.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
        <WhatsAppFloat />
      </body>
    </html>
  );
}

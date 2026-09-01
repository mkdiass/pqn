import type { Metadata } from "next";
import "./globals.css";
import "./product.css";
import "./interaction.css";
import "./hero-enhancements.css";
import "./premium-pages.css";

export const metadata: Metadata = {
  title: {
    default: "Parque Net Telecom | Internet Fibra Óptica",
    template: "%s | Parque Net Telecom",
  },
  description: "Internet 100% fibra óptica para trabalhar, jogar, assistir e viver conectado.",
  keywords: ["Parque Net", "internet fibra óptica", "internet São Paulo", "banda larga"],
  openGraph: {
    title: "Parque Net Telecom | Internet Fibra Óptica",
    description: "Conexão rápida, estável e feita para acompanhar a sua rotina.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}

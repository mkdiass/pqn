import type { Metadata } from "next";
import "./globals.css";
import "./product.css";
import "./interaction.css";
import "./hero-enhancements.css";
import "./premium-pages.css";
import "./plans-page.css";
import "./coverage-checker.css";
import "./system.css";
import "./project.css";
import "./auth.css";

export const metadata: Metadata = {
  title: { default: "Parque Net Telecom | Internet Fibra Óptica", template: "%s | Parque Net Telecom" },
  description: "Internet fibra óptica rápida, estável e feita para acompanhar sua rotina.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  openGraph: { title: "Parque Net Telecom", description: "Conexão feita para durar.", type: "website", locale: "pt_BR" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}

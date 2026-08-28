import type { Metadata } from "next";
import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}
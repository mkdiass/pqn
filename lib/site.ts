export const siteConfig = {
  name: "Parque Net Telecom",
  shortName: "Parque Net",
  description:
    "Internet fibra óptica para casa e empresa, com estabilidade, velocidade e atendimento próximo.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP ?? "",
  navigation: [
    { label: "Início", href: "/" },
    { label: "Planos", href: "/planos" },
    { label: "Cobertura", href: "/cobertura" },
    { label: "Empresas", href: "/empresas" },
    { label: "Entretenimento", href: "/entretenimento" },
  ],
} as const;

export type SiteNavItem = (typeof siteConfig.navigation)[number];

import type { Plan } from "@/types/domain";

export const plans: Plan[] = [
  {
    id: "pqn-400",
    name: "Essencial",
    speedMbps: 400,
    price: 59.99,
    description: "Ideal para quem busca velocidade e economia.",
    benefits: ["Fibra óptica", "Wi-Fi incluso", "Instalação especializada"],
  },
  {
    id: "pqn-500",
    name: "Conecta",
    speedMbps: 500,
    price: 69.99,
    description: "Mais velocidade para acompanhar sua rotina.",
    benefits: ["Fibra óptica", "Wi-Fi incluso", "Suporte especializado"],
  },
  {
    id: "pqn-700",
    name: "Família",
    speedMbps: 700,
    price: 89.99,
    featured: true,
    description: "Mais estabilidade para toda a família.",
    benefits: ["Fibra óptica", "Wi-Fi incluso", "Atendimento prioritário"],
  },
  {
    id: "pqn-900",
    name: "Ultra",
    speedMbps: 900,
    price: 119.99,
    description: "Máxima performance para tudo que você faz.",
    benefits: ["Fibra óptica", "Wi-Fi incluso", "Suporte especializado"],
  },
  {
    id: "pqn-1000",
    name: "Gigabit",
    speedMbps: 1000,
    price: 139.99,
    description: "Potência máxima para quem exige o melhor.",
    benefits: ["Fibra óptica", "Wi-Fi incluso", "Atendimento prioritário"],
  },
];

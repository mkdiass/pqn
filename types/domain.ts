export type Plan = {
  id: string;
  name: string;
  speedMbps: number;
  price: number;
  featured?: boolean;
  description: string;
  benefits: string[];
};

export type CoverageStatus = "idle" | "loading" | "available" | "unavailable" | "error";

export type Address = {
  cep: string;
  street: string;
  number: string;
  neighborhood: string;
  city: string;
  state: string;
  complement?: string;
};

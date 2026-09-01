export type ClientInvoice = {
  id: string;
  reference: string;
  dueDate: string;
  amount: number;
  status: "Pago" | "Aberta";
};

export const clientContract = {
  number: "PN-2026-0001",
  startedAt: "10/01/2026",
  renewalAt: "10/01/2027",
  plan: "Fibra 700 Mega",
  monthlyAmount: 89.99,
  installationAddress: "Endereço cadastrado na base do cliente",
  billingDay: 10,
  loyalty: "12 meses",
  status: "Ativo",
};

export const clientInvoices: ClientInvoice[] = [
  { id: "2026-08", reference: "Agosto/2026", dueDate: "10/08/2026", amount: 89.99, status: "Pago" },
  { id: "2026-09", reference: "Setembro/2026", dueDate: "10/09/2026", amount: 89.99, status: "Aberta" },
  { id: "2026-07", reference: "Julho/2026", dueDate: "10/07/2026", amount: 89.99, status: "Pago" },
];

export const clientBenefits = [
  "Internet fibra óptica de 700 Mbps",
  "Wi-Fi incluso conforme condições comerciais",
  "Atendimento e suporte especializado",
  "Acesso à Central do Cliente",
];

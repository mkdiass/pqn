import { NextResponse } from "next/server";
import { getClientSession } from "@/lib/auth";
import { clientInvoices } from "@/data/client-portal";

export async function GET(_request: Request, context: { params: Promise<{ id: string }> }) {
  const session = await getClientSession();
  if (!session) return NextResponse.json({ message: "Não autorizado." }, { status: 401 });

  const { id } = await context.params;
  const invoice = clientInvoices.find((item) => item.id === id);
  if (!invoice) return NextResponse.json({ message: "Fatura não encontrada." }, { status: 404 });

  const html = `<!doctype html><html lang="pt-BR"><head><meta charset="utf-8"><title>Parque Net - ${invoice.reference}</title><style>body{font-family:Arial,sans-serif;max-width:720px;margin:60px auto;padding:32px;color:#071426}h1{margin-bottom:8px}small{color:#667085}.box{margin-top:28px;border:1px solid #ddd;border-radius:12px;padding:24px}.row{display:flex;justify-content:space-between;padding:12px 0;border-bottom:1px solid #eee}.row:last-child{border:0}</style></head><body><h1>Parque Net Telecom</h1><small>Comprovante de cobrança · ${invoice.reference}</small><div class="box"><div class="row"><span>Cliente</span><strong>${session.name}</strong></div><div class="row"><span>Contrato</span><strong>PN-2026-0001</strong></div><div class="row"><span>Vencimento</span><strong>${invoice.dueDate}</strong></div><div class="row"><span>Valor</span><strong>R$ ${invoice.amount.toFixed(2).replace(".", ",")}</strong></div><div class="row"><span>Situação</span><strong>${invoice.status}</strong></div></div><p><small>Documento demonstrativo. Em produção, este documento será substituído pelo documento financeiro oficial emitido pelo sistema integrado.</small></p></body></html>`;

  return new NextResponse(html, {
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Content-Disposition": `attachment; filename="parque-net-${invoice.id}.html"`,
      "Cache-Control": "private, no-store",
    },
  });
}

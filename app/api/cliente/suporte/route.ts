import { randomUUID } from "node:crypto";
import { NextResponse } from "next/server";
import { getClientSession } from "@/lib/auth";

const allowedTopics = new Set([
  "Internet lenta ou instável",
  "Sem conexão",
  "Fatura ou pagamento",
  "Alteração de cadastro",
  "Outro assunto",
]);

const noStore = { "Cache-Control": "no-store" };

export async function POST(request: Request) {
  const session = await getClientSession();
  if (!session) return NextResponse.json({ message: "Não autorizado." }, { status: 401, headers: noStore });

  const contentLength = Number(request.headers.get("content-length") ?? "0");
  if (contentLength > 32_768) {
    return NextResponse.json({ message: "Solicitação muito grande." }, { status: 413, headers: noStore });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ message: "Dados inválidos." }, { status: 400, headers: noStore });
  }

  if (!body || typeof body !== "object") {
    return NextResponse.json({ message: "Dados inválidos." }, { status: 400, headers: noStore });
  }

  const topic = "topic" in body && typeof body.topic === "string" ? body.topic.trim() : "";
  const message = "message" in body && typeof body.message === "string" ? body.message.trim() : "";

  if (!allowedTopics.has(topic)) return NextResponse.json({ message: "Selecione um assunto válido." }, { status: 400, headers: noStore });
  if (message.length < 10 || message.length > 1000) {
    return NextResponse.json({ message: "A mensagem deve ter entre 10 e 1000 caracteres." }, { status: 400, headers: noStore });
  }

  const protocol = `PN-${new Date().getFullYear()}-${randomUUID().slice(0, 8).toUpperCase()}`;

  // Demo boundary: production should persist the full request in the ERP/IXC.
  // Do not log the customer's message here; support content can contain personal data.
  console.info("[client-support-demo]", {
    protocol,
    clientId: session.id,
    topic,
  });

  return NextResponse.json(
    { protocol, message: "Solicitação recebida.", demo: true },
    { headers: noStore },
  );
}

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

export async function POST(request: Request) {
  const session = await getClientSession();
  if (!session) return NextResponse.json({ message: "Não autorizado." }, { status: 401 });

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ message: "Dados inválidos." }, { status: 400 });
  }

  if (!body || typeof body !== "object") {
    return NextResponse.json({ message: "Dados inválidos." }, { status: 400 });
  }

  const topic = "topic" in body && typeof body.topic === "string" ? body.topic.trim() : "";
  const message = "message" in body && typeof body.message === "string" ? body.message.trim() : "";

  if (!allowedTopics.has(topic)) return NextResponse.json({ message: "Selecione um assunto válido." }, { status: 400 });
  if (message.length < 10 || message.length > 1000) {
    return NextResponse.json({ message: "A mensagem deve ter entre 10 e 1000 caracteres." }, { status: 400 });
  }

  const protocol = `PN-${new Date().getFullYear()}-${randomUUID().slice(0, 8).toUpperCase()}`;

  console.info("[client-support-demo]", {
    protocol,
    clientId: session.id,
    topic,
    message,
  });

  return NextResponse.json({
    protocol,
    message: "Solicitação recebida.",
    demo: true,
  });
}

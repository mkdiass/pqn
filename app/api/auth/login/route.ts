import { NextResponse } from "next/server";
import { authenticateDemoClient, createClientSession } from "@/lib/auth";

export async function POST(request: Request) {
  try {
    const contentLength = Number(request.headers.get("content-length") ?? "0");
    if (contentLength > 16_384) {
      return NextResponse.json({ message: "Requisição inválida." }, { status: 413, headers: { "Cache-Control": "no-store" } });
    }

    const body: unknown = await request.json();
    if (!body || typeof body !== "object") {
      return NextResponse.json({ message: "Dados de login inválidos." }, { status: 400, headers: { "Cache-Control": "no-store" } });
    }

    const email = "email" in body && typeof body.email === "string" ? body.email.trim() : "";
    const password = "password" in body && typeof body.password === "string" ? body.password : "";

    if (!email || !password) {
      return NextResponse.json({ message: "Informe e-mail e senha." }, { status: 400, headers: { "Cache-Control": "no-store" } });
    }

    if (email.length > 254 || password.length > 256) {
      return NextResponse.json({ message: "E-mail ou senha inválidos." }, { status: 400, headers: { "Cache-Control": "no-store" } });
    }

    const client = authenticateDemoClient(email, password);
    if (!client) {
      return NextResponse.json({ message: "E-mail ou senha incorretos." }, { status: 401, headers: { "Cache-Control": "no-store" } });
    }

    await createClientSession(client);
    return NextResponse.json(
      { ok: true, user: { name: client.name, email: client.email, plan: client.plan } },
      { headers: { "Cache-Control": "no-store" } },
    );
  } catch {
    return NextResponse.json({ message: "Não foi possível concluir o login." }, { status: 500, headers: { "Cache-Control": "no-store" } });
  }
}

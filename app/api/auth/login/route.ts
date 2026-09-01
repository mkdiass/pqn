import { NextResponse } from "next/server";
import { authenticateDemoClient, createClientSession } from "@/lib/auth";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const email = typeof body.email === "string" ? body.email : "";
    const password = typeof body.password === "string" ? body.password : "";
    if (!email || !password) return NextResponse.json({ message: "Informe e-mail e senha." }, { status: 400 });
    const client = authenticateDemoClient(email, password);
    if (!client) return NextResponse.json({ message: "E-mail ou senha incorretos." }, { status: 401 });
    await createClientSession(client);
    return NextResponse.json({ ok: true, user: { name: client.name, email: client.email, plan: client.plan } });
  } catch {
    return NextResponse.json({ message: "Não foi possível concluir o login." }, { status: 500 });
  }
}

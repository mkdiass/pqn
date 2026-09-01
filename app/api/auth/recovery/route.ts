import { NextResponse } from "next/server";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  try {
    const contentLength = Number(request.headers.get("content-length") ?? "0");
    if (contentLength > 4096) {
      return NextResponse.json({ message: "Requisição inválida." }, { status: 413, headers: { "Cache-Control": "no-store" } });
    }

    const body: unknown = await request.json();
    const email = body && typeof body === "object" && "email" in body && typeof body.email === "string"
      ? body.email.trim().toLowerCase()
      : "";

    if (!email || email.length > 254 || !EMAIL_PATTERN.test(email)) {
      return NextResponse.json({ message: "Informe um e-mail válido." }, { status: 400, headers: { "Cache-Control": "no-store" } });
    }

    // Demo boundary: production should enqueue a real recovery email and never
    // reveal whether an account exists. Keep the response intentionally generic.
    return NextResponse.json(
      { ok: true, message: "Se o e-mail estiver cadastrado, você receberá as instruções de recuperação." },
      { headers: { "Cache-Control": "no-store" } },
    );
  } catch {
    return NextResponse.json({ message: "Não foi possível processar a recuperação agora." }, { status: 500, headers: { "Cache-Control": "no-store" } });
  }
}

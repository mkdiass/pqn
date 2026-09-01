import { NextRequest, NextResponse } from "next/server";
import { getAddressByCep } from "@/lib/cep";
import { checkCoverage } from "@/lib/coverage";

export async function GET(request: NextRequest) {
  const cep = request.nextUrl.searchParams.get("cep") ?? "";
  const address = await getAddressByCep(cep);

  if (!address) {
    return NextResponse.json({ ok: false, error: "CEP não encontrado ou inválido." }, { status: 400 });
  }

  const available = checkCoverage({
    street: address.street,
    neighborhood: address.neighborhood,
    city: address.city,
    state: address.state,
  });

  return NextResponse.json({
    ok: true,
    available,
    address,
    message: available ? "Temos cobertura neste endereço." : "Ainda não temos cobertura neste endereço.",
  }, { headers: { "Cache-Control": "private, max-age=60" } });
}

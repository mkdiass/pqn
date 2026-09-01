import { NextRequest, NextResponse } from "next/server";
import { getAddressByCep } from "@/lib/cep";
import { getCoverageDetails } from "@/lib/coverage";

export async function GET(request: NextRequest) {
  const cep = request.nextUrl.searchParams.get("cep") ?? "";
  const number = request.nextUrl.searchParams.get("numero")?.trim() ?? "";
  const address = await getAddressByCep(cep);

  if (!address) {
    return NextResponse.json({ ok: false, error: "CEP não encontrado ou inválido." }, { status: 400 });
  }

  const coverage = getCoverageDetails(address);

  return NextResponse.json({
    ok: true,
    available: coverage.available,
    match: coverage.match,
    address,
    number: number || null,
    message: coverage.available
      ? coverage.match === "street"
        ? "A rua está cadastrada na nossa área de atendimento."
        : "O bairro está cadastrado na nossa área de atendimento."
      : "Ainda não temos uma área cadastrada para este endereço.",
    notice: "A consulta atual é baseada no cadastro de cobertura por rua e bairro. A viabilidade final da instalação pode exigir análise técnica.",
  }, { headers: { "Cache-Control": "private, max-age=60" } });
}

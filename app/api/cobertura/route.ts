import { NextResponse } from "next/server";
import { checkCoverage } from "@/lib/coverage";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { street, neighborhood, city, state } = body ?? {};

    if (![street, neighborhood, city, state].every((value) => typeof value === "string" && value.trim())) {
      return NextResponse.json({ available: false, error: "Endereço incompleto." }, { status: 400 });
    }

    const available = checkCoverage({ street, neighborhood, city, state });
    return NextResponse.json({ available });
  } catch {
    return NextResponse.json({ available: false, error: "Não foi possível consultar a cobertura." }, { status: 400 });
  }
}

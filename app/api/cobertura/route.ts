import { NextResponse } from "next/server";

import { checkCoverage } from "@/lib/coverage";

type CoverageRequest = {
  street?: unknown;
  neighborhood?: unknown;
  city?: unknown;
  state?: unknown;
  number?: unknown;
};

function isString(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as CoverageRequest;

    if (
      !isString(body.street) ||
      !isString(body.neighborhood) ||
      !isString(body.city) ||
      !isString(body.state) ||
      !isString(body.number)
    ) {
      return NextResponse.json(
        { error: "Informe o endereço completo." },
        { status: 400 }
      );
    }

    const hasCoverage = checkCoverage({
      street: body.street,
      neighborhood: body.neighborhood,
      city: body.city,
      state: body.state,
      number: body.number,
    });

    return NextResponse.json({ hasCoverage });
  } catch {
    return NextResponse.json(
      { error: "Não foi possível consultar a cobertura." },
      { status: 500 }
    );
  }
}

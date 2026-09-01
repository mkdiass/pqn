import { NextResponse } from "next/server";
import { clearClientSession } from "@/lib/auth";

export async function POST(request: Request) {
  await clearClientSession();
  return NextResponse.redirect(new URL("/cliente", request.url));
}

import { NextResponse } from "next/server";
import { clearClientSession } from "@/lib/auth";

export async function POST() {
  await clearClientSession();
  return NextResponse.redirect(new URL("/cliente", process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"));
}

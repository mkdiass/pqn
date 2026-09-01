import { createHmac, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";

const SESSION_COOKIE = "pqn_session";
const SESSION_MAX_AGE = 60 * 60 * 8;
const DEV_SECRET = "pqn-local-demo-secret-change-me";

export type ClientSession = { id: string; name: string; email: string; plan: string; status: "Ativo" };

const DEMO_CLIENT: ClientSession = { id: "client-demo-001", name: "Cliente Parque Net", email: "cliente@parquenet.com.br", plan: "Fibra 700 Mega", status: "Ativo" };

function getSecret() { return process.env.AUTH_SECRET || DEV_SECRET; }
function sign(value: string) { return createHmac("sha256", getSecret()).update(value).digest("base64url"); }
function encode(payload: object) { const value = Buffer.from(JSON.stringify(payload)).toString("base64url"); return `${value}.${sign(value)}`; }
function decode(value: string) {
  const [payload, signature] = value.split(".");
  if (!payload || !signature) return null;
  const expected = sign(payload);
  const a = Buffer.from(signature); const b = Buffer.from(expected);
  if (a.length !== b.length || !timingSafeEqual(a, b)) return null;
  try { return JSON.parse(Buffer.from(payload, "base64url").toString("utf8")) as { userId: string; exp: number }; } catch { return null; }
}

export function getDemoCredentials() {
  return { email: process.env.DEMO_CLIENT_EMAIL || "cliente@parquenet.com.br", password: process.env.DEMO_CLIENT_PASSWORD || "ParqueNet@2026" };
}

export function authenticateDemoClient(email: string, password: string) {
  const credentials = getDemoCredentials();
  if (email.trim().toLowerCase() !== credentials.email.toLowerCase() || password !== credentials.password) return null;
  return DEMO_CLIENT;
}

export async function createClientSession(session: ClientSession) {
  const value = encode({ userId: session.id, exp: Math.floor(Date.now() / 1000) + SESSION_MAX_AGE });
  const cookieStore = await cookies();
  cookieStore.set(SESSION_COOKIE, value, { httpOnly: true, secure: process.env.NODE_ENV === "production", sameSite: "lax", maxAge: SESSION_MAX_AGE, path: "/" });
}

export async function getClientSession(): Promise<ClientSession | null> {
  const value = (await cookies()).get(SESSION_COOKIE)?.value;
  if (!value) return null;
  const payload = decode(value);
  if (!payload || payload.exp < Math.floor(Date.now() / 1000)) return null;
  return payload.userId === DEMO_CLIENT.id ? DEMO_CLIENT : null;
}

export async function clearClientSession() { (await cookies()).delete(SESSION_COOKIE); }

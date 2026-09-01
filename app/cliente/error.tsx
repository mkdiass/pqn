"use client";

import { AlertTriangle, RefreshCw } from "lucide-react";

export default function ClientError({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <main style={{ minHeight: "100vh", display: "grid", placeItems: "center", padding: 24, background: "#08090b", color: "#f5f7fa" }}>
      <section style={{ width: "min(520px, 100%)", padding: 32, border: "1px solid #252932", borderRadius: 24, background: "#0e1014", textAlign: "center" }}>
        <div style={{ width: 48, height: 48, display: "grid", placeItems: "center", margin: "0 auto 18px", borderRadius: 14, background: "#171a20" }}>
          <AlertTriangle size={22} aria-hidden="true" />
        </div>
        <p style={{ margin: "0 0 8px", fontSize: 12, letterSpacing: ".14em", opacity: .6 }}>CENTRAL DO CLIENTE</p>
        <h1 style={{ margin: "0 0 12px", fontSize: "clamp(24px, 5vw, 34px)" }}>Não foi possível carregar esta área.</h1>
        <p style={{ margin: "0 0 24px", color: "#aeb4bf", lineHeight: 1.6 }}>Ocorreu uma falha inesperada. Tente novamente antes de sair da Central.</p>
        <button onClick={reset} type="button" style={{ display: "inline-flex", alignItems: "center", gap: 9, minHeight: 44, padding: "0 18px", border: 0, borderRadius: 12, background: "#f5f7fa", color: "#08090b", fontWeight: 700, cursor: "pointer" }}>
          <RefreshCw size={16} aria-hidden="true" /> Tentar novamente
        </button>
      </section>
    </main>
  );
}

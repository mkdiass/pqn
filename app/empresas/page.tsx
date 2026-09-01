import Link from "next/link";

export default function EmpresasPage() {
  return (
    <main style={{ minHeight: "100vh", padding: "120px 24px", maxWidth: 1200, margin: "0 auto" }}>
      <span style={{ fontWeight: 700, letterSpacing: ".12em" }}>PARQUE NET EMPRESAS</span>
      <h1 style={{ fontSize: "clamp(42px, 7vw, 82px)", margin: "18px 0" }}>
        Internet que acompanha o ritmo do seu <em>negócio.</em>
      </h1>
      <p style={{ maxWidth: 680, fontSize: 20, lineHeight: 1.7 }}>
        Conectividade profissional, estabilidade e atendimento próximo para empresas que não podem parar.
      </p>
      <div style={{ display: "flex", gap: 16, marginTop: 32, flexWrap: "wrap" }}>
        <Link href="/suporte">Falar com especialista →</Link>
        <Link href="/cobertura">Consultar cobertura</Link>
      </div>
    </main>
  );
}

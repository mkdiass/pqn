import Link from "next/link";

export default function EntretenimentoPage() {
  return (
    <main style={{ minHeight: "100vh", padding: "120px 24px", maxWidth: 1200, margin: "0 auto" }}>
      <span style={{ fontWeight: 700, letterSpacing: ".12em" }}>PARQUE NET ENTRETENIMENTO</span>
      <h1 style={{ fontSize: "clamp(42px, 7vw, 82px)", margin: "18px 0" }}>
        Sua internet. Seu conteúdo. <em>Seu momento.</em>
      </h1>
      <p style={{ maxWidth: 680, fontSize: 20, lineHeight: 1.7 }}>
        Uma conexão preparada para streaming, gaming, música e todos os momentos digitais da sua casa.
      </p>
      <div style={{ display: "flex", gap: 16, marginTop: 32, flexWrap: "wrap" }}>
        <Link href="/planos">Conhecer planos →</Link>
        <Link href="/cobertura">Verificar cobertura</Link>
      </div>
    </main>
  );
}

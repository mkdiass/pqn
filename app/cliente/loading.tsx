export default function ClientLoading() {
  return (
    <main
      aria-busy="true"
      aria-label="Carregando Central do Cliente"
      style={{ minHeight: "100vh", padding: "clamp(24px, 5vw, 64px)", background: "#08090b", color: "#f5f7fa" }}
    >
      <div style={{ width: "min(1120px, 100%)", margin: "0 auto" }}>
        <div style={{ width: 150, height: 12, borderRadius: 999, background: "#1b1e24", marginBottom: 28 }} />
        <div style={{ width: "min(520px, 85%)", height: 46, borderRadius: 12, background: "#15181d", marginBottom: 14 }} />
        <div style={{ width: "min(680px, 100%)", height: 18, borderRadius: 999, background: "#111419", marginBottom: 44 }} />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 16 }}>
          {[1, 2, 3].map((item) => (
            <div key={item} style={{ height: 170, border: "1px solid #1b1e24", borderRadius: 20, background: "#0d0f12" }} />
          ))}
        </div>
      </div>
    </main>
  );
}

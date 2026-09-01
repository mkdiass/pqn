import Link from "next/link";
import { ArrowRight, Building2, Headphones, Network, ShieldCheck, Sparkles, Zap } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";

const solutions = [
  { icon: Network, title: "Link dedicado e fibra", text: "Conectividade estável para operações críticas, sistemas em nuvem e equipes distribuídas." },
  { icon: ShieldCheck, title: "Segurança e continuidade", text: "Infraestrutura pensada para reduzir interrupções e dar previsibilidade à sua operação." },
  { icon: Headphones, title: "Atendimento empresarial", text: "Suporte preparado para empresas que precisam resolver rápido e voltar ao trabalho." },
];

export default function EmpresasPage() {
  return (
    <>
      <Navbar />
      <main className="premium-page">
        <section className="premium-hero">
          <div className="premium-hero-grid">
            <div className="premium-reveal">
              <span className="premium-kicker">PARQUE NET EMPRESAS</span>
              <h1>Internet que acompanha o ritmo do seu <em>negócio.</em></h1>
              <p>Conectividade profissional, suporte próximo e soluções de fibra para empresas que não podem parar.</p>
              <div className="premium-actions">
                <Link href="/suporte?categoria=empresarial" className="premium-btn premium-btn-primary">Falar com especialista <ArrowRight size={18} /></Link>
                <Link href="/cobertura" className="premium-btn premium-btn-secondary">Consultar cobertura</Link>
              </div>
            </div>
            <div className="premium-visual premium-reveal delay-2" aria-label="Rede empresarial Parque Net">
              <span className="network-status">● Rede operacional</span>
              <div className="network-ring" />
              <div className="network-ring" />
              <div className="network-core"><Building2 size={48} /></div>
            </div>
          </div>
        </section>

        <section className="premium-section">
          <div className="premium-section-inner">
            <div className="premium-section-head premium-reveal">
              <span>INFRAESTRUTURA</span>
              <h2>Mais do que internet. Uma base para o seu negócio.</h2>
              <p>Projetamos a experiência empresarial para combinar performance, estabilidade e atendimento.</p>
            </div>
            <div className="premium-grid">
              {solutions.map(({ icon: Icon, title, text }, index) => (
                <article className={`premium-card premium-reveal delay-${index + 1}`} key={title}>
                  <div className="premium-card-icon"><Icon size={22} /></div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="premium-hero" style={{ minHeight: 360 }}>
          <div className="premium-hero-grid" style={{ gridTemplateColumns: "1fr" }}>
            <div className="premium-reveal">
              <span className="premium-kicker">ESCALA</span>
              <h2 style={{ fontSize: "clamp(34px,4vw,54px)" }}>Uma conexão pronta para crescer com você.</h2>
              <div className="enterprise-metrics">
                <div className="metric"><strong>99,9%</strong><span>disponibilidade projetada</span></div>
                <div className="metric"><strong>24h</strong><span>suporte ao cliente</span></div>
                <div className="metric"><strong>100%</strong><span>fibra óptica</span></div>
                <div className="metric"><strong>1:1</strong><span>atendimento próximo</span></div>
              </div>
            </div>
          </div>
        </section>

        <section className="premium-section">
          <div className="premium-section-inner" style={{ textAlign: "center" }}>
            <Sparkles size={30} color="#ff7900" />
            <h2 style={{ marginTop: 14 }}>Vamos conectar sua empresa?</h2>
            <p style={{ marginTop: 12, color: "#64748b" }}>Converse com nossa equipe e encontre a solução ideal.</p>
            <div className="premium-actions" style={{ justifyContent: "center" }}>
              <Link href="/suporte?categoria=empresarial" className="premium-btn premium-btn-primary">Solicitar atendimento <Zap size={18} /></Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

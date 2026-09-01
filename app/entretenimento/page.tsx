import Link from "next/link";
import { ArrowRight, Clapperboard, Gamepad2, Headphones, Play, Tv, Wifi } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";

const benefits = [
  { icon: Tv, title: "Streaming sem travar", text: "Uma conexão preparada para filmes, séries, vídeos e múltiplas telas." },
  { icon: Gamepad2, title: "Gaming conectado", text: "Baixa latência e estabilidade para jogar online com mais tranquilidade." },
  { icon: Headphones, title: "Música e conteúdo", text: "Sua casa conectada para ouvir, assistir e compartilhar experiências." },
];

export default function EntretenimentoPage() {
  return (
    <>
      <Navbar />
      <main className="premium-page">
        <section className="premium-hero">
          <div className="premium-hero-grid">
            <div className="premium-reveal">
              <span className="premium-kicker">PARQUE NET ENTRETENIMENTO</span>
              <h1>Sua internet. Seu conteúdo. <em>Seu momento.</em></h1>
              <p>Uma experiência de conexão feita para transformar sua casa em um centro de entretenimento.</p>
              <div className="premium-actions">
                <Link href="/planos" className="premium-btn premium-btn-primary">Escolher meu plano <ArrowRight size={18} /></Link>
                <Link href="/cobertura" className="premium-btn premium-btn-secondary">Verificar cobertura</Link>
              </div>
            </div>
            <div className="premium-visual premium-reveal delay-2">
              <span className="network-status">● Conexão ativa</span>
              <div className="network-ring" />
              <div className="network-ring" />
              <div className="network-core"><Play size={45} fill="currentColor" /></div>
            </div>
          </div>
        </section>

        <section className="premium-section">
          <div className="premium-section-inner">
            <div className="premium-section-head premium-reveal">
              <span>UMA CASA, MIL POSSIBILIDADES</span>
              <h2>Feita para tudo o que você gosta de fazer online.</h2>
              <p>Do primeiro play ao último round, a Parque Net acompanha sua rotina com uma conexão estável.</p>
            </div>
            <div className="premium-grid">
              {benefits.map(({ icon: Icon, title, text }, index) => (
                <article className={`premium-card premium-reveal delay-${index + 1}`} key={title}>
                  <div className="premium-card-icon"><Icon size={22} /></div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="premium-section" style={{ background: "#fff" }}>
          <div className="premium-section-inner">
            <div className="ent-feature">
              <div className="ent-showcase premium-reveal">
                <Clapperboard size={30} color="#ff7900" />
                <h3>Entre em uma experiência onde a conexão desaparece e o conteúdo aparece.</h3>
                <p>Mais estabilidade para sua rotina digital, sem complicar o que deveria ser simples.</p>
              </div>
              <div className="ent-list">
                <div className="ent-item premium-reveal delay-1"><strong><Wifi size={18} style={{ verticalAlign: "middle", marginRight: 8 }} />Vários dispositivos</strong><span>Celular, TV, console, notebook e muito mais.</span></div>
                <div className="ent-item premium-reveal delay-2"><strong>Streaming em alta qualidade</strong><span>Assista ao seu conteúdo favorito com mais estabilidade.</span></div>
                <div className="ent-item premium-reveal delay-3"><strong>Experiência sem complicação</strong><span>Internet rápida, atendimento próximo e planos claros.</span></div>
              </div>
            </div>
          </div>
        </section>

        <section className="premium-section">
          <div className="premium-section-inner" style={{ textAlign: "center" }}>
            <span className="premium-kicker">PRONTO PARA CONECTAR?</span>
            <h2 style={{ marginTop: 12 }}>Escolha a velocidade que combina com sua casa.</h2>
            <div className="premium-actions" style={{ justifyContent: "center" }}>
              <Link href="/planos" className="premium-btn premium-btn-primary">Conhecer planos <ArrowRight size={18} /></Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

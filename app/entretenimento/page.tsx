import { ArrowRight, Clapperboard, Gamepad2, Headphones, MonitorPlay, Music2, Tv2 } from "lucide-react";
import Link from "next/link";
import { Navbar } from "@/components/layout/navbar";

const services = [
  { icon: MonitorPlay, title: "Filmes e séries", text: "Conteúdo para aproveitar sua internet com qualidade e estabilidade." },
  { icon: Tv2, title: "TV e canais", text: "Opções de entretenimento para transformar sua conexão em diversão." },
  { icon: Gamepad2, title: "Games", text: "Mais estabilidade para partidas online, downloads e atualizações." },
  { icon: Music2, title: "Música", text: "Sua playlist, podcasts e conteúdos favoritos sem complicação." },
  { icon: Clapperboard, title: "Streaming", text: "Uma conexão preparada para assistir em alta qualidade." },
  { icon: Headphones, title: "Experiência completa", text: "Internet + entretenimento em uma jornada simples de contratação." },
];

export default function EntretenimentoPage() {
  return (
    <>
      <Navbar />
      <main className="pn-marketing">
        <section className="pn-inner-hero"><div className="pn-inner-hero-grid">
          <div><span className="pn-eyebrow">ENTRETENIMENTO PARQUE NET</span><h1>Sua internet. Seu conteúdo. <span>Do seu jeito.</span></h1><p>Tenha uma conexão preparada para filmes, séries, música, jogos e tudo o que você gosta de fazer online.</p><div className="pn-actions"><Link href="/planos" className="pn-btn pn-btn-primary">Conhecer planos <ArrowRight size={17} /></Link><Link href="/cobertura" className="pn-btn pn-btn-outline">Ver disponibilidade</Link></div></div>
          <div className="pn-hero-art"><div className="pn-hero-art-pin"><Tv2 size={30} /></div><div className="pn-hero-art-caption"><strong>Entretenimento sem travar</strong><span>Fibra óptica para acompanhar o que você gosta.</span></div></div>
        </div></section>

        <section className="pn-section"><div className="pn-container pn-center"><span className="pn-eyebrow">TUDO CONECTADO</span><h2 className="pn-title">Uma conexão para <span>todos os momentos.</span></h2><p className="pn-lead">Do primeiro episódio à última partida, a experiência começa com uma internet estável.</p><div className="pn-card-grid">{services.map(({ icon: Icon, title, text }) => <article className="pn-card" key={title}><div className="pn-card-icon"><Icon size={22} /></div><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

        <section className="pn-section pn-dark-section"><div className="pn-container"><span className="pn-eyebrow">PARA SUA CASA</span><h2 className="pn-title">Escolha uma velocidade que acompanhe <span>sua rotina.</span></h2><div className="pn-plan-mini-grid">
          <div className="pn-plan-mini"><strong>400</strong> <span>MEGA</span><p>Ideal para navegação, redes sociais e streaming diário.</p><Link href="/cobertura?plano=400">Ver disponibilidade</Link></div>
          <div className="pn-plan-mini"><strong>500</strong> <span>MEGA</span><p>Mais folga para vários dispositivos conectados.</p><Link href="/cobertura?plano=500">Ver disponibilidade</Link></div>
          <div className="pn-plan-mini"><strong>700</strong> <span>MEGA</span><p>Uma escolha equilibrada para famílias conectadas.</p><Link href="/cobertura?plano=700">Ver disponibilidade</Link></div>
          <div className="pn-plan-mini"><strong>900+</strong> <span>MEGA</span><p>Para quem exige mais performance e múltiplos usos.</p><Link href="/cobertura?plano=900">Ver disponibilidade</Link></div>
        </div></div></section>

        <section className="pn-final-cta"><div className="pn-final-cta-inner"><span className="pn-eyebrow">PRONTO?</span><h2>Leve a Parque Net para sua casa.</h2><p>Consulte a disponibilidade, escolha seu plano e continue a contratação com nossa equipe.</p><div className="pn-actions"><Link href="/cobertura" className="pn-btn pn-btn-primary">Consultar cobertura</Link><Link href="/planos" className="pn-btn pn-btn-outline">Ver todos os planos</Link></div></div></section>
      </main>
    </>
  );
}

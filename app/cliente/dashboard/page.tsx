import { ArrowRight, Gauge, Headphones, Wifi, Zap } from "lucide-react";
import { redirect } from "next/navigation";
import { getClientSession } from "@/lib/auth";

export default async function ClientDashboard() {
  const session = await getClientSession();
  if (!session) redirect("/cliente");

  return <main className="client-dashboard">
    <header className="client-dashboard-header"><a href="/" className="client-dashboard-logo">PARQUE <span>NET</span></a><form action="/api/auth/logout" method="post"><button className="client-logout" type="submit">Sair</button></form></header>
    <div className="client-dashboard-container">
      <div className="client-dashboard-welcome"><span>ÁREA DO CLIENTE</span><h1>Olá, {session.name.split(" ")[0]}.</h1><p>Tenha uma visão rápida do seu serviço e acesse os principais recursos da Parque Net.</p></div>
      <section className="client-status-card"><div className="client-status-main"><div className="client-status-icon"><Wifi size={25} /></div><div><span>STATUS DA CONEXÃO</span><h2>Conexão ativa</h2><p>Seu serviço está funcionando normalmente.</p></div></div><div className="client-status-badge"><i />{session.status}</div></section>
      <section className="client-dashboard-grid">
        <article className="client-dashboard-card client-dashboard-card-featured"><div className="client-card-icon"><Gauge size={21} /></div><span>SEU PLANO</span><h3>{session.plan}</h3><p>Internet fibra óptica de alta performance.</p><a href="/planos">Ver detalhes <ArrowRight size={16} /></a></article>
        <article className="client-dashboard-card"><div className="client-card-icon"><Zap size={21} /></div><span>PERFORMANCE</span><h3>Alta velocidade</h3><p>Rede preparada para trabalho, streaming e jogos.</p></article>
        <article className="client-dashboard-card"><div className="client-card-icon"><Headphones size={21} /></div><span>SUPORTE</span><h3>Precisa de ajuda?</h3><p>Encontre atendimento para conexão, financeiro e serviços.</p><a href="/suporte">Abrir suporte <ArrowRight size={16} /></a></article>
      </section>
      <section className="client-dashboard-actions"><div><span>PRÓXIMOS PASSOS</span><h2>O que você precisa fazer?</h2></div><div className="client-action-links"><a href="/cobertura">Consultar endereço <ArrowRight size={16} /></a><a href="/planos">Conhecer planos <ArrowRight size={16} /></a><a href="/suporte">Falar com suporte <ArrowRight size={16} /></a></div></section>
    </div>
  </main>;
}

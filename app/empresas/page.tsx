import Link from "next/link";
import { ArrowRight, BarChart3, Building2, Cloud, Headphones, ShieldCheck, Wifi, Zap } from "lucide-react";
import { Reveal } from "@/components/project/reveal";
import { SiteShell } from "@/components/project/site-shell";

const solutions = [
  [Zap, "Link de alta performance", "Conectividade preparada para operações críticas, equipes distribuídas e aplicações em nuvem."],
  [ShieldCheck, "Continuidade e segurança", "Uma infraestrutura pensada para reduzir indisponibilidade e dar previsibilidade à sua operação."],
  [Cloud, "Conexão para a nuvem", "Suporte à videoconferência, sistemas SaaS, backups e ferramentas que dependem de internet estável."],
  [Headphones, "Atendimento próximo", "Uma equipe acessível para orientar sua empresa quando a conectividade é parte do negócio."],
  [BarChart3, "Escala sob medida", "Comece com a necessidade atual e evolua a solução conforme sua operação crescer."],
  [Wifi, "Rede para equipes", "Mais capacidade para notebooks, celulares, terminais, câmeras e dispositivos conectados."],
] as const;

export default function EmpresasPage() {
  return <SiteShell>
    <section className="pp-page-hero"><div className="pp-page-hero-inner"><span className="pp-eyebrow"><i/> PARQUE NET EMPRESAS</span><h1>Internet que acompanha o ritmo do seu <em>negócio.</em></h1><p>Conectividade profissional, atendimento próximo e uma experiência digital construída para empresas que não podem parar.</p><div className="pp-actions"><Link className="pp-btn pp-btn-primary" href="/suporte?tipo=empresas">Falar com especialista <ArrowRight size={17}/></Link><Link className="pp-btn pp-btn-ghost" href="/cobertura">Consultar cobertura</Link></div></div></section>
    <section className="pp-section"><div className="pp-container"><Reveal className="pp-section-head"><div><span className="pp-eyebrow"><i/> SOLUÇÕES</span><h2>Uma infraestrutura profissional<br/>para uma operação profissional.</h2></div><p>Da pequena empresa à operação que depende de conectividade o dia inteiro.</p></Reveal><div className="pp-grid-3">{solutions.map(([Icon,title,text])=><Reveal key={title}><article className="pp-card pp-card-interactive"><div className="pp-card-icon"><Icon size={22}/></div><h3>{title}</h3><p>{text}</p><span className="pp-card-arrow"><ArrowRight size={15}/></span></article></Reveal>)}</div></div></section>
    <section className="pp-section pp-section-muted"><div className="pp-container"><div className="pp-feature-grid"><Reveal><div className="pp-feature-copy"><span className="pp-eyebrow"><i/> CONEXÃO QUE TRABALHA</span><h2>Menos preocupação com a rede. Mais foco no negócio.</h2><p>Uma conexão corporativa precisa ser simples de contratar, fácil de acompanhar e preparada para acompanhar a rotina da equipe.</p><div className="pp-checks"><span><ShieldCheck size={16}/> Estabilidade</span><span><Cloud size={16}/> Nuvem e SaaS</span><span><Headphones size={16}/> Suporte</span></div><Link href="/suporte?tipo=empresas" className="pp-btn pp-btn-primary">Montar solução <ArrowRight size={16}/></Link></div></Reveal><Reveal><div className="pp-network-panel"><div className="pp-network-line line-a"/><div className="pp-network-line line-b"/><div className="pp-network-node node-a"><Wifi size={19}/></div><div className="pp-network-node node-b"><Cloud size={19}/></div><div className="pp-network-node node-c"><Building2 size={19}/></div><div className="pp-network-core"><span>PARQUE NET</span><strong>NETWORK</strong><small>CONNECTED</small></div></div></Reveal></div></div></section>
    <section className="pp-stat-band"><div className="pp-container pp-stats"><div className="pp-stat"><strong>24/7</strong><span>MONITORAMENTO</span></div><div className="pp-stat"><strong>1 Gbps</strong><span>ATÉ DE VELOCIDADE</span></div><div className="pp-stat"><strong>Baixa</strong><span>LATÊNCIA</span></div><div className="pp-stat"><strong>Humano</strong><span>ATENDIMENTO</span></div></div></section>
    <section className="pp-cta"><div className="pp-cta-inner"><div><span className="pp-eyebrow"><i/> SOLUÇÃO SOB MEDIDA</span><h2>Vamos conectar sua empresa?</h2><p>Conte o que sua operação precisa e nossa equipe orienta o melhor caminho.</p></div><Link className="pp-btn pp-btn-primary" href="/suporte?tipo=empresas">Falar com especialista <Building2 size={17}/></Link></div></section>
  </SiteShell>;
}

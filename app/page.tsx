import Link from "next/link";
import { ArrowRight, Gauge, Headphones, Wifi } from "lucide-react";
import { Reveal } from "@/components/project/reveal";
import { NetworkVisual } from "@/components/project/network-visual";
import { SiteShell } from "@/components/project/site-shell";

const plans = [
  { name: "Essencial", speed: "300", price: "99,90", text: "Para navegar, estudar e manter a casa conectada." },
  { name: "Ultra", speed: "600", price: "119,90", text: "Mais velocidade para streaming, trabalho e jogos.", featured: true },
  { name: "Giga", speed: "1", unit: "Gbps", price: "149,90", text: "Máxima performance para uma casa sem limites." },
];

export default function HomePage() {
  const features = [[Wifi, "Fibra até sua casa", "Sinal estável e baixa latência com uma rede preparada para o seu dia."], [Gauge, "Velocidade real", "Planos desenhados para você aproveitar sua conexão sem gargalos."], [Headphones, "Atendimento próximo", "Quando precisar, você fala com pessoas de verdade e acompanha seu atendimento."]];
  return <SiteShell>
    <section className="pp-hero"><div className="pp-hero-inner"><Reveal><span className="pp-eyebrow"><i /> REDE PARQUE NET</span><h1>Internet que acompanha <em>o seu ritmo.</em></h1><p>Fibra óptica de alta performance, estabilidade de verdade e atendimento próximo. Uma conexão feita para tudo o que importa.</p><div className="pp-actions"><Link className="pp-btn pp-btn-primary" href="/cobertura">Ver se tenho cobertura <ArrowRight size={17} /></Link><Link className="pp-btn pp-btn-ghost" href="/planos">Conhecer planos</Link></div><div className="pp-proof"><div><strong>1 Gbps</strong><small>ATÉ DE VELOCIDADE</small></div><div><strong>99,9%</strong><small>DISPONIBILIDADE</small></div><div><strong>24h</strong><small>ATENDIMENTO DIGITAL</small></div></div></Reveal><Reveal><NetworkVisual /></Reveal></div></section>
    <section className="pp-section"><div className="pp-container"><Reveal className="pp-section-head"><div><span className="pp-eyebrow"><i /> POR QUE PARQUE NET</span><h2>Conexão boa é aquela<br />que simplesmente funciona.</h2></div><p>Da primeira navegação ao trabalho, streaming e gaming, nossa rede foi pensada para entregar estabilidade sem complicar sua vida.</p></Reveal><div className="pp-grid-3">{features.map(([Icon,title,text]) => { const I = Icon as typeof Wifi; return <Reveal key={title as string}><article className="pp-card"><div className="pp-card-icon"><I size={22}/></div><h3>{title as string}</h3><p>{text as string}</p></article></Reveal>; })}</div></div></section>
    <section className="pp-stat-band"><div className="pp-container pp-stats"><div className="pp-stat"><strong>+10 mil</strong><span>CLIENTES CONECTADOS</span></div><div className="pp-stat"><strong>1 Gbps</strong><span>ATÉ DE VELOCIDADE</span></div><div className="pp-stat"><strong>24/7</strong><span>REDE MONITORADA</span></div><div className="pp-stat"><strong>4 ms</strong><span>LATÊNCIA MÉDIA</span></div></div></section>
    <section className="pp-section pp-section-muted"><div className="pp-container"><Reveal className="pp-section-head"><div><span className="pp-eyebrow"><i /> ESCOLHA SUA EXPERIÊNCIA</span><h2>Um plano para<br />cada momento.</h2></div><p>Comece com o que precisa hoje e evolua quando quiser.</p></Reveal><div className="pp-plans">{plans.map(plan => <Reveal key={plan.name}><article className={`pp-plan ${plan.featured ? "featured" : ""}`}>{plan.featured && <span className="pp-plan-badge">MAIS ESCOLHIDO</span>}<h3>{plan.name.toUpperCase()}</h3><div className="speed">{plan.speed}<span>{plan.unit ?? "Mbps"}</span></div><p>{plan.text}</p><div className="price">a partir de <strong>R$ {plan.price}</strong>/mês</div><Link className="pp-btn pp-btn-primary" href="/cobertura">Consultar disponibilidade <ArrowRight size={16}/></Link></article></Reveal>)}</div></div></section>
    <section className="pp-cta"><div className="pp-cta-inner"><div><span className="pp-eyebrow"><i /> PRONTO PARA CONECTAR</span><h2>Descubra a Parque Net.</h2><p>Consulte seu endereço e veja os planos disponíveis na sua região.</p></div><Link className="pp-btn pp-btn-primary" href="/cobertura">Consultar cobertura <ArrowRight size={17}/></Link></div></section>
  </SiteShell>;
}

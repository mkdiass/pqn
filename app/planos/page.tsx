import Link from "next/link";
import { ArrowRight, Check, Gauge, Headphones, ShieldCheck, Sparkles, Wifi, Zap } from "lucide-react";
import { Reveal } from "@/components/project/reveal";
import { SiteShell } from "@/components/project/site-shell";
import { plans } from "@/data/plans";

const highlights = [
  { icon: Wifi, title: "Fibra até sua casa", text: "Conexão de alta capacidade com infraestrutura preparada para o dia a dia." },
  { icon: ShieldCheck, title: "Instalação especializada", text: "Equipe preparada para entregar uma instalação segura e bem executada." },
  { icon: Headphones, title: "Atendimento próximo", text: "Suporte para acompanhar você antes, durante e depois da contratação." },
];

const formatPrice = (price: number) => price.toFixed(2).replace(".", ",");

export const metadata = {
  title: "Planos | Parque Net",
  description: "Compare os planos de internet fibra da Parque Net e encontre a velocidade ideal para sua rotina.",
};

export default function PlansPage() {
  return (
    <SiteShell>
      <section className="plans-hero">
        <div className="plans-hero-glow" aria-hidden="true" />
        <div className="plans-hero-inner">
          <Reveal>
            <span className="pp-eyebrow"><i /> PLANOS PARQUE NET</span>
            <h1>Mais velocidade.<br /><em>Mais liberdade.</em></h1>
            <p>Escolha uma conexão feita para acompanhar sua casa, seu trabalho, seu entretenimento e tudo que acontece ao mesmo tempo.</p>
            <div className="plans-hero-actions">
              <Link href="/cobertura" className="pp-btn pp-btn-primary">Ver disponibilidade <ArrowRight size={16} /></Link>
              <a href="#comparar" className="plans-text-link">Comparar planos <ArrowRight size={15} /></a>
            </div>
          </Reveal>
          <Reveal className="plans-hero-panel">
            <div className="plans-orbit" aria-hidden="true"><span /><span /><span /></div>
            <div className="plans-hero-speed"><strong>1</strong><span>Gbps</span></div>
            <div className="plans-hero-panel-copy"><span>ATÉ</span><strong>1.000 Mbps</strong><small>de velocidade em fibra óptica</small></div>
            <div className="plans-live"><i /> Rede preparada</div>
          </Reveal>
        </div>
      </section>

      <section className="pp-section pp-section-muted" id="comparar">
        <div className="pp-container">
          <Reveal className="pp-section-head">
            <div><span className="pp-eyebrow"><i /> COMPARE</span><h2>Encontre seu<br />ritmo de conexão.</h2></div>
            <p>Do uso essencial ao alto desempenho, cada plano foi pensado para uma rotina diferente. Consulte a cobertura antes de contratar.</p>
          </Reveal>

          <div className="plans-grid">
            {plans.map((plan) => (
              <Reveal key={plan.id}>
                <article className={`plan-card ${plan.featured ? "featured" : ""}`}>
                  {plan.featured && <span className="plan-badge"><Sparkles size={12} /> MAIS ESCOLHIDO</span>}
                  <div className="plan-card-top"><span>{plan.name.toUpperCase()}</span><div className="plan-card-icon"><Zap size={16} /></div></div>
                  <div className="plan-speed"><strong>{plan.speedMbps >= 1000 ? "1" : plan.speedMbps}</strong><span>{plan.speedMbps >= 1000 ? "Gbps" : "Mbps"}</span></div>
                  <p>{plan.description}</p>
                  <div className="plan-price"><small>R$</small><strong>{formatPrice(plan.price)}</strong><span>/mês</span></div>
                  <div className="plan-benefits">
                    {plan.benefits.map((benefit) => <div key={benefit}><Check size={15} /> <span>{benefit}</span></div>)}
                  </div>
                  <Link href={`/cobertura?plano=${plan.id}`} className="plan-cta">Ver disponibilidade <ArrowRight size={15} /></Link>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="pp-section">
        <div className="pp-container">
          <Reveal className="pp-section-head">
            <div><span className="pp-eyebrow"><i /> EM TODOS OS PLANOS</span><h2>Uma experiência que<br />vai além da velocidade.</h2></div>
          </Reveal>
          <div className="plans-highlights">
            {highlights.map(({ icon: Icon, title, text }) => (
              <article className="plan-highlight" key={title}><div className="plan-highlight-icon"><Icon size={21} /></div><h3>{title}</h3><p>{text}</p></article>
            ))}
          </div>
          <Reveal className="plans-bottom-cta">
            <div><span className="pp-eyebrow"><i /> PRONTO PARA CONECTAR?</span><h2>Descubra qual plano está disponível no seu endereço.</h2></div>
            <Link href="/cobertura" className="pp-btn pp-btn-primary">Consultar cobertura <ArrowRight size={16} /></Link>
          </Reveal>
        </div>
      </section>
    </SiteShell>
  );
}

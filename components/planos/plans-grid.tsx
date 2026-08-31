import { plans } from "@/data/plans";
import { PlanCard } from "./plan-card";

type PlansGridProps = { selectedPlan?: string };

export function PlansGrid({ selectedPlan = "" }: PlansGridProps) {
  return (
    <section className="plans-grid-section" id="planos">
      <div className="plans-grid-container">
        <div className="plans-grid-heading">
          <span>NOSSOS PLANOS</span>
          <h2>Escolha a velocidade<br />ideal para você.</h2>
          <p>Tenha uma conexão rápida, estável e preparada para tudo que faz parte da sua rotina.</p>
        </div>

        {selectedPlan && (
          <div className="pn-selected-plan-card">
            <div><strong>Você estava escolhendo o plano de {selectedPlan} Mega.</strong><span>Ele ficou destacado para você continuar a contratação.</span></div>
            <a href="#planos">Ver plano selecionado</a>
          </div>
        )}

        <div className="full-plans-grid">
          {plans.map((plan) => <PlanCard key={plan.speed} {...plan} selected={selectedPlan === plan.speed} />)}
        </div>
      </div>
    </section>
  );
}

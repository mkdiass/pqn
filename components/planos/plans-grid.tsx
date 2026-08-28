import { plans } from "@/data/plans";
import { PlanCard } from "./plan-card";

export function PlansGrid() {
  return (
    <section className="plans-grid-section" id="planos">

      <div className="plans-grid-container">

        <div className="plans-grid-heading">

          <span>NOSSOS PLANOS</span>

          <h2>
            Escolha a velocidade
            <br />
            ideal para você.
          </h2>

          <p>
            Tenha uma conexão rápida, estável e preparada
            para tudo que faz parte da sua rotina.
          </p>

        </div>

        <div className="full-plans-grid">

          {plans.map((plan) => (
            <PlanCard
              key={plan.speed}
              speed={plan.speed}
              price={plan.price}
              description={plan.description}
              highlight={plan.highlight}
            />
          ))}

        </div>

      </div>

    </section>
  );
}
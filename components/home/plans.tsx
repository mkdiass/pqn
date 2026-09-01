import Link from "next/link";
import { ArrowRight, Wifi } from "lucide-react";
import { plans } from "@/data/plans";

export function Plans() {
  return (
    <section className="plans-section">
      <div className="plans-container">
        <div className="plans-intro">
          <span>PLANOS EM DESTAQUE</span>
          <h2>
            Encontre o plano
            <br />
            ideal para você.
          </h2>
          <p>Internet de verdade para a sua rotina.</p>
          <Link href="/planos" className="plans-link">
            Ver todos os planos
            <ArrowRight size={19} />
          </Link>
        </div>

        <div className="plans-grid">
          {plans.slice(0, 3).map((plan) => (
            <div
              className={`plan-card ${plan.featured ? "featured" : ""}`}
              key={plan.id}
            >
              {plan.featured && <div className="plan-badge">MAIS ESCOLHIDO</div>}

              <div className="plan-top">
                <div>
                  <strong>{plan.speedMbps}</strong>
                  <span> MEGA</span>
                </div>
                <div className="plan-wifi">
                  <Wifi size={24} />
                </div>
              </div>

              <p className="plan-description">{plan.description}</p>
              <div className="plan-divider" />
              <span className="price-label">A partir de</span>
              <div className="plan-price">
                R$ <strong>{plan.price.toFixed(2).replace(".", ",")}</strong>
                <span>/mês</span>
              </div>

              <Link href={`/cobertura?plano=${plan.id}`} className="plan-button">
                Conhecer plano
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";

export function PlansCta() {
  return (
    <section className="plans-cta">

      <div className="plans-cta-background" />

      <div className="plans-cta-container">

        <div className="plans-cta-content">

          <span>ENCONTRE O PLANO IDEAL</span>

          <h2>
            Pronto para ter uma
            <br />
            <strong>internet de verdade?</strong>
          </h2>

          <p>
            Consulte a disponibilidade da Parque Net no seu
            endereço e encontre o plano ideal para você.
          </p>

          <Link
            href="/cobertura"
            className="plans-cta-button"
          >
            <MapPin size={19} />
            Consultar cobertura
            <ArrowRight size={18} />
          </Link>

        </div>

      </div>

    </section>
  );
}
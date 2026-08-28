import Link from "next/link";
import { ArrowRight, Wifi } from "lucide-react";

export function PlansHero() {
  return (
    <section className="plans-hero">
      <div className="plans-hero-background" />

      <div className="plans-hero-container">

        <div className="plans-hero-content">

          <span className="plans-hero-label">
            PLANOS PARQUE NET
          </span>

          <h1>
            Internet para
            <br />
            <span>acompanhar você.</span>
          </h1>

          <p>
            Escolha a velocidade ideal para sua rotina,
            com a qualidade e estabilidade da fibra óptica
            Parque Net.
          </p>

          <div className="plans-hero-actions">

            <Link
              href="/cobertura"
              className="primary-button"
            >
              Consultar cobertura
              <ArrowRight size={19} />
            </Link>

            <a
              href="#planos"
              className="secondary-button"
            >
              Ver planos
              <Wifi size={19} />
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}
import Link from "next/link";
import { Check, Wifi } from "lucide-react";

type PlanCardProps = {
  speed: string;
  price: string;
  description: string;
  highlight?: boolean;
};

export function PlanCard({
  speed,
  price,
  description,
  highlight = false,
}: PlanCardProps) {
  return (
    <article className={`full-plan-card ${highlight ? "featured" : ""}`}>
      {highlight && (
        <div className="full-plan-badge">
          MAIS ESCOLHIDO
        </div>
      )}

      <div className="full-plan-header">
        <div>
          <span className="full-plan-label">INTERNET FIBRA</span>

          <div className="full-plan-speed">
            <strong>{speed}</strong>
            <span>MEGA</span>
          </div>
        </div>

        <div className="full-plan-icon">
          <Wifi size={24} />
        </div>
      </div>

      <p className="full-plan-description">
        {description}
      </p>

      <div className="full-plan-divider" />

      <span className="full-plan-price-label">
        A partir de
      </span>

      <div className="full-plan-price">
        <span>R$</span>
        <strong>{price}</strong>
        <small>/mês</small>
      </div>

      <div className="full-plan-features">
        <div>
          <Check size={17} />
          <span>Internet 100% fibra óptica</span>
        </div>

        <div>
          <Check size={17} />
          <span>Conexão estável e rápida</span>
        </div>

        <div>
          <Check size={17} />
          <span>Suporte Parque Net</span>
        </div>
      </div>

      <Link
        href="/cobertura"
        className="full-plan-button"
      >
        Contratar este plano
      </Link>
    </article>
  );
}
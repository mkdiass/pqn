import Link from "next/link";
import { Check, Wifi } from "lucide-react";

type PlanCardProps = {
  id: string;
  speed: number;
  price: string;
  description: string;
  highlight?: boolean;
};

function formatSpeed(speed: number) {
  return speed >= 1000 ? "1 Gbps" : `${speed} Mega`;
}

export function PlanCard({
  id,
  speed,
  price,
  description,
  highlight = false,
}: PlanCardProps) {
  return (
    <article className={`full-plan-card ${highlight ? "featured" : ""}`}>
      {highlight && <div className="full-plan-badge">MAIS ESCOLHIDO</div>}

      <div className="full-plan-header">
        <div>
          <span className="full-plan-label">INTERNET FIBRA</span>
          <div className="full-plan-speed">
            <strong>{formatSpeed(speed)}</strong>
          </div>
        </div>
        <div className="full-plan-icon" aria-hidden="true"><Wifi size={24} /></div>
      </div>

      <p className="full-plan-description">{description}</p>
      <div className="full-plan-divider" />

      <span className="full-plan-price-label">A partir de</span>
      <div className="full-plan-price">
        <span>R$</span>
        <strong>{price}</strong>
        <small>/mês</small>
      </div>

      <div className="full-plan-features">
        <div><Check size={17} /><span>Internet 100% fibra óptica</span></div>
        <div><Check size={17} /><span>Conexão estável e rápida</span></div>
        <div><Check size={17} /><span>Suporte Parque Net</span></div>
      </div>

      <Link href={`/cobertura?plano=${encodeURIComponent(id)}`} className="full-plan-button">
        Ver cobertura e contratar
      </Link>
    </article>
  );
}

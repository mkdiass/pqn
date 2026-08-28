import {
  Gauge,
  Headphones,
  Router,
  ShieldCheck,
} from "lucide-react";

const benefits = [
  {
    icon: Gauge,
    title: "Alta velocidade",
    description:
      "Conexão rápida para navegar, trabalhar, estudar, jogar e assistir seus conteúdos favoritos.",
  },
  {
    icon: ShieldCheck,
    title: "Conexão estável",
    description:
      "Uma internet preparada para manter seus dispositivos conectados durante toda a sua rotina.",
  },
  {
    icon: Router,
    title: "Fibra óptica",
    description:
      "Tecnologia de fibra óptica para entregar mais desempenho e qualidade na sua conexão.",
  },
  {
    icon: Headphones,
    title: "Suporte especializado",
    description:
      "Conte com a equipe Parque Net sempre que precisar de ajuda com sua conexão.",
  },
];

export function PlansBenefits() {
  return (
    <section className="plans-benefits">

      <div className="plans-benefits-container">

        <div className="plans-benefits-heading">

          <span>POR QUE PARQUE NET?</span>

          <h2>
            Mais do que velocidade.
            <br />
            <strong>Uma conexão de verdade.</strong>
          </h2>

          <p>
            Escolher sua internet é escolher como você
            vai estar conectado todos os dias.
          </p>

        </div>

        <div className="plans-benefits-grid">

          {benefits.map((benefit) => {
            const Icon = benefit.icon;

            return (
              <div
                className="plans-benefit-card"
                key={benefit.title}
              >
                <div className="plans-benefit-icon">
                  <Icon size={25} />
                </div>

                <h3>{benefit.title}</h3>

                <p>{benefit.description}</p>
              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}
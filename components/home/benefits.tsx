import {
  Zap,
  ShieldCheck,
  Network,
  Users,
} from "lucide-react";

const benefits = [
  {
    icon: Zap,
    title: "VELOCIDADE",
    description: "Internet rápida para tudo o que é importante pra você.",
  },
  {
    icon: ShieldCheck,
    title: "ESTABILIDADE",
    description: "Conexão consistente para todos os momentos.",
  },
  {
    icon: Network,
    title: "FIBRA ÓPTICA",
    description: "Tecnologia de ponta até a sua casa.",
  },
  {
    icon: Users,
    title: "ATENDIMENTO",
    description: "Suporte próximo quando você precisar.",
  },
];

export function Benefits() {
  return (
    <section className="benefits">

      <div className="benefits-container">

        {benefits.map((benefit) => {
          const Icon = benefit.icon;

          return (
            <div className="benefit" key={benefit.title}>

              <div className="benefit-icon">
                <Icon size={30} />
              </div>

              <div>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>

            </div>
          );
        })}

      </div>

    </section>
  );
}
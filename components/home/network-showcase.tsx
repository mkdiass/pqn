"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2, MapPin, Radio, Wifi } from "lucide-react";
import { useEffect, useState } from "react";

const nodes = [
  { id: 1, x: "18%", y: "34%", label: "Campo Limpo" },
  { id: 2, x: "39%", y: "20%", label: "Capão Redondo" },
  { id: 3, x: "61%", y: "40%", label: "Jardim São Luís" },
  { id: 4, x: "79%", y: "27%", label: "Vila Prel" },
  { id: 5, x: "47%", y: "72%", label: "Parque Maria Helena" },
];

export function NetworkShowcase() {
  const [active, setActive] = useState(1);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((current) => (current % nodes.length) + 1);
    }, 2200);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="network-showcase">
      <div className="network-showcase-container">
        <div className="network-copy">
          <span className="network-eyebrow">UMA REDE PENSADA PARA PERTO DE VOCÊ</span>
          <h2>Conexão que começa <strong>antes do Wi-Fi.</strong></h2>
          <p>
            Descubra como a Parque Net conecta sua região. A experiência abaixo é uma
            visualização da nossa presença local — e o próximo passo é descobrir se
            conseguimos atender exatamente o seu endereço.
          </p>

          <div className="network-status-list">
            <div><CheckCircle2 size={18} /><span>Consulta de cobertura em poucos passos</span></div>
            <div><CheckCircle2 size={18} /><span>Plano escolhido acompanha sua jornada</span></div>
            <div><CheckCircle2 size={18} /><span>Atendimento humano quando você precisar</span></div>
          </div>

          <Link href="/cobertura" className="network-cta">
            Verificar meu endereço <ArrowRight size={18} />
          </Link>
        </div>

        <div className="network-map-card" aria-label="Visualização interativa da presença da Parque Net">
          <div className="network-map-topbar">
            <div>
              <span>REDE PARQUE NET</span>
              <strong>Seu bairro, nossa conexão.</strong>
            </div>
            <div className="network-live"><i /> ONLINE</div>
          </div>

          <div className="network-map">
            <div className="network-grid" />
            <div className="network-route route-one" />
            <div className="network-route route-two" />
            <div className="network-route route-three" />
            <div className="network-core"><Radio size={20} /><span>REDE</span></div>

            {nodes.map((node) => (
              <button
                key={node.id}
                type="button"
                className={`network-node ${active === node.id ? "active" : ""}`}
                style={{ left: node.x, top: node.y }}
                onClick={() => setActive(node.id)}
                aria-label={`Selecionar ${node.label}`}
              >
                <span className="network-node-pulse" />
                <span className="network-node-dot"><Wifi size={13} /></span>
                <small>{node.label}</small>
              </button>
            ))}

            <div className="network-map-caption">
              <MapPin size={15} />
              <span>{nodes.find((node) => node.id === active)?.label}</span>
              <b>conectado à visualização</b>
            </div>
          </div>

          <div className="network-map-footer">
            <span><i /> Visualização demonstrativa</span>
            <Link href="/cobertura">Consultar cobertura <ArrowRight size={14} /></Link>
          </div>
        </div>
      </div>
    </section>
  );
}

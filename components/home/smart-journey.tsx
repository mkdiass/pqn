"use client";

import Link from "next/link";
import { ArrowRight, BriefcaseBusiness, Gamepad2, House, MapPin } from "lucide-react";
import { useState } from "react";

const options = [
  { id: "home", label: "Minha casa", description: "Internet para sua rotina", href: "/planos", icon: House },
  { id: "business", label: "Minha empresa", description: "Conexão para o negócio", href: "/empresas", icon: BriefcaseBusiness },
  { id: "gaming", label: "Jogar e assistir", description: "Velocidade para não travar", href: "/planos", icon: Gamepad2 },
];

export function SmartJourney() {
  const [selected, setSelected] = useState("home");
  const option = options.find((item) => item.id === selected) ?? options[0];

  return (
    <section className="pn-smart-journey" aria-labelledby="smart-journey-title">
      <div className="pn-smart-journey-inner">
        <div className="pn-smart-journey-copy">
          <span className="pn-eyebrow">COMECE POR AQUI</span>
          <h2 id="smart-journey-title">Que tipo de conexão você está procurando?</h2>
          <p>Escolha o que mais combina com você. A Parque Net te leva direto para o próximo passo.</p>
        </div>

        <div className="pn-smart-options" role="radiogroup" aria-label="Objetivo da conexão">
          {options.map((item) => {
            const Icon = item.icon;
            const active = item.id === selected;
            return (
              <button
                key={item.id}
                type="button"
                className={`pn-smart-option ${active ? "active" : ""}`}
                onClick={() => setSelected(item.id)}
                role="radio"
                aria-checked={active}
              >
                <span className="pn-smart-option-icon"><Icon size={20} /></span>
                <span><strong>{item.label}</strong><small>{item.description}</small></span>
              </button>
            );
          })}
        </div>

        <div className="pn-smart-next">
          <div><MapPin size={17} /><span>Quer contratar? Primeiro verificamos se atendemos seu endereço.</span></div>
          <Link href={option.href} className="pn-btn pn-btn-primary">
            {option.id === "business" ? "Conhecer soluções" : "Encontrar meu plano"}
            <ArrowRight size={17} />
          </Link>
        </div>
      </div>
    </section>
  );
}

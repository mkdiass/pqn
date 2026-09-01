"use client";

import Link from "next/link";
import { ArrowRight, Gamepad2, Home, Laptop, Play, Users } from "lucide-react";
import { useMemo, useState } from "react";

import { plans } from "@/data/plans";

type UseCase = "streaming" | "trabalho" | "games" | "familia";
type Household = "1-2" | "3-4" | "5+";

const useCases: Array<{
  id: UseCase;
  title: string;
  description: string;
  icon: typeof Play;
}> = [
  {
    id: "streaming",
    title: "Streaming e redes sociais",
    description: "Filmes, séries, vídeos e muitos dispositivos.",
    icon: Play,
  },
  {
    id: "trabalho",
    title: "Trabalho ou estudo",
    description: "Reuniões, aulas, arquivos e produtividade.",
    icon: Laptop,
  },
  {
    id: "games",
    title: "Jogos e alta performance",
    description: "Gaming, downloads pesados e baixa latência.",
    icon: Gamepad2,
  },
  {
    id: "familia",
    title: "Casa conectada",
    description: "Família, TVs, celulares e vários aparelhos.",
    icon: Home,
  },
];

const households: Array<{
  id: Household;
  title: string;
  description: string;
}> = [
  { id: "1-2", title: "1 a 2 pessoas", description: "Uso leve a moderado" },
  { id: "3-4", title: "3 a 4 pessoas", description: "Uso intenso no dia a dia" },
  { id: "5+", title: "5 ou mais", description: "Casa com muitos usuários" },
];

function recommendPlan(useCase: UseCase, household: Household) {
  const base = {
    trabalho: 400,
    streaming: 500,
    games: 700,
    familia: 700,
  }[useCase];

  const extra = household === "5+" ? 200 : household === "3-4" ? 100 : 0;
  const target = Math.min(base + extra, 1000);

  return (
    plans.find((plan) => Number(plan.speed) >= target) ??
    plans[plans.length - 1]
  );
}

export function SmartContract() {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [useCase, setUseCase] = useState<UseCase | null>(null);
  const [household, setHousehold] = useState<Household | null>(null);

  const recommendedPlan = useMemo(() => {
    if (!useCase || !household) return null;
    return recommendPlan(useCase, household);
  }, [useCase, household]);

  function chooseUseCase(value: UseCase) {
    setUseCase(value);
    setStep(2);
  }

  function chooseHousehold(value: Household) {
    setHousehold(value);
    setStep(3);
  }

  function restart() {
    setUseCase(null);
    setHousehold(null);
    setStep(1);
  }

  return (
    <section className="smart-contract" id="contratar">
      <div className="smart-contract-container">
        <div className="smart-contract-heading">
          <span>ENCONTRE SEU PLANO</span>
          <h2>Você não precisa entender de Mega. <strong>A gente escolhe com você.</strong></h2>
          <p>Responda duas perguntas e descubra uma velocidade indicada para a sua rotina. Depois, confira a cobertura no seu endereço.</p>
        </div>

        <div className="smart-contract-card">
          <div className="smart-contract-progress">
            {[1, 2, 3].map((item) => (
              <div key={item} className={`smart-progress-step ${step >= item ? "active" : ""}`}>
                <span>{item}</span>
                <small>{item === 1 ? "Seu uso" : item === 2 ? "Sua casa" : "Seu plano"}</small>
              </div>
            ))}
          </div>

          {step === 1 && (
            <div className="smart-step">
              <div className="smart-step-title">
                <span>01</span>
                <div>
                  <h3>Como você mais usa a internet?</h3>
                  <p>Escolha o que mais combina com sua rotina.</p>
                </div>
              </div>

              <div className="smart-options smart-options-4">
                {useCases.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button key={item.id} type="button" className="smart-option" onClick={() => chooseUseCase(item.id)}>
                      <span className="smart-option-icon"><Icon size={22} /></span>
                      <strong>{item.title}</strong>
                      <small>{item.description}</small>
                      <ArrowRight size={17} />
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="smart-step">
              <div className="smart-step-title">
                <span>02</span>
                <div>
                  <h3>Quantas pessoas usam a conexão?</h3>
                  <p>Isso ajuda a evitar um plano menor do que sua casa precisa.</p>
                </div>
              </div>

              <div className="smart-options smart-options-3">
                {households.map((item) => (
                  <button key={item.id} type="button" className="smart-option smart-option-simple" onClick={() => chooseHousehold(item.id)}>
                    <span className="smart-option-icon"><Users size={22} /></span>
                    <strong>{item.title}</strong>
                    <small>{item.description}</small>
                    <ArrowRight size={17} />
                  </button>
                ))}
              </div>

              <button type="button" className="smart-back" onClick={() => setStep(1)}>← Voltar</button>
            </div>
          )}

          {step === 3 && recommendedPlan && (
            <div className="smart-step smart-result-step">
              <div className="smart-recommendation-label">RECOMENDAÇÃO PARA VOCÊ</div>
              <div className="smart-recommendation">
                <div>
                  <span className="smart-plan-eyebrow">PARQUE NET FIBRA</span>
                  <div className="smart-plan-speed"><strong>{recommendedPlan.speed}</strong><span>MEGA</span></div>
                  <p>{recommendedPlan.description}</p>
                </div>
                <div className="smart-plan-price"><small>por apenas</small><strong>R$ {recommendedPlan.price}</strong><span>/mês</span></div>
              </div>

              <div className="smart-result-actions">
                <Link href={`/cobertura?plano=${recommendedPlan.speed}&origem=recomendacao`} className="smart-primary-action">
                  Verificar disponibilidade <ArrowRight size={19} />
                </Link>
                <Link href="/planos" className="smart-secondary-action">Quero comparar os planos</Link>
              </div>

              <button type="button" className="smart-back" onClick={restart}>Refazer recomendação</button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2, MessageCircle, ShieldCheck } from "lucide-react";
import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";

import { plans } from "@/data/plans";

const WHATSAPP_NUMBER = "5511973587469";

function normalizePhone(value: string) {
  return value.replace(/\D/g, "").slice(0, 11);
}

function formatPhone(value: string) {
  const numbers = normalizePhone(value);
  if (numbers.length <= 2) return numbers;
  if (numbers.length <= 7) return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`;
  return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7)}`;
}

export function ContractWizard() {
  const searchParams = useSearchParams();
  const requestedPlan = searchParams.get("plano") ?? "700";
  const coverageConfirmed = searchParams.get("cobertura") === "ok";

  const selectedPlan = useMemo(
    () => plans.find((plan) => plan.speed === requestedPlan) ?? plans[2],
    [requestedPlan]
  );

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  function continueToWhatsApp() {
    if (name.trim().length < 3) {
      setError("Digite seu nome para continuarmos.");
      return;
    }

    if (normalizePhone(phone).length < 10) {
      setError("Digite um telefone válido com DDD.");
      return;
    }

    setError("");

    const message = [
      "Olá, Parque Net! Quero contratar internet.",
      `Plano: ${selectedPlan.speed} Mega — R$ ${selectedPlan.price}/mês.`,
      `Nome: ${name.trim()}.`,
      `Telefone: ${formatPhone(phone)}.`,
      "Aguardo as próximas etapas da contratação.",
    ].join("\n");

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
  }

  return (
    <section className="contract-page">
      <div className="contract-container">
        <div className="contract-heading">
          <span>CONTRATAÇÃO ASSISTIDA</span>
          <h1>Vamos colocar sua internet para funcionar.</h1>
          <p>Escolhemos o caminho mais curto: plano, disponibilidade e atendimento. Sem formulários enormes.</p>
        </div>

        <div className="contract-layout">
          <aside className="contract-summary">
            <span className="contract-summary-label">SEU PLANO</span>
            <div className="contract-speed"><strong>{selectedPlan.speed}</strong><span>MEGA</span></div>
            <p>{selectedPlan.description}</p>
            <div className="contract-price"><small>Mensalidade</small><strong>R$ {selectedPlan.price}</strong><span>/mês</span></div>

            <div className="contract-checks">
              <div><CheckCircle2 size={18} /> Internet 100% fibra óptica</div>
              <div><CheckCircle2 size={18} /> Conexão estável</div>
              <div><CheckCircle2 size={18} /> Atendimento Parque Net</div>
            </div>

            <Link href="/planos" className="contract-change-plan"><ArrowLeft size={17} /> Trocar plano</Link>
          </aside>

          <div className="contract-card">
            <div className="contract-steps">
              <div className="contract-step done"><span>1</span><small>Plano</small></div>
              <div className={`contract-step ${coverageConfirmed ? "done" : "current"}`}><span>2</span><small>Disponibilidade</small></div>
              <div className={`contract-step ${coverageConfirmed ? "current" : ""}`}><span>3</span><small>Seus dados</small></div>
            </div>

            {!coverageConfirmed ? (
              <div className="contract-next-step">
                <div className="contract-icon"><ShieldCheck size={28} /></div>
                <span>PRÓXIMO PASSO</span>
                <h2>Antes de contratar, vamos confirmar se a fibra chega ao seu endereço.</h2>
                <p>Leva menos de um minuto e você não precisa preencher seus dados pessoais ainda.</p>
                <Link href={`/cobertura?plano=${selectedPlan.speed}&origem=contratacao`} className="contract-main-button">
                  Consultar meu endereço <ArrowRight size={19} />
                </Link>
              </div>
            ) : (
              <div className="contract-next-step">
                <div className="contract-icon contract-icon-success"><CheckCircle2 size={28} /></div>
                <span>COBERTURA CONFIRMADA</span>
                <h2>Ótimo. Agora só precisamos saber como falar com você.</h2>
                <p>Preencha os dois campos abaixo. A conversa será aberta no WhatsApp já com o plano escolhido.</p>

                <div className="contract-fields">
                  <label>
                    Seu nome
                    <input value={name} onChange={(event) => setName(event.target.value)} placeholder="Como podemos chamar você?" autoComplete="name" />
                  </label>
                  <label>
                    WhatsApp
                    <input value={phone} onChange={(event) => setPhone(formatPhone(event.target.value))} placeholder="(11) 99999-9999" inputMode="tel" autoComplete="tel" />
                  </label>
                </div>

                {error && <p className="contract-error">{error}</p>}

                <button type="button" className="contract-main-button" onClick={continueToWhatsApp}>
                  Continuar pelo WhatsApp <MessageCircle size={19} />
                </button>

                <small className="contract-privacy">Seus dados serão usados somente para dar continuidade ao atendimento.</small>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

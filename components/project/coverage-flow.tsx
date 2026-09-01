"use client";

import { useMemo, useState } from "react";
import { ArrowLeft, ArrowRight, Check, CheckCircle2, Home, Loader2, MapPin, Search, Wifi, XCircle } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { getAddressByCep } from "@/lib/cep";
import { checkCoverage, type CoverageResult } from "@/lib/coverage";
import { plans } from "@/data/plans";

type Address = Awaited<ReturnType<typeof getAddressByCep>>;
type Step = 1 | 2 | 3;

const steps = [
  { id: 1, label: "CEP" },
  { id: 2, label: "Endereço" },
  { id: 3, label: "Resultado" },
] as const;

function formatCep(value: string) {
  const clean = value.replace(/\D/g, "").slice(0, 8);
  return clean.length > 5 ? `${clean.slice(0, 5)}-${clean.slice(5)}` : clean;
}

export function CoverageFlow() {
  const router = useRouter();
  const params = useSearchParams();
  const selectedPlan = useMemo(() => plans.find((plan) => plan.id === params.get("plano")), [params]);
  const [step, setStep] = useState<Step>(1);
  const [cep, setCep] = useState("");
  const [address, setAddress] = useState<Exclude<Address, null> | null>(null);
  const [number, setNumber] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [coverage, setCoverage] = useState<CoverageResult | null>(null);

  async function handleCep() {
    const cleanCep = cep.replace(/\D/g, "");
    setError("");
    setCoverage(null);
    if (cleanCep.length !== 8) {
      setError("Informe um CEP válido com 8 números.");
      return;
    }
    setLoading(true);
    try {
      const result = await getAddressByCep(cleanCep);
      if (!result) {
        setError("Não encontramos esse CEP. Confira os números e tente novamente.");
        return;
      }
      setAddress(result);
      setStep(2);
    } catch {
      setError("Não foi possível consultar o CEP agora. Tente novamente em instantes.");
    } finally {
      setLoading(false);
    }
  }

  function handleCoverage() {
    if (!address) return;
    if (!number.trim()) {
      setError("Informe o número do imóvel para continuar.");
      return;
    }
    setError("");
    setCoverage(checkCoverage(address));
    setStep(3);
  }

  function reset() {
    setStep(1);
    setCep("");
    setAddress(null);
    setNumber("");
    setCoverage(null);
    setError("");
  }

  const matchText = coverage?.match === "street"
    ? "Rua cadastrada na nossa área de atendimento."
    : coverage?.match === "neighborhood"
      ? "Bairro cadastrado na nossa área de atendimento."
      : "Este endereço não está em uma área cadastrada no momento.";

  return (
    <div className="coverage-flow">
      <div className="coverage-flow-top">
        <div className="coverage-flow-copy">
          <span className="coverage-flow-kicker"><Wifi size={14} /> CONSULTA DE COBERTURA</span>
          <h2>{step === 1 ? "Vamos começar pelo seu CEP." : step === 2 ? "Encontramos seu endereço." : coverage?.available ? "Seu endereço está em uma área atendida." : "Ainda não temos cobertura aqui."}</h2>
          <p>{step === 1 ? "Digite o CEP e nós localizamos seu endereço automaticamente." : step === 2 ? "Confira os dados abaixo e informe o número do imóvel para concluir a consulta." : coverage?.available ? matchText : "Você pode consultar outro endereço ou falar com nossa equipe sobre expansão da rede."}</p>
        </div>
        {selectedPlan && (
          <div className="coverage-plan-context">
            <span>PLANO SELECIONADO</span>
            <strong>{selectedPlan.name}</strong>
            <small>{selectedPlan.speedMbps >= 1000 ? "1 Gbps" : `${selectedPlan.speedMbps} Mbps`}</small>
          </div>
        )}
      </div>

      <div className="coverage-progress" aria-label={`Etapa ${step} de 3`}>
        {steps.map((item, index) => (
          <div className="coverage-progress-item" key={item.id}>
            <div className={`coverage-progress-dot ${step >= item.id ? "active" : ""} ${step > item.id ? "complete" : ""}`}>{step > item.id ? <Check size={15} /> : item.id}</div>
            <span>{item.label}</span>
            {index < steps.length - 1 && <div className={`coverage-progress-line ${step > item.id ? "active" : ""}`} />}
          </div>
        ))}
      </div>

      <div className="coverage-flow-card">
        {step === 1 && (
          <div className="coverage-flow-step">
            <div className="coverage-input-icon"><MapPin size={21} /></div>
            <label htmlFor="coverage-cep">Qual é o CEP da instalação?</label>
            <span className="coverage-help">A consulta usa o CEP para localizar rua, bairro, cidade e estado.</span>
            <div className="coverage-main-input-row">
              <input id="coverage-cep" value={formatCep(cep)} onChange={(event) => setCep(event.target.value.replace(/\D/g, "").slice(0, 8))} onKeyDown={(event) => { if (event.key === "Enter") handleCep(); }} inputMode="numeric" autoComplete="postal-code" placeholder="00000-000" maxLength={9} autoFocus />
              <button className="pp-btn pp-btn-primary" type="button" onClick={handleCep} disabled={loading}>{loading ? <Loader2 className="pp-spin" size={18} /> : <Search size={18} />} {loading ? "Consultando..." : "Consultar CEP"}</button>
            </div>
            <a className="coverage-cep-help" href="https://buscacepinter.correios.com.br/app/endereco/index.php" target="_blank" rel="noreferrer">Não sabe seu CEP? Consulte pelos Correios.</a>
          </div>
        )}

        {step === 2 && address && (
          <div className="coverage-flow-step">
            <div className="coverage-address-confirm">
              <div className="coverage-address-icon"><Home size={21} /></div>
              <div><span>ENDEREÇO ENCONTRADO</span><strong>{address.street || "Endereço não informado"}</strong><p>{address.neighborhood || "Bairro não informado"} · {address.city}/{address.state}</p></div>
            </div>
            <div className="coverage-number-field">
              <label htmlFor="coverage-number">Número do imóvel</label>
              <input id="coverage-number" value={number} onChange={(event) => setNumber(event.target.value.replace(/\D/g, "").slice(0, 6))} onKeyDown={(event) => { if (event.key === "Enter") handleCoverage(); }} inputMode="numeric" autoComplete="address-line2" placeholder="Ex.: 143" autoFocus />
              <span>Precisamos do número para identificar o ponto de instalação.</span>
            </div>
            <div className="coverage-flow-actions"><button className="pp-btn pp-btn-ghost" type="button" onClick={() => { setAddress(null); setNumber(""); setError(""); setStep(1); }}><ArrowLeft size={17} /> Alterar CEP</button><button className="pp-btn pp-btn-primary" type="button" onClick={handleCoverage}>Verificar cobertura <ArrowRight size={17} /></button></div>
          </div>
        )}

        {step === 3 && coverage && (
          <div className={`coverage-flow-step coverage-final ${coverage.available ? "is-covered" : "is-uncovered"}`}>
            <div className="coverage-final-icon">{coverage.available ? <CheckCircle2 size={34} /> : <XCircle size={34} />}</div>
            <span className="coverage-final-label">{coverage.available ? "COBERTURA INDICADA" : "COBERTURA INDISPONÍVEL"}</span>
            <h3>{coverage.available ? "Seu endereço está dentro da área cadastrada." : "Ainda não temos fibra cadastrada neste endereço."}</h3>
            <p>{coverage.available ? `${address?.street}, ${number} · ${address?.neighborhood} · ${address?.city}/${address?.state}. ${matchText} A confirmação final de viabilidade pode depender da análise técnica da instalação.` : "Isso não impede você de demonstrar interesse. Nossa equipe pode orientar sobre disponibilidade futura e expansão da rede."}</p>
            <div className="coverage-flow-actions">
              <button className="pp-btn pp-btn-ghost" type="button" onClick={reset}>Consultar outro endereço</button>
              {coverage.available ? <button className="pp-btn pp-btn-primary" type="button" onClick={() => router.push(selectedPlan ? `/planos?selecionado=${selectedPlan.id}` : "/planos")}>{selectedPlan ? "Continuar com este plano" : "Escolher meu plano"} <ArrowRight size={17} /></button> : <a className="pp-btn pp-btn-primary" href="https://wa.me/5511987654321" target="_blank" rel="noreferrer">Falar com atendimento <ArrowRight size={17} /></a>}
            </div>
          </div>
        )}
      </div>

      {error && <div className="coverage-flow-error" role="alert">{error}</div>}
      <div className="coverage-flow-trust"><span>✓ Consulta gratuita</span><span>✓ Sem compromisso</span><span>✓ Resultado em segundos</span></div>
    </div>
  );
}

"use client";

import { useMemo, useState } from "react";
import { ArrowLeft, ArrowRight, Check, CheckCircle2, Home, Loader2, MapPin, Search, Wifi, XCircle } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { getAddressByCep } from "@/lib/cep";
import { checkCoverage } from "@/lib/coverage";
import { plans } from "@/data/plans";

type Address = Awaited<ReturnType<typeof getAddressByCep>>;
type Step = 1 | 2 | 3;

const steps = [
  { id: 1, label: "CEP" },
  { id: 2, label: "Endereço" },
  { id: 3, label: "Cobertura" },
] as const;

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
  const [covered, setCovered] = useState<boolean | null>(null);

  async function handleCep() {
    const cleanCep = cep.replace(/\D/g, "");
    setError("");
    setCovered(null);
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
    const result = checkCoverage(address);
    setCovered(result);
    setStep(3);
  }

  function reset() {
    setStep(1);
    setCep("");
    setAddress(null);
    setNumber("");
    setCovered(null);
    setError("");
  }

  return (
    <div className="coverage-flow">
      <div className="coverage-flow-top">
        <div className="coverage-flow-copy">
          <span className="coverage-flow-kicker"><Wifi size={14} /> CONSULTA DE COBERTURA</span>
          <h2>{step === 1 ? "Vamos começar pelo seu CEP." : step === 2 ? "Confirme seu endereço." : covered ? "Boas notícias: sua região está conectada." : "Ainda não chegamos aí."}</h2>
          <p>{step === 1 ? "É rápido e você não precisa saber o nome do plano para consultar." : step === 2 ? "Encontramos este endereço. Informe apenas o número do imóvel." : covered ? "Sua localização está dentro da nossa área de atendimento." : "Você pode deixar seu interesse registrado com nossa equipe."}</p>
        </div>
        {selectedPlan && (
          <div className="coverage-plan-context">
            <span>VOCÊ ESTÁ VENDO</span>
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
            <span className="coverage-help">Usaremos o CEP apenas para localizar seu endereço.</span>
            <div className="coverage-main-input-row">
              <input id="coverage-cep" value={cep} onChange={(event) => setCep(event.target.value.replace(/\D/g, "").slice(0, 8))} onKeyDown={(event) => { if (event.key === "Enter") handleCep(); }} inputMode="numeric" autoComplete="postal-code" placeholder="00000-000" maxLength={8} autoFocus />
              <button className="pp-btn pp-btn-primary" type="button" onClick={handleCep} disabled={loading}>{loading ? <Loader2 className="pp-spin" size={18} /> : <Search size={18} />} Consultar CEP</button>
            </div>
            <a className="coverage-cep-help" href="https://buscacepinter.correios.com.br/app/endereco/index.php" target="_blank" rel="noreferrer">Não sabe seu CEP? Consulte pelos Correios.</a>
          </div>
        )}

        {step === 2 && address && (
          <div className="coverage-flow-step">
            <div className="coverage-address-confirm">
              <div className="coverage-address-icon"><Home size={21} /></div>
              <div><span>ENDEREÇO ENCONTRADO</span><strong>{address.street}</strong><p>{address.neighborhood} · {address.city}/{address.state}</p></div>
            </div>
            <div className="coverage-number-field">
              <label htmlFor="coverage-number">Número do imóvel</label>
              <input id="coverage-number" value={number} onChange={(event) => setNumber(event.target.value.replace(/\D/g, "").slice(0, 6))} onKeyDown={(event) => { if (event.key === "Enter") handleCoverage(); }} inputMode="numeric" autoComplete="address-line2" placeholder="Ex.: 143" autoFocus />
            </div>
            <div className="coverage-flow-actions"><button className="pp-btn pp-btn-ghost" type="button" onClick={() => { setAddress(null); setStep(1); }}><ArrowLeft size={17} /> Alterar CEP</button><button className="pp-btn pp-btn-primary" type="button" onClick={handleCoverage}>Verificar cobertura <ArrowRight size={17} /></button></div>
          </div>
        )}

        {step === 3 && covered !== null && (
          <div className={`coverage-flow-step coverage-final ${covered ? "is-covered" : "is-uncovered"}`}>
            <div className="coverage-final-icon">{covered ? <CheckCircle2 size={34} /> : <XCircle size={34} />}</div>
            <span className="coverage-final-label">{covered ? "COBERTURA DISPONÍVEL" : "COBERTURA INDISPONÍVEL"}</span>
            <h3>{covered ? "Você pode contratar sua internet Parque Net." : "Ainda não temos fibra neste endereço."}</h3>
            <p>{covered ? "Seu endereço está em nossa área de atendimento. O próximo passo é escolher o plano que combina com sua rotina." : "Não significa que você ficará de fora. Nossa equipe pode registrar seu interesse e orientar sobre a expansão da rede."}</p>
            <div className="coverage-flow-actions">
              <button className="pp-btn pp-btn-ghost" type="button" onClick={reset}>Consultar outro endereço</button>
              {covered ? <button className="pp-btn pp-btn-primary" type="button" onClick={() => router.push(selectedPlan ? `/planos?selecionado=${selectedPlan.id}` : "/planos")}>{selectedPlan ? "Continuar com este plano" : "Escolher meu plano"} <ArrowRight size={17} /></button> : <a className="pp-btn pp-btn-primary" href="https://wa.me/5511987654321" target="_blank" rel="noreferrer">Falar com atendimento <ArrowRight size={17} /></a>}
            </div>
          </div>
        )}
      </div>

      {error && <div className="coverage-flow-error" role="alert">{error}</div>}
      <div className="coverage-flow-trust"><span>✓ Consulta gratuita</span><span>✓ Sem compromisso</span><span>✓ Resultado em segundos</span></div>
    </div>
  );
}

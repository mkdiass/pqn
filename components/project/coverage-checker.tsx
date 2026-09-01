"use client";

import { useEffect, useState } from "react";
import { ArrowRight, CheckCircle2, Loader2, MapPin, Search, XCircle } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { getAddressByCep } from "@/lib/cep";
import { checkCoverage } from "@/lib/coverage";
import { plans } from "@/data/plans";

export function CoverageChecker() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const selectedPlanId = searchParams.get("plano");
  const selectedPlan = plans.find((plan) => plan.id === selectedPlanId);
  const [cep, setCep] = useState("");
  const [number, setNumber] = useState("");
  const [address, setAddress] = useState<{ street: string; neighborhood: string; city: string; state: string } | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [result, setResult] = useState<boolean | null>(null);

  useEffect(() => {
    setResult(null);
    setError("");
  }, [cep]);

  async function search() {
    const clean = cep.replace(/\D/g, "");
    setError("");
    setResult(null);
    setAddress(null);
    if (clean.length !== 8) {
      setError("Digite um CEP válido com 8 números.");
      return;
    }
    setLoading(true);
    try {
      const data = await getAddressByCep(clean);
      if (!data) {
        setError("CEP não encontrado. Confira os números e tente novamente.");
        return;
      }
      setAddress(data);
    } catch {
      setError("Não foi possível consultar o CEP agora.");
    } finally {
      setLoading(false);
    }
  }

  function check() {
    if (!address) {
      setError("Consulte seu CEP primeiro.");
      return;
    }
    if (!number.trim()) {
      setError("Informe o número do endereço.");
      return;
    }
    setError("");
    setResult(checkCoverage(address));
  }

  return (
    <div className="coverage-checker">
      {selectedPlan && (
        <div className="coverage-selected-plan">
          <div><span>PLANO SELECIONADO</span><strong>{selectedPlan.name}</strong></div>
          <div className="coverage-selected-speed">{selectedPlan.speedMbps >= 1000 ? "1 Gbps" : `${selectedPlan.speedMbps} Mbps`}</div>
        </div>
      )}

      <div className="coverage-heading">
        <div className="pp-card-icon"><MapPin size={22} /></div>
        <div><strong>Consulte seu endereço</strong><span>Descubra quais planos estão disponíveis para você.</span></div>
      </div>

      <div className="coverage-search">
        <label htmlFor="cep">CEP</label>
        <div className="coverage-search-row">
          <input id="cep" value={cep} onChange={(event) => setCep(event.target.value.replace(/\D/g, "").slice(0, 8))} inputMode="numeric" autoComplete="postal-code" placeholder="00000-000" maxLength={8} />
          <button className="pp-btn pp-btn-primary" type="button" onClick={search} disabled={loading}>{loading ? <Loader2 className="pp-spin" size={18} /> : <Search size={18} />} Buscar</button>
        </div>
      </div>

      {address && (
        <div className="coverage-address">
          <span className="coverage-address-label">ENDEREÇO ENCONTRADO</span>
          <strong>{address.street}</strong>
          <p>{address.neighborhood} · {address.city}/{address.state}</p>
          <div className="coverage-number-row">
            <div><label htmlFor="number">Número</label><input id="number" value={number} onChange={(event) => setNumber(event.target.value.replace(/\D/g, ""))} inputMode="numeric" autoComplete="street-address" placeholder="Ex.: 143" /></div>
            <button className="pp-btn pp-btn-primary" type="button" onClick={check}>Verificar cobertura <ArrowRight size={17} /></button>
          </div>
        </div>
      )}

      {error && <p className="coverage-error" role="alert">{error}</p>}

      {result !== null && (
        <div className={`coverage-result ${result ? "available" : "unavailable"}`} role="status">
          {result ? <CheckCircle2 size={26} /> : <XCircle size={26} />}
          <div>
            <strong>{result ? "Temos cobertura no seu endereço." : "Ainda não temos cobertura neste endereço."}</strong>
            <p>{result ? "Ótima notícia. Você já pode seguir para a escolha do seu plano." : "Cadastre seu interesse com nosso atendimento e acompanhe a expansão da rede."}</p>
            {result ? <button className="pp-btn pp-btn-primary" type="button" onClick={() => router.push(selectedPlan ? `/planos?selecionado=${selectedPlan.id}` : "/planos")}>{selectedPlan ? "Continuar contratação" : "Ver planos"} <ArrowRight size={16} /></button> : <a className="pp-btn pp-btn-ghost" style={{ color: "#081522", border: "1px solid #dce3ea" }} href="https://wa.me/5511987654321">Falar com atendimento</a>}
          </div>
        </div>
      )}
    </div>
  );
}

"use client";

import { FormEvent, useState } from "react";
import { ArrowDown, MapPin, Search, ShieldCheck, Zap } from "lucide-react";

type CoverageHeroProps = {
  onStartConsultation: (cep: string) => void;
};

export function CoverageHero({ onStartConsultation }: CoverageHeroProps) {
  const [cep, setCep] = useState("");

  function formatCep(value: string) {
    const numbers = value.replace(/\D/g, "").slice(0, 8);

    if (numbers.length > 5) {
      return `${numbers.slice(0, 5)}-${numbers.slice(5)}`;
    }

    return numbers;
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const cleanCep = cep.replace(/\D/g, "");

    if (cleanCep.length !== 8) {
      return;
    }

    onStartConsultation(cleanCep);
  }

  return (
    <section className="coverage-hero">
      <div className="coverage-hero-background" />

      <div className="coverage-hero-container">
        <div className="coverage-hero-content">
          <span className="coverage-hero-label">
            COBERTURA PARQUE NET
          </span>

          <h1>
            Sua casa está
            <br />
            <span>na nossa rede?</span>
          </h1>

          <p>
            Consulte agora se a Parque Net está disponível no seu endereço
            e descubra os planos de internet que podemos oferecer para você.
          </p>

          <div className="coverage-hero-features">
            <div>
              <div className="coverage-feature-icon">
                <MapPin size={20} />
              </div>

              <div>
                <strong>Consulte seu endereço</strong>
                <small>CEP, rua e número</small>
              </div>
            </div>

            <div>
              <div className="coverage-feature-icon">
                <Zap size={20} />
              </div>

              <div>
                <strong>Fibra óptica</strong>
                <small>Conexão de alta velocidade</small>
              </div>
            </div>

            <div>
              <div className="coverage-feature-icon">
                <ShieldCheck size={20} />
              </div>

              <div>
                <strong>Consulta rápida</strong>
                <small>Resultado em poucos segundos</small>
              </div>
            </div>
          </div>

          <form className="coverage-hero-quick-search" onSubmit={handleSubmit}>
            <div className="coverage-hero-quick-search-field">
              <Search size={18} />
              <input
                type="text"
                inputMode="numeric"
                placeholder="Digite seu CEP"
                value={cep}
                onChange={(event) => setCep(formatCep(event.target.value))}
                maxLength={9}
                aria-label="CEP para consultar cobertura"
              />
            </div>

            <button
              type="submit"
              disabled={cep.replace(/\D/g, "").length !== 8}
            >
              Consultar
              <ArrowDown size={17} />
            </button>
          </form>
        </div>

        <div className="coverage-hero-visual">
          <div className="coverage-map-card">
            <iframe
              title="Localização da Parque Net Telecom"
              src="https://www.google.com/maps?q=Parque+Net+Telecom,+R.+Max+Satzke,+05,+Parque+Santo+Antonio,+S%C3%A3o+Paulo+-+SP,+05851-290&output=embed"
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />

            <div className="coverage-map-overlay">
              <div className="coverage-map-overlay-icon">
                <MapPin size={18} />
              </div>

              <div>
                <strong>Parque Net Telecom</strong>
                <span>São Paulo · SP</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

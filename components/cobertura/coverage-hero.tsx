"use client";

import { FormEvent, useState } from "react";
import {
  ArrowDown,
  MapPin,
  Search,
  ShieldCheck,
  Zap,
} from "lucide-react";

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
    <>
      <style>{`
        .coverage-hero-quick-search {
          display: flex;
          align-items: center;
          gap: 10px;
          max-width: 570px;
          margin-top: 28px;
          padding: 6px;
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 11px;
          background: rgba(255, 255, 255, 0.055);
          backdrop-filter: blur(10px);
        }

        .coverage-hero-quick-search-field {
          min-width: 0;
          flex: 1;
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 0 13px;
          color: #9eabba;
        }

        .coverage-hero-quick-search-field input {
          width: 100%;
          height: 44px;
          border: 0;
          outline: 0;
          background: transparent;
          color: white;
          font-family: inherit;
          font-size: 14px;
        }

        .coverage-hero-quick-search-field input::placeholder {
          color: #8f9baa;
        }

        .coverage-hero-quick-search button {
          height: 44px;
          padding: 0 17px;
          border: 0;
          border-radius: 8px;
          background: var(--orange);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          font-family: inherit;
          font-size: 13px;
          font-weight: 800;
          cursor: pointer;
          transition: transform 0.2s ease, background 0.2s ease, opacity 0.2s ease;
        }

        .coverage-hero-quick-search button:hover:not(:disabled) {
          background: var(--orange-light);
          transform: translateY(-1px);
        }

        .coverage-hero-quick-search button:disabled {
          opacity: 0.45;
          cursor: not-allowed;
        }

        .coverage-map-card {
          position: relative;
        }

        .coverage-map-card iframe {
          position: absolute;
          inset: 0;
          z-index: 0;
          width: 100%;
          height: 100%;
          border: 0;
          filter: saturate(0.78) contrast(1.04);
        }

        .coverage-map-card::before,
        .coverage-map-card::after {
          pointer-events: none;
        }

        .coverage-map-overlay {
          position: absolute;
          z-index: 4;
          left: 18px;
          bottom: 18px;
          display: flex;
          align-items: center;
          gap: 10px;
          max-width: calc(100% - 36px);
          padding: 10px 13px;
          border: 1px solid rgba(255, 255, 255, 0.14);
          border-radius: 11px;
          background: rgba(3, 16, 34, 0.86);
          color: white;
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.25);
          backdrop-filter: blur(10px);
        }

        .coverage-map-overlay-icon {
          width: 34px;
          height: 34px;
          flex-shrink: 0;
          border-radius: 9px;
          background: var(--orange);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .coverage-map-overlay strong,
        .coverage-map-overlay span {
          display: block;
        }

        .coverage-map-overlay strong {
          font-size: 12px;
          font-weight: 800;
        }

        .coverage-map-overlay span {
          margin-top: 2px;
          color: #aeb9c8;
          font-size: 10px;
        }

        @media (max-width: 1100px) {
          .coverage-hero-visual {
            display: flex;
            width: 100%;
          }

          .coverage-map-card {
            max-width: 650px;
            margin: 0 auto;
          }
        }

        @media (max-width: 750px) {
          .coverage-hero-quick-search {
            width: 100%;
            max-width: none;
            margin-top: 25px;
          }

          .coverage-hero-quick-search button {
            padding: 0 14px;
          }

          .coverage-hero-visual {
            margin-top: 0;
          }

          .coverage-map-card {
            aspect-ratio: 1.15 / 0.9;
          }

          .coverage-map-overlay {
            left: 12px;
            bottom: 12px;
            max-width: calc(100% - 24px);
          }
        }
      `}</style>

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
    </>
  );
}

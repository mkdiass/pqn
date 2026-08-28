import { MapPin, ShieldCheck, Zap } from "lucide-react";

export function CoverageHero() {
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
            Consulte agora se a Parque Net está disponível
            no seu endereço e descubra os planos de internet
            que podemos oferecer para você.
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

        </div>

        <div className="coverage-hero-visual">

          <div className="coverage-map-card">

            <div className="coverage-map-grid" />

            <div className="coverage-map-content">

              <div className="coverage-map-pin">
                <MapPin size={28} />
              </div>

              <strong>
                Consulte a cobertura
              </strong>

              <span>
                Descubra se atendemos seu endereço
              </span>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
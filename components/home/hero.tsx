import Link from "next/link";
import { ArrowRight, Headphones, Gauge, Wifi } from "lucide-react";

export function Hero() {
  return (
    <section className="hero">
      <div className="hero-background" />

      <div className="hero-content">
        <div className="hero-text">
          <span className="hero-label">PARQUE NET TELECOM</span>

          <h1>
            Sua conexão.
            <br />
            <span>No seu ritmo.</span>
          </h1>

          <p>
            Internet <strong>100% fibra óptica</strong> para trabalhar,
            jogar, assistir e viver conectado.
          </p>

          <div className="hero-buttons">
            <Link href="#contratar" className="primary-button">
              Encontrar meu plano
              <ArrowRight size={20} />
            </Link>

            <Link href="/cobertura" className="secondary-button">
              Consultar cobertura
              <ArrowRight size={20} />
            </Link>
          </div>

          <div className="hero-features">
            <div>
              <Gauge />
              <span>
                Mais velocidade
                <small>para o dia a dia</small>
              </span>
            </div>

            <div>
              <Wifi />
              <span>
                Conexão estável
                <small>sempre</small>
              </span>
            </div>

            <div>
              <Headphones />
              <span>
                Atendimento
                <small>próximo e humanizado</small>
              </span>
            </div>
          </div>
        </div>

        <div className="hero-video">
          <div className="video-placeholder">
            <div className="play-button">▶</div>
            <span>ASSISTA À APRESENTAÇÃO</span>
          </div>
        </div>
      </div>
    </section>
  );
}

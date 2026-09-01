import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";

export function Company() {
  return (
    <section className="company">
      <div className="company-container">
        <div className="company-video" aria-label="Vídeo institucional Parque Net">
          <video
            src="/videos/parque-net.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          />
          <div className="company-video-overlay" />
          <div className="company-play" aria-hidden="true">
            <Play size={22} fill="currentColor" />
          </div>
        </div>

        <div className="company-content">
          <span>CONHEÇA A PARQUE NET</span>

          <h2>
            Muito mais que
            <br />
            uma internet.
          </h2>

          <p>
            Somos uma empresa que acredita que conexão é muito mais
            do que velocidade. É estar perto, trabalhar, estudar,
            se divertir e compartilhar momentos.
          </p>

          <p>
            Conheça nossa estrutura, nossa equipe e descubra como
            a Parque Net trabalha todos os dias para levar fibra
            óptica até você.
          </p>

          <Link href="/empresas" className="company-button">
            Conheça nossa história
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
}

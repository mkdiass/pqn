import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Company() {
  return (
    <section className="company">

      <div className="company-container">

        <div className="company-video">
          <div className="company-play">
            ▶
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

          <Link href="/empresa" className="company-button">
            Conheça nossa história
            <ArrowRight size={20} />
          </Link>

        </div>

      </div>

    </section>
  );
}
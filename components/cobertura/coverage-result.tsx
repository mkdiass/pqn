"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2, MessageCircle, MapPin } from "lucide-react";

type CoverageResultProps = {
  hasCoverage: boolean;
  selectedPlan?: string;
};

export function CoverageResult({ hasCoverage, selectedPlan }: CoverageResultProps) {
  if (hasCoverage) {
    return (
      <section id="coverage-result" className="coverage-result coverage-result-success" aria-live="polite">
        <div className="coverage-result-icon">
          <CheckCircle2 size={30} />
        </div>

        <div className="coverage-result-content">
          <span>BOA NOTÍCIA!</span>
          <h2>Temos cobertura no seu endereço.</h2>
          <p>
            A Parque Net está disponível para você.
            {selectedPlan
              ? ` O plano de ${selectedPlan} Mega está pronto para continuar sua contratação.`
              : " Agora você pode escolher o plano ideal para sua casa."}
          </p>

          <div className="coverage-result-next">
            <MapPin size={17} />
            <span>Próximo passo: finalizar seus dados e falar com nossa equipe.</span>
          </div>

          <Link
            href={selectedPlan ? `/contratar?plano=${selectedPlan}&cobertura=ok` : "/planos"}
            className="coverage-result-button"
          >
            {selectedPlan ? "Continuar contratação" : "Ver planos disponíveis"}
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section id="coverage-result" className="coverage-result coverage-result-unavailable" aria-live="polite">
      <div className="coverage-result-icon">!</div>

      <div className="coverage-result-content">
        <span>AINDA NÃO CHEGAMOS AÍ</span>
        <h2>Não encontramos cobertura neste endereço.</h2>
        <p>
          A rede ainda não está disponível neste local. Nossa equipe pode verificar sua região e registrar seu interesse para futuras expansões.
        </p>

        <a
          href="https://wa.me/5511973587469?text=Ol%C3%A1%2C%20quero%20saber%20quando%20a%20Parque%20Net%20ter%C3%A1%20cobertura%20no%20meu%20endere%C3%A7o."
          target="_blank"
          rel="noopener noreferrer"
          className="coverage-result-button"
        >
          <MessageCircle size={18} />
          Falar com a Parque Net
        </a>
      </div>
    </section>
  );
}

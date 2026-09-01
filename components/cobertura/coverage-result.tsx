import Link from "next/link";

type CoverageResultProps = {
  hasCoverage: boolean;
  selectedPlan?: string;
};

export function CoverageResult({ hasCoverage, selectedPlan }: CoverageResultProps) {
  if (hasCoverage) {
    return (
      <section id="coverage-result" className="coverage-result coverage-result-success">
        <div className="coverage-result-icon">✓</div>

        <div className="coverage-result-content">
          <span>BOA NOTÍCIA!</span>

          <h2>Temos cobertura no seu endereço.</h2>

          <p>
            A Parque Net está disponível para você.
            {selectedPlan
              ? ` O plano de ${selectedPlan} Mega continua reservado na sua jornada.`
              : " Agora você pode escolher o plano ideal para sua casa."}
          </p>

          <Link
            href={
              selectedPlan
                ? `/contratar?plano=${selectedPlan}&cobertura=ok`
                : "/planos"
            }
            className="coverage-result-button"
          >
            {selectedPlan ? "Continuar contratação" : "Ver planos disponíveis"}
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section id="coverage-result" className="coverage-result coverage-result-unavailable">
      <div className="coverage-result-icon">!</div>

      <div className="coverage-result-content">
        <span>AINDA NÃO CHEGAMOS AÍ</span>

        <h2>Não encontramos cobertura neste endereço.</h2>

        <p>
          A rede ainda não está disponível neste local. Se quiser, fale com nossa equipe para verificar alternativas e receber um aviso quando houver expansão.
        </p>

        <a
          href="https://wa.me/5511973587469?text=Ol%C3%A1%2C%20quero%20saber%20quando%20a%20Parque%20Net%20ter%C3%A1%20cobertura%20no%20meu%20endere%C3%A7o."
          target="_blank"
          rel="noopener noreferrer"
          className="coverage-result-button"
        >
          Falar com a Parque Net
        </a>
      </div>
    </section>
  );
}

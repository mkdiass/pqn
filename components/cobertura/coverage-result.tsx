type CoverageResultProps = {
  hasCoverage: boolean;
};

export function CoverageResult({
  hasCoverage,
}: CoverageResultProps) {
  if (hasCoverage) {
    return (
      <section className="coverage-result coverage-result-success">

        <div className="coverage-result-icon">
          ✓
        </div>

        <div className="coverage-result-content">

          <span>BOA NOTÍCIA!</span>

          <h2>
            Temos cobertura no seu endereço.
          </h2>

          <p>
            A Parque Net está disponível para você.
            Confira os planos disponíveis e escolha
            a melhor opção para sua casa.
          </p>

          <a
            href="/planos"
            className="coverage-result-button"
          >
            Ver planos disponíveis
          </a>

        </div>

      </section>
    );
  }

  return (
    <section className="coverage-result coverage-result-unavailable">

      <div className="coverage-result-icon">
        !
      </div>

      <div className="coverage-result-content">

        <span>AINDA NÃO CHEGAMOS AÍ</span>

        <h2>
          Não encontramos cobertura neste endereço.
        </h2>

        <p>
          Mas podemos avisar você quando a Parque Net
          estiver disponível na sua região.
        </p>

        <button
          type="button"
          className="coverage-result-button"
        >
          Quero ser avisado
        </button>

      </div>

    </section>
  );
}
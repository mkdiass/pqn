import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";

type CoverageResultProps = {
  hasCoverage: boolean;
  selectedPlan?: { speed: string; price: string } | null;
  address?: string;
};

export function CoverageResult({ hasCoverage, selectedPlan, address = "" }: CoverageResultProps) {
  const planText = selectedPlan
    ? `${selectedPlan.speed} Mega por R$ ${selectedPlan.price}/mês`
    : "um plano de internet";

  const message = encodeURIComponent(
    hasCoverage
      ? `Olá, Parque Net! Consultei a cobertura e quero continuar com ${planText}. Endereço: ${address}.`
      : `Olá, Parque Net! Consultei a cobertura, mas meu endereço ainda não está disponível. Gostaria de ser avisado quando houver cobertura. Endereço: ${address}.`
  );

  if (hasCoverage) {
    return (
      <section className="coverage-result coverage-result-success">
        <div className="coverage-result-icon">✓</div>
        <div className="coverage-result-content">
          <span>BOA NOTÍCIA!</span>
          <h2>Temos cobertura no seu endereço.</h2>
          <p>
            A Parque Net está disponível para você.
            {selectedPlan
              ? ` O plano de ${selectedPlan.speed} Mega já ficou separado para continuar sua contratação.`
              : " Confira os planos disponíveis e escolha a melhor opção para sua casa."}
          </p>

          <div className="pn-actions">
            {selectedPlan ? (
              <a
                href={`https://wa.me/5511973587469?text=${message}`}
                target="_blank"
                rel="noopener noreferrer"
                className="coverage-result-button"
              >
                <MessageCircle size={18} />
                Continuar contratação
              </a>
            ) : (
              <Link href="/planos" className="coverage-result-button">
                Ver planos disponíveis <ArrowRight size={18} />
              </Link>
            )}

            <Link
              href={selectedPlan ? `/planos?selecionado=${encodeURIComponent(selectedPlan.speed)}#planos` : "/planos"}
              className="pn-btn pn-btn-outline"
            >
              {selectedPlan ? "Trocar plano" : "Ver planos"}
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="coverage-result coverage-result-unavailable">
      <div className="coverage-result-icon">!</div>
      <div className="coverage-result-content">
        <span>AINDA NÃO CHEGAMOS AÍ</span>
        <h2>Não encontramos cobertura neste endereço.</h2>
        <p>
          Sua consulta foi concluída, mas não encontramos disponibilidade para este endereço.
          Você pode falar com nossa equipe para registrar seu interesse.
        </p>
        <a
          href={`https://wa.me/5511973587469?text=${message}`}
          target="_blank"
          rel="noopener noreferrer"
          className="coverage-result-button"
        >
          <MessageCircle size={18} />
          Quero ser avisado
        </a>
      </div>
    </section>
  );
}

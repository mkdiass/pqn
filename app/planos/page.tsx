import { Navbar } from "@/components/layout/navbar";
import { PlansHero } from "@/components/planos/plans-hero";
import { PlansGrid } from "@/components/planos/plans-grid";
import { PlansBenefits } from "@/components/planos/plans-benefits";
import { PlansCta } from "@/components/planos/plans-cta";

export default function PlansPage() {
  return (
    <>
      <Navbar />
      <main>
        <PlansHero />
        <section className="pn-flow-strip" aria-label="Jornada de contratação">
          <div className="pn-flow">
            <div className="pn-flow-step active"><strong>1. Escolha seu plano</strong>Compare velocidades e valores.</div>
            <div className="pn-flow-step"><strong>2. Verifique a cobertura</strong>Confirme seu endereço.</div>
            <div className="pn-flow-step"><strong>3. Continue a contratação</strong>Fale com nossa equipe.</div>
          </div>
        </section>
        <PlansGrid />
        <PlansBenefits />
        <PlansCta />
      </main>
    </>
  );
}

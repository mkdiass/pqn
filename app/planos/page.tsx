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
        <PlansGrid />
        <PlansBenefits />
        <PlansCta />
      </main>
    </>
  );
}
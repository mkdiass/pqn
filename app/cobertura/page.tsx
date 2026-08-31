"use client";

import { useState } from "react";
import { Navbar } from "@/components/layout/navbar";
import { CoverageHero } from "@/components/cobertura/coverage-hero";
import { CoverageForm } from "@/components/cobertura/coverage-form";

export default function CoveragePage() {
  const [heroCep, setHeroCep] = useState("");
  const [heroRequest, setHeroRequest] = useState(0);

  function handleStartConsultation(cep: string) {
    setHeroCep(cep);
    setHeroRequest((current) => current + 1);
  }

  return (
    <>
      <Navbar />
      <main>
        <CoverageHero onStartConsultation={handleStartConsultation} />
        <section className="pn-flow-strip" aria-label="Etapas da contratação">
          <div className="pn-flow">
            <div className="pn-flow-step active"><strong>1. Verifique a cobertura</strong>Digite seu CEP e número.</div>
            <div className="pn-flow-step"><strong>2. Escolha seu plano</strong>Veja as opções disponíveis.</div>
            <div className="pn-flow-step"><strong>3. Continue a contratação</strong>Fale com nossa equipe.</div>
          </div>
        </section>
        <CoverageForm initialCep={heroCep} autoSearchToken={heroRequest} />
      </main>
    </>
  );
}

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

        <CoverageForm
          initialCep={heroCep}
          autoSearchToken={heroRequest}
        />
      </main>
    </>
  );
}

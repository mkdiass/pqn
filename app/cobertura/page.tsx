import type { Metadata } from "next";
import { Suspense } from "react";
import { SiteShell } from "@/components/project/site-shell";
import { CoverageFlow } from "@/components/project/coverage-flow";
import { Reveal } from "@/components/project/reveal";

export const metadata: Metadata = {
  title: "Cobertura | Parque Net",
  description: "Consulte sua cobertura de internet fibra óptica Parque Net pelo CEP.",
};

function CoverageFallback() {
  return <div className="coverage-flow-loading" aria-live="polite"><span /> Preparando sua consulta…</div>;
}

export default function CoveragePage() {
  return (
    <SiteShell>
      <section className="pp-page-hero coverage-page-hero">
        <div className="pp-page-hero-inner">
          <span className="pp-eyebrow"><i /> COBERTURA PARQUE NET</span>
          <h1>Descubra se a<br /><em>fibra já chegou.</em></h1>
          <p>Consulte seu endereço em poucos passos. Primeiro encontramos seu endereço pelo CEP; depois verificamos a disponibilidade da nossa rede.</p>
        </div>
      </section>
      <section className="pp-section pp-section-muted coverage-section">
        <div className="pp-container">
          <Reveal>
            <Suspense fallback={<CoverageFallback />}>
              <CoverageFlow />
            </Suspense>
          </Reveal>
        </div>
      </section>
    </SiteShell>
  );
}

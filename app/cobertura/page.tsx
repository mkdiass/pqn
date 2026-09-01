import { SiteShell } from "@/components/project/site-shell";
import { CoverageChecker } from "@/components/project/coverage-checker";
import { Reveal } from "@/components/project/reveal";

export default function CoveragePage(){return <SiteShell><section className="pp-page-hero"><div className="pp-page-hero-inner"><span className="pp-eyebrow"><i/> COBERTURA PARQUE NET</span><h1>Sua casa pode estar<br/><em>mais perto do que você imagina.</em></h1><p>Digite seu CEP, confirme o endereço e descubra em poucos segundos se nossa fibra já chegou até você.</p></div></section><section className="pp-section pp-section-muted"><div className="pp-container"><Reveal><CoverageChecker/></Reveal></div></section></SiteShell>}

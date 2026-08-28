import { Navbar } from "@/components/layout/navbar";
import { CoverageHero } from "@/components/cobertura/coverage-hero";
import { CoverageForm } from "@/components/cobertura/coverage-form";

export default function CoveragePage() {
  return (
    <>
      <Navbar />

      <main>
        <CoverageHero />
        <CoverageForm />
      </main>
    </>
  );
}
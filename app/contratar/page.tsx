import { Suspense } from "react";

import { Navbar } from "@/components/layout/navbar";
import { ContractWizard } from "@/components/contratar/contract-wizard";

export default function ContractPage() {
  return (
    <>
      <Navbar />
      <main>
        <Suspense fallback={<div className="contract-loading">Carregando sua contratação...</div>}>
          <ContractWizard />
        </Suspense>
      </main>
    </>
  );
}

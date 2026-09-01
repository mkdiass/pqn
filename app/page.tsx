import { Navbar } from "@/components/layout/navbar";
import { Hero } from "@/components/home/hero";
import { Benefits } from "@/components/home/benefits";
import { TrustStats } from "@/components/home/trust-stats";
import { Plans } from "@/components/home/plans";
import { Company } from "@/components/home/company";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Benefits />
        <TrustStats />
        <Plans />
        <Company />
      </main>
    </>
  );
}

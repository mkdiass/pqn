import { Navbar } from "@/components/layout/navbar";
import { Hero } from "@/components/home/hero";
import { NetworkShowcase } from "@/components/home/network-showcase";
import { SmartContract } from "@/components/home/smart-contract";
import { Benefits } from "@/components/home/benefits";
import { Plans } from "@/components/home/plans";
import { Company } from "@/components/home/company";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <NetworkShowcase />
        <SmartContract />
        <Benefits />
        <Plans />
        <Company />
      </main>
    </>
  );
}

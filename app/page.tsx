import Link from "next/link";
import { ArrowRight, MapPin, MessageCircle } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Hero } from "@/components/home/hero";
import { Benefits } from "@/components/home/benefits";
import { Plans } from "@/components/home/plans";
import { Company } from "@/components/home/company";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Benefits />
        <Plans />
        <Company />

        <section className="pn-final-cta">
          <div className="pn-final-cta-inner">
            <span className="pn-eyebrow">PRONTO PARA CONECTAR?</span>
            <h2>Sua próxima conexão começa pelo seu endereço.</h2>
            <p>Consulte a disponibilidade da Parque Net, escolha a velocidade ideal e continue a contratação com nossa equipe.</p>
            <div className="pn-actions">
              <Link href="/cobertura" className="pn-btn pn-btn-primary"><MapPin size={17} />Consultar cobertura</Link>
              <Link href="/planos" className="pn-btn pn-btn-outline">Ver planos <ArrowRight size={17} /></Link>
              <a href="https://wa.me/5511973587469?text=Ol%C3%A1%2C%20quero%20conhecer%20a%20Parque%20Net." target="_blank" rel="noopener noreferrer" className="pn-btn pn-btn-outline"><MessageCircle size={17} />Falar no WhatsApp</a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

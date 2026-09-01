import { ArrowRight, Building2, Cloud, Headphones, Network, ShieldCheck, Wifi } from "lucide-react";
import Link from "next/link";
import { Navbar } from "@/components/layout/navbar";

const solutions = [
  { icon: Network, title: "Internet para sua operação", text: "Conectividade estável para sistemas, equipes, atendimento e rotinas que não podem parar." },
  { icon: ShieldCheck, title: "Mais segurança", text: "Uma estrutura preparada para ambientes que precisam de estabilidade e controle de acesso." },
  { icon: Cloud, title: "Trabalho conectado", text: "Videoconferências, sistemas em nuvem e arquivos online com uma conexão consistente." },
  { icon: Headphones, title: "Atendimento próximo", text: "Fale com uma equipe que entende a sua operação e ajuda a resolver rapidamente." },
];

export default function EmpresasPage() {
  return (
    <>
      <Navbar />
      <main className="pn-marketing">
        <section className="pn-inner-hero">
          <div className="pn-inner-hero-grid">
            <div>
              <span className="pn-eyebrow">PARQUE NET EMPRESAS</span>
              <h1>Internet que acompanha o ritmo <span>do seu negócio.</span></h1>
              <p>Conectividade de alta performance para empresas que precisam de estabilidade, agilidade e atendimento próximo.</p>
              <div className="pn-actions">
                <Link href="/cobertura" className="pn-btn pn-btn-primary">Consultar disponibilidade <ArrowRight size={17} /></Link>
                <a href="https://wa.me/5511973587469?text=Ol%C3%A1%2C%20quero%20conhecer%20as%20solu%C3%A7%C3%B5es%20empresariais%20da%20Parque%20Net." target="_blank" rel="noopener noreferrer" className="pn-btn pn-btn-outline">Falar com especialista</a>
              </div>
            </div>
            <div className="pn-hero-panel">
              <div className="pn-hero-panel-grid">
                <div className="pn-stat"><Building2 size={20} /><strong>100%</strong><span>fibra óptica</span></div>
                <div className="pn-stat"><Wifi size={20} /><strong>Alta</strong><span>estabilidade de conexão</span></div>
                <div className="pn-stat"><Headphones size={20} /><strong>Próximo</strong><span>atendimento especializado</span></div>
                <div className="pn-stat"><ShieldCheck size={20} /><strong>Seguro</strong><span>estrutura para sua operação</span></div>
              </div>
            </div>
          </div>
        </section>

        <section className="pn-section">
          <div className="pn-container pn-center">
            <span className="pn-eyebrow">SOLUÇÕES</span>
            <h2 className="pn-title">Sua empresa precisa de uma rede que <span>não atrapalhe.</span></h2>
            <p className="pn-lead">Da pequena operação ao negócio com vários dispositivos conectados, montamos a experiência pensando no que sua equipe realmente usa.</p>
            <div className="pn-card-grid">
              {solutions.map(({ icon: Icon, title, text }) => (
                <article className="pn-card" key={title}><div className="pn-card-icon"><Icon size={22} /></div><h3>{title}</h3><p>{text}</p></article>
              ))}
            </div>
          </div>
        </section>

        <section className="pn-section pn-dark-section">
          <div className="pn-container">
            <span className="pn-eyebrow">POR QUE PARQUE NET?</span>
            <h2 className="pn-title">Mais conexão. <span>Menos preocupação.</span></h2>
            <div className="pn-card-grid pn-numbered">
              <article className="pn-card"><h3>Velocidade para produtividade</h3><p>Uma conexão preparada para sistemas corporativos, reuniões, atendimento e múltiplos dispositivos.</p><ul><li>Fibra óptica</li><li>Alta estabilidade</li><li>Baixa fricção no dia a dia</li></ul></article>
              <article className="pn-card"><h3>Atendimento humano</h3><p>Quando sua empresa precisa de ajuda, você fala com pessoas e não fica perdido em uma jornada interminável.</p><ul><li>Suporte próximo</li><li>Orientação técnica</li><li>Atendimento ágil</li></ul></article>
              <article className="pn-card"><h3>Plano sob medida</h3><p>Escolha uma velocidade coerente com o tamanho da equipe e a rotina do seu negócio.</p><ul><li>Dimensionamento</li><li>Escalabilidade</li><li>Conectividade contínua</li></ul></article>
            </div>
          </div>
        </section>

        <section className="pn-section">
          <div className="pn-container">
            <span className="pn-eyebrow">COMECE AGORA</span>
            <h2 className="pn-title">Quer conversar sobre a conexão da <span>sua empresa?</span></h2>
            <p className="pn-lead">Consulte a disponibilidade para o endereço da empresa ou fale diretamente com nossa equipe comercial.</p>
            <div className="pn-actions"><Link href="/cobertura" className="pn-btn pn-btn-primary">Ver disponibilidade</Link><a href="https://wa.me/5511973587469?text=Ol%C3%A1%2C%20quero%20uma%20proposta%20para%20minha%20empresa." target="_blank" rel="noopener noreferrer" className="pn-btn pn-btn-dark">Solicitar proposta</a></div>
          </div>
        </section>
      </main>
    </>
  );
}

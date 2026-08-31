"use client";

import { useMemo, useState } from "react";
import { ArrowRight, FileText, Headphones, MessageCircle, Search, Wifi, Zap } from "lucide-react";
import Link from "next/link";
import { Navbar } from "@/components/layout/navbar";

const faqs = [
  ["Como consulto a cobertura?", "Acesse a área de cobertura, informe seu CEP, confira o endereço e digite o número do imóvel para verificarmos a disponibilidade."],
  ["Quanto tempo leva a instalação?", "Depois da confirmação da contratação, nossa equipe orienta a agenda e os próximos passos para a instalação."],
  ["Posso mudar de plano?", "Sim. Entre em contato com nossa equipe para verificar as opções e a disponibilidade técnica para o seu endereço."],
  ["Como faço para falar com o suporte?", "Você pode usar o WhatsApp ou os canais de atendimento indicados nesta página para falar com nossa equipe."],
  ["Quais formas de pagamento estão disponíveis?", "Nossa equipe informa as condições e meios de pagamento disponíveis no momento da contratação."],
  ["A conexão é 100% fibra óptica?", "Os planos apresentados no site são de internet 100% fibra óptica, sujeitos à disponibilidade técnica no endereço."],
];

const options = [
  { icon: MessageCircle, title: "WhatsApp", text: "Fale diretamente com nossa equipe.", href: "https://wa.me/5511973587469" },
  { icon: Headphones, title: "Atendimento", text: "Precisa de ajuda com seu serviço? Estamos aqui.", href: "tel:+551151984646" },
  { icon: FileText, title: "Área do cliente", text: "Acesse sua central e acompanhe seus serviços.", href: "/cliente" },
  { icon: Wifi, title: "Cobertura", text: "Descubra se a fibra chega ao seu endereço.", href: "/cobertura" },
];

export default function SuportePage() {
  const [query, setQuery] = useState("");
  const filteredFaqs = useMemo(() => faqs.filter(([question, answer]) => `${question} ${answer}`.toLowerCase().includes(query.toLowerCase())), [query]);

  return (
    <>
      <Navbar />
      <main className="pn-marketing">
        <section className="pn-inner-hero"><div className="pn-inner-hero-grid">
          <div><span className="pn-eyebrow">CENTRAL DE SUPORTE</span><h1>Precisou de ajuda? <span>Estamos aqui.</span></h1><p>Encontre rapidamente o caminho certo para sua dúvida, atendimento ou consulta de cobertura.</p><div className="pn-actions"><a href="https://wa.me/5511973587469" target="_blank" rel="noopener noreferrer" className="pn-btn pn-btn-primary">Falar no WhatsApp <MessageCircle size={17} /></a><Link href="/cobertura" className="pn-btn pn-btn-outline">Consultar cobertura</Link></div></div>
          <div className="pn-hero-panel"><div className="pn-hero-panel-grid"><div className="pn-stat"><Zap size={20} /><strong>Rápido</strong><span>encontre o canal certo</span></div><div className="pn-stat"><Headphones size={20} /><strong>Humano</strong><span>atendimento próximo</span></div><div className="pn-stat"><Wifi size={20} /><strong>Fibra</strong><span>internet 100% óptica</span></div><div className="pn-stat"><Search size={20} /><strong>Fácil</strong><span>busque sua dúvida</span></div></div></div>
        </div></section>

        <section className="pn-section"><div className="pn-container pn-center"><span className="pn-eyebrow">COMO PODEMOS AJUDAR?</span><h2 className="pn-title">Escolha o <span>atendimento</span> que precisa.</h2><div className="pn-support-grid">{options.map(({ icon: Icon, title, text, href }) => <article className="pn-support-card" key={title}><div className="pn-card-icon"><Icon size={21} /></div><h3>{title}</h3><p>{text}</p><a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined}>Acessar <ArrowRight size={14} /></a></article>)}</div></div></section>

        <section className="pn-section" id="faq"><div className="pn-container"><div className="pn-center"><span className="pn-eyebrow">DÚVIDAS FREQUENTES</span><h2 className="pn-title">Encontre a resposta <span>mais rápido.</span></h2><div className="pn-support-search"><Search size={19} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Digite sua dúvida..." aria-label="Pesquisar dúvidas" /><button type="button" onClick={() => setQuery(query.trim())}>Pesquisar</button></div></div><div className="pn-faq">{filteredFaqs.length ? filteredFaqs.map(([question, answer]) => <details key={question} open={Boolean(query)}><summary>{question}</summary><p>{answer}</p></details>) : <div className="pn-card"><h3>Não encontramos essa dúvida.</h3><p>Fale com nossa equipe pelo WhatsApp para receber orientação.</p><a href="https://wa.me/5511973587469" target="_blank" rel="noopener noreferrer" className="pn-btn pn-btn-primary">Falar com atendimento</a></div>}</div></div></section>

        <section className="pn-final-cta"><div className="pn-final-cta-inner"><span className="pn-eyebrow">PRECISA DE INTERNET?</span><h2>Veja se a Parque Net chega até você.</h2><p>Consulte o seu endereço em poucos passos.</p><div className="pn-actions"><Link href="/cobertura" className="pn-btn pn-btn-primary">Consultar cobertura</Link><Link href="/planos" className="pn-btn pn-btn-outline">Conhecer planos</Link></div></div></section>
      </main>
    </>
  );
}

"use client";

import { useState } from "react";
import { ChevronDown, MessageCircle, Phone, Wifi, CreditCard, Wrench, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";

const topics = [
  { title: "Minha internet caiu", text: "Confira os cabos e reinicie o equipamento. Se o problema continuar, nossa equipe pode ajudar.", icon: Wifi },
  { title: "Problemas de conexão", text: "Para lentidão, instabilidade ou Wi-Fi com baixo alcance, acesse o atendimento técnico.", icon: Wrench },
  { title: "Financeiro e pagamentos", text: "Consulte segunda via, vencimentos e orientações sobre pagamentos.", icon: CreditCard },
];
const faq = [["Como falar com o suporte?", "Escolha o assunto acima e fale com nossa equipe pelo canal mais adequado."], ["Como consultar minha cobertura?", "Acesse Consultar cobertura, informe seu CEP e complete o endereço para verificar a disponibilidade."], ["Onde vejo meu plano?", "Clientes podem acessar a Central do Cliente para visualizar o plano e os atalhos de atendimento."]];

export default function SupportPage() {
  const [open, setOpen] = useState<number | null>(null);
  return <><Navbar /><main className="support-page">
    <section className="support-hero"><span>CENTRAL DE ATENDIMENTO</span><h1>Precisa de ajuda?<br /><strong>Estamos aqui.</strong></h1><p>Encontre rapidamente o canal certo para resolver sua necessidade.</p></section>
    <section className="support-topics"><div className="support-section-heading"><span>ESCOLHA UM ASSUNTO</span><h2>Como podemos ajudar?</h2></div><div className="support-topic-grid">{topics.map(({ title, text, icon: Icon }) => <a href="https://wa.me/5511987654321" target="_blank" rel="noreferrer" className="support-topic" key={title}><div className="support-topic-icon"><Icon size={22} /></div><h3>{title}</h3><p>{text}</p><span>Falar com atendimento <ArrowRight size={16} /></span></a>)}</div></section>
    <section className="support-channels"><a href="https://wa.me/5511987654321" target="_blank" rel="noreferrer"><MessageCircle size={20} /><div><strong>WhatsApp</strong><span>Atendimento rápido</span></div><ArrowRight size={17} /></a><a href="tel:+5511987654321"><Phone size={20} /><div><strong>Telefone</strong><span>(11) 98765-4321</span></div><ArrowRight size={17} /></a></section>
    <section className="support-faq"><div className="support-section-heading"><span>FAQ</span><h2>Dúvidas frequentes</h2></div><div className="support-faq-list">{faq.map(([question, answer], index) => <div className={`support-faq-item ${open === index ? "is-open" : ""}`} key={question}><button type="button" onClick={() => setOpen(open === index ? null : index)}><span>{question}</span><ChevronDown size={19} /></button>{open === index && <p>{answer}</p>}</div>)}</div></section>
  </main></>;
}

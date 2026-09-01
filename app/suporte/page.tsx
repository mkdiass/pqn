"use client";

import { useEffect, useState } from "react";
import { ArrowRight, CheckCircle2, MessageCircle, Wifi, CreditCard, Headphones, Search, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { Navbar } from "@/components/layout/navbar";
import styles from "./support.module.css";

const topics = [
  { id: "internet", icon: Wifi, title: "Sem internet", text: "Diagnóstico rápido para problemas de conexão." },
  { id: "atendimento", icon: Headphones, title: "Atendimento", text: "Fale com nossa equipe para qualquer solicitação." },
  { id: "financeiro", icon: CreditCard, title: "Financeiro", text: "Faturas, pagamentos e segunda via." },
  { id: "whatsapp", icon: MessageCircle, title: "WhatsApp", text: "Atendimento direto e rápido pelo celular." },
];

const faqs = [
  ["Minha internet caiu. O que faço?", "Confira se o equipamento está ligado e aguarde alguns segundos. Se continuar sem conexão, fale com nossa equipe pelo WhatsApp."],
  ["Como consigo minha segunda via?", "Entre na Central do Cliente ou fale com o atendimento para receber orientações sobre sua fatura."],
  ["Como contratar um plano?", "Consulte sua cobertura, escolha o plano ideal e nossa equipe dará continuidade à instalação."],
];

export default function SupportPage() {
  const [selected, setSelected] = useState("internet");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const assunto = params.get("assunto");
    if (assunto && topics.some((topic) => topic.id === assunto)) setSelected(assunto);
  }, []);

  const current = topics.find((topic) => topic.id === selected) ?? topics[0];
  const Icon = current.icon;

  return (
    <>
      <Navbar />
      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.heroCopy}>
            <span>PARQUE NET • CENTRAL DE SUPORTE</span>
            <h1>Quando você precisar,<br /><strong>a gente resolve.</strong></h1>
            <p>Encontre uma solução rapidamente ou fale diretamente com quem pode ajudar.</p>
            <div className={styles.heroActions}>
              <a href="https://wa.me/5511999999999" className={styles.primary}><MessageCircle size={18} /> Falar no WhatsApp</a>
              <a href="#faq" className={styles.secondary}><Search size={18} /> Ver perguntas frequentes</a>
            </div>
          </div>
          <div className={styles.statusCard}>
            <div className={styles.statusTop}><span className={styles.liveDot} /> SISTEMA DE ATENDIMENTO</div>
            <h2>Precisa de ajuda agora?</h2>
            <p>Escolha o assunto e veja o caminho mais rápido para resolver.</p>
            <div className={styles.statusItem}><ShieldCheck size={19} /><span><strong>Atendimento humano</strong><small>Equipe preparada para ajudar</small></span></div>
            <div className={styles.statusItem}><CheckCircle2 size={19} /><span><strong>Orientação rápida</strong><small>Menos etapas, mais solução</small></span></div>
          </div>
        </section>

        <section className={styles.options}>
          <div className={styles.sectionHeading}><span>COMO PODEMOS AJUDAR?</span><h2>Escolha o que você precisa.</h2></div>
          <div className={styles.grid}>
            {topics.map((topic) => {
              const TopicIcon = topic.icon;
              return <button key={topic.id} onClick={() => setSelected(topic.id)} className={`${styles.topic} ${selected === topic.id ? styles.active : ""}`}>
                <TopicIcon size={24} /><strong>{topic.title}</strong><span>{topic.text}</span><ArrowRight size={17} className={styles.arrow} />
              </button>;
            })}
          </div>

          <div className={styles.solution}>
            <div className={styles.solutionIcon}><Icon size={28} /></div>
            <div><span>CAMINHO RECOMENDADO</span><h3>{current.title}</h3><p>{current.text}</p></div>
            <a href={selected === "whatsapp" ? "https://wa.me/5511999999999" : `#${selected}`}>Continuar <ArrowRight size={17} /></a>
          </div>
        </section>

        <section id="faq" className={styles.faq}>
          <div className={styles.sectionHeading}><span>FAQ</span><h2>Perguntas frequentes.</h2></div>
          <div className={styles.faqList}>
            {faqs.map(([question, answer], index) => <button key={question} className={styles.faqItem} onClick={() => setOpenFaq(openFaq === index ? null : index)}>
              <span>{question}</span><span className={styles.faqPlus}>{openFaq === index ? "−" : "+"}</span>
              {openFaq === index && <p>{answer}</p>}
            </button>)}
          </div>
        </section>

        <section className={styles.finalCta}>
          <div><span>AINDA PRECISA DE AJUDA?</span><h2>Fale com a Parque Net.</h2><p>Nossa equipe está pronta para atender você.</p></div>
          <Link href="/cliente">Acessar Central do Cliente <ArrowRight size={18} /></Link>
        </section>
      </main>
    </>
  );
}

"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2, Headphones, Loader2, ShieldCheck } from "lucide-react";
import styles from "../client-section.module.css";

const topics = ["Internet lenta ou instável", "Sem conexão", "Fatura ou pagamento", "Alteração de cadastro", "Outro assunto"];

export default function ClientSupportPage() {
  const [topic, setTopic] = useState(topics[0]);
  const [message, setMessage] = useState("");
  const [protocol, setProtocol] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setProtocol("");
    if (message.trim().length < 10) {
      setError("Conte um pouco mais sobre o que está acontecendo para podermos orientar você.");
      return;
    }
    setLoading(true);
    try {
      const response = await fetch("/api/cliente/suporte", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ topic, message: message.trim() }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "Não foi possível enviar sua solicitação.");
      setProtocol(data.protocol);
      setMessage("");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Não foi possível enviar sua solicitação.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className={styles.page}>
      <header className={styles.header}><Link href="/cliente/dashboard" className={styles.back}><ArrowLeft size={16}/> Voltar à Central</Link><div className={styles.brand}>PARQUE <span>NET</span></div></header>
      <div className={styles.container}>
        <div className={styles.eyebrow}>CENTRAL DO CLIENTE / SUPORTE</div>
        <h1>Como podemos ajudar?</h1>
        <p className={styles.lead}>Abra uma solicitação autenticada e descreva o que precisa. A equipe poderá usar seu cadastro para localizar o atendimento.</p>

        <section className={styles.profileCard}>
          <div className={styles.avatar}><Headphones size={19}/></div>
          <div><span>ATENDIMENTO</span><h2>Suporte Parque Net</h2><p>Informe o problema uma única vez. Evite repetir seus dados em outro canal.</p></div>
          <div className={styles.secure}><ShieldCheck size={15}/> Sessão protegida</div>
        </section>

        {protocol ? (
          <section className={styles.balance} role="status">
            <div><span>SOLICITAÇÃO RECEBIDA</span><strong>Protocolo {protocol}</strong><p>Sua solicitação foi validada. Em produção, este protocolo será associado ao sistema de atendimento/IXC.</p></div>
            <CheckCircle2 size={34}/>
          </section>
        ) : (
          <form className={styles.card} onSubmit={submit}>
            <span>ABRIR SOLICITAÇÃO</span>
            <h2>Descreva o que você precisa</h2>
            <div style={{ display: "grid", gap: 18, marginTop: 22 }}>
              <label style={{ display: "grid", gap: 8, fontSize: 12, fontWeight: 800 }}>
                Assunto
                <select value={topic} onChange={(event) => setTopic(event.target.value)} style={{ padding: "13px 14px", border: "1px solid #dfe5ec", borderRadius: 10, background: "#fff", color: "#071426", font: "inherit" }}>
                  {topics.map((item) => <option key={item}>{item}</option>)}
                </select>
              </label>
              <label style={{ display: "grid", gap: 8, fontSize: 12, fontWeight: 800 }}>
                Mensagem
                <textarea value={message} onChange={(event) => setMessage(event.target.value)} rows={6} maxLength={1000} placeholder="Ex.: minha conexão caiu hoje às 14h e o roteador está com a luz de internet vermelha." style={{ resize: "vertical", padding: "13px 14px", border: "1px solid #dfe5ec", borderRadius: 10, background: "#fff", color: "#071426", font: "inherit", lineHeight: 1.5 }} />
              </label>
              {error && <p role="alert" style={{ margin: 0, color: "#b42318", fontSize: 12, fontWeight: 700 }}>{error}</p>}
              <button type="submit" disabled={loading} style={{ display: "inline-flex", justifyContent: "center", alignItems: "center", gap: 8, width: "fit-content", padding: "13px 18px", border: 0, borderRadius: 10, background: "#168cff", color: "#fff", fontWeight: 900, cursor: loading ? "wait" : "pointer" }}>
                {loading ? <Loader2 size={17} className="pp-spin"/> : <Headphones size={17}/>} {loading ? "Enviando..." : "Enviar solicitação"} <ArrowRight size={16}/>
              </button>
            </div>
          </form>
        )}

        <section className={styles.card + " " + styles.infoCard}>
          <span>PRÓXIMO PASSO</span>
          <h2>Atendimento conectado ao seu cadastro</h2>
          <p>Esta etapa já valida a sessão e gera um protocolo. A persistência e distribuição do chamado no ERP/IXC entram na próxima integração de backend.</p>
          {protocol ? <button type="button" onClick={() => setProtocol("")}>Abrir outra solicitação</button> : <Link href="/cliente/dashboard">Voltar para visão geral <ArrowRight size={15}/></Link>}
        </section>
        <div className={styles.demo}>PROTOCOLO DEMONSTRATIVO · INTEGRAÇÃO COM ERP/IXC PENDENTE</div>
      </div>
    </main>
  );
}

"use client";

import { FormEvent, useState } from "react";
import { ArrowRight, FileText, Headphones, LockKeyhole, UserRound } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";

export default function ClientePage() {
  const [cpf, setCpf] = useState("");
  const [error, setError] = useState("");

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const clean = cpf.replace(/\D/g, "");
    if (clean.length < 11) {
      setError("Digite um CPF ou CNPJ válido.");
      return;
    }
    setError("");
    window.open("https://wa.me/5511973587469?text=Ol%C3%A1%2C%20sou%20cliente%20da%20Parque%20Net%20e%20preciso%20de%20acesso%20%C3%A0%20minha%20central.", "_blank", "noopener,noreferrer");
  }

  return (
    <>
      <Navbar />
      <main className="pn-marketing">
        <section className="pn-inner-hero"><div className="pn-inner-hero-grid">
          <div><span className="pn-eyebrow">CENTRAL DO CLIENTE</span><h1>Tenha sua Parque Net <span>na palma da mão.</span></h1><p>Acesse os canais de atendimento e encontre rapidamente ajuda para sua conexão, financeiro e serviços.</p></div>
          <div className="pn-hero-panel"><div className="pn-hero-panel-grid"><div className="pn-stat"><FileText size={20} /><strong>Financeiro</strong><span>boletos e orientações</span></div><div className="pn-stat"><Headphones size={20} /><strong>Suporte</strong><span>atendimento para sua conexão</span></div><div className="pn-stat"><UserRound size={20} /><strong>Cliente</strong><span>atendimento personalizado</span></div><div className="pn-stat"><LockKeyhole size={20} /><strong>Seguro</strong><span>seus dados protegidos</span></div></div></div>
        </div></section>

        <section className="pn-client-shell"><div className="pn-client-card"><span className="pn-eyebrow">ENTRAR</span><h1>Acesse sua central</h1><p>Informe seu CPF ou CNPJ para iniciar o atendimento.</p><form className="pn-form" onSubmit={submit}><label htmlFor="documento">CPF ou CNPJ<input id="documento" value={cpf} onChange={(event) => setCpf(event.target.value.replace(/\D/g, "").slice(0,14))} inputMode="numeric" placeholder="Digite seu documento" /></label>{error && <p style={{color:"#dc2626",fontSize:12}}>{error}</p>}<button type="submit" className="pn-btn pn-btn-primary">Continuar <ArrowRight size={17} /></button></form><p style={{marginTop:18}}>Ainda não é cliente? <a href="/planos" style={{color:"#ff7900",fontWeight:800}}>Conheça nossos planos.</a></p></div></section>
      </main>
    </>
  );
}

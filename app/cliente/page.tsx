"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { ArrowRight, LockKeyhole, MessageCircle } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";

export default function ClientePage() {
  const [documento, setDocumento] = useState("");
  const [error, setError] = useState("");

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const clean = documento.replace(/\D/g, "");
    if (clean.length !== 11 && clean.length !== 14) {
      setError("Digite um CPF ou CNPJ válido.");
      return;
    }
    setError("");
    window.open("https://wa.me/5511973587469?text=Ol%C3%A1%2C%20sou%20cliente%20da%20Parque%20Net%20e%20preciso%20de%20acesso%20%C3%A0%20minha%20central.", "_blank", "noopener,noreferrer");
  }

  return (
    <>
      <Navbar />
      <main className="pn-client-shell">
        <div className="pn-client-card">
          <div className="coverage-form-card-icon"><LockKeyhole size={21} /></div>
          <span className="pn-eyebrow">CENTRAL DO CLIENTE</span>
          <h1>Olá. Vamos cuidar da sua conexão.</h1>
          <p>Entre com seu CPF ou CNPJ para acessar sua central. Estamos preparando uma experiência cada vez mais completa para você.</p>
          <form className="pn-form" onSubmit={submit}>
            <label htmlFor="documento">CPF ou CNPJ
              <input id="documento" value={documento} onChange={(event) => setDocumento(event.target.value.replace(/\D/g, "").slice(0, 14))} inputMode="numeric" placeholder="Digite seu documento" autoComplete="off" />
            </label>
            {error && <p style={{ color: "#dc2626", fontSize: 12 }}>{error}</p>}
            <button type="submit" className="pn-btn pn-btn-primary">Continuar <ArrowRight size={17} /></button>
          </form>
          <div style={{ marginTop: 24, paddingTop: 20, borderTop: "1px solid #edf0f3", fontSize: 13, color: "#667386" }}>
            <MessageCircle size={16} style={{ verticalAlign: "middle", marginRight: 6 }} />
            Precisa de ajuda? <a href="https://wa.me/5511973587469" target="_blank" rel="noopener noreferrer" style={{ color: "#ff7900", fontWeight: 800 }}>Fale com a equipe.</a>
          </div>
          <p style={{ marginTop: 18 }}><Link href="/planos" style={{ color: "#ff7900", fontWeight: 800 }}>Ainda não sou cliente → conhecer planos</Link></p>
        </div>
      </main>
    </>
  );
}

"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Eye, EyeOff, MessageCircle } from "lucide-react";

export default function ClientePage() {
  const [document, setDocument] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (document.replace(/\D/g, "").length < 11) {
      setError("Digite um CPF ou CNPJ válido.");
      return;
    }
    if (!password.trim()) {
      setError("Digite sua senha para continuar.");
      return;
    }
    setError("");
    window.open("https://wa.me/5511973587469?text=Ol%C3%A1%2C%20sou%20cliente%20da%20Parque%20Net%20e%20preciso%20de%20ajuda%20para%20acessar%20minha%20central.", "_blank", "noopener,noreferrer");
  }

  return (
    <main className="pn-client-only">
      <div className="pn-client-login">
        <Link href="/" aria-label="Voltar para a Parque Net"><Image src="/logo/logoPQN.png" alt="Parque Net Telecom" width={170} height={80} className="pn-client-logo" priority /></Link>
        <span className="pn-eyebrow">CENTRAL DO CLIENTE</span>
        <h1>Bem-vindo de volta.</h1>
        <p>Acesse sua central para consultar serviços, financeiro e atendimento.</p>

        <form className="pn-form" onSubmit={submit}>
          <label htmlFor="documento">CPF ou CNPJ<input id="documento" value={document} onChange={(event) => setDocument(event.target.value.replace(/\D/g, "").slice(0, 14))} inputMode="numeric" placeholder="Digite seu CPF ou CNPJ" autoComplete="username" /></label>
          <label htmlFor="senha">Senha<div className="pn-password-wrap"><input id="senha" type={showPassword ? "text" : "password"} value={password} onChange={(event) => setPassword(event.target.value)} placeholder="Digite sua senha" autoComplete="current-password" /><button type="button" onClick={() => setShowPassword((value) => !value)} aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}>{showPassword ? <EyeOff size={18} /> : <Eye size={18} />}</button></div></label>
          {error && <p className="pn-client-error">{error}</p>}
          <button type="submit" className="pn-btn pn-btn-primary">Entrar na central <ArrowRight size={17} /></button>
        </form>

        <Link href="/suporte" className="pn-client-forgot">Esqueci minha senha</Link>
        <p className="pn-client-help">Ainda não é cliente? <Link href="/planos">Conheça nossos planos.</Link></p>
      </div>

      <a className="pn-client-whatsapp" href="https://wa.me/5511973587469?text=Ol%C3%A1%2C%20preciso%20de%20ajuda%20para%20acessar%20a%20Central%20do%20Cliente." target="_blank" rel="noopener noreferrer" aria-label="Falar com a Parque Net pelo WhatsApp"><MessageCircle size={27} /></a>
    </main>
  );
}

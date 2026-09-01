"use client";

import { FormEvent, useState } from "react";
import { ArrowRight, Eye, EyeOff, LockKeyhole, Mail, ShieldCheck, Sparkles } from "lucide-react";
import { useRouter } from "next/navigation";

export function ClientLogin() {
  const router = useRouter();
  const [email, setEmail] = useState(""); const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); const [loading, setLoading] = useState(false); const [error, setError] = useState("");
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); setError(""); setLoading(true);
    try {
      const response = await fetch("/api/auth/login", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ email, password }) });
      const data = await response.json();
      if (!response.ok) { setError(data.message || "Não foi possível entrar."); return; }
      router.push("/cliente/dashboard"); router.refresh();
    } catch { setError("Falha de conexão. Tente novamente."); } finally { setLoading(false); }
  }
  function fillDemo() { setEmail("cliente@parquenet.com.br"); setPassword("ParqueNet@2026"); setError(""); }
  return <div className="client-login-shell">
    <div className="client-login-panel">
      <div className="client-login-brand"><span className="client-login-brand-mark"><Sparkles size={17} /></span><span>PARQUE NET</span></div>
      <div className="client-login-intro"><span>ÁREA EXCLUSIVA</span><h1>Bem-vindo à sua<br /><strong>Central do Cliente.</strong></h1><p>Gerencie seu serviço, acompanhe sua conexão e tenha suporte em um único lugar.</p></div>
      <form onSubmit={handleSubmit} className="client-login-form">
        <label htmlFor="client-email">E-mail</label><div className="client-input-wrap"><Mail size={18} /><input id="client-email" type="email" autoComplete="email" placeholder="seu@email.com" value={email} onChange={(e) => setEmail(e.target.value)} required /></div>
        <label htmlFor="client-password">Senha</label><div className="client-input-wrap"><LockKeyhole size={18} /><input id="client-password" type={showPassword ? "text" : "password"} autoComplete="current-password" placeholder="••••••••" value={password} onChange={(e) => setPassword(e.target.value)} required /><button type="button" onClick={() => setShowPassword(v => !v)} aria-label="Mostrar senha">{showPassword ? <EyeOff size={17} /> : <Eye size={17} />}</button></div>
        {error && <p className="client-login-error">{error}</p>}
        <button type="submit" className="client-login-submit" disabled={loading}>{loading ? "Entrando..." : "Acessar minha conta"}{!loading && <ArrowRight size={18} />}</button>
      </form>
      <button type="button" className="client-demo-button" onClick={fillDemo}><ShieldCheck size={16} />Preencher acesso de demonstração</button>
      <p className="client-login-note">Ainda não é cliente? <a href="/cobertura">Consulte a cobertura</a> e encontre o plano ideal.</p>
    </div>
    <div className="client-login-visual"><div className="client-orbit client-orbit-one" /><div className="client-orbit client-orbit-two" /><div className="client-visual-content"><span>PARQUE NET • CUSTOMER EXPERIENCE</span><h2>Sua conexão.<br /><strong>Seu controle.</strong></h2><p>Uma experiência pensada para deixar tudo mais simples.</p><div className="client-visual-stats"><div><strong>700</strong><span>Mbps</span></div><div><strong>24/7</strong><span>Conectado</span></div><div><strong>100%</strong><span>Fibra</span></div></div></div></div>
  </div>;
}

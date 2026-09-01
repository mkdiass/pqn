"use client";

import Link from "next/link";
import { ArrowRight, Eye, EyeOff, LockKeyhole, ShieldCheck } from "lucide-react";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    if (!email || !password) { setError("Preencha seu e-mail e senha para continuar."); return; }
    setPending(true);
    window.setTimeout(() => {
      if (email.toLowerCase() === "cliente@parquenet.com.br" && password === "123456") {
        window.localStorage.setItem("parquenet-demo-session", "active");
        router.push("/cliente/dashboard");
      } else {
        setPending(false);
        setError("Não encontramos uma conta com essas credenciais. Use o acesso demonstrativo abaixo.");
      }
    }, 700);
  }

  return <main className="pp-auth-page"><section className="pp-auth-art"><div><span className="pp-eyebrow"><i /> CENTRAL DO CLIENTE</span><h1>Sua conexão.<br/><span>Seu controle.</span></h1><p>Consulte seu plano, acompanhe sua conexão, veja faturas e fale com a Parque Net em um só lugar.</p><div className="pp-proof"><div><ShieldCheck size={19}/><small>SESSÃO PROTEGIDA</small></div><div><LockKeyhole size={19}/><small>ACESSO SEGURO</small></div></div></div><div className="pp-auth-orb" /></section><section className="pp-auth-card"><div className="pp-login-box"><span className="pp-eyebrow"><i /> PARQUE NET</span><h2>Bem-vindo de volta.</h2><p>Acesse sua Central do Cliente para continuar.</p><form onSubmit={handleSubmit}><div className="pp-field"><label htmlFor="email">E-mail</label><input id="email" type="email" autoComplete="email" placeholder="voce@email.com" value={email} onChange={e=>setEmail(e.target.value)}/></div><div className="pp-field"><label htmlFor="password">Senha</label><div style={{position:"relative"}}><input id="password" type={showPassword ? "text" : "password"} autoComplete="current-password" placeholder="Sua senha" value={password} onChange={e=>setPassword(e.target.value)} style={{width:"100%",paddingRight:50}}/><button type="button" aria-label={showPassword?"Ocultar senha":"Mostrar senha"} onClick={()=>setShowPassword(v=>!v)} style={{position:"absolute",right:12,top:13,border:0,background:"transparent",color:"#64748b",cursor:"pointer"}}>{showPassword?<EyeOff size={19}/>:<Eye size={19}/>}</button></div></div>{error&&<div className="pp-auth-demo" role="alert">{error}</div>}<button className="pp-login-submit" type="submit" disabled={pending}>{pending?"Entrando...":<>Entrar <ArrowRight size={16} style={{verticalAlign:"middle"}}/></>}</button></form><div className="pp-form-links"><Link href="/cliente">Voltar</Link><a href="#recuperar" onClick={e=>{e.preventDefault();alert("Fluxo de recuperação: informe seu e-mail para receber as instruções.")}}>Esqueci minha senha</a></div><div className="pp-auth-demo"><strong>Acesso demonstrativo</strong><br/>cliente@parquenet.com.br<br/>Senha: 123456</div></div></section></main>;
}

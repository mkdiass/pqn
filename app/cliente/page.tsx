"use client";

import { FormEvent, useState } from "react";
import { ArrowRight, Eye, EyeOff, LockKeyhole, MessageCircle, ShieldCheck, UserRound } from "lucide-react";
import Link from "next/link";
import { Navbar } from "@/components/layout/navbar";
import styles from "./client.module.css";

export default function ClientPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("A autenticação será conectada ao sistema de clientes na próxima etapa. Por enquanto, a interface está pronta para integração.");
  }

  return (
    <>
      <Navbar />
      <main className={styles.page}>
        <div className={styles.glow} />
        <section className={styles.shell}>
          <div className={styles.intro}>
            <span>PARQUE NET • ÁREA DO CLIENTE</span>
            <h1>Sua internet.<br /><strong>Seu controle.</strong></h1>
            <p>Acesse sua Central do Cliente para acompanhar sua conta, consultar informações e resolver tudo em um só lugar.</p>
            <div className={styles.highlights}>
              <div><ShieldCheck size={18} /><span><strong>Acesso seguro</strong><small>Seus dados protegidos</small></span></div>
              <div><UserRound size={18} /><span><strong>Conta personalizada</strong><small>Informações do seu contrato</small></span></div>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.cardBrand}><div><LockKeyhole size={19} /></div><span>CENTRAL DO CLIENTE</span></div>
            <div className={styles.heading}><span>BEM-VINDO DE VOLTA</span><h2>Acesse sua conta.</h2><p>Entre com seus dados para continuar.</p></div>
            <form onSubmit={handleSubmit} className={styles.form}>
              <label htmlFor="document">CPF ou e-mail</label>
              <input id="document" name="document" placeholder="Digite seu CPF ou e-mail" autoComplete="username" required />
              <div className={styles.passwordLabel}><label htmlFor="password">Senha</label><button type="button" onClick={() => setMessage("A recuperação de senha será integrada ao sistema de clientes.")}>Esqueci minha senha</button></div>
              <div className={styles.password}><input id="password" name="password" type={showPassword ? "text" : "password"} placeholder="Digite sua senha" autoComplete="current-password" required /><button type="button" aria-label="Mostrar senha" onClick={() => setShowPassword((value) => !value)}>{showPassword ? <EyeOff size={18} /> : <Eye size={18} />}</button></div>
              {message && <p className={styles.message}>{message}</p>}
              <button className={styles.submit} type="submit">Entrar na Central <ArrowRight size={18} /></button>
            </form>
            <div className={styles.register}><span>Ainda não é cliente?</span><Link href="/cobertura">Consulte a cobertura e contrate <ArrowRight size={15} /></Link></div>
            <div className={styles.security}><ShieldCheck size={15} /> Conexão protegida e dados tratados com segurança.</div>
          </div>
        </section>
        <a className={styles.whatsapp} href="https://wa.me/5511999999999"><MessageCircle size={18} /> <span>Precisa de ajuda?</span></a>
      </main>
    </>
  );
}

"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2, Eye, EyeOff, LockKeyhole, ShieldCheck } from "lucide-react";
import { useState } from "react";
import type { FormEvent } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState("");
  const [recoveryOpen, setRecoveryOpen] = useState(false);
  const [recoveryEmail, setRecoveryEmail] = useState("");
  const [recoverySent, setRecoverySent] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");

    if (!email.trim() || !password) {
      setError("Preencha seu e-mail e senha para continuar.");
      return;
    }

    setPending(true);

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();

      if (!response.ok) {
        setError(data.message ?? "Não foi possível entrar. Confira seus dados.");
        setPending(false);
        return;
      }

      router.push("/cliente/dashboard");
      router.refresh();
    } catch {
      setError("Não foi possível conectar ao serviço de autenticação.");
      setPending(false);
    }
  }

  function openRecovery() {
    setRecoveryOpen(true);
    setRecoverySent(false);
    setRecoveryEmail(email);
  }

  function submitRecovery(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!recoveryEmail.trim()) return;
    setRecoverySent(true);
  }

  return (
    <main className="pp-auth-page">
      <section className="pp-auth-art" aria-label="Central do Cliente">
        <div>
          <span className="pp-eyebrow"><i /> CENTRAL DO CLIENTE</span>
          <h1>Sua conexão.<br /><span>Seu controle.</span></h1>
          <p>
            Consulte seu plano, acompanhe sua conexão, veja faturas e fale com a
            Parque Net em um só lugar.
          </p>
          <div className="pp-proof">
            <div><ShieldCheck size={19} /><small>SESSÃO PROTEGIDA</small></div>
            <div><LockKeyhole size={19} /><small>ACESSO SEGURO</small></div>
          </div>
        </div>
        <div className="pp-auth-orb" aria-hidden="true" />
      </section>

      <section className="pp-auth-card">
        <div className="pp-login-box">
          <span className="pp-eyebrow"><i /> PARQUE NET</span>
          <h2>Bem-vindo de volta.</h2>
          <p>Acesse sua Central do Cliente para continuar.</p>

          <form onSubmit={handleSubmit} noValidate>
            <div className="pp-field">
              <label htmlFor="email">E-mail</label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                inputMode="email"
                placeholder="voce@email.com"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </div>

            <div className="pp-field">
              <label htmlFor="password">Senha</label>
              <div className="pp-password-wrap">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  placeholder="Sua senha"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  required
                />
                <button
                  className="pp-password-toggle"
                  type="button"
                  aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}
                  aria-pressed={showPassword}
                  onClick={() => setShowPassword((value) => !value)}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {error && <div className="pp-auth-error" role="alert">{error}</div>}

            <button className="pp-login-submit" type="submit" disabled={pending}>
              {pending ? "Autenticando..." : <>Entrar <ArrowRight size={16} /></>}
            </button>
          </form>

          <div className="pp-form-links">
            <Link href="/">Voltar ao site</Link>
            <button type="button" onClick={openRecovery}>Esqueci minha senha</button>
          </div>

          {recoveryOpen && (
            <div className="pp-auth-recovery">
              {recoverySent ? (
                <>
                  <strong><CheckCircle2 size={15} /> Solicitação registrada</strong>
                  <span>Se o e-mail estiver cadastrado, você receberá as instruções de recuperação.</span>
                </>
              ) : (
                <form onSubmit={submitRecovery}>
                  <strong>Recuperar acesso</strong>
                  <span>Informe o e-mail vinculado à sua conta.</span>
                  <div className="pp-recovery-row">
                    <input
                      type="email"
                      aria-label="E-mail para recuperação"
                      placeholder="voce@email.com"
                      value={recoveryEmail}
                      onChange={(event) => setRecoveryEmail(event.target.value)}
                      required
                    />
                    <button type="submit">Continuar</button>
                  </div>
                </form>
              )}
            </div>
          )}

          <div className="pp-auth-demo">
            <strong>Acesso demonstrativo</strong><br />
            cliente@parquenet.com.br<br />
            Senha: ParqueNet@2026
          </div>
          <div className="pp-auth-security">
            <ShieldCheck size={14} /> Ambiente protegido · seus dados são tratados com segurança.
          </div>
        </div>
      </section>
    </main>
  );
}

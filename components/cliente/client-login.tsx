"use client";

import { FormEvent, useState } from "react";
import { ArrowRight, Eye, EyeOff, LockKeyhole, MessageCircle, ShieldCheck } from "lucide-react";

export function ClientLogin() {
  const [document, setDocument] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  function formatDocument(value: string) {
    const numbers = value.replace(/\D/g, "").slice(0, 14);

    if (numbers.length <= 11) {
      return numbers
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
    }

    return numbers
      .replace(/(\d{2})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1/$2")
      .replace(/(\d{4})(\d{1,2})$/, "$1-$2");
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("");

    const cleanDocument = document.replace(/\D/g, "");

    if (cleanDocument.length < 11) {
      setMessage("Informe um CPF ou CNPJ válido.");
      return;
    }

    if (password.length < 4) {
      setMessage("Informe sua senha para continuar.");
      return;
    }

    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 700));
    setMessage("A Central está pronta para receber a integração com o sistema do cliente.");
    setLoading(false);
  }

  return (
    <main className="client-page">
      <div className="client-login-shell">
        <div className="client-login-card">
          <div className="client-login-brand">
            <div className="client-login-icon"><LockKeyhole size={21} /></div>
            <span>PARQUE NET</span>
          </div>

          <div className="client-login-heading">
            <span>ÁREA DO CLIENTE</span>
            <h1>Bem-vindo de volta.</h1>
            <p>Acesse sua central para acompanhar sua conexão e seus serviços.</p>
          </div>

          <form onSubmit={handleSubmit} className="client-login-form">
            <label htmlFor="client-document">CPF ou CNPJ</label>
            <input
              id="client-document"
              type="text"
              inputMode="numeric"
              autoComplete="username"
              placeholder="000.000.000-00"
              value={document}
              onChange={(event) => setDocument(formatDocument(event.target.value))}
            />

            <div className="client-password-label">
              <label htmlFor="client-password">Senha</label>
              <button type="button">Esqueci minha senha</button>
            </div>

            <div className="client-password-input">
              <input
                id="client-password"
                type={showPassword ? "text" : "password"}
                autoComplete="current-password"
                placeholder="Digite sua senha"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
              <button
                type="button"
                aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}
                onClick={() => setShowPassword((current) => !current)}
              >
                {showPassword ? <EyeOff size={19} /> : <Eye size={19} />}
              </button>
            </div>

            {message && <p className="client-login-message">{message}</p>}

            <button className="client-login-submit" type="submit" disabled={loading}>
              {loading ? "Entrando..." : "Entrar na central"}
              {!loading && <ArrowRight size={18} />}
            </button>
          </form>

          <div className="client-login-security">
            <ShieldCheck size={18} />
            <span>Conexão protegida. Seus dados permanecem seguros.</span>
          </div>

          <div className="client-login-help">
            <MessageCircle size={18} />
            <div>
              <strong>Precisa de ajuda?</strong>
              <span>Fale com nosso atendimento para recuperar seu acesso.</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

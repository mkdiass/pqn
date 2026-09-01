"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown, Menu, X, ArrowRight, UserRound } from "lucide-react";

const supportItems = [
  ["Falta de internet", "Resolva problemas de conexão", "/suporte?tipo=internet"],
  ["Internet lenta", "Diagnóstico e orientações", "/suporte?tipo=velocidade"],
  ["Financeiro", "Faturas e pagamentos", "/suporte?tipo=financeiro"],
  ["Atendimento", "Fale com nossa equipe", "/suporte?tipo=atendimento"],
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [supportOpen, setSupportOpen] = useState(false);

  return (
    <header className="pp-header">
      <div className="pp-header-inner">
        <Link href="/" className="pp-brand" aria-label="Parque Net - início">
          <span className="pp-brand-mark">PN</span>
          <span><strong>PARQUE</strong><small>NET TELECOM</small></span>
        </Link>

        <nav className={`pp-nav ${open ? "is-open" : ""}`} aria-label="Navegação principal">
          <Link href="/">Início</Link>
          <Link href="/planos">Planos</Link>
          <Link href="/cobertura">Cobertura</Link>
          <Link href="/empresas">Empresas</Link>
          <Link href="/entretenimento">Entretenimento</Link>
          <div className="pp-nav-dropdown">
            <button type="button" onClick={() => setSupportOpen((v) => !v)} aria-expanded={supportOpen}>
              Suporte <ChevronDown size={16} />
            </button>
            {supportOpen && (
              <div className="pp-dropdown-panel">
                <div className="pp-dropdown-title">Como podemos ajudar?</div>
                {supportItems.map(([title, text, href]) => (
                  <Link key={title} href={href} onClick={() => { setSupportOpen(false); setOpen(false); }}>
                    <span><strong>{title}</strong><small>{text}</small></span><ArrowRight size={16} />
                  </Link>
                ))}
              </div>
            )}
          </div>
        </nav>

        <div className="pp-header-actions">
          <Link href="/cliente/login" className="pp-login"><UserRound size={17} /> Central do Cliente</Link>
          <Link href="/cobertura" className="pp-header-cta">Consultar cobertura <ArrowRight size={17} /></Link>
        </div>

        <button className="pp-menu-button" onClick={() => setOpen((v) => !v)} aria-label="Abrir menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
}

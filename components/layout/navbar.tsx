"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronDown, MapPin, User, Wifi, MessageCircle, FileQuestion, Headphones } from "lucide-react";
import { useState } from "react";
import styles from "./navbar.module.css";

export function Navbar() {
  const [supportOpen, setSupportOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar-container">
        <Link href="/" className="logo-link">
          <Image src="/logo/logoPQN.png" alt="Parque Net Telecom" width={230} height={100} className="logo" priority />
        </Link>
        <nav className="nav-links">
          <Link href="/planos">Planos</Link>
          <Link href="/entretenimento">Entretenimento</Link>
          <Link href="/empresas">Empresas</Link>
          <div className={styles.dropdown}>
            <button type="button" className={`${styles.trigger} ${supportOpen ? styles.open : ""}`} onClick={() => setSupportOpen((value) => !value)} aria-expanded={supportOpen}>
              Suporte <ChevronDown size={17} />
            </button>
            {supportOpen && <div className={styles.menu}>
              <Link href="/suporte?assunto=internet" onClick={() => setSupportOpen(false)}><Wifi size={18} /><span><strong>Sem internet</strong><small>Resolva problemas de conexão</small></span></Link>
              <Link href="/suporte?assunto=atendimento" onClick={() => setSupportOpen(false)}><Headphones size={18} /><span><strong>Atendimento</strong><small>Fale com nossa equipe</small></span></Link>
              <Link href="/suporte?assunto=whatsapp" onClick={() => setSupportOpen(false)}><MessageCircle size={18} /><span><strong>WhatsApp</strong><small>Atendimento rápido</small></span></Link>
              <Link href="/suporte?assunto=financeiro" onClick={() => setSupportOpen(false)}><FileQuestion size={18} /><span><strong>Financeiro</strong><small>Faturas e pagamentos</small></span></Link>
            </div>}
          </div>
        </nav>
        <div className="nav-actions">
          <Link href="/cobertura" className="coverage-button"><MapPin size={19} />Consultar cobertura</Link>
          <Link href="/cliente" className="client-button"><User size={19} />Central do Cliente</Link>
        </div>
      </div>
    </header>
  );
}

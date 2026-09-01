"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ChevronDown, MapPin, Menu, User, X } from "lucide-react";

export function Navbar() {
  const [open, setOpen] = useState(false);

  function close() {
    setOpen(false);
  }

  return (
    <header className="navbar">
      <div className="navbar-container">
        <Link href="/" className="logo-link" onClick={close}>
          <Image src="/logo/logoPQN.png" alt="Parque Net Telecom" width={230} height={100} className="logo" priority />
        </Link>

        <nav className="nav-links">
          <Link href="/planos">Planos</Link>
          <Link href="/entretenimento">Entretenimento</Link>
          <Link href="/empresas">Empresas</Link>
          <Link href="/suporte" className="nav-support">Suporte <ChevronDown size={17} /></Link>
        </nav>

        <div className="nav-actions">
          <Link href="/cobertura" className="coverage-button"><MapPin size={19} />Consultar cobertura</Link>
          <Link href="/cliente" className="client-button"><User size={19} />Central do Cliente</Link>
        </div>

        <button type="button" className="mobile-menu-button" aria-label={open ? "Fechar menu" : "Abrir menu"} aria-expanded={open} onClick={() => setOpen((value) => !value)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <div className={`mobile-nav-panel ${open ? "open" : ""}`}>
        <Link href="/planos" onClick={close}>Planos</Link>
        <Link href="/entretenimento" onClick={close}>Entretenimento</Link>
        <Link href="/empresas" onClick={close}>Empresas</Link>
        <Link href="/suporte" onClick={close}>Suporte</Link>
        <div className="mobile-nav-actions">
          <Link href="/cobertura" onClick={close}>Cobertura</Link>
          <Link href="/cliente" onClick={close}>Área do cliente</Link>
        </div>
      </div>
    </header>
  );
}

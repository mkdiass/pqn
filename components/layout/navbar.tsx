"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronDown, MapPin, User, Wifi, MessageCircle, Building2 } from "lucide-react";

export function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <Link href="/" className="logo-link" aria-label="Parque Net Telecom - início">
          <Image
            src="/logo/logoPQN.png"
            alt="Parque Net Telecom"
            width={230}
            height={100}
            className="logo"
            priority
          />
        </Link>

        <nav className="nav-links" aria-label="Navegação principal">
          <Link href="/planos">Planos</Link>
          <Link href="/entretenimento">Entretenimento</Link>
          <Link href="/empresas">Empresas</Link>

          <details className="nav-dropdown">
            <summary>
              Suporte
              <ChevronDown size={17} />
            </summary>
            <div className="nav-dropdown-menu">
              <Link href="/suporte">
                <MessageCircle size={17} />
                <span><strong>Central de atendimento</strong><small>Encontre a melhor solução</small></span>
              </Link>
              <Link href="/suporte?categoria=internet">
                <Wifi size={17} />
                <span><strong>Problemas de internet</strong><small>Sem conexão ou instabilidade</small></span>
              </Link>
              <Link href="/empresas">
                <Building2 size={17} />
                <span><strong>Atendimento empresarial</strong><small>Soluções para empresas</small></span>
              </Link>
            </div>
          </details>
        </nav>

        <div className="nav-actions">
          <Link href="/cobertura" className="coverage-button">
            <MapPin size={19} />
            Consultar cobertura
          </Link>
          <Link href="/cliente" className="client-button">
            <User size={19} />
            Central do Cliente
          </Link>
        </div>
      </div>
    </header>
  );
}

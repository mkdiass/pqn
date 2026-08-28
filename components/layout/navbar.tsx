"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronDown, MapPin, User } from "lucide-react";

export function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-container">

        <Link href="/" className="logo-link">
          <Image
            src="/logo/logoPQN.png"
            alt="Parque Net Telecom"
            width={230}
            height={100}
            className="logo"
            priority
          />
        </Link>

        <nav className="nav-links">

          <Link href="/planos">
            Planos
          </Link>

          <Link href="/entretenimento">
            Entretenimento
          </Link>

          <Link href="/empresas">
            Empresas
          </Link>

          <Link href="/suporte" className="nav-support">
            Suporte
            <ChevronDown size={17} />
          </Link>

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
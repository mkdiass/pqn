"use client";

import Link from "next/link";
import { ArrowRight, Headphones, Gauge, Wifi, Activity, Signal, Play } from "lucide-react";

export function Hero() {
  return (
    <section className="hero">
      <div className="hero-background" />

      <div className="hero-content">
        <div className="hero-text">
          <span className="hero-label">PARQUE NET TELECOM</span>

          <h1>
            Sua conexão.
            <br />
            <span>No seu ritmo.</span>
          </h1>

          <p>
            Internet <strong>100% fibra óptica</strong> para trabalhar,
            jogar, assistir e viver conectado.
          </p>

          <div className="hero-buttons">
            <Link href="/planos" className="primary-button">
              Conhecer planos
              <ArrowRight size={20} />
            </Link>
            <Link href="/cobertura" className="secondary-button">
              Consultar cobertura
              <ArrowRight size={20} />
            </Link>
          </div>

          <div className="hero-features">
            <div><Gauge /><span>Mais velocidade<small>para o dia a dia</small></span></div>
            <div><Wifi /><span>Conexão estável<small>sempre</small></span></div>
            <div><Headphones /><span>Atendimento<small>próximo e humanizado</small></span></div>
          </div>
        </div>

        <div className="hero-video" aria-label="Status da rede Parque Net">
          <div className="network-visual">
            <div className="network-topline">
              <span><i /> REDE PARQUE NET</span>
              <small>AO VIVO</small>
            </div>

            <div className="network-core">
              <div className="network-orbit orbit-one" />
              <div className="network-orbit orbit-two" />
              <div className="network-core-icon"><Signal size={30} /></div>
              <span className="network-pulse pulse-one" />
              <span className="network-pulse pulse-two" />
            </div>

            <div className="network-metrics">
              <div><Activity size={17} /><span>Conexão<strong>Estável</strong></span></div>
              <div><Gauge size={17} /><span>Fibra<strong>100%</strong></span></div>
              <div><Wifi size={17} /><span>Latência<strong>Baixa</strong></span></div>
            </div>

            <Link href="/cobertura" className="network-action">
              <span><Play size={15} fill="currentColor" /> Descubra sua cobertura</span>
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

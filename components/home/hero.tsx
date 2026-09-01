"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Gauge,
  MessageCircle,
  Play,
  Wifi,
} from "lucide-react";

const slides = [
  {
    eyebrow: "INTERNET 100% FIBRA ÓPTICA",
    title: "A velocidade que acompanha o seu ritmo.",
    text: "Conexão estável para trabalhar, jogar, assistir e conectar tudo o que faz parte da sua rotina.",
    action: "Conhecer planos",
    href: "/planos",
    accent: "fiber",
    stat: "Até 1 GIGA",
    statLabel: "de velocidade",
  },
  {
    eyebrow: "PARQUE NET +",
    title: "Sua internet. Seu entretenimento. Tudo conectado.",
    text: "Escolha sua velocidade e descubra opções de streaming para transformar sua experiência em casa.",
    action: "Explorar entretenimento",
    href: "/entretenimento",
    accent: "streaming",
    stat: "+",
    statLabel: "opções de entretenimento",
  },
  {
    eyebrow: "ATENDIMENTO DE VERDADE",
    title: "Tecnologia perto de você, com gente para ajudar.",
    text: "Uma operadora local, com atendimento próximo e suporte quando você precisar.",
    action: "Falar com a equipe",
    href: "https://wa.me/5511973587469?text=Ol%C3%A1%2C%20quero%20conhecer%20a%20Parque%20Net.",
    accent: "support",
    stat: "24h",
    statLabel: "conexão para sua rotina",
  },
];

export function Hero() {
  const [active, setActive] = useState(0);
  const [videoOpen, setVideoOpen] = useState(false);

  useEffect(() => {
    if (videoOpen) return;
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % slides.length);
    }, 6500);
    return () => window.clearInterval(timer);
  }, [videoOpen]);

  const slide = slides[active];

  function previous() {
    setActive((current) => (current - 1 + slides.length) % slides.length);
  }

  function next() {
    setActive((current) => (current + 1) % slides.length);
  }

  return (
    <section className="pn-home-hero" aria-label="Destaques Parque Net">
      <div className={`pn-hero-slide pn-hero-slide-${slide.accent}`} key={active}>
        <div className="pn-hero-grid">
          <div className="pn-hero-copy">
            <span className="pn-eyebrow pn-hero-eyebrow">{slide.eyebrow}</span>
            <h1>{slide.title}</h1>
            <p>{slide.text}</p>

            <div className="pn-actions pn-hero-actions">
              <Link href={slide.href} className="pn-btn pn-btn-primary">
                {slide.action}
                <ArrowRight size={18} />
              </Link>
              <Link href="/cobertura" className="pn-btn pn-btn-glass">
                <Wifi size={17} />
                Verificar cobertura
              </Link>
            </div>

            <div className="pn-hero-trust">
              <div><Gauge size={18} /><span><strong>{slide.stat}</strong>{slide.statLabel}</span></div>
              <div><Wifi size={18} /><span><strong>100%</strong> fibra óptica</span></div>
              <div><MessageCircle size={18} /><span><strong>Local</strong> e próximo</span></div>
            </div>
          </div>

          <div className="pn-hero-visual">
            <div className="pn-hero-orbit pn-orbit-one" />
            <div className="pn-hero-orbit pn-orbit-two" />
            <div className="pn-hero-card pn-hero-card-main">
              <div className="pn-hero-card-top"><span>PARQUE NET</span><Wifi size={20} /></div>
              <div className="pn-hero-speed"><strong>{active === 0 ? "1" : active === 1 ? "∞" : "24"}</strong><span>{active === 0 ? "GIGA" : active === 1 ? "CONEXÕES" : "SUPORTE"}</span></div>
              <div className="pn-hero-signal"><i /><i /><i /><i /><i /></div>
              <span className="pn-hero-live">CONEXÃO ATIVA</span>
            </div>

            <div className="pn-hero-floating-card">
              <span>LATÊNCIA</span>
              <strong>{active === 0 ? "BAIXA" : active === 1 ? "FLUIDA" : "PRÓXIMA"}</strong>
            </div>

            <button type="button" className="pn-hero-play" onClick={() => setVideoOpen(true)} aria-label="Assistir apresentação">
              <span><Play size={20} fill="currentColor" /></span>
              <small>ASSISTA</small>
              <strong>Conheça a Parque Net</strong>
            </button>
          </div>
        </div>

        <div className="pn-hero-controls">
          <button type="button" onClick={previous} aria-label="Slide anterior"><ChevronLeft size={20} /></button>
          <div className="pn-hero-dots">
            {slides.map((item, index) => (
              <button key={item.eyebrow} type="button" className={index === active ? "active" : ""} onClick={() => setActive(index)} aria-label={`Ir para slide ${index + 1}`} />
            ))}
          </div>
          <button type="button" onClick={next} aria-label="Próximo slide"><ChevronRight size={20} /></button>
        </div>
      </div>

      {videoOpen && (
        <div className="pn-video-modal" role="dialog" aria-modal="true" aria-label="Apresentação Parque Net" onClick={() => setVideoOpen(false)}>
          <div className="pn-video-modal-content" onClick={(event) => event.stopPropagation()}>
            <button type="button" className="pn-video-close" onClick={() => setVideoOpen(false)} aria-label="Fechar vídeo">×</button>
            <div className="pn-video-placeholder">
              <Play size={38} fill="currentColor" />
              <strong>Seu vídeo institucional entra aqui</strong>
              <span>Quando você carregar o arquivo em public/videos, este espaço pode receber o player definitivo.</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

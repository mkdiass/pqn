"use client";

import Link from "next/link";
import { ArrowRight, Headphones, Gauge, Play, Wifi, Zap } from "lucide-react";
import { useEffect, useState } from "react";

const slides = [
  {
    eyebrow: "FIBRA ÓPTICA PARQUE NET",
    title: "Internet que acompanha o seu ritmo.",
    text: "Conexão de alta velocidade para trabalho, jogos, streaming e tudo o que acontece na sua casa.",
    metric: "ATÉ 1 GIGA",
    label: "velocidade para ir além",
  },
  {
    eyebrow: "PARA QUEM NÃO PODE PARAR",
    title: "Mais estabilidade. Menos preocupação.",
    text: "Uma experiência de internet pensada para quem depende da conexão todos os dias.",
    metric: "100% FIBRA",
    label: "tecnologia de ponta a ponta",
  },
  {
    eyebrow: "SUA NOVA CONEXÃO",
    title: "Escolha seu plano. O resto a gente facilita.",
    text: "Veja as velocidades, consulte a cobertura e avance para a contratação em poucos passos.",
    metric: "+ CONEXÃO",
    label: "menos burocracia para você",
  },
];

export function Hero() {
  const [active, setActive] = useState(0);
  const slide = slides[active];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % slides.length);
    }, 6500);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="hero pn-hero-v2">
      <div className="hero-background" />
      <div className="pn-hero-orb pn-hero-orb-one" />
      <div className="pn-hero-orb pn-hero-orb-two" />

      <div className="hero-content">
        <div className="hero-text pn-hero-copy" key={active}>
          <span className="hero-label">{slide.eyebrow}</span>
          <h1>{slide.title}</h1>
          <p>{slide.text}</p>
          <div className="hero-buttons">
            <Link href="/planos" className="primary-button pn-magnetic-button">Escolher meu plano <ArrowRight size={20} /></Link>
            <Link href="/cobertura" className="secondary-button">Verificar cobertura <ArrowRight size={20} /></Link>
          </div>
          <div className="hero-features">
            <div><Gauge /><span>Alta velocidade<small>para sua rotina</small></span></div>
            <div><Wifi /><span>100% fibra<small>conexão estável</small></span></div>
            <div><Headphones /><span>Atendimento<small>gente de verdade</small></span></div>
          </div>
        </div>

        <div className="hero-video pn-hero-stage">
          <div className="pn-stage-glow" />
          <div className="pn-stage-grid" />
          <div className="pn-stage-card">
            <div className="pn-stage-top"><span><span className="pn-live-dot" /> PARQUE NET ONLINE</span><Zap size={17} /></div>
            <div className="pn-stage-speed">{slide.metric}</div>
            <p>{slide.label}</p>
            <div className="pn-stage-bars"><i /><i /><i /><i /><i /><i /><i /></div>
            <div className="pn-stage-bottom"><span>experiência sem travar</span><span>● estável</span></div>
          </div>
          <button type="button" className="pn-stage-play" aria-label="Assistir apresentação"><Play size={23} fill="currentColor" /></button>
          <div className="pn-stage-caption">ASSISTA À APRESENTAÇÃO DA PARQUE NET</div>
        </div>
      </div>

      <div className="pn-hero-controls" aria-label="Slides da apresentação">
        {slides.map((item, index) => (
          <button key={item.eyebrow} type="button" aria-label={`Ir para slide ${index + 1}`} className={index === active ? "active" : ""} onClick={() => setActive(index)}>
            <span>0{index + 1}</span><i />
          </button>
        ))}
      </div>
    </section>
  );
}

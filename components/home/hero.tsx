"use client";

import Link from "next/link";
import { ArrowRight, Headphones, Gauge, Wifi } from "lucide-react";
import styles from "./hero-motion.module.css";

export function Hero() {
  return (
    <section className="hero">
      <div className="hero-background" />
      <div className="hero-content">
        <div className="hero-text">
          <span className={`hero-label ${styles.motionItem} ${styles.delay1}`}>PARQUE NET TELECOM</span>
          <h1 className={`${styles.motionItem} ${styles.delay2}`}>Sua conexão.<br /><span>No seu ritmo.</span></h1>
          <p className={`${styles.motionItem} ${styles.delay3}`}>Internet <strong>100% fibra óptica</strong> para trabalhar, jogar, assistir e viver conectado.</p>
          <div className={`${styles.motionItem} ${styles.delay4} hero-buttons`}>
            <Link href="/planos" className={`${styles.button} primary-button`}>Conhecer planos <ArrowRight size={20} /></Link>
            <Link href="/cobertura" className={`${styles.button} secondary-button`}>Consultar cobertura <ArrowRight size={20} /></Link>
          </div>
          <div className={`${styles.motionItem} ${styles.delay5} hero-features`}>
            <div className={styles.feature}><Gauge /><span>Mais velocidade<small>para o dia a dia</small></span></div>
            <div className={styles.feature}><Wifi /><span>Conexão estável<small>sempre</small></span></div>
            <div className={styles.feature}><Headphones /><span>Atendimento<small>próximo e humanizado</small></span></div>
          </div>
        </div>
        <div className={`hero-video ${styles.video}`}>
          <div className="video-placeholder"><div className={`${styles.play} play-button`}>▶</div><span>ASSISTA À APRESENTAÇÃO</span></div>
        </div>
      </div>
    </section>
  );
}
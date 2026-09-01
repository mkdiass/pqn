"use client";

import { useEffect, useState } from "react";
import { Activity, Headphones, Map, ShieldCheck } from "lucide-react";
import styles from "./trust-stats.module.css";

const stats = [
  { value: 99.9, suffix: "%", label: "de disponibilidade", icon: Activity, decimals: 1 },
  { value: 24, suffix: "h", label: "suporte ao cliente", icon: Headphones, decimals: 0 },
  { value: 100, suffix: "%", label: "fibra óptica", icon: ShieldCheck, decimals: 0 },
  { value: 4, suffix: "+", label: "regiões atendidas", icon: Map, decimals: 0 },
];

function Counter({ value, suffix, decimals }: { value: number; suffix: string; decimals: number }) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const duration = 1400;
    const start = performance.now();
    let frame = 0;

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(value * eased);
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [value]);

  return <strong>{display.toFixed(decimals)}{suffix}</strong>;
}

export function TrustStats() {
  return (
    <section className={styles.section} aria-label="Números da Parque Net">
      <div className={styles.container}>
        <div className={styles.heading}>
          <span>PARQUE NET EM NÚMEROS</span>
          <h2>Conexão pensada para acompanhar a sua rotina.</h2>
          <p>Performance, estabilidade e atendimento próximo em uma experiência feita para durar.</p>
        </div>

        <div className={styles.grid}>
          {stats.map(({ icon: Icon, ...stat }) => (
            <article className={styles.card} key={stat.label}>
              <div className={styles.icon}><Icon size={21} /></div>
              <Counter {...stat} />
              <span>{stat.label}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

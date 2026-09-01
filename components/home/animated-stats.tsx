"use client";

import { useEffect, useState } from "react";
import { Activity, Gauge, MapPinned, Users } from "lucide-react";
import styles from "./stats.module.css";

const data = [
  [10000, "+", "clientes conectados", Users],
  [99.9, "%", "de disponibilidade", Activity],
  [100, "%", "fibra óptica", Gauge],
  [5, "+", "regiões atendidas", MapPinned],
] as const;

export function AnimatedStats() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const start = performance.now();
    let frame = 0;
    const tick = (now: number) => {
      const p = Math.min((now - start) / 1600, 1);
      setProgress(1 - Math.pow(1 - p, 3));
      if (p < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, []);

  return <section className={styles.stats}>
    <div className={styles.container}>
      {data.map(([target, suffix, label, Icon]) => {
        const value = target * progress;
        const formatted = suffix === "%" ? value.toFixed(1) : Math.round(value).toLocaleString("pt-BR");
        return <div key={label} className={`${styles.item} ${styles.show}`}><Icon size={22} /><strong>{formatted}{suffix}</strong><span>{label}</span></div>;
      })}
    </div>
  </section>;
}

"use client";

import { useEffect, useRef, useState } from "react";
import { Activity, Gauge, MapPinned, Users } from "lucide-react";
import styles from "./stats.module.css";

const items = [
  { value: 10000, suffix: "+", label: "clientes conectados", icon: Users },
  { value: 99.9, suffix: "%", label: "de disponibilidade", icon: Activity, decimals: 1 },
  { value: 100, suffix: "%", label: "fibra óptica", icon: Gauge },
  { value: 5, suffix: "+", label: "regiões atendidas", icon: MapPinned },
];

function AnimatedNumber({ value, decimals = 0, active }: { value: number; decimals?: number; active: boolean }) {
  const [current, setCurrent] = useState(0);
  const frame = useRef<number | null>(null);

  useEffect(() => {
    if (!active) return;
    const duration = 1400;
    const start = performance.now();

    const animate = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCurrent(value * eased);
      if (progress < 1) frame.current = requestAnimationFrame(animate);
    };

    frame.current = requestAnimationFrame(animate);
    return () => {
      if (frame.current) cancelAnimationFrame(frame.current);
    };
  }, [active, value]);

  return <>{current.toLocaleString("pt-BR", { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}</>;
}

export function Stats() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className={styles.stats}>
      <div className={styles.container}>
        {items.map((item, index) => {
          const Icon = item.icon;
          return (
            <div key={item.label} className={`${styles.item} ${visible ? styles.show : ""}`} style={{ transitionDelay: `${index * 100}ms` }}>
              <Icon size={22} />
              <strong><AnimatedNumber value={item.value} decimals={item.decimals} active={visible} />{item.suffix}</strong>
              <span>{item.label}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}

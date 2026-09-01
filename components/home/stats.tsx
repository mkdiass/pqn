"use client";

import { useEffect, useState } from "react";
import { Activity, Gauge, MapPinned, Users } from "lucide-react";
import styles from "./stats.module.css";

const items = [
  { value: 10000, suffix: "+", label: "clientes conectados", icon: Users },
  { value: 99.9, suffix: "%", label: "de disponibilidade", icon: Activity, decimals: 1 },
  { value: 100, suffix: "%", label: "fibra óptica", icon: Gauge },
  { value: 5, suffix: "+", label: "regiões atendidas", icon: MapPinned },
];

export function Stats() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(true), 120);
    return () => window.clearTimeout(timer);
  }, []);

  return <section className={styles.stats}>
    <div className={styles.container}>
      {items.map((item) => {
        const Icon = item.icon;
        return <div key={item.label} className={`${styles.item} ${visible ? styles.show : ""}`}>
          <Icon size={22} />
          <strong>{item.decimals ? item.value.toFixed(item.decimals) : item.value.toLocaleString("pt-BR")}{item.suffix}</strong>
          <span>{item.label}</span>
        </div>;
      })}
    </div>
  </section>;
}

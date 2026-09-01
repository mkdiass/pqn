"use client";

import { useEffect, useState } from "react";

const nodes = [[50,18],[24,35],[76,34],[16,64],[48,50],[84,61],[34,82],[67,79]] as const;
const links = [[0,1],[0,2],[1,3],[1,4],[2,4],[2,5],[3,4],[3,6],[4,6],[4,7],[5,7],[6,7]] as const;

export function NetworkVisual() {
  const [active, setActive] = useState(4);
  useEffect(() => {
    const timer = window.setInterval(() => setActive((value) => (value + 1) % nodes.length), 1100);
    return () => window.clearInterval(timer);
  }, []);
  return (
    <div className="pp-network" aria-label="Visualização da rede Parque Net" role="img">
      <div className="pp-network-glow" />
      <div className="pp-network-ring pp-ring-one" /><div className="pp-network-ring pp-ring-two" />
      <svg viewBox="0 0 100 100" className="pp-network-lines" aria-hidden="true">
        {links.map(([a,b]) => <line key={`${a}-${b}`} x1={nodes[a][0]} y1={nodes[a][1]} x2={nodes[b][0]} y2={nodes[b][1]} className={a === active || b === active ? "active" : ""} />)}
      </svg>
      {nodes.map(([x,y], index) => <span key={index} className={`pp-network-node ${index === active ? "active" : ""}`} style={{ left: `${x}%`, top: `${y}%` }}><i /></span>)}
      <div className="pp-network-center"><strong>PARQUE NET</strong><span>NETWORK CORE</span><b>● ONLINE</b></div>
      <div className="pp-network-label pp-label-a">FIBRA <strong>100%</strong></div>
      <div className="pp-network-label pp-label-b">LATÊNCIA <strong>4 ms</strong></div>
    </div>
  );
}

"use client";

import { Activity, Wifi } from "lucide-react";

export function NetworkVisual() {
  return (
    <div className="pp-network-visual" aria-label="Visualização da rede Parque Net">
      <div className="pp-network-grid" />
      <div className="pp-network-orbit orbit-one" /><div className="pp-network-orbit orbit-two" />
      <span className="pp-node node-a" /><span className="pp-node node-b" /><span className="pp-node node-c" />
      <div className="pp-network-core"><Wifi size={42} /><strong>1 GIGA</strong><small>REDE PARQUE NET</small></div>
      <div className="pp-network-status"><span /><div><strong>Rede operacional</strong><small>Latência média 4 ms</small></div><Activity size={18} /></div>
    </div>
  );
}

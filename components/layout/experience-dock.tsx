"use client";

import Link from "next/link";
import { ArrowRight, CircleHelp, MapPin, ShoppingCart, Sparkles, X } from "lucide-react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export function ExperienceDock() {
  const pathname = usePathname();
  const [progress, setProgress] = useState(0);
  const [open, setOpen] = useState(false);

  const hidden = pathname === "/cliente" || pathname.startsWith("/contratar");

  useEffect(() => {
    if (hidden) return;

    const update = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(scrollable > 0 ? Math.min(100, (window.scrollY / scrollable) * 100) : 0);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, [hidden]);

  if (hidden) return null;

  return (
    <>
      <div className="pn-scroll-progress" aria-hidden="true">
        <span style={{ width: `${progress}%` }} />
      </div>

      <aside className={`pn-experience-dock ${open ? "is-open" : ""}`} aria-label="Atalhos rápidos">
        {open && (
          <div className="pn-dock-panel">
            <div className="pn-dock-panel-head">
              <div>
                <span className="pn-dock-kicker">PARQUE NET</span>
                <strong>Vamos encontrar o que você precisa.</strong>
              </div>
              <button type="button" onClick={() => setOpen(false)} aria-label="Fechar atalhos">
                <X size={16} />
              </button>
            </div>

            <div className="pn-dock-actions">
              <Link href="/cobertura" onClick={() => setOpen(false)}>
                <span className="pn-dock-icon"><MapPin size={17} /></span>
                <span><strong>Verificar cobertura</strong><small>Descubra se já chegamos aí</small></span>
                <ArrowRight size={16} />
              </Link>
              <Link href="/planos" onClick={() => setOpen(false)}>
                <span className="pn-dock-icon"><ShoppingCart size={17} /></span>
                <span><strong>Escolher meu plano</strong><small>Compare as velocidades</small></span>
                <ArrowRight size={16} />
              </Link>
              <a href="https://wa.me/5511973587469?text=Ol%C3%A1%2C%20preciso%20de%20ajuda%20com%20a%20Parque%20Net." target="_blank" rel="noopener noreferrer">
                <span className="pn-dock-icon"><CircleHelp size={17} /></span>
                <span><strong>Falar com alguém</strong><small>Atendimento pelo WhatsApp</small></span>
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        )}

        <button type="button" className="pn-dock-trigger" onClick={() => setOpen((value) => !value)} aria-expanded={open}>
          <span className="pn-dock-trigger-icon"><Sparkles size={17} /></span>
          <span className="pn-dock-trigger-copy"><small>PRECISA DE UMA MÃO?</small><strong>Encontre seu próximo passo</strong></span>
          <ArrowRight size={17} className={open ? "pn-dock-arrow-open" : ""} />
        </button>
      </aside>
    </>
  );
}

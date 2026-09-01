import Link from "next/link";
import { ArrowUpRight, Instagram, MessageCircle } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="pp-footer">
      <div className="pp-footer-grid">
        <div className="pp-footer-brand">
          <div className="pp-brand pp-brand-footer"><span className="pp-brand-mark">PN</span><span><strong>PARQUE</strong><small>NET TELECOM</small></span></div>
          <p>Internet fibra óptica pensada para acompanhar sua casa, seu trabalho e tudo o que conecta você ao seu mundo.</p>
          <div className="pp-socials"><a href="#" aria-label="Instagram"><Instagram size={18} /></a><a href="#" aria-label="WhatsApp"><MessageCircle size={18} /></a></div>
        </div>
        <div><h4>Internet</h4><Link href="/planos">Planos</Link><Link href="/cobertura">Consultar cobertura</Link><Link href="/entretenimento">Entretenimento</Link></div>
        <div><h4>Atendimento</h4><Link href="/suporte">Central de suporte</Link><Link href="/suporte?tipo=internet">Problemas de internet</Link><Link href="/suporte?tipo=financeiro">Financeiro</Link><Link href="/cliente/login">Central do Cliente</Link></div>
        <div><h4>Parque Net</h4><Link href="/empresas">Para empresas</Link><Link href="/">Sobre nós</Link><a href="https://wa.me/5511999999999">WhatsApp <ArrowUpRight size={14} /></a></div>
      </div>
      <div className="pp-footer-bottom"><span>© {new Date().getFullYear()} Parque Net Telecom. Todos os direitos reservados.</span><span>Conexão feita para durar.</span></div>
    </footer>
  );
}

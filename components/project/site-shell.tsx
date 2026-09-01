import Link from "next/link";
import { ArrowRight, Headphones, MapPin, UserRound } from "lucide-react";

const links = [
  ["Planos", "/planos"],
  ["Cobertura", "/cobertura"],
  ["Empresas", "/empresas"],
  ["Entretenimento", "/entretenimento"],
  ["Suporte", "/suporte"],
] as const;

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="pp-shell">
      <header className="pp-nav">
        <div className="pp-nav-inner">
          <Link href="/" className="pp-brand" aria-label="Parque Net Telecom - início">
            <span className="pp-brand-mark"><span /><span /><span /></span>
            <span><strong>PARQUE NET</strong><small>TELECOM</small></span>
          </Link>
          <nav className="pp-nav-links" aria-label="Navegação principal">
            {links.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
          </nav>
          <div className="pp-nav-actions">
            <Link href="/suporte" className="pp-nav-icon" aria-label="Suporte"><Headphones size={17} /></Link>
            <Link href="/cobertura" className="pp-nav-coverage"><MapPin size={15} /> Cobertura</Link>
            <Link href="/cliente" className="pp-nav-client"><UserRound size={15} /> Central do cliente <ArrowRight size={14} /></Link>
            <details className="pp-mobile-menu">
              <summary aria-label="Abrir menu"><span /><span /><span /></summary>
              <nav aria-label="Navegação mobile">
                {links.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
                <Link href="/cliente">Central do cliente <ArrowRight size={14} /></Link>
              </nav>
            </details>
          </div>
        </div>
      </header>
      <main>{children}</main>
      <footer className="pp-footer">
        <div className="pp-footer-grid">
          <div><Link href="/" className="pp-brand pp-brand-footer"><span className="pp-brand-mark"><span /><span /><span /></span><span><strong>PARQUE NET</strong><small>TELECOM</small></span></Link><p>Internet de alta performance, com atendimento próximo e uma rede preparada para o futuro.</p></div>
          <div><strong>CONEXÃO</strong><Link href="/planos">Planos</Link><Link href="/cobertura">Cobertura</Link><Link href="/empresas">Para empresas</Link></div>
          <div><strong>ATENDIMENTO</strong><Link href="/suporte">Suporte</Link><Link href="/cliente">Central do cliente</Link><Link href="/cliente/login">Acessar conta</Link></div>
          <div><strong>PARQUE NET</strong><span>São Paulo · SP</span><span>Rede monitorada 24/7</span><span>Fibra óptica</span></div>
        </div>
        <div className="pp-footer-bottom"><span>© {new Date().getFullYear()} Parque Net Telecom. Todos os direitos reservados.</span><span>Conexão feita para durar.</span></div>
      </footer>
    </div>
  );
}

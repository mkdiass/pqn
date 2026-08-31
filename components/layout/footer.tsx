import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone, MessageCircle } from "lucide-react";

const mapUrl =
  "https://www.google.com/maps?q=Rua+Max+Satzke,+05,+Parque+Santo+Antonio,+Sao+Paulo+-+SP&output=embed";

export function Footer() {
  return (
    <>
      <section className="pn-location" aria-labelledby="onde-estamos">
        <div className="pn-location-grid">
          <div className="pn-location-card">
            <span className="pn-eyebrow">ONDE ESTAMOS</span>
            <h2 id="onde-estamos">A Parque Net perto de você.</h2>
            <p>
              Nossa sede fica na Zona Sul de São Paulo. Consulte sua cobertura
              e descubra se a nossa fibra já chega até o seu endereço.
            </p>
            <div className="pn-location-points">
              <div className="pn-location-point">
                <MapPin size={19} />
                <div><strong>Endereço</strong><span>Rua Max Satzke, 05 — Parque Santo Antônio, São Paulo — SP</span></div>
              </div>
              <div className="pn-location-point">
                <Phone size={19} />
                <div><strong>Telefone</strong><span>(11) 5198-4646</span></div>
              </div>
            </div>
            <div className="pn-actions">
              <Link href="/cobertura" className="pn-btn pn-btn-primary">Consultar cobertura</Link>
              <a href="https://www.google.com/maps/dir/?api=1&destination=Rua+Max+Satzke,+05,+Parque+Santo+Antonio,+Sao+Paulo+-+SP" target="_blank" rel="noopener noreferrer" className="pn-btn pn-btn-outline">Como chegar</a>
            </div>
          </div>
          <div className="pn-location-map">
            <iframe title="Localização da Parque Net Telecom" src={mapUrl} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>
        </div>
      </section>

      <footer className="pn-footer">
        <div className="pn-footer-main">
          <div className="pn-footer-brand">
            <Image src="/logo/logoPQN.png" alt="Parque Net Telecom" width={190} height={95} />
            <p>Internet 100% fibra óptica com velocidade, estabilidade e atendimento de qualidade para residências e empresas.</p>
          </div>
          <div>
            <h3>LINKS RÁPIDOS</h3>
            <div className="pn-footer-links">
              <Link href="/">Início</Link><Link href="/planos">Planos</Link><Link href="/cobertura">Área de cobertura</Link><Link href="/empresas">Empresas</Link><Link href="/entretenimento">Entretenimento</Link><Link href="/suporte">Suporte</Link>
            </div>
          </div>
          <div>
            <h3>ATENDIMENTO</h3>
            <div className="pn-footer-contact">
              <a href="https://wa.me/5511973587469" target="_blank" rel="noopener noreferrer"><MessageCircle size={17} />WhatsApp (11) 97358-7469</a>
              <a href="tel:+551151984646"><Phone size={17} />(11) 5198-4646</a>
              <a href="mailto:atendimento@parquenettelecom.com.br"><Mail size={17} />atendimento@parquenettelecom.com.br</a>
            </div>
          </div>
          <div>
            <h3>PARQUE NET</h3>
            <div className="pn-footer-contact">
              <div><MapPin size={17} />Rua Max Satzke, 05 — Parque Santo Antônio, São Paulo — SP</div>
              <div><span aria-hidden>▣</span>34.658.694/0001-70 — Parq Net Provedor de Serviços Internet LTDA</div>
            </div>
          </div>
        </div>
        <div className="pn-footer-bottom"><div className="pn-footer-bottom-inner"><span>© 2026 Parque Net — Todos os direitos reservados.</span><span>Internet 100% Fibra Óptica · Developed by MgDigital</span></div></div>
      </footer>
    </>
  );
}

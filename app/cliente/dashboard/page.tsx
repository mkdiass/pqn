import Link from "next/link";
import { Activity, ArrowRight, Bell, CreditCard, FileText, Gauge, Headphones, Home, LifeBuoy, LogOut, ReceiptText, Settings, ShieldCheck, Wifi, Zap } from "lucide-react";
import { redirect } from "next/navigation";
import { getClientSession } from "@/lib/auth";
import styles from "./dashboard.module.css";

const activityItems = [
  { icon: Wifi, title: "Conexão verificada", description: "Sua rede está funcionando normalmente.", time: "agora" },
  { icon: ShieldCheck, title: "Conta protegida", description: "Sessão autenticada com segurança.", time: "agora" },
  { icon: Zap, title: "Plano ativo", description: "Seu plano está disponível e funcionando.", time: "hoje" },
];

export default async function ClientDashboard() {
  const session = await getClientSession();
  if (!session) redirect("/cliente");
  const firstName = session.name.split(" ")[0];

  return (
    <main className={styles.shell}>
      <aside className={styles.sidebar}>
        <Link href="/" className={styles.brand} aria-label="Parque Net — início">PARQUE <span>NET</span></Link>
        <div className={styles.accountLabel}>CENTRAL DO CLIENTE</div>
        <nav className={styles.nav} aria-label="Navegação da Central do Cliente">
          <Link href="/cliente/dashboard" className={styles.active}><Home size={17}/><span>Visão geral</span></Link>
          <Link href="/cliente/contrato"><FileText size={17}/><span>Meu contrato</span></Link>
          <Link href="/cliente/faturas"><ReceiptText size={17}/><span>Faturas</span></Link>
          <a href="#performance"><Gauge size={17}/><span>Performance</span></a>
          <Link href="/suporte"><Headphones size={17}/><span>Suporte</span></Link>
          <Link href="/cliente/configuracoes"><Settings size={17}/><span>Configurações</span></Link>
        </nav>
        <div className={styles.sidebarFooter}><div className={styles.networkPulse} aria-hidden="true"><span /></div><div><strong>Rede Parque Net</strong><small>Operação normal</small></div></div>
      </aside>

      <div className={styles.main}>
        <header className={styles.topbar}>
          <div className={styles.crumbs}><span>Central do Cliente</span><i>/</i><strong>Visão geral</strong></div>
          <div className={styles.topActions}>
            <button className={styles.iconButton} type="button" aria-label="Notificações"><Bell size={17}/><span className={styles.notificationDot} aria-hidden="true"/></button>
            <div className={styles.profile}>
              <div className={styles.avatar}>{firstName.charAt(0).toUpperCase()}</div>
              <div className={styles.profileCopy}><strong>{session.name}</strong><span>{session.email}</span></div>
              <form action="/api/auth/logout" method="post"><button className={styles.logout} type="submit" aria-label="Sair da conta"><LogOut size={15}/></button></form>
            </div>
          </div>
        </header>

        <div className={styles.container}>
          <section className={styles.welcome}>
            <div><span className={styles.eyebrow}>BEM-VINDO DE VOLTA</span><h1>Olá, {firstName}.</h1><p>Tudo certo por aqui. Acompanhe sua conexão, consulte seu contrato, faturas e encontre suporte quando precisar.</p></div>
            <div className={styles.accountStatus}><span className={styles.statusDot}/><span>Conta ativa</span><i/><span>Atendimento 24/7</span></div>
          </section>

          <section className={styles.heroStatus} aria-labelledby="connection-title">
            <div className={styles.heroGlow} aria-hidden="true"/><div className={styles.statusMain}><div className={styles.statusIcon}><Wifi size={24}/></div><div><span className={styles.heroEyebrow}>STATUS DA CONEXÃO</span><h2 id="connection-title">Conexão ativa</h2><p>Sua fibra está operando normalmente neste momento.</p></div></div>
            <div className={styles.statusBadge}><span className={styles.liveDot}/>{session.status}</div>
          </section>

          <section className={styles.metrics} id="performance" aria-label="Indicadores da conexão">
            <article className={styles.metric}><div className={styles.metricTop}><label>VELOCIDADE</label><div className={styles.metricIcon}><Zap size={16}/></div></div><strong>700 <small>Mbps</small></strong><span>Plano contratado</span></article>
            <article className={styles.metric}><div className={styles.metricTop}><label>DISPONIBILIDADE</label><div className={styles.metricIcon}><ShieldCheck size={16}/></div></div><strong>99,9%</strong><span>Estabilidade da rede</span></article>
            <article className={styles.metric}><div className={styles.metricTop}><label>LATÊNCIA</label><div className={styles.metricIcon}><Activity size={16}/></div></div><strong>8 <small>ms</small></strong><span>Condição atual</span></article>
            <article className={`${styles.metric} ${styles.metricOnline}`}><div className={styles.metricTop}><label>STATUS</label><div className={styles.metricIcon}><Wifi size={16}/></div></div><strong>Online</strong><span><i className={styles.miniDot}/> Verificado agora</span></article>
          </section>

          <div className={styles.contentGrid}>
            <section className={`${styles.card} ${styles.planCard}`}><div className={styles.cardHeader}><div><span>SEU SERVIÇO</span><h2>{session.plan}</h2></div><Link href="/cliente/contrato" className={styles.link}>Ver contrato <ArrowRight size={14}/></Link></div><div className={styles.planVisual}><div><div className={styles.planSpeed}>700 <span>Mbps</span></div><div className={styles.planName}>Fibra óptica Parque Net</div><div className={styles.planMeta}>Alta performance para streaming, trabalho e jogos.</div></div><div className={styles.planOrb} aria-hidden="true"><Wifi size={38}/></div></div><div className={styles.quality}><div className={styles.qualityHead}><span>Qualidade estimada da experiência</span><strong>Excelente</strong></div><div className={styles.bar}><div className={styles.fill}/></div></div></section>

            <section className={styles.card}><div className={styles.cardHeader}><div><span>ACESSO RÁPIDO</span><h2>Resolva em poucos cliques</h2></div></div><div className={styles.actionList}>
              <Link href="/cliente/faturas" className={styles.actionItem}><span className={styles.actionIcon}><ReceiptText size={16}/></span><span><strong>Segunda via de fatura</strong><small>Consulte cobranças e documentos</small></span><ArrowRight size={15}/></Link>
              <Link href="/cliente/contrato" className={styles.actionItem}><span className={styles.actionIcon}><FileText size={16}/></span><span><strong>Meu contrato</strong><small>Veja condições e dados do serviço</small></span><ArrowRight size={15}/></Link>
              <Link href="/suporte" className={styles.actionItem}><span className={styles.actionIcon}><LifeBuoy size={16}/></span><span><strong>Falar com suporte</strong><small>Abra uma solicitação de atendimento</small></span><ArrowRight size={15}/></Link>
            </div></section>

            <section className={styles.card}><div className={styles.cardHeader}><div><span>ATIVIDADE</span><h2>Últimas atualizações</h2></div><span className={styles.updated}>Atualizado agora</span></div><div className={styles.activity}>{activityItems.map((item)=>{const Icon=item.icon;return <div className={styles.activityItem} key={item.title}><div className={styles.activityIcon}><Icon size={15}/></div><div><strong>{item.title}</strong><p>{item.description}</p></div><time>{item.time}</time></div>})}</div></section>

            <section className={`${styles.card} ${styles.financeCard}`}><div className={styles.cardHeader}><div><span>FINANCEIRO</span><h2>Controle suas faturas</h2></div><CreditCard size={19}/></div><div className={styles.financeValue}>Acesso disponível</div><p>Consulte vencimentos, pagamentos e segunda via na área financeira autenticada.</p><Link href="/cliente/financeiro" className={styles.financeLink}>Abrir financeiro <ArrowRight size={14}/></Link></section>

            <section className={`${styles.card} ${styles.support}`}><div><span className={styles.supportEyebrow}>PRECISA DE AJUDA?</span><h2>Estamos aqui.</h2><p>Resolva problemas de conexão, tire dúvidas ou solicite atendimento especializado.</p></div><Link href="/suporte">Abrir suporte <ArrowRight size={15}/></Link></section>
          </div>
          <p className={styles.footerNote}>Parque Net • Sua conexão. Seu controle.</p>
        </div>
      </div>
    </main>
  );
}

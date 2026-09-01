import Link from "next/link";
import { Activity, ArrowRight, CreditCard, Gauge, Headphones, Home, LifeBuoy, LogOut, Settings, ShieldCheck, Wifi, Zap } from "lucide-react";
import { redirect } from "next/navigation";
import { getClientSession } from "@/lib/auth";
import styles from "./dashboard.module.css";

export default async function ClientDashboard() {
  const session = await getClientSession();
  if (!session) redirect("/cliente");
  const firstName = session.name.split(" ")[0];

  return (
    <main className={styles.shell}>
      <aside className={styles.sidebar}>
        <Link href="/" className={styles.brand}>PARQUE <span>NET</span></Link>
        <nav className={styles.nav} aria-label="Navegação da Central do Cliente">
          <Link href="/cliente/dashboard" className={styles.active}><Home size={17}/><span>Visão geral</span></Link>
          <Link href="/planos"><Wifi size={17}/><span>Meu plano</span></Link>
          <a href="#consumo"><Gauge size={17}/><span>Performance</span></a>
          <a href="#financeiro"><CreditCard size={17}/><span>Financeiro</span></a>
          <Link href="/suporte"><Headphones size={17}/><span>Suporte</span></Link>
          <a href="#configuracoes"><Settings size={17}/><span>Configurações</span></a>
        </nav>
        <div className={styles.sidebarFooter}><small>PARQUE NET<br/>Central do Cliente • v2.0</small></div>
      </aside>
      <div className={styles.main}>
        <header className={styles.topbar}>
          <span className={styles.crumb}>Central do Cliente / Visão geral</span>
          <div className={styles.profile}>
            <div className={styles.avatar}>{firstName.charAt(0).toUpperCase()}</div>
            <div><strong>{session.name}</strong><span>{session.email}</span></div>
            <form action="/api/auth/logout" method="post"><button className={styles.logout} type="submit"><LogOut size={15}/></button></form>
          </div>
        </header>
        <div className={styles.container}>
          <section className={styles.welcome}><div><span className={styles.eyebrow}>ÁREA DO CLIENTE</span><h1>Olá, {firstName}.</h1><p>Seu serviço em um só lugar. Confira o estado da sua conexão e acesse rapidamente o que precisa.</p></div><span className={styles.time}>Conta ativa • Atendimento 24/7</span></section>
          <section className={styles.status}><div className={styles.statusMain}><div className={styles.statusIcon}><Wifi size={25}/></div><div><span className={styles.eyebrow}>STATUS DA CONEXÃO</span><h2>Conexão ativa</h2><p>Sua fibra está operando normalmente.</p></div></div><div className={styles.statusBadge}><i className={styles.dot}/> {session.status}</div></section>
          <section className={styles.metrics} id="consumo">
            <article className={styles.metric}><div className={styles.metricTop}><label>VELOCIDADE</label><div className={styles.metricIcon}><Zap size={17}/></div></div><strong>700 <small>Mbps</small></strong><small>Plano contratado</small></article>
            <article className={styles.metric}><div className={styles.metricTop}><label>DISPONIBILIDADE</label><div className={styles.metricIcon}><ShieldCheck size={17}/></div></div><strong>99,9%</strong><small>Estabilidade da rede</small></article>
            <article className={styles.metric}><div className={styles.metricTop}><label>LATÊNCIA</label><div className={styles.metricIcon}><Activity size={17}/></div></div><strong>8 <small>ms</small></strong><small>Condição atual</small></article>
            <article className={styles.metric}><div className={styles.metricTop}><label>STATUS</label><div className={styles.metricIcon}><Wifi size={17}/></div></div><strong>Online</strong><small>Última verificação agora</small></article>
          </section>
          <div className={styles.contentGrid}>
            <section className={styles.card}><div className={styles.cardHeader}><div><span>SEU SERVIÇO</span><h2>{session.plan}</h2></div><Link href="/planos" className={styles.link}>Detalhes <ArrowRight size={14}/></Link></div><div className={styles.plan}><div><div className={styles.planSpeed}>700 <span>Mbps</span></div><div className={styles.planName}>Fibra óptica Parque Net</div><div className={styles.planMeta}>Alta performance para streaming, trabalho e jogos.</div></div><Wifi size={46} strokeWidth={1.5}/></div><div className={styles.planProgress}><div className={styles.bar}><div className={styles.fill}/></div><div className={styles.progressText}><span>Qualidade estimada da experiência</span><strong>Excelente</strong></div></div></section>
            <section className={styles.card} id="financeiro"><div className={styles.cardHeader}><div><span>ACESSO RÁPIDO</span><h2>O que você precisa?</h2></div></div><div className={styles.quick}><Link href="/planos"><Wifi size={16}/> Meu plano</Link><Link href="/suporte"><LifeBuoy size={16}/> Suporte</Link><Link href="/cobertura"><Home size={16}/> Cobertura</Link><a href="#financeiro"><CreditCard size={16}/> Financeiro</a></div></section>
            <section className={styles.card}><div className={styles.cardHeader}><div><span>ATIVIDADE</span><h2>Últimas atualizações</h2></div></div><div className={styles.activity}><div className={styles.activityItem}><div className={styles.activityIcon}><Wifi size={15}/></div><div><strong>Conexão verificada</strong><p>Sua rede está funcionando normalmente.</p></div><time>agora</time></div><div className={styles.activityItem}><div className={styles.activityIcon}><ShieldCheck size={15}/></div><div><strong>Conta protegida</strong><p>Sessão autenticada com segurança.</p></div><time>agora</time></div><div className={styles.activityItem}><div className={styles.activityIcon}><Zap size={15}/></div><div><strong>Plano ativo</strong><p>{session.plan} disponível na sua conta.</p></div><time>hoje</time></div></div></section>
            <section className={`${styles.card} ${styles.support}`}><div className={styles.cardHeader}><div><span>PRECISA DE AJUDA?</span><h2>Estamos aqui.</h2></div><Headphones size={22}/></div><p>Abra nossa central de suporte para resolver problemas de conexão, dúvidas financeiras ou solicitar atendimento.</p><Link href="/suporte">Abrir suporte <ArrowRight size={15}/></Link></section>
          </div>
          <p className={styles.footerNote}>Parque Net • Sua conexão. Seu controle.</p>
        </div>
      </div>
    </main>
  );
}

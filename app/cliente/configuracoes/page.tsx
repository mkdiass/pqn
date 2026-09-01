import Link from "next/link";
import { ArrowLeft, Bell, LockKeyhole, Mail, Settings2, ShieldCheck } from "lucide-react";
import { redirect } from "next/navigation";
import { getClientSession } from "@/lib/auth";
import styles from "../client-section.module.css";

export const metadata = { title: "Configurações | Central do Cliente | Parque Net" };

export default async function SettingsPage() {
  const session = await getClientSession();
  if (!session) redirect("/cliente");

  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <Link href="/cliente/dashboard" className={styles.back}><ArrowLeft size={16} /> Voltar à visão geral</Link>
        <div className={styles.brand}>PARQUE <span>NET</span></div>
      </header>
      <div className={styles.container}>
        <div className={styles.eyebrow}>CENTRAL DO CLIENTE / CONFIGURAÇÕES</div>
        <h1>Configurações</h1>
        <p className={styles.lead}>Gerencie as preferências e informações da sua conta Parque Net.</p>

        <section className={styles.profileCard}>
          <div className={styles.avatar}>{session.name.charAt(0).toUpperCase()}</div>
          <div><span>CONTA</span><h2>{session.name}</h2><p>{session.email}</p></div>
          <div className={styles.secure}><ShieldCheck size={17} /> Conta protegida</div>
        </section>

        <div className={styles.settingsGrid}>
          <section className={styles.card}><div className={styles.icon}><Mail size={19}/></div><span>CONTATO</span><h2>Dados de contato</h2><p>Seu e-mail de acesso atual é <strong>{session.email}</strong>.</p><button type="button" disabled>Editar contato</button></section>
          <section className={styles.card}><div className={styles.icon}><LockKeyhole size={19}/></div><span>SEGURANÇA</span><h2>Acesso e senha</h2><p>Altere sua senha e mantenha sua conta protegida.</p><Link href="/cliente/login">Gerenciar acesso</Link></section>
          <section className={styles.card}><div className={styles.icon}><Bell size={19}/></div><span>NOTIFICAÇÕES</span><h2>Preferências</h2><p>Preferências de alertas estarão disponíveis quando as notificações forem integradas.</p><button type="button" disabled>Configurar alertas</button></section>
          <section className={styles.card}><div className={styles.icon}><Settings2 size={19}/></div><span>CONTA</span><h2>Preferências gerais</h2><p>Personalizações adicionais da Central do Cliente serão disponibilizadas aqui.</p><button type="button" disabled>Em breve</button></section>
        </div>
        <div className={styles.demo}>ALGUMAS OPÇÕES ESTÃO BLOQUEADAS ATÉ A INTEGRAÇÃO COM O BACKEND</div>
      </div>
    </main>
  );
}

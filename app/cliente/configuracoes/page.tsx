import Link from "next/link";
import { ArrowLeft, LockKeyhole, Settings2, ShieldCheck } from "lucide-react";
import { redirect } from "next/navigation";
import { getClientSession } from "@/lib/auth";
import { SettingsForm } from "./settings-form";
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
        <p className={styles.lead}>Controle preferências da sua conta e veja quais recursos já estão disponíveis na Central.</p>

        <section className={styles.profileCard}>
          <div className={styles.avatar}>{session.name.charAt(0).toUpperCase()}</div>
          <div><span>CONTA</span><h2>{session.name}</h2><p>{session.email}</p></div>
          <div className={styles.secure}><ShieldCheck size={17} /> Conta protegida</div>
        </section>

        <div className={styles.settingsGrid}>
          <SettingsForm email={session.email} />
          <section className={styles.card}>
            <div className={styles.icon}><LockKeyhole size={19}/></div>
            <span>SEGURANÇA</span>
            <h2>Acesso e senha</h2>
            <p>Sua sessão atual é protegida por cookie HTTP-only. A troca de senha ficará disponível quando a autenticação estiver ligada ao cadastro real.</p>
            <div className={styles.pendingAction}><ShieldCheck size={15} /> Sessão autenticada</div>
          </section>
          <section className={styles.card}>
            <div className={styles.icon}><Settings2 size={19}/></div>
            <span>PRÓXIMA ETAPA</span>
            <h2>Integração da conta</h2>
            <p>O próximo nível é conectar preferências, cadastro e segurança ao ERP/IXC, permitindo alterações persistentes em qualquer dispositivo.</p>
            <Link href="/cliente/financeiro">Ver área financeira <ArrowLeft size={14} className={styles.forwardIcon}/></Link>
          </section>
        </div>
        <div className={styles.demo}>PREFERÊNCIAS LOCAIS FUNCIONAIS · DADOS DE CONTA E AUTENTICAÇÃO AINDA EM MODO DEMONSTRATIVO</div>
      </div>
    </main>
  );
}

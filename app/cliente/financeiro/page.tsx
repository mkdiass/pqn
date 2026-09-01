import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2, CreditCard, Download, ReceiptText } from "lucide-react";
import { redirect } from "next/navigation";
import { getClientSession } from "@/lib/auth";
import styles from "../client-section.module.css";

export const metadata = { title: "Financeiro | Central do Cliente | Parque Net" };

export default async function FinancePage() {
  const session = await getClientSession();
  if (!session) redirect("/cliente");

  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <Link href="/cliente/dashboard" className={styles.back}><ArrowLeft size={16} /> Voltar à visão geral</Link>
        <div className={styles.brand}>PARQUE <span>NET</span></div>
      </header>
      <div className={styles.container}>
        <div className={styles.eyebrow}>CENTRAL DO CLIENTE / FINANCEIRO</div>
        <h1>Financeiro</h1>
        <p className={styles.lead}>Acompanhe sua situação financeira e tenha acesso rápido aos seus documentos.</p>

        <section className={styles.balance}>
          <div><span>SITUAÇÃO DA CONTA</span><strong>Em dia</strong><p>Nenhuma pendência disponível nesta conta de demonstração.</p></div>
          <CheckCircle2 size={34} />
        </section>

        <div className={styles.grid}>
          <section className={styles.card}>
            <div className={styles.icon}><CreditCard size={19} /></div>
            <span>PLANO ATUAL</span><h2>{session.plan}</h2>
            <p>Mensalidade e condições serão exibidas aqui quando a integração financeira estiver conectada.</p>
            <Link href="/planos">Consultar plano <ArrowRight size={15} /></Link>
          </section>
          <section className={styles.card}>
            <div className={styles.icon}><ReceiptText size={19} /></div>
            <span>FATURAS</span><h2>Documentos</h2>
            <p>O histórico de faturas ficará disponível nesta área após a integração com o sistema financeiro.</p>
            <button type="button" disabled><Download size={15} /> Baixar fatura</button>
          </section>
        </div>
        <div className={styles.demo}>DADOS DE DEMONSTRAÇÃO · INTEGRAÇÃO FINANCEIRA PENDENTE</div>
      </div>
    </main>
  );
}

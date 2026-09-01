import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2, CreditCard, FileText, ReceiptText } from "lucide-react";
import { redirect } from "next/navigation";
import { getClientSession } from "@/lib/auth";
import { clientInvoices, clientContract } from "@/data/client-portal";
import styles from "../client-section.module.css";

export const metadata = { title: "Financeiro | Central do Cliente | Parque Net" };
const money = (value: number) => value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

export default async function FinancePage() {
  const session = await getClientSession();
  if (!session) redirect("/cliente");
  const openInvoice = clientInvoices.find((invoice) => invoice.status === "Aberta");

  return (
    <main className={styles.page}>
      <header className={styles.header}><Link href="/cliente/dashboard" className={styles.back}><ArrowLeft size={16}/> Voltar à visão geral</Link><div className={styles.brand}>PARQUE <span>NET</span></div></header>
      <div className={styles.container}>
        <div className={styles.eyebrow}>CENTRAL DO CLIENTE / FINANCEIRO</div><h1>Financeiro</h1>
        <p className={styles.lead}>Tenha uma visão clara da sua conta, vencimentos, pagamentos e documentos financeiros.</p>

        <section className={styles.balance}><div><span>SITUAÇÃO DA CONTA</span><strong>{openInvoice ? "Cobrança em aberto" : "Em dia"}</strong><p>{openInvoice ? `${money(openInvoice.amount)} com vencimento em ${openInvoice.dueDate}.` : "Nenhuma cobrança em aberto."}</p></div><CheckCircle2 size={34}/></section>

        <div className={styles.grid}>
          <section className={styles.card}><div className={styles.icon}><CreditCard size={19}/></div><span>PLANO ATUAL</span><h2>{session.plan}</h2><p>Mensalidade de {money(clientContract.monthlyAmount)} · vencimento todo dia {clientContract.billingDay}.</p><Link href="/cliente/contrato">Ver contrato <ArrowRight size={15}/></Link></section>
          <section className={styles.card}><div className={styles.icon}><ReceiptText size={19}/></div><span>FATURAS</span><h2>{clientInvoices.length} documentos</h2><p>Consulte o histórico e abra a segunda via de uma cobrança autenticada.</p><Link href="/cliente/faturas">Abrir faturas <ArrowRight size={15}/></Link></section>
        </div>

        <section className={styles.card + " " + styles.fullCard}><div className={styles.cardHeaderRow}><div><span>RESUMO</span><h2>Seu financeiro em um só lugar</h2></div><FileText size={19}/></div><div className={styles.summaryGrid}><div><small>Próximo vencimento</small><strong>{openInvoice?.dueDate ?? "—"}</strong></div><div><small>Próximo valor</small><strong>{openInvoice ? money(openInvoice.amount) : "—"}</strong></div><div><small>Status do contrato</small><strong>{clientContract.status}</strong></div></div></section>
        <div className={styles.demo}>DADOS FINANCEIROS DE DEMONSTRAÇÃO · INTEGRAÇÃO COM ERP/IXC PENDENTE</div>
      </div>
    </main>
  );
}

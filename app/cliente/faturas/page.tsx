import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2, Download, ReceiptText } from "lucide-react";
import { redirect } from "next/navigation";
import { getClientSession } from "@/lib/auth";
import { clientInvoices } from "@/data/client-portal";
import styles from "../client-section.module.css";

export const metadata = { title: "Faturas | Central do Cliente | Parque Net" };

const money = (value: number) => value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

export default async function InvoicesPage() {
  const session = await getClientSession();
  if (!session) redirect("/cliente");
  const openInvoice = clientInvoices.find((invoice) => invoice.status === "Aberta");

  return (
    <main className={styles.page}>
      <header className={styles.header}><Link href="/cliente/financeiro" className={styles.back}><ArrowLeft size={16}/> Voltar ao financeiro</Link><div className={styles.brand}>PARQUE <span>NET</span></div></header>
      <div className={styles.container}>
        <div className={styles.eyebrow}>CENTRAL DO CLIENTE / FATURAS</div><h1>Faturas e pagamentos</h1>
        <p className={styles.lead}>Consulte o histórico financeiro e acesse a segunda via de cada cobrança sem sair da Central.</p>

        <section className={styles.balance}><div><span>PRÓXIMO VENCIMENTO</span><strong>{openInvoice ? openInvoice.dueDate : "Sem cobranças abertas"}</strong><p>{openInvoice ? `${money(openInvoice.amount)} · ${openInvoice.reference}` : "Sua conta não possui uma cobrança em aberto."}</p></div><ReceiptText size={34}/></section>

        <section className={styles.card + " " + styles.fullCard}><div className={styles.cardHeaderRow}><div><span>HISTÓRICO</span><h2>Documentos financeiros</h2></div><span className={styles.secure}><CheckCircle2 size={15}/> Área autenticada</span></div>
          <div className={styles.invoiceList}>{clientInvoices.map((invoice) => <article className={styles.invoiceRow} key={invoice.id}><div className={styles.invoiceIcon}><ReceiptText size={17}/></div><div><strong>{invoice.reference}</strong><small>Vencimento {invoice.dueDate}</small></div><strong>{money(invoice.amount)}</strong><span className={invoice.status === "Pago" ? styles.paid : styles.open}>{invoice.status}</span><a href={`/api/cliente/faturas/${invoice.id}`} className={styles.download}><Download size={15}/> Segunda via</a></article>)}</div>
        </section>
        <section className={styles.card + " " + styles.infoCard}><span>COMO FUNCIONA</span><h2>Segunda via segura</h2><p>O endpoint de documentos deve validar a sessão do cliente antes de liberar qualquer fatura. No ambiente atual, o conteúdo é demonstrativo e preparado para a futura integração financeira.</p><Link href="/cliente/contrato">Consultar contrato <ArrowRight size={15}/></Link></section>
        <div className={styles.demo}>DADOS FINANCEIROS DE DEMONSTRAÇÃO · INTEGRAÇÃO COM ERP/IXC PENDENTE</div>
      </div>
    </main>
  );
}

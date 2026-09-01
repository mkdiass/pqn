import Link from "next/link";
import { ArrowLeft, CheckCircle2, FileText, LockKeyhole, ShieldCheck } from "lucide-react";
import { redirect } from "next/navigation";
import { getClientSession } from "@/lib/auth";
import { clientBenefits, clientContract } from "@/data/client-portal";
import styles from "../client-section.module.css";

export const metadata = { title: "Contrato | Central do Cliente | Parque Net" };

export default async function ContractPage() {
  const session = await getClientSession();
  if (!session) redirect("/cliente");

  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <Link href="/cliente/dashboard" className={styles.back}><ArrowLeft size={16} /> Voltar à visão geral</Link>
        <div className={styles.brand}>PARQUE <span>NET</span></div>
      </header>
      <div className={styles.container}>
        <div className={styles.eyebrow}>CENTRAL DO CLIENTE / CONTRATO</div>
        <h1>Meu contrato</h1>
        <p className={styles.lead}>Consulte os principais dados do seu serviço, condições comerciais e situação contratual em um só lugar.</p>

        <section className={styles.balance}>
          <div><span>SITUAÇÃO CONTRATUAL</span><strong>{clientContract.status}</strong><p>Contrato {clientContract.number} · vigente desde {clientContract.startedAt}.</p></div>
          <ShieldCheck size={34} />
        </section>

        <div className={styles.grid}>
          <section className={styles.card}><div className={styles.icon}><FileText size={19}/></div><span>RESUMO</span><h2>{clientContract.plan}</h2><p>Mensalidade de R$ {clientContract.monthlyAmount.toFixed(2).replace(".", ",")} · vencimento todo dia {clientContract.billingDay}.</p><div className={styles.detailList}><div><small>Início</small><strong>{clientContract.startedAt}</strong></div><div><small>Renovação prevista</small><strong>{clientContract.renewalAt}</strong></div><div><small>Fidelidade</small><strong>{clientContract.loyalty}</strong></div></div></section>
          <section className={styles.card}><div className={styles.icon}><LockKeyhole size={19}/></div><span>SEGURANÇA E ACESSO</span><h2>Dados protegidos</h2><p>Esta área exige uma sessão autenticada. Informações contratuais não ficam expostas na navegação pública.</p><div className={styles.secure}><CheckCircle2 size={16}/> Sessão validada</div></section>
        </div>

        <section className={styles.card + " " + styles.fullCard}>
          <span>O QUE ESTÁ INCLUÍDO</span><h2>Benefícios do serviço</h2>
          <div className={styles.benefitsList}>{clientBenefits.map((benefit) => <div key={benefit}><CheckCircle2 size={16}/><span>{benefit}</span></div>)}</div>
        </section>

        <div className={styles.demo}>BASE CONTRATUAL DE DEMONSTRAÇÃO · NO BACKEND REAL, ESTES DADOS DEVEM VIR DO SISTEMA DE GESTÃO</div>
      </div>
    </main>
  );
}

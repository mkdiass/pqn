import Link from "next/link";

export default function NotFound() {
  return (
    <main className="system-state">
      <span className="system-state__eyebrow">404</span>
      <h1>Essa página não existe.</h1>
      <p>O endereço pode ter mudado ou não fazer parte do Project Parque Net.</p>
      <Link href="/" className="system-state__button">
        Voltar para o início
      </Link>
    </main>
  );
}

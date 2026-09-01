"use client";

import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="system-state">
      <span className="system-state__eyebrow">PARQUE NET</span>
      <h1>Algo não saiu como esperado.</h1>
      <p>Não se preocupe. Sua conexão com a página pode ser retomada agora.</p>
      <button type="button" onClick={() => reset()} className="system-state__button">
        Tentar novamente
      </button>
    </main>
  );
}

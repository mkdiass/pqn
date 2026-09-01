"use client";

import { useSyncExternalStore, useState } from "react";
import { Bell, Check, Mail, ShieldCheck } from "lucide-react";
import styles from "../client-section.module.css";

type Preferences = {
  billing: boolean;
  service: boolean;
  offers: boolean;
};

const STORAGE_KEY = "pqn-client-preferences";
const STORAGE_EVENT = "pqn-preferences-change";
const defaultPreferences: Preferences = { billing: true, service: true, offers: false };
const defaultSnapshot = JSON.stringify(defaultPreferences);

function readSnapshot() {
  try {
    return window.localStorage.getItem(STORAGE_KEY) ?? defaultSnapshot;
  } catch {
    return defaultSnapshot;
  }
}

function subscribe(callback: () => void) {
  const handleStorage = () => callback();
  window.addEventListener("storage", handleStorage);
  window.addEventListener(STORAGE_EVENT, handleStorage);
  return () => {
    window.removeEventListener("storage", handleStorage);
    window.removeEventListener(STORAGE_EVENT, handleStorage);
  };
}

export function SettingsForm({ email }: { email: string }) {
  const snapshot = useSyncExternalStore(subscribe, readSnapshot, () => defaultSnapshot);
  const [saved, setSaved] = useState(false);
  let preferences = defaultPreferences;

  try {
    const parsed = JSON.parse(snapshot) as Partial<Preferences>;
    preferences = { ...defaultPreferences, ...parsed };
  } catch {
    preferences = defaultPreferences;
  }

  function updatePreference(key: keyof Preferences) {
    const next = { ...preferences, [key]: !preferences[key] };
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      window.dispatchEvent(new Event(STORAGE_EVENT));
    } catch {
      // The preference remains unavailable for persistence when browser storage is blocked.
    }
    setSaved(true);
    window.setTimeout(() => setSaved(false), 1800);
  }

  return (
    <>
      <section className={styles.card}>
        <div className={styles.icon}><Bell size={19} /></div>
        <span>NOTIFICAÇÕES</span>
        <h2>Escolha o que deseja receber</h2>
        <p>As preferências abaixo ficam salvas neste dispositivo enquanto a integração de notificações do backend não estiver ativa.</p>
        <div className={styles.preferenceList}>
          <PreferenceRow label="Cobranças e vencimentos" description="Lembretes sobre faturas e pagamentos." checked={preferences.billing} onChange={() => updatePreference("billing")} />
          <PreferenceRow label="Avisos do serviço" description="Atualizações importantes sobre sua conexão." checked={preferences.service} onChange={() => updatePreference("service")} />
          <PreferenceRow label="Ofertas e novidades" description="Novos planos, serviços e benefícios." checked={preferences.offers} onChange={() => updatePreference("offers")} />
        </div>
        <div className={styles.savedState} aria-live="polite">{saved ? <><Check size={15} /> Preferência salva</> : "Salvamento automático ativo"}</div>
      </section>

      <section className={styles.card}>
        <div className={styles.icon}><Mail size={19} /></div>
        <span>CONTATO</span>
        <h2>Seu e-mail de acesso</h2>
        <p>Este endereço é usado para identificar sua conta na Central. A alteração de dados pessoais será liberada quando o cadastro estiver conectado ao sistema de gestão.</p>
        <div className={styles.contactValue}>{email}</div>
        <div className={styles.pendingAction}><ShieldCheck size={15} /> Alteração protegida pelo backend</div>
      </section>
    </>
  );
}

function PreferenceRow({ label, description, checked, onChange }: { label: string; description: string; checked: boolean; onChange: () => void }) {
  return (
    <div className={styles.preferenceRow}>
      <div><strong>{label}</strong><small>{description}</small></div>
      <button className={`${styles.switch} ${checked ? styles.switchOn : ""}`} type="button" role="switch" aria-checked={checked} aria-label={`${label}: ${checked ? "ativado" : "desativado"}`} onClick={onChange}><span /></button>
    </div>
  );
}

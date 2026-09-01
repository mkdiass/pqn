import { Navbar } from "@/components/layout/navbar";
import { ClientLogin } from "@/components/cliente/client-login";
import { WhatsAppFloat } from "@/components/layout/whatsapp-float";

export default function ClientePage() {
  return (
    <>
      <Navbar />
      <ClientLogin />
      <WhatsAppFloat />
    </>
  );
}

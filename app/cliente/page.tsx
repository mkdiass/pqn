import { redirect } from "next/navigation";
export const metadata={title:"Central do Cliente | Parque Net",description:"Acesse sua Central do Cliente Parque Net."};
export default function ClientEntry(){redirect("/cliente/login")}

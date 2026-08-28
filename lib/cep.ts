export type CepAddress = {
  cep: string;
  street: string;
  neighborhood: string;
  city: string;
  state: string;
};

export async function getAddressByCep(
  cep: string
): Promise<CepAddress | null> {
  const cleanCep = cep.replace(/\D/g, "");

  if (cleanCep.length !== 8) {
    return null;
  }

  try {
    const response = await fetch(
      `https://viacep.com.br/ws/${cleanCep}/json/`
    );

    if (!response.ok) {
      return null;
    }

    const data = await response.json();

    if (data.erro) {
      return null;
    }

    return {
      cep: data.cep,
      street: data.logradouro,
      neighborhood: data.bairro,
      city: data.localidade,
      state: data.uf,
    };
  } catch {
    return null;
  }
}
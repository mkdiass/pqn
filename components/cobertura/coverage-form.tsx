"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowRight, Loader2, MapPin, Search } from "lucide-react";

import { getAddressByCep } from "@/lib/cep";
import { checkCoverage } from "@/lib/coverage";
import { CoverageResult } from "./coverage-result";

type CoverageFormProps = {
  initialCep?: string;
  autoSearchToken?: number;
};

export function CoverageForm({
  initialCep = "",
  autoSearchToken = 0,
}: CoverageFormProps) {
  const [cep, setCep] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [addressFound, setAddressFound] = useState(false);
  const [coverageChecked, setCoverageChecked] = useState(false);
  const [hasCoverage, setHasCoverage] = useState(false);

  const [address, setAddress] = useState({
    street: "",
    neighborhood: "",
    city: "",
    state: "",
  });

  const [number, setNumber] = useState("");
  const [complement, setComplement] = useState("");
  const resultRef = useRef<HTMLDivElement | null>(null);

  function formatCep(value: string) {
    const numbers = value.replace(/\D/g, "").slice(0, 8);

    if (numbers.length > 5) {
      return `${numbers.slice(0, 5)}-${numbers.slice(5)}`;
    }

    return numbers;
  }

  const searchCep = useCallback(async (cleanCep: string, shouldScroll = false) => {
    if (cleanCep.length !== 8) {
      setError("Digite um CEP válido.");
      return;
    }

    setLoading(true);
    setError("");
    setAddressFound(false);
    setCoverageChecked(false);

    try {
      const result = await getAddressByCep(cleanCep);

      if (!result) {
        setError(
          "Não encontramos esse CEP. Verifique os números e tente novamente."
        );
        return;
      }

      setAddress({
        street: result.street,
        neighborhood: result.neighborhood,
        city: result.city,
        state: result.state,
      });

      setNumber("");
      setComplement("");
      setAddressFound(true);

      if (shouldScroll) {
        requestAnimationFrame(() => {
          document.getElementById("coverage-consulta")?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        });
      }
    } catch {
      setError("Não foi possível consultar o CEP. Tente novamente.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (!autoSearchToken || !initialCep) {
      return;
    }

    const cleanCep = initialCep.replace(/\D/g, "");
    setCep(formatCep(cleanCep));
    void searchCep(cleanCep, true);
  }, [autoSearchToken, initialCep, searchCep]);

  function handleCepChange(event: React.ChangeEvent<HTMLInputElement>) {
    const formattedCep = formatCep(event.target.value);

    setCep(formattedCep);
    setAddressFound(false);
    setCoverageChecked(false);
    setError("");
  }

  function handleSearchCep() {
    void searchCep(cep.replace(/\D/g, ""));
  }

  function handleCoverageSearch() {
    if (!addressFound) {
      setError("Primeiro consulte um CEP válido.");
      return;
    }

    if (!number.trim()) {
      setError("Digite o número do endereço.");
      return;
    }

    setError("");

    const result = checkCoverage({
      street: address.street,
      neighborhood: address.neighborhood,
      city: address.city,
      state: address.state,
    });

    setHasCoverage(result);
    setCoverageChecked(true);

    requestAnimationFrame(() => {
      resultRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    });
  }

  return (
    <>
      <section id="coverage-consulta" className="coverage-form-section">
        <div className="coverage-form-container">
          <div className="coverage-form-heading">
            <span>CONSULTE SUA COBERTURA</span>

            <h2>
              Descubra se a Parque Net
              <br />
              <strong>chega até você.</strong>
            </h2>

            <p>
              Digite seu CEP para encontrarmos seu endereço e verificarmos a
              disponibilidade da nossa rede.
            </p>
          </div>

          <div className="coverage-form-card">
            <div className="coverage-form-card-header">
              <div className="coverage-form-card-icon">
                <MapPin size={22} />
              </div>

              <div>
                <h3>Qual é o seu endereço?</h3>
                <p>Comece informando seu CEP.</p>
              </div>
            </div>

            <div className="coverage-form">
              <div className="coverage-field coverage-cep-field">
                <label htmlFor="cep">CEP</label>

                <div className="coverage-cep-input">
                  <input
                    id="cep"
                    type="text"
                    inputMode="numeric"
                    placeholder="00000-000"
                    value={cep}
                    onChange={handleCepChange}
                    onKeyDown={(event) => {
                      if (event.key === "Enter") {
                        event.preventDefault();
                        handleSearchCep();
                      }
                    }}
                    maxLength={9}
                  />

                  <button
                    type="button"
                    onClick={handleSearchCep}
                    disabled={
                      loading || cep.replace(/\D/g, "").length !== 8
                    }
                  >
                    {loading ? (
                      <Loader2 size={19} className="coverage-loading" />
                    ) : (
                      <>
                        <Search size={18} />
                        Buscar endereço
                      </>
                    )}
                  </button>
                </div>

                {error && (
                  <p className="coverage-form-error">{error}</p>
                )}

                <a
                  href="https://buscacepinter.correios.com.br/app/endereco/index.php"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="coverage-cep-help"
                >
                  Não sabe seu CEP?
                </a>
              </div>

              {addressFound && (
                <div className="coverage-address-fields">
                  <div className="coverage-field">
                    <label htmlFor="street">Rua</label>
                    <input
                      id="street"
                      type="text"
                      value={address.street}
                      readOnly
                    />
                  </div>

                  <div className="coverage-field coverage-number-field">
                    <label htmlFor="number">Número</label>
                    <input
                      id="number"
                      type="text"
                      inputMode="numeric"
                      placeholder="Ex.: 123"
                      value={number}
                      onChange={(event) =>
                        setNumber(event.target.value.replace(/\D/g, ""))
                      }
                    />
                  </div>

                  <div className="coverage-field">
                    <label htmlFor="neighborhood">Bairro</label>
                    <input
                      id="neighborhood"
                      type="text"
                      value={address.neighborhood}
                      readOnly
                    />
                  </div>

                  <div className="coverage-field">
                    <label htmlFor="city">Cidade</label>
                    <input
                      id="city"
                      type="text"
                      value={address.city}
                      readOnly
                    />
                  </div>

                  <div className="coverage-field">
                    <label htmlFor="complement">
                      Complemento
                      <span>Opcional</span>
                    </label>
                    <input
                      id="complement"
                      type="text"
                      placeholder="Apartamento, bloco..."
                      value={complement}
                      onChange={(event) => setComplement(event.target.value)}
                    />
                  </div>

                  <button
                    type="button"
                    className="coverage-submit-button"
                    onClick={handleCoverageSearch}
                  >
                    Consultar cobertura
                    <ArrowRight size={19} />
                  </button>
                </div>
              )}
            </div>

            <div className="coverage-form-security">
              <span>🔒</span>
              <p>
                Seus dados são utilizados apenas para verificar a
                disponibilidade da nossa rede.
              </p>
            </div>
          </div>
        </div>
      </section>

      {coverageChecked && (
        <div ref={resultRef}>
          <CoverageResult hasCoverage={hasCoverage} />
        </div>
      )}
    </>
  );
}

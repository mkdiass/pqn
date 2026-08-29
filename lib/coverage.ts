import { coverageLocations } from "@/data/coverage";

type CheckCoverageParams = {
  street: string;
  neighborhood: string;
  city: string;
  state: string;
};

function normalize(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-zA-Z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();
}

function matchesLocation(value: string, registeredValues: string[]) {
  const normalizedValue = normalize(value);

  if (!normalizedValue) {
    return false;
  }

  return registeredValues.some((registeredValue) => {
    const normalizedRegistered = normalize(registeredValue);

    return (
      normalizedRegistered === normalizedValue ||
      normalizedValue.includes(normalizedRegistered) ||
      normalizedRegistered.includes(normalizedValue)
    );
  });
}

export function checkCoverage({
  street,
  neighborhood,
  city,
  state,
}: CheckCoverageParams) {
  const normalizedCity = normalize(city);
  const normalizedState = normalize(state);

  const location = coverageLocations.find((item) => {
    const cityMatches = normalize(item.city) === normalizedCity;
    const stateMatches = normalize(item.state) === normalizedState;

    if (!cityMatches || !stateMatches) {
      return false;
    }

    const streetMatches = matchesLocation(street, item.streets);
    const neighborhoodMatches = matchesLocation(
      neighborhood,
      item.neighborhoods
    );

    // A cobertura é válida quando a cidade/UF conferem e
    // o endereço pertence a uma rua ou bairro cadastrado.
    return streetMatches || neighborhoodMatches;
  });

  return Boolean(location);
}

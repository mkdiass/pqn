import { coverageLocations } from "@/data/coverage";

type CheckCoverageParams = {
  street: string;
  neighborhood: string;
  city: string;
  state: string;
};

export type CoverageResult = {
  available: boolean;
  match: "street" | "neighborhood" | "none";
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
}: CheckCoverageParams): CoverageResult {
  const normalizedCity = normalize(city);
  const normalizedState = normalize(state);

  const location = coverageLocations.find((item) => {
    return normalize(item.city) === normalizedCity && normalize(item.state) === normalizedState;
  });

  if (!location) {
    return { available: false, match: "none" };
  }

  if (matchesLocation(street, location.streets)) {
    return { available: true, match: "street" };
  }

  if (matchesLocation(neighborhood, location.neighborhoods)) {
    return { available: true, match: "neighborhood" };
  }

  return { available: false, match: "none" };
}

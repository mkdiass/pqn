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
  return value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-zA-Z0-9\s]/g, " ").replace(/\s+/g, " ").trim().toLowerCase();
}

function matchesLocation(value: string, registeredValues: string[]) {
  const normalizedValue = normalize(value);
  if (!normalizedValue) return false;
  return registeredValues.some((registeredValue) => {
    const normalizedRegistered = normalize(registeredValue);
    return normalizedRegistered === normalizedValue || normalizedValue.includes(normalizedRegistered) || normalizedRegistered.includes(normalizedValue);
  });
}

export function getCoverageDetails({ street, neighborhood, city, state }: CheckCoverageParams): CoverageResult {
  const location = coverageLocations.find((item) => normalize(item.city) === normalize(city) && normalize(item.state) === normalize(state));
  if (!location) return { available: false, match: "none" };
  if (matchesLocation(street, location.streets)) return { available: true, match: "street" };
  if (matchesLocation(neighborhood, location.neighborhoods)) return { available: true, match: "neighborhood" };
  return { available: false, match: "none" };
}

export function checkCoverage(params: CheckCoverageParams) {
  return getCoverageDetails(params).available;
}

import { coverageLocations } from "@/data/coverage";

type CheckCoverageParams = {
  street: string;
  neighborhood: string;
  city: string;
  state: string;
};

export function checkCoverage({
  street,
  neighborhood,
  city,
  state,
}: CheckCoverageParams) {
  const normalize = (value: string) =>
    value
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .trim()
      .toLowerCase();

  const normalizedStreet = normalize(street);
  const normalizedNeighborhood = normalize(neighborhood);
  const normalizedCity = normalize(city);
  const normalizedState = normalize(state);

  const location = coverageLocations.find((item) => {
    const cityMatches =
      normalize(item.city) === normalizedCity;

    const stateMatches =
      normalize(item.state) === normalizedState;

    const neighborhoodMatches =
      item.neighborhoods.some(
        (itemNeighborhood) =>
          normalize(itemNeighborhood) === normalizedNeighborhood
      );

    const streetMatches =
      item.streets.some(
        (itemStreet) =>
          normalize(itemStreet) === normalizedStreet
      );

    return (
      cityMatches &&
      stateMatches &&
      neighborhoodMatches &&
      streetMatches
    );
  });

  return Boolean(location);
}
export type CoverageLocation = {
  city: string;
  state: string;
  neighborhoods: string[];
  streets: string[];
};

export const coverageLocations: CoverageLocation[] = [
  {
    city: "São Paulo",
    state: "SP",

    neighborhoods: [
      "Campo Limpo",
      "Capão Redondo",
      "Jardim São Luís",
      "Parque Maria Helena",
      "Jardim Capelinha",
      "Vila Prel",
      "Pirajussara",
      "Jardim Campo Limpo",
    ],

    streets: [
      "Estrada do Campo Limpo",
      "Avenida Carlos Lacerda",
      "Rua João Caetano",
      "Rua Doutor Luís da Fonseca Galvão",
      "Rua Matteo Raverti",
    ],
  },
];

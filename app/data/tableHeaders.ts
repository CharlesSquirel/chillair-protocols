export const firmaHeaders: string[] = [
  "Siedziba",
  "Adres",
  "Kod pocztowy",
  "Nr telefonu",
  "Email",
];

//jeżeli będą się powtarzać, to do ujednolicenia
export const valvesHeaders: string[] = [
  "Data",
  "Obiekt",
  "Autor",
  "Sygnatura",
  "Uwagi",
];

export const chillerHeaders: string[] = [
  "Data",
  "Obiekt",
  "Autor",
  "Sygnatura",
  "Uwagi",
];

enum ChillerCircuitHeader {
  CIRCUIT = "Obieg",
  DISCHARGE_PRESSURE = "Ciśnienie tłoczenia",
  CONDENSATION_TEMPERATURE = "Temp. skraplania",
  SUBCOOLING = "Dochłodzenie",
  AIR_TEMPERATURE = "Temp. wylotowa",
  SUCTION_PRESSURE = "Ciśnienie ssania",
  SUCTION_TEMPERATURE = "Temp. ssania",
  OVERHEAT = "Przegrzanie",
  TEMPERATURE_IN = "Temp. wejściowa",
  TEMPERATURE_OUT = "Temp. wyjściowa",
  PRESSURE_IN = "Ciśnienie wejściowe wody",
  PRESSURE_OUT = "Ciśnienie wyjściowe wody",
}

export const chillerCircuitHeaders: ChillerCircuitHeader[] = [
  ChillerCircuitHeader.CIRCUIT,
  ChillerCircuitHeader.DISCHARGE_PRESSURE,
  ChillerCircuitHeader.CONDENSATION_TEMPERATURE,
  ChillerCircuitHeader.SUBCOOLING,
  ChillerCircuitHeader.AIR_TEMPERATURE,
  ChillerCircuitHeader.SUCTION_PRESSURE,
  ChillerCircuitHeader.SUCTION_TEMPERATURE,
  ChillerCircuitHeader.OVERHEAT,
  ChillerCircuitHeader.TEMPERATURE_IN,
  ChillerCircuitHeader.TEMPERATURE_OUT,
  ChillerCircuitHeader.PRESSURE_IN,
  ChillerCircuitHeader.PRESSURE_OUT,
];

enum ChillerPowerHeader {
  DEVICE_TYPE = "Typ urządzenia",
  AMPERAGE_1 = "L1",
  AMPERAGE_2 = "L2",
  AMPERAGE_3 = "L3",
  INTERPHASE = "Różnica międzyfazowa",
}

export const chillerPowerHeaders: ChillerPowerHeader[] = [
  ChillerPowerHeader.DEVICE_TYPE,
  ChillerPowerHeader.AMPERAGE_1,
  ChillerPowerHeader.AMPERAGE_2,
  ChillerPowerHeader.AMPERAGE_3,
  ChillerPowerHeader.INTERPHASE,
];

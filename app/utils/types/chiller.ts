type AirPollution =
  | "Bardzo brudny"
  | "Brudny"
  | "Koniecznie do mycia"
  | "Czysty"
  | "Bardzo czysty";

type TermalInsulation =
  | "Bardzo słaby"
  | "Słaby"
  | "Średni"
  | "Dobry"
  | "Bardzo dobry";

type IsValid = "Prawidłowy" | "Nieprawidłowy";

type FreonTypes =
  | "R134A"
  | "R410A"
  | "R407C"
  | "R32"
  | "R404A"
  | "R22"
  | "R290";

type Refrigerant = "Woda" | "Roztwór glikolu";

type SwitchField = "Wyłączony" | "Załączony";

type WaterField = "Wejście wody" | "Wyjście wody";

type ControlMethod = "Bezpośrednio" | "Pośrednio";

type NecessaryField = "Konieczna" | "Niekonieczna";

type DeviceType =
  | "Sprężarka"
  | "Wentylator"
  | "Pompa WL"
  | "Silnik"
  | "Falownik";

export interface PowerConsumption {
  deviceType: DeviceType;
  amperage_1: number;
  amperage_2: number;
  amperage_3: number;
  interphaseOk: string;
  interphase?: number;
  editKey: string;
}

export interface Circuit {
  dischargePressure: number;
  condensationTemperature: number;
  subcooling: number;
  airTemperature: number;
  suctionPressure: number;
  suctionTemperature: number;
  overHeat: number;
  inTemperature: number;
  outTemperature: number;
  inWaterPressure: number;
  outWaterPressure: number;
  editKey: string;
}

export interface ChillerDTO {
  firma: string;
  type: string;
  serialNumber: string;
  pollution: AirPollution;
  termalInsulation: TermalInsulation;
  termalAndPressureControl: IsValid;
  supplyVoltage: number;
  supplyPhase: number;
  measuredVoltage_1: number;
  measuredVoltage_2: number;
  measuredVoltage_3: number;
  interphaseOK: string;
  interphase?: number;
  freonType: FreonTypes;
  freonAmount: number;
  refrigerationCircuits: number[];
  driverType: string;
  refrigerant: Refrigerant;
  airTemperature: number;
  oilLevel: IsValid;
  indicatorColor: IsValid;
  tightSystem: IsValid;
  currentConsumption: IsValid;
  fansConsumption: IsValid;
  highPressure: SwitchField;
  lowPressure: SwitchField;
  antiFrezzeTermostat: SwitchField;
  settingsTemperature: number[];
  controlledParameter: WaterField;
  controlMethod: ControlMethod;
  leakGasTest: NecessaryField;
  gasAdded: number;
  gasRegain: number;
  description?: string;
  circuits: Circuit[];
  powerConsumptions: PowerConsumption[];
}

export const initialChillerPowerEdit = [
  {
    deviceType: "Sprężarka",
    amperage_1: 0,
    amperage_2: 0,
    amperage_3: 0,
    interphaseOk: "",
    interphase: undefined,
    editKey: "",
  },
];

export const initialChillerCircuitEdit = [
  {
    dischargePressure: 0,
    condensationTemperature: 0,
    subcooling: 0,
    airTemperature: 0,
    suctionPressure: 0,
    suctionTemperature: 0,
    overHeat: 0,
    inTemperature: 0,
    outTemperature: 0,
    inWaterPressure: 0,
    outWaterPressure: 0,
    editKey: "",
  },
];

export const initialChillerDataEdit = {
  firma: "",
  type: "",
  serialNumber: "",
  description: undefined,
  pollution: "Brudny",
  termalInsulation: "Bardzo słaby",
  termalAndPressureControl: "Prawidłowy",
  supplyVoltage: 0,
  supplyPhase: 0,
  measuredVoltage_1: 0,
  measuredVoltage_2: 0,
  measuredVoltage_3: 0,
  interphaseOK: "",
  interphase: undefined,
  freonType: "R134A",
  freonAmount: 0,
  refrigerationCircuits: [],
  driverType: "",
  refrigerant: "Woda",
  airTemperature: 0,
  oilLevel: "Prawidłowy",
  indicatorColor: "Prawidłowy",
  tightSystem: "Prawidłowy",
  currentConsumption: "Prawidłowy",
  fansConsumption: "Prawidłowy",
  highPressure: "Wyłączony",
  lowPressure: "Wyłączony",
  antiFrezzeTermostat: "Wyłączony",
  settingsTemperature: [],
  controlledParameter: "Wejście wody",
  controlMethod: "Bezpośrednio",
  leakGasTest: "Konieczna",
  gasAdded: 0,
  gasRegain: 0,
};

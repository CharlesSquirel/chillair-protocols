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

interface PowerConsumption {
  deviceType: DeviceType;
  amperage_1: number;
  amperage_2: number;
  amperage_3: number;
  interphaseOk: string;
  interphase: number;
}

interface Circuit {
  number: string;
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
}

export interface ChillerDTO {
  firstName: string;
  lastName: string;
  userSignature: string;
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
  interPhase: string;
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

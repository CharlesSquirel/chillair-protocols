"use server";

import { ChillerDTO } from "../types/chiller";

export async function createChiller(data: ChillerDTO) {
  const chillerData: ChillerDTO = {
    firstName: data.firstName,
    lastName: data.lastName,
    userSignature: data.userSignature,
    firma: data.firma,
    type: data.type,
    serialNumber: data.serialNumber,
    pollution: data.pollution,
    termalInsulation: data.termalInsulation,
    termalAndPressureControl: data.termalAndPressureControl,
    supplyVoltage: data.supplyVoltage,
    supplyPhase: data.supplyPhase,
    measuredVoltage_1: data.measuredVoltage_1,
    measuredVoltage_2: data.measuredVoltage_2,
    measuredVoltage_3: data.measuredVoltage_3,
    interPhase: data.interPhase,
    freonType: data.freonType,
    freonAmount: data.freonAmount,
    refrigerationCircuits: data.refrigerationCircuits,
    driverType: data.driverType,
    refrigerant: data.refrigerant,
    airTemperature: data.airTemperature,
    oilLevel: data.oilLevel,
    indicatorColor: data.indicatorColor,
    tightSystem: data.tightSystem,
    currentConsumption: data.currentConsumption,
    fansConsumption: data.fansConsumption,
    highPressure: data.highPressure,
    lowPressure: data.lowPressure,
    antiFrezzeTermostat: data.antiFrezzeTermostat,
    settingsTemperature: data.settingsTemperature,
    controlledParameter: data.controlledParameter,
    controlMethod: data.controlMethod,
    leakGasTest: data.leakGasTest,
    gasAdded: data.gasAdded,
    gasRegain: data.gasRegain,
    description: data.description,
    circuits: data.circuits,
    powerConsumptions: data.powerConsumptions,
  };
  try {
  } catch (error) {
    console.log(error);
  }
}

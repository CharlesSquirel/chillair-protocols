"use server";

import { prisma } from "lib/db";
import { ChillerDTO } from "../types/chiller";

export async function createChiller(data: ChillerDTO) {
  try {
    const {
      firma,
      type,
      serialNumber,
      pollution,
      interphaseOK,
      termalInsulation,
      termalAndPressureControl,
      supplyVoltage,
      supplyPhase,
      measuredVoltage_1,
      measuredVoltage_2,
      measuredVoltage_3,
      interphase,
      freonType,
      freonAmount,
      refrigerationCircuits,
      driverType,
      refrigerant,
      airTemperature,
      oilLevel,
      indicatorColor,
      tightSystem,
      currentConsumption,
      fansConsumption,
      highPressure,
      lowPressure,
      antiFrezzeTermostat,
      settingsTemperature,
      controlledParameter,
      controlMethod,
      leakGasTest,
      gasAdded,
      gasRegain,
      description,
      circuits,
      powerConsumptions,
    } = data;

    const chiller = await prisma.chiller.create({
      data: {
        firstName: "Jan",
        lastName: "Kowalski",
        userSignature: "FGAZ/1/pe456",
        firma,
        type,
        serialNumber,
        pollution,
        termalInsulation,
        termalAndPressureControl,
        supplyVoltage,
        supplyPhase,
        measuredVoltage_1,
        measuredVoltage_2,
        measuredVoltage_3,
        interphase,
        interphaseOK,
        freonType,
        freonAmount,
        refrigerationCircuits,
        driverType,
        refrigerant,
        airTemperature,
        oilLevel,
        indicatorColor,
        tightSystem,
        currentConsumption,
        fansConsumption,
        highPressure,
        lowPressure,
        antiFrezzeTermostat,
        settingsTemperature,
        controlledParameter,
        controlMethod,
        leakGasTest,
        gasAdded,
        gasRegain,
        description,
        circuits: {
          createMany: {
            data: circuits,
          },
        },
        powerConsumptions: {
          createMany: {
            data: powerConsumptions,
          },
        },
      },
    });

    return chiller;
  } catch (error) {
    console.log(error);
  }
}

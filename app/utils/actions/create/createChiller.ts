"use server";

import { generateRandomString } from "@/utils/helpers/generateRandomString";
import { ChillerDTO } from "@/utils/types/chiller";
import { prisma } from "lib/db";
import { getUserInfo } from "../getUserInfo";

export async function createChiller(data: ChillerDTO) {
  const { userFirstName, userLastName, userInfoSignature, userMongoId } =
    await getUserInfo();
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
        userId: userMongoId,
        firstName: userFirstName,
        lastName: userLastName,
        userSignature: userInfoSignature,
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
            data: circuits.map((circuits) => ({
              ...circuits,
              editKey: generateRandomString(),
            })),
          },
        },
        powerConsumptions: {
          createMany: {
            data: powerConsumptions.map((powerConsumption) => ({
              ...powerConsumption,
              editKey: generateRandomString(),
            })),
          },
        },
      },
    });
    console.log("Chiller succesfully created");
    return chiller;
  } catch (error) {
    console.log(error);
  }
}

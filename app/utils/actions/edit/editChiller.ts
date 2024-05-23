"use server";

import { generateRandomString } from "@/utils/helpers/generateRandomString";
import { prisma } from "lib/db";
import { revalidatePath } from "next/cache";
import { ChillerDTO } from "../../types/chiller";

export async function editChiller(data: ChillerDTO, id: string) {
  try {
    const circuitsEditKeys = await prisma.circuit.findMany({
      where: { circuitId: id },
      select: { editKey: true },
    });
    const powerEditKeys = await prisma.powerConsumption.findMany({
      where: { powerConsumptionId: id },
      select: { editKey: true },
    });

    const editValues = {
      firma: data.firma,
      type: data.type,
      serialNumber: data.serialNumber,
      pollution: data.pollution,
      interphaseOK: data.interphaseOK,
      termalInsulation: data.termalInsulation,
      termalAndPressureControl: data.termalAndPressureControl,
      supplyVoltage: data.supplyVoltage,
      supplyPhase: data.supplyPhase,
      measuredVoltage_1: data.measuredVoltage_1,
      measuredVoltage_2: data.measuredVoltage_2,
      measuredVoltage_3: data.measuredVoltage_3,
      interphase: data.interphase,
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
      circuits: data.circuits.map((circuit, index) => ({
        ...circuit,
        editKey: circuitsEditKeys[index]
          ? circuitsEditKeys[index].editKey
          : generateRandomString(),
      })),
      powerConsumptions: data.powerConsumptions.map((power, index) => ({
        ...power,
        editKey: powerEditKeys[index]
          ? powerEditKeys[index].editKey
          : generateRandomString(),
      })),
    };
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
    } = editValues;
    const currentpowerBlocks = await prisma.powerConsumption.findMany({
      where: {
        powerConsumptionId: id,
      },
    });

    const currentcircuitBlocks = await prisma.circuit.findMany({
      where: {
        circuitId: id,
      },
    });

    await prisma.chiller.update({
      where: {
        id,
      },
      data: {
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
      },
    });

    await Promise.all(
      currentpowerBlocks.map(async (currentBlock) => {
        const foundBlock = editValues.powerConsumptions.find(
          (newBlock) => newBlock.editKey === currentBlock.editKey,
        );

        if (foundBlock) {
          // Znaleziono blok w danych wejściowych, więc go aktualizujemy
          await prisma.powerConsumption.update({
            where: { id: currentBlock.id },
            data: foundBlock,
          });
        } else {
          // Blok nie istnieje w danych wejściowych, usuwamy go
          await prisma.powerConsumption.delete({
            where: { id: currentBlock.id },
          });
        }
      }),
    );

    await Promise.all(
      currentcircuitBlocks.map(async (currentBlock) => {
        const foundBlock = editValues.circuits.find(
          (newBlock) => newBlock.editKey === currentBlock.editKey,
        );

        if (foundBlock) {
          // Znaleziono blok w danych wejściowych, więc go aktualizujemy
          await prisma.circuit.update({
            where: { id: currentBlock.id },
            data: foundBlock,
          });
        } else {
          // Blok nie istnieje w danych wejściowych, usuwamy go
          await prisma.circuit.delete({
            where: { id: currentBlock.id },
          });
        }
      }),
    );

    // Dodaj nowe bloki informacji, jeśli istnieją w danych wejściowych, ale nie w aktualnych danych
    await Promise.all(
      editValues.powerConsumptions.map(async (newBlock) => {
        const foundBlock = currentpowerBlocks.find(
          (currentBlock) => currentBlock.editKey === newBlock.editKey,
        );

        if (!foundBlock) {
          // Blok nie istnieje w aktualnych danych, więc go dodajemy
          await prisma.powerConsumption.create({
            data: {
              ...newBlock,
              powerConsumptionId: id,
            },
          });
        }
      }),
    );

    await Promise.all(
      editValues.circuits.map(async (newBlock) => {
        const foundBlock = currentcircuitBlocks.find(
          (currentBlock) => currentBlock.editKey === newBlock.editKey,
        );

        if (!foundBlock) {
          // Blok nie istnieje w aktualnych danych, więc go dodajemy
          await prisma.circuit.create({
            data: {
              ...newBlock,
              circuitId: id,
            },
          });
        }
      }),
    );
    revalidatePath("/dashboard/chillers");
    console.log(`Chiller edited: ${data}`);
  } catch (error) {
    console.log(error);
  }
}

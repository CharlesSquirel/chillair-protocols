"use server";

import { prisma } from "lib/db";
import { revalidatePath } from "next/cache";
import { ChillerDTO } from "../../types/chiller";

export async function editChiller(data: ChillerDTO, id: string) {
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
  } = data;
  try {
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
        const foundBlock = data.powerConsumptions.find(
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
        const foundBlock = data.circuits.find(
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
      data.powerConsumptions.map(async (newBlock) => {
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
      data.circuits.map(async (newBlock) => {
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
    console.log("edited");
  } catch (error) {
    console.log(error);
  }
}

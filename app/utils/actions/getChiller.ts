"use server";

import { prisma } from "lib/db";

export default async function getChiller(id: string) {
  try {
    const chiller = await prisma.chiller.findUnique({ where: { id } });
    const chillerPowerConsumption = await prisma.powerConsumption.findMany({
      where: { powerConsumptionId: id },
    });
    const chillerCircuits = await prisma.circuit.findMany({
      where: {
        circuitId: id,
      },
    });
    return { chiller, chillerPowerConsumption, chillerCircuits };
  } catch (error) {
    console.error("Błąd podczas pobierania danych:", error);
    throw error;
  }
}

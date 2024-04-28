"use server";

import { prisma } from "lib/db";

export default async function getValve(id: string) {
  try {
    const valve = await prisma.valve.findUnique({ where: { id } });
    const valveBlocks = await prisma.valvesInfoBlock.findMany({
      where: { valveId: id },
    });
    return { valve, valveBlocks };
  } catch (error) {
    console.error("Błąd podczas pobierania danych:", error);
    throw error;
  }
}

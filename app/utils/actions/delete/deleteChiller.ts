"use server";

import { prisma } from "lib/db";
import { revalidatePath } from "next/cache";

export async function deleteChiller(id: string) {
  try {
    await prisma.powerConsumption.deleteMany({
      where: {
        powerConsumptionId: id,
      },
    });
    await prisma.circuit.deleteMany({
      where: {
        circuitId: id,
      },
    });
    await prisma.chiller.delete({
      where: {
        id,
      },
    });

    revalidatePath("/dashboard/chillers");
    console.log(`Chiller deleted id: ${id}`);
  } catch (error) {
    console.error("Błąd podczas usuwania danych:", error);
  }
}

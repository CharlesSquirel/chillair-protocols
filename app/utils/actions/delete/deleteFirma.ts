"use server";

import { prisma } from "lib/db";
import { revalidatePath } from "next/cache";

export async function deleteFirma(id: string) {
  try {
    await prisma.firma.delete({
      where: {
        id,
      },
    });

    revalidatePath("/dashboard/firma");
    console.log(`Firma deleted id: ${id}`);
  } catch (error) {
    console.error("Błąd podczas usuwania danych:", error);
  }
}

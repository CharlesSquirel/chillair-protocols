"use server";
import { FirmaDTO } from "@/utils/types/firma";
import { prisma } from "lib/db";
import { revalidatePath } from "next/cache";

export async function editUser(data: FirmaDTO, id: string) {
  try {
    await prisma.firma.update({
      where: {
        id,
      },
      data: data,
    });
    revalidatePath("/dashboard/firma");
    console.log(`Firma edited: ${id}`);
  } catch (error) {
    console.error("Błąd podczas edytowania danych:", error);
  }
}

"use server";

import { FirmaDTO } from "@/utils/types/firma";
import { prisma } from "lib/db";
import { revalidatePath } from "next/cache";

export async function createFirma(data: FirmaDTO) {
  const firmaData: FirmaDTO = {
    fullName: data.fullName,
    shortName: data.shortName,
    street: data.street,
    houseNumber: data.houseNumber,
    localNumber: data.localNumber,
    postCode: data.postCode,
    city: data.city,
    tel: data.tel,
    contactEmail: data.contactEmail,
  };
  try {
    const firma = await prisma.firma.create({
      data: firmaData,
    });
    console.log("Firma succesfully created");
    revalidatePath("/dashboard/firma");
    return firma;
  } catch (error) {
    console.error("Błąd podczas tworzenia danych:", error);
  }
}

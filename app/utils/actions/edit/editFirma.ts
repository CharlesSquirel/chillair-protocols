"use server";
import { prisma } from "lib/db";
import { revalidatePath } from "next/cache";
import { FirmaDTO } from "../../types/firma";

export async function editFirma(data: FirmaDTO, id: string) {
  console.log(data);
  const {
    fullName,
    street,
    houseNumber,
    shortName,
    localNumber,
    postCode,
    city,
    tel,
    contactEmail,
  } = data;
  try {
    await prisma.firma.update({
      where: {
        id,
      },
      data: {
        fullName,
        street,
        houseNumber,
        shortName,
        localNumber,
        postCode,
        city,
        tel,
        contactEmail,
      },
    });
    revalidatePath("/dashboard/firma");
    console.log(`Firma edited: ${id}`);
  } catch (error) {
    console.error("Błąd podczas edytowania danych:", error);
  }
}

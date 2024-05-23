"use server";

import { prisma } from "lib/db";
import { FirmaDTO } from "../../types/firma";

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
    console.log("created");
    console.log(firmaData);
    return firma;
  } catch (error) {
    console.error("Błąd podczas tworzenia danych:", error);
  }
}

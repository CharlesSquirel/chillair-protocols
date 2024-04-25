"use server";

import { FirmaDTO } from "../types/firma";

export async function createFirma(data: FirmaDTO) {
  const firmaData: FirmaDTO = {
    name: data.name,
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
    console.log("created");
    console.log(firmaData);
  } catch (error) {
    console.error("Błąd podczas tworzenia danych:", error);
  }
}

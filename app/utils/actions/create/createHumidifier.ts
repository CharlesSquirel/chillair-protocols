"use server";

import { HumidifierDTO } from "../../types/humidifier";

export async function createHumidifier(data: HumidifierDTO) {
  const humidifiersdata: HumidifierDTO = {
    email: "jan.kowalski@.pl",
    userSignature: "asdasdasd",
    userId: "342",
    firma: data.firma,
    type: data.type,
    serialNumber: data.serialNumber,
    nameplateVoltage: data.nameplateVoltage,
    nameplatePhase: data.nameplatePhase,
    nameplateCurrentDraw: data.nameplateCurrentDraw,
    protectionType: data.protectionType,
    ratedCurrent: data.ratedCurrent,
    cylinders: data.cylinders,
    materials: data.materials,
  };

  try {
    console.log("created");
    console.log(humidifiersdata);
  } catch (error) {
    console.error("Błąd podczas tworzenia danych:", error);
  }
}

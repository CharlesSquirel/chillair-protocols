"use server";

import { prisma } from "lib/db";
import { revalidatePath } from "next/cache";
import { CreateValveCredentials } from "../types/valves";
import { getUserInfo } from "./getUserInfo";

export async function createValve(data: CreateValveCredentials) {
  const { userFirstName, userLastName, userInfoSignature, userMongoId } =
    await getUserInfo();

  const valvesData: CreateValveCredentials = {
    userSignature: userInfoSignature,
    userId: userMongoId,
    firstName: userFirstName,
    lastName: userLastName,
    firma: data.firma,
    type: data.type,
    serialNumber: data.serialNumber,
    infoBlocks: data.infoBlocks,
    clientEmail: data.clientEmail,
    clientEmailPerm: data.clientEmailPerm,
    description: data.description,
  };

  const {
    userSignature,
    userId,
    firma,
    type,
    serialNumber,
    infoBlocks,
    firstName,
    lastName,
    clientEmail,
    clientEmailPerm,
    description,
  } = valvesData;
  try {
    await prisma.valve.create({
      data: {
        description,
        clientEmail,
        clientEmailPerm,
        firstName,
        lastName,
        userSignature,
        userId,
        firma,
        type,
        serialNumber,
        infoBlocks: {
          createMany: {
            data: infoBlocks,
          },
        },
      },
    });
    revalidatePath("/dashboard/valves");
    console.log("created");
    console.log(valvesData);
  } catch (error) {
    console.error("Błąd podczas tworzenia danych:", error);
  }
}

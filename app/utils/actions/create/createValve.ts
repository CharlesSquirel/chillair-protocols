"use server";

import { CreateValveCredentials } from "@/utils/types/valves";
import { prisma } from "lib/db";
import { revalidatePath } from "next/cache";
import { getUserInfo } from "../getUserInfo";

export async function createValve(data: CreateValveCredentials) {
  const { userFirstName, userLastName, userInfoSignature, userMongoId } =
    await getUserInfo();

  const {
    firma,
    type,
    serialNumber,
    infoBlocks,
    clientEmail,
    clientEmailPerm,
    description,
  } = data;
  try {
    await prisma.valve.create({
      data: {
        userSignature: userInfoSignature,
        userId: userMongoId,
        firstName: userFirstName,
        lastName: userLastName,
        description,
        clientEmail,
        clientEmailPerm,
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
    console.log("Valve succesfully created");
    console.log(data);
  } catch (error) {
    console.error("Błąd podczas tworzenia danych:", error);
  }
}

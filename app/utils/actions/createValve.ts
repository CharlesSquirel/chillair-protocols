"use server";

import { prisma } from "lib/db";
import { CreateValveCredentials } from "../types/valves";
import { revalidatePath } from "next/cache";

export async function createValve(data: CreateValveCredentials) {
  const valvesData: CreateValveCredentials = {
    userSignature: "asdasd",
    email: "jan@kowalski.pl",
    userId: "234234",
    firstName: "Jan",
    lastName: "Kowalski",
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
    email,
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
        email,
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
    console.log(error);
  }
}

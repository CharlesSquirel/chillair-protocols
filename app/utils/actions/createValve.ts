"use server";

import { prisma } from "lib/db";
import { CreateValveCredentials } from "../types/payloads";

export async function createValve(data: CreateValveCredentials) {
  const valvesData: CreateValveCredentials = {
    userSignature: "asdasd",
    email: "jan@kowalski.pl",
    userId: "234234",
    firma: data.firma,
    type: data.type,
    serialNumber: data.serialNumber,
    infoBlocks: data.infoBlocks,
  };

  const {
    userSignature,
    email,
    userId,
    firma,
    type,
    serialNumber,
    infoBlocks,
  } = valvesData;
  try {
    await prisma.valve.create({
      data: {
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
    console.log("created");
  } catch (error) {
    console.log(error);
  }
}

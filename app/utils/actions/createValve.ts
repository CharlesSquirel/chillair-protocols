"use server";

import { prisma } from "lib/db";
import { CreateValveCredentials } from "../types/valves";

export async function createValve(data: CreateValveCredentials) {
  console.log(data);
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
    userEmailPerm: data.userEmailPerm,
    clientEmail: data.clientEmail,
    clientEmailPerm: data.clientEmailPerm,
    test: data.test,
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
    userEmailPerm,
    clientEmail,
    clientEmailPerm,
  } = valvesData;
  try {
    await prisma.valve.create({
      data: {
        clientEmailPerm,
        clientEmail,
        userEmailPerm,
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
    console.log("created");
    console.log(valvesData);
  } catch (error) {
    console.log(error);
  }
}

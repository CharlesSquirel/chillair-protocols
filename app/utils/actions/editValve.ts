"use server";

import { prisma } from "lib/db";
import { CreateValveCredentials } from "../types/valves";
import { revalidatePath } from "next/cache";

export async function editValve(data: CreateValveCredentials, id: string) {
  console.log("in edit Valve", data);
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
    const currentInfoBlocks = await prisma.valvesInfoBlock.findMany({
      where: {
        valveId: id,
      },
    });

    await prisma.valve.update({
      where: {
        id,
      },
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
      },
    });

    await Promise.all(
      currentInfoBlocks.map(async (currentBlock) => {
        const foundBlock = data.infoBlocks.find(
          (newBlock) =>
            newBlock.valveSerialNumber === currentBlock.valveSerialNumber,
        );

        if (foundBlock) {
          // Znaleziono blok w danych wejściowych, więc go aktualizujemy
          await prisma.valvesInfoBlock.update({
            where: { id: currentBlock.id },
            data: foundBlock,
          });
        } else {
          // Blok nie istnieje w danych wejściowych, usuwamy go
          await prisma.valvesInfoBlock.delete({
            where: { id: currentBlock.id },
          });
        }
      }),
    );

    // Dodaj nowe bloki informacji, jeśli istnieją w danych wejściowych, ale nie w aktualnych danych
    await Promise.all(
      data.infoBlocks.map(async (newBlock) => {
        const foundBlock = currentInfoBlocks.find(
          (currentBlock) =>
            currentBlock.valveSerialNumber === newBlock.valveSerialNumber,
        );

        if (!foundBlock) {
          // Blok nie istnieje w aktualnych danych, więc go dodajemy
          await prisma.valvesInfoBlock.create({
            data: {
              ...newBlock,
              valveId: id,
            },
          });
        }
      }),
    );

    // await Promise.all(
    //   infoBlocks.map(async (block) => {
    //     await prisma.valvesInfoBlock.updateMany({
    //       where: { valveId: id },
    //       data: block,
    //     });
    //   }),
    // );
    revalidatePath("/dashboard/valves");
    console.log("edited");
    console.log(valvesData);
  } catch (error) {
    console.log(error);
  }
}

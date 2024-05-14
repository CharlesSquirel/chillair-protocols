"use server";

import { CreateValveCredentials } from "@/utils/types/valves";
import { prisma } from "lib/db";
import { revalidatePath } from "next/cache";

export async function editValve(data: CreateValveCredentials, id: string) {
  const valvesData: CreateValveCredentials = {
    firma: data.firma,
    type: data.type,
    serialNumber: data.serialNumber,
    infoBlocks: data.infoBlocks,
    clientEmail: data.clientEmail,
    clientEmailPerm: data.clientEmailPerm,
    description: data.description,
  };

  const {
    firma,
    type,
    serialNumber,
    infoBlocks,
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
    revalidatePath("/dashboard/valves");
    console.log("Valve edited");
    console.log(valvesData);
  } catch (error) {
    console.log(error);
  }
}

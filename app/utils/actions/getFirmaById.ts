"use server";

import { prisma } from "lib/db";

export default async function getFirmaById(id: string) {
  try {
    const firma = await prisma.firma.findUnique({
      where: {
        id,
      },
    });

    if (!firma) {
      throw Error("Nie znaleziono firmy o podanym id!");
    }
    return firma;
  } catch (error) {
    console.error(error);
  }
}

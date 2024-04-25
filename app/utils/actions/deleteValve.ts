"use server";

import { prisma } from "lib/db";
import { revalidatePath } from "next/cache";

export async function deleteValve(id: string) {
  try {
    await prisma.valvesInfoBlock.deleteMany({
      where: {
        valveId: id,
      },
    });
    await prisma.valve.delete({
      where: {
        id,
      },
    });

    revalidatePath("/dashboard/valves");
    console.log(`deleted id: ${id}`);
  } catch (error) {
    console.log(error);
  }
}

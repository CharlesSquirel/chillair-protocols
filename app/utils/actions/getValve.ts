"use server";

import { prisma } from "lib/db";

export default async function getValve(id: string) {
  const valve = await prisma.valve.findUnique({ where: { id } });
  const valveBlocks = await prisma.valvesInfoBlock.findMany({
    where: { valveId: id },
  });
  return { valve, valveBlocks };
}

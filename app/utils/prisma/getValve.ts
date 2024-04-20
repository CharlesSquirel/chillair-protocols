import { Valve, ValvesInfoBlock } from "@prisma/client";
import { prisma } from "lib/db";
import { cache } from "react";

interface ValveData {
  valve: Valve | null;
  valveBlocks: ValvesInfoBlock[];
}

export const getValve = async (id: string): Promise<ValveData> => {
  const valve = await prisma.valve.findUnique({
    where: {
      id,
    },
  });
  const valveBlocks: ValvesInfoBlock[] = await prisma.valvesInfoBlock.findMany({
    where: {
      valveId: id,
    },
  });
  return { valve, valveBlocks };
};

import { prisma } from "lib/db";

export const getAllValves = async () => {
  try {
    const valves = await prisma.valve.findMany({
      orderBy: { createdAt: "desc" },
    });
    return valves;
  } catch (error) {
    console.log(error);
  }
};

import { prisma } from "lib/db";

export const getAllChillers = async () => {
  try {
    const valves = await prisma.chiller.findMany({
      orderBy: { createdAt: "desc" },
    });
    return valves;
  } catch (error) {
    console.log(error);
  }
};

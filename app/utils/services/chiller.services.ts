import { prisma } from "lib/db";

export const getAllChillers = async () => {
  try {
    const chillers = await prisma.chiller.findMany({
      orderBy: { createdAt: "desc" },
    });
    return chillers;
  } catch (error) {
    console.log(error);
  }
};

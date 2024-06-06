import { prisma } from "lib/db";
import { formatDate } from "../helpers/formatSearchDate";

export const getAllChillers = async () => {
  try {
    const chillers = await prisma.chiller.findMany({
      orderBy: { createdAt: "desc" },
    });
    return chillers.map((chiller) => {
      return { ...chiller, createdAt: formatDate(chiller.createdAt) };
    });
  } catch (error) {
    console.log(error);
  }
};

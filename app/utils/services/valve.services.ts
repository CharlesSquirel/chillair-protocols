import { prisma } from "lib/db";
import { formatDate } from "../helpers/formatSearchDate";

export const getAllValves = async () => {
  try {
    const valves = await prisma.valve.findMany({
      orderBy: { createdAt: "desc" },
    });
    return valves.map((valve) => {
      return { ...valve, createdAt: formatDate(valve.createdAt) };
    });
  } catch (error) {
    console.log(error);
  }
};

import { prisma } from "lib/db";

export const getFirmaShortName = async () => {
  try {
    const firma = await prisma.firma.findMany({
      select: {
        shortName: true,
      },
    });
    return firma.map((v) => v.shortName);
  } catch (error) {
    console.log(error);
  }
};

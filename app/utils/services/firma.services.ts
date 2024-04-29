import { prisma } from "lib/db";

export const getAllFirma = async () => {
  try {
    const firmas = await prisma.firma.findMany();
    return firmas;
  } catch (error) {
    console.log(error);
  }
};

export const getFirmaOptions = async (): Promise<string[] | undefined> => {
  try {
    let firmaOptions: string[] = [];
    const firmas = await getAllFirma();
    firmas?.forEach((firma) => firmaOptions.push(firma.name));
    return firmaOptions;
  } catch (error) {
    console.log(error);
  }
};

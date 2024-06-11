import { prisma } from "lib/db";
import { formatDate } from "../helpers/formatSearchDate";

export const getAllFirma = async () => {
  try {
    const firmas = await prisma.firma.findMany();
    return firmas.map((firma) => {
      return { ...firma, createdAt: formatDate(firma.createdAt) };
    });
  } catch (error) {
    console.log(error);
  }
};

export const getFirmaOptions = async (): Promise<string[] | undefined> => {
  try {
    let firmaOptions: string[] = [];
    const firmas = await getAllFirma();
    firmas?.forEach((firma) => firmaOptions.push(firma.fullName));
    return firmaOptions;
  } catch (error) {
    console.log(error);
  }
};

import { prisma } from "lib/db";
import { formatDateToString } from "../helpers/formatDateToString";

export default async function getAllProtocols() {
  try {
    const datas = await prisma.valve.findMany();
    const protocols = datas.map((protocol) => ({
      firma: protocol.firma,
      createdAt: formatDateToString(protocol.createdAt),
      firstName: protocol.firstName,
      lastName: protocol.lastName,
      userSignature: protocol.userSignature,
      genre: "Protokół 1",
      id: protocol.id,
    }));

    return protocols;
  } catch (error) {
    console.error("Błąd podczas pobierania danych:", error);
    throw error;
  }
}

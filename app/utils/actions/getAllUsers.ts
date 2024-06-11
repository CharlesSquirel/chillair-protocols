import { prisma } from "lib/db";
import { formatDate } from "../helpers/formatSearchDate";

export default async function getAllUsers() {
  try {
    const users = await prisma.user.findMany();
    return users.map((user) => {
      return { ...user, createdAt: formatDate(user.createdAt) };
    });
  } catch (error) {
    console.error(`Wystąpił problem z pobranie użytkowników: ${error}`);
  }
}

import { prisma } from "lib/db";

export default async function getAllUsers() {
  try {
    const users = await prisma.user.findMany();
    return users;
  } catch (error) {
    console.error(`Wystąpił problem z pobranie użytkowników: ${error}`);
  }
}

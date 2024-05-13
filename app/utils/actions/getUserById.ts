"use server";

import { prisma } from "lib/db";

export default async function getUserById(id: string) {
  try {
    const user = await prisma.user.findUnique({
      where: {
        id,
      },
    });
    if (!user) {
      throw Error("Nie znaleziono użytkownia o podanym id!");
    }

    return user;
  } catch (error) {
    console.error(error);
  }
}

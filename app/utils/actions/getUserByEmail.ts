import { prisma } from "lib/db";

export const getUserByEmail = async (email: string) => {
  try {
    const user = await prisma.user.findFirst({
      where: {
        email,
      },
    });
    return user;
  } catch (error) {
    console.error(`Cannot get user with prisma, ${error}`);
  }
};

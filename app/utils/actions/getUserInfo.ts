import { currentUser } from "@clerk/nextjs/server";
import { prisma } from "lib/db";

const getUserMongoId = async (lastName: string | null): Promise<string> => {
  if (!lastName) {
    throw Error("Przekazane nazwisko jest nieokreślone!");
  }
  const user = await prisma.user.findUnique({
    where: {
      lastName,
    },
  });
  if (!user) {
    throw Error("Nie znaleziono użytkownika z podanym mailem");
  }
  return user.id;
};

export const getUserInfo = async () => {
  const user = await currentUser();
  if (
    !user ||
    !user?.firstName ||
    !user.lastName ||
    !user.privateMetadata.userSignature
  ) {
    throw Error("Nie ma obecnie zalogowanego użytkownika!");
  }
  const userId = await getUserMongoId(user.lastName);
  return {
    userFirstName: user.firstName,
    userLastName: user.lastName,
    userInfoSignature: user.privateMetadata.userSignature as string,
    userMongoId: userId,
  };
};

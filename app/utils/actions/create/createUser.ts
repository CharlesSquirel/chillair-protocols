"use server";
import { UserDTO } from "@/utils/types/user";
import { prisma } from "lib/db";
import { revalidatePath } from "next/cache";

export async function createUser(data: UserDTO) {
  const { firstName, lastName, email, userSignature } = data;
  try {
    const exist = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });
    if (exist) {
      return new Error("Użytkownik o podanym emailu istnieje");
    }
    const user = await prisma.user.create({
      data: {
        firstName,
        lastName,
        userSignature,
        email,
      },
    });
    console.log("User succesfully created");
    revalidatePath("/dashboard/users");
    return user;
  } catch (error) {
    console.error(`Error in createUser, ${error}`);
  }
}

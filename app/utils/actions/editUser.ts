import { prisma } from "lib/db";
import { revalidatePath } from "next/cache";
import { UserDTO } from "../types/user";

export async function editUser(data: UserDTO, id: string) {
  //   const { firstName, lastName, email, userSignature } = data;
  try {
    await prisma.user.update({
      where: {
        id,
      },
      data: data,
    });
    revalidatePath("/dashboard/users");
    console.log(`User edited: ${id}`);
  } catch (error) {
    console.error("Błąd podczas edytowania danych:", error);
  }
}

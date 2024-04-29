"use server";

import { prisma } from "lib/db";
import { UserDTO } from "../types/user";
import bcrypt from "bcrypt";

export async function createUser(data: UserDTO) {
  const userData = {
    firstName: data.firstName,
    lastName: data.lastName,
    email: data.email,
    password: data.password,
    userSignature: data.userSignature,
  };
  const { firstName, lastName, email, password, userSignature } = userData;
  try {
    const exist = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });
    if (exist) {
      return new Error("Użytkownik o podanym emailu istnieje");
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
      data: {
        firstName,
        lastName,
        userSignature,
        email,
        password: hashedPassword,
      },
    });
    console.log(user);
    return user;
  } catch (error) {
    console.error(`Error in createUser, ${error}`);
  }
}

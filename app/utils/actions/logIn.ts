import { signIn } from "next-auth/react";
import { UserLoginDTO } from "../types/user";

export const logIn = async (data: UserLoginDTO) => {
  try {
    const userData = {
      email: data.email,
      password: data.password,
    };
    const { email, password } = userData;
    const response = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (!response?.ok) {
      throw new Error("Logowanie nie powiodło się");
    }

    return userData;
  } catch (error: any) {
    console.log(error);
    console.error(error.message);
  }
};

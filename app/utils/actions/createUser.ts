import { UserDTO } from "../types/user";

export async function createUser(data: UserDTO) {
  const userData = {
    firstName: data.firstName,
    lastName: data.lastName,
    email: data.email,
    password: data.password,
    userSignature: data.userSignature,
  };
  try {
    const response = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    const userInfo = await response.json();
    console.log(userInfo);
  } catch (error) {
    console.error(`Error in createUser, ${error}`);
  }
}

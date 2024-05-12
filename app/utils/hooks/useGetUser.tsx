import { useEffect, useState } from "react";
import getUserById from "../actions/getUserById";
import { UserDTO } from "../types/user";

export const useGetUser = (id: string) => {
  const [userData, setUserData] = useState<UserDTO>({
    firstName: "",
    lastName: "",
    email: "",
    userSignature: "",
  });
  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = await getUserById(id);
        if (!userData) {
          throw Error("Nie znaleziono użytkownika o podanym id");
        }
        setUserData({
          firstName: userData.firstName,
          lastName: userData.lastName,
          email: userData.email,
          userSignature: userData.userSignature,
        });
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, [id]);

  return userData;
};

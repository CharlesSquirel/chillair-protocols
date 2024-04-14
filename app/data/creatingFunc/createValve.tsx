"use client";

import { ValvesCredentials } from "@/utils/types/payloads";
import { db } from "lib/db";

interface UserInfo {
  email: string;
  userSignature: string;
  userId: string;
}

export const createValve = async (
  userInfo: UserInfo,
  credentials: ValvesCredentials,
) => {
  try {
    const { firma, type, serialNumber, infoBlock } = credentials;
    const { email, userSignature, userId } = userInfo;
    const newValve = await db.valve.create({
      data: {
        firma,
        type,
        serialNumber,
        userId,
        email,
        userSignature,
        infoBlock: {
          createMany: {
            data: infoBlock,
          },
        },
      },
      include: {
        infoBlock: true,
      },
    });
    console.log("Utworzono nowy rekord zaworu dla użytkownika:", newValve);
    return newValve;
  } catch (error) {
    console.log(error);
  }
};

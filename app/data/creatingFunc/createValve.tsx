"use client";

import { ValvesCredentials } from "@/utils/types/payloads";
import { db } from "lib/db";

export interface CreateValveCredentials extends ValvesCredentials {
  email: string;
  userSignature: string;
  userId: string;
}

export const createValve = async (credentials: CreateValveCredentials) => {
  console.log("przed createValve");
  try {
    const {
      firma,
      type,
      serialNumber,
      infoBlock,
      email,
      userSignature,
      userId,
    } = credentials;

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
    });
    console.log("Utworzono nowy rekord zaworu dla użytkownika:", newValve);
    return newValve;
  } catch (error) {
    console.log(error);
  }
};

import { createValve } from "@/data/creatingFunc/createValve";
import { db } from "lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    console.log("przed route");
    const body = await request.json();
    console.log("po body");
    const {
      firma,
      type,
      serialNumber,
      infoBlock,
      email,
      userSignature,
      userId,
    } = body.data;

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

    return NextResponse.json(newValve, { status: 201 });
  } catch (error) {
    console.log(`Error occurred: ${error}`);
    return NextResponse.json("error occured");
  }
}

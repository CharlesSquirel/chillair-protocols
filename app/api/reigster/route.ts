import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { prisma } from "lib/db";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { firstName, lastName, userSignature, email, password } = body;
    if (!firstName || !lastName || !userSignature || !email || !password) {
      return new NextResponse("Brakuje wszystkich danych", { status: 400 });
    }
    const exist = await prisma.user.findUnique({
      where: {
        email,
      },
    });
    if (exist) {
      return new NextResponse("Użytkownik o podanym mailu już istnieje", {
        status: 400,
      });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
      data: {},
    });
    // if (!request.body) {
    //   return new Response("Request body is empty", { status: 400 });
    // }
    // // Odczytaj dane przesłane w ciele żądania
    // const data = await request.json();

    // // Wyświetl otrzymane dane w konsoli
    // console.log("Received data:", data);

    // // Przekonwertuj dane na ciąg znaków
    // const responseData = JSON.stringify(data);

    // Zwróć odpowiedź do klienta
    return new NextResponse(body);
  } catch (error) {
    // Obsłuż błąd i zwróć odpowiednią odpowiedź
    console.error("Error:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}

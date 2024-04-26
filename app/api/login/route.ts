import { NextRequest } from "next/server";

export async function POST() {
  try {
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
    return new Response("Received data: ");
  } catch (error) {
    // Obsłuż błąd i zwróć odpowiednią odpowiedź
    console.error("Error:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}

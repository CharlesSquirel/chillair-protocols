export async function downloadPDFFromPage(
  currentUrl: string,
  sendMail?: "sendMail",
) {
  try {
    const isSendingMail = sendMail === "sendMail";
    const response = await fetch("/api/pdf", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ currentUrl, isSendingMail }),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const blob = await response.blob();

    // Stworzenie linku do pobrania pliku
    const url = window.URL.createObjectURL(new Blob([blob]));

    // Utwórz element <a> do pobrania pliku
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "document.pdf");

    // Dodaj link do dokumentu i automatycznie kliknij go
    document.body.appendChild(link);
    link.click();

    // Zwolnij zasoby
    window.URL.revokeObjectURL(url);
    document.body.removeChild(link);
  } catch (error) {
    console.error("An error occurred while downloading the PDF:", error);
  }
}

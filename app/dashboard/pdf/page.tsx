"use client";

import { PDFDocument, PDFPage, StandardFonts, rgb } from "pdf-lib";
import download from "downloadjs";
import { chillairInfo } from "@/data/chillairInfo";
import createBase64FromPNG from "@/utils/actions/createBase64FromPNG";

function printAndSaveAsPDF() {
  // Sprawdź, czy przeglądarka wspiera funkcję Blob()
  if (window.Blob) {
    // Uzyskaj zawartość widoku do wydrukowania (cała strona)
    const printableContent = document.body.innerHTML;

    // Utwórz nowy obiekt Blob z zawartością widoku do wydrukowania
    const blob = new Blob([printableContent], { type: "application/pdf" });

    // Utwórz link do pobrania pliku PDF
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "printable-content.pdf";

    // Dodaj link do dokumentu i automatycznie kliknij go
    document.body.appendChild(link);
    link.click();

    // Zwolnij zasoby
    URL.revokeObjectURL(link.href);
    document.body.removeChild(link);
  } else {
    // Przeglądarka nie obsługuje funkcji Blob(), obsłuż wyjątek
    console.error("Przeglądarka nie obsługuje funkcji Blob()");
  }
}

// async function createFooter(pdfDoc: PDFDocument, page: PDFPage) {
//   const font = await pdfDoc.embedFont(StandardFonts.TimesRoman); // Użyj Helvetica zamiast TimesRoman
//   const fontSize = 10;
//   const lineHeight = 12;
//   const footerText = `
//       ${chillairInfo.name}
//       ${chillairInfo.street} ${chillairInfo.extraAddressInfo}
//       ${chillairInfo.postCode} ${chillairInfo.city}
//       NIP: ${chillairInfo.nip}   KRS: ${chillairInfo.krs}
//       Tel: ${chillairInfo.tel}   Email: ${chillairInfo.contactEmail}
//     `;
//   page.drawText(footerText, {
//     x: 50,
//     y: 150,
//     size: fontSize,
//     font: font,
//     color: rgb(0, 0, 0),
//     lineHeight,
//   });
//   const base64String = await createBase64FromPNG(
//     "app/assets/images/chillair_logo.png",
//   );
//   const image = await pdfDoc.embedPng(base64String);
//   const imgDims = image.scale(0.5);
//   page.drawImage(image, {
//     x: 50,
//     y: 50,
//     width: imgDims.width,
//     height: imgDims.height,
//     // Opcjonalnie, możesz obrócić obraz
//   });
//   return pdfDoc;
// }

export default function PDFView() {
  // async function createPdf() {
  //   const pdfDoc = await PDFDocument.create();
  //   const timesRomanFont = await pdfDoc.embedFont(StandardFonts.TimesRoman);

  //   const page = pdfDoc.addPage();
  //   const { width, height } = page.getSize();
  //   const fontSize = 30;
  //   page.drawText("Creating PDFs in JavaScript is awesome!", {
  //     x: 50,
  //     y: height - 4 * fontSize,
  //     size: fontSize,
  //     font: timesRomanFont,
  //     color: rgb(0, 0.53, 0.71),
  //   });

  //   await createFooter(pdfDoc, page);

  //   const pdfBytes = await pdfDoc.save();

  //   download(pdfBytes, "pdf-lib_creation_example.pdf", "application/pdf");
  // }

  return (
    <div id="printable-content">
      <p>
        Click the button to create a new PDF document with <code>pdf-lib</code>
      </p>
      <button onClick={printAndSaveAsPDF} className="bg-red ml-[500px]">
        Create PDF
      </button>
      <p>(Your browser will download the resulting file)</p>
    </div>
  );
}

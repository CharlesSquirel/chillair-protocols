"use client";

import { PDFDocument, PDFPage, StandardFonts, rgb } from "pdf-lib";
import download from "downloadjs";
import { chillairInfo } from "@/data/chillairInfo";
import createBase64FromPNG from "@/utils/actions/createBase64FromPNG";

async function createFooter(pdfDoc: PDFDocument, page: PDFPage) {
  const font = await pdfDoc.embedFont(StandardFonts.TimesRoman); // Użyj Helvetica zamiast TimesRoman
  const fontSize = 10;
  const lineHeight = 12;
  const footerText = `
      ${chillairInfo.name}
      ${chillairInfo.street} ${chillairInfo.extraAddressInfo}
      ${chillairInfo.postCode} ${chillairInfo.city}
      NIP: ${chillairInfo.nip}   KRS: ${chillairInfo.krs}
      Tel: ${chillairInfo.tel}   Email: ${chillairInfo.contactEmail}
    `;
  page.drawText(footerText, {
    x: 50,
    y: 150,
    size: fontSize,
    font: font,
    color: rgb(0, 0, 0),
    lineHeight,
  });
  const base64String = await createBase64FromPNG(
    "app/assets/images/chillair_logo.png",
  );
  const image = await pdfDoc.embedPng(base64String);
  const imgDims = image.scale(0.5);
  page.drawImage(image, {
    x: 50,
    y: 50,
    width: imgDims.width,
    height: imgDims.height,
    // Opcjonalnie, możesz obrócić obraz
  });
  return pdfDoc;
}

export default function PDFView() {
  async function createPdf() {
    const pdfDoc = await PDFDocument.create();
    const timesRomanFont = await pdfDoc.embedFont(StandardFonts.TimesRoman);

    const page = pdfDoc.addPage();
    const { width, height } = page.getSize();
    const fontSize = 30;
    page.drawText("Creating PDFs in JavaScript is awesome!", {
      x: 50,
      y: height - 4 * fontSize,
      size: fontSize,
      font: timesRomanFont,
      color: rgb(0, 0.53, 0.71),
    });

    await createFooter(pdfDoc, page);

    const pdfBytes = await pdfDoc.save();

    download(pdfBytes, "pdf-lib_creation_example.pdf", "application/pdf");
  }

  return (
    <>
      <p>
        Click the button to create a new PDF document with <code>pdf-lib</code>
      </p>
      <button onClick={createPdf}>Create PDF</button>
      <p>(Your browser will download the resulting file)</p>
    </>
  );
}

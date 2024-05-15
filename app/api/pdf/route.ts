import { transporterOptions } from "lib/mail.config";
import { NextRequest } from "next/server";
import nodemailer from "nodemailer";
import { chromium } from "playwright";

export async function POST(request: NextRequest) {
  try {
    const { currentUrl, isSendingMail } = await request.json();

    // Pobierz bazowy adres URL z obiektu żądania
    const baseUrl = new URL(request.headers.get("referer")!);
    // Utwórz pełny adres URL używając bieżącego adresu i ścieżki
    const fullUrl = `${baseUrl.protocol}//${baseUrl.host}${currentUrl}`;

    const browser = await chromium.launch();
    const page = await browser.newPage();

    await page.goto(fullUrl);
    await page.emulateMedia({ media: "print" });

    const pdfBuffer = await page.pdf({ format: "A4" });

    await browser.close();

    if (isSendingMail) {
      const transporter = nodemailer.createTransport(transporterOptions);
      const mailOptions = {
        from: process.env.EMAIL,
        to: process.env.EMAIL,
        subject: "Protokół testowy",
        text: "Protokół testowy",
        attachments: [
          {
            filename: "generated_pdf.pdf",
            content: pdfBuffer,
          },
        ],
      };
      await transporter.sendMail(mailOptions);
    }
    return new Response(pdfBuffer, { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("Internal Server Error", { status: 500 });
  }
}

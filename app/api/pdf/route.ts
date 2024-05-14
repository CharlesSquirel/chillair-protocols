import { transporterOptions } from "lib/mail.config";
import { NextRequest } from "next/server";
import nodemailer from "nodemailer";
import puppeteer from "puppeteer";
import { resolve } from "url";

export async function POST(request: NextRequest) {
  try {
    const { currentUrl, isSendingMail } = await request.json();
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();

    const baseUrl = resolve(request.headers.get("referer")!, "/");
    const fullUrl = resolve(baseUrl, currentUrl);

    await page.goto(fullUrl, {
      waitUntil: "networkidle0",
    });
    await page.emulateMediaType("print");

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

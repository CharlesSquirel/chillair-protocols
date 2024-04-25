import { NextRequest } from "next/server";
import puppeteer from "puppeteer";

export async function POST(request: NextRequest) {
  try {
    const pathname = await request.json();
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();

    await page.goto(
      `chillair-protocols-fk65a0x6m-charlessquirels-projects.vercel.app${pathname}`,
      {
        waitUntil: "networkidle0",
      },
    );
    await page.emulateMediaType("print");

    const pdfBuffer = await page.pdf({ format: "A4" });

    await browser.close();
    return new Response(pdfBuffer, { status: 200 });
  } catch (error) {
    return new Response("Internal Server Error", { status: 500 });
  }
}

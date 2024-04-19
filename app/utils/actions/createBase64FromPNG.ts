"use server";

import fs from "fs";
import path from "path";

export default async function createBase64FromPNG(url: string) {
  const filePath = path.join(
    process.cwd(),

    url,
  );
  const fileData = fs.readFileSync(filePath);
  const base64String = Buffer.from(fileData).toString("base64");
  return base64String;
}

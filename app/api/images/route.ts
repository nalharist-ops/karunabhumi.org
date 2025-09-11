import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";

export async function GET() {
  const imagesDir = path.join(process.cwd(), "public/image");
  const files = fs.readdirSync(imagesDir);

  const images = files
    .filter((f) => /\.(jpg|jpeg|png|webp)$/i.test(f)) // only images
    .map((f) => `/image/${f}`);

  return NextResponse.json(images);
}

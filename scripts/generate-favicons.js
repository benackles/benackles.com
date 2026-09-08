/*
 * Builds the circular-masked favicon set from public/images/avatar.jpg.
 * Run from the project root:  npm run favicons
 */
import sharp from "sharp";
import fs from "node:fs/promises";
import path from "node:path";

const SRC = "public/images/avatar.jpg";
const OUT = "public";

// Face-centred square crop of the 400x400 source, so the circle still
// reads as a person at 16px.
const CROP = { left: 100, top: 30, width: 260, height: 260 };

// Site background, used where the platform will not honour transparency.
const BG = "#faf8f4";

const circle = (size) =>
  Buffer.from(
    `<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">` +
      `<circle cx="${size / 2}" cy="${size / 2}" r="${size / 2}" fill="#fff"/>` +
      `</svg>`,
  );

/** Square, face-cropped, circular-masked PNG with transparency. */
async function masked(size) {
  return sharp(SRC)
    .extract(CROP)
    .resize(size, size, { fit: "cover" })
    .composite([{ input: circle(size), blend: "dest-in" }])
    .png({ compressionLevel: 9, palette: true })
    .toBuffer();
}

/** Packs PNG frames into a .ico container (ICO allows raw PNG payloads). */
function buildIco(frames) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // type: icon
  header.writeUInt16LE(frames.length, 4);

  let offset = 6 + frames.length * 16;
  const entries = [];
  for (const { size, data } of frames) {
    const e = Buffer.alloc(16);
    e.writeUInt8(size >= 256 ? 0 : size, 0); // width (0 means 256)
    e.writeUInt8(size >= 256 ? 0 : size, 1); // height
    e.writeUInt8(0, 2); // palette size
    e.writeUInt8(0, 3); // reserved
    e.writeUInt16LE(1, 4); // colour planes
    e.writeUInt16LE(32, 6); // bits per pixel
    e.writeUInt32LE(data.length, 8);
    e.writeUInt32LE(offset, 12);
    entries.push(e);
    offset += data.length;
  }

  return Buffer.concat([
    header,
    ...entries,
    ...frames.map((f) => f.data),
  ]);
}

async function main() {
  // PNG fallback for consumers that ignore the SVG.
  await fs.writeFile(path.join(OUT, "favicon-32.png"), await masked(32));

  // Apple touch icon: iOS ignores alpha and composites on black, so paint
  // the site background behind the circle.
  const apple = await sharp({
    create: {
      width: 180,
      height: 180,
      channels: 4,
      background: BG,
    },
  })
    .composite([{ input: await masked(180) }])
    .png({ compressionLevel: 9, palette: true })
    .toBuffer();
  await fs.writeFile(path.join(OUT, "apple-touch-icon.png"), apple);

  // Multi-size .ico for legacy consumers.
  const frames = [];
  for (const size of [16, 32, 48]) {
    frames.push({ size, data: await masked(size) });
  }
  await fs.writeFile(path.join(OUT, "favicon.ico"), buildIco(frames));

  // Scalable SVG favicon: a 128px JPEG payload inside a circular clip.
  const payload = await sharp(SRC)
    .extract(CROP)
    .resize(128, 128, { fit: "cover" })
    .jpeg({ quality: 82, mozjpeg: true })
    .toBuffer();
  const svg =
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">` +
    `<clipPath id="c"><circle cx="64" cy="64" r="64"/></clipPath>` +
    `<image href="data:image/jpeg;base64,${payload.toString("base64")}" ` +
    `width="128" height="128" clip-path="url(#c)"/>` +
    `</svg>\n`;
  await fs.writeFile(path.join(OUT, "favicon.svg"), svg);

  for (const f of [
    "favicon.svg",
    "favicon.ico",
    "favicon-32.png",
    "apple-touch-icon.png",
  ]) {
    const { size } = await fs.stat(path.join(OUT, f));
    console.log(`${f.padEnd(22)} ${(size / 1024).toFixed(1)} KB`);
  }
}

main();

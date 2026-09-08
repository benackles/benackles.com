/*
 * Renders public/og.jpg — the 1200x630 social card — by screenshotting the
 * /og-card route with headless Chrome, so the card uses the real Inter
 * webfont and the real design tokens.
 *
 * Needs the dev server running:
 *   npm run dev
 *   npm run og
 */
import { execFileSync } from "node:child_process";
import { mkdtempSync, rmSync, existsSync, statSync, renameSync } from "node:fs";
import { tmpdir } from "node:os";
import { setTimeout as sleep } from "node:timers/promises";
import path from "node:path";
import sharp from "sharp";

const URL_ = "http://localhost:4321/og-card";
const OUT = "public/og.jpg";
const WIDTH = 1200;
const HEIGHT = 630;

// The card page lives underscore-prefixed so it never ships as a public
// route. Un-park it just long enough for the dev server to serve it.
const PARKED = "src/pages/_og-card.astro";
const LIVE = "src/pages/og-card.astro";

const CHROME = [
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  "/Applications/Chromium.app/Contents/MacOS/Chromium",
  "/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge",
].find((p) => existsSync(p));

if (!CHROME) {
  console.error("No Chrome/Chromium/Edge found — cannot render the OG card.");
  process.exit(1);
}

const alive = await fetch("http://localhost:4321/").catch(() => null);
if (!alive?.ok) {
  console.error("Dev server is not responding. Start it first:");
  console.error("  npm run dev");
  process.exit(1);
}

const parked = existsSync(PARKED);
if (parked) renameSync(PARKED, LIVE);

const tmp = mkdtempSync(path.join(tmpdir(), "og-"));
const shot = path.join(tmp, "og.png");

try {
  // Give the dev server a moment to register the new route.
  for (let i = 0; i < 20; i++) {
    const r = await fetch(URL_).catch(() => null);
    if (r?.ok) break;
    await sleep(250);
  }

  execFileSync(
    CHROME,
    [
      "--headless=new",
      "--no-sandbox",
      "--disable-gpu",
      "--hide-scrollbars",
      "--no-first-run",
      `--user-data-dir=${path.join(tmp, "profile")}`,
      `--screenshot=${shot}`,
      `--window-size=${WIDTH},${HEIGHT}`,
      "--virtual-time-budget=5000",
      URL_,
    ],
    { stdio: "ignore", timeout: 60_000 },
  );
} catch {
  // Chrome exits non-zero in some headless builds even on success.
} finally {
  // Always re-park the route, even if the capture blew up.
  if (parked && existsSync(LIVE)) renameSync(LIVE, PARKED);
}

try {
  if (!existsSync(shot) || statSync(shot).size === 0) {
    console.error("Chrome produced no screenshot.");
    process.exit(1);
  }

  const { width, height } = await sharp(shot).metadata();
  await sharp(shot)
    .resize(WIDTH, HEIGHT, { fit: "cover" })
    .jpeg({ quality: 88, mozjpeg: true })
    .toFile(OUT);

  const { size } = statSync(OUT);
  console.log(
    `captured ${width}x${height} -> ${OUT} (${(size / 1024).toFixed(1)} KB)`,
  );
} finally {
  rmSync(tmp, { recursive: true, force: true });
}

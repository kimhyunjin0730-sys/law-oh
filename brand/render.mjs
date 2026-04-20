import { chromium } from "playwright";
import { fileURLToPath, pathToFileURL } from "node:url";
import path from "node:path";

const here = path.dirname(fileURLToPath(import.meta.url));
const target = pathToFileURL(path.join(here, "hangyo-logo.html")).href;
const out = path.join(here, "hangyo-logo.png");

const browser = await chromium.launch();
const ctx = await browser.newContext({
  viewport: { width: 1600, height: 2100 },
  deviceScaleFactor: 2,
});
const page = await ctx.newPage();
await page.goto(target, { waitUntil: "networkidle" });
// give web fonts an extra moment to settle
await page.waitForTimeout(600);
await page.screenshot({ path: out, fullPage: false, omitBackground: false });
await browser.close();
console.log("wrote", out);

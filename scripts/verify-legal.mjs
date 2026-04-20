import { chromium } from "playwright";

const BASE = process.argv[2] || "https://law-oh.vercel.app";
const results = [];
const add = (name, ok, detail = "") =>
  results.push({ name, ok: ok ? "✅" : "❌", detail });

const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });

// 1) /legal loads, shows active + coming-soon cards
try {
  const page = await ctx.newPage();
  const bads = [];
  page.on("response", (r) => r.status() === 404 && bads.push(`404 ${r.url()}`));
  const resp = await page.goto(BASE + "/legal", { waitUntil: "networkidle", timeout: 45000 });
  add("/legal status 200", resp.status() === 200, String(resp.status()));
  add("/legal no 404", bads.length === 0, bads.join(" | "));
  const body = await page.locator("body").innerText();
  add("/legal shows 체류자격", body.includes("체류자격"));
  add("/legal shows coming soon", body.includes("준비 중") || body.toLowerCase().includes("coming soon"));
  await page.close();
} catch (e) {
  add("/legal", false, e.message.split("\n")[0]);
}

// 2) /legal/immigration
try {
  const page = await ctx.newPage();
  const bads = [];
  page.on("response", (r) => r.status() === 404 && bads.push(`404 ${r.url()}`));
  const resp = await page.goto(BASE + "/legal/immigration", { waitUntil: "networkidle", timeout: 45000 });
  add("/legal/immigration 200", resp.status() === 200, String(resp.status()));
  add("/legal/immigration no 404", bads.length === 0, bads.join(" | "));
  for (const id of ["diagram-visas", "diagram-decision", "diagram-procedure", "diagram-agencies", "diagram-deadlines"]) {
    const count = await page.locator(`#${id}`).count();
    add(`${id} exists`, count === 1, `count=${count}`);
  }
  const toggleCount = await page.locator("button", { hasText: /Text version|Show diagram/ }).count();
  add("5 text-version toggles present", toggleCount === 5, `count=${toggleCount}`);
  const cta = page.locator("a", { hasText: /온라인 상담 접수|在线咨询|Online consult/ }).first();
  const href = await cta.getAttribute("href").catch(() => null);
  add("CTA → /#consult", href === "/#consult", `href=${href}`);
  const firstVisa = page.locator("#diagram-visas button").first();
  await firstVisa.click({ timeout: 5000 }).catch(() => {});
  await page.waitForTimeout(300);
  const dialogVisible = await page.locator('[role="dialog"]').count();
  add("Visa slide-over opens", dialogVisible > 0);
  await page.keyboard.press("Escape").catch(() => {});
  await page.close();
} catch (e) {
  add("/legal/immigration", false, e.message.split("\n")[0]);
}

// 3) Language switch
try {
  const page = await ctx.newPage();
  await page.goto(BASE + "/legal/immigration", { waitUntil: "networkidle" });
  await page.locator("button", { hasText: "ZH" }).first().click({ timeout: 5000 });
  await page.waitForTimeout(500);
  const zhBody = await page.locator("body").innerText();
  add("ZH toggle renders Chinese", /[\u4e00-\u9fff]/.test(zhBody));
  await page.locator("button", { hasText: "EN" }).first().click({ timeout: 5000 });
  await page.waitForTimeout(500);
  const enBody = await page.locator("body").innerText();
  add("EN toggle renders English", enBody.includes("Legal Info") || enBody.includes("Visa"));
  await page.close();
} catch (e) {
  add("Language switch", false, e.message.split("\n")[0]);
}

// 4) Rebrand check on home
try {
  const page = await ctx.newPage();
  await page.goto(BASE + "/", { waitUntil: "networkidle" });
  const body = await page.locator("body").innerText();
  add("HOME uses 한교 brand", body.includes("법률사무소 한교"));
  add("HOME removed 비컴", !body.includes("비컴"));
  add("HOME nav has 구성원 소개", body.includes("구성원 소개") || body.includes("구성원"));
  await page.close();
} catch (e) {
  add("HOME rebrand", false, e.message.split("\n")[0]);
}

console.log("\n=== LEGAL VERIFICATION ===");
for (const r of results) console.log(`${r.ok} ${r.name}${r.detail ? `  (${r.detail})` : ""}`);
const failed = results.filter((r) => r.ok === "❌").length;
console.log(`\n${results.length - failed}/${results.length} passed\n`);
await browser.close();
process.exit(failed === 0 ? 0 : 1);

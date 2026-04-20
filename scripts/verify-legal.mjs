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

// 2) /legal/immigration — static info layout
try {
  const page = await ctx.newPage();
  const bads = [];
  page.on("response", (r) => r.status() === 404 && bads.push(`404 ${r.url()}`));
  const resp = await page.goto(BASE + "/legal/immigration", { waitUntil: "networkidle", timeout: 45000 });
  add("/legal/immigration 200", resp.status() === 200, String(resp.status()));
  add("/legal/immigration no 404", bads.length === 0, bads.join(" | "));

  // Overview heading (KO first — default lang)
  const overviewKo = await page.getByRole("heading", { name: "개관" }).count();
  add("Overview heading (KO)", overviewKo >= 1, `count=${overviewKo}`);

  // At least one table (VisaTable / DeadlineTable)
  const tableCount = await page.locator("table").count();
  add("At least one <table> present", tableCount >= 1, `count=${tableCount}`);

  // Law articles contain law.go.kr link
  const lawLink = await page.locator('a[href*="law.go.kr"]').count();
  add("law.go.kr link in laws section", lawLink >= 1, `count=${lawLink}`);

  // Agency directory has tel: anchor
  const telAnchor = await page.locator('a[href^="tel:"]').count();
  add("tel: anchor in agency directory", telAnchor >= 1, `count=${telAnchor}`);

  const cta = page.locator("a", { hasText: /온라인 상담 접수|在线咨询|Online consult/ }).first();
  const href = await cta.getAttribute("href").catch(() => null);
  add("CTA → /#consult", href === "/#consult", `href=${href}`);

  await page.close();
} catch (e) {
  add("/legal/immigration", false, e.message.split("\n")[0]);
}

// 3) Language switch — check ZH/EN overview heading renders
try {
  const page = await ctx.newPage();
  await page.goto(BASE + "/legal/immigration", { waitUntil: "networkidle" });
  await page.locator("button", { hasText: "ZH" }).first().click({ timeout: 5000 });
  await page.waitForTimeout(500);
  const zhBody = await page.locator("body").innerText();
  add("ZH toggle renders Chinese", /[\u4e00-\u9fff]/.test(zhBody));
  const overviewZh = await page.getByRole("heading", { name: "概述" }).count();
  add("Overview heading (ZH)", overviewZh >= 1, `count=${overviewZh}`);
  await page.locator("button", { hasText: "EN" }).first().click({ timeout: 5000 });
  await page.waitForTimeout(500);
  const enBody = await page.locator("body").innerText();
  add("EN toggle renders English", enBody.includes("Legal Info") || enBody.includes("Visa"));
  const overviewEn = await page.getByRole("heading", { name: "Overview" }).count();
  add("Overview heading (EN)", overviewEn >= 1, `count=${overviewEn}`);
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

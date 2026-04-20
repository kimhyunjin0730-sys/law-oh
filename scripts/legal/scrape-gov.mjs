import { writeFile, mkdir } from "node:fs/promises";
import { load } from "cheerio";
import { fetchHtml, sleep } from "./_shared.mjs";

/** Immigration-topic URLs. Curated manually. */
const TARGETS = [
  { agency: "법무부", title: "형사절차와 범죄피해자 지원 제도", url: "https://www.moj.go.kr/cvs/2701/subview.do" },
  { agency: "경찰청", title: "피해자 지원·보호 제도", url: "https://www.police.go.kr/www/security/support/support01/support03.jsp" },
  { agency: "대검찰청", title: "사건처리절차", url: "https://spo.go.kr/site/chungju/01/10101030200002018120505.jsp" },
  { agency: "생활법령정보", title: "외국인근로자 체류자격", url: "https://www.easylaw.go.kr/CSP/CnpClsMain.laf?csmSeq=2042&ccfNo=1&cciNo=1&cnpClsNo=1" },
];

export function extractProcedural(html, url) {
  const $ = load(html);
  $("script, style, noscript, nav, footer, header, aside").remove();
  // Prefer <main>, fall back to common Korean CMS containers
  const candidates = ["main", "#container", "#content", ".content", "article", "body"];
  let text = "";
  for (const sel of candidates) {
    const node = $(sel).first();
    if (node.length && node.text().trim().length > 10) {
      text = node.text().replace(/\s+/g, " ").trim();
      break;
    }
  }
  return { url, text };
}

export async function scrapeAll() {
  const out = [];
  const errors = [];
  for (const t of TARGETS) {
    try {
      const html = await fetchHtml(t.url);
      const { text } = extractProcedural(html, t.url);
      if (!text || text.length < 100) {
        errors.push({ ...t, reason: "empty-or-short" });
        continue;
      }
      out.push({ ...t, text, fetchedAt: new Date().toISOString(), kogl: "type-1" });
      await sleep(1500); // polite
    } catch (e) {
      errors.push({ ...t, reason: e.message });
    }
  }
  return { out, errors };
}

async function main() {
  const { out, errors } = await scrapeAll();
  await mkdir("raw/legal", { recursive: true });
  await writeFile("raw/legal/scrape-gov.json", JSON.stringify(out, null, 2));
  await writeFile("raw/legal/scrape-errors.json", JSON.stringify(errors, null, 2));
  console.log(`Scraped ${out.length}/${TARGETS.length}. Errors: ${errors.length}.`);
  if (errors.length === TARGETS.length) process.exit(1);
}

// Execute when run directly
if (process.argv[1]?.endsWith("scrape-gov.mjs")) {
  await main();
}

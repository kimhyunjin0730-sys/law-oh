import { writeFile, mkdir } from "node:fs/promises";
import { load } from "cheerio";
import { fetchHtml } from "./_shared.mjs";

/** Curated article targets for the immigration topic.
 *  Use law.go.kr public pages (no OC key required). */
const LAW_TARGETS = [
  { title: "출입국관리법", url: "https://www.law.go.kr/법령/출입국관리법" },
  { title: "출입국관리법 시행령", url: "https://www.law.go.kr/법령/출입국관리법시행령" },
];

const EASYLAW_TARGETS = [
  { title: "외국인근로자 체류자격", url: "https://www.easylaw.go.kr/CSP/CnpClsMain.laf?csmSeq=2042&ccfNo=1&cciNo=1&cnpClsNo=1" },
];

/**
 * Parse a law page HTML into { title, revisedAt, articles }.
 *
 * Supports two DOM flavors:
 *  1. Simple synthetic markup used in unit tests:
 *       .law-title / .lawTitle / h1
 *       .article > .art-no + .art-body
 *       .revision / .시행일 / .lawRev
 *  2. Real law.go.kr `lsInfoR.do` markup:
 *       h2 (first) holds the law name
 *       `[시행 YYYY. M. D.]` in body text gives the revision date
 *       Each article lives in `div.pgroup > div.lawcon`, with the article
 *       number/title inside a `<label>` (e.g. "제1조(목적)").
 */
export function parseLawPage(html) {
  const $ = load(html);

  // --- Title --------------------------------------------------------------
  let title = $(".law-title, .lawTitle").first().text().trim();
  if (!title) title = $("h1").first().text().trim();
  if (!title) title = $("h2").first().text().trim();

  // --- Revision date ------------------------------------------------------
  let revisionText = $(".revision, .시행일, .lawRev").first().text();
  if (!revisionText) {
    // law.go.kr embeds "[시행 YYYY. M. D.]" in body text
    const bodyText = $("body").text();
    const bm = bodyText.match(/\[시행\s*(\d{4})[.\s]*(\d{1,2})[.\s]*(\d{1,2})/);
    if (bm) revisionText = `${bm[1]}. ${bm[2]}. ${bm[3]}`;
  }
  const m = revisionText.match(/(\d{4})[.\s]*(\d{1,2})[.\s]*(\d{1,2})/);
  const revisedAt = m
    ? `${m[1]}-${m[2].padStart(2, "0")}-${m[3].padStart(2, "0")}`
    : "";

  // --- Articles -----------------------------------------------------------
  const articles = [];

  // Strategy A: synthetic test markup (.article / .art-no / .art-body)
  $(".article, [id^='art']").each((_, el) => {
    const $el = $(el);
    const no = $el.find(".art-no, .articleNo").first().text().trim();
    const body = $el.find(".art-body, .articleBody").first().text().trim();
    if (no && body) {
      articles.push({ ref: `${title} ${no}`.trim(), text: body });
    }
  });

  // Strategy B: law.go.kr lsInfoR.do markup (div.pgroup > div.lawcon)
  if (articles.length === 0) {
    $("div.pgroup").each((_, el) => {
      const $el = $(el);
      const $lawcon = $el.find(".lawcon").first();
      if (!$lawcon.length) return;
      const label = $lawcon.find("label").first().text().trim();
      if (!label) return;
      // Label like "제1조(목적)" — pull the "제N조(...)" portion
      const noMatch = label.match(/제\s*\d+(?:의\d+)?\s*조(?:의\d+)?\s*\([^)]*\)?/);
      const no = noMatch ? noMatch[0].trim() : label;
      const full = $lawcon.text().replace(/\s+/g, " ").trim();
      // The label text is repeated at the start of full; keep it for context
      if (no && full) {
        articles.push({ ref: `${title} ${no}`.trim(), text: full });
      }
    });
  }

  return { title, revisedAt, articles };
}

async function safeFetch(url) {
  try {
    return await fetchHtml(url);
  } catch (e) {
    return null;
  }
}

/**
 * law.go.kr '/법령/<name>' URLs return a thin iframe host page; the real
 * article body lives at '/LSW/lsInfoR.do?lsiSeq=...&efYd=...'. Resolve the
 * iframe src and swap lsInfoP.do -> lsInfoR.do to get the full-body HTML.
 */
async function fetchLawBody(startUrl) {
  const shell = await safeFetch(startUrl);
  if (!shell) return null;
  const $ = load(shell);
  const src = $("iframe#lawService, iframe[name='lawService']").attr("src");
  if (!src) {
    // No iframe — the start URL might already be the body.
    return shell;
  }
  const iframeUrl = new URL(src, startUrl);
  // Swap lsInfoP.do -> lsInfoR.do (renders full static body)
  iframeUrl.pathname = iframeUrl.pathname
    .replace(/\/+/g, "/")
    .replace(/lsInfoP\.do$/, "lsInfoR.do");
  return await safeFetch(iframeUrl.toString());
}

async function main() {
  const laws = [];
  for (const t of LAW_TARGETS) {
    const html = await fetchLawBody(t.url);
    if (!html) continue;
    const parsed = parseLawPage(html);
    laws.push({ ...t, ...parsed, fetchedAt: new Date().toISOString(), kogl: "type-1" });
  }
  const easylaw = [];
  for (const t of EASYLAW_TARGETS) {
    const html = await safeFetch(t.url);
    if (!html) continue;
    const $ = load(html);
    $("script, style, nav, footer, header").remove();
    const text = ($("#container, main, body").first().text() || "").replace(/\s+/g, " ").trim();
    easylaw.push({ ...t, text, fetchedAt: new Date().toISOString(), kogl: "type-1" });
  }
  await mkdir("raw/legal", { recursive: true });
  await writeFile("raw/legal/fetch-api.json", JSON.stringify({ laws, easylaw }, null, 2));
  const totalArticles = laws.reduce((n, l) => n + (l.articles?.length || 0), 0);
  console.log(`Laws: ${laws.length} (${totalArticles} articles), Easylaw: ${easylaw.length}`);
}

if (process.argv[1]?.endsWith("fetch-api.mjs")) {
  await main();
}

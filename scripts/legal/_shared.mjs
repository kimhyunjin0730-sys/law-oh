import { load } from "cheerio";

export const UA =
  "Mozilla/5.0 (compatible; law-oh-content-bot/1.0; +mailto:lawohdh@gmail.com)";

export async function fetchHtml(url) {
  // Use the Node 18+ built-in `fetch` (backed by undici); the package import
  // exhibits ECONNRESET against some .go.kr sites in this environment.
  const res = await fetch(url, {
    headers: {
      "User-Agent": UA,
      Accept: "text/html,application/xhtml+xml",
      "Accept-Language": "ko,en;q=0.8",
    },
    redirect: "follow",
  });
  if (!res.ok) throw new Error(`HTTP ${res.status} ${url}`);
  return await res.text();
}

export function textFromHtml(html, selector) {
  const $ = load(html);
  $("script, style, noscript").remove();
  const node = $(selector).first();
  if (node.length === 0) return "";
  return node.text().replace(/\s+/g, " ").trim();
}

export function buildUrl(base, href) {
  return new URL(href, base).toString();
}

export async function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

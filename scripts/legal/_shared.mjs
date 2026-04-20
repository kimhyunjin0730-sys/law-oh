import { load } from "cheerio";
import { fetch } from "undici";

export const UA = "law-oh-content-bot (contact: lawohdh@gmail.com)";

export async function fetchHtml(url) {
  const res = await fetch(url, {
    headers: { "User-Agent": UA, "Accept": "text/html,application/xhtml+xml" },
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

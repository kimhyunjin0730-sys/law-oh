import { readFile, writeFile } from "node:fs/promises";
import Anthropic from "@anthropic-ai/sdk";

const SCHEMA_NOTE = `
JSON schema (strict):
{
  "slug": "immigration",
  "title": { "ko": "...", "zh": "...", "en": "..." },
  "summary": { "ko": "(max 40 chars)", "zh": "...", "en": "..." },
  "meta": { "generatedAt": "YYYY-MM-DDTHH:mm:ssZ", "sourceCount": N, "lastRevisionAt": "YYYY-MM-DD" },
  "visas": [
    { "code": "F-4", "label": {...}, "target": {...}, "period": {...}, "requirements": { "ko": [...], "zh": [...], "en": [...] } }
  ],
  "decisionTree": {
    "rootId": "q1",
    "nodes": [
      { "id": "q1", "question": {...}, "yes": { "nextId": "q2" }, "no": { "leafAnchor": "procedure" } }
    ]
  },
  "procedure": [
    { "id": "step1", "label": {...}, "agency": {...}, "duration": {...}, "lawRef": "출입국관리법 §46", "note": {...} }
  ],
  "agencies": [
    { "id": "immi-seoul", "name": {...}, "role": {...}, "phone": "1345", "address": {...}, "url": "https://..." }
  ],
  "deadlines": [
    { "day": 7, "title": {...}, "detail": {...} }
  ],
  "laws": [
    { "ref": "출입국관리법 §46 ①", "text": { "ko": "...", "zh": "(translate from ko)", "en": "(translate from ko)" }, "revisedAt": "YYYY-MM-DD", "sourceUrl": "https://..." }
  ],
  "sources": [
    { "agency": "법무부", "title": "...", "url": "https://...", "fetchedAt": "...", "kogl": "type-1" }
  ],
  "disclaimer": {
    "ko": "본 페이지는 ...",
    "zh": "本页面基于 ...",
    "en": "This page ..."
  }
}
`;

export function buildPrompt(slug, raw) {
  return `You are assisting a Korean law firm (BECOME, 법률사무소 비컴) in building a legal-information page for Chinese-speaking clients in Korea.

TOPIC: ${slug} (체류자격·출입국 / Visa & Immigration)

TASK: Produce ONE JSON object that populates the LegalPageContent schema below. The JSON must:
1. Be written in THREE languages (ko, zh, en) for every Localized field.
2. Be grounded ONLY in the raw sources provided below. Do NOT invent statutes, phone numbers, or deadlines.
3. Reproduce Korean statute article text verbatim in "laws[].text.ko". Translate to zh/en faithfully.
4. Include 3-5 visas (F-4, H-2, D-10, E-9, F-5 if present), 3-7 decision tree nodes, 4-6 procedure steps, 3-5 agencies, 3-6 deadlines.
5. Keep summary.ko under 40 Korean characters.
6. Mark sources[].kogl as "type-1" (KOGL — Korea Open Government License).
7. Output VALID JSON only, no prose around it, no markdown fences.

HARD RULES — avoid AI-obvious patterns:
- No "3 Things to Know" / "Here are the key points" phrasing.
- No emoji.
- Agency phone numbers must be exactly as in raw sources. If uncertain, OMIT the agency.
- If a field cannot be grounded, set it to empty string / empty array.

RAW SOURCES (JSON):
${JSON.stringify(raw, null, 2).slice(0, 180000)}

${SCHEMA_NOTE}

Now output the JSON object.`;
}

export function validateOutput(obj) {
  const reqLocalized = ["title", "summary", "disclaimer"];
  for (const k of reqLocalized) {
    if (!obj?.[k] || !obj[k].ko || !obj[k].zh || !obj[k].en) {
      throw new Error(`Missing or incomplete Localized field: ${k}`);
    }
  }
  const reqArrays = ["visas", "procedure", "agencies", "deadlines", "laws", "sources"];
  for (const k of reqArrays) {
    if (!Array.isArray(obj?.[k])) throw new Error(`Missing array field: ${k}`);
  }
  if (!obj?.meta || typeof obj.meta.generatedAt !== "string") {
    throw new Error("meta.generatedAt missing");
  }
  return true;
}

async function main() {
  if (!process.env.ANTHROPIC_API_KEY) {
    console.error("Set ANTHROPIC_API_KEY env var.");
    process.exit(1);
  }
  const api = JSON.parse(await readFile("raw/legal/fetch-api.json", "utf-8"));
  const scrapes = JSON.parse(await readFile("raw/legal/scrape-gov.json", "utf-8"));
  const raw = { laws: api.laws ?? [], easylaw: api.easylaw ?? [], scrapes };

  const client = new Anthropic();
  const msg = await client.messages.create({
    model: "claude-opus-4-7",
    max_tokens: 16000,
    messages: [{ role: "user", content: buildPrompt("immigration", raw) }],
  });
  const text = msg.content.map((c) => (c.type === "text" ? c.text : "")).join("");
  const jsonStart = text.indexOf("{");
  const jsonEnd = text.lastIndexOf("}");
  if (jsonStart < 0 || jsonEnd < 0) {
    console.error("Model did not return JSON. Raw:\n", text);
    process.exit(2);
  }
  const parsed = JSON.parse(text.slice(jsonStart, jsonEnd + 1));
  validateOutput(parsed);
  await writeFile("src/content/legal/immigration.draft.json", JSON.stringify(parsed, null, 2));
  console.log("Wrote src/content/legal/immigration.draft.json — review and rename to immigration.json");
}

if (process.argv[1]?.endsWith("generate.mjs")) {
  await main();
}

import { test, expect, describe } from "vitest";
import { buildPrompt, validateOutput } from "../scripts/legal/generate.mjs";

describe("buildPrompt", () => {
  test("includes all raw sources and language instructions", () => {
    const raw = { laws: [{ title: "출입국관리법", articles: [{ ref: "§46", text: "..." }] }], easylaw: [], scrapes: [] };
    const p = buildPrompt("immigration", raw);
    expect(p).toContain("출입국관리법");
    expect(p).toContain("ko");
    expect(p).toContain("zh");
    expect(p).toContain("en");
    expect(p).toContain("KOGL");
  });
});

describe("validateOutput", () => {
  test("accepts minimal valid shape", () => {
    const good = {
      slug: "immigration",
      title: { ko: "a", zh: "b", en: "c" },
      summary: { ko: "a", zh: "b", en: "c" },
      meta: { generatedAt: "2026-04-20", sourceCount: 1, lastRevisionAt: "2024-03-01" },
      visas: [], decisionTree: { rootId: "", nodes: [] }, procedure: [],
      agencies: [], deadlines: [], laws: [], sources: [],
      disclaimer: { ko: "a", zh: "b", en: "c" },
    };
    expect(() => validateOutput(good)).not.toThrow();
  });
  test("rejects missing language", () => {
    const bad = { slug: "immigration", title: { ko: "a", en: "c" } };
    expect(() => validateOutput(bad)).toThrow();
  });
});

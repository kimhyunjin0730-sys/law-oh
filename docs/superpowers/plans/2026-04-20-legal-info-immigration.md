# 법률정보 MVP (체류자격·출입국) Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Ship `/legal/immigration` page built from scraped/API-sourced .go.kr data, presented as 5 bespoke React+SVG diagrams in KO/ZH/EN, deployed to Vercel.

**Architecture:** Offline content pipeline (scrape → Claude → JSON committed to repo) + runtime React pages that consume the JSON. No runtime API calls, no server. 5 hand-crafted SVG diagram components, each with a distinct visual metaphor.

**Tech Stack:** Vite + React + TypeScript + Tailwind v4 + React Router v7 + Framer Motion + Anthropic SDK (offline only) + cheerio (scraping) + undici (fetch) + vitest (scraper tests) + Playwright (e2e).

**Spec reference:** `docs/superpowers/specs/2026-04-20-legal-info-design.md`

---

## File Structure

```
src/
  app/
    routes.tsx                          # MODIFY: add /legal + /legal/immigration
    components/
      Layout.tsx                        # MODIFY: add 법률정보 nav item
      legal/                            # CREATE
        LegalHero.tsx
        VisaMapDiagram.tsx
        DecisionTreeDiagram.tsx
        ProcedureFlowDiagram.tsx
        AgencyNetworkDiagram.tsx
        DeadlineTimeline.tsx
        DiagramShell.tsx                # Common wrapper (aria-label + text-fallback toggle)
        SourceBlock.tsx
        DisclaimerBlock.tsx
    context/
      LanguageContext.tsx               # MODIFY: add nav.legal translation keys
    pages/
      legal/                            # CREATE
        LegalIndex.tsx                  # /legal
        Immigration.tsx                 # /legal/immigration
  content/
    legal/
      immigration.json                  # CREATE: LLM-generated, human-reviewed
  lib/
    legal/
      types.ts                          # CREATE: LegalPageContent type
      content.ts                        # CREATE: typed loader + language picker

scripts/
  legal/
    fetch-api.mjs                       # CREATE: law.go.kr + easylaw.go.kr
    scrape-gov.mjs                      # CREATE: police / moj / spo
    generate.mjs                        # CREATE: raw → Claude → JSON
    _shared.mjs                         # CREATE: shared HTTP helpers
  verify-legal.mjs                      # CREATE: Playwright e2e

tests/
  scrape-gov.test.mjs                   # CREATE
  fetch-api.test.mjs                    # CREATE
  generate.test.mjs                     # CREATE

vitest.config.ts                        # CREATE
```

---

## Task 1: Scaffold routes, nav item, placeholder pages

**Files:**
- Modify: `src/app/context/LanguageContext.tsx`
- Modify: `src/app/components/Layout.tsx:26-31`
- Modify: `src/app/routes.tsx`
- Create: `src/app/pages/legal/LegalIndex.tsx`
- Create: `src/app/pages/legal/Immigration.tsx`

- [ ] **Step 1: Add translation keys**

Edit `src/app/context/LanguageContext.tsx`. Add to each of `ko`, `zh`, `en` objects (inside the `translations` literal):

```tsx
// inside ko:
'nav.legal': '법률정보',
'legal.index.title': '법률정보',
'legal.index.subtitle': '중국어권 의뢰인을 위한 주요 실무 가이드',
'legal.coming_soon': '준비 중',

// inside zh:
'nav.legal': '法律信息',
'legal.index.title': '法律信息',
'legal.index.subtitle': '面向中文客户的主要实务指南',
'legal.coming_soon': '准备中',

// inside en:
'nav.legal': 'Legal Info',
'legal.index.title': 'Legal Info',
'legal.index.subtitle': 'Practical guides for Chinese-speaking clients',
'legal.coming_soon': 'Coming soon',
```

- [ ] **Step 2: Add nav item in Layout.tsx**

Modify `navLinks` in `src/app/components/Layout.tsx` (around line 26):

```tsx
const navLinks = [
  { name: t("nav.home"), path: "/" },
  { name: t("nav.about"), path: "/about" },
  { name: t("nav.services"), path: "/services" },
  { name: t("nav.cases"), path: "/cases" },
  { name: t("nav.legal"), path: "/legal" },
];
```

- [ ] **Step 3: Create placeholder `LegalIndex.tsx`**

Create `src/app/pages/legal/LegalIndex.tsx`:

```tsx
import { Link } from "react-router";
import { SectionHeading } from "../../components/SectionHeading";
import { useLanguage } from "../../context/LanguageContext";

const TOPICS = [
  { slug: "immigration", title: "체류자격·출입국", titleZh: "居留资格·出入境", titleEn: "Visa & Immigration", active: true },
  { slug: "criminal", title: "형사 초기대응", titleZh: "刑事初步应对", titleEn: "Criminal Response", active: false },
  { slug: "labor", title: "노동·임금체불", titleZh: "劳动·欠薪", titleEn: "Labor & Unpaid Wages", active: false },
  { slug: "fraud", title: "사기·보이스피싱", titleZh: "诈骗·语音钓鱼", titleEn: "Fraud & Voice Phishing", active: false },
  { slug: "china-family", title: "중국 이혼·상속", titleZh: "中国离婚·继承", titleEn: "China Divorce & Inheritance", active: false },
];

export function LegalIndex() {
  const { t, language } = useLanguage();
  const pickTitle = (x: typeof TOPICS[number]) =>
    language === "zh" ? x.titleZh : language === "en" ? x.titleEn : x.title;

  return (
    <div className="bg-[#faf6ef] min-h-screen pt-24 pb-32">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title={t("legal.index.title")} subtitle={t("legal.index.subtitle")} centered />
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {TOPICS.map((x) => {
            const body = (
              <div className="group h-full bg-white border border-[#e9e3d2] p-8 transition-colors hover:border-[#b59a5d]">
                <div className="mb-6 font-display text-[10px] font-black tracking-[0.28em] uppercase text-[#b59a5d]">
                  {x.active ? "Available" : t("legal.coming_soon")}
                </div>
                <h3 className="text-2xl font-extrabold text-[#0f172a] tracking-tight mb-3">{pickTitle(x)}</h3>
              </div>
            );
            return x.active ? (
              <Link key={x.slug} to={`/legal/${x.slug}`}>{body}</Link>
            ) : (
              <div key={x.slug} className="opacity-50">{body}</div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
```

- [ ] **Step 4: Create placeholder `Immigration.tsx`**

Create `src/app/pages/legal/Immigration.tsx`:

```tsx
export function Immigration() {
  return (
    <div className="bg-[#faf6ef] min-h-screen pt-24 pb-32">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-black">체류자격·출입국</h1>
        <p className="mt-4 text-slate-600">콘텐츠 준비 중.</p>
      </div>
    </div>
  );
}
```

- [ ] **Step 5: Register routes**

Modify `src/app/routes.tsx`:

```tsx
import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Services } from "./pages/Services";
import { Cases } from "./pages/Cases";
import { LegalIndex } from "./pages/legal/LegalIndex";
import { Immigration } from "./pages/legal/Immigration";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      Component: Layout,
      children: [
        { index: true, Component: Home },
        { path: "about", Component: About },
        { path: "services", Component: Services },
        { path: "cases", Component: Cases },
        { path: "legal", Component: LegalIndex },
        { path: "legal/immigration", Component: Immigration },
      ],
    },
  ],
  { basename: import.meta.env.BASE_URL }
);
```

- [ ] **Step 6: Build and manually verify**

Run: `npm run build`
Expected: clean build, no TS errors.

Run: `npm run dev`, open `http://localhost:5173`, click "법률정보" → sees index → click 체류자격 card → lands on Immigration placeholder.

- [ ] **Step 7: Commit**

```bash
git add src/app/context/LanguageContext.tsx src/app/components/Layout.tsx src/app/routes.tsx src/app/pages/legal/
git commit -m "feat(legal): scaffold /legal index + /legal/immigration routes

Adds 법률정보 nav item (KO/ZH/EN), index page with 5 topic cards
(only immigration active), and placeholder Immigration page."
```

---

## Task 2: Content types and loader

**Files:**
- Create: `src/lib/legal/types.ts`
- Create: `src/lib/legal/content.ts`
- Create: `src/content/legal/immigration.json` (skeleton)

- [ ] **Step 1: Create types**

Create `src/lib/legal/types.ts`:

```ts
export type Lang = "ko" | "zh" | "en";

export type Localized<T> = Record<Lang, T>;

export interface SourceRef {
  agency: string;            // "법제처", "경찰청" ...
  title: string;             // page title at source
  url: string;               // canonical URL
  fetchedAt: string;         // ISO 8601
  kogl: "type-1";            // KOGL license type
}

export interface VisaNode {
  code: string;              // "F-4", "H-2", ...
  label: Localized<string>;  // short label rendered in diagram node
  target: Localized<string>; // who this visa is for
  period: Localized<string>; // validity period
  requirements: Localized<string[]>; // checkboxes in slide-over
}

export interface DecisionNode {
  id: string;
  question: Localized<string>;
  yes: { nextId: string } | { leafAnchor: string };
  no:  { nextId: string } | { leafAnchor: string };
}

export interface ProcedureStep {
  id: string;
  label: Localized<string>;
  agency: Localized<string>;
  duration: Localized<string>; // "14 days"
  lawRef?: string;             // "출입국관리법 §46"
  note: Localized<string>;
}

export interface AgencyNode {
  id: string;
  name: Localized<string>;
  role: Localized<string>;
  phone: string;
  address: Localized<string>;
  url: string;
}

export interface DeadlineEvent {
  day: number;               // days from reference event
  title: Localized<string>;
  detail: Localized<string>;
}

export interface LawArticle {
  ref: string;               // "출입국관리법 §46 ①"
  text: Localized<string>;   // article text — ZH/EN via Claude translation
  revisedAt: string;         // "2024-03-01"
  sourceUrl: string;
}

export interface LegalPageContent {
  slug: "immigration";
  title: Localized<string>;
  summary: Localized<string>;             // one-sentence, ≤ 40 chars KO
  meta: {
    generatedAt: string;                   // ISO
    sourceCount: number;
    lastRevisionAt: string;                // oldest revision in law list
  };
  visas: VisaNode[];                      // Diagram 1
  decisionTree: {
    rootId: string;
    nodes: DecisionNode[];
  };                                      // Diagram 2
  procedure: ProcedureStep[];             // Diagram 3 (linear for MVP)
  agencies: AgencyNode[];                 // Diagram 4
  deadlines: DeadlineEvent[];             // Diagram 5
  laws: LawArticle[];
  sources: SourceRef[];
  disclaimer: Localized<string>;
}
```

- [ ] **Step 2: Create loader**

Create `src/lib/legal/content.ts`:

```ts
import type { LegalPageContent, Lang, Localized } from "./types";
import immigration from "../../content/legal/immigration.json";

const REGISTRY: Record<"immigration", LegalPageContent> = {
  immigration: immigration as unknown as LegalPageContent,
};

export function getLegalContent(slug: keyof typeof REGISTRY): LegalPageContent {
  return REGISTRY[slug];
}

export function pick<T>(value: Localized<T>, lang: Lang): T {
  return value[lang] ?? value.ko;
}
```

- [ ] **Step 3: Create skeleton JSON**

Create `src/content/legal/immigration.json`:

```json
{
  "slug": "immigration",
  "title": { "ko": "체류자격·출입국", "zh": "居留资格·出入境", "en": "Visa & Immigration" },
  "summary": {
    "ko": "체류자격 선택과 연장·변경·이의 절차를 한눈에.",
    "zh": "一览居留资格选择与延期、变更、异议程序。",
    "en": "Visa selection, renewal, change, and appeal in one view."
  },
  "meta": { "generatedAt": "", "sourceCount": 0, "lastRevisionAt": "" },
  "visas": [],
  "decisionTree": { "rootId": "", "nodes": [] },
  "procedure": [],
  "agencies": [],
  "deadlines": [],
  "laws": [],
  "sources": [],
  "disclaimer": {
    "ko": "본 페이지는 공공 법령 데이터를 기반으로 작성된 정보 안내이며, 개별 사건에 대한 법률 자문이 아닙니다. 구체적인 사안은 변호사와 상담하시기 바랍니다.",
    "zh": "本页面基于公开法律数据编写，仅为信息参考，不构成对个案的法律建议。具体事项请咨询律师。",
    "en": "This page provides information based on public legal data and does not constitute legal advice for any specific matter. Please consult an attorney for your individual case."
  }
}
```

- [ ] **Step 4: Enable JSON imports in tsconfig**

Check `tsconfig.json`. If `resolveJsonModule` is not true, set it:

```json
"compilerOptions": {
  "resolveJsonModule": true,
  ...
}
```

- [ ] **Step 5: Build**

Run: `npm run build`
Expected: clean build.

- [ ] **Step 6: Commit**

```bash
git add src/lib/legal src/content/legal tsconfig.json
git commit -m "feat(legal): add LegalPageContent types and JSON loader

Defines the Localized<T> shape for KO/ZH/EN content and a typed
loader. Skeleton immigration.json will be populated by the
generator script in later tasks."
```

---

## Task 3: Test + scraping dependencies

**Files:**
- Modify: `package.json`
- Create: `vitest.config.ts`

- [ ] **Step 1: Install deps**

Run (from project root):

```bash
npm install --save-dev vitest @vitest/ui cheerio undici @anthropic-ai/sdk
```

- [ ] **Step 2: Add test script**

Modify `package.json` scripts:

```json
"scripts": {
  "build": "vite build",
  "dev": "vite",
  "test": "vitest run",
  "test:watch": "vitest"
}
```

- [ ] **Step 3: Create vitest config**

Create `vitest.config.ts`:

```ts
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    include: ["tests/**/*.test.mjs"],
    environment: "node",
  },
});
```

- [ ] **Step 4: Smoke-test vitest**

Create a throwaway `tests/smoke.test.mjs`:

```js
import { test, expect } from "vitest";
test("vitest works", () => expect(1 + 1).toBe(2));
```

Run: `npm test`
Expected: 1 passed.

Delete the smoke file:

```bash
rm tests/smoke.test.mjs
```

- [ ] **Step 5: Commit**

```bash
git add package.json package-lock.json vitest.config.ts
git commit -m "chore(legal): add vitest + cheerio + undici + anthropic SDK"
```

---

## Task 4: Shared HTTP helper (TDD)

**Files:**
- Create: `scripts/legal/_shared.mjs`
- Create: `tests/shared.test.mjs`

- [ ] **Step 1: Write failing test**

Create `tests/shared.test.mjs`:

```js
import { test, expect, describe } from "vitest";
import { textFromHtml, buildUrl } from "../scripts/legal/_shared.mjs";

describe("textFromHtml", () => {
  test("extracts visible text and collapses whitespace", () => {
    const html = `<div><h1>Title</h1>  <p>Body\n\n  with    spaces.</p>
      <script>var x=1;</script></div>`;
    const result = textFromHtml(html, "div");
    expect(result).toBe("Title Body with spaces.");
  });

  test("returns empty string when selector missing", () => {
    expect(textFromHtml("<div>x</div>", ".nope")).toBe("");
  });
});

describe("buildUrl", () => {
  test("resolves relative paths", () => {
    expect(buildUrl("https://a.go.kr/p/", "../x")).toBe("https://a.go.kr/x");
  });
});
```

- [ ] **Step 2: Run — expect FAIL**

Run: `npm test`
Expected: FAIL (file does not exist).

- [ ] **Step 3: Implement**

Create `scripts/legal/_shared.mjs`:

```js
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
```

- [ ] **Step 4: Run — expect PASS**

Run: `npm test`
Expected: 3 passed.

- [ ] **Step 5: Commit**

```bash
git add scripts/legal/_shared.mjs tests/shared.test.mjs
git commit -m "feat(legal/pipeline): add shared HTTP/HTML helpers with tests"
```

---

## Task 5: Scrape .go.kr procedural pages (TDD)

**Goal:** Pull procedural text from `easylaw.go.kr` + `police.go.kr` + `moj.go.kr` + `spo.go.kr` for the immigration topic. Output `raw/scrape-*.json`.

**Files:**
- Create: `scripts/legal/scrape-gov.mjs`
- Create: `tests/scrape-gov.test.mjs`

- [ ] **Step 1: Write failing test for the pure extractor**

Create `tests/scrape-gov.test.mjs`:

```js
import { test, expect, describe } from "vitest";
import { extractProcedural } from "../scripts/legal/scrape-gov.mjs";

describe("extractProcedural", () => {
  test("picks main content and strips scripts/nav", () => {
    const html = `
      <html><body>
        <nav>ignore</nav>
        <main>
          <h2>신청 절차</h2>
          <p>서류 준비 후 관할 출입국·외국인청 방문.</p>
          <script>track();</script>
        </main>
        <footer>ignore</footer>
      </body></html>`;
    const r = extractProcedural(html, "https://example.go.kr/p");
    expect(r.url).toBe("https://example.go.kr/p");
    expect(r.text).toContain("신청 절차");
    expect(r.text).toContain("서류 준비");
    expect(r.text).not.toContain("track");
    expect(r.text).not.toContain("ignore");
  });

  test("returns empty text when no main content", () => {
    const r = extractProcedural("<html><body></body></html>", "https://x.go.kr/p");
    expect(r.text).toBe("");
  });
});
```

- [ ] **Step 2: Run — expect FAIL**

Run: `npm test -- scrape-gov`
Expected: FAIL.

- [ ] **Step 3: Implement scraper**

Create `scripts/legal/scrape-gov.mjs`:

```js
import { writeFile, mkdir } from "node:fs/promises";
import { dirname } from "node:path";
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
    if (node.length && node.text().trim().length > 50) {
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
if (import.meta.url === `file://${process.argv[1].replaceAll("\\", "/")}` || process.argv[1].endsWith("scrape-gov.mjs")) {
  await main();
}
```

- [ ] **Step 4: Run unit tests — expect PASS**

Run: `npm test -- scrape-gov`
Expected: 2 passed.

- [ ] **Step 5: Run the real scraper once**

Run: `node scripts/legal/scrape-gov.mjs`
Expected: stdout `Scraped N/4...` with N ≥ 1. `raw/legal/scrape-gov.json` exists with non-empty `text` fields.

If ALL four fail, stop and inspect `raw/legal/scrape-errors.json` before moving on. Likely causes: DNS, 403 (adjust User-Agent), or 서버 점검. Do NOT commit an empty or error-only raw file.

- [ ] **Step 6: Commit (raw output NOT committed)**

Add `raw/` to `.gitignore`:

```bash
echo "raw/" >> .gitignore
```

Commit the scraper only:

```bash
git add scripts/legal/scrape-gov.mjs tests/scrape-gov.test.mjs .gitignore
git commit -m "feat(legal/pipeline): scrape .go.kr procedural pages with KOGL-1 fields"
```

---

## Task 6: Fetch law.go.kr + easylaw.go.kr via web (TDD)

**Goal:** Pull relevant 출입국관리법 article text from `law.go.kr` (public web, no API key) and related easylaw topic. Output `raw/legal/fetch-api.json`.

*Note: `law.go.kr` official Open API requires OC registration. For MVP we scrape the public law text page, which is 공공누리 type-1.*

**Files:**
- Create: `scripts/legal/fetch-api.mjs`
- Create: `tests/fetch-api.test.mjs`

- [ ] **Step 1: Write failing test for article parser**

Create `tests/fetch-api.test.mjs`:

```js
import { test, expect, describe } from "vitest";
import { parseLawPage } from "../scripts/legal/fetch-api.mjs";

describe("parseLawPage", () => {
  test("extracts article number and body", () => {
    const html = `
      <html><body>
        <div class="law-title">출입국관리법</div>
        <div class="article" id="46">
          <span class="art-no">제46조</span>
          <span class="art-body">① 지방출입국·외국인관서의 장은 ...</span>
        </div>
        <div class="revision">시행 2024. 3. 1.</div>
      </body></html>`;
    const r = parseLawPage(html);
    expect(r.title).toBe("출입국관리법");
    expect(r.revisedAt).toBe("2024-03-01");
    expect(r.articles.length).toBeGreaterThan(0);
    expect(r.articles[0].ref).toContain("제46조");
    expect(r.articles[0].text).toContain("지방출입국");
  });
});
```

- [ ] **Step 2: Run — expect FAIL**

Run: `npm test -- fetch-api`

- [ ] **Step 3: Implement**

Create `scripts/legal/fetch-api.mjs`:

```js
import { writeFile, mkdir } from "node:fs/promises";
import { load } from "cheerio";
import { fetchHtml } from "./_shared.mjs";

/** Curated article targets for the immigration topic.
 *  Use law.go.kr "법령 링크" pages (no OC key required). */
const LAW_TARGETS = [
  { title: "출입국관리법", url: "https://www.law.go.kr/법령/출입국관리법" },
  { title: "출입국관리법 시행령", url: "https://www.law.go.kr/법령/출입국관리법시행령" },
];

const EASYLAW_TARGETS = [
  { title: "외국인근로자 체류자격", url: "https://www.easylaw.go.kr/CSP/CnpClsMain.laf?csmSeq=2042&ccfNo=1&cciNo=1&cnpClsNo=1" },
];

export function parseLawPage(html) {
  const $ = load(html);
  const title = $(".law-title, .lawTitle, h1").first().text().trim();
  const revisionText = $(".revision, .시행일, .lawRev").first().text();
  const m = revisionText.match(/(\d{4})[.\s]*(\d{1,2})[.\s]*(\d{1,2})/);
  const revisedAt = m ? `${m[1]}-${m[2].padStart(2, "0")}-${m[3].padStart(2, "0")}` : "";
  const articles = [];
  $(".article, [id^='art']").each((_, el) => {
    const $el = $(el);
    const no = $el.find(".art-no, .articleNo").first().text().trim();
    const body = $el.find(".art-body, .articleBody").first().text().trim();
    if (no && body) articles.push({ ref: `${title} ${no}`.trim(), text: body });
  });
  return { title, revisedAt, articles };
}

async function safeFetch(url) {
  try {
    return await fetchHtml(url);
  } catch (e) {
    return null;
  }
}

async function main() {
  const laws = [];
  for (const t of LAW_TARGETS) {
    const html = await safeFetch(t.url);
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
  console.log(`Laws: ${laws.length}, Easylaw: ${easylaw.length}`);
}

if (process.argv[1]?.endsWith("fetch-api.mjs")) {
  await main();
}
```

- [ ] **Step 4: Run tests — expect PASS**

Run: `npm test -- fetch-api`

- [ ] **Step 5: Run the real fetcher**

Run: `node scripts/legal/fetch-api.mjs`
Expected: `raw/legal/fetch-api.json` contains at least one law with articles.

If `articles` array is empty, `law.go.kr` may use different selectors. Inspect HTML via browser DevTools and update the selectors in `parseLawPage` (`.article`, `.art-no`, `.art-body` are reasonable guesses; adjust after seeing actual DOM). Do not move on until at least one article is parsed.

- [ ] **Step 6: Commit**

```bash
git add scripts/legal/fetch-api.mjs tests/fetch-api.test.mjs
git commit -m "feat(legal/pipeline): fetch law.go.kr + easylaw.go.kr pages"
```

---

## Task 7: Claude generator script

**Goal:** Take combined raw data → produce structured `LegalPageContent` JSON in 3 languages via Claude Opus. Output to stdout (user pipes into `src/content/legal/immigration.json`).

**Files:**
- Create: `scripts/legal/generate.mjs`
- Create: `tests/generate.test.mjs`

- [ ] **Step 1: Write failing test for prompt builder**

Create `tests/generate.test.mjs`:

```js
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
```

- [ ] **Step 2: Run — expect FAIL**

Run: `npm test -- generate`

- [ ] **Step 3: Implement generator**

Create `scripts/legal/generate.mjs`:

```js
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
6. Mark sources[].kogl as "type-1".
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
```

- [ ] **Step 4: Run unit tests — expect PASS**

Run: `npm test -- generate`

- [ ] **Step 5: Commit (don't run generator yet — depends on Tasks 5, 6 having real raw output)**

```bash
git add scripts/legal/generate.mjs tests/generate.test.mjs
git commit -m "feat(legal/pipeline): Claude generator with prompt + output validator"
```

---

## Task 8: Generate and review content

**Goal:** Run the full pipeline end-to-end, produce `immigration.json`, review by hand.

**Prerequisites:** `ANTHROPIC_API_KEY` exported in shell.

- [ ] **Step 1: Run full pipeline**

```bash
node scripts/legal/scrape-gov.mjs
node scripts/legal/fetch-api.mjs
node scripts/legal/generate.mjs
```

Expected: `src/content/legal/immigration.draft.json` appears with populated arrays.

- [ ] **Step 2: Manual review checklist** (DO NOT commit yet)

Open `immigration.draft.json` in editor and verify:

- [ ] `visas[]` lists real visa codes (F-4, H-2, etc.), not placeholder strings
- [ ] `procedure[]` has 4-6 real steps with `lawRef` values matching actual statute references
- [ ] `agencies[]` phone numbers match what's on `police.go.kr` / `hikorea.go.kr` (cross-check at least one by visiting the source URL)
- [ ] `laws[].text.ko` matches article text on `law.go.kr` (no paraphrase)
- [ ] `laws[].text.zh` and `.en` are actual translations, not copies of `.ko`
- [ ] `sources[]` includes ≥1 entry per scrape/fetch source, all with `kogl: "type-1"`
- [ ] `summary.ko` ≤ 40 characters
- [ ] No emoji anywhere
- [ ] No "3 Things to Know" / "핵심 포인트" / "重点提示" boilerplate

Fix any issues by editing the JSON directly. Re-run generator if major regeneration needed.

- [ ] **Step 3: Promote draft to final**

When satisfied:

```bash
mv src/content/legal/immigration.draft.json src/content/legal/immigration.json
```

- [ ] **Step 4: Build-check**

Run: `npm run build`
Expected: clean build (TypeScript validates JSON shape against `LegalPageContent`).

If TS errors: fix JSON shape (usually a Localized field missing a language).

- [ ] **Step 5: Commit**

```bash
git add src/content/legal/immigration.json
git commit -m "content(legal): populate immigration page content (KO/ZH/EN)

Generated from law.go.kr, easylaw.go.kr, moj.go.kr, police.go.kr,
spo.go.kr under KOGL type-1. Reviewed for accuracy, phone numbers
cross-verified against source sites."
```

---

## Task 9: DiagramShell wrapper + first diagram (VisaMap)

**Goal:** Build the common shell (aria-label + "text version" toggle) plus the VISA MAP diagram. This establishes the pattern later diagrams copy.

**Files:**
- Create: `src/app/components/legal/DiagramShell.tsx`
- Create: `src/app/components/legal/VisaMapDiagram.tsx`

- [ ] **Step 1: DiagramShell**

Create `src/app/components/legal/DiagramShell.tsx`:

```tsx
import { ReactNode, useState } from "react";

interface Props {
  id: string;
  title: string;         // already-localized title
  ariaSummary: string;   // screen-reader summary
  textFallback: ReactNode;
  children: ReactNode;
  eyebrow?: string;      // e.g. "Diagram 01"
}

export function DiagramShell({ id, title, ariaSummary, textFallback, children, eyebrow }: Props) {
  const [textMode, setTextMode] = useState(false);
  return (
    <section id={id} aria-label={ariaSummary} className="relative py-20 lg:py-28 border-t border-[#e9e3d2]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <header className="flex items-baseline justify-between mb-10">
          <div>
            {eyebrow && (
              <p className="font-display text-[10px] font-black tracking-[0.3em] uppercase text-[#b59a5d] mb-2">
                {eyebrow}
              </p>
            )}
            <h2 className="text-3xl lg:text-4xl font-black text-[#0f172a] tracking-tight">{title}</h2>
          </div>
          <button
            type="button"
            onClick={() => setTextMode((x) => !x)}
            className="text-xs font-bold uppercase tracking-widest text-[#6b5f48] hover:text-[#0f172a] transition-colors border-b border-[#6b5f48] pb-1"
            aria-pressed={textMode}
          >
            {textMode ? "Show diagram" : "Text version"}
          </button>
        </header>
        {textMode ? (
          <div className="prose prose-slate max-w-none">{textFallback}</div>
        ) : (
          children
        )}
      </div>
    </section>
  );
}
```

- [ ] **Step 2: VisaMapDiagram**

Create `src/app/components/legal/VisaMapDiagram.tsx`:

```tsx
import { useState } from "react";
import type { VisaNode, Lang } from "../../../lib/legal/types";
import { pick } from "../../../lib/legal/content";
import { DiagramShell } from "./DiagramShell";

interface Props {
  visas: VisaNode[];
  lang: Lang;
  title: string;      // localized ("체류자격 맵" / "居留资格地图" / "Visa Map")
  ariaSummary: string;
}

export function VisaMapDiagram({ visas, lang, title, ariaSummary }: Props) {
  const [open, setOpen] = useState<VisaNode | null>(null);

  const fallback = (
    <ul className="space-y-4">
      {visas.map((v) => (
        <li key={v.code}>
          <strong>{v.code}</strong> — {pick(v.label, lang)}; 대상: {pick(v.target, lang)}; 유효기간: {pick(v.period, lang)}
        </li>
      ))}
    </ul>
  );

  return (
    <DiagramShell id="diagram-visas" eyebrow="Diagram 01" title={title} ariaSummary={ariaSummary} textFallback={fallback}>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
        {visas.map((v) => (
          <button
            key={v.code}
            type="button"
            onClick={() => setOpen(v)}
            className="group relative aspect-square border border-[#e9e3d2] bg-white p-5 text-left hover:border-[#b59a5d] transition-colors"
            aria-label={`${v.code} — ${pick(v.label, lang)}`}
          >
            <span className="absolute top-3 left-3 font-display text-[9px] font-black tracking-[0.24em] uppercase text-[#b59a5d]">
              Visa
            </span>
            <div className="absolute bottom-5 left-5 right-5">
              <div className="font-display text-3xl lg:text-4xl font-black text-[#0f172a] leading-none">{v.code}</div>
              <div className="mt-3 text-[12px] text-[#6b5f48] font-semibold line-clamp-2">{pick(v.label, lang)}</div>
            </div>
          </button>
        ))}
      </div>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={open.code}
          className="fixed inset-0 z-50 flex justify-end bg-black/50"
          onClick={() => setOpen(null)}
        >
          <div
            className="w-[min(92vw,420px)] h-full bg-[#faf6ef] p-8 overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between mb-6">
              <div>
                <div className="font-display text-[10px] font-black tracking-[0.3em] uppercase text-[#b59a5d]">Visa</div>
                <div className="mt-1 font-display text-4xl font-black text-[#0f172a]">{open.code}</div>
              </div>
              <button type="button" onClick={() => setOpen(null)} className="text-xs font-bold uppercase">닫기 / Close</button>
            </div>
            <div className="space-y-5">
              <div>
                <div className="text-[10px] font-black tracking-[0.28em] uppercase text-[#b59a5d] mb-1">대상 · Target</div>
                <p className="text-[15px] text-[#0f172a] font-medium leading-relaxed">{pick(open.target, lang)}</p>
              </div>
              <div>
                <div className="text-[10px] font-black tracking-[0.28em] uppercase text-[#b59a5d] mb-1">유효기간 · Period</div>
                <p className="text-[15px] text-[#0f172a] font-medium leading-relaxed">{pick(open.period, lang)}</p>
              </div>
              <div>
                <div className="text-[10px] font-black tracking-[0.28em] uppercase text-[#b59a5d] mb-1">요건 · Requirements</div>
                <ul className="space-y-2">
                  {pick(open.requirements, lang).map((r, i) => (
                    <li key={i} className="flex gap-3 text-[14px] text-[#0f172a]">
                      <span className="text-[#b59a5d]">•</span>
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </DiagramShell>
  );
}
```

- [ ] **Step 3: Wire into Immigration page temporarily for visual check**

Modify `src/app/pages/legal/Immigration.tsx`:

```tsx
import { useLanguage } from "../../context/LanguageContext";
import { getLegalContent, pick } from "../../../lib/legal/content";
import { VisaMapDiagram } from "../../components/legal/VisaMapDiagram";

export function Immigration() {
  const { language } = useLanguage();
  const c = getLegalContent("immigration");
  return (
    <div className="bg-[#faf6ef] min-h-screen">
      <VisaMapDiagram
        visas={c.visas}
        lang={language}
        title={pick(c.title, language)}
        ariaSummary="체류자격 비자 유형 5가지를 한눈에 보여주는 다이어그램"
      />
    </div>
  );
}
```

- [ ] **Step 4: Manual browser check**

Run: `npm run dev`. Navigate to `/legal/immigration`. Click a visa card → slide-over panel opens. Toggle "Text version" → list view. Toggle EN/ZH → labels switch.

- [ ] **Step 5: Commit**

```bash
git add src/app/components/legal/DiagramShell.tsx src/app/components/legal/VisaMapDiagram.tsx src/app/pages/legal/Immigration.tsx
git commit -m "feat(legal): DiagramShell + VisaMapDiagram (first of 5)"
```

---

## Task 10: DecisionTreeDiagram

**Files:**
- Create: `src/app/components/legal/DecisionTreeDiagram.tsx`

- [ ] **Step 1: Implement**

Create `src/app/components/legal/DecisionTreeDiagram.tsx`:

```tsx
import { useMemo, useState } from "react";
import type { DecisionNode, Lang, Localized } from "../../../lib/legal/types";
import { pick } from "../../../lib/legal/content";
import { DiagramShell } from "./DiagramShell";

interface Props {
  rootId: string;
  nodes: DecisionNode[];
  lang: Lang;
  title: string;
  ariaSummary: string;
}

function byId(nodes: DecisionNode[]) {
  const m = new Map<string, DecisionNode>();
  for (const n of nodes) m.set(n.id, n);
  return m;
}

export function DecisionTreeDiagram({ rootId, nodes, lang, title, ariaSummary }: Props) {
  const map = useMemo(() => byId(nodes), [nodes]);
  const [path, setPath] = useState<string[]>([rootId]);
  const [leaf, setLeaf] = useState<string | null>(null);

  const currentId = path[path.length - 1];
  const current = map.get(currentId);

  const answer = (choice: "yes" | "no") => {
    if (!current) return;
    const target = current[choice];
    if ("leafAnchor" in target) {
      setLeaf(target.leafAnchor);
    } else if ("nextId" in target) {
      setPath((p) => [...p, target.nextId]);
    }
  };

  const reset = () => {
    setPath([rootId]);
    setLeaf(null);
  };

  const fallback = (
    <ol className="space-y-3 list-decimal list-inside">
      {nodes.map((n) => (
        <li key={n.id}>
          <strong>{n.id}</strong>: {pick(n.question, lang)}
        </li>
      ))}
    </ol>
  );

  return (
    <DiagramShell id="diagram-decision" eyebrow="Diagram 02" title={title} ariaSummary={ariaSummary} textFallback={fallback}>
      <div className="max-w-[720px] mx-auto">
        {leaf ? (
          <div className="border border-[#b59a5d] bg-white p-10 text-center">
            <p className="font-display text-[11px] font-black tracking-[0.28em] uppercase text-[#b59a5d] mb-4">Result</p>
            <p className="text-xl font-bold text-[#0f172a]">
              다음 섹션으로 이동하세요: <a href={`#${leaf}`} className="underline decoration-[#b59a5d] underline-offset-4">#{leaf}</a>
            </p>
            <button type="button" onClick={reset} className="mt-8 text-xs font-bold uppercase tracking-widest text-[#6b5f48] border-b border-[#6b5f48] pb-1">
              Restart
            </button>
          </div>
        ) : current ? (
          <div className="border border-[#e9e3d2] bg-white p-10">
            <p className="font-display text-[11px] font-black tracking-[0.28em] uppercase text-[#b59a5d] mb-4">
              Step {path.length}
            </p>
            <p className="text-2xl font-bold text-[#0f172a] leading-snug mb-8">{pick(current.question, lang)}</p>
            <div className="flex gap-3">
              <button type="button" onClick={() => answer("yes")} className="flex-1 bg-[#0f172a] text-white py-4 font-bold tracking-wide hover:bg-[#1e293b]">
                예 / Yes
              </button>
              <button type="button" onClick={() => answer("no")} className="flex-1 border border-[#0f172a] text-[#0f172a] py-4 font-bold tracking-wide hover:bg-[#0f172a] hover:text-white">
                아니오 / No
              </button>
            </div>
            {path.length > 1 && (
              <button type="button" onClick={reset} className="mt-6 text-xs font-bold uppercase tracking-widest text-[#6b5f48]">
                ← Restart
              </button>
            )}
          </div>
        ) : (
          <div className="text-center text-slate-500">No decision tree data.</div>
        )}
      </div>
    </DiagramShell>
  );
}
```

- [ ] **Step 2: Wire into Immigration page**

Add to `src/app/pages/legal/Immigration.tsx`:

```tsx
import { DecisionTreeDiagram } from "../../components/legal/DecisionTreeDiagram";

// inside the JSX, after VisaMapDiagram:
<DecisionTreeDiagram
  rootId={c.decisionTree.rootId}
  nodes={c.decisionTree.nodes}
  lang={language}
  title="내 상황에 맞는 절차"
  ariaSummary="질문에 Yes/No로 답하며 필요한 절차를 찾는 의사결정 트리"
/>
```

- [ ] **Step 3: Manual browser check**

Run: `npm run dev`. Answer Yes/No flow, reaches leaf, Restart works, anchor jumps exist.

- [ ] **Step 4: Commit**

```bash
git add src/app/components/legal/DecisionTreeDiagram.tsx src/app/pages/legal/Immigration.tsx
git commit -m "feat(legal): DecisionTreeDiagram with step-by-step Yes/No flow"
```

---

## Task 11: ProcedureFlowDiagram

**Files:**
- Create: `src/app/components/legal/ProcedureFlowDiagram.tsx`

- [ ] **Step 1: Implement**

Create `src/app/components/legal/ProcedureFlowDiagram.tsx`:

```tsx
import { useState } from "react";
import type { ProcedureStep, Lang } from "../../../lib/legal/types";
import { pick } from "../../../lib/legal/content";
import { DiagramShell } from "./DiagramShell";

interface Props {
  steps: ProcedureStep[];
  lang: Lang;
  title: string;
  ariaSummary: string;
}

export function ProcedureFlowDiagram({ steps, lang, title, ariaSummary }: Props) {
  const [active, setActive] = useState(0);

  const fallback = (
    <ol className="space-y-6 list-decimal list-inside">
      {steps.map((s) => (
        <li key={s.id}>
          <strong>{pick(s.label, lang)}</strong> — {pick(s.agency, lang)}, {pick(s.duration, lang)}
          {s.lawRef && <span className="ml-2 text-[#6b5f48]">[{s.lawRef}]</span>}
          <p className="ml-6 mt-1 text-[#0f172a]">{pick(s.note, lang)}</p>
        </li>
      ))}
    </ol>
  );

  return (
    <DiagramShell id="diagram-procedure" eyebrow="Diagram 03" title={title} ariaSummary={ariaSummary} textFallback={fallback}>
      {/* Rail */}
      <div className="relative overflow-x-auto">
        <div className="flex gap-0 min-w-max">
          {steps.map((s, i) => {
            const isActive = i === active;
            return (
              <button
                key={s.id}
                type="button"
                onClick={() => setActive(i)}
                className={`relative w-[200px] shrink-0 px-6 py-5 text-left border-t-2 transition-colors ${
                  isActive ? "border-[#b59a5d] bg-white" : "border-[#e9e3d2] bg-transparent hover:border-[#b59a5d]/60"
                }`}
              >
                <div className="font-display text-[10px] font-black tracking-[0.3em] uppercase text-[#b59a5d] mb-2">
                  Step {String(i + 1).padStart(2, "0")}
                </div>
                <div className={`text-base font-bold ${isActive ? "text-[#0f172a]" : "text-[#6b5f48]"}`}>
                  {pick(s.label, lang)}
                </div>
              </button>
            );
          })}
        </div>
      </div>
      {/* Detail panel */}
      {steps[active] && (
        <div className="mt-8 grid md:grid-cols-3 gap-6 bg-white border border-[#e9e3d2] p-8">
          <div>
            <div className="font-display text-[10px] font-black tracking-[0.28em] uppercase text-[#b59a5d] mb-1">Agency</div>
            <p className="text-[15px] font-semibold text-[#0f172a]">{pick(steps[active].agency, lang)}</p>
          </div>
          <div>
            <div className="font-display text-[10px] font-black tracking-[0.28em] uppercase text-[#b59a5d] mb-1">Duration</div>
            <p className="text-[15px] font-semibold text-[#0f172a]">{pick(steps[active].duration, lang)}</p>
          </div>
          <div>
            <div className="font-display text-[10px] font-black tracking-[0.28em] uppercase text-[#b59a5d] mb-1">Law</div>
            <p className="text-[15px] font-semibold text-[#0f172a] font-mono">{steps[active].lawRef || "—"}</p>
          </div>
          <p className="md:col-span-3 text-[15px] text-[#0f172a] leading-relaxed border-t border-[#e9e3d2] pt-5">
            {pick(steps[active].note, lang)}
          </p>
        </div>
      )}
    </DiagramShell>
  );
}
```

- [ ] **Step 2: Wire into Immigration page**

Add:

```tsx
import { ProcedureFlowDiagram } from "../../components/legal/ProcedureFlowDiagram";

<ProcedureFlowDiagram
  steps={c.procedure}
  lang={language}
  title="절차 플로우"
  ariaSummary="체류자격 절차의 4~6단계와 각 단계별 담당기관·소요일·관련 조문"
/>
```

- [ ] **Step 3: Manual check + commit**

Run: `npm run dev`. Tap each step, detail panel updates. Horizontal scroll works on mobile.

```bash
git add src/app/components/legal/ProcedureFlowDiagram.tsx src/app/pages/legal/Immigration.tsx
git commit -m "feat(legal): ProcedureFlowDiagram with step detail panel"
```

---

## Task 12: AgencyNetworkDiagram

**Files:**
- Create: `src/app/components/legal/AgencyNetworkDiagram.tsx`

- [ ] **Step 1: Implement**

Create `src/app/components/legal/AgencyNetworkDiagram.tsx`:

```tsx
import type { AgencyNode, Lang } from "../../../lib/legal/types";
import { pick } from "../../../lib/legal/content";
import { DiagramShell } from "./DiagramShell";

interface Props {
  agencies: AgencyNode[];
  lang: Lang;
  title: string;
  ariaSummary: string;
}

export function AgencyNetworkDiagram({ agencies, lang, title, ariaSummary }: Props) {
  const fallback = (
    <ul className="space-y-4">
      {agencies.map((a) => (
        <li key={a.id}>
          <strong>{pick(a.name, lang)}</strong> — {pick(a.role, lang)} · {a.phone} · <a href={a.url}>{a.url}</a>
        </li>
      ))}
    </ul>
  );

  // Hub-spoke: center node = 의뢰인; radial arms = each agency.
  // Implemented as CSS grid rather than SVG absolute positioning for responsive behavior.
  return (
    <DiagramShell id="diagram-agencies" eyebrow="Diagram 04" title={title} ariaSummary={ariaSummary} textFallback={fallback}>
      <div className="relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {/* left column: first two */}
          <div className="space-y-4 md:pt-12">
            {agencies.slice(0, 2).map((a) => <Card key={a.id} agency={a} lang={lang} side="left" />)}
          </div>
          {/* center hub */}
          <div className="flex items-center justify-center py-10 md:py-0">
            <div className="relative w-48 h-48 rounded-full border-2 border-[#b59a5d] bg-[#0f172a] flex items-center justify-center">
              <span className="font-display text-white text-[11px] font-black tracking-[0.32em] uppercase">Client</span>
              <span aria-hidden className="absolute inset-0 border-2 border-[#b59a5d]/30 rounded-full scale-125" />
            </div>
          </div>
          {/* right column: remaining */}
          <div className="space-y-4 md:pt-12">
            {agencies.slice(2).map((a) => <Card key={a.id} agency={a} lang={lang} side="right" />)}
          </div>
        </div>
      </div>
    </DiagramShell>
  );
}

function Card({ agency, lang, side }: { agency: AgencyNode; lang: Lang; side: "left" | "right" }) {
  return (
    <div className={`relative bg-white border border-[#e9e3d2] p-5 ${side === "left" ? "md:border-r-4 md:border-r-[#b59a5d]" : "md:border-l-4 md:border-l-[#b59a5d]"}`}>
      <div className="font-display text-[10px] font-black tracking-[0.28em] uppercase text-[#b59a5d] mb-2">Agency</div>
      <div className="text-lg font-extrabold text-[#0f172a] tracking-tight mb-1">{pick(agency.name, lang)}</div>
      <p className="text-[13px] text-[#6b5f48] mb-3 leading-relaxed">{pick(agency.role, lang)}</p>
      <div className="text-xs space-y-1">
        <a href={`tel:${agency.phone}`} className="block font-mono text-[#0f172a] hover:text-[#b59a5d]">☎ {agency.phone}</a>
        <a href={agency.url} target="_blank" rel="noreferrer" className="block text-[#6b5f48] hover:text-[#b59a5d] underline underline-offset-4">
          {new URL(agency.url).hostname}
        </a>
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Wire + manual check + commit**

```tsx
// in Immigration.tsx
import { AgencyNetworkDiagram } from "../../components/legal/AgencyNetworkDiagram";

<AgencyNetworkDiagram
  agencies={c.agencies}
  lang={language}
  title="기관 네트워크"
  ariaSummary="의뢰인을 중심으로 관련 기관들의 역할과 연락처를 보여주는 네트워크 다이어그램"
/>
```

Run `npm run dev` → verify. Commit:

```bash
git add src/app/components/legal/AgencyNetworkDiagram.tsx src/app/pages/legal/Immigration.tsx
git commit -m "feat(legal): AgencyNetworkDiagram hub-and-spoke layout"
```

---

## Task 13: DeadlineTimeline

**Files:**
- Create: `src/app/components/legal/DeadlineTimeline.tsx`

- [ ] **Step 1: Implement**

Create `src/app/components/legal/DeadlineTimeline.tsx`:

```tsx
import type { DeadlineEvent, Lang } from "../../../lib/legal/types";
import { pick } from "../../../lib/legal/content";
import { DiagramShell } from "./DiagramShell";

interface Props {
  events: DeadlineEvent[];
  lang: Lang;
  title: string;
  ariaSummary: string;
}

export function DeadlineTimeline({ events, lang, title, ariaSummary }: Props) {
  const sorted = [...events].sort((a, b) => a.day - b.day);
  const maxDay = sorted.length ? sorted[sorted.length - 1].day : 1;

  const fallback = (
    <ol className="space-y-3">
      {sorted.map((e, i) => (
        <li key={i}>
          <strong>Day {e.day}</strong> — {pick(e.title, lang)}: {pick(e.detail, lang)}
        </li>
      ))}
    </ol>
  );

  return (
    <DiagramShell id="diagram-deadlines" eyebrow="Diagram 05" title={title} ariaSummary={ariaSummary} textFallback={fallback}>
      {/* Horizontal axis */}
      <div className="relative py-4 overflow-x-auto">
        <div className="min-w-[720px]">
          <div className="relative h-24">
            <div aria-hidden className="absolute left-0 right-0 top-1/2 h-px bg-[#0f172a]" />
            {sorted.map((e, i) => {
              const pct = maxDay === 0 ? 0 : (e.day / maxDay) * 95 + 2.5;
              return (
                <div key={i} className="absolute -translate-x-1/2" style={{ left: `${pct}%`, top: "20%" }}>
                  <div className="w-px h-8 bg-[#b59a5d] mx-auto" />
                  <div className="w-3 h-3 rounded-full bg-[#b59a5d] mx-auto" />
                  <div className="absolute top-14 left-1/2 -translate-x-1/2 whitespace-nowrap text-center">
                    <div className="font-display text-[10px] font-black tracking-[0.28em] uppercase text-[#b59a5d]">
                      Day {e.day}
                    </div>
                    <div className="mt-1 text-[12px] font-bold text-[#0f172a]">{pick(e.title, lang)}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* Details below (stacked — screen reader reads these in order) */}
      <div className="mt-10 space-y-4">
        {sorted.map((e, i) => (
          <div key={i} className="flex gap-6 bg-white border border-[#e9e3d2] p-5">
            <div className="shrink-0 w-20 font-display text-sm font-black text-[#b59a5d] tabular-nums">Day {e.day}</div>
            <div>
              <div className="font-bold text-[#0f172a]">{pick(e.title, lang)}</div>
              <p className="text-[14px] text-[#6b5f48] mt-1 leading-relaxed">{pick(e.detail, lang)}</p>
            </div>
          </div>
        ))}
      </div>
    </DiagramShell>
  );
}
```

- [ ] **Step 2: Wire + commit**

```tsx
// Immigration.tsx
import { DeadlineTimeline } from "../../components/legal/DeadlineTimeline";

<DeadlineTimeline
  events={c.deadlines}
  lang={language}
  title="시한 타임라인"
  ariaSummary="긴급 대응 시한을 Day 0부터 시간축으로 보여주는 타임라인"
/>
```

```bash
git add src/app/components/legal/DeadlineTimeline.tsx src/app/pages/legal/Immigration.tsx
git commit -m "feat(legal): DeadlineTimeline with Day-N axis"
```

---

## Task 14: Hero, SourceBlock, DisclaimerBlock, CTA — complete the page

**Files:**
- Create: `src/app/components/legal/LegalHero.tsx`
- Create: `src/app/components/legal/SourceBlock.tsx`
- Create: `src/app/components/legal/DisclaimerBlock.tsx`
- Modify: `src/app/pages/legal/Immigration.tsx` (final assembly)

- [ ] **Step 0: Load Noto Serif fonts (legal-scoped)**

Per spec §5.2, body text on legal pages uses Noto Serif for the editorial feel. Add to `index.html` `<head>`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Noto+Serif+KR:wght@400;600;800&family=Noto+Serif+SC:wght@400;600;800&family=Source+Serif+4:wght@400;600;700&display=swap" rel="stylesheet" />
```

Add a scoped CSS rule in `src/styles/index.css`:

```css
.legal-body,
.legal-body button,
.legal-body p,
.legal-body li {
  font-family: "Source Serif 4", "Noto Serif KR", "Noto Serif SC", Georgia, serif;
}
```

Wrap the `<div>` in `Immigration.tsx` with `className="... legal-body"` (see Step 4).

- [ ] **Step 1: LegalHero**

Create `src/app/components/legal/LegalHero.tsx`:

```tsx
import type { LegalPageContent, Lang } from "../../../lib/legal/types";
import { pick } from "../../../lib/legal/content";

interface Props {
  content: LegalPageContent;
  lang: Lang;
}

export function LegalHero({ content, lang }: Props) {
  const { meta } = content;
  return (
    <section className="relative pt-28 pb-16 border-b border-[#e9e3d2]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <p className="font-display text-[11px] font-black tracking-[0.36em] uppercase text-[#b59a5d] mb-5">
          Legal Info · 법률정보
        </p>
        <h1 className="font-black tracking-[-0.02em] leading-[1.02] text-[44px] sm:text-[64px] lg:text-[88px] text-[#0f172a]">
          {pick(content.title, lang)}
        </h1>
        <p className="mt-6 max-w-[640px] text-xl text-[#6b5f48] font-semibold leading-snug">
          {pick(content.summary, lang)}
        </p>
        <div className="mt-10 flex flex-wrap gap-x-8 gap-y-2 text-[11px] font-mono text-[#6b5f48]">
          <span>근거 · Sources: {meta.sourceCount}건</span>
          <span>조회 · Retrieved: {meta.generatedAt.slice(0, 10) || "—"}</span>
          <span>최신 개정 · Last revision: {meta.lastRevisionAt || "—"}</span>
        </div>
        <p className="mt-8 text-[12px] italic text-[#6b5f48] max-w-[640px]">
          {pick(content.disclaimer, lang)}
        </p>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: SourceBlock**

Create `src/app/components/legal/SourceBlock.tsx`:

```tsx
import type { LegalPageContent, Lang } from "../../../lib/legal/types";
import { pick } from "../../../lib/legal/content";

export function SourceBlock({ content, lang }: { content: LegalPageContent; lang: Lang }) {
  return (
    <section className="py-20 border-t border-[#e9e3d2] bg-[#f4ecd9]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <p className="font-display text-[10px] font-black tracking-[0.32em] uppercase text-[#b59a5d] mb-4">Sources · 출처</p>
        <h3 className="text-2xl font-extrabold text-[#0f172a] mb-10">공공누리 제1유형 개방 자료</h3>
        <ul className="space-y-4">
          {content.sources.map((s, i) => (
            <li key={i} className="text-[14px] text-[#0f172a] leading-relaxed border-b border-[#e9e3d2] pb-4">
              <strong>{s.agency}</strong> — {s.title} ·{" "}
              <a href={s.url} target="_blank" rel="noreferrer" className="text-[#b59a5d] underline underline-offset-4">
                원문 URL
              </a>{" "}
              <span className="text-[11px] text-[#6b5f48] font-mono">({s.fetchedAt.slice(0, 10)})</span>
            </li>
          ))}
        </ul>
        <p className="mt-8 text-[11px] text-[#6b5f48]">
          본 콘텐츠에는 공공누리 제1유형으로 개방한 저작물을 활용하였습니다. 원문은 위 기관 웹사이트에서 확인 가능합니다.
        </p>
      </div>
    </section>
  );
}
```

- [ ] **Step 3: DisclaimerBlock**

Create `src/app/components/legal/DisclaimerBlock.tsx`:

```tsx
import type { LegalPageContent, Lang } from "../../../lib/legal/types";
import { pick } from "../../../lib/legal/content";

export function DisclaimerBlock({ content, lang }: { content: LegalPageContent; lang: Lang }) {
  return (
    <section className="py-16 bg-[#0f172a] text-white">
      <div className="max-w-[980px] mx-auto px-4 sm:px-6 lg:px-8">
        <p className="font-display text-[10px] font-black tracking-[0.32em] uppercase text-[#b59a5d] mb-5">Disclaimer</p>
        <p className="text-[15px] leading-[1.9] text-white/90">{pick(content.disclaimer, lang)}</p>
      </div>
    </section>
  );
}
```

- [ ] **Step 4: Final Immigration page assembly**

Replace `src/app/pages/legal/Immigration.tsx`:

```tsx
import { Link } from "react-router";
import { useLanguage } from "../../context/LanguageContext";
import { getLegalContent, pick } from "../../../lib/legal/content";
import { LegalHero } from "../../components/legal/LegalHero";
import { VisaMapDiagram } from "../../components/legal/VisaMapDiagram";
import { DecisionTreeDiagram } from "../../components/legal/DecisionTreeDiagram";
import { ProcedureFlowDiagram } from "../../components/legal/ProcedureFlowDiagram";
import { AgencyNetworkDiagram } from "../../components/legal/AgencyNetworkDiagram";
import { DeadlineTimeline } from "../../components/legal/DeadlineTimeline";
import { SourceBlock } from "../../components/legal/SourceBlock";
import { DisclaimerBlock } from "../../components/legal/DisclaimerBlock";

export function Immigration() {
  const { language } = useLanguage();
  const c = getLegalContent("immigration");

  const tTitle = {
    ko: { visas: "체류자격 맵", tree: "내 상황에 맞는 절차", proc: "절차 플로우", agen: "기관 네트워크", dead: "시한 타임라인" },
    zh: { visas: "居留资格地图", tree: "适合我情况的程序", proc: "程序流程", agen: "机关网络", dead: "时限时间轴" },
    en: { visas: "Visa Map", tree: "My-Case Decision Tree", proc: "Procedure Flow", agen: "Agency Network", dead: "Deadline Timeline" },
  }[language];

  return (
    <div className="bg-[#faf6ef] min-h-screen legal-body">
      <LegalHero content={c} lang={language} />
      <VisaMapDiagram visas={c.visas} lang={language} title={tTitle.visas} ariaSummary="체류자격 비자 유형 5가지를 한눈에 보여주는 다이어그램" />
      <DecisionTreeDiagram rootId={c.decisionTree.rootId} nodes={c.decisionTree.nodes} lang={language} title={tTitle.tree} ariaSummary="질문에 Yes/No로 답하며 필요한 절차를 찾는 의사결정 트리" />
      <ProcedureFlowDiagram steps={c.procedure} lang={language} title={tTitle.proc} ariaSummary="체류자격 절차의 단계별 흐름과 상세 정보" />
      <AgencyNetworkDiagram agencies={c.agencies} lang={language} title={tTitle.agen} ariaSummary="의뢰인 중심으로 관련 기관들의 역할과 연락처를 보여주는 네트워크" />
      <DeadlineTimeline events={c.deadlines} lang={language} title={tTitle.dead} ariaSummary="긴급 대응 시한을 Day 0부터 시간축으로 보여주는 타임라인" />

      {/* CTA */}
      <section className="py-20 border-t border-[#e9e3d2] bg-white">
        <div className="max-w-[980px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div>
            <p className="font-display text-[10px] font-black tracking-[0.3em] uppercase text-[#b59a5d] mb-3">Need a lawyer?</p>
            <h3 className="text-3xl font-black text-[#0f172a] tracking-tight max-w-[620px] leading-snug">
              {language === "zh" ? "个案不同，建议咨询律师。" : language === "en" ? "Your case is unique. Speak with an attorney." : "개별 사안은 다릅니다. 변호사와 상담하세요."}
            </h3>
          </div>
          <Link to="/#consult" className="bg-[#0f172a] hover:bg-[#1e293b] text-white px-10 py-5 font-extrabold text-lg whitespace-nowrap">
            {language === "zh" ? "在线咨询 →" : language === "en" ? "Online consult →" : "온라인 상담 접수 →"}
          </Link>
        </div>
      </section>

      <SourceBlock content={c} lang={language} />
      <DisclaimerBlock content={c} lang={language} />
    </div>
  );
}
```

- [ ] **Step 5: Manual browser QA (KO/ZH/EN)**

Run `npm run dev`. For EACH of KO/ZH/EN:

- [ ] Hero title and summary render in the selected language
- [ ] All 5 diagrams interact (click visa, answer decision, click step, hover agency, view timeline)
- [ ] "Text version" toggle on each diagram shows a list alternative
- [ ] SourceBlock lists all sources with working URL links
- [ ] DisclaimerBlock prints the full disclaimer in the selected language
- [ ] CTA button navigates to `/#consult` and scrolls to intake form
- [ ] No emoji in content
- [ ] No "3 Things to Know" / "핵심 포인트" boilerplate

- [ ] **Step 6: Build**

Run: `npm run build`
Expected: clean build.

- [ ] **Step 7: Commit**

```bash
git add src/app/components/legal/LegalHero.tsx src/app/components/legal/SourceBlock.tsx src/app/components/legal/DisclaimerBlock.tsx src/app/pages/legal/Immigration.tsx
git commit -m "feat(legal): assemble Immigration page — hero/CTA/sources/disclaimer"
```

---

## Task 15: Playwright e2e + deploy verify

**Files:**
- Create: `scripts/verify-legal.mjs`

- [ ] **Step 1: Write e2e script**

Create `scripts/verify-legal.mjs`:

```js
import { chromium } from "playwright";

const BASE = process.argv[2] || "https://law-oh.vercel.app";
const results = [];
const add = (name, ok, detail = "") => results.push({ name, ok: ok ? "✅" : "❌", detail });

const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });

// 1) /legal loads, shows active + coming-soon cards
{
  const page = await ctx.newPage();
  const bads = [];
  page.on("response", (r) => r.status() === 404 && bads.push(`404 ${r.url()}`));
  const resp = await page.goto(BASE + "/legal", { waitUntil: "networkidle" });
  add("/legal status 200", resp.status() === 200, String(resp.status()));
  add("/legal no 404", bads.length === 0, bads.join(" | "));
  const body = await page.locator("body").innerText();
  add("/legal shows 체류자격", body.includes("체류자격"));
  add("/legal shows coming soon", body.includes("준비 중") || body.toLowerCase().includes("coming soon"));
  await page.close();
}

// 2) /legal/immigration loads
{
  const page = await ctx.newPage();
  const bads = [];
  page.on("response", (r) => r.status() === 404 && bads.push(`404 ${r.url()}`));
  const resp = await page.goto(BASE + "/legal/immigration", { waitUntil: "networkidle" });
  add("/legal/immigration 200", resp.status() === 200, String(resp.status()));
  add("/legal/immigration no 404", bads.length === 0, bads.join(" | "));
  for (const id of ["diagram-visas", "diagram-decision", "diagram-procedure", "diagram-agencies", "diagram-deadlines"]) {
    const count = await page.locator(`#${id}`).count();
    add(`${id} exists`, count === 1, `count=${count}`);
  }
  // Text-version toggle count (should be 5)
  const toggleCount = await page.locator("button", { hasText: /Text version|Show diagram/ }).count();
  add("5 text-version toggles present", toggleCount === 5, `count=${toggleCount}`);
  // CTA goes to /#consult
  const cta = page.locator("a", { hasText: /온라인 상담 접수|在线咨询|Online consult/ }).first();
  const href = await cta.getAttribute("href").catch(() => null);
  add("CTA → /#consult", href === "/#consult", `href=${href}`);
  // Visa card click opens slide-over
  const firstVisa = page.locator("#diagram-visas button").first();
  await firstVisa.click();
  const dialogVisible = await page.locator('[role="dialog"]').count();
  add("Visa slide-over opens", dialogVisible > 0);
  await page.keyboard.press("Escape").catch(() => {});
  await page.close();
}

// 3) Language switch affects content
{
  const page = await ctx.newPage();
  await page.goto(BASE + "/legal/immigration", { waitUntil: "networkidle" });
  await page.locator("button", { hasText: "ZH" }).click();
  await page.waitForTimeout(300);
  const zhBody = await page.locator("body").innerText();
  add("ZH toggle renders Chinese", /[\u4e00-\u9fff]/.test(zhBody));
  await page.locator("button", { hasText: "EN" }).click();
  await page.waitForTimeout(300);
  const enBody = await page.locator("body").innerText();
  add("EN toggle renders English", enBody.includes("Legal Info") || enBody.includes("Visa"));
  await page.close();
}

console.log("\n=== LEGAL VERIFICATION ===");
for (const r of results) console.log(`${r.ok} ${r.name}${r.detail ? `  (${r.detail})` : ""}`);
const failed = results.filter((r) => r.ok === "❌").length;
console.log(`\n${results.length - failed}/${results.length} passed\n`);
await browser.close();
process.exit(failed === 0 ? 0 : 1);
```

- [ ] **Step 2: Run e2e against local dev**

Run in one terminal: `npm run dev`
Run in another: `node scripts/verify-legal.mjs http://localhost:5173`
Expected: all checks pass.

If any fail: fix the relevant component/content/JSON, repeat.

- [ ] **Step 3: Push and verify Vercel deploy**

```bash
git add scripts/verify-legal.mjs
git commit -m "test(legal): Playwright e2e for /legal + /legal/immigration"
git push origin main
```

Wait ~60s for Vercel deploy. Then:

```bash
node scripts/verify-legal.mjs https://law-oh.vercel.app
```

Expected: same pass count as local. If 404 on routes: confirm `vercel.json` rewrites deployed.

- [ ] **Step 4: Browser spot-check on live Vercel**

Open `https://law-oh.vercel.app/legal/immigration` in a real browser:

- [ ] Confirm page loads with no console errors (DevTools)
- [ ] Each diagram visually matches the "Editorial Legal Brief" aesthetic (off-white bg, serif body, gold accents, no rounded-2xl, no AI-slop)
- [ ] Toggle KO/ZH/EN — all three look clean, no broken characters
- [ ] Click CTA → lands at home `#consult` section

- [ ] **Step 5: Final commit (no-op if e2e pushed already)**

If any fixes were made in Step 4, commit them and push.

---

## Definition of Done

- [ ] All 15 tasks committed
- [ ] `npm run build` passes
- [ ] `npm test` passes (scraper + generator + shared tests)
- [ ] `node scripts/verify-legal.mjs https://law-oh.vercel.app` passes all assertions
- [ ] Manual browser QA on KO/ZH/EN all clean
- [ ] Spec (`2026-04-20-legal-info-design.md`) §7 acceptance criteria all ticked

---

## Post-MVP Follow-ups (NOT in this plan)

- Remaining 4 topics (criminal / labor / fraud / china-family) — copy pattern
- GitHub Actions for monthly regeneration
- OG meta tags / sitemap
- SEO structured data (LegalArticle JSON-LD)
- Diff-based partial regeneration

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

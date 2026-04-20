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

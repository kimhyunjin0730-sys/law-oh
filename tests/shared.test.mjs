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

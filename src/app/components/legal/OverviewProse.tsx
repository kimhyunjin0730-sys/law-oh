import type { Lang } from "../../../lib/legal/types";
import { SectionHeader } from "./SectionHeader";

interface Props {
  text: string;
  lang: Lang;
  /** Substrings inside `text` to wrap with the buttercream highlighter. */
  highlights?: string[];
  count?: number;
  total?: number;
}

const TITLE: Record<Lang, string> = {
  ko: "개관",
  zh: "概述",
  en: "Overview",
};

/** Splits `text` and wraps any substring matched in `highlights` with <mark>. */
function renderWithMarks(text: string, highlights?: string[]) {
  if (!highlights?.length) return text;
  const escaped = highlights.map((h) => h.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
  const re = new RegExp(`(${escaped.join("|")})`, "g");
  const parts = text.split(re);
  return parts.map((p, i) =>
    highlights.includes(p) ? (
      <mark key={i} className="legal-mark">
        {p}
      </mark>
    ) : (
      <span key={i}>{p}</span>
    )
  );
}

export function OverviewProse({ text, lang, highlights, count, total }: Props) {
  const paragraphs = text.split(/\n\s*\n+/);
  return (
    <section className="mb-[72px]">
      <SectionHeader id="overview" title={TITLE[lang]} count={count} total={total} />
      <div className="text-[16.5px] leading-[1.85] text-[#0f172a] space-y-[18px]">
        {paragraphs.map((p, i) => (
          <p key={i}>{renderWithMarks(p, highlights)}</p>
        ))}
      </div>
    </section>
  );
}

import type { LawArticle, Lang } from "../../../lib/legal/types";
import { pick } from "../../../lib/legal/content";
import { SectionHeader } from "./SectionHeader";

interface Props {
  laws: LawArticle[];
  lang: Lang;
}

const TITLE: Record<Lang, string> = {
  ko: "관련 법령",
  zh: "相关法令",
  en: "Related Laws",
};

const LABELS: Record<Lang, { revised: string; source: string }> = {
  ko: { revised: "개정일", source: "원문" },
  zh: { revised: "修订日", source: "原文" },
  en: { revised: "Revised", source: "Source" },
};

export function LawArticles({ laws, lang }: Props) {
  const L = LABELS[lang];
  return (
    <section className="py-20 border-t border-[#e9e3d2] bg-[#f9f2e2]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          id="laws"
          eyebrow="Section 04 · Statutes"
          title={TITLE[lang]}
        />
        <div className="space-y-8">
          {laws.map((law, i) => (
            <article
              key={i}
              className="bg-[#faf6ef] border border-[#e9e3d2] p-8 lg:p-10"
            >
              <p className="font-mono text-[13px] font-black tracking-wide text-[#b59a5d] mb-5 uppercase">
                {law.ref}
              </p>
              <p className="text-[15.5px] leading-[1.95] text-[#0f172a] whitespace-pre-line max-w-[72ch]">
                {pick(law.text, lang)}
              </p>
              <div className="mt-6 pt-5 border-t border-[#e9e3d2] flex flex-wrap items-center justify-end gap-4 text-[12px] font-mono text-[#6b5f48]">
                <span>
                  {L.revised} · {law.revisedAt}
                </span>
                <a
                  href={law.sourceUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#b59a5d] underline underline-offset-4 hover:text-[#8f7a47]"
                >
                  {L.source} →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

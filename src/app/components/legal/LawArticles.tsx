import type { LawArticle, Lang } from "../../../lib/legal/types";
import { pick } from "../../../lib/legal/content";
import { SectionHeader } from "./SectionHeader";

interface Props {
  laws: LawArticle[];
  lang: Lang;
  count?: number;
  total?: number;
}

const TITLE: Record<Lang, string> = {
  ko: "관련 법령 조문",
  zh: "相关法令条文",
  en: "Related Statutes",
};

export function LawArticles({ laws, lang, count, total }: Props) {
  return (
    <section className="mb-[72px]" id="laws">
      <SectionHeader id="laws" title={TITLE[lang]} count={count} total={total} />
      <div className="space-y-3.5">
        {laws.map((law, i) => (
          <article
            key={i}
            className="bg-white border border-[#dbe1ea] border-l-[3px] border-l-[#0f172a] py-5 px-6 transition-all hover:-translate-y-px hover:shadow-[0_1px_0_rgba(15,23,42,.04),0_12px_32px_-18px_rgba(15,23,42,.18)]"
          >
            <div className="flex items-baseline justify-between gap-5 mb-2">
              <div className="font-serif-ko font-bold text-[16px] text-[#0f172a] tracking-tight">
                {law.ref}
              </div>
              <a
                href={law.sourceUrl}
                target="_blank"
                rel="noreferrer"
                className="font-mono text-[11px] font-semibold tracking-[0.08em] text-[#94a3b8] hover:text-[#0f172a] flex-shrink-0 inline-flex items-center gap-1"
              >
                law.go.kr ↗
              </a>
            </div>
            <p className="text-[14.5px] leading-[1.7] text-[#475569] whitespace-pre-line">
              {pick(law.text, lang)}
            </p>
            {law.revisedAt ? (
              <p className="mt-3 font-mono text-[10.5px] tracking-wide text-[#94a3b8]">
                개정 {law.revisedAt}
              </p>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  );
}

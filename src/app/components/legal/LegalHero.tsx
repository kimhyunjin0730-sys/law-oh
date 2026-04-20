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

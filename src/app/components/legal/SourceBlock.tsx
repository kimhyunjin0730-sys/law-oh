import type { LegalPageContent, Lang } from "../../../lib/legal/types";

export function SourceBlock({ content }: { content: LegalPageContent; lang: Lang }) {
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

import type { LegalPageContent, Lang } from "../../../lib/legal/types";

export function SourceBlock({ content }: { content: LegalPageContent; lang: Lang }) {
  return (
    <div>
      <h5 className="font-mono text-[11px] font-bold tracking-[0.2em] uppercase text-[#8d7842] mb-4">
        출처 / Sources
      </h5>
      <ul className="flex flex-col gap-2 text-[13px] leading-snug text-[#475569]">
        {content.sources.map((s, i) => (
          <li key={i}>
            <a
              href={s.url}
              target="_blank"
              rel="noreferrer"
              className="text-[#0f172a] font-semibold hover:underline"
            >
              {s.title}
            </a>
            <span className="text-[#94a3b8]"> — {s.agency}</span>
            <span className="ml-1.5 font-mono text-[10px] font-semibold tracking-[0.08em] text-[#94a3b8] uppercase">
              {s.kogl === "type-1" ? "KOGL-1" : s.kogl}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

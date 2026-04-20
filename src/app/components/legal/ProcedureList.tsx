import type { ProcedureStep, Lang } from "../../../lib/legal/types";
import { pick } from "../../../lib/legal/content";
import { SectionHeader } from "./SectionHeader";

interface Props {
  steps: ProcedureStep[];
  lang: Lang;
  count?: number;
  total?: number;
}

const TITLE: Record<Lang, string> = {
  ko: "신청·심사 절차",
  zh: "申请·审查 程序",
  en: "Application & Review Procedure",
};

export function ProcedureList({ steps, lang, count, total }: Props) {
  return (
    <section className="mb-[72px]" id="procedure">
      <SectionHeader id="procedure" title={TITLE[lang]} count={count} total={total} />
      <div className="flex flex-col">
        {steps.map((s, idx) => (
          <div
            key={s.id}
            className={
              "grid grid-cols-[64px_1fr] gap-6 py-6 " +
              (idx === 0 ? "" : "border-t border-[#dbe1ea]")
            }
          >
            <div className="font-serif-ko font-black text-[44px] sm:text-[48px] leading-none tracking-tight text-[#0f172a] opacity-90">
              {String(idx + 1).padStart(2, "0")}
              <span className="block font-mono text-[9.5px] font-bold tracking-[0.14em] text-[#b59a5d] mt-2 opacity-100">
                {pick(s.duration, lang).toUpperCase()}
              </span>
            </div>
            <div>
              <h3 className="font-serif-ko font-bold text-[18px] sm:text-[19px] leading-snug text-[#0f172a] tracking-tight mb-2">
                {pick(s.label, lang)}
              </h3>
              <p className="text-[15px] leading-[1.7] text-[#475569] mb-3">
                {pick(s.note, lang)}
              </p>
              <div className="flex flex-wrap gap-2 items-center">
                {pick(s.agency, lang) ? (
                  <span className="font-mono text-[11px] font-semibold tracking-wide px-2.5 py-1 bg-[#e2e8f0] text-[#0f172a] rounded-full">
                    {pick(s.agency, lang)}
                  </span>
                ) : null}
                {s.lawRef ? (
                  <span className="font-mono text-[11px] font-semibold tracking-wide px-2.5 py-1 border border-[#dbe1ea] text-[#475569] rounded-full">
                    {s.lawRef}
                  </span>
                ) : null}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

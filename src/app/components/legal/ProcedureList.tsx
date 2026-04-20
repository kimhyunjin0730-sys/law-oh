import type { ProcedureStep, Lang } from "../../../lib/legal/types";
import { pick } from "../../../lib/legal/content";
import { SectionHeader } from "./SectionHeader";

interface Props {
  steps: ProcedureStep[];
  lang: Lang;
}

const TITLE: Record<Lang, string> = {
  ko: "절차",
  zh: "程序",
  en: "Procedure",
};

const LABELS: Record<Lang, { step: string; agency: string; duration: string; law: string }> = {
  ko: { step: "단계", agency: "담당 기관", duration: "소요", law: "근거" },
  zh: { step: "步骤", agency: "主管机关", duration: "所需", law: "依据" },
  en: { step: "Step", agency: "Agency", duration: "Duration", law: "Law" },
};

export function ProcedureList({ steps, lang }: Props) {
  const L = LABELS[lang];
  return (
    <section className="py-20 border-t border-[#e9e3d2]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          id="procedure"
          eyebrow="Section 03 · Procedure"
          title={TITLE[lang]}
        />
        <ol className="relative border-l-2 border-[#e9e3d2] pl-10 space-y-12">
          {steps.map((s, idx) => (
            <li key={s.id} className="relative">
              <span
                aria-hidden
                className="absolute -left-[46px] top-2 w-3 h-3 bg-[#b59a5d] ring-4 ring-[#faf6ef]"
              />
              <span
                aria-hidden
                className="absolute -left-[34px] top-[14px] w-[34px] h-px bg-[#b59a5d]"
              />
              <div className="flex flex-col lg:flex-row lg:items-baseline lg:gap-6">
                <p className="font-display text-[11px] font-black tracking-[0.32em] uppercase text-[#b59a5d] mb-2 lg:mb-0 lg:w-[110px] shrink-0">
                  {L.step} {String(idx + 1).padStart(2, "0")}
                </p>
                <div className="flex-1">
                  <h3 className="text-2xl font-extrabold text-[#0f172a] mb-3 leading-tight">
                    {pick(s.label, lang)}
                  </h3>
                  <dl className="flex flex-wrap gap-x-8 gap-y-2 text-[13px] text-[#6b5f48] mb-4 font-mono">
                    <div className="flex gap-2">
                      <dt className="text-[#b59a5d]">{L.agency}</dt>
                      <dd className="text-[#0f172a]">{pick(s.agency, lang)}</dd>
                    </div>
                    <div className="flex gap-2">
                      <dt className="text-[#b59a5d]">{L.duration}</dt>
                      <dd className="text-[#0f172a]">{pick(s.duration, lang)}</dd>
                    </div>
                    {s.lawRef ? (
                      <div className="flex gap-2">
                        <dt className="text-[#b59a5d]">{L.law}</dt>
                        <dd className="text-[#0f172a]">{s.lawRef}</dd>
                      </div>
                    ) : null}
                  </dl>
                  <p className="text-[15px] leading-[1.85] text-[#0f172a] max-w-[65ch]">
                    {pick(s.note, lang)}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

import type { VisaNode, Lang } from "../../../lib/legal/types";
import { pick } from "../../../lib/legal/content";
import { SectionHeader } from "./SectionHeader";

interface Props {
  visas: VisaNode[];
  lang: Lang;
  count?: number;
  total?: number;
}

const TITLE: Record<Lang, string> = {
  ko: "주요 체류자격 유형",
  zh: "主要居留资格类型",
  en: "Visa Types",
};

const COLS: Record<Lang, { code: string; target: string; period: string; req: string }> = {
  ko: { code: "코드", target: "대상", period: "기간", req: "요건 / 비고" },
  zh: { code: "代码", target: "对象", period: "期限", req: "要求 / 备注" },
  en: { code: "Code", target: "Target", period: "Period", req: "Requirements / Notes" },
};

export function VisaTable({ visas, lang, count, total }: Props) {
  const col = COLS[lang];
  return (
    <section className="mb-[72px]" id="visas">
      <SectionHeader id="visas" title={TITLE[lang]} count={count} total={total} />
      <div className="bg-white border border-[#dbe1ea] rounded-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-[14.5px] text-left border-collapse">
            <thead>
              <tr className="bg-[#0f172a] text-[#f4f6fa]">
                <th className="py-3.5 px-4 font-semibold text-[12.5px] tracking-wide w-[110px]">{col.code}</th>
                <th className="py-3.5 px-4 font-semibold text-[12.5px] tracking-wide w-[30%]">{col.target}</th>
                <th className="py-3.5 px-4 font-semibold text-[12.5px] tracking-wide w-[18%]">{col.period}</th>
                <th className="py-3.5 px-4 font-semibold text-[12.5px] tracking-wide">{col.req}</th>
              </tr>
            </thead>
            <tbody>
              {visas.map((v, i) => (
                <tr key={v.code + i} className={i === 0 ? "" : "border-t border-[#dbe1ea]"}>
                  <td className="py-4 px-4 align-top">
                    <span className="font-mono font-bold text-[13px] tracking-wide text-[#0f172a] whitespace-nowrap">
                      {v.code}
                    </span>
                    <div className="font-mono text-[12px] text-[#94a3b8] mt-0.5">
                      {pick(v.label, lang)}
                    </div>
                  </td>
                  <td className="py-4 px-4 align-top leading-snug">
                    <p className="font-bold text-[#0f172a]">{pick(v.target, lang)}</p>
                  </td>
                  <td className="py-4 px-4 align-top text-[#0f172a] leading-snug">
                    {pick(v.period, lang)}
                  </td>
                  <td className="py-4 px-4 align-top">
                    <ul className="space-y-1.5 list-none">
                      {pick(v.requirements, lang).map((r, ri) => (
                        <li key={ri} className="relative pl-3.5 text-[13.5px] text-[#475569]">
                          <span
                            className="absolute left-0 top-[9px] w-[5px] h-[5px] rounded-full bg-[#2563EB]"
                            aria-hidden
                          />
                          {r}
                        </li>
                      ))}
                    </ul>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

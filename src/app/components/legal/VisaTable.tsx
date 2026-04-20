import type { VisaNode, Lang } from "../../../lib/legal/types";
import { pick } from "../../../lib/legal/content";
import { SectionHeader } from "./SectionHeader";

interface Props {
  visas: VisaNode[];
  lang: Lang;
}

const TITLE: Record<Lang, string> = {
  ko: "체류자격 목록",
  zh: "居留资格一览",
  en: "Visa Types",
};

const COLS: Record<Lang, { code: string; target: string; period: string; requirements: string }> = {
  ko: { code: "Code", target: "대상", period: "유효기간", requirements: "주요 요건" },
  zh: { code: "Code", target: "对象", period: "有效期", requirements: "主要要求" },
  en: { code: "Code", target: "Target", period: "Period", requirements: "Requirements" },
};

export function VisaTable({ visas, lang }: Props) {
  const col = COLS[lang];
  return (
    <section className="py-20 border-t border-[#e9e3d2] bg-[#f9f2e2]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          id="visa-types"
          eyebrow="Section 02 · Visa Catalogue"
          title={TITLE[lang]}
        />
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left text-[14px] text-[#0f172a]">
            <thead>
              <tr className="border-t border-b border-[#0f172a]">
                <th className="py-4 pr-6 font-display text-[11px] font-black tracking-[0.28em] uppercase text-[#6b5f48] w-[100px]">
                  {col.code}
                </th>
                <th className="py-4 pr-6 font-display text-[11px] font-black tracking-[0.28em] uppercase text-[#6b5f48]">
                  {col.target}
                </th>
                <th className="py-4 pr-6 font-display text-[11px] font-black tracking-[0.28em] uppercase text-[#6b5f48] w-[200px]">
                  {col.period}
                </th>
                <th className="py-4 font-display text-[11px] font-black tracking-[0.28em] uppercase text-[#6b5f48]">
                  {col.requirements}
                </th>
              </tr>
            </thead>
            <tbody>
              {visas.map((v, idx) => (
                <tr
                  key={v.code}
                  className={`border-b border-[#e9e3d2] align-top ${
                    idx % 2 === 1 ? "bg-[#f4ecd9]" : ""
                  }`}
                >
                  <td className="py-5 pr-6 font-mono font-black text-[#b59a5d] text-[15px] tracking-wide">
                    {v.code}
                  </td>
                  <td className="py-5 pr-6 leading-relaxed">
                    <p className="font-extrabold text-[15px] mb-1">
                      {pick(v.label, lang)}
                    </p>
                    <p className="text-[13px] text-[#6b5f48] leading-relaxed">
                      {pick(v.target, lang)}
                    </p>
                  </td>
                  <td className="py-5 pr-6 leading-relaxed">
                    {pick(v.period, lang)}
                  </td>
                  <td className="py-5 leading-relaxed">
                    <ul className="list-disc pl-5 space-y-1 text-[13.5px]">
                      {pick(v.requirements, lang).map((r, i) => (
                        <li key={i}>{r}</li>
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

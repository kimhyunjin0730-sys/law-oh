import type { DeadlineEvent, Lang } from "../../../lib/legal/types";
import { pick } from "../../../lib/legal/content";
import { SectionHeader } from "./SectionHeader";

interface Props {
  events: DeadlineEvent[];
  lang: Lang;
}

const TITLE: Record<Lang, string> = {
  ko: "주요 시한",
  zh: "重要期限",
  en: "Key Deadlines",
};

const COLS: Record<Lang, { day: string; event: string; detail: string }> = {
  ko: { day: "Day", event: "사건", detail: "설명" },
  zh: { day: "Day", event: "事件", detail: "说明" },
  en: { day: "Day", event: "Event", detail: "Detail" },
};

export function DeadlineTable({ events, lang }: Props) {
  const col = COLS[lang];
  const sorted = [...events].sort((a, b) => a.day - b.day);
  return (
    <section className="py-20 border-t border-[#e9e3d2] bg-[#f9f2e2]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          id="deadlines"
          eyebrow="Section 06 · Deadlines"
          title={TITLE[lang]}
        />
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left text-[14px] text-[#0f172a]">
            <thead>
              <tr className="border-t border-b border-[#0f172a]">
                <th className="py-4 pr-6 font-display text-[11px] font-black tracking-[0.28em] uppercase text-[#6b5f48] w-[110px] text-right">
                  {col.day}
                </th>
                <th className="py-4 pr-6 font-display text-[11px] font-black tracking-[0.28em] uppercase text-[#6b5f48] w-[260px]">
                  {col.event}
                </th>
                <th className="py-4 font-display text-[11px] font-black tracking-[0.28em] uppercase text-[#6b5f48]">
                  {col.detail}
                </th>
              </tr>
            </thead>
            <tbody>
              {sorted.map((e, idx) => (
                <tr
                  key={`${e.day}-${idx}`}
                  className={`border-b border-[#e9e3d2] align-top ${
                    idx % 2 === 1 ? "bg-[#f4ecd9]" : ""
                  }`}
                >
                  <td className="py-5 pr-6 text-right font-mono font-black text-[#b59a5d] text-[18px] tabular-nums">
                    D+{e.day}
                  </td>
                  <td className="py-5 pr-6">
                    <p className="font-extrabold text-[15px] leading-snug">
                      {pick(e.title, lang)}
                    </p>
                  </td>
                  <td className="py-5 leading-relaxed max-w-[620px]">
                    {pick(e.detail, lang)}
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

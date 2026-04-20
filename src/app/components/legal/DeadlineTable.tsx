import type { DeadlineEvent, Lang } from "../../../lib/legal/types";
import { pick } from "../../../lib/legal/content";
import { SectionHeader } from "./SectionHeader";

interface Props {
  events: DeadlineEvent[];
  lang: Lang;
  count?: number;
  total?: number;
}

const TITLE: Record<Lang, string> = {
  ko: "주요 법적 시한",
  zh: "重要法律期限",
  en: "Key Legal Deadlines",
};

const COLS: Record<Lang, { day: string; event: string; detail: string }> = {
  ko: { day: "시한", event: "사건 / 절차", detail: "설명" },
  zh: { day: "期限", event: "事件 / 程序", detail: "说明" },
  en: { day: "Deadline", event: "Event / Procedure", detail: "Detail" },
};

/** Render the day pill — `D−n` for past, `+ n일` for future, `D−0` warn-style for the deadline itself. */
function DayPill({ day, lang }: { day: number; lang: Lang }) {
  const isPast = day < 0;
  const isZero = day === 0;
  const text = isZero
    ? "D−0"
    : isPast
      ? `D−${Math.abs(day)}`
      : lang === "ko"
        ? `+ ${day}일`
        : lang === "zh"
          ? `+${day}日`
          : `+ ${day}d`;
  return (
    <span
      className={
        "inline-block font-mono font-bold text-[12px] tracking-wide px-2.5 py-1 rounded-sm whitespace-nowrap " +
        (isZero
          ? "bg-[#c45a3b] text-white"
          : "bg-[#020617] text-[#fff3a8]")
      }
    >
      {text}
    </span>
  );
}

export function DeadlineTable({ events, lang, count, total }: Props) {
  const col = COLS[lang];
  const sorted = [...events].sort((a, b) => a.day - b.day);
  return (
    <section className="mb-[72px]" id="deadlines">
      <SectionHeader id="deadlines" title={TITLE[lang]} count={count} total={total} />
      <div className="bg-white border border-[#dbe1ea] rounded-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#eef1f7] border-b border-[#dbe1ea]">
                <th className="py-3.5 px-4 font-bold text-[12px] tracking-wide text-[#0f172a] w-[130px]">
                  {col.day}
                </th>
                <th className="py-3.5 px-4 font-bold text-[12px] tracking-wide text-[#0f172a] w-[30%]">
                  {col.event}
                </th>
                <th className="py-3.5 px-4 font-bold text-[12px] tracking-wide text-[#0f172a]">
                  {col.detail}
                </th>
              </tr>
            </thead>
            <tbody>
              {sorted.map((e, idx) => (
                <tr
                  key={`${e.day}-${idx}`}
                  className={idx === 0 ? "" : "border-t border-[#dbe1ea]"}
                >
                  <td className="py-4 px-4 align-top">
                    <DayPill day={e.day} lang={lang} />
                  </td>
                  <td className="py-4 px-4 align-top">
                    <p className="font-serif-ko font-bold text-[15px] text-[#0f172a] tracking-tight leading-snug">
                      {pick(e.title, lang)}
                    </p>
                  </td>
                  <td className="py-4 px-4 align-top text-[14px] text-[#475569] leading-relaxed">
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

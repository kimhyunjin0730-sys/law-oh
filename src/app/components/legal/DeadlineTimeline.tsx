import type { DeadlineEvent, Lang } from "../../../lib/legal/types";
import { pick } from "../../../lib/legal/content";
import { DiagramShell } from "./DiagramShell";

interface Props {
  events: DeadlineEvent[];
  lang: Lang;
  title: string;
  ariaSummary: string;
}

export function DeadlineTimeline({ events, lang, title, ariaSummary }: Props) {
  const sorted = [...events].sort((a, b) => a.day - b.day);
  const maxDay = sorted.length ? sorted[sorted.length - 1].day : 1;

  const fallback = (
    <ol className="space-y-3">
      {sorted.map((e, i) => (
        <li key={i}>
          <strong>Day {e.day}</strong> — {pick(e.title, lang)}: {pick(e.detail, lang)}
        </li>
      ))}
    </ol>
  );

  return (
    <DiagramShell id="diagram-deadlines" eyebrow="Diagram 05" title={title} ariaSummary={ariaSummary} textFallback={fallback}>
      {/* Horizontal axis */}
      <div className="relative py-4 overflow-x-auto">
        <div className="min-w-[720px]">
          <div className="relative h-24">
            <div aria-hidden className="absolute left-0 right-0 top-1/2 h-px bg-[#0f172a]" />
            {sorted.map((e, i) => {
              const pct = maxDay === 0 ? 0 : (e.day / maxDay) * 95 + 2.5;
              return (
                <div key={i} className="absolute -translate-x-1/2" style={{ left: `${pct}%`, top: "20%" }}>
                  <div className="w-px h-8 bg-[#b59a5d] mx-auto" />
                  <div className="w-3 h-3 rounded-full bg-[#b59a5d] mx-auto" />
                  <div className="absolute top-14 left-1/2 -translate-x-1/2 whitespace-nowrap text-center">
                    <div className="font-display text-[10px] font-black tracking-[0.28em] uppercase text-[#b59a5d]">
                      Day {e.day}
                    </div>
                    <div className="mt-1 text-[12px] font-bold text-[#0f172a]">{pick(e.title, lang)}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* Details below (stacked — screen reader reads these in order) */}
      <div className="mt-10 space-y-4">
        {sorted.map((e, i) => (
          <div key={i} className="flex gap-6 bg-white border border-[#e9e3d2] p-5">
            <div className="shrink-0 w-20 font-display text-sm font-black text-[#b59a5d] tabular-nums">Day {e.day}</div>
            <div>
              <div className="font-bold text-[#0f172a]">{pick(e.title, lang)}</div>
              <p className="text-[14px] text-[#6b5f48] mt-1 leading-relaxed">{pick(e.detail, lang)}</p>
            </div>
          </div>
        ))}
      </div>
    </DiagramShell>
  );
}

import { useState } from "react";
import type { ProcedureStep, Lang } from "../../../lib/legal/types";
import { pick } from "../../../lib/legal/content";
import { DiagramShell } from "./DiagramShell";

interface Props {
  steps: ProcedureStep[];
  lang: Lang;
  title: string;
  ariaSummary: string;
}

export function ProcedureFlowDiagram({ steps, lang, title, ariaSummary }: Props) {
  const [active, setActive] = useState(0);

  const fallback = (
    <ol className="space-y-6 list-decimal list-inside">
      {steps.map((s) => (
        <li key={s.id}>
          <strong>{pick(s.label, lang)}</strong> — {pick(s.agency, lang)}, {pick(s.duration, lang)}
          {s.lawRef && <span className="ml-2 text-[#6b5f48]">[{s.lawRef}]</span>}
          <p className="ml-6 mt-1 text-[#0f172a]">{pick(s.note, lang)}</p>
        </li>
      ))}
    </ol>
  );

  return (
    <DiagramShell id="diagram-procedure" eyebrow="Diagram 03" title={title} ariaSummary={ariaSummary} textFallback={fallback}>
      {/* Rail */}
      <div className="relative overflow-x-auto">
        <div className="flex gap-0 min-w-max">
          {steps.map((s, i) => {
            const isActive = i === active;
            return (
              <button
                key={s.id}
                type="button"
                onClick={() => setActive(i)}
                className={`relative w-[200px] shrink-0 px-6 py-5 text-left border-t-2 transition-colors ${
                  isActive ? "border-[#b59a5d] bg-white" : "border-[#e9e3d2] bg-transparent hover:border-[#b59a5d]/60"
                }`}
              >
                <div className="font-display text-[10px] font-black tracking-[0.3em] uppercase text-[#b59a5d] mb-2">
                  Step {String(i + 1).padStart(2, "0")}
                </div>
                <div className={`text-base font-bold ${isActive ? "text-[#0f172a]" : "text-[#6b5f48]"}`}>
                  {pick(s.label, lang)}
                </div>
              </button>
            );
          })}
        </div>
      </div>
      {/* Detail panel */}
      {steps[active] && (
        <div className="mt-8 grid md:grid-cols-3 gap-6 bg-white border border-[#e9e3d2] p-8">
          <div>
            <div className="font-display text-[10px] font-black tracking-[0.28em] uppercase text-[#b59a5d] mb-1">Agency</div>
            <p className="text-[15px] font-semibold text-[#0f172a]">{pick(steps[active].agency, lang)}</p>
          </div>
          <div>
            <div className="font-display text-[10px] font-black tracking-[0.28em] uppercase text-[#b59a5d] mb-1">Duration</div>
            <p className="text-[15px] font-semibold text-[#0f172a]">{pick(steps[active].duration, lang)}</p>
          </div>
          <div>
            <div className="font-display text-[10px] font-black tracking-[0.28em] uppercase text-[#b59a5d] mb-1">Law</div>
            <p className="text-[15px] font-semibold text-[#0f172a] font-mono">{steps[active].lawRef || "—"}</p>
          </div>
          <p className="md:col-span-3 text-[15px] text-[#0f172a] leading-relaxed border-t border-[#e9e3d2] pt-5">
            {pick(steps[active].note, lang)}
          </p>
        </div>
      )}
    </DiagramShell>
  );
}

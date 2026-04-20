import { useState } from "react";
import type { VisaNode, Lang } from "../../../lib/legal/types";
import { pick } from "../../../lib/legal/content";
import { DiagramShell } from "./DiagramShell";

interface Props {
  visas: VisaNode[];
  lang: Lang;
  title: string;      // localized ("체류자격 맵" / "居留资格地图" / "Visa Map")
  ariaSummary: string;
}

export function VisaMapDiagram({ visas, lang, title, ariaSummary }: Props) {
  const [open, setOpen] = useState<VisaNode | null>(null);

  const fallback = (
    <ul className="space-y-4">
      {visas.map((v) => (
        <li key={v.code}>
          <strong>{v.code}</strong> — {pick(v.label, lang)}; 대상: {pick(v.target, lang)}; 유효기간: {pick(v.period, lang)}
        </li>
      ))}
    </ul>
  );

  return (
    <DiagramShell id="diagram-visas" eyebrow="Diagram 01" title={title} ariaSummary={ariaSummary} textFallback={fallback}>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
        {visas.map((v) => (
          <button
            key={v.code}
            type="button"
            onClick={() => setOpen(v)}
            className="group relative aspect-square border border-[#e9e3d2] bg-white p-5 text-left hover:border-[#b59a5d] transition-colors"
            aria-label={`${v.code} — ${pick(v.label, lang)}`}
          >
            <span className="absolute top-3 left-3 font-display text-[9px] font-black tracking-[0.24em] uppercase text-[#b59a5d]">
              Visa
            </span>
            <div className="absolute bottom-5 left-5 right-5">
              <div className="font-display text-3xl lg:text-4xl font-black text-[#0f172a] leading-none">{v.code}</div>
              <div className="mt-3 text-[12px] text-[#6b5f48] font-semibold line-clamp-2">{pick(v.label, lang)}</div>
            </div>
          </button>
        ))}
      </div>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={open.code}
          className="fixed inset-0 z-50 flex justify-end bg-black/50"
          onClick={() => setOpen(null)}
        >
          <div
            className="w-[min(92vw,420px)] h-full bg-[#faf6ef] p-8 overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between mb-6">
              <div>
                <div className="font-display text-[10px] font-black tracking-[0.3em] uppercase text-[#b59a5d]">Visa</div>
                <div className="mt-1 font-display text-4xl font-black text-[#0f172a]">{open.code}</div>
              </div>
              <button type="button" onClick={() => setOpen(null)} className="text-xs font-bold uppercase">닫기 / Close</button>
            </div>
            <div className="space-y-5">
              <div>
                <div className="text-[10px] font-black tracking-[0.28em] uppercase text-[#b59a5d] mb-1">대상 · Target</div>
                <p className="text-[15px] text-[#0f172a] font-medium leading-relaxed">{pick(open.target, lang)}</p>
              </div>
              <div>
                <div className="text-[10px] font-black tracking-[0.28em] uppercase text-[#b59a5d] mb-1">유효기간 · Period</div>
                <p className="text-[15px] text-[#0f172a] font-medium leading-relaxed">{pick(open.period, lang)}</p>
              </div>
              <div>
                <div className="text-[10px] font-black tracking-[0.28em] uppercase text-[#b59a5d] mb-1">요건 · Requirements</div>
                <ul className="space-y-2">
                  {pick(open.requirements, lang).map((r, i) => (
                    <li key={i} className="flex gap-3 text-[14px] text-[#0f172a]">
                      <span className="text-[#b59a5d]">•</span>
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </DiagramShell>
  );
}

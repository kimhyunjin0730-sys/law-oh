import type { AgencyNode, Lang } from "../../../lib/legal/types";
import { pick } from "../../../lib/legal/content";
import { DiagramShell } from "./DiagramShell";

interface Props {
  agencies: AgencyNode[];
  lang: Lang;
  title: string;
  ariaSummary: string;
}

export function AgencyNetworkDiagram({ agencies, lang, title, ariaSummary }: Props) {
  const fallback = (
    <ul className="space-y-4">
      {agencies.map((a) => (
        <li key={a.id}>
          <strong>{pick(a.name, lang)}</strong> — {pick(a.role, lang)} · {a.phone} · <a href={a.url}>{a.url}</a>
        </li>
      ))}
    </ul>
  );

  // Hub-spoke: center node = 의뢰인; radial arms = each agency.
  // Implemented as CSS grid rather than SVG absolute positioning for responsive behavior.
  return (
    <DiagramShell id="diagram-agencies" eyebrow="Diagram 04" title={title} ariaSummary={ariaSummary} textFallback={fallback}>
      <div className="relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {/* left column: first two */}
          <div className="space-y-4 md:pt-12">
            {agencies.slice(0, 2).map((a) => <Card key={a.id} agency={a} lang={lang} side="left" />)}
          </div>
          {/* center hub */}
          <div className="flex items-center justify-center py-10 md:py-0">
            <div className="relative w-48 h-48 rounded-full border-2 border-[#b59a5d] bg-[#0f172a] flex items-center justify-center">
              <span className="font-display text-white text-[11px] font-black tracking-[0.32em] uppercase">Client</span>
              <span aria-hidden className="absolute inset-0 border-2 border-[#b59a5d]/30 rounded-full scale-125" />
            </div>
          </div>
          {/* right column: remaining */}
          <div className="space-y-4 md:pt-12">
            {agencies.slice(2).map((a) => <Card key={a.id} agency={a} lang={lang} side="right" />)}
          </div>
        </div>
      </div>
    </DiagramShell>
  );
}

function Card({ agency, lang, side }: { agency: AgencyNode; lang: Lang; side: "left" | "right" }) {
  return (
    <div className={`relative bg-white border border-[#e9e3d2] p-5 ${side === "left" ? "md:border-r-4 md:border-r-[#b59a5d]" : "md:border-l-4 md:border-l-[#b59a5d]"}`}>
      <div className="font-display text-[10px] font-black tracking-[0.28em] uppercase text-[#b59a5d] mb-2">Agency</div>
      <div className="text-lg font-extrabold text-[#0f172a] tracking-tight mb-1">{pick(agency.name, lang)}</div>
      <p className="text-[13px] text-[#6b5f48] mb-3 leading-relaxed">{pick(agency.role, lang)}</p>
      <div className="text-xs space-y-1">
        <a href={`tel:${agency.phone}`} className="block font-mono text-[#0f172a] hover:text-[#b59a5d]">☎ {agency.phone}</a>
        <a href={agency.url} target="_blank" rel="noreferrer" className="block text-[#6b5f48] hover:text-[#b59a5d] underline underline-offset-4">
          {new URL(agency.url).hostname}
        </a>
      </div>
    </div>
  );
}

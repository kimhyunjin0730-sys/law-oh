import { useMemo, useState } from "react";
import type { DecisionNode, Lang } from "../../../lib/legal/types";
import { pick } from "../../../lib/legal/content";
import { DiagramShell } from "./DiagramShell";

interface Props {
  rootId: string;
  nodes: DecisionNode[];
  lang: Lang;
  title: string;
  ariaSummary: string;
}

function byId(nodes: DecisionNode[]) {
  const m = new Map<string, DecisionNode>();
  for (const n of nodes) m.set(n.id, n);
  return m;
}

export function DecisionTreeDiagram({ rootId, nodes, lang, title, ariaSummary }: Props) {
  const map = useMemo(() => byId(nodes), [nodes]);
  const [path, setPath] = useState<string[]>([rootId]);
  const [leaf, setLeaf] = useState<string | null>(null);

  const currentId = path[path.length - 1];
  const current = map.get(currentId);

  const answer = (choice: "yes" | "no") => {
    if (!current) return;
    const target = current[choice];
    if ("leafAnchor" in target) {
      setLeaf(target.leafAnchor);
    } else if ("nextId" in target) {
      setPath((p) => [...p, target.nextId]);
    }
  };

  const reset = () => {
    setPath([rootId]);
    setLeaf(null);
  };

  const fallback = (
    <ol className="space-y-3 list-decimal list-inside">
      {nodes.map((n) => (
        <li key={n.id}>
          <strong>{n.id}</strong>: {pick(n.question, lang)}
        </li>
      ))}
    </ol>
  );

  return (
    <DiagramShell id="diagram-decision" eyebrow="Diagram 02" title={title} ariaSummary={ariaSummary} textFallback={fallback}>
      <div className="max-w-[720px] mx-auto">
        {leaf ? (
          <div className="border border-[#b59a5d] bg-white p-10 text-center">
            <p className="font-display text-[11px] font-black tracking-[0.28em] uppercase text-[#b59a5d] mb-4">Result</p>
            <p className="text-xl font-bold text-[#0f172a]">
              다음 섹션으로 이동하세요: <a href={`#${leaf}`} className="underline decoration-[#b59a5d] underline-offset-4">#{leaf}</a>
            </p>
            <button type="button" onClick={reset} className="mt-8 text-xs font-bold uppercase tracking-widest text-[#6b5f48] border-b border-[#6b5f48] pb-1">
              Restart
            </button>
          </div>
        ) : current ? (
          <div className="border border-[#e9e3d2] bg-white p-10">
            <p className="font-display text-[11px] font-black tracking-[0.28em] uppercase text-[#b59a5d] mb-4">
              Step {path.length}
            </p>
            <p className="text-2xl font-bold text-[#0f172a] leading-snug mb-8">{pick(current.question, lang)}</p>
            <div className="flex gap-3">
              <button type="button" onClick={() => answer("yes")} className="flex-1 bg-[#0f172a] text-white py-4 font-bold tracking-wide hover:bg-[#1e293b]">
                예 / Yes
              </button>
              <button type="button" onClick={() => answer("no")} className="flex-1 border border-[#0f172a] text-[#0f172a] py-4 font-bold tracking-wide hover:bg-[#0f172a] hover:text-white">
                아니오 / No
              </button>
            </div>
            {path.length > 1 && (
              <button type="button" onClick={reset} className="mt-6 text-xs font-bold uppercase tracking-widest text-[#6b5f48]">
                ← Restart
              </button>
            )}
          </div>
        ) : (
          <div className="text-center text-slate-500">No decision tree data.</div>
        )}
      </div>
    </DiagramShell>
  );
}

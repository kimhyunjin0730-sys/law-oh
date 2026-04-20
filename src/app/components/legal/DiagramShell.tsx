import { ReactNode, useState } from "react";

interface Props {
  id: string;
  title: string;         // already-localized title
  ariaSummary: string;   // screen-reader summary
  textFallback: ReactNode;
  children: ReactNode;
  eyebrow?: string;      // e.g. "Diagram 01"
}

export function DiagramShell({ id, title, ariaSummary, textFallback, children, eyebrow }: Props) {
  const [textMode, setTextMode] = useState(false);
  return (
    <section id={id} aria-label={ariaSummary} className="relative py-20 lg:py-28 border-t border-[#e9e3d2]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <header className="flex items-baseline justify-between mb-10">
          <div>
            {eyebrow && (
              <p className="font-display text-[10px] font-black tracking-[0.3em] uppercase text-[#b59a5d] mb-2">
                {eyebrow}
              </p>
            )}
            <h2 className="text-3xl lg:text-4xl font-black text-[#0f172a] tracking-tight">{title}</h2>
          </div>
          <button
            type="button"
            onClick={() => setTextMode((x) => !x)}
            className="text-xs font-bold uppercase tracking-widest text-[#6b5f48] hover:text-[#0f172a] transition-colors border-b border-[#6b5f48] pb-1"
            aria-pressed={textMode}
          >
            {textMode ? "Show diagram" : "Text version"}
          </button>
        </header>
        {textMode ? (
          <div className="prose prose-slate max-w-none">{textFallback}</div>
        ) : (
          children
        )}
      </div>
    </section>
  );
}

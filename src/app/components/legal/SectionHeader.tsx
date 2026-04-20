import { Check } from "lucide-react";

interface Props {
  id: string;
  title: string;
  count?: number;
  total?: number;
}

export function SectionHeader({ id, title, count, total }: Props) {
  return (
    <header
      id={id}
      className="flex items-center gap-3.5 pb-4 mb-7 border-b border-[#dbe1ea] scroll-mt-24"
    >
      <span className="w-7 h-7 grid place-items-center rounded-full bg-[#0f172a] flex-shrink-0">
        <Check size={14} strokeWidth={3} className="text-white" />
      </span>
      <h2 className="font-serif-ko font-bold text-[26px] sm:text-[28px] tracking-tight text-[#0f172a] flex-1 leading-tight">
        {title}
      </h2>
      {count != null && total != null ? (
        <span className="font-mono text-[11px] font-bold tracking-[0.14em] text-[#94a3b8] tabular-nums">
          {String(count).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </span>
      ) : null}
    </header>
  );
}

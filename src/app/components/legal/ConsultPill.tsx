import { Link } from "react-router";

interface Props {
  href?: string;
  label?: string;
}

export function ConsultPill({ href = "/#consult", label = "1:1 즉시 상담" }: Props) {
  return (
    <Link
      to={href}
      className="fixed bottom-8 right-8 z-50 inline-flex items-center gap-2.5 px-5 py-4 rounded-full bg-[#0f172a] text-white font-bold text-[14.5px] tracking-tight shadow-[0_14px_36px_-10px_rgba(15,23,42,.55)] transition-all hover:-translate-y-0.5 hover:bg-[#020617] hover:shadow-[0_22px_44px_-12px_rgba(15,23,42,.6)] font-serif-ko"
      aria-label={label}
    >
      <span className="w-2 h-2 rounded-full bg-[#fff3a8] consult-dot" aria-hidden />
      {label}
      <style>{`
        .consult-dot { animation: consult-pulse 2s infinite; }
        @keyframes consult-pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.4); opacity: .5; }
        }
      `}</style>
    </Link>
  );
}

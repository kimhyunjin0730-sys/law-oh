import { FileText, MessageCircle, Phone } from "lucide-react";
import { WeChatDialog } from "../WeChatDialog";

export function LegalQuickMenu() {
  return (
    <aside
      aria-label="빠른 상담"
      className="hidden lg:flex fixed right-0 top-1/2 -translate-y-1/2 z-40 flex-col rounded-l-md overflow-hidden shadow-[-10px_14px_40px_-16px_rgba(15,23,42,.5)] bg-[#020617] text-white"
    >
      <div className="bg-[#0f172a] py-3.5 px-4 text-center border-b border-white/10">
        <div className="font-serif-ko font-bold text-[13px] leading-tight text-[#fff3a8]">
          Quick<br />Menu
        </div>
        <div className="font-mono text-[8px] font-bold tracking-[0.16em] uppercase text-[#fff3a8]/60 mt-1">
          상담 채널
        </div>
      </div>
      <a
        href="/#consult"
        className="flex flex-col items-center gap-1.5 px-4 py-3.5 text-[11px] font-semibold tracking-tight border-b border-white/[0.08] hover:bg-[#0f172a] transition-colors"
      >
        <span className="w-7 h-7 grid place-items-center rounded-full bg-white/[0.08]">
          <FileText size={14} strokeWidth={1.8} />
        </span>
        온라인<br />상담
      </a>
      <WeChatDialog>
        <button
          type="button"
          className="flex flex-col items-center gap-1.5 px-4 py-3.5 text-[11px] font-semibold tracking-tight border-b border-white/[0.08] hover:bg-[#0f172a] transition-colors w-full"
        >
          <span className="w-7 h-7 grid place-items-center rounded-full bg-[#09BB07]">
            <MessageCircle size={14} strokeWidth={1.8} className="text-white" />
          </span>
          위챗<br />상담
        </button>
      </WeChatDialog>
      <a
        href="tel:82-10-2999-6910"
        className="flex flex-col items-center gap-1.5 px-4 py-3.5 text-[11px] font-semibold tracking-tight hover:bg-[#0f172a] transition-colors"
      >
        <span className="w-7 h-7 grid place-items-center rounded-full bg-[#b59a5d]">
          <Phone size={14} strokeWidth={1.8} className="text-white" />
        </span>
        전화<br />상담
      </a>
    </aside>
  );
}

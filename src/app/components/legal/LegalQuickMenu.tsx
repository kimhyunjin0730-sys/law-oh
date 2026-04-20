import { FileText, MessageCircle, Phone } from "lucide-react";
import { WeChatDialog } from "../WeChatDialog";
import { useLanguage } from "../../context/LanguageContext";

export function LegalQuickMenu() {
  const { language } = useLanguage();

  const content = {
    ko: { channel: "상담 채널", online: "온라인", chat: "상담", wechat: "위챗", phone: "전화" },
    zh: { channel: "咨询渠道", online: "在线", chat: "咨询", wechat: "微信", phone: "电话" },
    en: { channel: "Contact", online: "Online", chat: "Form", wechat: "WeChat", phone: "Phone" }
  }[language];

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
          {content.channel}
        </div>
      </div>
      <a
        href="/#consult"
        className="flex flex-col items-center gap-1.5 px-4 py-3.5 text-[11px] font-semibold tracking-tight border-b border-white/[0.08] hover:bg-[#0f172a] transition-colors"
      >
        <span className="w-7 h-7 grid place-items-center rounded-full bg-white/[0.08]">
          <FileText size={14} strokeWidth={1.8} />
        </span>
        {content.online}<br />{content.chat}
      </a>
      <WeChatDialog>
        <button
          type="button"
          className="flex flex-col items-center gap-1.5 px-4 py-3.5 text-[11px] font-semibold tracking-tight border-b border-white/[0.08] hover:bg-[#0f172a] transition-colors w-full"
        >
          <span className="w-7 h-7 grid place-items-center rounded-full bg-[#09BB07]">
            <MessageCircle size={14} strokeWidth={1.8} className="text-white" />
          </span>
          {content.wechat}<br />{content.chat}
        </button>
      </WeChatDialog>
      <a
        href="tel:82-10-2999-6910"
        className="flex flex-col items-center gap-1.5 px-4 py-3.5 text-[11px] font-semibold tracking-tight hover:bg-[#0f172a] transition-colors"
      >
        <span className="w-7 h-7 grid place-items-center rounded-full bg-[#2563EB]">
          <Phone size={14} strokeWidth={1.8} className="text-white" />
        </span>
        {content.phone}<br />{content.chat}
      </a>
    </aside>
  );
}

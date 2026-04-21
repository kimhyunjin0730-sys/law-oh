import { FileText, MessageCircle, Phone } from "lucide-react";
import { WeChatDialog } from "../WeChatDialog";
import { useLanguage } from "../../context/LanguageContext";

export function LegalQuickMenu() {
  const { language } = useLanguage();

  const content = {
    ko: { title: <>Quick<br />Menu</>, online: "온라인상담", wechat: "위챗상담", phone: "전화상담" },
    zh: { title: <>快捷<br />菜单</>, online: "在线咨询", wechat: "微信咨询", phone: "电话咨询" },
    en: { title: <>Quick<br />Menu</>, online: "Online", wechat: "WeChat", phone: "Phone" }
  }[language];

  return (
    <aside
      aria-label="빠른 상담"
      className="hidden lg:flex fixed right-5 top-1/2 -translate-y-1/2 z-40"
    >
      <div className="bg-[#0f172a]/92 backdrop-blur-xl border border-white/15 rounded-[28px] p-3 flex flex-col gap-2.5 shadow-[0_20px_60px_-20px_rgba(15,23,42,0.45)]">
        <div className="text-center py-2 px-2">
          <div className="text-[10px] font-black tracking-[0.18em] uppercase text-white leading-tight">
            {content.title}
          </div>
        </div>
        <a
          href="/#consult"
          className="group w-[78px] h-[78px] flex flex-col items-center justify-center gap-1 bg-white text-[#0a0a0a] rounded-2xl hover:scale-[1.04] transition-transform"
        >
          <FileText size={20} strokeWidth={2} />
          <span className="text-[11px] font-extrabold mt-0.5">{content.online}</span>
        </a>
        <WeChatDialog>
          <button
            type="button"
            className="group w-[78px] h-[78px] flex flex-col items-center justify-center gap-1 bg-[#09BB07] text-white rounded-2xl hover:scale-[1.04] transition-transform"
          >
            <MessageCircle size={20} strokeWidth={2} />
            <span className="text-[11px] font-extrabold mt-0.5">{content.wechat}</span>
          </button>
        </WeChatDialog>
        <a
          href="tel:82-10-2999-6910"
          className="group w-[78px] h-[78px] flex flex-col items-center justify-center gap-1 bg-[#2563EB] text-white rounded-2xl hover:scale-[1.04] transition-transform"
        >
          <Phone size={20} strokeWidth={2} />
          <span className="text-[11px] font-extrabold mt-0.5">{content.phone}</span>
        </a>
      </div>
    </aside>
  );
}

import { Link } from "react-router";
import { ArrowRight, Home as HomeIcon, Phone } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export function NotFound() {
  const { language } = useLanguage();

  const c = {
    ko: {
      eyebrow: "404 · Page Not Found",
      title: "찾으시는 페이지가 없습니다.",
      desc: "주소가 변경되었거나 존재하지 않는 페이지입니다. 아래 경로로 이동하시거나 비컴에 직접 문의 주세요.",
      home: "홈으로",
      services: "주요 업무",
      legal: "법률정보",
      consult: "전화 상담",
    },
    zh: {
      eyebrow: "404 · 页面未找到",
      title: "您访问的页面不存在。",
      desc: "网址可能已变更或页面不存在。请通过以下路径访问，或直接联系BECOME律师事务所。",
      home: "返回首页",
      services: "主要业务",
      legal: "法律信息",
      consult: "电话咨询",
    },
    en: {
      eyebrow: "404 · Page Not Found",
      title: "We couldn't find that page.",
      desc: "The address may have changed or the page no longer exists. Try one of these, or contact BECOME directly.",
      home: "Go home",
      services: "Practice Areas",
      legal: "Legal Info",
      consult: "Call us",
    },
  }[language];

  return (
    <div className="bg-white min-h-screen pt-28 md:pt-36 pb-24 md:pb-32">
      <div className="max-w-[820px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="font-mono text-[11px] font-bold tracking-[0.28em] uppercase text-[#2563EB] mb-6">
          {c.eyebrow}
        </p>
        <p
          aria-hidden
          className="font-serif font-black italic text-[7rem] md:text-[10rem] lg:text-[12rem] leading-none tracking-tight text-[#0f172a]/[0.06] select-none -mt-4 mb-2"
        >
          404
        </p>
        <h1 className="text-3xl md:text-5xl font-extrabold text-[#0f172a] tracking-tight leading-tight mb-5">
          {c.title}
        </h1>
        <p className="text-base md:text-lg text-slate-600 font-medium leading-relaxed max-w-[560px] mx-auto mb-12">
          {c.desc}
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          <Link
            to="/"
            className="group inline-flex items-center gap-2 bg-[#0f172a] hover:bg-[#2563EB] text-white px-7 py-3.5 font-bold text-sm md:text-base transition-colors"
          >
            <HomeIcon size={16} strokeWidth={2.25} />
            {c.home}
            <ArrowRight size={16} strokeWidth={2.5} className="transition-transform group-hover:translate-x-0.5" />
          </Link>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 border border-slate-300 hover:border-[#0f172a] text-[#0f172a] px-6 py-3.5 font-bold text-sm md:text-base transition-colors"
          >
            {c.services}
          </Link>
          <Link
            to="/legal"
            className="inline-flex items-center gap-2 border border-slate-300 hover:border-[#0f172a] text-[#0f172a] px-6 py-3.5 font-bold text-sm md:text-base transition-colors"
          >
            {c.legal}
          </Link>
          <a
            href="tel:82-10-2999-6910"
            className="inline-flex items-center gap-2 border border-slate-300 hover:border-[#0f172a] text-[#0f172a] px-6 py-3.5 font-bold text-sm md:text-base transition-colors"
          >
            <Phone size={16} strokeWidth={2.25} className="text-[#2563EB]" />
            {c.consult}
          </a>
        </div>
      </div>
    </div>
  );
}

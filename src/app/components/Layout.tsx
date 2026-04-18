import { Outlet, Link, useLocation } from "react-router";
import { Menu, X, Phone, MessageCircle, ArrowRight, Globe } from "lucide-react";
import { useState, useEffect } from "react";
import clsx from "clsx";
import { useLanguage } from "./context/LanguageContext";

export function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: t("nav.home"), path: "/" },
    { name: t("nav.about"), path: "/about" },
    { name: t("nav.services"), path: "/services" },
    { name: t("nav.cases"), path: "/cases" },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans bg-white text-slate-900 tracking-tight">
      {/* Top Utility Banner */}
      <div className="bg-[#0f172a] text-slate-300 text-xs py-2 px-4 flex justify-between items-center sm:px-6 lg:px-8">
        <div className="flex gap-6">
          <span className="flex items-center gap-2 tracking-wide font-medium"><Phone size={14} className="text-[#b59a5d]"/> {t("top.consult")} : 82-10-2999-6910</span>
          <span className="hidden sm:flex items-center gap-2 tracking-wide font-medium"><MessageCircle size={14} className="text-[#b59a5d]"/> {t("top.wechat")} : wudongxuan002</span>
        </div>
        <div className="flex items-center gap-6">
          <div className="hidden lg:block text-slate-400 tracking-wider">
            {t("top.slogan")}
          </div>
          {/* Language Switcher */}
          <div className="flex items-center gap-2 border-l border-slate-700 pl-6">
            <Globe size={14} className="text-slate-400" />
            <button onClick={() => setLanguage('ko')} className={clsx("hover:text-white font-bold transition-colors", language === 'ko' ? "text-white" : "text-slate-500")}>KO</button>
            <span className="text-slate-600">|</span>
            <button onClick={() => setLanguage('zh')} className={clsx("hover:text-white font-bold transition-colors", language === 'zh' ? "text-white" : "text-slate-500")}>ZH</button>
            <span className="text-slate-600">|</span>
            <button onClick={() => setLanguage('en')} className={clsx("hover:text-white font-bold transition-colors", language === 'en' ? "text-white" : "text-slate-500")}>EN</button>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-24">
            <div className="flex items-center">
              <Link to="/" className="flex-shrink-0 flex items-center gap-3">
                <div className="flex flex-col items-center justify-center border-2 border-slate-900 px-2 py-1">
                  <span className="text-xl font-bold text-slate-900 leading-none tracking-tighter">BECOME</span>
                  <span className="text-[10px] text-slate-900 font-bold tracking-widest uppercase">LAW FIRM</span>
                </div>
                <div className="flex flex-col ml-1 border-l border-slate-300 pl-3">
                  <span className="text-xl font-bold text-slate-900 leading-tight">법률사무소 비컴</span>
                  <span className="text-xs text-slate-500 font-medium">중국어 특화 법률 서비스</span>
                </div>
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center">
              <div className="flex space-x-12 mr-10">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={clsx(
                      "inline-flex items-center text-lg font-bold transition-colors py-8 border-b-2",
                      location.pathname === link.path
                        ? "text-[#0f172a] border-[#0f172a]"
                        : "text-slate-600 border-transparent hover:text-[#0f172a]"
                    )}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
              <a
                href="https://weixin.qq.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-[#b59a5d] text-white text-sm font-bold shadow-md hover:bg-[#a38a53] transition-colors gap-2"
              >
                <MessageCircle size={18} />
                {t("nav.wechat")}
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center md:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 text-slate-600 hover:text-slate-900 focus:outline-none"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="block h-8 w-8" aria-hidden="true" /> : <Menu className="block h-8 w-8" aria-hidden="true" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 absolute w-full shadow-lg">
            <div className="pt-2 pb-6 space-y-1 px-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={clsx(
                    "block px-4 py-4 text-lg font-bold border-b border-slate-100",
                    location.pathname === link.path
                      ? "text-[#0f172a]"
                      : "text-slate-600 hover:text-[#0f172a]"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <div className="py-6 flex flex-col gap-3">
                 <a
                  href="#"
                  className="w-full flex items-center justify-center px-4 py-4 bg-[#b59a5d] text-base font-bold text-white shadow-sm gap-2"
                >
                  <MessageCircle size={18} />
                  위챗 24시간 상담 (wudongxuan002)
                </a>
                <a
                  href="tel:82-10-2999-6910"
                  className="w-full flex items-center justify-center px-4 py-4 border border-slate-300 text-base font-bold text-slate-800 gap-2"
                >
                  <Phone size={18} />
                  전화 상담 연결
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow bg-white">
        <Outlet />
      </main>

      {/* Floating Action Buttons */}
      <div className="fixed right-4 bottom-8 z-50 flex flex-col gap-2">
        <a href="tel:821029996910" className="w-14 h-14 bg-[#0f172a] text-white flex flex-col items-center justify-center shadow-lg hover:-translate-y-1 transition-transform border border-slate-700">
          <Phone size={20} className="mb-1" />
          <span className="text-[10px] font-bold">전화상담</span>
        </a>
        <a href="#" className="w-14 h-14 bg-[#b59a5d] text-white flex flex-col items-center justify-center shadow-lg hover:-translate-y-1 transition-transform">
          <MessageCircle size={20} className="mb-1" />
          <span className="text-[10px] font-bold">위챗상담</span>
        </a>
      </div>

      {/* Footer */}
      <footer className="bg-[#111111] text-slate-400 py-16 border-t-[6px] border-[#b59a5d]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="col-span-1 md:col-span-4">
              <div className="flex items-center gap-3 mb-6 opacity-90">
                <div className="flex flex-col items-center justify-center border-2 border-white px-2 py-1 text-white">
                  <span className="text-xl font-bold leading-none tracking-tighter">BECOME</span>
                </div>
                <div className="flex flex-col ml-1 border-l border-slate-600 pl-3">
                  <span className="text-xl font-bold text-white leading-tight">{t("nav.home")}</span>
                </div>
              </div>
              <p className="text-sm text-slate-500 max-w-sm mb-6 leading-relaxed font-medium">
                {t("footer.desc")}
              </p>
            </div>
            
            <div className="col-span-1 md:col-span-4">
              <h3 className="text-sm font-bold text-white tracking-widest uppercase mb-6">{t("footer.contact")}</h3>
              <div className="space-y-3 text-sm font-medium text-slate-400">
                <p className="flex items-center gap-2"><strong className="text-slate-300 w-16">대표변호사</strong> 오동현</p>
                <p className="flex items-center gap-2"><strong className="text-slate-300 w-16">전화번호</strong> 82-10-2999-6910</p>
                <p className="flex items-center gap-2"><strong className="text-slate-300 w-16">이메일</strong> lawohdh@gmail.com</p>
                <p className="flex items-center gap-2"><strong className="text-slate-300 w-16">WeChat</strong> wudongxuan002</p>
              </div>
            </div>

            <div className="col-span-1 md:col-span-4">
              <h3 className="text-sm font-bold text-white tracking-widest uppercase mb-6">{t("footer.links")}</h3>
              <ul className="space-y-3 text-sm font-medium">
                <li><Link to="/about" className="text-slate-400 hover:text-white transition-colors flex items-center gap-2"><ArrowRight size={14}/> {t("nav.about")}</Link></li>
                <li><Link to="/services" className="text-slate-400 hover:text-white transition-colors flex items-center gap-2"><ArrowRight size={14}/> {t("nav.services")}</Link></li>
                <li><Link to="/cases" className="text-slate-400 hover:text-white transition-colors flex items-center gap-2"><ArrowRight size={14}/> {t("nav.cases")}</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-16 pt-8 border-t border-slate-800 text-xs font-medium text-slate-500 flex flex-col md:flex-row justify-between items-center gap-4">
            <p>{t("footer.rights")}</p>
            <p>{t("footer.disclaimer")}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

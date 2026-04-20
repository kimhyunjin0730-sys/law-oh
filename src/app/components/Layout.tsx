import { Outlet, Link, useLocation } from "react-router";
import { Menu, X, Phone, MessageCircle, ArrowRight, Globe } from "lucide-react";
import { useState, useEffect } from "react";
import clsx from "clsx";
import { useLanguage } from "../context/LanguageContext";
import { WeChatDialog } from "./WeChatDialog";

export function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "start" }), 80);
      } else {
        window.scrollTo(0, 0);
      }
    } else {
      window.scrollTo(0, 0);
    }
    setIsMenuOpen(false);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { name: t("nav.home"), path: "/" },
    { name: t("nav.about"), path: "/about" },
    { name: t("nav.services"), path: "/services" },
    { name: t("nav.cases"), path: "/cases" },
    { name: t("nav.legal"), path: "/legal" },
  ];

  const isHome = location.pathname === "/";
  const overlay = isHome && !scrolled; // transparent header floating over hero photo

  return (
    <div className="min-h-screen flex flex-col font-sans bg-white text-slate-900 tracking-tight">
      {/* Top Utility Banner */}
      <div
        className={clsx(
          "text-xs py-2 px-4 flex justify-between items-center sm:px-6 lg:px-8 relative z-40 transition-colors duration-300",
          overlay ? "bg-transparent text-slate-200" : "bg-[#0f172a] text-slate-300"
        )}
      >
        <div className="flex gap-6">
          <a
            href="tel:82-10-2999-6910"
            className="flex items-center gap-2 tracking-wide font-medium hover:text-white transition-colors"
          >
            <Phone size={14} className="text-[#b59a5d]" /> {t("top.consult")} : 82-10-2999-6910
          </a>
          <WeChatDialog>
            <button
              type="button"
              className="hidden sm:flex items-center gap-2 tracking-wide font-medium hover:text-white transition-colors"
            >
              <MessageCircle size={14} className="text-[#b59a5d]" /> {t("top.wechat")} : wudongxuan002
            </button>
          </WeChatDialog>
        </div>
        <div className="flex items-center gap-6">
          <div className={clsx("hidden lg:block transition-colors duration-300", overlay ? "text-slate-300/90" : "text-slate-400")}>
            {t("top.slogan")}
          </div>
          {/* Language Switcher */}
          <div className={clsx("flex items-center gap-2 border-l pl-6 transition-colors duration-300", overlay ? "border-white/20" : "border-slate-700")}>
            <Globe size={14} className={clsx("transition-colors duration-300", overlay ? "text-slate-300/80" : "text-slate-400")} />
            <button onClick={() => setLanguage('ko')} className={clsx("hover:text-white font-bold transition-colors", language === 'ko' ? "text-white" : overlay ? "text-slate-400" : "text-slate-500")}>KO</button>
            <span className={clsx("transition-colors", overlay ? "text-white/20" : "text-slate-600")}>|</span>
            <button onClick={() => setLanguage('zh')} className={clsx("hover:text-white font-bold transition-colors", language === 'zh' ? "text-white" : overlay ? "text-slate-400" : "text-slate-500")}>ZH</button>
            <span className={clsx("transition-colors", overlay ? "text-white/20" : "text-slate-600")}>|</span>
            <button onClick={() => setLanguage('en')} className={clsx("hover:text-white font-bold transition-colors", language === 'en' ? "text-white" : overlay ? "text-slate-400" : "text-slate-500")}>EN</button>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={clsx(
          "sticky top-0 z-50 transition-colors duration-300",
          overlay
            ? "bg-transparent"
            : "bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm"
        )}
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-24">
            <div className="flex items-center">
              <Link to="/" className="flex-shrink-0 flex items-center gap-3">
                <div className={clsx("flex flex-col items-center justify-center border-2 px-2 py-1 transition-colors duration-300", overlay ? "border-white" : "border-slate-900")}>
                  <span className={clsx("font-display text-xl font-black leading-none tracking-[0.02em] transition-colors duration-300", overlay ? "text-white" : "text-slate-900")}>HANGYO</span>
                  <span className={clsx("font-display text-[10px] font-extrabold tracking-[0.24em] uppercase transition-colors duration-300", overlay ? "text-white" : "text-slate-900")}>LAW FIRM</span>
                </div>
                <div className={clsx("flex flex-col ml-1 border-l pl-3 transition-colors duration-300", overlay ? "border-white/30" : "border-slate-300")}>
                  <span className={clsx("text-xl font-bold leading-tight transition-colors duration-300", overlay ? "text-white" : "text-slate-900")}>법률사무소 한교</span>
                  <span className={clsx("text-xs font-medium transition-colors duration-300", overlay ? "text-slate-300" : "text-slate-500")}>중국어 특화 법률 서비스</span>
                </div>
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center">
              <div className="flex space-x-12 mr-10">
                {navLinks.map((link) => {
                  const active = location.pathname === link.path;
                  return (
                    <Link
                      key={link.path}
                      to={link.path}
                      className={clsx(
                        "inline-flex items-center text-lg font-bold transition-colors duration-300 py-8 border-b-2",
                        active
                          ? overlay
                            ? "text-white border-[#b59a5d]"
                            : "text-[#0f172a] border-[#0f172a]"
                          : overlay
                            ? "text-slate-200 border-transparent hover:text-white"
                            : "text-slate-600 border-transparent hover:text-[#0f172a]"
                      )}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </div>
              <WeChatDialog>
                <button
                  type="button"
                  className="inline-flex items-center justify-center px-6 py-3 bg-[#b59a5d] text-white text-sm font-bold shadow-md hover:bg-[#a38a53] transition-colors gap-2"
                >
                  <MessageCircle size={18} />
                  {t("nav.wechat")}
                </button>
              </WeChatDialog>
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center md:hidden">
              <button
                type="button"
                className={clsx("inline-flex items-center justify-center p-2 focus:outline-none transition-colors duration-300", overlay ? "text-white hover:text-slate-200" : "text-slate-600 hover:text-slate-900")}
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
                 <WeChatDialog>
                  <button
                    type="button"
                    className="w-full flex items-center justify-center px-4 py-4 bg-[#b59a5d] text-base font-bold text-white shadow-sm gap-2"
                  >
                    <MessageCircle size={18} />
                    위챗 24시간 상담 (wudongxuan002)
                  </button>
                </WeChatDialog>
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

      {/* Main Content — on home, pull up so hero photo extends behind header */}
      <main className={clsx("flex-grow", isHome ? "-mt-[128px]" : "bg-white")}>
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-[#111111] text-slate-400 py-16 border-t-[6px] border-[#b59a5d]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="col-span-1 md:col-span-4">
              <div className="flex items-center gap-3 mb-6 opacity-90">
                <div className="flex flex-col items-center justify-center border-2 border-white px-2 py-1 text-white">
                  <span className="text-xl font-bold leading-none tracking-tighter">HANGYO</span>
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
                <p className="flex items-center gap-2"><strong className="text-slate-300 w-16">대표 변호사</strong> 오동현</p>
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

import { Outlet, Link, useLocation } from "react-router";
import { Menu, X, Phone, MessageCircle, ArrowRight, ArrowUpRight } from "lucide-react";
import { useState, useEffect } from "react";
import clsx from "clsx";
import { useLanguage } from "../context/LanguageContext";

const SERIF = '"Cormorant Garamond", "Noto Serif KR", "Apple SD Gothic Neo", serif';
const MONO = '"JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace';

export function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMenuOpen]);

  const navLinks = [
    { name: t("nav.home"), path: "/" },
    { name: t("nav.about"), path: "/about" },
    { name: t("nav.services"), path: "/services" },
    { name: t("nav.cases"), path: "/cases" },
  ];

  const langs: { code: "ko" | "zh" | "en"; label: string; native: string }[] = [
    { code: "ko", label: "KO", native: "한국어" },
    { code: "zh", label: "ZH", native: "中文" },
    { code: "en", label: "EN", native: "English" },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans bg-white text-[#0a0a0a] tracking-tight">
      {/* ─── HEADER ─────────────────────────────────────────────────── */}
      <header className="sticky top-0 z-50">
        {/* Top Utility Banner — editorial ink strip */}
        <div
          className={clsx(
            "bg-[#0a0a0a] text-[#d9d2bf] overflow-hidden transition-[max-height,opacity] duration-500 ease-[cubic-bezier(0.77,0,0.175,1)]",
            scrolled ? "max-h-0 opacity-0" : "max-h-12 opacity-100"
          )}
        >
          <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 h-10 flex items-center justify-between text-[11px]">
            <div className="flex items-center gap-7">
              <span className="flex items-center gap-2.5 tabular-nums tracking-[0.08em]">
                <span aria-hidden className="inline-block h-px w-3 bg-[#b59a5d]" />
                <Phone size={11} strokeWidth={1.5} className="text-[#b59a5d]" />
                82 · 10 · 2999 · 6910
              </span>
              <span className="hidden md:flex items-center gap-2.5 tracking-[0.08em]">
                <span aria-hidden className="inline-block h-px w-3 bg-[#b59a5d]" />
                <MessageCircle size={11} strokeWidth={1.5} className="text-[#b59a5d]" />
                WeChat · wudongxuan002
              </span>
            </div>
            <div className="flex items-center gap-7">
              <span
                className="hidden lg:inline-flex items-center gap-3 uppercase tracking-[0.32em] text-[#938a75] text-[10px]"
                style={{ fontFamily: MONO }}
              >
                <span aria-hidden className="inline-block h-px w-5 bg-[#3a3528]" />
                Bilingual Legal Counsel — KR · CN
              </span>
              <div className="flex items-center gap-2" role="group" aria-label="Language selector">
                {langs.map((l, i) => (
                  <div key={l.code} className="flex items-center gap-2">
                    <button
                      onClick={() => setLanguage(l.code)}
                      className={clsx(
                        "group relative py-1 text-[11px] font-semibold tracking-[0.18em] transition-colors",
                        language === l.code ? "text-white" : "text-[#6f6857] hover:text-[#d9d2bf]"
                      )}
                      aria-pressed={language === l.code}
                    >
                      {l.label}
                      <span
                        aria-hidden
                        className={clsx(
                          "absolute left-0 right-0 -bottom-0.5 h-px bg-[#b59a5d] origin-center transition-transform duration-300",
                          language === l.code ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                        )}
                      />
                    </button>
                    {i < langs.length - 1 && (
                      <span aria-hidden className="text-[#3a3528] text-[9px]">·</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Main Navbar — ivory paper masthead */}
        <nav
          className={clsx(
            "relative bg-white/95 backdrop-blur-md transition-[box-shadow] duration-500",
            scrolled ? "shadow-[0_1px_0_rgba(10,10,10,0.06),0_12px_40px_-24px_rgba(10,10,10,0.18)]" : "shadow-none"
          )}
        >
          <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
            <div
              className={clsx(
                "grid grid-cols-[auto_1fr_auto] items-center gap-6 lg:gap-10 transition-[height] duration-500 ease-[cubic-bezier(0.77,0,0.175,1)]",
                scrolled ? "h-[68px]" : "h-[96px]"
              )}
            >
              {/* Brand lockup — seal + serif wordmark */}
              <Link to="/" className="group flex items-center gap-4 lg:gap-5 select-none" aria-label="Become Law Firm — Home">
                {/* Monogram seal */}
                <div
                  className={clsx(
                    "relative flex items-center justify-center border border-[#0a0a0a] transition-[width,height] duration-500",
                    scrolled ? "w-9 h-9" : "w-11 h-11"
                  )}
                >
                  <span aria-hidden className="absolute inset-[3px] border border-[#b59a5d]/50" />
                  <span
                    className="relative text-[#0a0a0a] leading-none"
                    style={{ fontFamily: SERIF, fontStyle: "italic", fontWeight: 600, fontSize: scrolled ? 20 : 24 }}
                  >
                    B
                  </span>
                </div>
                {/* Wordmark */}
                <div className="flex flex-col">
                  <div className="flex items-baseline gap-2.5">
                    <span
                      className="text-[#0a0a0a] leading-none"
                      style={{ fontFamily: SERIF, fontWeight: 600, fontSize: scrolled ? 22 : 28, letterSpacing: "-0.01em" }}
                    >
                      Become
                    </span>
                    <span
                      className="text-[#b59a5d] uppercase tracking-[0.32em] hidden sm:inline"
                      style={{ fontFamily: MONO, fontSize: 9 }}
                    >
                      Law Firm
                    </span>
                  </div>
                  <span
                    className={clsx(
                      "text-[#6b6b6b] leading-tight mt-1.5 transition-opacity duration-300",
                      scrolled ? "opacity-0 h-0 mt-0" : "opacity-100"
                    )}
                    style={{ fontSize: 11, letterSpacing: "0.12em" }}
                  >
                    법률사무소 비컴 <span className="text-[#c9b07e] mx-1.5">·</span> 중국어 특화 법률 서비스
                  </span>
                </div>
              </Link>

              {/* Desktop Nav — numbered editorial links */}
              <div className="hidden md:flex items-center justify-center">
                <div className="flex items-center">
                  {navLinks.map((link, i) => {
                    const active = location.pathname === link.path;
                    return (
                      <div key={link.path} className="flex items-center">
                        <Link
                          to={link.path}
                          className={clsx(
                            "group relative inline-flex items-baseline gap-2 px-4 lg:px-5 py-2 transition-colors",
                            active ? "text-[#0a0a0a]" : "text-[#4a4a4a] hover:text-[#0a0a0a]"
                          )}
                        >
                          <span
                            className={clsx(
                              "transition-colors",
                              active ? "text-[#b59a5d]" : "text-[#c9b07e] group-hover:text-[#b59a5d]"
                            )}
                            style={{ fontFamily: MONO, fontSize: 10, letterSpacing: "0.1em" }}
                          >
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <span className="text-[14px] font-semibold tracking-[0.01em]">
                            {link.name}
                          </span>
                          <span
                            aria-hidden
                            className={clsx(
                              "absolute left-4 right-4 lg:left-5 lg:right-5 -bottom-0.5 h-px bg-[#0a0a0a] transition-transform duration-500 ease-[cubic-bezier(0.77,0,0.175,1)]",
                              active
                                ? "scale-x-100 origin-center"
                                : "scale-x-0 origin-left group-hover:scale-x-100"
                            )}
                          />
                        </Link>
                        {i < navLinks.length - 1 && (
                          <span aria-hidden className="inline-block h-3 w-px bg-[#d9d2bf]" />
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Right cluster — phone + CTA */}
              <div className="flex items-center gap-3 lg:gap-5 justify-self-end">
                <a
                  href="tel:821029996910"
                  className="hidden lg:inline-flex items-center gap-2 text-[13px] font-semibold text-[#0a0a0a] tabular-nums tracking-tight hover:text-[#b59a5d] transition-colors"
                >
                  <span className="flex flex-col items-end leading-none">
                    <span className="uppercase text-[9px] tracking-[0.24em] text-[#9a9080] mb-1" style={{ fontFamily: MONO }}>
                      Direct Line
                    </span>
                    <span>+82 10 2999 6910</span>
                  </span>
                </a>
                <span aria-hidden className="hidden lg:inline-block h-8 w-px bg-[#e5e0d3]" />
                <a
                  href="https://weixin.qq.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="hidden md:inline-flex relative overflow-hidden group items-center gap-2.5 px-5 lg:px-6 py-3 bg-[#0a0a0a] text-white"
                >
                  <span
                    aria-hidden
                    className="absolute inset-0 bg-[#b59a5d] -translate-x-full group-hover:translate-x-0 transition-transform duration-[600ms] ease-[cubic-bezier(0.77,0,0.175,1)]"
                  />
                  <MessageCircle size={14} strokeWidth={1.75} className="relative z-10" />
                  <span
                    className="relative z-10 uppercase font-semibold"
                    style={{ fontFamily: MONO, fontSize: 11, letterSpacing: "0.18em" }}
                  >
                    {t("nav.wechat")}
                  </span>
                  <ArrowUpRight size={14} strokeWidth={1.75} className="relative z-10 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>

                {/* Mobile menu button */}
                <button
                  type="button"
                  className="md:hidden relative w-11 h-11 inline-flex items-center justify-center border border-[#0a0a0a] text-[#0a0a0a]"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                  aria-expanded={isMenuOpen}
                >
                  {isMenuOpen ? <X size={18} strokeWidth={1.75} /> : <Menu size={18} strokeWidth={1.75} />}
                </button>
              </div>
            </div>
          </div>
          {/* Gold gradient hairline */}
          <div aria-hidden className="h-px bg-gradient-to-r from-transparent via-[#b59a5d]/60 to-transparent" />
        </nav>

        {/* Mobile Menu — full-screen editorial overlay */}
        <div
          className={clsx(
            "md:hidden fixed inset-0 top-0 z-40 bg-[#f7f4ec] transition-[opacity,transform] duration-500 ease-[cubic-bezier(0.77,0,0.175,1)]",
            isMenuOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-4 pointer-events-none"
          )}
        >
          {/* Spacer for sticky header */}
          <div className="h-[calc(40px+96px)]" aria-hidden />
          <div className="h-[calc(100dvh-136px)] overflow-y-auto px-6 pb-10 flex flex-col">
            <p
              className="uppercase text-[#9a9080] mb-10 mt-4"
              style={{ fontFamily: MONO, fontSize: 10, letterSpacing: "0.32em" }}
            >
              — Navigation
            </p>
            <nav aria-label="Mobile" className="flex flex-col">
              {navLinks.map((link, i) => {
                const active = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={clsx(
                      "group flex items-baseline gap-5 py-5 border-b border-[#d9d2bf] transition-colors",
                      active ? "text-[#0a0a0a]" : "text-[#3a3a3a]"
                    )}
                  >
                    <span
                      className={clsx(
                        "transition-colors",
                        active ? "text-[#b59a5d]" : "text-[#c9b07e]"
                      )}
                      style={{ fontFamily: MONO, fontSize: 11, letterSpacing: "0.14em" }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      className="flex-1"
                      style={{ fontFamily: SERIF, fontWeight: 500, fontSize: 36, letterSpacing: "-0.01em", lineHeight: 1 }}
                    >
                      {link.name}
                    </span>
                    <ArrowUpRight
                      size={22}
                      strokeWidth={1.25}
                      className={clsx(
                        "transition-all duration-500 -translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-100",
                        active && "translate-x-0 opacity-100 text-[#b59a5d]"
                      )}
                    />
                  </Link>
                );
              })}
            </nav>

            <div className="mt-10">
              <p
                className="uppercase text-[#9a9080] mb-4"
                style={{ fontFamily: MONO, fontSize: 10, letterSpacing: "0.32em" }}
              >
                — Consultation
              </p>
              <div className="flex flex-col gap-3">
                <a
                  href="https://weixin.qq.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full relative overflow-hidden group inline-flex items-center justify-between px-5 py-4 bg-[#0a0a0a] text-white"
                >
                  <span aria-hidden className="absolute inset-0 bg-[#b59a5d] -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                  <span className="relative flex items-center gap-3">
                    <MessageCircle size={16} strokeWidth={1.75} />
                    <span style={{ fontFamily: MONO, fontSize: 12, letterSpacing: "0.16em" }} className="uppercase font-semibold">
                      WeChat · wudongxuan002
                    </span>
                  </span>
                  <ArrowRight size={16} strokeWidth={1.5} className="relative" />
                </a>
                <a
                  href="tel:821029996910"
                  className="w-full inline-flex items-center justify-between px-5 py-4 border border-[#0a0a0a] text-[#0a0a0a]"
                >
                  <span className="flex items-center gap-3">
                    <Phone size={16} strokeWidth={1.75} />
                    <span className="tabular-nums font-semibold text-[14px]">+82 10 2999 6910</span>
                  </span>
                  <span style={{ fontFamily: MONO, fontSize: 10, letterSpacing: "0.24em" }} className="uppercase text-[#6b6b6b]">
                    Direct
                  </span>
                </a>
              </div>
            </div>

            <div className="mt-auto pt-10">
              <p
                className="italic text-[#6b6b6b] leading-snug"
                style={{ fontFamily: SERIF, fontSize: 18 }}
              >
                “{t("top.slogan")}”
              </p>
            </div>
          </div>
        </div>
      </header>

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

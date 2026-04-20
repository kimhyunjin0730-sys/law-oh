import { Link } from "react-router";
import { ArrowRight, CheckCircle2, MessageCircle, Phone, Globe, Scale, Users, FileText, Download, MapPin, GraduationCap, Layers, Hash, ShieldCheck, Briefcase, HeartHandshake, ArrowUpRight, Quote, Clock, Mail } from "lucide-react";
import { motion } from "motion/react";
import { SectionHeading } from "../components/SectionHeading";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { WeChatDialog } from "../components/WeChatDialog";

export function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section — Cinematic (extends behind transparent header) */}
      <section className="relative bg-[#050B14] text-white min-h-[900px] lg:min-h-[980px] flex items-end overflow-hidden pt-[128px]">
        {/* Background image */}
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1521791136064-7986c2920216?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=85&w=1920"
            alt="변호사 상담 이미지"
            className="w-full h-full object-cover object-center scale-[1.02]"
          />
          {/* Layered overlays — lightened so photo reads through more */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#050B14]/95 via-[#050B14]/55 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050B14] via-[#050B14]/20 to-[#050B14]/40" />
        </div>

        {/* Ghosted outline intro line — sits above main headline */}
        <div className="absolute top-[22%] sm:top-[24%] lg:top-[26%] left-0 right-0 pointer-events-none z-10">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.2, 0.65, 0.3, 0.9] }}
              className="font-black tracking-[-0.02em] leading-[1.05] text-[36px] sm:text-[56px] lg:text-[84px] xl:text-[96px]"
              style={{
                WebkitTextStroke: "1px rgba(255,255,255,0.28)",
                color: "transparent",
              }}
            >
              한국과 중국, 두 언어로<br className="hidden sm:block" />
              <span className="opacity-70">당신의 권리를 지킵니다</span>
            </motion.h2>
          </div>
        </div>

        {/* Main content bottom-left */}
        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pb-16 lg:pb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.2, 0.65, 0.3, 0.9] }}
            className="max-w-[900px]"
          >
            {/* Tiny editorial tag */}
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-[#b59a5d]" />
              <span className="font-display text-[11px] sm:text-xs font-extrabold tracking-[0.32em] uppercase text-[#b59a5d]">
                Become Law Firm · 법률사무소 비컴
              </span>
            </div>

            {/* Solid main headline — the punch */}
            <h1 className="font-black leading-[1.08] tracking-[-0.02em] text-[40px] sm:text-[56px] lg:text-[76px]">
              형사·민사·출입국에서<br className="hidden sm:block" />
              <span className="text-[#b59a5d]">명확한 해법</span>을 제시합니다
            </h1>

            {/* Chinese subtitle — restrained */}
            <p className="mt-6 text-base sm:text-lg lg:text-xl text-slate-300/90 font-medium tracking-wide">
              韩国与中国，用两种语言守护您的权利。
            </p>

            {/* Description */}
            <p className="mt-6 max-w-[640px] text-[15px] sm:text-base text-slate-300/80 leading-[1.85] font-medium">
              중국어 직접 상담이 가능한 오동현 변호사와 함께, 통역을 거치지 않고 사실관계부터 법률 분석까지 정확하게 의뢰인의 상황을 이해합니다.
            </p>

            {/* CTAs */}
            <div className="mt-10 lg:mt-12 flex flex-col sm:flex-row gap-3">
              <a
                href="tel:82-10-2999-6910"
                className="group inline-flex items-center justify-between gap-6 bg-white text-[#0a0a0a] hover:bg-slate-100 pl-6 pr-4 py-4 font-extrabold text-[15px] transition-all min-w-[280px]"
              >
                <span className="flex items-center gap-3">
                  <Phone size={18} strokeWidth={2.25} />
                  전화 상담하기
                </span>
                <span className="flex items-center gap-2 border-l border-slate-300 pl-4">
                  <span className="tabular-nums text-[13px] text-slate-500 font-bold">010-2999-6910</span>
                  <ArrowRight size={16} strokeWidth={2.25} className="transition-transform group-hover:translate-x-0.5" />
                </span>
              </a>
              <WeChatDialog>
                <button
                  type="button"
                  className="group inline-flex items-center justify-center gap-3 bg-[#b59a5d] hover:bg-[#a38a53] text-white px-8 py-4 font-extrabold text-[15px] transition-colors"
                >
                  <MessageCircle size={18} strokeWidth={2.25} />
                  위챗 직접상담
                  <ArrowRight size={16} strokeWidth={2.25} className="transition-transform group-hover:translate-x-0.5" />
                </button>
              </WeChatDialog>
            </div>

            {/* Trust line */}
            <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-[12px] sm:text-[13px] text-slate-400 font-semibold">
              <span className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-[#b59a5d]" />
                중국어 직접 상담 가능
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-[#b59a5d]" />
                형사·민사·출입국 원스톱
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-[#b59a5d]" />
                24시간 긴급 위챗 대응
              </span>
            </div>
          </motion.div>
        </div>

        {/* Right-floating Quick Menu — mirrors reference */}
        <motion.aside
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="hidden lg:flex absolute right-5 top-1/2 -translate-y-1/2 z-20"
          aria-label="빠른 상담 메뉴"
        >
          <div className="bg-white/[0.06] backdrop-blur-xl border border-white/15 rounded-[28px] p-3 flex flex-col gap-2.5 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.5)]">
            <div className="text-center py-2 px-2">
              <div className="text-[10px] font-black tracking-[0.18em] uppercase text-white leading-tight">
                Quick<br />Menu
              </div>
            </div>
            <a
              href="#consult"
              className="group w-[78px] h-[78px] flex flex-col items-center justify-center gap-1 bg-white text-[#0a0a0a] rounded-2xl hover:scale-[1.04] transition-transform"
            >
              <FileText size={20} strokeWidth={2} />
              <span className="text-[11px] font-extrabold mt-0.5">온라인상담</span>
            </a>
            <WeChatDialog>
              <button
                type="button"
                className="group w-[78px] h-[78px] flex flex-col items-center justify-center gap-1 bg-[#09BB07] text-white rounded-2xl hover:scale-[1.04] transition-transform"
              >
                <MessageCircle size={20} strokeWidth={2} />
                <span className="text-[11px] font-extrabold mt-0.5">위챗상담</span>
              </button>
            </WeChatDialog>
            <a
              href="tel:82-10-2999-6910"
              className="group w-[78px] h-[78px] flex flex-col items-center justify-center gap-1 bg-[#b59a5d] text-white rounded-2xl hover:scale-[1.04] transition-transform"
            >
              <Phone size={20} strokeWidth={2} />
              <span className="text-[11px] font-extrabold mt-0.5">전화상담</span>
            </a>
          </div>
        </motion.aside>

        {/* Scroll hint */}
        <div aria-hidden className="hidden lg:flex absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex-col items-center gap-2 text-slate-400">
          <div className="h-8 w-px bg-gradient-to-b from-transparent via-slate-400/40 to-slate-400/80" />
          <span className="text-[10px] tracking-[0.3em] uppercase font-semibold">Scroll</span>
        </div>
      </section>

      {/* Professionals — single attorney showcase */}
      <section className="relative py-24 lg:py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section header row */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-14 lg:mb-20">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-10 bg-[#b59a5d]" />
                <span className="font-display text-[11px] sm:text-xs font-black tracking-[0.36em] uppercase text-[#b59a5d]">
                  Professionals
                </span>
              </div>
              <h2 className="text-[32px] sm:text-[44px] lg:text-[56px] font-black text-[#0f172a] tracking-tight leading-[1.1] mb-5">
                법률사무소 비컴의 <span className="text-[#b59a5d]">변호사</span>
              </h2>
              <p className="text-base lg:text-lg text-slate-600 font-medium leading-relaxed max-w-[560px]">
                한국어와 중국어 두 언어로 직접 소통하며, 통역 없이 사실관계부터 법률 분석까지 정확하게 짚어 드립니다.
              </p>
            </div>
            <Link
              to="/about"
              className="group font-display inline-flex items-center justify-center gap-3 self-start md:self-end border-2 border-[#0f172a] hover:bg-[#0f172a] text-[#0f172a] hover:text-white px-7 py-3.5 font-extrabold text-sm tracking-[0.22em] transition-colors whitespace-nowrap"
            >
              VIEW MORE
              <ArrowRight size={16} strokeWidth={2.5} className="transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>

          {/* Attorney card */}
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.2, 0.65, 0.3, 0.9] }}
            className="grid lg:grid-cols-[minmax(320px,_460px)_1fr] bg-[#faf6ef] shadow-[0_24px_80px_-32px_rgba(15,23,42,0.22)] overflow-hidden"
          >
            {/* Photo column */}
            <div className="relative bg-[#e9e3d2] min-h-[440px] lg:min-h-[580px] overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1665224752123-a2ea29dddcb2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhbiUyMGxhd3llciUyMHBvcnRyYWl0JTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc3NjM5ODMxNXww&ixlib=rb-4.1.0&q=85&w=900"
                alt="오동현 대표변호사"
                className="absolute inset-0 w-full h-full object-cover object-top"
              />
              {/* Top-left editorial marker */}
              <div className="absolute top-6 left-6 font-display text-white text-[10px] sm:text-[11px] font-extrabold tracking-[0.32em] uppercase drop-shadow-md">
                <span className="text-[#b59a5d]">No. 01</span>
                <span className="mx-2 opacity-60">/</span>
                Representative Attorney
              </div>
            </div>

            {/* Content column */}
            <div className="p-10 sm:p-12 lg:p-16 xl:p-20 flex flex-col justify-between bg-white">
              <div>
                {/* Romanized */}
                <p className="font-display text-[11px] sm:text-xs font-black tracking-[0.42em] uppercase text-slate-400 mb-4">
                  Donghyun OH
                </p>
                {/* Korean name */}
                <h3 className="font-black text-[#0f172a] tracking-[-0.02em] leading-none text-[48px] sm:text-[64px] lg:text-[80px] mb-6">
                  오동현
                </h3>
                {/* Gold rule */}
                <div aria-hidden className="h-[3px] w-14 bg-[#b59a5d] mb-5" />
                {/* Role */}
                <p className="text-base lg:text-lg text-slate-700 font-bold mb-10">
                  대표변호사 <span className="text-slate-400 mx-1.5">·</span> 법률사무소 비컴
                </p>

                {/* Specialties */}
                <div>
                  <p className="text-[10px] sm:text-[11px] font-black tracking-[0.28em] uppercase text-[#b59a5d] mb-4">
                    전문 분야
                  </p>
                  <ul className="space-y-3.5">
                    {[
                      "형사 사건 방어 · 민사 분쟁 대리",
                      "체류자격(F-4·H-2) · 출입국 종합 자문",
                      "중국어 직접 상담 (通译不必要)",
                      "한중 계약 · 기업 법률 자문",
                    ].map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3.5 text-slate-700 font-medium text-[14px] sm:text-[15px] leading-relaxed"
                      >
                        <span className="mt-[9px] w-1.5 h-1.5 rounded-full bg-[#b59a5d] shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom row: credentials + CTA */}
              <div className="mt-10 lg:mt-14 pt-7 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
                <div className="text-[12px] sm:text-[13px] text-slate-500 font-semibold leading-relaxed">
                  고려대 중문학·경영학
                  <span className="text-slate-300 mx-2">/</span>
                  경북대 로스쿨
                </div>
                <Link
                  to="/about"
                  className="group inline-flex items-center justify-between sm:justify-center gap-3 bg-[#0f172a] hover:bg-[#b59a5d] text-white px-6 lg:px-7 py-3.5 font-extrabold text-[13px] tracking-wide transition-colors"
                >
                  변호사 프로필
                  <ArrowRight size={15} strokeWidth={2.5} className="transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>
          </motion.article>
        </div>
      </section>

      {/* 3-PILLAR — Professional / Expertise / Availability */}
      <section className="bg-[#050B14] text-white border-y border-white/5">
        <div className="grid lg:grid-cols-3">
          {[
            {
              eyebrow: "Professional",
              title: "중국어권 특화 변호사",
              desc: "단순 어학을 넘어 중국 현지 실무와 한국 법리를 동시에 체득한 오동현 변호사가 복잡한 사건에 정교하게 대응합니다.",
              href: "/about",
              icon: <GraduationCap className="w-8 h-8 text-[#b59a5d]" strokeWidth={1.4} />,
              bg: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=85&w=1200",
            },
            {
              eyebrow: "Expertise",
              title: "형사·민사·출입국 통합",
              desc: "형사 방어, 민사 분쟁, 체류 자격 영향 분석을 하나의 사건 안에서 통합적으로 수행합니다.",
              href: "/services",
              icon: <Layers className="w-8 h-8 text-[#b59a5d]" strokeWidth={1.4} />,
              bg: "https://images.unsplash.com/photo-1521791136064-7986c2920216?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=85&w=1200",
            },
            {
              eyebrow: "Availability",
              title: "24시간 위챗 핫라인",
              desc: "출입국 단속·체포·급박한 상황까지 — 한국 시간 기준 24시간 중국어 위챗 상담 채널을 운영합니다.",
              href: "#",
              icon: <Clock className="w-8 h-8 text-[#b59a5d]" strokeWidth={1.4} />,
              bg: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=85&w=1200",
            },
          ].map((pillar, i) => (
            <motion.div
              key={pillar.eyebrow}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative overflow-hidden min-h-[380px] lg:min-h-[480px] flex"
            >
              <div className="absolute inset-0">
                <ImageWithFallback
                  src={pillar.bg}
                  alt=""
                  className="w-full h-full object-cover opacity-[0.22] group-hover:opacity-[0.35] transition-opacity duration-700 scale-110 group-hover:scale-100"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#050B14]/60 via-[#050B14]/85 to-[#050B14]" />
              </div>
              <div className="relative w-full flex flex-col justify-end p-10 lg:p-14">
                <div className="mb-5">{pillar.icon}</div>
                <p className="font-display text-[11px] font-black tracking-[0.36em] uppercase text-[#b59a5d] mb-4">
                  {pillar.eyebrow}
                </p>
                <h3 className="text-2xl lg:text-[30px] font-black tracking-tight leading-tight mb-4">
                  {pillar.title}
                </h3>
                <p className="text-[14px] lg:text-[15px] text-slate-300/85 font-medium leading-[1.85] mb-8 max-w-[360px]">
                  {pillar.desc}
                </p>
                <Link
                  to={pillar.href}
                  className="group/link inline-flex items-center gap-2.5 text-white border-b border-white/30 hover:border-[#b59a5d] pb-1.5 w-fit font-display text-[11px] font-black tracking-[0.28em] uppercase transition-colors"
                >
                  View More
                  <ArrowUpRight
                    size={14}
                    strokeWidth={2.5}
                    className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                  />
                </Link>
              </div>
              {/* Numeric marker */}
              <span className="absolute top-8 right-8 font-display text-[#b59a5d]/25 font-black text-5xl lg:text-6xl leading-none tracking-tight">
                0{i + 1}
              </span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Core Strengths Section */}
      <section className="py-32 bg-slate-50 border-t border-slate-200">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="왜 법률사무소 비컴인가"
            subtitle="단순한 법률 지식을 넘어, 중국의 문화와 당신의 언어를 완벽하게 이해합니다."
            centered={true}
          />
          
          <div className="mt-20 grid gap-8 md:grid-cols-3">
            {[
              {
                icon: <MessageCircle className="h-12 w-12 text-[#b59a5d] mb-6" />,
                title: "직접 소통",
                num: "01",
                desc: "법률 상담에서 통역만 이용할 경우 뉘앙스가 달라지고, 중요한 사실이 누락되거나 왜곡될 수 있습니다. 오동현 변호사는 통역을 거친 후, 중국어로 직접 사실관계를 청취하고 법률 분석을 수행합니다."
              },
              {
                icon: <Globe className="h-12 w-12 text-[#b59a5d] mb-6" />,
                title: "중국 현지 경험에서 나오는 문화적 이해",
                num: "02",
                desc: "법률 문제는 단순히 조문의 해석이 아닙니다. 중국의 비즈니스 관행, 가족 문화, 사회적 맥락을 이해해야 진정한 해결책이 나옵니다. 오동현 변호사는 중국 소주·북경·광서성에서 직접 생활하고 근무한 경험을 보유하고 있습니다."
              },
              {
                icon: <Scale className="h-12 w-12 text-[#b59a5d] mb-6" />,
                title: "형사 처벌과 체류 자격의 연결고리를 아는 변호사",
                num: "03",
                desc: "한국에서 형사 처벌을 받으면 F-4, H-2 등 체류 자격이 취소되거나 강제퇴거로 이어질 수 있습니다. 비컴은 형사 사건 수임 즉시, 사건의 법적 결과뿐 아니라 체류 자격에 미치는 영향까지 종합적으로 관리합니다."
              }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-white p-10 border border-slate-200 hover:border-[#b59a5d] hover:shadow-xl transition-all group flex flex-col relative"
              >
                <div className="absolute top-8 right-8 text-6xl font-black text-slate-50 opacity-50 group-hover:text-[#b59a5d]/10 transition-colors">
                  {feature.num}
                </div>
                {feature.icon}
                <h3 className="text-2xl font-extrabold text-[#0f172a] mb-4">{feature.title}</h3>
                <div className="w-8 h-[2px] bg-[#b59a5d] mb-6" />
                <p className="text-slate-600 leading-relaxed font-medium text-lg">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* Services Preview Section */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <SectionHeading
              title="주요 업무 분야"
              subtitle="복잡한 법적 문제를 중국어권 의뢰인 맞춤형으로 해결합니다."
            />
            <Link to="/services" className="inline-flex items-center justify-center gap-2 bg-[#0f172a] hover:bg-slate-800 text-white font-extrabold px-8 py-4 transition-colors mb-6 whitespace-nowrap">
              모든 서비스 보기 <ArrowRight size={20} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "체류 자격 · 출입국 (签证·出入境)",
                desc: "형사 사건 수임 즉시 체류 자격(F-4, H-2)에 미치는 영향을 병행 분석. 강제퇴거 방어 및 24시 긴급 대응.",
                color: "border-slate-200"
              },
              {
                title: "형사 사건 (刑事案件)",
                desc: "보이스피싱 전달책, 투자 사기 고소, 업무상 횡령 등 억울한 혐의 방어 및 신속한 피해 구제.",
                color: "border-slate-200"
              },
              {
                title: "민사 · 금융 사건 (民事·金融)",
                desc: "채무부존재확인 방어, P2P 금융 연대보증, 중고차 3자 사기 방어 등 복잡한 손해배상 사건 대리.",
                color: "border-slate-200"
              },
              {
                title: "대중 계약 · 기업 (涉华合同·企业)",
                desc: "한중 수출입 계약 리스크 검토, 중국어 원문 기준 분석, 다중언어 법률 문서 및 분쟁 자문.",
                color: "border-slate-200"
              },
              {
                title: "가사 · 상속 (家事·继承)",
                desc: "이혼 재산분할, 중국 법원 이혼 판결의 국내 효력, 중국 소재 재산의 한국 내 상속 절차 안내.",
                color: "border-slate-200"
              }
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className={`bg-white border-t-4 border-slate-200 hover:border-[#b59a5d] p-10 flex flex-col h-full hover:shadow-2xl transition-all cursor-pointer`}
              >
                <div className={`text-[#b59a5d] mb-6 font-black text-3xl opacity-40`}>
                  0{i + 1}
                </div>
                <h3 className="text-2xl font-extrabold text-[#0f172a] mb-4">{service.title}</h3>
                <p className="text-slate-600 mb-8 flex-grow leading-relaxed font-medium text-lg">{service.desc}</p>
                <Link to="/services" className="text-sm font-bold text-[#0f172a] hover:text-[#b59a5d] flex items-center gap-2 mt-auto transition-colors">
                  자세히 보기 <ArrowRight size={16} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── SUCCESS CASES carousel-style ─────────── */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-14 lg:mb-20">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-10 bg-[#b59a5d]" />
                <span className="font-display text-[11px] sm:text-xs font-black tracking-[0.36em] uppercase text-[#b59a5d]">
                  Success Cases
                </span>
              </div>
              <h2 className="text-[32px] sm:text-[44px] lg:text-[56px] font-black text-[#0f172a] tracking-tight leading-[1.1] mb-5">
                중국어권 의뢰인을 위한 <span className="text-[#b59a5d]">업무사례</span>
              </h2>
              <p className="text-base lg:text-lg text-slate-600 font-medium leading-relaxed max-w-[560px]">
                체류 자격·형사·민사·계약 전 분야에 걸친 대표 사례를 안내합니다.
                <span className="block mt-1.5 text-xs tracking-wide text-slate-400 font-semibold italic">
                  * 런칭 전 프리뷰 — 실제 사례는 의뢰인 동의 후 순차 공개됩니다.
                </span>
              </p>
            </div>
            <Link
              to="/cases"
              className="group font-display inline-flex items-center justify-center gap-3 self-start md:self-end border-2 border-[#0f172a] hover:bg-[#0f172a] text-[#0f172a] hover:text-white px-7 py-3.5 font-extrabold text-sm tracking-[0.22em] transition-colors whitespace-nowrap"
            >
              VIEW ALL
              <ArrowRight size={16} strokeWidth={2.5} className="transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              { tag: "체류자격", title: "F-4 체류 자격 유지 — 음주운전 감경 전략", outcome: "형사 처벌 수위를 벌금형 최소로 낮추어 자격 취소 방지." },
              { tag: "보이스피싱", title: "전달책 혐의 불기소 방어", outcome: "고의성 부존재·피해자성 입증으로 불기소 처분 도출." },
              { tag: "대중 계약", title: "중국 공급사 계약 분쟁 자문", outcome: "영·중 원문 병행 검토로 리스크 조항 사전 제거." },
              { tag: "민사·금융", title: "P2P 연대보증 채무 방어", outcome: "온투업법 특수성 기반 책임 범위 제한 인정." },
              { tag: "형사 방어", title: "업무상 횡령 혐의 무혐의", outcome: "회계 자료 재구성으로 불법영득의사 부존재 입증." },
              { tag: "가사·상속", title: "중국 판결 한국 효력 검토", outcome: "한·중 상속법 교차 분석으로 재산분할 집행 확보." },
            ].map((c, i) => (
              <motion.article
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="group bg-white border border-slate-200 hover:border-[#0f172a] transition-colors p-8 lg:p-10 flex flex-col"
              >
                <div className="flex items-center justify-between mb-5">
                  <span className="inline-flex items-center gap-2 text-[11px] font-black tracking-[0.2em] uppercase text-[#b59a5d] border border-[#b59a5d]/40 px-3 py-1.5">
                    {c.tag}
                  </span>
                  <span className="font-display text-[10px] font-black tracking-[0.22em] uppercase text-slate-300">
                    Case {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="text-lg lg:text-xl font-extrabold text-[#0f172a] leading-snug mb-4 min-h-[3.5rem]">
                  {c.title}
                </h3>
                <p className="text-[14px] text-slate-600 font-medium leading-[1.8] flex-grow">
                  {c.outcome}
                </p>
                <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-slate-400 italic">예시 사례 preview</span>
                  <ArrowUpRight
                    size={18}
                    strokeWidth={1.5}
                    className="text-slate-300 group-hover:text-[#b59a5d] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                  />
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── LEGAL INFO ARTICLES ─────────── */}
      <section className="py-24 lg:py-32 bg-[#faf6ef] border-y border-[#e9e3d2]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-14 lg:mb-20">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-10 bg-[#b59a5d]" />
                <span className="font-display text-[11px] sm:text-xs font-black tracking-[0.36em] uppercase text-[#b59a5d]">
                  Legal Information
                </span>
              </div>
              <h2 className="text-[32px] sm:text-[44px] lg:text-[56px] font-black text-[#0f172a] tracking-tight leading-[1.1] mb-5">
                변호사가 직접 쓰는 <span className="text-[#b59a5d]">법률 정보</span>
              </h2>
              <p className="text-base lg:text-lg text-slate-600 font-medium leading-relaxed max-w-[560px]">
                복잡한 행정·형사·체류 절차를 쉬운 언어로 정리합니다. 중국어 해설 포함.
              </p>
            </div>
            <Link
              to="#"
              className="group font-display inline-flex items-center justify-center gap-3 self-start md:self-end border-2 border-[#0f172a] hover:bg-[#0f172a] text-[#0f172a] hover:text-white px-7 py-3.5 font-extrabold text-sm tracking-[0.22em] transition-colors whitespace-nowrap"
            >
              VIEW ALL
              <ArrowRight size={16} strokeWidth={2.5} className="transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5 lg:gap-6">
            {[
              { title: "F-4 비자 상실, 이런 경우 취소됩니다", tags: ["#F4", "#비자"], excerpt: "벌금형·음주운전이 체류 자격에 미치는 영향과 유지 전략." },
              { title: "보이스피싱 전달책 연루, 첫 72시간 행동 요령", tags: ["#보이스피싱", "#형사"], excerpt: "수사 초기 진술부터 불기소 목표까지 단계별 대응." },
              { title: "중국 이혼 판결, 한국에서 집행되나요?", tags: ["#가사", "#상속"], excerpt: "중국 법원 판결의 한국 내 효력과 재산분할 절차." },
              { title: "대중 수출입 계약, 원문 검토 체크포인트", tags: ["#계약", "#대중"], excerpt: "중국어 원문 계약서에서 자주 놓치는 리스크 조항 7가지." },
              { title: "강제퇴거 명령 받았다면 — 이의신청 절차", tags: ["#출입국", "#행정"], excerpt: "불복·이의신청·행정소송까지 실무 흐름 가이드." },
            ].map((a, i) => (
              <motion.article
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="group bg-white p-6 lg:p-7 flex flex-col hover:-translate-y-1 transition-transform"
              >
                <span className="font-display text-[10px] font-black tracking-[0.24em] uppercase text-slate-400 mb-4">
                  Article {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-[16px] lg:text-[17px] font-extrabold text-[#0f172a] leading-snug mb-3 min-h-[3.5rem]">
                  {a.title}
                </h3>
                <p className="text-[13px] text-slate-600 font-medium leading-[1.75] flex-grow mb-5">
                  {a.excerpt}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {a.tags.map((t) => (
                    <span key={t} className="font-display text-[10px] font-semibold text-slate-500 bg-slate-100 px-2 py-1">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-[11px]">
                  <span className="font-semibold text-slate-400 italic">준비중</span>
                  <ArrowRight
                    size={14}
                    strokeWidth={1.75}
                    className="text-slate-300 group-hover:text-[#b59a5d] group-hover:translate-x-0.5 transition-all"
                  />
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── CLIENT TESTIMONIALS ─────────── */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 lg:mb-20">
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-[#b59a5d]" />
              <span className="font-display text-[11px] sm:text-xs font-black tracking-[0.36em] uppercase text-[#b59a5d]">
                Client Voices
              </span>
              <span className="h-px w-10 bg-[#b59a5d]" />
            </div>
            <h2 className="text-[32px] sm:text-[44px] lg:text-[56px] font-black text-[#0f172a] tracking-tight leading-[1.1] mb-5">
              비컴과 함께한 <span className="text-[#b59a5d]">후기</span>
            </h2>
            <p className="mx-auto max-w-[560px] text-base lg:text-lg text-slate-600 font-medium leading-relaxed">
              오동현 변호사의 조력으로 권리를 회복한 의뢰인의 후기입니다.
              <span className="block mt-1.5 text-xs tracking-wide text-slate-400 font-semibold italic">
                * 런칭 전 템플릿 — 실제 후기는 수임 후 게시됩니다.
              </span>
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                tag: "체류자격",
                title: "통역 없이 제 상황을 정확히 이해해 주셨어요",
                quote: "한국어가 서툰 저를 위해 중국어로 직접 상담해 주셔서 사실관계를 빠짐없이 전달할 수 있었습니다. 비자까지 유지할 수 있도록 도와주셔서 감사합니다.",
                author: "L씨 · 중국 국적",
              },
              {
                tag: "보이스피싱",
                title: "불안했던 수사 단계를 잘 넘길 수 있었습니다",
                quote: "전달책으로 몰렸을 때 경황이 없었는데, 비컴에서 초기부터 개입해 고의성이 없었다는 걸 입증해 주셔서 불기소를 받았습니다.",
                author: "K씨 · 조선족",
              },
              {
                tag: "대중 계약",
                title: "중국어 원문 기준으로 리스크를 잡아주셨어요",
                quote: "번역본으로만 검토했다면 놓쳤을 독소조항을 중국어 원문으로 직접 짚어주셔서 계약 구조를 바꿀 수 있었습니다. 실무 감각이 남다릅니다.",
                author: "J사 대표 · 대중 수출입",
              },
            ].map((t, i) => (
              <motion.figure
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="relative bg-[#faf6ef] border border-[#e9e3d2] p-8 lg:p-10 flex flex-col"
              >
                <Quote className="absolute top-6 right-6 w-10 h-10 text-[#b59a5d]/25" strokeWidth={1.25} />
                <span className="inline-flex items-center self-start text-[11px] font-black tracking-[0.2em] uppercase text-[#b59a5d] border border-[#b59a5d]/40 px-3 py-1.5 mb-5">
                  {t.tag}
                </span>
                <blockquote className="flex-grow">
                  <h3 className="font-display text-lg lg:text-xl font-extrabold text-[#0f172a] leading-snug mb-4">
                    "{t.title}"
                  </h3>
                  <p className="text-[14px] text-slate-600 font-medium leading-[1.85] italic">
                    {t.quote}
                  </p>
                </blockquote>
                <figcaption className="mt-6 pt-5 border-t border-[#e9e3d2] flex items-center justify-between">
                  <span className="text-[13px] font-bold text-[#0f172a]">{t.author}</span>
                  <span className="font-display text-[10px] font-black tracking-[0.22em] uppercase text-slate-400">
                    예시 후기
                  </span>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── HASHTAG SEARCH ─────────── */}
      <section className="py-20 lg:py-24 bg-[#0a0e1a] text-white overflow-hidden relative">
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(135deg, transparent 49.5%, #b59a5d 49.5%, #b59a5d 50.5%, transparent 50.5%)",
            backgroundSize: "64px 64px",
          }}
        />
        <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-3 mb-6">
            <Hash size={16} className="text-[#b59a5d]" strokeWidth={2} />
            <span className="font-display text-[11px] font-black tracking-[0.36em] uppercase text-[#b59a5d]">
              Ask the Attorney
            </span>
          </div>
          <h2 className="text-[28px] sm:text-[40px] lg:text-[48px] font-black tracking-tight leading-tight mb-10 lg:mb-12">
            비컴에게 무엇이든 물어보세요
          </h2>
          <div className="flex flex-wrap justify-center gap-3 lg:gap-4 max-w-[900px] mx-auto">
            {[
              "#F4비자",
              "#H2비자",
              "#보이스피싱",
              "#음주운전",
              "#강제퇴거",
              "#체류자격",
              "#횡령",
              "#대중계약",
              "#중국이혼판결",
              "#P2P연대보증",
              "#성범죄방어",
              "#위챗상담",
            ].map((tag, i) => (
              <motion.a
                key={tag}
                href="#"
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.03 }}
                className="group inline-flex items-center gap-2 border border-white/20 hover:border-[#b59a5d] hover:bg-[#b59a5d]/10 px-5 py-2.5 text-[13px] lg:text-sm font-display font-bold text-white/85 hover:text-white tracking-wide transition-colors"
              >
                {tag}
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── QUICK LINK GRID ─────────── */}
      <section className="py-24 lg:py-28 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
            {[
              {
                eyebrow: "Consultation",
                title: "비컴 법률 상담",
                desc: "365일 24시간 중국어 직접 상담",
                icon: <MessageCircle className="w-7 h-7 text-[#b59a5d]" strokeWidth={1.4} />,
                href: "#consult",
              },
              {
                eyebrow: "Cases",
                title: "업무사례",
                desc: "중국어권 의뢰인 맞춤 솔루션",
                icon: <Briefcase className="w-7 h-7 text-[#b59a5d]" strokeWidth={1.4} />,
                href: "/cases",
              },
              {
                eyebrow: "Attorney",
                title: "변호사 소개",
                desc: "오동현 대표변호사 프로필",
                icon: <ShieldCheck className="w-7 h-7 text-[#b59a5d]" strokeWidth={1.4} />,
                href: "/about",
              },
              {
                eyebrow: "Practice",
                title: "업무분야",
                desc: "5대 핵심 업무 영역",
                icon: <Layers className="w-7 h-7 text-[#b59a5d]" strokeWidth={1.4} />,
                href: "/services",
              },
            ].map((q, i) => (
              <Link
                key={i}
                to={q.href}
                className="group block bg-[#faf6ef] border border-[#e9e3d2] hover:border-[#b59a5d] p-8 lg:p-10 transition-colors"
              >
                <div className="mb-8">{q.icon}</div>
                <p className="font-display text-[10px] font-black tracking-[0.28em] uppercase text-[#b59a5d] mb-3">
                  {q.eyebrow}
                </p>
                <h3 className="text-xl lg:text-2xl font-extrabold text-[#0f172a] tracking-tight mb-3">
                  {q.title}
                </h3>
                <p className="text-[13px] text-slate-600 font-medium leading-relaxed mb-6">
                  {q.desc}
                </p>
                <ArrowUpRight
                  size={18}
                  strokeWidth={1.5}
                  className="text-slate-400 group-hover:text-[#b59a5d] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── CONSULTATION INTAKE FORM ─────────── */}
      <section id="consult" className="py-24 lg:py-32 bg-[#0f172a] text-white border-t-[6px] border-[#b59a5d]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-[#b59a5d]" />
              <span className="font-display text-[11px] font-black tracking-[0.36em] uppercase text-[#b59a5d]">
                Consultation
              </span>
            </div>
            <h2 className="text-[32px] lg:text-[48px] font-black tracking-tight leading-[1.1] mb-6">
              비컴 상담 접수
            </h2>
            <p className="text-base lg:text-lg text-slate-300/85 font-medium leading-[1.85] mb-10 max-w-[440px]">
              중국어·한국어 어느 쪽이든 편한 언어로 남겨 주세요. 24시간 이내 오동현 변호사가 직접 회신드립니다.
            </p>
            <div className="space-y-5">
              <div className="flex items-start gap-4 border-l-2 border-[#b59a5d] pl-5">
                <div>
                  <p className="font-display text-[10px] font-black tracking-[0.28em] uppercase text-[#b59a5d] mb-1">
                    WeChat · 24h
                  </p>
                  <p className="text-base font-bold tabular-nums">wudongxuan002</p>
                </div>
              </div>
              <div className="flex items-start gap-4 border-l-2 border-white/25 pl-5">
                <div>
                  <p className="font-display text-[10px] font-black tracking-[0.28em] uppercase text-slate-400 mb-1">
                    Direct Line
                  </p>
                  <p className="text-base font-bold tabular-nums">82-10-2999-6910</p>
                </div>
              </div>
              <div className="flex items-start gap-4 border-l-2 border-white/25 pl-5">
                <div>
                  <p className="font-display text-[10px] font-black tracking-[0.28em] uppercase text-slate-400 mb-1">
                    Email
                  </p>
                  <p className="text-base font-bold">lawohdh@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          <form className="lg:col-span-7 bg-white text-[#0f172a] p-8 lg:p-12" onSubmit={(e) => e.preventDefault()}>
            <div className="flex items-center justify-between mb-8 pb-5 border-b border-slate-100">
              <h3 className="font-display text-[22px] lg:text-[26px] font-black tracking-tight">
                상담 신청서
              </h3>
              <span className="font-display text-[10px] font-black tracking-[0.26em] uppercase text-[#b59a5d]">
                Intake · KR / CN
              </span>
            </div>
            <div className="grid sm:grid-cols-2 gap-5 mb-5">
              <div>
                <label className="block text-[11px] font-black tracking-[0.2em] uppercase text-slate-500 mb-2">
                  01 · 성함 / 姓名
                </label>
                <input
                  type="text"
                  placeholder="홍길동"
                  className="w-full bg-transparent border-0 border-b border-slate-300 focus:border-[#0f172a] pb-2 text-[15px] placeholder:text-slate-400 focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block text-[11px] font-black tracking-[0.2em] uppercase text-slate-500 mb-2">
                  02 · 연락처 / 联系方式
                </label>
                <input
                  type="tel"
                  placeholder="010-0000-0000"
                  className="w-full bg-transparent border-0 border-b border-slate-300 focus:border-[#0f172a] pb-2 text-[15px] placeholder:text-slate-400 focus:outline-none transition-colors tabular-nums"
                />
              </div>
            </div>
            <div className="mb-5">
              <label className="block text-[11px] font-black tracking-[0.2em] uppercase text-slate-500 mb-2">
                03 · 언어 / Language
              </label>
              <div className="flex gap-3">
                {["한국어", "中文", "English"].map((lang) => (
                  <label
                    key={lang}
                    className="flex items-center gap-2 border border-slate-200 hover:border-[#0f172a] px-4 py-2 cursor-pointer transition-colors text-[13px] font-semibold"
                  >
                    <input type="radio" name="lang" className="accent-[#b59a5d]" />
                    {lang}
                  </label>
                ))}
              </div>
            </div>
            <div className="mb-5">
              <label className="block text-[11px] font-black tracking-[0.2em] uppercase text-slate-500 mb-2">
                04 · 사건 분야 / 案件领域
              </label>
              <select className="w-full bg-transparent border-0 border-b border-slate-300 focus:border-[#0f172a] pb-2 text-[15px] focus:outline-none transition-colors">
                <option>선택해 주세요</option>
                <option>체류 자격 · 출입국</option>
                <option>형사 사건</option>
                <option>민사 · 금융 사건</option>
                <option>대중 계약 · 기업 자문</option>
                <option>가사 · 상속</option>
                <option>기타</option>
              </select>
            </div>
            <div className="mb-8">
              <label className="block text-[11px] font-black tracking-[0.2em] uppercase text-slate-500 mb-2">
                05 · 상담 내용 / 咨询内容
              </label>
              <textarea
                rows={4}
                placeholder="상담 받고 싶은 내용을 간단히 적어주세요."
                className="w-full bg-transparent border-0 border-b border-slate-300 focus:border-[#0f172a] pb-2 text-[15px] placeholder:text-slate-400 focus:outline-none resize-none transition-colors leading-[1.75]"
              />
            </div>
            <label className="flex items-baseline gap-2 mb-7 text-[12px] text-slate-600 font-medium">
              <input type="checkbox" className="accent-[#b59a5d] mt-0.5" />
              개인정보 수집 및 이용에 동의합니다. (상담 목적에 한하여 활용)
            </label>
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                type="submit"
                className="group flex-1 inline-flex items-center justify-center gap-3 bg-[#0f172a] hover:bg-[#b59a5d] text-white px-6 py-4 font-extrabold text-[14px] tracking-wide transition-colors"
              >
                무료 상담 신청하기
                <ArrowRight
                  size={15}
                  strokeWidth={2.5}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </button>
              <WeChatDialog>
                <button
                  type="button"
                  className="inline-flex items-center justify-center gap-2 border border-[#0f172a] hover:bg-[#0f172a] hover:text-white text-[#0f172a] px-5 py-4 font-extrabold text-[14px] transition-colors"
                >
                  <MessageCircle size={15} strokeWidth={2.25} />
                  위챗으로 바로
                </button>
              </WeChatDialog>
            </div>
            <p className="mt-5 text-[11px] text-slate-400 font-medium italic">
              * 런칭 전 프리뷰 — 제출 기능은 백엔드 연결 후 활성화됩니다. 현재는 위챗/전화/이메일 이용 권장.
            </p>
          </form>
        </div>
      </section>

      {/* Guide / Lead Magnet Section */}
      <section className="py-24 bg-[#0f172a] relative border-t-8 border-[#b59a5d]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="md:w-2/3 text-white">
              <div className="flex items-center gap-4 mb-6">
                <span className="inline-flex items-center px-4 py-1 border border-[#b59a5d] text-[#b59a5d] font-bold text-sm">
                  무료 가이드북 배포
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold mb-8 leading-tight">
                한국 생활, 모르면 당하고 알면 지킨다:<br />
                <span className="text-slate-400 font-bold text-3xl md:text-4xl mt-2 block">조선족을 위한 5대 필수 법률 가이드</span>
              </h2>
              <ul className="space-y-4 mb-10 text-slate-300 font-bold text-lg">
                <li className="flex items-center gap-3"><CheckCircle2 size={24} className="text-[#b59a5d] shrink-0" /> 비자(F4, H2) 상실 피하는 법 (음주운전, 벌금형)</li>
                <li className="flex items-center gap-3"><CheckCircle2 size={24} className="text-[#b59a5d] shrink-0" /> 사장이 돈 안 줄 때 증거 남기는 법</li>
                <li className="flex items-center gap-3"><CheckCircle2 size={24} className="text-[#b59a5d] shrink-0" /> 보이스피싱 전달책 연루 시 행동 요령</li>
                <li className="flex items-center gap-3"><CheckCircle2 size={24} className="text-[#b59a5d] shrink-0" /> 중국 재산 상속 및 이혼 판결 효력</li>
                <li className="flex items-center gap-3"><CheckCircle2 size={24} className="text-[#b59a5d] shrink-0" /> 한교(韩桥)/비컴 24시 위챗 QR코드 제공</li>
              </ul>
              
              <a href="#" className="inline-flex items-center justify-center gap-3 bg-[#b59a5d] hover:bg-[#a38a53] text-white px-10 py-5 font-extrabold text-lg transition-all w-full sm:w-auto shadow-xl">
                <Download size={22} />
                가이드북 다운로드
              </a>
            </div>
            
            <div className="md:w-1/3 flex justify-center w-full">
              <div className="bg-white p-8 shadow-2xl w-full max-w-md border-t-4 border-[#b59a5d]">
                <div className="aspect-[3/4] bg-slate-50 border border-slate-200 flex flex-col items-center justify-center p-8 text-center">
                  <FileText size={56} className="mb-6 text-[#0f172a]" />
                  <p className="font-extrabold text-2xl text-[#0f172a] mb-4">한국 생존<br/>법률 가이드북</p>
                  <p className="text-base text-slate-500 font-medium mb-8">클릭하여 PDF 다운로드</p>
                  
                  <div className="w-full h-[1px] bg-slate-200 mb-8" />
                  
                  <p className="text-sm font-bold text-[#0f172a] mb-4">한교(韩桥) / 비컴 24시 위챗</p>
                  <div className="w-32 h-32 border-2 border-slate-300 p-2 flex items-center justify-center text-slate-400 font-bold">
                    QR 코드
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

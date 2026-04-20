import { motion } from "motion/react";
import { ArrowRight, Briefcase, FileText, Scale, MessageCircle } from "lucide-react";
import { WeChatDialog } from "../components/WeChatDialog";

type Category = {
  id: string;
  no: string;
  title: string;
  cn: string;
  icon: JSX.Element;
  cases: { title: string; note?: string }[];
};

export function Cases() {
  const categories: Category[] = [
    {
      id: "financial",
      no: "01",
      title: "금융 · 재단",
      cn: "金融·财团",
      icon: <Briefcase className="w-8 h-8 text-[#b59a5d]" strokeWidth={1.5} />,
      cases: [
        {
          title: "온라인투자연계금융(P2P) 연대보증채무 및 위약벌 청구 등",
          note: "K사 대리 — 다수 사건 진행",
        },
        {
          title: "보이스피싱 피해자 채무부존재확인 소송 방어",
          note: "자금 흐름 분석 기반 공동불법행위 책임 부존재 주장",
        },
        {
          title: "대중(對中) 수출입 업무 영문·중문 계약 체결 자문 및 검토",
        },
        {
          title: "비영리 재단법인 설립 정관 작성 등 자문",
          note: "다수 진행",
        },
      ],
    },
    {
      id: "civil",
      no: "02",
      title: "민사",
      cn: "民事案件",
      icon: <FileText className="w-8 h-8 text-[#b59a5d]" strokeWidth={1.5} />,
      cases: [
        {
          title: "중고차 3자 사기 사건 다수 진행",
          note: "선의 매수인 보호 법리 · 원고 과실 입증",
        },
        {
          title: "자동차 휠 볼트 정비 과실 손해배상 청구 방어",
        },
        {
          title: "공용 하수관 역류 침수 피해 사건 일부채무부존재확인 소송 방어",
        },
        {
          title: "명의개서청구 소송 관련 특별대리인 선임 등 자문",
        },
        {
          title: "전환사채 약정금 청구 소송",
        },
      ],
    },
    {
      id: "criminal",
      no: "03",
      title: "형사",
      cn: "刑事案件",
      icon: <Scale className="w-8 h-8 text-[#b59a5d]" strokeWidth={1.5} />,
      cases: [
        {
          title: "대표이사 업무상 횡령 등 혐의 사건 방어",
          note: "회계 자료 분석 · 불법영득의사 부존재 입증",
        },
        {
          title: "회사 시스템 관리자 권한 남용 정보통신망법 등 혐의 사건 고소",
        },
        {
          title: "작업치료사 강제추행 혐의 사건 방어",
        },
        {
          title: "투자(주식·코인·로맨스스캠) 사기 혐의 사건 고소",
        },
        {
          title: "성매매 알선 혐의 사건 방어",
        },
        {
          title: "교통사고처리특례법위반(치상) 혐의 사건 방어",
        },
        {
          title: "음주 혐의 사건 방어",
        },
      ],
    },
  ];

  const totalCases = categories.reduce((acc, c) => acc + c.cases.length, 0);

  return (
    <div className="bg-white">
      {/* ─────────── PAGE HERO ─────────── */}
      <section className="relative bg-[#050B14] text-white overflow-hidden pt-[128px] pb-20 lg:pb-24">
        <div className="absolute inset-0 pointer-events-none opacity-[0.06]">
          <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent_30%,#b59a5d_100%)]" />
        </div>
        <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-7">
            <span className="h-px w-10 bg-[#b59a5d]" />
            <span className="font-display text-[11px] sm:text-xs font-black tracking-[0.36em] uppercase text-[#b59a5d]">
              Success Cases
            </span>
          </div>
          <h1 className="text-[40px] sm:text-[56px] lg:text-[76px] font-black tracking-[-0.02em] leading-[1.05]">
            주요 업무 사례
          </h1>
          <p className="mt-5 font-display text-sm sm:text-base tracking-[0.18em] text-slate-400 font-semibold uppercase">
            Finance · Civil · Criminal
          </p>
          <p className="mt-8 max-w-[660px] text-base lg:text-lg text-slate-300/90 font-medium leading-[1.85]">
            비컴의 철저한 분석과 치밀한 전략으로 수행한 주요 승소·자문 사례입니다. 금융·민사·형사 전 분야에서 중국어권 의뢰인의 권익을 실질적으로 지켜온 기록을 공개합니다.
          </p>

          {/* Stats strip */}
          <div className="mt-14 lg:mt-16 grid grid-cols-3 gap-4 max-w-[720px] border-t border-white/10 pt-8">
            {[
              { num: `${totalCases}+`, label: "Cases Recorded" },
              { num: "3", label: "Core Categories" },
              { num: "KR·CN", label: "Bilingual Handling" },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col gap-2">
                <span className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-none tabular-nums">
                  {stat.num}
                </span>
                <span className="font-display text-[10px] sm:text-[11px] font-black tracking-[0.22em] uppercase text-slate-500">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── CATEGORIES ─────────── */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 space-y-14 lg:space-y-20">
          {categories.map((cat, idx) => (
            <motion.article
              key={cat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: [0.2, 0.65, 0.3, 0.9] }}
              className="grid lg:grid-cols-12 gap-x-12 gap-y-10"
            >
              {/* Left column — category masthead */}
              <div className="lg:col-span-4 lg:sticky lg:top-32 lg:self-start">
                <div className="flex items-baseline gap-4 mb-6">
                  <span className="font-display text-[#b59a5d] text-6xl lg:text-7xl font-black tracking-tight leading-none">
                    {cat.no}
                  </span>
                  <div className="h-px flex-1 bg-[#b59a5d]/30" />
                </div>
                <div className="mb-5">{cat.icon}</div>
                <h2 className="text-[32px] lg:text-[42px] font-black text-[#0f172a] tracking-tight leading-[1.1] mb-2">
                  {cat.title}
                </h2>
                <p className="text-base lg:text-lg text-[#b59a5d] font-bold mb-4">{cat.cn}</p>
                <p className="font-display text-[11px] font-black tracking-[0.22em] uppercase text-slate-400">
                  {String(cat.cases.length).padStart(2, "0")} Records
                </p>
              </div>

              {/* Right column — case list */}
              <div className="lg:col-span-8">
                <ul className="border-t border-slate-200">
                  {cat.cases.map((c, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.04 }}
                      className="group grid grid-cols-[auto_1fr_auto] gap-5 lg:gap-7 items-start py-6 lg:py-7 border-b border-slate-200 hover:bg-[#faf6ef] transition-colors px-2 -mx-2 lg:px-5 lg:-mx-5"
                    >
                      <span className="font-display text-[11px] font-black tracking-[0.2em] text-[#b59a5d] pt-1 tabular-nums">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <h3 className="text-[15px] lg:text-lg font-extrabold text-[#0f172a] leading-snug">
                          {c.title}
                        </h3>
                        {c.note && (
                          <p className="mt-2 text-[13px] lg:text-sm text-slate-500 font-medium leading-relaxed">
                            <span className="text-[#b59a5d] mr-1.5">—</span>
                            {c.note}
                          </p>
                        )}
                      </div>
                      <ArrowRight
                        size={16}
                        strokeWidth={1.5}
                        className="text-slate-300 group-hover:text-[#b59a5d] group-hover:translate-x-0.5 transition-all mt-1.5"
                      />
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* ─────────── DISCLOSURE ─────────── */}
      <section className="py-16 bg-[#faf6ef] border-y border-[#e9e3d2]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[13px] lg:text-sm text-slate-600 font-medium leading-relaxed max-w-[920px]">
            <span className="font-display font-black tracking-[0.2em] uppercase text-[#b59a5d] mr-2">
              Note
            </span>
            위 사례는 오동현 변호사가 실제 수행한 업무를 기반으로 정리한 것이며, 의뢰인의 비밀 보호를 위해 구체적인 신원·상호·금액은 공개하지 않습니다. 유사 사건이라도 결과는 사실관계에 따라 달라질 수 있어, 비슷한 상황이라면 반드시 별도 상담을 권장드립니다.
          </p>
        </div>
      </section>

      {/* ─────────── CTA ─────────── */}
      <section className="py-20 lg:py-28 bg-[#0f172a] text-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-10 bg-[#b59a5d]" />
                <span className="font-display text-[11px] font-black tracking-[0.36em] uppercase text-[#b59a5d]">
                  Your Case Next
                </span>
              </div>
              <h2 className="text-3xl lg:text-[48px] font-black leading-tight tracking-tight">
                당신의 사건도
                <br />
                <span className="text-[#b59a5d]">비컴의 또 다른 기록</span>이
                <br />
                될 수 있습니다.
              </h2>
              <p className="mt-6 text-base lg:text-lg text-slate-300/80 font-medium leading-[1.85] max-w-[540px]">
                유사 사례 문의, 상담 예약, 비슷한 상황 검토 — 위챗 또는 전화로 언제든 연락 주세요.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <WeChatDialog>
                <button
                  type="button"
                  className="group inline-flex items-center justify-between gap-6 bg-[#b59a5d] hover:bg-[#c9b07e] text-[#0f172a] px-6 py-5 font-extrabold text-[15px] transition-colors"
                >
                  <span className="flex items-center gap-3">
                    <MessageCircle size={17} strokeWidth={2.25} />
                    위챗 직접 상담
                  </span>
                  <span className="flex items-center gap-2 font-display tracking-[0.12em] text-[12px] opacity-70">
                    wudongxuan002
                    <ArrowRight size={15} strokeWidth={2.5} />
                  </span>
                </button>
              </WeChatDialog>
              <a
                href="tel:82-10-2999-6910"
                className="group inline-flex items-center justify-between gap-6 border border-white/20 hover:border-white bg-transparent text-white px-6 py-5 font-extrabold text-[15px] transition-colors"
              >
                <span>전화 상담</span>
                <span className="flex items-center gap-2 font-display tracking-wider tabular-nums opacity-80 group-hover:opacity-100">
                  82-10-2999-6910
                  <ArrowRight size={15} strokeWidth={2.5} />
                </span>
              </a>
              <a
                href="mailto:lawohdh@gmail.com"
                className="group inline-flex items-center justify-between gap-6 text-slate-300 hover:text-white px-6 py-4 text-[14px] font-semibold transition-colors"
              >
                <span>이메일 문의</span>
                <span className="flex items-center gap-2 font-display tracking-wide">
                  lawohdh@gmail.com
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

import { motion } from "motion/react";
import { Link } from "react-router";
import { ArrowRight, MessageCircle } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { WeChatDialog } from "../components/WeChatDialog";

export function About() {
  const chinaExperience = [
    {
      no: "01",
      year: "2012. 02",
      title: "중국 북경사범대학교 연수",
      cn: "北京师范大学 研修",
      desc: "현지 어학·법제 수업을 통해 북경 학계의 중국어 환경에 직접 노출. 단순 어학연수가 아닌 현지 생활 기반을 다진 출발점.",
    },
    {
      no: "02",
      year: "2012. 07",
      title: "중국 소주(苏州) 건자재 기업 인턴",
      cn: "苏州天辅新型建材有限公司",
      desc: "Suzhou Chun-Bo New Construction Material Co., Ltd. 에서 시장 동향 파악, 자료 조사, 영·중·한 통번역 및 현장 실무를 수행. 중국 제조업 현장의 비즈니스 관행을 몸으로 체득.",
    },
    {
      no: "03",
      year: "2014. 01",
      title: "중국 광서성 세계태권도평화봉사재단",
      cn: "广西 世界跆拳道和平奉仕财团",
      desc: "광서성 현지에서 태권도 교육과 중국어 통역 업무를 병행하며, 지방 사회와의 직접적 교류 경험을 확보.",
    },
    {
      no: "04",
      year: "2015. 01 – 2015. 06",
      title: "중국 북경 기금회중심망 인턴",
      cn: "北京 基金会中心网 (China Foundation Center)",
      desc: "중국 최대 NGO 정보 플랫폼에서 한·중 NGO 자료 비교조사 및 영·중·한 통번역 수행. 중국의 비영리 법인 운영 구조와 사회적 맥락을 깊이 이해.",
    },
    {
      no: "05",
      year: "2016. 12 – 2018. 03",
      title: "㈜한화/무역 석유화학팀 사원",
      cn: "Hanwha Corp. Petrochem Trade",
      desc: "대중(對中) 석유화학 제품 수출입을 담당하며 영문·중문 계약서 작성 및 검토, 해외 지사와의 실무 협상을 직접 수행. 현재 중국 기업 계약 자문의 실전 베이스.",
    },
  ];

  const qualifications = [
    "남서울탐정사관학교 사립탐정사 최고위과정 강사",
    "남서울탐정사관학교 사립탐정사 최고위과정 수료",
    "신용관리사",
    "지게차운전기능사",
    "굴착기운전기능사",
    "조주기능사",
  ];

  const timeline = [
    { year: "2026. 02", title: "법률사무소 비컴 파트너 변호사", current: true },
    { year: "2025. 07", title: "법률사무소 비컴 소속변호사" },
    { year: "2025. 01", title: "법무법인 동감 소속변호사" },
    { year: "2024. 11", title: "국제지식재산연수원 변리사 연수과정 수료" },
    { year: "2024", title: "대한변호사협회 연수" },
    { year: "2022. 01", title: "동계 경찰대학 실무 수습" },
    { year: "2020. 03", title: "경북대학교 법학전문대학원 입학" },
    { year: "2016. 12 – 2018. 03", title: "㈜한화/무역 해외영업 근무" },
    { year: "2015. 01 – 2015. 06", title: "중국 북경 기금회중심망 근무" },
    { year: "2014. 01", title: "중국 광서성 세계태권도평화봉사재단" },
    { year: "2012. 07", title: "중국 소주 天辅新型建材有限公司 근무" },
    { year: "2012. 02", title: "중국 북경사범대학교 연수" },
    { year: "2008. 03", title: "고려대학교 중어중문학·경영학 입학" },
  ];

  return (
    <div className="bg-white">
      {/* ─────────── PAGE HERO ─────────── */}
      <section className="relative bg-[#050B14] text-white overflow-hidden pt-[128px] pb-20 lg:pb-28">
        <div className="absolute inset-0 opacity-[0.18]">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1665224752123-a2ea29dddcb2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=85&w=1600"
            alt=""
            className="w-full h-full object-cover object-top grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050B14] via-[#050B14]/70 to-transparent" />
        </div>
        <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <span className="h-px w-10 bg-[#b59a5d]" />
            <span className="font-display text-[11px] sm:text-xs font-black tracking-[0.36em] uppercase text-[#b59a5d]">
              About Attorney
            </span>
          </div>
          <p className="font-display text-xs sm:text-sm font-black tracking-[0.42em] uppercase text-slate-400 mb-4">
            Donghyun OH
          </p>
          <h1 className="text-[44px] sm:text-[64px] lg:text-[84px] font-black tracking-[-0.02em] leading-[1.02]">
            오동현<span className="text-[#b59a5d]">.</span>
          </h1>
          <p className="mt-6 text-base sm:text-lg lg:text-xl text-slate-300 font-semibold">
            법률사무소 비컴 대표변호사
            <span className="text-slate-500 mx-2">·</span>
            中国语直接咨询
          </p>
          <div className="mt-12 max-w-[720px]">
            <div className="border-l-2 border-[#b59a5d] pl-6 py-2">
              <p className="text-xl sm:text-2xl lg:text-[28px] text-white font-bold leading-snug italic">
                "저는 중국에서 살았고, 일했고, 그 언어로 생각합니다.
              </p>
              <p className="mt-2 text-xl sm:text-2xl lg:text-[28px] text-[#b59a5d] font-bold leading-snug italic">
                그래서 당신의 상황을 압니다."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────── EDUCATION ─────────── */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-x-12 gap-y-10">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-8 bg-[#b59a5d]" />
              <span className="font-display text-[11px] font-black tracking-[0.32em] uppercase text-[#b59a5d]">
                Education
              </span>
            </div>
            <h2 className="text-3xl lg:text-[40px] font-black text-[#0f172a] tracking-tight leading-tight">
              학력<span className="text-slate-400 ml-3 text-xl font-bold">学历</span>
            </h2>
          </div>
          <div className="lg:col-span-8 space-y-5">
            {[
              { school: "고려대학교", dept: "중어중문학 · 경영학 (복수전공)", year: "2008. 03 입학" },
              { school: "경북대학교", dept: "법학전문대학원", year: "2020. 03 입학" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="flex items-baseline gap-6 border-b border-slate-200 pb-5"
              >
                <span className="font-display text-sm text-[#b59a5d] font-black tracking-[0.18em] min-w-[52px]">
                  0{i + 1}
                </span>
                <div className="flex-1">
                  <h3 className="text-xl lg:text-2xl font-extrabold text-[#0f172a] leading-tight">
                    {item.school}
                  </h3>
                  <p className="mt-1.5 text-slate-600 font-medium">{item.dept}</p>
                </div>
                <span className="font-display text-xs font-bold tracking-wider text-slate-400 whitespace-nowrap">
                  {item.year}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── CHINA EXPERIENCE ─────────── */}
      <section className="py-20 lg:py-32 bg-[#faf6ef] border-y border-[#e9e3d2]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-[780px] mb-14 lg:mb-20">
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-8 bg-[#b59a5d]" />
              <span className="font-display text-[11px] font-black tracking-[0.32em] uppercase text-[#b59a5d]">
                China Experience
              </span>
            </div>
            <h2 className="text-3xl lg:text-[44px] font-black text-[#0f172a] tracking-tight leading-tight mb-5">
              중국 관련 경력
              <span className="text-slate-400 ml-3 text-xl lg:text-2xl font-bold">涉华经历</span>
            </h2>
            <p className="text-base lg:text-lg text-slate-600 font-medium leading-relaxed">
              단순한 어학연수를 넘어, 중국 현지 기업·기관·지방사회에서의 실무 경험을 축적했습니다. 북경·소주·광서성으로 이어지는 14년의 노출이 의뢰인 상황을 정확히 읽어내는 토대가 됩니다.
            </p>
          </div>

          <div className="space-y-4">
            {chinaExperience.map((item, i) => (
              <motion.div
                key={item.no}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="bg-white border border-[#e9e3d2] p-8 lg:p-10 grid lg:grid-cols-[80px_1fr_auto] gap-6 lg:gap-10 hover:border-[#b59a5d] transition-colors group"
              >
                <div className="flex lg:flex-col lg:justify-start items-center lg:items-start gap-3">
                  <span className="font-display text-[#b59a5d] text-4xl lg:text-5xl font-black tracking-tight leading-none">
                    {item.no}
                  </span>
                </div>
                <div>
                  <p className="font-display text-[10px] font-black tracking-[0.28em] uppercase text-slate-400 mb-2">
                    {item.year}
                  </p>
                  <h3 className="text-xl lg:text-2xl font-extrabold text-[#0f172a] leading-tight mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-500 font-semibold mb-4">{item.cn}</p>
                  <p className="text-[15px] text-slate-600 font-medium leading-[1.8] max-w-[640px]">
                    {item.desc}
                  </p>
                </div>
                <div className="hidden lg:flex items-start">
                  <ArrowRight
                    size={22}
                    strokeWidth={1.5}
                    className="text-slate-300 group-hover:text-[#b59a5d] group-hover:translate-x-1 transition-all"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── QUALIFICATIONS ─────────── */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-x-12 gap-y-10">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-8 bg-[#b59a5d]" />
              <span className="font-display text-[11px] font-black tracking-[0.32em] uppercase text-[#b59a5d]">
                Qualifications
              </span>
            </div>
            <h2 className="text-3xl lg:text-[40px] font-black text-[#0f172a] tracking-tight leading-tight">
              자격 및 수료
              <span className="block text-slate-400 mt-2 text-xl font-bold">资格证书</span>
            </h2>
          </div>
          <div className="lg:col-span-8">
            <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-4">
              {qualifications.map((q, i) => (
                <li
                  key={i}
                  className="flex items-baseline gap-4 border-b border-slate-100 pb-4"
                >
                  <span className="font-display text-[10px] font-black tracking-[0.2em] text-[#b59a5d] min-w-[24px]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[15px] text-slate-800 font-semibold leading-snug">
                    {q}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ─────────── TIMELINE ─────────── */}
      <section className="py-20 lg:py-32 bg-[#0f172a] text-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-5">
            <span className="h-px w-8 bg-[#b59a5d]" />
            <span className="font-display text-[11px] font-black tracking-[0.32em] uppercase text-[#b59a5d]">
              Career Timeline
            </span>
          </div>
          <h2 className="text-3xl lg:text-[44px] font-black tracking-tight leading-tight mb-14 lg:mb-20">
            주요 경력 타임라인
            <span className="text-slate-500 ml-3 text-xl lg:text-2xl font-bold">职业履历</span>
          </h2>

          <div className="relative max-w-[920px]">
            {/* Vertical line */}
            <div
              aria-hidden
              className="absolute left-[10px] sm:left-[14px] top-2 bottom-2 w-px bg-gradient-to-b from-[#b59a5d]/10 via-[#b59a5d]/40 to-[#b59a5d]/10"
            />
            <ul className="space-y-6 lg:space-y-7">
              {timeline.map((t, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.03 }}
                  className="relative pl-10 sm:pl-14 grid sm:grid-cols-[180px_1fr] gap-1 sm:gap-6 items-baseline"
                >
                  <span
                    className={`absolute left-[3px] sm:left-[7px] top-[7px] w-4 h-4 rounded-full border-2 ${
                      t.current
                        ? "bg-[#b59a5d] border-[#b59a5d] shadow-[0_0_0_6px_rgba(181,154,93,0.18)]"
                        : "bg-[#0f172a] border-[#b59a5d]/50"
                    }`}
                  />
                  <span className="font-display text-[12px] sm:text-[13px] font-black tracking-[0.16em] text-[#b59a5d] tabular-nums">
                    {t.year}
                  </span>
                  <div className="flex items-baseline gap-3">
                    <span className="text-[15px] sm:text-base text-white font-semibold leading-snug">
                      {t.title}
                    </span>
                    {t.current && (
                      <span className="font-display text-[9px] font-black tracking-[0.24em] bg-[#b59a5d] text-[#0f172a] px-2 py-1 whitespace-nowrap">
                        CURRENT
                      </span>
                    )}
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ─────────── CTA ─────────── */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#faf6ef] border border-[#e9e3d2] p-10 lg:p-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="h-px w-8 bg-[#b59a5d]" />
                <span className="font-display text-[11px] font-black tracking-[0.32em] uppercase text-[#b59a5d]">
                  Next Step
                </span>
              </div>
              <h3 className="text-2xl lg:text-4xl font-black text-[#0f172a] leading-tight tracking-tight">
                중국어로 바로 이야기하세요.
              </h3>
              <p className="mt-3 text-base lg:text-lg text-slate-600 font-medium leading-relaxed max-w-[540px]">
                통역 없이 사실관계부터 법률 분석까지 오동현 변호사가 직접 청취합니다.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <WeChatDialog>
                <button
                  type="button"
                  className="group inline-flex items-center justify-center gap-3 bg-[#0f172a] hover:bg-[#b59a5d] text-white px-7 py-4 font-extrabold text-[14px] tracking-wide transition-colors"
                >
                  <MessageCircle size={16} strokeWidth={2.25} />
                  위챗 직접상담
                  <ArrowRight
                    size={15}
                    strokeWidth={2.5}
                    className="transition-transform group-hover:translate-x-0.5"
                  />
                </button>
              </WeChatDialog>
              <Link
                to="/services"
                className="group font-display inline-flex items-center justify-center gap-3 border-2 border-[#0f172a] hover:bg-[#0f172a] text-[#0f172a] hover:text-white px-7 py-3.5 font-extrabold text-[13px] tracking-[0.22em] transition-colors"
              >
                SERVICES
                <ArrowRight
                  size={15}
                  strokeWidth={2.5}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

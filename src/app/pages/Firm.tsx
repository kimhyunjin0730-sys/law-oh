import { useState } from "react";
import { motion } from "motion/react";
import { Link } from "react-router";
import { ArrowRight, MessageSquare, Sparkles, ShieldCheck, HeartHandshake } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import ohDonghyunCutout from "../../assets/oh-donghyun-cutout.png";

type Lang = "ko" | "zh" | "en";

const COPY: Record<Lang, {
  pageTitle: string;
  pageSubtitle: string;
  tabs: { intro: string; values: string };
  intro: {
    eyebrow: string;
    titleA: string;
    titleB: string;
    aboutHeading: string;
    aboutBody: string[];
    aboutHighlights: { label: string; value: string }[];
    greetingHeading: string;
    greetingBody: string[];
    sigRole: string;
    sigName: string;
  };
  values: {
    eyebrow: string;
    centerSub: string;
    items: { name: string; tagline: string; body: string }[];
  };
  ctaTitle: string;
  ctaButton: string;
}> = {
  ko: {
    pageTitle: "법률사무소 비컴",
    pageSubtitle: "한국과 중국, 두 언어로 당신의 권리를 지킵니다.",
    tabs: { intro: "소개", values: "핵심 가치" },
    intro: {
      eyebrow: "About BECOME",
      titleA: "당신의 언어로 듣고,",
      titleB: "한국 법으로 지킵니다.",
      aboutHeading: "법률사무소 비컴에 대하여",
      aboutBody: [
        "법률사무소 비컴은 한국과 중국, 두 언어로 법률 서비스를 제공하는 부티크 법률사무소입니다. 통역을 거치지 않고 변호사가 직접 중국어로 의뢰인의 사실관계를 청취하며, 한국 법리에 따라 변론합니다.",
        "형사·민사·출입국·기업 자문·가사 등 중국어권 의뢰인이 한국에서 마주하는 거의 모든 법적 문제를 한 사무소 안에서 해결할 수 있도록 설계되었습니다. 단순한 통역 서비스가 아닌 \u2018직접 소통\u2019을 통해, 의뢰인의 진술이 한국 법정에서 그대로 효력을 갖도록 합니다.",
        "사건의 결과뿐 아니라 체류 자격·향후 비자 갱신까지 종합적으로 관리하는 것이 비컴의 일하는 방식입니다. 365일 24시간 위챗으로 상담을 접수합니다.",
      ],
      aboutHighlights: [
        { label: "직접 상담", value: "한·중 양국어" },
        { label: "통역", value: "0회" },
        { label: "위챗 상담", value: "24/7" },
      ],
      greetingHeading: "대표변호사 인사말",
      greetingBody: [
        "안녕하십니까. 법률사무소 비컴의 대표변호사 오동현입니다.",
        "한국에서 법적 문제에 부딪혔을 때, 가장 두려운 것은 사건의 결과보다도 \u2018내 말이 제대로 전달되지 않는 것\u2019입니다. 통역을 한 번 거칠 때마다 사실관계의 미묘한 결이 마모되고, 그 마모는 곧 처분과 판결로 이어집니다.",
        "법률사무소 비컴은 그 마모의 지점을 없애기 위해 만들어졌습니다. 변호사가 직접 중국어로 의뢰인의 사실관계를 청취하고, 한국 법리로 변론합니다. 통역의 누락도, 문화적 맥락의 오해도 없이 — 의뢰인의 이야기가 그대로 법정에 도달합니다.",
        "비컴이 곁에 있는 한, 의뢰인이 한국에서 외국인이라는 이유만으로 불리해지는 일은 없도록 하겠습니다.",
      ],
      sigRole: "법률사무소 비컴 대표변호사",
      sigName: "오동현",
    },
    values: {
      eyebrow: "Core Values",
      centerSub: "직접 듣고, 정확히 변론하는 곳",
      items: [
        {
          name: "직접 소통",
          tagline: "통역 없는 변론, 그 자체로 무기.",
          body: "변호사가 직접 중국어로 사실관계를 청취하고 변론합니다. 통역의 누락이 결과를 바꾸지 못하도록 합니다.",
        },
        {
          name: "정확한 분석",
          tagline: "한 사건, 두 나라의 시선으로.",
          body: "한국 법리뿐 아니라 중국 현지의 비즈니스·문화 맥락까지 함께 분석해 의뢰인의 현실을 그대로 읽어냅니다.",
        },
        {
          name: "끝까지 책임",
          tagline: "처분 이후의 시간까지 함께.",
          body: "형사 처분이 비자·체류 자격에 미치는 영향까지 사전 평가하고, 사건 종료 후 회복 단계까지 동행합니다.",
        },
        {
          name: "신뢰의 원칙",
          tagline: "의뢰인이 없으면 우리도 없습니다.",
          body: "한 분 한 분의 사건을 인생의 동반자로 여기며, 비밀 유지·정직한 의견·시한 관리 세 원칙을 지킵니다.",
        },
      ],
    },
    ctaTitle: "당신의 사안을 당신의 언어로 들려주세요.",
    ctaButton: "온라인 상담 접수",
  },
  zh: {
    pageTitle: "BECOME 律师事务所",
    pageSubtitle: "韩国与中国，用两种语言守护您的权利。",
    tabs: { intro: "介绍", values: "核心价值" },
    intro: {
      eyebrow: "About BECOME",
      titleA: "用您的语言倾听，",
      titleB: "以韩国法守护。",
      aboutHeading: "关于 BECOME 律师事务所",
      aboutBody: [
        "BECOME律师事务所是一家以韩中双语提供法律服务的精品律师事务所。律师无需翻译即可直接以中文听取当事人的事实关系，并依据韩国法理进行辩护。",
        "涵盖刑事、民事、出入境、企业法务、家事等几乎所有中文当事人在韩可能遇到的法律问题，皆可在同一所内解决。这不是单纯的翻译服务，而是通过\u201C直接沟通\u201D确保当事人的陈述在韩国法庭获得完整效力。",
        "我们不仅关注案件结果，还综合管理居留资格与未来签证更新——这就是BECOME的工作方式。365天24小时通过微信受理咨询。",
      ],
      aboutHighlights: [
        { label: "直接咨询", value: "韩·中双语" },
        { label: "翻译", value: "0次" },
        { label: "微信咨询", value: "24/7" },
      ],
      greetingHeading: "主任律师致辞",
      greetingBody: [
        "您好，我是BECOME律师事务所主任律师吴东宪。",
        "在韩国遇到法律问题时，最令人恐惧的不是案件本身，而是\u201C我的话没有被准确传达\u201D。每经过一次翻译，事实关系的微妙细节就会被磨损，而这种磨损直接决定处分与判决。",
        "BECOME律师事务所正是为了消除这种磨损而设立。律师以中文直接聆听当事人的陈述，并以韩国法理进行辩护。没有翻译遗漏，也没有文化语境的误解 — 当事人的故事原原本本地传达至法庭。",
        "只要BECOME在身边，绝不让当事人因身为外籍人士而陷入不利。",
      ],
      sigRole: "BECOME律师事务所 主任律师",
      sigName: "吴东宪",
    },
    values: {
      eyebrow: "Core Values",
      centerSub: "直接倾听，精准辩护",
      items: [
        {
          name: "直接沟通",
          tagline: "无需翻译的辩护本身就是力量。",
          body: "律师以中文直接听取事实关系并进行辩护。绝不让翻译遗漏改变案件结果。",
        },
        {
          name: "精准分析",
          tagline: "一件案件，两国视角。",
          body: "不仅以韩国法理，更结合中国当地的商业与文化语境，准确把握当事人所处的现实。",
        },
        {
          name: "负责到底",
          tagline: "处分之后的时间也与您同行。",
          body: "事前评估刑事处分对签证·居留资格的影响，案件结束后的恢复阶段亦持续陪同。",
        },
        {
          name: "信任原则",
          tagline: "没有当事人，就没有我们。",
          body: "将每一位当事人视为人生的同行者，恪守保密、诚实意见、期限管理三项原则。",
        },
      ],
    },
    ctaTitle: "请用您的语言告诉我们您的案件。",
    ctaButton: "在线咨询",
  },
  en: {
    pageTitle: "BECOME Law Firm",
    pageSubtitle: "Protecting your rights in two languages, Korea and China.",
    tabs: { intro: "About", values: "Core Values" },
    intro: {
      eyebrow: "About BECOME",
      titleA: "Heard in your language,",
      titleB: "defended under Korean law.",
      aboutHeading: "About BECOME Law Firm",
      aboutBody: [
        "BECOME Law Firm is a boutique practice that delivers legal services in two languages — Korean and Chinese. Counsel listens to client facts directly in Chinese, without translation, and argues under Korean law.",
        "Criminal, civil, immigration, corporate, family — virtually every legal matter a Chinese-speaking client may face in Korea can be handled under one roof. This is more than translation: through direct dialogue, we make sure the client's testimony stands intact in a Korean courtroom.",
        "We manage the case outcome alongside visa status and future renewals — that is how BECOME works. Consultations are received through WeChat 24/7, year-round.",
      ],
      aboutHighlights: [
        { label: "Direct consult", value: "KO · ZH" },
        { label: "Interpreter", value: "Zero" },
        { label: "WeChat", value: "24/7" },
      ],
      greetingHeading: "Greetings from the Managing Partner",
      greetingBody: [
        "Hello. I'm Donghyun Oh, Managing Partner of BECOME Law Firm.",
        "When facing legal trouble in Korea, the deepest fear is not the outcome itself, but that one's voice is not properly heard. With every layer of translation, the subtle texture of fact erodes — and that erosion turns directly into dispositions and judgments.",
        "BECOME Law Firm was built to remove that erosion. Counsel listens to the facts directly in Chinese and argues them under Korean law. No translation gaps, no cultural misreadings — the client's story reaches the court intact.",
        "With BECOME beside you, being a foreigner in Korea will never become a disadvantage.",
      ],
      sigRole: "Managing Partner, BECOME Law Firm",
      sigName: "Donghyun Oh",
    },
    values: {
      eyebrow: "Core Values",
      centerSub: "Heard directly. Argued precisely.",
      items: [
        {
          name: "Direct Dialogue",
          tagline: "Defense without an interpreter is its own weapon.",
          body: "Counsel listens to the facts and argues the case directly in Chinese — no translation gaps to alter the outcome.",
        },
        {
          name: "Precise Analysis",
          tagline: "One case, the lens of two countries.",
          body: "Not only Korean doctrine, but the business and cultural context inside China — read together to grasp the client's actual reality.",
        },
        {
          name: "Accountable to the End",
          tagline: "We stay through the time after disposition.",
          body: "Pre-assess how a criminal disposition affects visa and residency, and stay with you through the recovery phase after the case ends.",
        },
        {
          name: "Trust First",
          tagline: "Without our clients, we don't exist.",
          body: "We treat every client as a life companion — confidentiality, honest counsel, and disciplined deadlines as our three pillars.",
        },
      ],
    },
    ctaTitle: "Tell us your case, in your language.",
    ctaButton: "Online consultation",
  },
};

const VALUE_ICONS = [
  <MessageSquare key="0" className="w-5 h-5" strokeWidth={2.2} />,
  <Sparkles key="1" className="w-5 h-5" strokeWidth={2.2} />,
  <ShieldCheck key="2" className="w-5 h-5" strokeWidth={2.2} />,
  <HeartHandshake key="3" className="w-5 h-5" strokeWidth={2.2} />,
];

type TabKey = "intro" | "values";

export function Firm() {
  const { language } = useLanguage();
  const lang = language as Lang;
  const c = COPY[lang] ?? COPY.ko;
  const [tab, setTab] = useState<TabKey>("intro");

  return (
    <div className="bg-white min-h-screen pt-10 md:pt-14 pb-32">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page header */}
        <div className="text-center mb-10 md:mb-14">
          <p className="font-mono text-xs font-bold tracking-[0.3em] uppercase text-[#2563EB] mb-4">
            About BECOME
          </p>
          <h1 className="text-3xl md:text-5xl font-extrabold text-[#0f172a] tracking-tight leading-tight mb-4">
            {c.pageTitle}
          </h1>
          <p className="text-base md:text-lg text-slate-600 font-medium max-w-[640px] mx-auto">
            {c.pageSubtitle}
          </p>
        </div>

        {/* Tab pills */}
        <div className="flex justify-center mb-12 md:mb-16">
          <div className="inline-flex bg-slate-100 rounded-full p-1.5 gap-1">
            {(["intro", "values"] as const).map((k) => {
              const active = tab === k;
              return (
                <button
                  key={k}
                  type="button"
                  onClick={() => setTab(k)}
                  className={
                    "px-7 md:px-10 py-3 rounded-full text-sm md:text-base font-bold tracking-tight transition-all " +
                    (active
                      ? "bg-[#0f172a] text-white shadow-[0_8px_20px_-8px_rgba(15,23,42,0.4)]"
                      : "text-slate-600 hover:text-[#0f172a]")
                  }
                >
                  {c.tabs[k]}
                </button>
              );
            })}
          </div>
        </div>

        {/* INTRO TAB — hero panel + firm intro section + greeting section */}
        {tab === "intro" && (
          <motion.div
            key="intro"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.2, 0.65, 0.3, 0.9] }}
          >
            {/* Hero panel — title + portrait only (prose moved below) */}
            <section
              className="relative isolate overflow-hidden rounded-xl
                         bg-gradient-to-br from-[#EAF3FC] via-[#D6E5F4] to-[#BBD2EA]
                         shadow-[0_1px_3px_rgba(15,23,42,0.05),0_30px_70px_-30px_rgba(37,99,235,0.30)]"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute -right-[8%] -bottom-[12%] select-none
                           font-serif font-black italic leading-none tracking-[-0.05em]
                           text-[10rem] md:text-[14rem] lg:text-[18rem] text-white/65 mix-blend-overlay"
              >
                BECOME
              </div>

              <div className="relative grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-6 lg:gap-10 px-6 pt-12 pb-0 md:px-12 md:pt-16 lg:px-14 lg:pt-20 lg:pb-6">
                <div className="flex flex-col justify-center order-2 lg:order-1 z-10 pb-10 lg:pb-20">
                  <p className="font-mono text-[11px] md:text-xs font-bold tracking-[0.22em] text-[#2563EB] uppercase mb-5">
                    {c.intro.eyebrow}
                  </p>
                  <h2 className="text-[2rem] md:text-[2.75rem] lg:text-[3.5rem] leading-[1.08] font-black tracking-tight text-[#0f172a] mb-2">
                    {c.intro.titleA}
                  </h2>
                  <h2 className="text-[2rem] md:text-[2.75rem] lg:text-[3.5rem] leading-[1.08] font-black tracking-tight text-[#2563EB]">
                    {c.intro.titleB}
                  </h2>
                </div>

                <div className="relative order-1 lg:order-2 min-h-[320px] md:min-h-[420px] lg:min-h-[520px] z-[5]">
                  <img
                    src={ohDonghyunCutout}
                    alt={c.intro.sigName}
                    className="absolute inset-x-0 bottom-0 w-full h-full object-contain object-bottom drop-shadow-[0_24px_28px_rgba(15,23,42,0.22)]"
                    loading="eager"
                    decoding="async"
                  />
                </div>
              </div>
            </section>

            {/* SECTION 1 — About BECOME (firm intro) */}
            <section className="mt-16 md:mt-24 grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-10 lg:gap-16">
              <div>
                <p className="font-mono text-[11px] font-bold tracking-[0.28em] uppercase text-[#2563EB] mb-3">
                  01 / About
                </p>
                <h3 className="text-2xl md:text-3xl font-extrabold text-[#0f172a] tracking-tight leading-tight">
                  {c.intro.aboutHeading}
                </h3>
                <div className="w-12 h-[3px] bg-[#0f172a] mt-5" />
              </div>
              <div>
                <div className="space-y-5 max-w-[68ch]">
                  {c.intro.aboutBody.map((p, i) => (
                    <p key={i} className="text-[16px] md:text-[16.5px] leading-[1.85] text-slate-700 font-medium">
                      {p}
                    </p>
                  ))}
                </div>

                {/* Highlights row */}
                <div className="mt-10 grid grid-cols-3 gap-4 md:gap-8 pt-8 border-t border-slate-200">
                  {c.intro.aboutHighlights.map((h, i) => (
                    <div key={i}>
                      <p className="font-mono text-[10px] md:text-[11px] font-bold tracking-[0.2em] uppercase text-slate-500 mb-2">
                        {h.label}
                      </p>
                      <p className="text-2xl md:text-3xl font-black text-[#0f172a] tracking-tight">
                        {h.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* SECTION 2 — Greeting from the attorney */}
            <section className="mt-20 md:mt-28 grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-10 lg:gap-16">
              <div>
                <p className="font-mono text-[11px] font-bold tracking-[0.28em] uppercase text-[#2563EB] mb-3">
                  02 / Greeting
                </p>
                <h3 className="text-2xl md:text-3xl font-extrabold text-[#0f172a] tracking-tight leading-tight">
                  {c.intro.greetingHeading}
                </h3>
                <div className="w-12 h-[3px] bg-[#0f172a] mt-5" />
              </div>
              <div>
                <div className="space-y-5 max-w-[68ch]">
                  {c.intro.greetingBody.map((p, i) => (
                    <p key={i} className="text-[16px] md:text-[16.5px] leading-[1.85] text-slate-700 font-medium">
                      {p}
                    </p>
                  ))}
                </div>

                <div className="mt-10 pt-6 border-t border-slate-200 inline-block pr-8">
                  <p className="text-[12px] font-bold tracking-[0.18em] uppercase text-slate-500 mb-1">
                    {c.intro.sigRole}
                  </p>
                  <p className="text-2xl md:text-3xl font-black tracking-tight text-[#0f172a]">
                    {c.intro.sigName}
                  </p>
                </div>
              </div>
            </section>
          </motion.div>
        )}

        {/* VALUES TAB — orbital diagram (lg+) / stacked grid (mobile) */}
        {tab === "values" && (
          <motion.section
            key="values"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.2, 0.65, 0.3, 0.9] }}
          >
            <p className="font-mono text-[11px] md:text-xs font-bold tracking-[0.3em] uppercase text-[#2563EB] text-center mb-10">
              {c.values.eyebrow}
            </p>

            {/* DESKTOP — orbital diagram */}
            <OrbitalDiagram items={c.values.items} centerSub={c.values.centerSub} />

            {/* MOBILE — 2x2 stacked grid */}
            <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-5 mt-2">
              {c.values.items.map((item, i) => (
                <article
                  key={i}
                  className="group bg-white border border-slate-200 hover:border-[#2563EB] transition-colors p-7 rounded-lg shadow-sm hover:shadow-[0_18px_40px_-20px_rgba(37,99,235,0.35)]"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="grid place-items-center w-9 h-9 rounded-full bg-[#0f172a] text-white">
                      {VALUE_ICONS[i]}
                    </span>
                    <h3 className="text-xl font-extrabold text-[#0f172a] tracking-tight">{item.name}</h3>
                  </div>
                  <p className="text-[#2563EB] font-bold text-[15px] mb-3">{item.tagline}</p>
                  <p className="text-[14.5px] leading-[1.75] text-slate-600 font-medium">{item.body}</p>
                </article>
              ))}
            </div>
          </motion.section>
        )}

        {/* CTA strip */}
        <div className="mt-20 md:mt-28 max-w-[1100px] mx-auto px-2">
          <div className="bg-[#0f172a] text-white rounded-xl px-8 md:px-12 py-10 md:py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <p className="font-mono text-[11px] font-bold tracking-[0.26em] uppercase text-[#2563EB] mb-3">
                Need a lawyer?
              </p>
              <p className="text-xl md:text-2xl font-extrabold tracking-tight">
                {c.ctaTitle}
              </p>
            </div>
            <Link
              to="/#consult"
              className="group inline-flex items-center gap-3 bg-[#2563EB] hover:bg-[#1d4ed8] text-white px-7 py-4 font-extrabold tracking-tight transition-colors rounded-md whitespace-nowrap"
            >
              {c.ctaButton}
              <ArrowRight size={18} strokeWidth={2.5} className="transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────
   Orbital diagram — slow rotating dotted rings around a quiet seal,
   four value cards anchored at cardinal points (12/3/6/9).
   Rings move; cards stay fixed and readable.
   ──────────────────────────────────────────────────────────────── */
function OrbitalDiagram({
  items,
  centerSub,
}: {
  items: { name: string; tagline: string; body: string }[];
  centerSub: string;
}) {
  // Layout constants
  const W = 980;
  const H = 760;
  const CARD_RADIUS = 340; // distance of card center from diagram center
  const RING_OUTER = 300;
  const RING_MID = 230;
  const RING_INNER = 168;

  // Cardinal positions (top, right, bottom, left)
  const positions = [-90, 0, 90, 180];

  return (
    <div
      className="hidden lg:block relative mx-auto"
      style={{ width: W, height: H }}
      aria-label="BECOME core values orbital diagram"
    >
      {/* Decorative SVG rings */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox={`${-W / 2} ${-H / 2} ${W} ${H}`}
        aria-hidden
      >
        <defs>
          <radialGradient id="centerGlow" cx="0" cy="0" r="50%">
            <stop offset="0%" stopColor="rgba(37,99,235,0.10)" />
            <stop offset="100%" stopColor="rgba(37,99,235,0)" />
          </radialGradient>
        </defs>

        {/* Soft center glow */}
        <circle cx="0" cy="0" r="220" fill="url(#centerGlow)" />

        {/* Outer dotted ring — slow CW (60s) */}
        <g style={{ transformOrigin: "0 0", animation: "spin 60s linear infinite" }}>
          <circle
            cx="0"
            cy="0"
            r={RING_OUTER}
            fill="none"
            stroke="rgba(37,99,235,0.32)"
            strokeWidth="1.5"
            strokeDasharray="3 11"
          />
          {/* tiny ticks at 0/90/180/270 */}
          {[0, 90, 180, 270].map((deg) => {
            const rad = (deg * Math.PI) / 180;
            const x1 = Math.cos(rad) * (RING_OUTER - 6);
            const y1 = Math.sin(rad) * (RING_OUTER - 6);
            const x2 = Math.cos(rad) * (RING_OUTER + 6);
            const y2 = Math.sin(rad) * (RING_OUTER + 6);
            return (
              <line
                key={deg}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="rgba(37,99,235,0.45)"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            );
          })}
        </g>

        {/* Middle dotted ring — CCW (90s) */}
        <g style={{ transformOrigin: "0 0", animation: "spin 90s linear infinite reverse" }}>
          <circle
            cx="0"
            cy="0"
            r={RING_MID}
            fill="none"
            stroke="rgba(37,99,235,0.22)"
            strokeWidth="1"
            strokeDasharray="2 9"
          />
        </g>

        {/* Inner solid hairline */}
        <circle
          cx="0"
          cy="0"
          r={RING_INNER}
          fill="none"
          stroke="rgba(15,23,42,0.10)"
          strokeWidth="1"
        />

        {/* Static dashed connectors from center to each cardinal point */}
        {positions.map((angle) => {
          const rad = (angle * Math.PI) / 180;
          const x = Math.cos(rad) * CARD_RADIUS;
          const y = Math.sin(rad) * CARD_RADIUS;
          return (
            <line
              key={angle}
              x1={Math.cos(rad) * RING_INNER}
              y1={Math.sin(rad) * RING_INNER}
              x2={x}
              y2={y}
              stroke="rgba(37,99,235,0.18)"
              strokeWidth="1"
              strokeDasharray="2 5"
            />
          );
        })}
      </svg>

      {/* Center seal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
      >
        <div className="bg-white rounded-2xl px-9 py-7 text-center shadow-[0_24px_60px_-20px_rgba(15,23,42,0.25)] border border-slate-100">
          <p className="font-serif font-black italic text-[2.4rem] tracking-tight text-[#0f172a] leading-none">
            BECOME
          </p>
          <p className="font-mono text-[10px] font-bold tracking-[0.32em] uppercase text-[#2563EB] mt-1.5">
            Law Firm
          </p>
          <div className="w-9 h-[2px] bg-[#0f172a] my-3 mx-auto" />
          <p className="text-[13px] font-bold text-[#0f172a] max-w-[180px] leading-snug">
            {centerSub}
          </p>
        </div>
      </motion.div>

      {/* Cardinal value cards */}
      {items.map((item, i) => {
        const angle = positions[i];
        const rad = (angle * Math.PI) / 180;
        const x = Math.cos(rad) * CARD_RADIUS;
        const y = Math.sin(rad) * CARD_RADIUS;
        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.55, delay: 0.3 + i * 0.12, ease: [0.2, 0.65, 0.3, 0.9] }}
            className="absolute w-[260px]"
            style={{
              top: `calc(50% + ${y}px)`,
              left: `calc(50% + ${x}px)`,
              transform: "translate(-50%, -50%)",
            }}
          >
            <article className="group bg-white border border-slate-200 hover:border-[#2563EB] transition-all duration-300 p-5 rounded-lg shadow-[0_8px_24px_-12px_rgba(15,23,42,0.18)] hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-18px_rgba(37,99,235,0.40)]">
              <div className="flex items-center gap-2.5 mb-2.5">
                <span className="grid place-items-center w-8 h-8 rounded-full bg-[#0f172a] text-white">
                  {VALUE_ICONS[i]}
                </span>
                <h4 className="text-[1.05rem] font-extrabold text-[#0f172a] tracking-tight">
                  {item.name}
                </h4>
              </div>
              <p className="text-[#2563EB] font-bold text-[12.5px] mb-2 leading-snug">
                {item.tagline}
              </p>
              <p className="text-[12.5px] leading-[1.65] text-slate-600 font-medium">
                {item.body}
              </p>
            </article>
          </motion.div>
        );
      })}
    </div>
  );
}

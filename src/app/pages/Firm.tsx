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
  tabs: { greeting: string; values: string };
  greeting: {
    eyebrow: string;
    titleA: string;
    titleB: string;
    body: string[];
    sigRole: string;
    sigName: string;
  };
  values: {
    eyebrow: string;
    centerH: string;
    centerSub: string;
    items: { name: string; tagline: string; body: string }[];
  };
}> = {
  ko: {
    pageTitle: "법률사무소 비컴",
    pageSubtitle: "한국과 중국, 두 언어로 당신의 권리를 지킵니다.",
    tabs: { greeting: "인사말", values: "핵심 가치" },
    greeting: {
      eyebrow: "Greetings & Introduction",
      titleA: "당신의 언어로 듣고,",
      titleB: "한국 법으로 지킵니다.",
      body: [
        "안녕하십니까. 법률사무소 비컴의 대표변호사 오동현입니다.",
        "한국에서 법적 문제에 부딪혔을 때, 가장 두려운 것은 사건의 결과보다도 ‘내 말이 제대로 전달되지 않는 것’입니다. 통역을 한 번 거칠 때마다 사실관계의 미묘한 결이 마모되고, 그 마모는 곧 처분과 판결로 이어집니다.",
        "법률사무소 비컴은 그 마모의 지점을 없애기 위해 만들어졌습니다. 변호사가 직접 중국어로 의뢰인의 사실관계를 청취하고, 한국 법리로 변론합니다. 통역의 누락도, 문화적 맥락의 오해도 없이 — 의뢰인의 이야기가 그대로 법정에 도달합니다.",
        "형사·민사·출입국·기업 자문 — 어떤 사건이든 ‘직접 소통, 정확한 분석, 끝까지 책임’이라는 세 원칙을 지킵니다. 비컴이 곁에 있는 한, 의뢰인이 한국에서 외국인이라는 이유만으로 불리해지는 일은 없도록 하겠습니다.",
      ],
      sigRole: "법률사무소 비컴 대표변호사",
      sigName: "오동현",
    },
    values: {
      eyebrow: "Core Values",
      centerH: "법률사무소 비컴",
      centerSub: "직접 듣고, 정확히 변론하는 곳",
      items: [
        {
          name: "직접 소통",
          tagline: "통역 없는 변론, 그 자체로 무기입니다.",
          body: "변호사가 직접 중국어로 사실관계를 청취하고 변론합니다. 통역의 누락이 결과를 바꾸지 못하도록 합니다.",
        },
        {
          name: "정확한 분석",
          tagline: "한 사건, 두 나라의 시선으로.",
          body: "한국 법리뿐 아니라 중국 현지의 비즈니스·문화 맥락까지 함께 분석해 의뢰인이 처한 현실의 결을 그대로 읽어냅니다.",
        },
        {
          name: "끝까지 책임",
          tagline: "처분 이후의 시간까지 함께합니다.",
          body: "형사 처분이 비자·체류 자격에 미치는 영향까지 사전 평가하고, 사건 종료 후의 회복 단계까지 동행합니다.",
        },
        {
          name: "신뢰의 원칙",
          tagline: "의뢰인이 없으면 우리도 없습니다.",
          body: "한 분 한 분의 사건을 인생의 동반자로 여기며, 비밀 유지·정직한 의견·시한 관리의 세 원칙을 지킵니다.",
        },
      ],
    },
  },
  zh: {
    pageTitle: "BECOME 律师事务所",
    pageSubtitle: "韩国与中国，用两种语言守护您的权利。",
    tabs: { greeting: "致辞", values: "核心价值" },
    greeting: {
      eyebrow: "Greetings & Introduction",
      titleA: "用您的语言倾听，",
      titleB: "以韩国法守护。",
      body: [
        "您好，我是BECOME律师事务所主任律师吴东宪。",
        "在韩国遇到法律问题时，最令人恐惧的不是案件本身，而是\u201C我的话没有被准确传达\u201D。每经过一次翻译，事实关系的微妙细节就会被磨损，而这种磨损直接决定处分与判决。",
        "BECOME律师事务所正是为了消除这种磨损而设立。律师以中文直接聆听当事人的陈述，并以韩国法理进行辩护。没有翻译遗漏，也没有文化语境的误解 — 当事人的故事原原本本地传达至法庭。",
        "刑事、民事、出入境、企业法务 — 无论何种案件，我们坚持\u201C直接沟通、精准分析、负责到底\u201D三大原则。只要BECOME在身边，绝不让当事人因身为外籍人士而陷入不利。",
      ],
      sigRole: "BECOME律师事务所 主任律师",
      sigName: "吴东宪",
    },
    values: {
      eyebrow: "Core Values",
      centerH: "BECOME 律师事务所",
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
  },
  en: {
    pageTitle: "BECOME Law Firm",
    pageSubtitle: "Protecting your rights in two languages, Korea and China.",
    tabs: { greeting: "Greetings", values: "Core Values" },
    greeting: {
      eyebrow: "Greetings & Introduction",
      titleA: "Heard in your language,",
      titleB: "defended under Korean law.",
      body: [
        "Hello. I'm Donghyun Oh, Managing Partner of BECOME Law Firm.",
        "When facing legal trouble in Korea, the deepest fear is not the outcome itself, but that one's voice is not properly heard. With every layer of translation, the subtle texture of fact erodes — and that erosion turns directly into dispositions and judgments.",
        "BECOME Law Firm was built to remove that erosion. Counsel listens to the facts directly in Chinese and argues them under Korean law. No translation gaps, no cultural misreadings — the client's story reaches the court intact.",
        "Criminal, civil, immigration, corporate — whatever the matter, we hold to three principles: direct dialogue, precise analysis, accountability to the end. With BECOME beside you, being a foreigner in Korea will never become a disadvantage.",
      ],
      sigRole: "Managing Partner, BECOME Law Firm",
      sigName: "Donghyun Oh",
    },
    values: {
      eyebrow: "Core Values",
      centerH: "BECOME Law Firm",
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
  },
};

const VALUE_ICONS = [
  <MessageSquare key="0" className="w-5 h-5" strokeWidth={2.2} />,
  <Sparkles key="1" className="w-5 h-5" strokeWidth={2.2} />,
  <ShieldCheck key="2" className="w-5 h-5" strokeWidth={2.2} />,
  <HeartHandshake key="3" className="w-5 h-5" strokeWidth={2.2} />,
];

type TabKey = "greeting" | "values";

export function Firm() {
  const { language } = useLanguage();
  const lang = language as Lang;
  const c = COPY[lang] ?? COPY.ko;
  const [tab, setTab] = useState<TabKey>("greeting");

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
            {(["greeting", "values"] as const).map((k) => {
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

        {/* Greeting tab */}
        {tab === "greeting" && (
          <motion.section
            key="greeting"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.2, 0.65, 0.3, 0.9] }}
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
                  {c.greeting.eyebrow}
                </p>
                <h2 className="text-[2rem] md:text-[2.75rem] lg:text-[3.5rem] leading-[1.08] font-black tracking-tight text-[#0f172a] mb-2">
                  {c.greeting.titleA}
                </h2>
                <h2 className="text-[2rem] md:text-[2.75rem] lg:text-[3.5rem] leading-[1.08] font-black tracking-tight text-[#2563EB]">
                  {c.greeting.titleB}
                </h2>

                <div className="w-14 h-[3px] bg-[#0f172a] mt-8 mb-7" />

                <div className="space-y-5 max-w-[58ch]">
                  {c.greeting.body.map((p, i) => (
                    <p key={i} className="text-[15.5px] md:text-base leading-[1.85] text-[#0f172a]/85 font-medium">
                      {p}
                    </p>
                  ))}
                </div>

                <div className="mt-10 pt-6 border-t border-[#0f172a]/15">
                  <p className="text-[12px] font-bold tracking-[0.18em] uppercase text-[#0f172a]/70 mb-1">
                    {c.greeting.sigRole}
                  </p>
                  <p className="text-2xl md:text-3xl font-black tracking-tight text-[#0f172a]">
                    {c.greeting.sigName}
                  </p>
                </div>
              </div>

              <div className="relative order-1 lg:order-2 min-h-[320px] md:min-h-[420px] lg:min-h-[600px] z-[5]">
                <img
                  src={ohDonghyunCutout}
                  alt={c.greeting.sigName}
                  className="absolute inset-x-0 bottom-0 w-full h-full object-contain object-bottom drop-shadow-[0_24px_28px_rgba(15,23,42,0.22)]"
                  loading="eager"
                  decoding="async"
                />
              </div>
            </div>
          </motion.section>
        )}

        {/* Values tab */}
        {tab === "values" && (
          <motion.section
            key="values"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.2, 0.65, 0.3, 0.9] }}
            className="relative"
          >
            <p className="font-mono text-[11px] md:text-xs font-bold tracking-[0.3em] uppercase text-[#2563EB] text-center mb-10">
              {c.values.eyebrow}
            </p>

            {/* Center mark + radial dotted decoration (desktop) */}
            <div className="relative mx-auto max-w-[1100px]">
              <div
                aria-hidden
                className="hidden lg:block absolute inset-0 -z-10"
                style={{
                  background:
                    "radial-gradient(circle at center, transparent 0, transparent 230px, rgba(37,99,235,0.18) 231px, rgba(37,99,235,0.18) 232px, transparent 233px), radial-gradient(circle at center, transparent 0, transparent 350px, rgba(37,99,235,0.10) 351px, rgba(37,99,235,0.10) 353px, transparent 354px)",
                }}
              />

              {/* Center mark */}
              <div className="text-center mb-12 lg:mb-16">
                <div className="inline-flex flex-col items-center px-10 py-8 rounded-2xl bg-white">
                  <p className="font-serif font-black italic text-3xl md:text-4xl tracking-tight text-[#0f172a]">
                    BECOME
                  </p>
                  <p className="font-mono text-[10px] md:text-xs font-bold tracking-[0.32em] uppercase text-[#2563EB] mt-1">
                    Law Firm
                  </p>
                  <div className="w-10 h-[2px] bg-[#0f172a] my-4" />
                  <p className="text-sm md:text-base font-bold text-[#0f172a]">
                    {c.values.centerSub}
                  </p>
                </div>
              </div>

              {/* Value cards in 2x2 grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                {c.values.items.map((item, i) => (
                  <motion.article
                    key={i}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                    className="group bg-white border border-slate-200 hover:border-[#2563EB] transition-colors p-7 md:p-8 rounded-lg shadow-sm hover:shadow-[0_18px_40px_-20px_rgba(37,99,235,0.35)]"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <span className="grid place-items-center w-9 h-9 rounded-full bg-[#0f172a] text-white">
                        {VALUE_ICONS[i]}
                      </span>
                      <h3 className="text-xl md:text-[1.4rem] font-extrabold text-[#0f172a] tracking-tight">
                        {item.name}
                      </h3>
                    </div>
                    <p className="text-[#2563EB] font-bold text-[15px] mb-3">
                      {item.tagline}
                    </p>
                    <p className="text-[14.5px] leading-[1.75] text-slate-600 font-medium">
                      {item.body}
                    </p>
                  </motion.article>
                ))}
              </div>
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
                {lang === "ko"
                  ? "당신의 사안을 당신의 언어로 들려주세요."
                  : lang === "zh"
                    ? "请用您的语言告诉我们您的案件。"
                    : "Tell us your case, in your language."}
              </p>
            </div>
            <Link
              to="/#consult"
              className="group inline-flex items-center gap-3 bg-[#2563EB] hover:bg-[#1d4ed8] text-white px-7 py-4 font-extrabold tracking-tight transition-colors rounded-md whitespace-nowrap"
            >
              {lang === "ko" ? "온라인 상담 접수" : lang === "zh" ? "在线咨询" : "Online consultation"}
              <ArrowRight size={18} strokeWidth={2.5} className="transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

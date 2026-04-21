import { useState } from "react";
import { motion } from "motion/react";
import { MessageSquare, Sparkles, ShieldCheck, HeartHandshake } from "lucide-react";
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
    title: string;
    subtitle: string;
    items: { name: string; tagline: string; body: string[] }[];
  };
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
      title: "비컴이 일하는 네 가지 원칙",
      subtitle: "변하지 않는 네 개의 약속이 모든 사건의 기준이 됩니다.",
      items: [
        {
          name: "직접 소통",
          tagline: "통역 없는 변론, 그 자체로 무기.",
          body: [
            "한국에서 외국인이 처음 마주하는 가장 큰 벽은 언어가 아니라, 자신의 말이 변호사 → 통역인 → 검사·판사를 거치는 동안 결을 잃는다는 사실입니다. 미묘한 어조와 시점, 의도가 한 단계씩 마모되는 동안 사실관계는 점점 단순해지고, 그 단순화가 곧 처분과 판결의 근거가 됩니다.",
            "비컴은 변호사 본인이 중국어로 직접 청취·변론합니다. 통역의 단계 자체가 없으므로, 의뢰인이 사용하는 단어 하나하나가 그대로 변론서에 옮겨집니다. 형사 진술, 민사 증인 신문, 출입국 의견서 — 어떤 단계에서도 의뢰인의 진의가 왜곡되지 않습니다.",
            "이는 단순한 \u2018서비스 편의\u2019가 아니라, 외국인 의뢰인의 변호인의 조력을 받을 권리(형사소송법 제244조의2)를 실효성 있게 보장하는 방식이라고 믿습니다.",
          ],
        },
        {
          name: "정확한 분석",
          tagline: "한 사건, 두 나라의 시선으로.",
          body: [
            "같은 사실관계라도 한국 법원의 시각과 중국 의뢰인의 사회·문화적 맥락에서 보이는 모습은 다릅니다. 단순히 한국 법조문만 적용해 답을 내리는 것은, 의뢰인이 처한 실제 상황을 절반밖에 보지 못하는 일과 같습니다.",
            "비컴은 한국의 법리·판례·실무 동향을 기본으로, 중국 현지의 비즈니스 관행, 가족 관계 구조, 계약 문화, 행정 절차까지 입체적으로 분석합니다. 형사 사건의 양형 자료, 민사 사건의 손해 산정, 가사 사건의 양육권 평가 — 어떤 단계에서도 \u2018한 나라 법전만 보는 분석\u2019은 배제합니다.",
            "이는 과거 중국 현지에서 직접 일하고 생활한 변호사의 실무 경험이 있기에 가능한 깊이입니다.",
          ],
        },
        {
          name: "끝까지 책임",
          tagline: "처분 이후의 시간까지 함께.",
          body: [
            "의뢰인에게 사건의 끝은 판결문이 아닙니다. 형사 처분 이후 비자가 어떻게 되는지, 민사 판결 이후 강제집행을 어떻게 진행할지, 가사 사건 이후 자녀의 학교·체류 자격을 어떻게 정리할지 — 그 모든 \u2018후속 단계\u2019가 의뢰인에게는 더 큰 사건이 됩니다.",
            "비컴은 사건 수임 단계에서부터 처분 이후의 경로를 함께 설계합니다. 형사 사건이라면 강제퇴거 가능성을, 민사 사건이라면 자산 가압류 시점을, 가사 사건이라면 양국 등록 절차를 동시에 트래킹합니다.",
            "한 단계가 끝났다고 손을 떼지 않는 것 — 이것이 비컴이 \u2018대리인\u2019이 아닌 \u2018동반자\u2019라고 스스로를 부르는 이유입니다.",
          ],
        },
        {
          name: "신뢰의 원칙",
          tagline: "의뢰인이 없으면 우리도 없습니다.",
          body: [
            "법무 서비스에서 가장 무거운 약속은 결과에 대한 약속이 아니라, 의뢰인에 대한 정직함의 약속입니다. 비컴은 어떤 사건이든 승소 가능성을 객관적으로 평가하고, 의뢰인에게 부정적인 요소도 회피하지 않고 전달합니다.",
            "비밀 유지는 수임 여부와 무관하게 적용됩니다. 상담 단계에서 들은 어떤 사실도 외부로 새지 않으며, 사건 종료 후에도 동일하게 보호됩니다.",
            "시한 관리는 변호사 본인이 직접 챙깁니다. 이의신청 7일, 행정소송 90일, 항소 7일 — 단 하루의 누락도 의뢰인의 권리를 회복 불가능하게 만들 수 있다는 사실을 매 순간 의식합니다.",
          ],
        },
      ],
    },
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
      title: "BECOME 工作的四项原则",
      subtitle: "不变的四项承诺，是每一件案件的标准。",
      items: [
        {
          name: "直接沟通",
          tagline: "无需翻译的辩护，本身就是力量。",
          body: [
            "外籍当事人在韩国遇到的最大障碍并非语言本身，而是自己的陈述经由律师 → 翻译 → 检察官·法官的层层传递时不断被磨损。微妙的语气、时机和意图在每一阶段被稀释，事实关系逐渐被简化，而这种简化直接成为处分和判决的依据。",
            "BECOME律师事务所由律师本人以中文直接听取陈述并进行辩护。因为完全没有翻译环节，当事人使用的每一个词都直接进入辩护书。无论是刑事陈述、民事证人讯问，还是出入境意见书，当事人的本意都不会在任何阶段被扭曲。",
            "我们认为，这不仅是\u201C服务上的便利\u201D，更是切实保障外籍当事人获得律师协助权利（《刑事诉讼法》第244条之2）的方式。",
          ],
        },
        {
          name: "精准分析",
          tagline: "一件案件，两国视角。",
          body: [
            "同样的事实关系，从韩国法院的视角和中国当事人的社会文化语境出发，所呈现的样貌截然不同。仅依韩国法条直接得出结论，等于只看到当事人现实的一半。",
            "BECOME以韩国法理、判例与实务动态为基础，结合中国当地的商业惯例、家庭关系结构、合同文化与行政程序进行立体分析。无论是刑事案件的量刑材料、民事案件的损害评估，还是家事案件的抚养权评估，我们都拒绝\u201C仅看一国法典的分析\u201D。",
            "这种深度，源于律师过去在中国当地实际工作与生活的实务经验。",
          ],
        },
        {
          name: "负责到底",
          tagline: "处分之后的时间也与您同行。",
          body: [
            "对当事人而言，案件的终点并非判决书。刑事处分后签证如何处理、民事判决后如何进行强制执行、家事案件后子女的就学与居留资格如何整理 — 所有这些\u201C后续阶段\u201D对当事人而言才是更大的案件。",
            "BECOME自接案阶段起便与当事人共同设计处分之后的路径。刑事案件中预判强制遣返可能性、民事案件中把握资产假扣押时点、家事案件中同步追踪两国登记程序。",
            "一阶段结束后绝不撒手 — 这正是BECOME自称\u201C同行者\u201D而非\u201C代理人\u201D的原因。",
          ],
        },
        {
          name: "信任原则",
          tagline: "没有当事人，就没有我们。",
          body: [
            "法律服务中最沉重的承诺，不是对结果的承诺，而是对当事人的诚实承诺。BECOME对任何案件都客观评估胜诉可能性，绝不回避向当事人传达不利因素。",
            "保密义务不论是否最终受案均同等适用。咨询阶段听到的任何事实都不会外泄，案件结束后亦同样受保护。",
            "期限管理由律师本人亲自把控。异议申请7日、行政诉讼90日、上诉7日 — 哪怕一日的疏漏都可能令当事人的权利无法挽回，这一点我们时刻铭记。",
          ],
        },
      ],
    },
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
      title: "Four principles BECOME works by.",
      subtitle: "Four promises that don't change — and that set the bar for every case.",
      items: [
        {
          name: "Direct Dialogue",
          tagline: "Defense without an interpreter is its own weapon.",
          body: [
            "The first wall a foreigner hits in Korea is not the language itself — it is the fact that one's words lose texture as they pass from client to lawyer to interpreter to prosecutor and judge. Tone, timing, and intent are sanded down at every step, the facts are simplified, and that simplification becomes the basis of disposition and judgment.",
            "At BECOME, counsel listens and argues in Chinese personally. Because there is no translation layer, every word the client uses lands in the brief intact. From criminal interrogations to civil witness examinations to immigration submissions, the client's true meaning is never bent at any stage.",
            "We treat this not as a service convenience, but as the way to give the foreign client's right to counsel (Korean Criminal Procedure Act, Art. 244-2) real, working force.",
          ],
        },
        {
          name: "Precise Analysis",
          tagline: "One case, the lens of two countries.",
          body: [
            "The same set of facts looks different through a Korean court's lens than through the social and cultural context of a Chinese client. Applying only the Korean code is like seeing half of the client's actual reality.",
            "BECOME starts from Korean doctrine, precedent, and practice trends — then layers in Chinese business customs, family structure, contract culture, and administrative procedure. Whether it is sentencing material in a criminal matter, damages calculation in a civil matter, or custody assessment in a family matter, we refuse 'one-jurisdiction-only' analysis.",
            "That depth is possible because counsel has worked and lived inside China, not merely studied it from abroad.",
          ],
        },
        {
          name: "Accountable to the End",
          tagline: "We stay through the time after disposition.",
          body: [
            "For a client, the case does not end with the verdict. What happens to the visa after a criminal disposition, how to enforce a civil judgment, how to settle a child's school and residency after a family matter — every one of those 'next steps' is, for the client, the larger case.",
            "BECOME designs the post-disposition path from the moment we take on the matter. Criminal cases track deportation risk; civil cases track the right moment for asset attachment; family cases track registration in both countries — all in parallel.",
            "We do not let go when one stage ends. That is why BECOME calls itself a 'companion' rather than a mere 'representative'.",
          ],
        },
        {
          name: "Trust First",
          tagline: "Without our clients, we don't exist.",
          body: [
            "The heaviest promise in legal service is not a promise about outcome, but a promise of honesty toward the client. BECOME assesses the probability of success objectively in every case, and does not flinch from telling the client the unfavorable facts.",
            "Confidentiality applies whether or not we are ultimately retained. Anything heard at consultation stays inside our walls, and remains protected after the case ends.",
            "Deadlines are managed by counsel personally. Seven days for appeal, ninety days for litigation, seven days for criminal appeal — every day matters, and we are aware that a single missed day can make a client's right unrecoverable.",
          ],
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
            {/* Hero panel — title + portrait only */}
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

        {/* VALUES TAB — editorial vertical layout, 4 numbered sections with extended prose */}
        {tab === "values" && (
          <motion.section
            key="values"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.2, 0.65, 0.3, 0.9] }}
          >
            {/* Compact section header — kept tight so the diagram lands above the fold */}
            <div className="text-center mb-6 md:mb-8">
              <p className="font-mono text-[10px] md:text-[11px] font-bold tracking-[0.3em] uppercase text-[#2563EB] mb-3">
                {c.values.eyebrow}
              </p>
              <h2 className="text-[1.5rem] md:text-[2rem] lg:text-[2.5rem] leading-[1.15] font-black tracking-tight text-[#0f172a]">
                {c.values.title}
              </h2>
            </div>

            {/* Cardinal diagram — at-a-glance view, animated dashed rings */}
            <ValuesDiagram items={c.values.items.map((it) => ({ name: it.name, tagline: it.tagline }))} />

            {/* Subtitle below the diagram (was above) — keeps the diagram tight */}
            <p className="text-center text-sm md:text-base text-slate-600 font-medium leading-relaxed max-w-[640px] mx-auto mb-16 md:mb-24">
              {c.values.subtitle}
            </p>

            {/* Vertical numbered sections */}
            <div className="space-y-16 md:space-y-24">
              {c.values.items.map((item, i) => (
                <motion.article
                  key={i}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.55, delay: 0.05, ease: [0.2, 0.65, 0.3, 0.9] }}
                  className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-8 lg:gap-16 pb-16 md:pb-20 border-b border-slate-200 last:border-b-0 last:pb-0"
                >
                  {/* Left column — number + name + tagline + icon */}
                  <div className="lg:sticky lg:top-32 self-start">
                    <div className="flex items-baseline gap-3 mb-5">
                      <span className="font-serif font-black text-[#2563EB] text-[2.25rem] leading-none tabular-nums">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="font-mono text-[10px] font-bold tracking-[0.28em] uppercase text-slate-400">
                        Value
                      </span>
                    </div>

                    <div className="flex items-center gap-3 mb-3">
                      <span className="grid place-items-center w-9 h-9 rounded-full bg-[#0f172a] text-white">
                        {VALUE_ICONS[i]}
                      </span>
                      <h3 className="text-2xl md:text-[1.85rem] font-black text-[#0f172a] tracking-tight">
                        {item.name}
                      </h3>
                    </div>

                    <p className="text-[#2563EB] font-bold text-base leading-snug max-w-[260px]">
                      {item.tagline}
                    </p>
                    <div className="w-10 h-[3px] bg-[#0f172a] mt-5" />
                  </div>

                  {/* Right column — extended body paragraphs */}
                  <div>
                    <div className="space-y-5 max-w-[68ch]">
                      {item.body.map((p, j) => (
                        <p
                          key={j}
                          className="text-[16px] md:text-[16.5px] leading-[1.85] text-slate-700 font-medium"
                        >
                          {p}
                        </p>
                      ))}
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.section>
        )}

      </div>
    </div>
  );
}

/* ────────────────────────────────────────────────────────────────
   ValuesDiagram — symmetric cardinal layout with rotating dashed
   rings. Cards positioned via CSS percent + transform for
   guaranteed symmetry; rings rotate via CSS transform on plain
   HTML divs (avoids the SVG transform-origin pitfall that broke
   the previous orbital diagram).
   Hidden under md to keep the editorial sections below the only
   touchpoint on small screens.
   ──────────────────────────────────────────────────────────────── */
function ValuesDiagram({ items }: { items: { name: string; tagline: string }[] }) {
  // Cardinal placement order: top, right, bottom, left
  const positions = [
    { className: "top-0 left-1/2 -translate-x-1/2", line: { x2: 50, y2: 14 } },
    { className: "top-1/2 right-0 -translate-y-1/2", line: { x2: 86, y2: 50 } },
    { className: "bottom-0 left-1/2 -translate-x-1/2", line: { x2: 50, y2: 86 } },
    { className: "top-1/2 left-0 -translate-y-1/2", line: { x2: 14, y2: 50 } },
  ];

  return (
    <div className="mb-10 md:mb-12">
      {/* Container is responsive-square so it stays symmetric at every breakpoint
          AND the whole diagram fits within a single viewport on common laptops/phones.  */}
      <div className="relative mx-auto aspect-square w-full max-w-[320px] sm:max-w-[420px] md:max-w-[480px] lg:max-w-[560px]">
        {/* Rotating dashed rings — HTML divs with reliable CSS rotation */}
        <div
          aria-hidden
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#2563EB]/30"
          style={{ width: "72%", height: "72%", animation: "spin 60s linear infinite" }}
        />
        <div
          aria-hidden
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#2563EB]/20"
          style={{ width: "52%", height: "52%", animation: "spin 90s linear infinite reverse" }}
        />
        {/* Innermost solid hairline (no rotation) */}
        <div
          aria-hidden
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-slate-200"
          style={{ width: "36%", height: "36%" }}
        />

        {/* Soft center glow */}
        <div
          aria-hidden
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
          style={{
            width: "48%",
            height: "48%",
            background:
              "radial-gradient(circle, rgba(37,99,235,0.10) 0%, rgba(37,99,235,0) 70%)",
          }}
        />

        {/* SVG connection lines — center to each cardinal card */}
        <svg
          aria-hidden
          className="absolute inset-0 w-full h-full pointer-events-none z-[1]"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          {positions.map((p, i) => (
            <line
              key={i}
              x1={50}
              y1={50}
              x2={p.line.x2}
              y2={p.line.y2}
              stroke="rgba(37,99,235,0.22)"
              strokeWidth="0.25"
              strokeDasharray="0.6 1.2"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
            />
          ))}
        </svg>

        {/* Center BECOME seal — responsive padding + type */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
        >
          <div className="bg-white rounded-xl md:rounded-2xl px-4 py-3 sm:px-5 sm:py-4 md:px-7 md:py-5 lg:px-8 lg:py-6 text-center shadow-[0_18px_44px_-18px_rgba(15,23,42,0.22)] border border-slate-100">
            <p className="font-serif font-black italic text-[1.05rem] sm:text-xl md:text-2xl lg:text-[1.85rem] tracking-tight text-[#0f172a] leading-none">
              BECOME
            </p>
            <p className="font-mono text-[8px] sm:text-[9px] md:text-[10px] font-bold tracking-[0.28em] uppercase text-[#2563EB] mt-1 md:mt-1.5">
              Law Firm
            </p>
            <div className="hidden sm:block w-7 md:w-8 h-[2px] bg-[#0f172a] my-2 md:my-3 mx-auto" />
            <p className="hidden sm:block text-[10.5px] md:text-[11.5px] lg:text-[12px] font-bold text-[#0f172a] max-w-[140px] md:max-w-[170px] leading-snug">
              네 가지 원칙으로 변론합니다.
            </p>
          </div>
        </motion.div>

        {/* Four cardinal cards — responsive width, tagline drops on the smallest screens */}
        {items.map((item, i) => {
          const pos = positions[i];
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              className={`absolute w-[110px] sm:w-[150px] md:w-[178px] lg:w-[210px] z-[5] ${pos.className}`}
            >
              <div className="bg-white border border-slate-200 hover:border-[#2563EB] transition-colors rounded-md md:rounded-lg p-2.5 sm:p-3 md:p-4 lg:p-5 shadow-[0_6px_18px_-10px_rgba(15,23,42,0.18)]">
                <div className="flex items-center gap-1.5 sm:gap-2 md:gap-2.5 mb-1 md:mb-2">
                  <span className="grid place-items-center w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 rounded-full bg-[#0f172a] text-white shrink-0">
                    {VALUE_ICONS[i]}
                  </span>
                  <h4 className="text-[12px] sm:text-[13.5px] md:text-[15px] lg:text-[1.05rem] font-extrabold text-[#0f172a] tracking-tight leading-tight">
                    {item.name}
                  </h4>
                </div>
                <p className="hidden sm:block text-[#2563EB] font-bold text-[10.5px] md:text-[11.5px] lg:text-[12.5px] leading-snug">
                  {item.tagline}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

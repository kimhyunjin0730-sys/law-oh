import { motion } from "motion/react";
import { GraduationCap, Briefcase, Award, MapPin } from "lucide-react";
import { SectionHeading } from "../components/SectionHeading";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { useLanguage } from "../context/LanguageContext";

export function About() {
  const { language } = useLanguage();

  const content = {
    ko: {
      title: "대표 변호사 소개",
      subtitle: "단순한 언어 능력을 넘어, 중국의 비즈니스와 문화를 완벽히 이해하는 법률 전문가입니다.",
      intro1_sub: "'내 말이 제대로 전달되지 않는 것'",
      intro1_part1: "한국에서 법적 문제에 부딪혔을 때, 가장 두려운 것은 ",
      intro1_part2: "입니다.",
      intro2: "법률사무소 한교의 오동현 변호사는 중국어 소통에 문제가 없으며, 중국 현지에서 수년간 생활하고 일한 경험을 바탕으로 중국어권 의뢰인의 상황을 누구보다 정확하게 이해합니다.",
      intro3: "당신의 이야기를, 당신의 언어로 들을 준비가 되어 있습니다.",
      nameTitle: "오동현",
      nameSub: "대표 변호사",
      nameFull: "오동현 변호사",
      quote: `"저는 중국에서 살았고, 일했고, 그 언어로 생각합니다. 그래서 당신의 상황을 완벽히 이해합니다."`,
      eduTitle: "학력 (学历)",
      edu1: "고려대학교 중어중문학, 경영학 (복수전공)",
      edu2: "경북대학교 법학전문대학원",
      expTitle: "중국 관련 경력 (涉华经历)",
      expDesc: "오동현 변호사의 중국 관련 경험은 단순한 어학 연수 수준을 넘어, 실제 중국 현지 기업·기관에서의 실무 경험을 포함합니다.",
      expList: [
        {
          title: "🏢 ㈜한화/무역 석유화학팀 사원",
          date: "(2016. 12 ~ 2018. 03)",
          desc: "한국 대기업 ㈜한화의 무역 부문에서 대중(對中) 석유화학 제품 수출입 업무를 담당하였습니다. 영문·중문 계약서 작성 및 검토, 해외 지사 외국 사원과의 연락·응대 업무를 직접 수행하였으며, 이 경험은 현재 중국 기업과의 계약 자문 업무에 직접적으로 활용됩니다."
        },
        {
          title: "🌐 중국 북경 기금회중심망 (China Foundation Center) 인턴",
          date: "(2015. 01 ~ 2015. 06)",
          desc: "중국 최대 NGO 정보 플랫폼인 基金會中心網에서 인턴으로 근무하며 한중 NGO 자료 비교조사 및 영중한 통번역 업무를 수행하였습니다. 중국의 비영리 법인 운영 구조와 사회적 맥락을 깊이 이해하게 된 계기가 되었습니다."
        },
        {
          title: "🥋 중국 광서성 세계태권도평화봉사재단",
          date: "(2014. 01)",
          desc: "중국 광서성 현지에서 태권도 교육 및 중국어 통역 업무를 수행하며, 중국 지방 사회와의 직접적인 교류 경험을 쌓았습니다."
        },
        {
          title: "🏭 중국 소주(苏州) 소재 건자재 기업 인턴",
          date: "(2012. 07)",
          desc: "Suzhou Chun-Bo New Construction Material Co., Ltd. (苏州天辅新型建材有限公司)에서 인턴으로 근무하며 시장 동향 파악, 자료 조사, 영중한 통번역 및 현장 실무를 수행하였습니다. 중국 제조업 현장의 비즈니스 관행을 몸으로 익혔습니다."
        },
        {
          title: "🎓 중국 북경사범대학교 연수",
          date: "(2012. 02)",
          desc: "북경 현지 어학·법제 수업을 통해 학계 중국어 환경에 직접 노출되어 단순 어학연수를 넘어 중국 현지 생활 기반을 다진 출발점입니다."
        }
      ],
      certTitle: "자격 및 기타",
      certs: [
        "남서울탐정사관학교 사립탐정사 최고위과정 강사 및 수료",
        "신용관리사",
        "지게차운전기능사",
        "굴착기운전기능사",
        "조주기능사"
      ],
      processTitle: "합리적인 서비스 프로세스",
      processSubtitle: "접수부터 사후관리까지, 심리적 문턱을 낮추고 투명하게 진행합니다.",
      processes: [
        { step: "01", title: "접수", desc: "위챗/전화 접수 시 이중언어 사무장이 1차 상담", note: "심리적 문턱 낮춤" },
        { step: "02", title: "분석", desc: "변호사와 협력하여 초기 단계부터 '비자 영향 평가' 실시", note: "형사 처벌 시 강제 출국 가능성 사전 진단" },
        { step: "03", title: "진행", desc: "모든 서면 및 사건 진행 상황을 한-중 양문으로 동시 제공", note: "진행 상황 투명성 확보" },
        { step: "04", title: "사후관리", desc: "사건 종료 후 '체류 자격 유지 가이드' 추가 제공", note: "재방문 및 추천 유도" }
      ],
      timelineTitle: "주요 경력 요약",
      timeline: [
        { year: "2026. 02", title: "법률사무소 한교 파트너 변호사 (현재)" },
        { year: "2025. 07", title: "법률사무소 한교 소속변호사" },
        { year: "2025. 01", title: "법무법인 동감 소속변호사" },
        { year: "2024. 11", title: "국제지식재산연수원 변리사 연수과정 수료" },
        { year: "2024", title: "대한변호사협회 연수" },
        { year: "2022. 01", title: "동계 경찰대학 실무 수습" },
        { year: "2020. 03", title: "경북대학교 법학전문대학원 입학" },
        { year: "2016. 12 ~ 2018. 03", title: "㈜한화/무역 해외영업 근무" },
        { year: "2015. 01 ~ 2015. 06", title: "중국 북경 소재 基金會中心網 (China Foundation Center) 근무" },
        { year: "2014. 01", title: "중국 광서성 세계태권도평화봉사재단 태권도 교육 및 중국어 통역" },
        { year: "2012. 07", title: "중국 소주 소재 Suzhou Chun-Bo New Construction Material Co., Ltd. 근무" },
        { year: "2012. 02", title: "중국 북경사범대학교 연수" },
        { year: "2008. 03", title: "고려대학교 중어중문학·경영학 입학" },
      ]
    },
    zh: {
      title: "代表律师介绍",
      subtitle: "超越单纯的语言能力，我们是完美理解中国商业与文化的法律专家。",
      intro1_sub: "“我的话没被准确传达”",
      intro1_part1: "在韩国遇到法律问题时，最害怕的就是 ",
      intro1_part2: "。",
      intro2: "韩桥律师事务所的吴东宪律师精通中韩双语且沟通无碍。凭借在中国多年生活与工作经验，能够比任何人都更加精准地理解中文客户的现实处境。",
      intro3: "我们已准备好，用您的语言倾听您的故事。",
      nameTitle: "吴东宪",
      nameSub: "主任/代表律师",
      nameFull: "吴东宪 律师",
      quote: `"我曾在中国生活、工作，甚至用中文思考。所以我能完美理解您的处境。"`,
      eduTitle: "学历",
      edu1: "高丽大学 中文系、工商管理系 (双学位)",
      edu2: "庆北大学 法学大专门研究生院 (法学院)",
      expTitle: "涉华工作经历",
      expDesc: "吴东宪律师的涉华经验远非简单的语言进修，更包含了深入中国当地企业及机构的大量实务经验。",
      expList: [
        {
          title: "🏢 韩国韩华(Hanwha)贸易集团 石化部门",
          date: "(2016. 12 ~ 2018. 03)",
          desc: "曾在韩国大企业韩华集团贸易部门处理对华石化产品的进出口业务。亲自起草和审核中英文合同，并直接联络应答海外分公司外籍员工，这些丰富的涉外业务经验，如今在其直接为涉华企业提供法律顾问服务中发挥着重要作用。"
        },
        {
          title: "🌐 中国北京 基金会中心网 (China Foundation Center) 实习",
          date: "(2015. 01 ~ 2015. 06)",
          desc: "于中国最大的非政府组织(NGO)信息平台基金会中心网(CFC)进行实习，开展中韩NGO资料的比较调查及中、韩、英互译业务，从而深入理解了中国非营利法人的运作结构及社会背景。"
        },
        {
          title: "🥋 中国广西省 世界跆拳道和平服务财团",
          date: "(2014. 01)",
          desc: "在中国广西省当地承担跆拳道培训及中文口译工作，并积累了与中国地方社会展开直接交流的经验。"
        },
        {
          title: "🏭 中国苏州市 某建筑材料企业 实习",
          date: "(2012. 07)",
          desc: "在苏州天辅新型建材有限公司进行实习，负责市场动向摸底、资料搜集、中英韩翻译及现场实务操作。他用身体力行的方式深入了解了中国制造一线的商业惯例。"
        },
        {
          title: "🎓 中国北京师范大学 研修",
          date: "(2012. 02)",
          desc: "通过在北京当地的语言和法制课程，直接接触学术界中文环境，这不仅是简单的语言进修，更是扎根中国当地生活的重要起点。"
        }
      ],
      certTitle: "资格及其他",
      certs: [
        "南首尔侦探联合学院 首席讲师及结业书",
        "信用管理师",
        "叉车驾驶技能师",
        "挖掘机驾驶技能师",
        "调酒师"
      ],
      processTitle: "合理的业务流程",
      processSubtitle: "由接单伊始到事后管理，为您减低心理负担，并透明推进流程。",
      processes: [
        { step: "01", title: "接单", desc: "按微信/电话咨询时，双语事务长提供第一次咨询", note: "降低心理门槛" },
        { step: "02", title: "分析", desc: "与律师合作，在初期阶段即启动“签证影响评估”", note: "判断若被判刑则有强制驱逐的风险" },
        { step: "03", title: "进展", desc: "所有卷宗资料及事件进展均同步提供中韩双语版本", note: "确保事件进展极度透明" },
        { step: "04", title: "维护", desc: "结案后额外提供《维持在韩居留说明指南》", note: "确保长期信任关系" }
      ],
      timelineTitle: "主要履历摘要",
      timeline: [
        { year: "2026. 02", title: "韩桥律师事务所 合伙人律师 (当前)" },
        { year: "2025. 07", title: "韩桥律师事务所 执业律师" },
        { year: "2025. 01", title: "同感法务法人 执业律师" },
        { year: "2024. 11", title: "结业于国际常识产权研修院专利辩理师培训班" },
        { year: "2024", title: "大韩辩护士协会研修" },
        { year: "2022. 01", title: "冬季警察大学实务进修" },
        { year: "2020. 03", title: "进入庆北大学法学大专门研究生院" },
        { year: "2016. 12 ~ 2018. 03", title: "就职于韩华(Hanwha)贸易海外销售部" },
        { year: "2015. 01 ~ 2015. 06", title: "就职于北京基金会中心网(CFC)" },
        { year: "2014. 01", title: "任广西世界跆拳道和平财团中文翻译" },
        { year: "2012. 07", title: "就职于苏州天辅新型建材有限公司" },
        { year: "2012. 02", title: "北京师范大学研修" },
        { year: "2008. 03", title: "考入高丽大学中文/经营双学位" },
      ]
    },
    en: {
      title: "Managing Partner",
      subtitle: "Beyond language translation: A legal expert who authentically understands Chinese business and culture.",
      intro1_sub: "'Being misunderstood'",
      intro1_part1: "When confronting legal issues in Korea, the greatest fear is ",
      intro1_part2: ".",
      intro2: "Attorney Oh Dong-hyun of HANGYO Law Firm has absolutely no barrier in Chinese communication. Drawing from his years of working and living in mainland China, he identifies and understands the struggles of Chinese-speaking clients better than anyone.",
      intro3: "We are ready to listen to your story, exactly in your language.",
      nameTitle: "Donghyun Oh",
      nameSub: "Managing Partner",
      nameFull: "Attorney Donghyun Oh",
      quote: `"I have lived, worked, and actually thought in Chinese. Thus, I thoroughly understand your situation."`,
      eduTitle: "Education",
      edu1: "Korea University, BA in Chinese Literature / Business Admin (Dual Degree)",
      edu2: "Kyungpook National University, Law School / Juris Doctor",
      expTitle: "China-centric Work Experience",
      expDesc: "Attorney Oh's China-related background goes far beyond mere language studies—it stems from hands-on professional experiences at Chinese enterprises and organizations.",
      expList: [
        {
          title: "🏢 Hanwha Corporation Trade Div. - Petrochemical Team",
          date: "(2016. 12 ~ 2018. 03)",
          desc: "Managed exports/imports of petrochemical products to/from China at Hanwha Corp, a top-tier Korean conglomerate. Responsibilities included independently drafting and auditing contracts in Chinese and English, as well as handling overseas branch correspondences. This practical experience forms the absolute foundation for his current Sino-Korean corporate litigation advisory."
        },
        {
          title: "🌐 Beijing China Foundation Center (CFC) Internship",
          date: "(2015. 01 ~ 2015. 06)",
          desc: "Interned at China's largest NGO information hub (CFC), conducting comparative data analyses on Sino-Korean NGOs. This period laid out a profound insight into the mechanics and societal backgrounds of Chinese non-profit organizations."
        },
        {
          title: "🥋 World Taekwondo Peace Corps in Guangxi, China",
          date: "(2014. 01)",
          desc: "Served as a martial arts instructor and official translator on-site in Guangxi. Experienced significant direct exposure to diverse regional dynamics in China."
        },
        {
          title: "🏭 Construction Materiel Firm Internship in Suzhou, China",
          date: "(2012. 07)",
          desc: "Worked internally at Suzhou Chun-Bo New Construction Material Co., Ltd., dealing with market trends, site inspections, and trilingual translations (KR/CN/EN). Familiarized with the gritty, practical customs of Chinese manufacturing fields."
        },
        {
          title: "🎓 Beijing Normal University Intensive Program",
          date: "(2012. 02)",
          desc: "Participated in an intensive language and governance course in Beijing, establishing his initial strong academic and practical base within mainland China."
        }
      ],
      certTitle: "Certifications & Etc.",
      certs: [
        "Namseoul Detective Academy Highest-Level Educator & Certified PE",
        "Certified Credit Data Administrator",
        "Licensed Forklift Operator",
        "Licensed Heavy Excavator Operator",
        "Certified Mixologist"
      ],
      processTitle: "Our Rational Process",
      processSubtitle: "From the initial contact to post-incident care, we lower psychological barriers securely.",
      processes: [
        { step: "01", title: "Intake", desc: "Initial contact managed seamlessly by bilingual case managers", note: "Stress-relieving approach" },
        { step: "02", title: "Analysis", desc: "Proactive 'Visa Maintenance Assessment' deployed from day one", note: "Forecasts deportation risks instantly" },
        { step: "03", title: "Execution", desc: "All briefings, filings, and statuses reported bilingually", note: "Absolute client transparency" },
        { step: "04", title: "Follow-up", desc: "Provides specialized 'Residency Continuity Guides' once the case is finalized", note: "Ensures long-term stability" }
      ],
      timelineTitle: "Brief Career Timeline",
      timeline: [
        { year: "2026. 02", title: "Partner Attorney at HANGYO Law Firm (Current)" },
        { year: "2025. 07", title: "Attorney at HANGYO Law Firm" },
        { year: "2025. 01", title: "Attorney at DongGam Law Firm" },
        { year: "2024. 11", title: "Graduate Patent Attorney Training at Int'l IP Training Institute" },
        { year: "2024", title: "Korean Bar Association Program Completion" },
        { year: "2022. 01", title: "Winter Externship at Korean National Police University" },
        { year: "2020. 03", title: "Enrolled in Kyungpook National University Law School" },
        { year: "2016. 12 ~ 2018. 03", title: "Hanwha Trade Division / Overseas Sales" },
        { year: "2015. 01 ~ 2015. 06", title: "China Foundation Center (Beijing)" },
        { year: "2014. 01", title: "Guangxi Taekwondo Peace Corps Translator" },
        { year: "2012. 07", title: "Suzhou Chun-Bo New Construction Materials Firm" },
        { year: "2012. 02", title: "Beijing Normal University Exchange" },
        { year: "2008. 03", title: "Korea Univ. Dual BA in Chinese Lit & Business" },
      ]
    }
  };

  const currentContent = content[language as keyof typeof content] || content.ko;

  return (
    <div className="bg-white min-h-screen pt-24 pb-32">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading 
          title={currentContent.title} 
          subtitle={currentContent.subtitle} 
          centered={true}
        />

        {/* Intro paragraph */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 max-w-[900px] mx-auto text-center"
        >
          <p className="text-lg lg:text-xl text-slate-600 font-medium leading-[1.85]">
            {currentContent.intro1_part1} <strong className="text-[#0f172a]">{currentContent.intro1_sub}</strong>{currentContent.intro1_part2}<br/>
            {currentContent.intro2}
          </p>
          <p className="mt-6 text-xl text-[#2563EB] font-black tracking-tight">
            {currentContent.intro3}
          </p>
        </motion.div>

        <div className="mt-20 border border-slate-200 bg-white flex flex-col lg:flex-row shadow-sm">
          <div className="lg:w-2/5 relative min-h-[500px] lg:min-h-0 bg-slate-100">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1665224752123-a2ea29dddcb2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhbiUyMGxhd3llciUyMHBvcnRyYWl0JTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc3NjM5ODMxNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt={currentContent.nameFull}
              className="absolute inset-0 w-full h-full object-cover object-top grayscale"
            />
            <div className="absolute inset-0 bg-[#0f172a]/10 mix-blend-multiply" />
            <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-[#0f172a] to-transparent lg:hidden">
              <h3 className="text-3xl font-extrabold text-white mb-2">{currentContent.nameFull}</h3>
              <p className="text-[#2563EB] font-bold">법률사무소 한교 {currentContent.nameSub}</p>
            </div>
          </div>
          
          <div className="lg:w-3/5 p-10 md:p-16 lg:p-24 bg-white">
            <div className="hidden lg:block mb-12">
              <h3 className="text-4xl font-extrabold text-[#0f172a] mb-4">{currentContent.nameTitle} <span className="text-2xl text-slate-500 font-bold ml-2">{currentContent.nameSub}</span></h3>
              <div className="w-12 h-1 bg-[#2563EB] mb-8" />
              <blockquote className="text-2xl font-extrabold text-[#0f172a] leading-relaxed border-l-4 border-[#2563EB] pl-8 py-2 bg-slate-50/50 italic tracking-tight whitespace-pre-line">
                {currentContent.quote}
              </blockquote>
            </div>

            <div className="space-y-16">
              <section>
                <h4 className="text-2xl font-extrabold text-[#0f172a] flex items-center gap-3 mb-6 pb-4 border-b-2 border-slate-900 inline-flex">
                  {currentContent.eduTitle}
                </h4>
                <ul className="space-y-4 text-slate-700 font-bold text-lg">
                  <li className="flex items-center gap-4"><span className="w-2 h-2 bg-[#2563EB] rounded-full"></span> {currentContent.edu1}</li>
                  <li className="flex items-center gap-4"><span className="w-2 h-2 bg-[#2563EB] rounded-full"></span> {currentContent.edu2}</li>
                </ul>
              </section>

              <section>
                <h4 className="text-2xl font-extrabold text-[#0f172a] flex items-center gap-3 mb-6 pb-4 border-b-2 border-slate-900 inline-flex">
                  {currentContent.expTitle}
                </h4>
                <p className="text-slate-600 mb-8 leading-relaxed font-medium text-lg">
                  {currentContent.expDesc}
                </p>
                <div className="space-y-8 text-slate-800">
                  {currentContent.expList.map((exp, idx) => (
                    <div key={idx} className="border-l-2 border-slate-200 pl-6 hover:border-[#2563EB] transition-colors">
                      <strong className="text-xl font-extrabold text-[#0f172a] block mb-3">{exp.title} <span className="text-sm font-bold text-slate-400 ml-2">{exp.date}</span></strong>
                      <p className="text-base leading-relaxed text-slate-600 font-medium">{exp.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h4 className="text-2xl font-extrabold text-[#0f172a] flex items-center gap-3 mb-6 pb-4 border-b-2 border-slate-900 inline-flex">
                  {currentContent.certTitle}
                </h4>
                <div className="flex flex-wrap gap-3">
                  {currentContent.certs.map((cert, idx) => (
                    <span key={idx} className="px-5 py-3 bg-slate-100 text-[#0f172a] font-bold border border-slate-200 text-sm">{cert}</span>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>

        {/* ─── 서비스 프로세스 섹션 ─── */}
        <div className="mt-32">
          <SectionHeading 
            title={currentContent.processTitle} 
            subtitle={currentContent.processSubtitle}
            centered={true}
          />
          
          <div className="max-w-[1200px] mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {currentContent.processes.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-slate-50 border border-slate-200 hover:border-[#2563EB] p-8 flex flex-col relative group transition-colors shadow-sm hover:shadow-md"
              >
                <span className="text-5xl font-black text-slate-200 group-hover:text-[#2563EB]/10 transition-colors absolute top-6 right-6">
                  {item.step}
                </span>
                <h3 className="text-2xl font-extrabold text-[#0f172a] mb-4 relative z-10">{item.title}</h3>
                <div className="w-8 h-[3px] bg-[#2563EB] mb-5 relative z-10" />
                <p className="text-slate-600 font-bold leading-relaxed mb-6 flex-grow relative z-10 text-[15px]">{item.desc}</p>
                <div className="relative z-10 self-start">
                  <span className="text-[12px] font-black tracking-wide text-[#2563EB] bg-white px-3 py-1.5 border border-[#2563EB]/20 shadow-sm rounded-sm">
                    ✓ {item.note}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-32">
          <SectionHeading title={currentContent.timelineTitle} centered={true} />
          
          <div className="max-w-3xl mx-auto mt-16 bg-slate-50 border border-slate-200 p-8 lg:p-12 shadow-sm mb-10">
            <ul className="space-y-4">
              {currentContent.timeline.map((item, index) => (
                <li key={index} className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-8 border-b border-slate-200 pb-4 last:border-0 last:pb-0 hover:bg-slate-100 transition-colors px-2 -mx-2 rounded-sm">
                  <span className="font-bold text-[#2563EB] sm:w-[160px] shrink-0 text-[15px] tracking-wide">{item.year}</span>
                  <span className="text-[#0f172a] font-bold text-[16px] leading-snug">{item.title}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
}

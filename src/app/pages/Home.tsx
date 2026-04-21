import { Link } from "react-router";
import { ArrowRight, CheckCircle2, MessageCircle, Phone, Globe, Scale, Users, FileText, Download, MapPin, GraduationCap, Layers, Hash, ShieldCheck, Briefcase, HeartHandshake, ArrowUpRight, Quote, Clock, Mail } from "lucide-react";
import { motion } from "motion/react";
import { SectionHeading } from "../components/SectionHeading";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { WeChatDialog } from "../components/WeChatDialog";
import { useLanguage } from "../context/LanguageContext";
import mainheader from "../../assets/mainheader.jpg";
import ohDonghyunCutout from "../../assets/oh-donghyun-cutout.png";

export function Home() {
  const { language } = useLanguage();

  const content = {
    ko: {
      heroTitle: <>Think in Your Language,<br className="hidden sm:block" /> Defend in <span className="text-[#2563EB]">Korean Law.</span></>,
      heroSub: <>한국어와 중국어, 두 언어로 당신의 권리를 직접 지킵니다.<br /><span className="text-slate-400/80">韩国与中国，用两种语言守护您的权利。</span></>,
      quickMenu: {
        title: <>Quick<br />Menu</>,
        online: "온라인상담",
        wechat: "위챗상담",
        phone: "전화상담"
      },
      professionals: {
        eyebrow: "Professionals",
        title: <>법률사무소 비컴의 <span className="text-[#2563EB]">변호사</span></>,
        desc: "한국어와 중국어 두 언어로 직접 소통하며, 통역 없이 사실관계부터 법률 분석까지 정확하게 짚어 드립니다.",
        viewMore: "VIEW MORE"
      },
      attorney: {
        role: "Representative Attorney",
        nameKo: "오동현",
        nameEn: "Donghyun OH",
        office: "대표 변호사 · 법률사무소 비컴",
        specialtiesLabel: "전문 분야",
        specs: [
          "형사 사건 방어 · 민사 분쟁 대리",
          "체류자격(F-4·H-2) · 출입국 종합 자문",
          "중국어 직접 상담 (通译不必要)",
          "한중 계약 · 기업 법률 자문"
        ],
        edu: "고려대 중문학·경영학 / 경북대 로스쿨",
        profileBtn: "변호사 프로필"
      },
      pillars : [
        {
          eyebrow: "Professional",
          title: "중국어권 특화 변호사",
          desc: "단순 어학을 넘어 중국 현지 실무와 한국 법리를 동시에 체득한 오동현 변호사가 복잡한 사건에 정교하게 대응합니다.",
          href: "/about"
        },
        {
          eyebrow: "Expertise",
          title: "형사·민사·출입국 통합",
          desc: "형사 방어, 민사 분쟁, 체류 자격 영향 분석을 하나의 사건 안에서 통합적으로 수행합니다.",
          href: "/services"
        },
        {
          eyebrow: "Availability",
          title: "24시간 위챗 핫라인",
          desc: "출입국 단속·체포·급박한 상황까지 — 한국 시간 기준 24시간 중국어 위챗 상담 채널을 운영합니다.",
          href: "#consult"
        }
      ],
      strengths: {
        title: "왜 법률사무소 비컴인가",
        subtitle: "단순한 법률 지식을 넘어, 중국의 문화와 당신의 언어를 완벽하게 이해합니다.",
        items: [
          {
            title: "직접 소통",
            desc: "법률 상담에서 통역만 이용할 경우 뉘앙스가 달라지고, 중요한 사실이 누락되거나 왜곡될 수 있습니다. 오동현 변호사는 통역을 거친 후, 중국어로 직접 사실관계를 청취하고 법률 분석을 수행합니다."
          },
          {
            title: "중국 현지 경험에서 나오는 문화적 이해",
            desc: "법률 문제는 단순히 조문의 해석이 아닙니다. 중국의 비즈니스 관행, 가족 문화, 사회적 맥락을 이해해야 진정한 해결책이 나옵니다. 오동현 변호사는 중국 소주·북경·광서성에서 직접 생활하고 근무한 경험을 보유하고 있습니다."
          },
          {
            title: "형사 처벌과 체류 자격의 연결고리를 아는 변호사",
            desc: "한국에서 형사 처벌을 받으면 F-4, H-2 등 체류 자격이 취소되거나 강제퇴거로 이어질 수 있습니다. 비컴는 형사 사건 수임 즉시, 사건의 법적 결과뿐 아니라 체류 자격에 미치는 영향까지 종합적으로 관리합니다."
          }
        ]
      },
      services: {
        title: "주요 업무 분야",
        subtitle: "복잡한 법적 문제를 중국어권 의뢰인 맞춤형으로 해결합니다.",
        viewAll: "모든 서비스 보기",
        items: [
          {
            title: "체류 자격 · 출입국 (签证·出入境)",
            desc: "형사 사건 수임 즉시 체류 자격(F-4, H-2)에 미치는 영향을 병행 분석. 강제퇴거 방어 및 24시 긴급 대응."
          },
          {
            title: "형사 사건 (刑事案件)",
            desc: "보이스피싱 전달책, 투자 사기 고소, 업무상 횡령 등 억울한 혐의 방어 및 신속한 피해 구제."
          },
          {
            title: "민사 · 금융 사건 (민사·금융)",
            desc: "채무부존재확인 방어, P2P 금융 연대보증, 중고차 3자 사기 방어 등 복잡한 손해배상 사건 대리."
          },
          {
            title: "대중 계약 · 기업 (涉华合同·企业)",
            desc: "한중 수출입 계약 리스크 검토, 중국어 원문 기준 분석, 다중언어 법률 문서 및 분쟁 자문."
          },
          {
            title: "가사 · 상속 (가사·상속)",
            desc: "이혼 재산분할, 중국 법원 이혼 판결의 국내 효력, 중국 소재 재산의 한국 내 상속 절차 안내."
          }
        ],
        detail: "자세히 보기"
      },
      cases: {
        eyebrow: "Success Cases",
        title: <>중국어권 의뢰인을 위한 <span className="text-[#2563EB]">업무사례</span></>,
        desc: "체류 자격·형사·민사·계약 전 분야에 걸친 대표 사례를 안내합니다.",
        previewNote: "* 런칭 전 프리뷰 — 실제 사례는 의뢰인 동의 후 순차 공개됩니다.",
        viewAll: "VIEW ALL",
        previewLabel: "예시 사례 preview",
        items: [
          { tag: "체류자격", title: "F-4 체류 자격 유지 — 음주운전 감경 전략", outcome: "형사 처벌 수위를 벌금형 최소로 낮추어 자격 취소 방지." },
          { tag: "보이스피싱", title: "전달책 혐의 불기소 방어", outcome: "고의성 부존재·피해자성 입증으로 불기소 처분 도출." },
          { tag: "대중 계약", title: "중국 공급사 계약 분쟁 자문", outcome: "영·중 원문 병행 검토로 리스크 조항 사전 제거." },
          { tag: "민사·금융", title: "P2P 연대보증 채무 방어", outcome: "온투업법 특수성 기반 책임 범위 제한 인정." },
          { tag: "형사 방어", title: "업무상 횡령 혐의 무혐의", outcome: "회계 자료 재구성으로 불법영득의사 부존재 입증." },
          { tag: "가사·상속", title: "중국 판결 한국 효력 검토", outcome: "한·중 상속법 교차 분석으로 재산분할 집행 확보." },
        ]
      },
      viewAll: "VIEW ALL",
      legalInfo: {
        eyebrow: "Legal Information",
        title: <>변호사가 직접 쓰는 <span className="text-[#2563EB]">법률 정보</span></>,
        desc: "복잡한 행정·형사·체류 절차를 쉬운 언어로 정리합니다. 중국어 해설 포함.",
        soon: "준비중",
        items: [
          { title: "F-4 비자 상실, 이런 경우 취소됩니다", tags: ["#F4", "#비자"], excerpt: "벌금형·음주운전이 체류 자격에 미치는 영향과 유지 전략." },
          { title: "보이스피싱 전달책 연루, 첫 72시간 행동 요령", tags: ["#보이스피싱", "#형사"], excerpt: "수사 초기 진술부터 불기소 목표까지 단계별 대응." },
          { title: "중국 이혼 판결, 한국에서 집행되나요?", tags: ["#가사", "#상속"], excerpt: "중국 법원 판결의 한국 내 효력과 재산분할 절차." },
          { title: "대중 수출입 계약, 원문 검토 체크포인트", tags: ["#계약", "#대중"], excerpt: "중국어 원문 계약서에서 자주 놓치는 리스크 조항 7가지." },
          { title: "강제퇴거 명령 받았다면 — 이의신청 절차", tags: ["#출입국", "#행정"], excerpt: "불복·이의신청·행정소송까지 실무 흐름 가이드." },
        ]
      },
      testimonials: {
        eyebrow: "Client Voices",
        title: <>비컴과 함께한 <span className="text-[#2563EB]">후기</span></>,
        desc: "오동현 변호사의 조력으로 권리를 회복한 의뢰인의 후기입니다.",
        previewNote: "* 런칭 전 템플릿 — 실제 후기는 수임 후 게시됩니다.",
        previewLabel: "예시 후기",
        items: [
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
        ]
      },
      hashtags: {
        eyebrow: "Ask the Attorney",
        title: "비컴에게 무엇이든 물어보세요",
        items: ["#F4비자", "#H2비자", "#보이스피싱", "#음주운전", "#강제퇴거", "#체류자격", "#횡령", "#대중계약", "#중국이혼판결", "#P2P연대보증", "#성범죄방어", "#위챗상담"]
      },
      quickLinks: [
        { eyebrow: "Consultation", title: "비컴 법률 상담", desc: "365일 24시간 중국어 직접 상담", icon: <MessageCircle className="w-7 h-7 text-[#2563EB]" strokeWidth={1.4} />, href: "#consult" },
        { eyebrow: "Cases", title: "업무사례", desc: "중국어권 의뢰인 맞춤 솔루션", icon: <Briefcase className="w-7 h-7 text-[#2563EB]" strokeWidth={1.4} />, href: "/cases" },
        { eyebrow: "Attorney", title: "구성원 소개", desc: "오동현 대표 변호사 프로필", icon: <ShieldCheck className="w-7 h-7 text-[#2563EB]" strokeWidth={1.4} />, href: "/about" },
        { eyebrow: "Practice", title: "업무분야", desc: "5대 핵심 업무 영역", icon: <Layers className="w-7 h-7 text-[#2563EB]" strokeWidth={1.4} />, href: "/services" },
      ],
      consult: {
        eyebrow: "Consultation",
        title: "비컴 상담 접수",
        desc: "중국어·한국어 어느 쪽이든 편한 언어로 남겨 주세요. 24시간 이내 오동현 변호사가 직접 회신드립니다."
      },
      form: {
        title: "상담 신청서",
        badge: "Intake · KR / CN / EN",
        nameLabel: "성함 / 姓名 / Name",
        namePlaceholder: "홍길동",
        contactLabel: "연락처 / 联系方式 / Contact",
        langLabel: "언어 / Language",
        fieldLabel: "사건 분야 / 案件领域 / Area",
        selectPlaceholder: "선택해 주세요",
        fields: ["체류 자격 · 출입국", "형사 사건", "민사 · 금융 사건", "대중 계약 · 기업 자문", "가사 · 상속", "기타"],
        msgLabel: "상담 내용 / 咨询 내용 / Inquiry",
        msgPlaceholder: "상담 받고 싶은 내용을 간단히 적어주세요.",
        agreements: "개인정보 수집 및 이용에 동의합니다. (상담 목적에 한하여 활용)",
        submit: "무료 상담 신청하기",
        wechatDirect: "위챗으로 바로",
        previewNote: "* 런칭 전 프리뷰 — 제출 기능은 백엔드 연결 후 활성화됩니다. 현재는 위챗/전화/이메일 이용 권장."
      },
      guide: {
        badge: "무료 가이드북 배포",
        title: "한국 생활, 모르면 당하고 알면 지킨다:",
        subtitle: "조선족을 위한 5대 필수 법률 가이드",
        items: [
          "비자(F4, H2) 상실 피하는 법 (음주운전, 벌금형)",
          "사장이 돈 안 줄 때 증거 남기는 법",
          "보이스피싱 전달책 연루 시 행동 요령",
          "중국 재산 상속 및 이혼 판결 효력",
          "비컴(BECOME) 24시 위챗 QR코드 제공"
        ],
        download: "가이드북 다운로드",
        mockupTitle: "한국 생존 법률 가이드북",
        mockupDesc: "클릭하여 PDF 다운로드",
        wechatLabel: "비컴(BECOME) 24시 위챗"
      }
    },
    zh: {
      heroTitle: <>Think in Your Language,<br className="hidden sm:block" /> Defend in <span className="text-[#2563EB]">Korean Law.</span></>,
      heroSub: <>韩国和中国, 用两种语言守护您的权利。<br /><span className="text-slate-400/80">韩国与中国，用两种语言守护您的权利。</span></>,
      quickMenu: {
        title: <>快捷<br />菜单</>,
        online: "在线咨询",
        wechat: "微信咨询",
        phone: "电话咨询"
      },
      professionals: {
        eyebrow: "专家团队",
        title: <>BECOME律师事务所的 <span className="text-[#2563EB]">律师</span></>,
        desc: "用韩语和中文两种语言直接沟通, 无需翻译, 从事实关系到法律分析为您精准把关。",
        viewMore: "查看更多"
      },
      attorney: {
        role: "代表律师",
        nameKo: "吴东宪",
        nameEn: "Donghyun OH",
        office: "代表律师 · BECOME律师事务所",
        specialtiesLabel: "专业领域",
        specs: [
          "刑事案件辩护 · 民事纠纷代理",
          "居留资格(F-4·H-2) · 出入境综合顾问",
          "中文直接咨询 (无需翻译)",
          "韩中合同 · 企业法律顾问"
        ],
        edu: "高丽大学 中文/经营学 · 庆北大学 法学院",
        profileBtn: "律师简介"
      },
      pillars : [
        {
          eyebrow: "Professional",
          title: "大中国区特化律师",
          desc: "超越单纯的语言能力, 同时掌握中国现地实务和韩国法律逻辑的吴东宪律师, 精准应对复杂案件。",
          href: "/about"
        },
        {
          eyebrow: "Expertise",
          title: "刑事·民事·出入境整合",
          desc: "在同一个案件中, 同时进行刑事辩护、民事纠纷以及居留资格影响的综合分析。",
          href: "/services"
        },
        {
          eyebrow: "Availability",
          title: "24 小时微信热线",
          desc: "针对出入境临管、逮捕及各种紧迫情况 — 提供韩国时间 24 小时中文微信咨询渠道。",
          href: "#consult"
        }
      ],
      strengths: {
        title: "为什么选择BECOME律师事务所",
        subtitle: "超越单纯的法律知识, 完美理解中国的文化和您的语言。",
        items: [
          {
            title: "直接沟通",
            desc: "在法律咨询中仅使用翻译时, 语感可能会发生变化, 重要事实可能会遗漏或歪曲。吴东宪律师直接用中文听取事实关系并进行法律分析。"
          },
          {
            title: "源自中国现地经验的文化理解",
            desc: "法律问题不仅仅是条文的 解释。只有理解中国的商业惯例、家庭文化和社会背景, 才能得出真正的解决方案。吴东宪律师拥有在中国苏州、北京、广西省直接生活和工作的经验。"
          },
          {
            title: "深谙刑事处罚与居留资格关联性的律师",
            desc: "在韩国受到刑事处罚时, F-4、H-2 等居留资格可能会被取消或导致强制遣返。BECOME在接手刑事案件的同时, 也会综合管理案件的法律后果及其对居留资格的影响。"
          }
        ]
      },
      services: {
        title: "主要业务领域",
        subtitle: "为华人客户量身定制, 解决复杂的法律问题。",
        viewAll: "查看所有服务",
        items: [
          {
            title: "居留资格 · 出入境 (签证·出入境)",
            desc: "接手刑事案件的同时进行居留资格(F-4, H-2)分析。强制遣返辩护及 24 小时紧急应对。"
          },
          {
            title: "刑事案件 (刑事案件)",
            desc: "防范话务诈骗车手嫌疑、投资欺诈起诉、职务侵占等。洗刷冤屈嫌疑及迅速维权。"
          },
          {
            title: "민사 · 金融案件 (民事·金融)",
            desc: "债务不存在确认、P2P 金融连带保证、二手车三方诈骗防卫等复杂损害赔偿案件代理。"
          },
          {
            title: "涉华合同 · 企业 (涉华合同·企业)",
            desc: "韩中进出口合同风险审核、中文原文标准分析、多语种法律文件及纠纷顾问。"
          },
          {
            title: "家事 · 继承 (家事·继承)",
            desc: "离婚财产分割、中国法院离婚判决在韩国国内的效力、中国境内财产在韩继承程序指导。"
          }
        ],
        detail: "查看详情"
      },
      cases: {
        eyebrow: "成功案例",
        title: <>为华人客户提供的 <span className="text-[#2563EB]">业务案例</span></>,
        desc: "介绍在居留资格、刑事、民事、合同等各领域的代表性案例。",
        previewNote: "* 上线前预览 — 实际案例将在征得客户同意后陆续公开。",
        viewAll: "查看全部",
        previewLabel: "示例案例预览",
        items: [
          { tag: "居留资格", title: "维持 F-4 居留资格 — 酒驾减刑策略", outcome: "将刑事处罚力度降至最低罚款，防止资格取消。" },
          { tag: "话务诈骗", title: "话务诈骗车手嫌疑不予起诉辩护", outcome: "通过证明不存在主观故意及受害者身份，争取到不予起诉处分。" },
          { tag: "涉华合同", title: "中国供应商合同纠纷顾问", outcome: "英中原文并行审核，预先排除风险条款。" },
          { tag: "民事·金融", title: "P2P 连带保证债务辩护", outcome: "基于《网贷法》的特殊性，获认责任范围限制。" },
          { tag: "刑事辩护", title: "职务侵占嫌疑无罪辩护", outcome: "重组财务资料，证明不存在非法占有目的。" },
          { tag: "家事·继承", title: "中国判决在韩效力审查", outcome: "韩中继承法交叉分析，确保财产分割执行。" },
        ]
      },
      viewAll: "查看全部",
      legalInfo: {
        eyebrow: "法律信息",
        title: <>律师亲撰的 <span className="text-[#2563EB]">法律百科</span></>,
        desc: "用易懂的语言整理复杂的行政、刑事、居留程序。包含中文解析。",
        soon: "准备中",
        items: [
          { title: "丧失 F-4 签证，这些情况下会被取消", tags: ["#F4", "#签证"], excerpt: "罚金刑、酒驾对居留资格的影响及维持策略。" },
          { title: "卷入话务诈骗车手，最初 72 小时行动指南", tags: ["#话务诈骗", "#刑事"], excerpt: "从侦查初期陈述到以不予起诉为目标的阶段性应对。" },
          { title: "中国离婚判决，在韩国能执行吗？", tags: ["#家事", "#继承"], excerpt: "中国法院判决在韩国境内的效力及财产分割程序。" },
          { title: "涉华进出口合同，原文审核要点", tags: ["#合同", "#涉华"], excerpt: "中文原文合同中经常被忽视的 7 个风险条款。" },
          { title: "收到强制遣返令怎么办 — 异议申请程序", tags: ["#出入境", "#行政"], excerpt: "从不服、异议申请到行政诉讼的 实务流程指南。" },
        ]
      },
      testimonials: {
        eyebrow: "客户评价",
        title: <>与BECOME并肩作战后的评价</>,
        desc: "吴东宪律师帮助恢复权利的客户评价。",
        previewNote: "* 上线前模板 — 实际评价将在结案后发布。",
        previewLabel: "示例评价",
        items: [
          {
            tag: "居留资格",
            title: "在没有翻译的情况下也能精准理解我的处境",
            quote: "为了韩语不好的我，律师直接用中文咨询，使得事实关系得以毫无遗漏地传达。感谢协助我维持了签证。",
            author: "L某 · 中国籍",
          },
          {
            tag: "话务诈骗",
            title: "顺利渡过了让人不安的调查阶段",
            quote: "被当作车手卷入案件时感到不知所措，BECOME从初期就介入并证明了我不存在主观故意，最终获得了不予起诉处分。",
            author: "K某 · 朝鲜族",
          },
          {
            tag: "涉华合同",
            title: "基于中文原文为我把控了风险",
            quote: "如果只看翻译版本可能会漏掉毒物条款，但律师直接审阅中文原文，帮助我调整了合同架构. 实务感非常敏锐。",
            author: "J社代表 · 涉华进出口",
          },
        ]
      },
      hashtags: {
        eyebrow: "咨询律师",
        title: "向BECOME提问任何问题",
        items: ["#F4签证", "#H2签证", "#话务诈骗", "#酒驾", "#强制遣返", "#居留资格", "#贪污", "#涉华合同", "#中国离婚判决", "#P2P连带保证", "#性犯罪辩护", "#微信咨询"]
      },
      quickLinks: [
        { eyebrow: "Consultation", title: "BECOME法律咨询", desc: "365天 24小时中文直接咨询", icon: <MessageCircle className="w-7 h-7 text-[#2563EB]" strokeWidth={1.4} />, href: "#consult" },
        { eyebrow: "Cases", title: "业务案例", desc: "华人客户量身定制方案", icon: <Briefcase className="w-7 h-7 text-[#2563EB]" strokeWidth={1.4} />, href: "/cases" },
        { eyebrow: "Attorney", title: "成员介绍", desc: "吴东宪代表律师简介", icon: <ShieldCheck className="w-7 h-7 text-[#2563EB]" strokeWidth={1.4} />, href: "/about" },
        { eyebrow: "Practice", title: "业务领域", desc: "五大核心业务领域", icon: <Layers className="w-7 h-7 text-[#2563EB]" strokeWidth={1.4} />, href: "/services" },
      ],
      consult: {
        eyebrow: "Consultation",
        title: "BECOME咨询申请",
        desc: "请使用您认为方便的 中文或韩语留言。吴东宪律师将在 24 小时内直接回复。"
      },
      form: {
        title: "咨询申请表",
        badge: "Intake · 中 / 韩 / 英",
        nameLabel: "姓名",
        namePlaceholder: "张三",
        contactLabel: "联系方式",
        langLabel: "咨询语言",
        fieldLabel: "案件领域",
        selectPlaceholder: "请选择",
        fields: ["居留资格 · 出入境", "刑事案件", "民事 · 金融案件", "涉华合同 · 企业顾问", "家事 · 继承", "其他"],
        msgLabel: "咨询内容",
        msgPlaceholder: "请简要描述您想咨询的内容。",
        agreements: "同意收集及使用个人信息。(仅用于咨询目的)",
        submit: "申请免费咨询",
        wechatDirect: "直接微信联系",
        previewNote: "* 上线前预览 — 提交功能将在后台连接后启用。目前建议使用微信/电话/邮件。"
      },
      guide: {
        badge: "免费领取指南",
        title: "韩国生活，懂法守权，避坑指南：",
        subtitle: "为华人准备的 5 大必备法律手册",
        items: [
          "如何避免丧失签证(F4, H2) (酒驾, 罚金刑)",
          "老板拖欠工资时如何保留证据",
          "卷入话务诈骗车手时的 行动要领",
          "中国财产继承及离婚判决效力",
          "提供BECOME(BECOME) 24 小时微信二维码"
        ],
        download: "下载指南手册",
        mockupTitle: "韩国生存法律手册",
        mockupDesc: "点击下载 PDF 文件",
        wechatLabel: "BECOME(BECOME) 24 小时微信"
      }
    },
    en: {
      heroTitle: <>Think in Your Language,<br className="hidden sm:block" /> Defend in <span className="text-[#2563EB]">Korean Law.</span></>,
      heroSub: <>Protecting your rights in two languages, Korean and Chinese.<br /><span className="text-slate-400/80">韩国与中国，用两种语言守护您的权利。</span></>,
      quickMenu: {
        title: <>Quick<br />Menu</>,
        online: "Online",
        wechat: "WeChat",
        phone: "Call"
      },
      professionals: {
        eyebrow: "Professionals",
        title: <>Attorneys of <span className="text-[#2563EB]">BECOME Law Firm</span></>,
        desc: "Communicate directly in Korean and Chinese. We provide accurate legal analysis from factual grounds without the need for an interpreter.",
        viewMore: "VIEW MORE"
      },
      attorney: {
        role: "Representative Attorney",
        nameKo: "Donghyun OH",
        nameEn: "Donghyun OH",
        office: "Managing Partner · BECOME Law Firm",
        specialtiesLabel: "Expertise",
        specs: [
          "Criminal Defense · Civil Litigation",
          "Visa (F-4·H-2) · Immigration Counsel",
          "Direct Chinese Consultation (Native Fluency)",
          "China-Oriented Corporate & Contracts"
        ],
        edu: "Korea Univ. (Chinese/Business) · KNU Law School",
        profileBtn: "Attorney Profile"
      },
      pillars : [
        {
          eyebrow: "Professional",
          title: "China-Specialized Lawyer",
          desc: "Beyond language skills, Attorney Oh Dong-hyun, who has mastered both Chinese local practice and Korean legal logic, responds sophisticatedly to complex cases.",
          href: "/about"
        },
        {
          eyebrow: "Expertise",
          title: "Integrated Legal Care",
          desc: "Integrally performing criminal defense, civil disputes, and residency status impact analysis within a single case.",
          href: "/services"
        },
        {
          eyebrow: "Availability",
          title: "24h WeChat Hotline",
          desc: "From immigration raids to arrests — we operate a 24-hour Chinese WeChat consultation channel based on Korean time.",
          href: "#consult"
        }
      ],
      strengths: {
        title: "Why BECOME Law Firm?",
        subtitle: "Beyond legal expertise, we understand Chinese culture and your language perfectly.",
        items: [
          {
            title: "Direct Communication",
            desc: "Relying on interpreters can change nuances or lead to omissions. Attorney Oh listens to facts and provides analysis directly in Chinese."
          },
          {
            title: "Source-Based Cultural Understanding",
            desc: "Legal issues are not just about interpretation. Understanding Chinese business customs and social context is key. Attorney Oh has lived and worked in Suzhou, Beijing, and Guangxi."
          },
          {
            title: "Immigration Risk Management",
            desc: "Criminal penalties in Korea can lead to visa cancellation for F-4/H-2 holders. We manage both legal outcomes and residency status impacts from day one."
          }
        ]
      },
      services: {
        title: "Practice Areas",
        subtitle: "Tailored legal solutions for the Chinese-speaking community.",
        viewAll: "View All Services",
        items: [
          {
            title: "Visa & Immigration (签证·出入境)",
            desc: "Concurrent analysis of residency impacts (F-4, H-2) during criminal defense. Deportation defense and 24h emergency response."
          },
          {
            title: "Criminal Defense (刑事案件)",
            desc: "Defending voice-phishing mule cases, investment fraud reports, and embezzlement charges. Rapid victim recovery."
          },
          {
            title: "Civil & Finance (民事·금융)",
            desc: "Debt non-existence validation, P2P finance surety defense, used car fraud cases, and complex damage claims."
          },
          {
            title: "China-Corporate & Contracts (涉华合同·企业)",
            desc: "Trade contract risk audit, analysis based on Chinese originals, multilingual legal documentation and dispute advice."
          },
          {
            title: "Family & Inheritance (家事·继承)",
            desc: "Divorce asset division, domestic validity of Chinese divorce decrees, and inheritance procedures for property in China."
          }
        ],
        detail: "View Detail"
      },
      cases: {
        eyebrow: "Success Cases",
        title: <>Work Cases for <span className="text-[#2563EB]">Chinese Speakers</span></>,
        desc: "Representative cases across visa, criminal, civil, and contract domains.",
        previewNote: "* Pre-launch preview — cases will be published sequentially.",
        viewAll: "VIEW ALL",
        previewLabel: "Example Case Preview",
        items: [
          { tag: "Visa", title: "Maintaining F-4 Visa — DUI Mitigation Strategy", outcome: "Reduced criminal penalty to minimum fine to prevent visa cancellation." },
          { tag: "Fraud", title: "Non-indictment Defense for Mule Case", outcome: "Achieved non-indictment by proving lack of intent and victim status." },
          { tag: "Contracts", title: "China-Supply Contract Dispute Counsel", outcome: "Pre-emptively removed risk clauses through dual-language audit." },
          { tag: "Civil", title: "P2P Joint Surety Debt Defense", outcome: "Limited liability based on Online Investment Act specifics." },
          { tag: "Criminal", title: "Not Guilty for Embezzlement Charges", outcome: "Proved lack of illegal gain intent through financial restructuring." },
          { tag: "Family", title: "Validity of Chinese Decree in Korea", outcome: "Ensured asset division through dual-nation inheritance audit." },
        ]
      },
      viewAll: "VIEW ALL",
      legalInfo: {
        eyebrow: "Legal Information",
        title: <>Legal Info written by <span className="text-[#2563EB]">Attorneys</span></>,
        soon: "Coming Soon",
        desc: "Clarifying complex administrative and criminal procedures. Includes Chinese guides.",
        items: [
          { title: "Loss of F-4 Visa: Cancellation Trigger Cases", tags: ["#F4", "#Visa"], excerpt: "Impact of fines and DUIs on residency and maintenance strategies." },
          { title: "Voice Phishing Mule Cases: First 72h Action Plan", tags: ["#Fraud", "#Criminal"], excerpt: "Step-by-step response from initial statement to non-indictment." },
          { title: "Can Chinese Divorce Decrees be Enforced in Korea?", tags: ["#Family", "#Inheritance"], excerpt: "Validity of Chinese court orders and asset division procedures." },
          { title: "China Export-Import Contracts: Audit Checkpoints", tags: ["#Contracts", "#China"], excerpt: "7 risk clauses often missed in Chinese-language contracts." },
          { title: "Received a Deportation Order? Appeal Procedures", tags: ["#Immigration", "#Admin"], excerpt: "실무 흐름 가이드 for appeals and administrative litigation." },
        ]
      },
      testimonials: {
        eyebrow: "Client Voices",
        title: <>Success stories with <span className="text-[#2563EB]">BECOME</span></>,
        desc: "Protecting rights through expert legal support.",
        previewNote: "* Pre-launch template — actual testimonials will be added soon.",
        previewLabel: "Example Testimonial",
        items: [
          {
            tag: "Visa",
            title: "Understood my situation perfectly without a translator",
            quote: "The lawyer consulted with me directly in Chinese, which allowed me to convey the facts clearly. Thank you for helping me keep my visa.",
            author: "Client L · Chinese National",
          },
          {
            tag: "Fraud",
            title: "Navigated the uncertain investigation phase smoothly",
            quote: "When I was caught up in a mule case, BECOME intervened early and proved I had no harmful intent, resulting in a non-indictment.",
            author: "Client K · Joseonjok",
          },
          {
            tag: "Contracts",
            title: "Managed risks based on the Chinese original text",
            quote: "I might have missed toxic clauses if I had only reviewed a translation. The lawyer audited the Chinese original directly.",
            author: "CEO J · Trade Company",
          },
        ]
      },
      hashtags: {
        eyebrow: "Ask the Attorney",
        title: "Ask BECOME Anything",
        items: ["#F4Visa", "#H2Visa", "#Fraud", "#DUI", "#Deportation", "#Residency", "#Embezzlement", "#ChinaContracts", "#ChineseDecree", "#P2PSurety", "#SexCrimeDefense", "#WeChatConsult"]
      },
      quickLinks: [
        { eyebrow: "Consultation", title: "BECOME Legal Consult", desc: "24/7 direct Chinese consultation", icon: <MessageCircle className="w-7 h-7 text-[#2563EB]" strokeWidth={1.4} />, href: "#consult" },
        { eyebrow: "Cases", title: "Work Cases", desc: "Solutions for Chinese-speaking clients", icon: <Briefcase className="w-7 h-7 text-[#2563EB]" strokeWidth={1.4} />, href: "/cases" },
        { eyebrow: "Attorney", title: "Member Intro", desc: "Representative Attorney Bio", icon: <ShieldCheck className="w-7 h-7 text-[#2563EB]" strokeWidth={1.4} />, href: "/about" },
        { eyebrow: "Practice", title: "Practice Areas", desc: "5 core practice domains", icon: <Layers className="w-7 h-7 text-[#2563EB]" strokeWidth={1.4} />, href: "/services" },
      ],
      consult: {
        eyebrow: "Consultation",
        title: "Inquiry Submission",
        desc: "Leave a message in Korean, Chinese, or English. Attorney Oh will reply within 24 hours."
      },
      form: {
        title: "Inquiry Form",
        badge: "Intake · EN / KR / CN",
        nameLabel: "Name",
        namePlaceholder: "John Doe",
        contactLabel: "Contact",
        langLabel: "Language",
        fieldLabel: "Area of Inquiry",
        selectPlaceholder: "Please select",
        fields: ["Visa & Immigration", "Criminal Case", "Civil & Finance", "China Corporate & Contracts", "Family & Inheritance", "Other"],
        msgLabel: "Inquiry Details",
        msgPlaceholder: "Please briefly describe your situation.",
        agreements: "I agree to the collection and use of personal information.",
        submit: "Request Free Consultation",
        wechatDirect: "Contact via WeChat",
        previewNote: "* Pre-launch preview — submission will be active after backend link."
      },
      guide: {
        badge: "Free Guidebook",
        title: "Life in Korea, Protect Yourself with Law:",
        subtitle: "5 Essential Legal Guides for Chinese Residents",
        items: [
          "How to avoid visa loss (DUI, Fines)",
          "How to document unpaid wages",
          "Action plan for voice-phishing mule cases",
          "Inheritance and Divorce decree validity",
          "BECOME 24h WeChat QR Code provided"
        ],
        download: "Download Guidebook",
        mockupTitle: "Korea Survival Legal Guide",
        mockupDesc: "Click to download PDF",
        wechatLabel: "BECOME 24h WeChat"
      }
    }
  }[language as keyof typeof content] || content.ko;

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section — Cinematic (extends behind transparent header) */}
      <section className="relative bg-[#050B14] text-white min-h-[520px] sm:min-h-[680px] lg:min-h-[900px] flex items-center justify-center overflow-hidden pt-[96px] lg:pt-[128px]">
        {/* Background image */}
        <div className="absolute inset-0">
          <ImageWithFallback
            src={mainheader}
            alt="Seoul 야경 배경"
            className="w-full h-full object-cover object-center scale-[1.02]"
          />
          {/* Layered overlays — even vignette so centered text reads clean */}
          <div className="absolute inset-0 bg-[#050B14]/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050B14]/80 via-[#050B14]/20 to-[#050B14]/40" />
        </div>

        {/* Main content — centered, nudged slightly above optical center */}
        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-8 text-center -translate-y-3 sm:-translate-y-6 lg:-translate-y-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.2, 0.65, 0.3, 0.9] }}
            className="max-w-[960px] mx-auto"
          >
            {/* Solid main headline — English-only, "Korean Law" in azure */}
            <h1 className="font-bold leading-[1.08] tracking-[-0.02em] text-[32px] sm:text-[48px] lg:text-[72px]">
              {content.heroTitle}
            </h1>

            {/* Bilingual tagline */}
            <p className="mt-6 lg:mt-7 mx-auto max-w-[640px] text-[15px] sm:text-lg text-slate-300/90 leading-[1.8] font-medium tracking-tight">
              {content.heroSub}
            </p>
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
                {content.quickMenu.title}
              </div>
            </div>
            <a
              href="#consult"
              className="group w-[78px] h-[78px] flex flex-col items-center justify-center gap-1 bg-white text-[#0a0a0a] rounded-2xl hover:scale-[1.04] transition-transform"
            >
              <FileText size={20} strokeWidth={2} />
              <span className="text-[11px] font-extrabold mt-0.5">{content.quickMenu.online}</span>
            </a>
            <WeChatDialog>
              <button
                type="button"
                className="group w-[78px] h-[78px] flex flex-col items-center justify-center gap-1 bg-[#09BB07] text-white rounded-2xl hover:scale-[1.04] transition-transform"
              >
                <MessageCircle size={20} strokeWidth={2} />
                <span className="text-[11px] font-extrabold mt-0.5">{content.quickMenu.wechat}</span>
              </button>
            </WeChatDialog>
            <a
              href="tel:82-10-2999-6910"
              className="group w-[78px] h-[78px] flex flex-col items-center justify-center gap-1 bg-[#2563EB] text-white rounded-2xl hover:scale-[1.04] transition-transform"
            >
              <Phone size={20} strokeWidth={2} />
              <span className="text-[11px] font-extrabold mt-0.5">{content.quickMenu.phone}</span>
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
                <span className="h-px w-10 bg-[#2563EB]" />
                <span className="font-display text-[11px] sm:text-xs font-black tracking-[0.36em] uppercase text-[#2563EB]">
                  {content.professionals.eyebrow}
                </span>
              </div>
              <h2 className="text-[32px] sm:text-[44px] lg:text-[56px] font-black text-[#0f172a] tracking-tight leading-[1.1] mb-5">
                {content.professionals.title}
              </h2>
              <p className="text-base lg:text-lg text-slate-600 font-medium leading-relaxed max-w-[560px]">
                {content.professionals.desc}
              </p>
            </div>
            <Link
              to="/about"
              className="group font-display inline-flex items-center justify-center gap-3 self-start md:self-end border-2 border-[#0f172a] hover:bg-[#0f172a] text-[#0f172a] hover:text-white px-7 py-3.5 font-extrabold text-sm tracking-[0.22em] transition-colors whitespace-nowrap"
            >
              {content.professionals.viewMore}
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
            <div className="relative min-h-[440px] lg:min-h-[580px] overflow-hidden bg-gradient-to-br from-[#EAF3FC] via-[#D6E5F4] to-[#BBD2EA]">
              {/* BECOME watermark */}
              <div
                aria-hidden
                className="pointer-events-none absolute -right-[14%] -bottom-[10%] select-none
                           font-serif font-black italic leading-none tracking-[-0.05em]
                           text-[10rem] lg:text-[14rem] text-white/65 mix-blend-overlay"
              >
                BECOME
              </div>
              <img
                src={ohDonghyunCutout}
                alt={content.attorney.nameKo}
                className="absolute inset-x-0 bottom-0 w-full h-full object-contain object-bottom drop-shadow-[0_18px_24px_rgba(15,23,42,0.22)]"
                loading="lazy"
                decoding="async"
              />
              {/* Top-left editorial marker */}
              <div className="absolute top-6 left-6 font-display text-[#0f172a] text-[10px] sm:text-[11px] font-extrabold tracking-[0.32em] uppercase z-10">
                <span className="text-[#2563EB]">No. 01</span>
                <span className="mx-2 opacity-60">/</span>
                {content.attorney.role}
              </div>
            </div>

            {/* Content column */}
            <div className="p-10 sm:p-12 lg:p-16 xl:p-20 flex flex-col justify-between bg-white">
              <div>
                {/* Romanized */}
                <p className="font-display text-[11px] sm:text-xs font-black tracking-[0.42em] uppercase text-slate-400 mb-4">
                  {content.attorney.nameEn}
                </p>
                {/* Korean name */}
                <h3 className="font-black text-[#0f172a] tracking-[-0.02em] leading-none text-[48px] sm:text-[64px] lg:text-[80px] mb-6">
                  {content.attorney.nameKo}
                </h3>
                {/* Gold rule */}
                <div aria-hidden className="h-[3px] w-14 bg-[#2563EB] mb-5" />
                {/* Role */}
                <p className="text-base lg:text-lg text-slate-700 font-bold mb-10">
                  {content.attorney.office}
                </p>

                {/* Specialties */}
                <div>
                  <p className="text-[10px] sm:text-[11px] font-black tracking-[0.28em] uppercase text-[#2563EB] mb-4">
                    {content.attorney.specialtiesLabel}
                  </p>
                  <ul className="space-y-3.5">
                    {content.attorney.specs.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3.5 text-slate-700 font-medium text-[14px] sm:text-[15px] leading-relaxed"
                      >
                        <span className="mt-[9px] w-1.5 h-1.5 rounded-full bg-[#2563EB] shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom row: credentials + CTA */}
              <div className="mt-10 lg:mt-14 pt-7 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
                <div className="text-[12px] sm:text-[13px] text-slate-500 font-semibold leading-relaxed">
                  {content.attorney.edu}
                </div>
                <Link
                  to="/about"
                  className="group inline-flex items-center justify-between sm:justify-center gap-3 bg-[#0f172a] hover:bg-[#2563EB] text-white px-6 lg:px-7 py-3.5 font-extrabold text-[13px] tracking-wide transition-colors"
                >
                  {content.attorney.profileBtn}
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
          {content.pillars.map((pillar, i) => (
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
                  src={[
                    "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=85&w=1200",
                    "https://images.unsplash.com/photo-1521791136064-7986c2920216?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=85&w=1200",
                    "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=85&w=1200"
                  ][i]}
                  alt=""
                  className="w-full h-full object-cover opacity-[0.22] group-hover:opacity-[0.35] transition-opacity duration-700 scale-110 group-hover:scale-100"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#050B14]/60 via-[#050B14]/85 to-[#050B14]" />
              </div>
              <div className="relative w-full flex flex-col justify-end p-10 lg:p-14">
                <div className="mb-5">{[<GraduationCap className="w-8 h-8 text-[#2563EB]" strokeWidth={1.4} />, <Layers className="w-8 h-8 text-[#2563EB]" strokeWidth={1.4} />, <Clock className="w-8 h-8 text-[#2563EB]" strokeWidth={1.4} />][i]}</div>
                <p className="font-display text-[11px] font-black tracking-[0.36em] uppercase text-[#2563EB] mb-4">
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
                  className="group/link inline-flex items-center gap-2.5 text-white border-b border-white/30 hover:border-[#2563EB] pb-1.5 w-fit font-display text-[11px] font-black tracking-[0.28em] uppercase transition-colors"
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
              <span className="absolute top-8 right-8 font-display text-[#2563EB]/20 text-[64px] font-black italic">
                0{i + 1}
              </span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ─────────── STRENGTHS Section ─────────── */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 lg:mb-24">
            <h2 className="text-[32px] sm:text-[44px] lg:text-[56px] font-black text-[#0f172a] tracking-tight leading-[1.1] mb-6">
              {content.strengths.title}
            </h2>
            <p className="mx-auto max-w-[640px] text-base lg:text-lg text-slate-600 font-medium leading-relaxed">
              {content.strengths.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {content.strengths.items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group p-8 lg:p-10 border border-slate-100 hover:border-[#2563EB] bg-[#fafafa] hover:bg-white transition-all shadow-sm hover:shadow-xl"
              >
                <div className="w-12 h-12 bg-[#2563EB]/10 flex items-center justify-center mb-8 group-hover:bg-[#2563EB] transition-colors">
                  <ShieldCheck className="text-[#2563EB] group-hover:text-white transition-colors" size={24} />
                </div>
                <h3 className="text-xl lg:text-[22px] font-black text-[#0f172a] mb-5 tracking-tight leading-snug">
                  {item.title}
                </h3>
                <p className="text-[15px] lg:text-[16px] text-slate-700 font-medium leading-[1.85]">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── PRACTICE AREAS ─────────── */}
      <section className="py-24 lg:py-32 bg-[#0f172a] text-white overflow-hidden relative">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16 lg:mb-24">
            <div>
              <h2 className="text-[32px] sm:text-[44px] lg:text-[56px] font-black tracking-tight leading-[1.1] mb-6">
                {content.services.title}
              </h2>
              <p className="text-base lg:text-lg text-slate-300 font-medium leading-relaxed max-w-[560px]">
                {content.services.subtitle}
              </p>
            </div>
            <Link
              to="/services"
              className="group font-display inline-flex items-center justify-center gap-3 self-start md:self-end border border-white/20 hover:bg-white hover:text-[#0f172a] px-8 py-4 font-extrabold text-[13px] tracking-[0.2em] transition-all"
            >
              {content.services.viewAll}
              <ArrowRight size={16} strokeWidth={2.5} />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10">
            {content.services.items.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className="group p-10 lg:p-14 bg-[#0f172a] hover:bg-[#161e31] transition-colors relative"
              >
                <div className="text-[64px] font-black text-white/5 absolute top-10 right-10 group-hover:text-[#2563EB]/10 transition-colors">
                  0{i + 1}
                </div>
                <h3 className="text-xl lg:text-[24px] font-black mb-6 tracking-tight group-hover:text-[#2563EB] transition-colors">
                  {s.title}
                </h3>
                <p className="text-[15px] lg:text-[16px] text-slate-300 font-medium leading-[1.8] mb-10">
                  {s.desc}
                </p>
                <Link
                  to={`/services/${i + 1}`}
                  className="font-display text-[11px] font-black tracking-[0.2em] uppercase inline-flex items-center gap-2 group/link"
                >
                  {content.services.detail}
                  <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── SUCCESS CASES ─────────── */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-14 lg:mb-20">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-10 bg-[#2563EB]" />
                <span className="font-display text-[11px] sm:text-xs font-black tracking-[0.36em] uppercase text-[#2563EB]">
                  {content.cases.eyebrow}
                </span>
              </div>
              <h2 className="text-[32px] sm:text-[44px] lg:text-[56px] font-black text-[#0f172a] tracking-tight leading-[1.1] mb-5">
                {content.cases.title}
              </h2>
              <p className="text-base lg:text-lg text-slate-600 font-medium leading-relaxed max-w-[560px]">
                {content.cases.desc}
                <span className="block mt-1.5 text-xs tracking-wide text-slate-400 font-semibold italic">
                  {content.cases.previewNote}
                </span>
              </p>
            </div>
            <Link
              to="/cases"
              className="group font-display inline-flex items-center justify-center gap-3 self-start md:self-end border-2 border-[#0f172a] hover:bg-[#0f172a] text-[#0f172a] hover:text-white px-7 py-3.5 font-extrabold text-sm tracking-[0.22em] transition-colors whitespace-nowrap"
            >
              {content.cases.viewAll}
              <ArrowRight size={16} strokeWidth={2.5} className="transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {content.cases.items.map((c, i) => (
              <motion.article
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="group bg-white border border-slate-200 hover:border-[#0f172a] transition-colors p-8 lg:p-10 flex flex-col"
              >
                <div className="flex items-center justify-between mb-5">
                  <span className="inline-flex items-center gap-2 text-[11px] font-black tracking-[0.2em] uppercase text-[#2563EB] border border-[#2563EB]/40 px-3 py-1.5">
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
                <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between text-[11px]">
                  <span className="text-slate-400 italic">{content.cases.previewLabel}</span>
                  <ArrowUpRight
                    size={18}
                    strokeWidth={1.5}
                    className="text-slate-300 group-hover:text-[#2563EB] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
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
                <span className="h-px w-10 bg-[#2563EB]" />
                <span className="font-display text-[11px] sm:text-xs font-black tracking-[0.36em] uppercase text-[#2563EB]">
                  {content.legalInfo.eyebrow}
                </span>
              </div>
              <h2 className="text-[32px] sm:text-[44px] lg:text-[56px] font-black text-[#0f172a] tracking-tight leading-[1.1] mb-5">
                {content.legalInfo.title}
              </h2>
              <p className="text-base lg:text-lg text-slate-600 font-medium leading-relaxed max-w-[560px]">
                {content.legalInfo.desc}
              </p>
            </div>
            <Link
              to="/legal"
              className="group font-display inline-flex items-center justify-center gap-3 self-start md:self-end border-2 border-[#0f172a] hover:bg-[#0f172a] text-[#0f172a] hover:text-white px-7 py-3.5 font-extrabold text-sm tracking-[0.22em] transition-colors whitespace-nowrap"
            >
              {content.viewAll}
              <ArrowRight size={16} strokeWidth={2.5} className="transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5 lg:gap-6">
            {content.legalInfo.items.map((a, i) => (
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
                  <span className="font-semibold text-slate-400 italic">{content.legalInfo.soon}</span>
                  <ArrowRight
                    size={14}
                    strokeWidth={1.75}
                    className="text-slate-300 group-hover:text-[#2563EB] group-hover:translate-x-0.5 transition-all"
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
              <span className="h-px w-10 bg-[#2563EB]" />
              <span className="font-display text-[11px] sm:text-xs font-black tracking-[0.36em] uppercase text-[#2563EB]">
                {content.testimonials.eyebrow}
              </span>
              <span className="h-px w-10 bg-[#2563EB]" />
            </div>
            <h2 className="text-[32px] sm:text-[44px] lg:text-[56px] font-black text-[#0f172a] tracking-tight leading-[1.1] mb-5">
              {content.testimonials.title}
            </h2>
            <p className="mx-auto max-w-[560px] text-base lg:text-lg text-slate-600 font-medium leading-relaxed">
              {content.testimonials.desc}
              <span className="block mt-1.5 text-xs tracking-wide text-slate-400 font-semibold italic">
                {content.testimonials.previewNote}
              </span>
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {content.testimonials.items.map((t, i) => (
              <motion.figure
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="relative bg-[#faf6ef] border border-[#e9e3d2] p-8 lg:p-10 flex flex-col"
              >
                <Quote className="absolute top-6 right-6 w-10 h-10 text-[#2563EB]/25" strokeWidth={1.25} />
                <span className="inline-flex items-center self-start text-[11px] font-black tracking-[0.2em] uppercase text-[#2563EB] border border-[#2563EB]/40 px-3 py-1.5 mb-5">
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
                    {content.testimonials.previewLabel}
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
              "linear-gradient(135deg, transparent 49.5%, #2563EB 49.5%, #2563EB 50.5%, transparent 50.5%)",
            backgroundSize: "64px 64px",
          }}
        />
        <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-3 mb-6">
            <Hash size={16} className="text-[#2563EB]" strokeWidth={2} />
            <span className="font-display text-[11px] font-black tracking-[0.36em] uppercase text-[#2563EB]">
              {content.hashtags.eyebrow}
            </span>
          </div>
          <h2 className="text-[28px] sm:text-[40px] lg:text-[48px] font-black tracking-tight leading-tight mb-10 lg:mb-12">
            {content.hashtags.title}
          </h2>
          <div className="flex flex-wrap justify-center gap-3 lg:gap-4 max-w-[900px] mx-auto">
            {content.hashtags.items.map((tag, i) => (
              <motion.a
                key={tag}
                href="#"
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.03 }}
                className="group inline-flex items-center gap-2 border border-white/20 hover:border-[#2563EB] hover:bg-[#2563EB]/10 px-5 py-2.5 text-[13px] lg:text-sm font-display font-bold text-white/85 hover:text-white tracking-wide transition-colors"
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
            {content.quickLinks.map((q, i) => (
              <Link
                key={i}
                to={q.href}
                className="group block bg-[#faf6ef] border border-[#e9e3d2] hover:border-[#2563EB] p-8 lg:p-10 transition-colors"
              >
                <div className="mb-8">{q.icon}</div>
                <p className="font-display text-[10px] font-black tracking-[0.28em] uppercase text-[#2563EB] mb-3">
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
                  className="text-slate-400 group-hover:text-[#2563EB] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── CONSULTATION INTAKE FORM ─────────── */}
      <section id="consult" className="py-24 lg:py-32 bg-[#0f172a] text-white border-t-[6px] border-[#2563EB]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-[#2563EB]" />
              <span className="font-display text-[11px] font-black tracking-[0.36em] uppercase text-[#2563EB]">
                {content.consult.eyebrow}
              </span>
            </div>
            <h2 className="text-[32px] lg:text-[48px] font-black tracking-tight leading-[1.1] mb-6">
              {content.consult.title}
            </h2>
            <p className="text-base lg:text-lg text-slate-300/85 font-medium leading-[1.85] mb-10 max-w-[440px]">
              {content.consult.desc}
            </p>
            <div className="space-y-5">
              <div className="flex items-start gap-4 border-l-2 border-[#2563EB] pl-5">
                <div>
                  <p className="font-display text-[10px] font-black tracking-[0.28em] uppercase text-[#2563EB] mb-1">
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
                {content.form.title}
              </h3>
              <span className="font-display text-[10px] font-black tracking-[0.26em] uppercase text-[#2563EB]">
                {content.form.badge}
              </span>
            </div>
            <div className="grid sm:grid-cols-2 gap-5 mb-5">
              <div>
                <label className="block text-[11px] font-black tracking-[0.2em] uppercase text-slate-500 mb-2">
                  01 · {content.form.nameLabel}
                </label>
                <input
                  type="text"
                  placeholder={content.form.namePlaceholder}
                  className="w-full bg-transparent border-0 border-b border-slate-300 focus:border-[#0f172a] pb-2 text-[15px] placeholder:text-slate-400 focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block text-[11px] font-black tracking-[0.2em] uppercase text-slate-500 mb-2">
                  02 · {content.form.contactLabel}
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
                03 · {content.form.langLabel}
              </label>
              <div className="flex gap-3">
                {["한국어", "中文", "English"].map((lang) => (
                  <label
                    key={lang}
                    className="flex items-center gap-2 border border-slate-200 hover:border-[#0f172a] px-4 py-2 cursor-pointer transition-colors text-[13px] font-semibold"
                  >
                    <input type="radio" name="lang" className="accent-[#2563EB]" />
                    {lang}
                  </label>
                ))}
              </div>
            </div>
            <div className="mb-5">
              <label className="block text-[11px] font-black tracking-[0.2em] uppercase text-slate-500 mb-2">
                04 · {content.form.fieldLabel}
              </label>
              <select className="w-full bg-transparent border-0 border-b border-slate-300 focus:border-[#0f172a] pb-2 text-[15px] focus:outline-none transition-colors">
                <option>{content.form.selectPlaceholder}</option>
                {content.form.fields.map((f) => (
                  <option key={f}>{f}</option>
                ))}
              </select>
            </div>
            <div className="mb-8">
              <label className="block text-[11px] font-black tracking-[0.2em] uppercase text-slate-500 mb-2">
                05 · {content.form.msgLabel}
              </label>
              <textarea
                rows={4}
                placeholder={content.form.msgPlaceholder}
                className="w-full bg-transparent border-0 border-b border-slate-300 focus:border-[#0f172a] pb-2 text-[15px] placeholder:text-slate-400 focus:outline-none resize-none transition-colors leading-[1.75]"
              />
            </div>
            <label className="flex items-baseline gap-2 mb-7 text-[12px] text-slate-600 font-medium">
              <input type="checkbox" className="accent-[#2563EB] mt-0.5" />
              {content.form.agreements}
            </label>
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                type="submit"
                className="group flex-1 inline-flex items-center justify-center gap-3 bg-[#0f172a] hover:bg-[#2563EB] text-white px-6 py-4 font-extrabold text-[14px] tracking-wide transition-colors"
              >
                {content.form.submit}
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
                  {content.form.wechatDirect}
                </button>
              </WeChatDialog>
            </div>
            <p className="mt-5 text-[11px] text-slate-400 font-medium italic">
              {content.form.previewNote}
            </p>
          </form>
        </div>
      </section>

      {/* Guide / Lead Magnet Section */}
      <section className="py-24 bg-[#0f172a] relative border-t-8 border-[#2563EB]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="md:w-2/3 text-white">
              <div className="flex items-center gap-4 mb-6">
                <span className="inline-flex items-center px-4 py-1 border border-[#2563EB] text-[#2563EB] font-bold text-sm">
                  {content.guide.badge}
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold mb-8 leading-tight">
                {content.guide.title}<br />
                <span className="text-slate-400 font-bold text-3xl md:text-4xl mt-2 block">{content.guide.subtitle}</span>
              </h2>
              <ul className="space-y-4 mb-10 text-slate-300 font-bold text-lg">
                {content.guide.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 size={24} className="text-[#2563EB] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              
              <a href="#" className="inline-flex items-center justify-center gap-3 bg-[#2563EB] hover:bg-[#1D4ED8] text-white px-10 py-5 font-extrabold text-lg transition-all w-full sm:w-auto shadow-xl">
                <Download size={22} />
                {content.guide.download}
              </a>
            </div>
            
            <div className="md:w-1/3 flex justify-center w-full">
              <div className="bg-white p-8 shadow-2xl w-full max-w-md border-t-4 border-[#2563EB]">
                <div className="aspect-[3/4] bg-slate-50 border border-slate-200 flex flex-col items-center justify-center p-8 text-center">
                  <FileText size={56} className="mb-6 text-[#0f172a]" />
                  <p className="font-extrabold text-2xl text-[#0f172a] mb-4">{content.guide.mockupTitle}</p>
                  <p className="text-base text-slate-500 font-medium mb-8">{content.guide.mockupDesc}</p>
                  
                  <div className="w-full h-[1px] bg-slate-200 mb-8" />
                  
                  <p className="text-sm font-bold text-[#0f172a] mb-4">{content.guide.wechatLabel}</p>
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

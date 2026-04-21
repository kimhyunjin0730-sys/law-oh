import { Link } from "react-router";
import { SectionHeading } from "../components/SectionHeading";
import { ShieldCheck, Scale, FileText, Briefcase, HeartHandshake, CheckCircle2, ArrowRight } from "lucide-react";
import { WeChatDialog } from "../components/WeChatDialog";
import { useLanguage } from "../context/LanguageContext";

export function Services() {
  const { language } = useLanguage();

  const content = {
    ko: {
      title: "주요 업무 분야",
      subtitle: "비컴는 당신의 언어로 사건을 정확히 이해하고, 한국의 법리로 완벽한 방어막을 구축합니다.",
      detailBtn: "자세히 보기",
      ctaTitle: "지금 바로 전문적인 상담이 필요하십니까?",
      ctaDesc: "한국에서의 법적 문제, 시간이 지체될수록 불리해질 수 있습니다. 비컴가 당신의 언어로 직접 상담하고 가장 확실한 해답을 찾아드립니다.",
      onlineBtn: "온라인 상담 접수",
      wechatBtn: "위챗 직접 상담",
      phoneBtn: "전화 상담",
      services: [
        {
          id: "immigration",
          icon: <ShieldCheck className="w-16 h-16 text-[#2563EB] mb-8" />,
          title: "체류 자격 · 출입국 법률 자문",
          cn: "(签证·出入境)",
          description: "형사 사건 수임 즉시 체류 자격에 미치는 영향을 병행 분석하여 전략을 수립합니다.",
          items: [
            "F-4(재외동포), H-2(방문취업) 체류 자격 유지 전략",
            "형사 처벌 확정 시 체류 자격 취소 가능성 사전 진단",
            "체류 자격 변경 · 연장 관련 법률 자문",
            "강제퇴거 명령 불복 및 이의신청 대응",
            "출입국 단속 시 긴급 대응 (위챗 24시간)"
          ],
        },
        {
          id: "criminal",
          icon: <Scale className="w-16 h-16 text-[#2563EB] mb-8" />,
          title: "형사 사건",
          cn: "(刑事案件)",
          description: "억울한 혐의는 벗고, 피해는 신속히 구제받을 수 있도록 치밀하게 조력합니다.",
          items: [
            "보이스피싱 전달책 혐의 방어: 고의성 부존재 입증을 통한 불기소/무죄 목표",
            "투자 사기 피해 고소: 주식, 코인, 로맨스스캠 등 사기 피해 전 과정 지원",
            "업무상 횡령 혐의 방어: 회계 자료 분석을 통한 불법영득의사 부존재 입증",
            "정보통신망법 위반: 관리자 권한 남용, 개인정보 무단 열람 등 대응",
            "성범죄 혐의 방어: 강제추행 등 혐의 사실관계 분석 및 무고 가능성 입증",
            "성매매 알선 혐의 방어: 사실관계 분석 및 혐의 부인 전략 수립",
            "교통사고 · 음주운전: 치상·음주 혐의와 체류 자격 영향 동시 분석"
          ],
        },
        {
          id: "civil",
          icon: <FileText className="w-16 h-16 text-[#2563EB] mb-8" />,
          title: "민사 · 금융 사건",
          cn: "(民事·金融案件)",
          description: "복잡한 금전 분쟁에서 의뢰인의 재산권을 끝까지 보호합니다.",
          items: [
            "채무부존재확인 소송 방어: 보이스피싱 계좌 연루 피해자의 억울한 민사 책임 방어",
            "P2P 금융 사건: 온라인투자연계금융 연대보증채무 청구 사건 대리",
            "중고차 3자 사기: 선의의 매수인 보호 법리 및 원고 과실 입증",
            "손해배상 청구 방어: 직원의 방조 책임 부존재 입증",
            "자동차 정비 과실: 휠 볼트 정비 과실 손해배상 청구 방어",
            "침수 피해 사건: 공용 하수관 역류 일부채무부존재확인 소송 방어",
            "명의개서 소송: 명의개서청구 소송 관련 특별대리인 선임 등 자문",
            "전환사채 약정금 청구: 전환사채 관련 약정금 청구 소송 대리"
          ],
        },
        {
          id: "corporate",
          icon: <Briefcase className="w-16 h-16 text-[#2563EB] mb-8" />,
          title: "대중(對中) 계약 · 기업 자문",
          cn: "(涉华合同·企业)",
          description: "중국어 원문을 기준으로 리스크를 직접 분석하고 검토합니다.",
          items: [
            "한중 수출입 계약: 중국어 원문 기준으로 리스크 직접 분석 및 검토",
            "비영리 법인 자문: 재단법인 설립 정관 작성 및 양국 운영 구조 자문",
            "분쟁 해결: 중국 기업과의 대금 미지급, 지식재산권 침해 소송 자문",
            "이중언어 문서: 한·중·영 다중언어 법률 문서 작성"
          ],
        },
        {
          id: "family",
          icon: <HeartHandshake className="w-16 h-16 text-[#2563EB] mb-8" />,
          title: "가사 · 상속 사건",
          cn: "(家事·继承)",
          description: "국경을 넘나드는 가족 간의 문제를 합리적으로 해결합니다.",
          items: [
            "이혼 및 위자료: 유리한 재산분할을 위한 기준시점 확정 전략",
            "판결 효력 검토: 중국 법원 이혼 판결의 한국 내 효력 및 집행 가능성 검토",
            "상속 자문: 중국 소재 재산에 대한 한국 내 상속 절차 안내"
          ],
        }
      ]
    },
    zh: {
      title: "主要业务领域",
      subtitle: "BECOME用您的语言准确理解案件，以韩国法理构筑完美的防御网。",
      detailBtn: "查看详情",
      ctaTitle: "您现在需要专业咨询吗？",
      ctaDesc: "在韩国的法律问题，时间拖得越久可能越不利。BECOME用您的母语直接与您沟通，为您寻找最确切的答案。",
      onlineBtn: "在线咨询申请",
      wechatBtn: "微信直接咨询",
      phoneBtn: "电话咨询",
      services: [
        {
          id: "immigration",
          icon: <ShieldCheck className="w-16 h-16 text-[#2563EB] mb-8" />,
          title: "签证 · 出入境法律咨询",
          cn: "(签证·出入境)",
          description: "从接受刑事案件委托起，我们即时分析其对居留资格的影响并制定应对战略。",
          items: [
            "F-4（在外同胞）、H-2（访问就业）居留资格维持战略",
            "刑事处罚确定时居留资格取消可能性的事前诊断",
            "签证变更、延期相关法律咨询",
            "强制遣返命令的不服及异议申请应对",
            "出入境突击检查时的紧急应对（微信24小时在线）"
          ],
        },
        {
          id: "criminal",
          icon: <Scale className="w-16 h-16 text-[#2563EB] mb-8" />,
          title: "刑事案件",
          cn: "(刑事案件)",
          description: "洗刷冤屈，助您迅速获得损害救济，我们提供周密的协助。",
          items: [
            "电信诈骗工具人嫌疑辩护：通过证明无故意性，以不起诉/无罪为目标",
            "投资诈骗受害起诉：全过程支援股票、虚拟货币、杀猪盘等诈骗受害案件",
            "业务侵占嫌疑辩护：通过会计资料分析证明不存在非法占有目的",
            "违反信息通信网法：应对滥用管理员权限、擅自查阅个人信息等嫌疑",
            "性犯罪嫌疑辩护：分析强制猥亵等嫌疑的事实关系并证明被诬告的可能性",
            "介绍卖淫嫌疑辩护：事关关系分析及制定否认嫌疑的战略",
            "交通事故 · 酒后驾驶：同时分析致伤、酒驾嫌疑及对居留资格的影响"
          ],
        },
        {
          id: "civil",
          icon: <FileText className="w-16 h-16 text-[#2563EB] mb-8" />,
          title: "民事 · 金融案件",
          cn: "(民事·金融案件)",
          description: "在复杂的金钱纠纷中，始终保护委托人的财产权。",
          items: [
            "债务不存在确认诉讼辩护：为被卷入电信诈骗账户的受害者进行无辜民事责任辩护",
            "P2P金融案件：代理网络借贷信息中介机构连带保证债务索赔诉讼",
            "二手车三方诈骗：适用保护善意买受人法理及证明原告过失",
            "损害赔偿索赔辩护：证明员工不存在帮助责任",
            "汽车维修过失：针对轮毂螺栓维修过失的损害赔偿索赔成功防卫",
            "浸水损失案件：公共下水管道倒灌部分债务不存在确认诉讼辩护",
            "名义变更诉讼：关于名义变更请求诉讼的特别代理人指定等咨询",
            "可转换债券约定金索赔：代理可转换债券相关的约定金索赔诉讼"
          ],
        },
        {
          id: "corporate",
          icon: <Briefcase className="w-16 h-16 text-[#2563EB] mb-8" />,
          title: "涉华合同 · 企业咨询",
          cn: "(涉华合同·企业)",
          description: "以中文原文为基准，直接分析审查风险点。",
          items: [
            "中韩进出口合同：以中文原文为基准直接审查风险并分析",
            "非营利法人咨询：起草财团法人设立章程及提供两国运营结构法律意见",
            "纠纷解决：与中国企业关于拖欠货款、侵犯知识产权等诉讼咨询",
            "双语文件：起草韩·中·英等多语种法律文书"
          ],
        },
        {
          id: "family",
          icon: <HeartHandshake className="w-16 h-16 text-[#2563EB] mb-8" />,
          title: "家事 · 继承案件",
          cn: "(家事·继承)",
          description: "合理解决跨越国界的家庭内部问题。",
          items: [
            "离婚与精神损害赔偿：制定有利于财产分割的基准时间点战略",
            "判决效力审查：研判中国法院离婚判决在韩效力及可执行性",
            "继承咨询：指导位于中国资产在韩国国内的继承程序"
          ],
        }
      ]
    },
    en: {
      title: "Practice Areas",
      subtitle: "BECOME understands your case precisely in your language and builds a perfect defense with Korean legal logic.",
      detailBtn: "View Details",
      ctaTitle: "Need Professional Consultation Now?",
      ctaDesc: "Legal issues in Korea can become more disadvantageous as time delays. BECOME will consult directly in your language and find the clearest solution.",
      onlineBtn: "Submit Online",
      wechatBtn: "WeChat Consultation",
      phoneBtn: "Call Us",
      services: [
        {
          id: "immigration",
          icon: <ShieldCheck className="w-16 h-16 text-[#2563EB] mb-8" />,
          title: "Visa & Immigration Legal Advice",
          cn: "(Visa & Immigration)",
          description: "Upon taking on a criminal case, we simultaneously analyze its impact on your visa status and formulate a strategy.",
          items: [
            "F-4 (Overseas Korean), H-2 (Working Visit) visa maintenance strategies",
            "Advance diagnosis of risk of visa cancellation upon final criminal penalty",
            "Legal advice on visa change and extension",
            "Response to deportation orders and filing of objections",
            "Emergency response during immigration raids (WeChat 24/7)"
          ],
        },
        {
          id: "criminal",
          icon: <Scale className="w-16 h-16 text-[#2563EB] mb-8" />,
          title: "Criminal Defense",
          cn: "(Criminal Cases)",
          description: "We meticulously assist you in clearing false charges and securing prompt relief for damages.",
          items: [
            "Defense against voice phishing courier charges: Aiming for non-indictment/acquittal by proving lack of intent",
            "Filing complaints for investment fraud: Full-process support for stock, crypto, and romance scam victims",
            "Defense against occupational embezzlement charges: Proving absence of unlawful intent to appropriate through accounting analysis",
            "IT Network Act violations: Defense against abuse of admin rights and unauthorized access to personal info",
            "Defense against sex crime charges: Analyzing facts of indecent act charges and demonstrating possibility of false accusation",
            "Defense against charges of mediating prostitution: Analyzing facts and establishing a strategy to deny charges",
            "Traffic accidents & DUI: Simultaneous analysis of injury/DUI charges and impact on visa status"
          ],
        },
        {
          id: "civil",
          icon: <FileText className="w-16 h-16 text-[#2563EB] mb-8" />,
          title: "Civil & Financial Law",
          cn: "(Civil/Financial)",
          description: "We protect our clients' property rights to the end in complex financial disputes.",
          items: [
            "Defense in debt non-existence suits: Defending innocent victims implicated in voice phishing accounts",
            "P2P financial cases: Representation in joint surety debt claims for online peer-to-peer lending",
            "Three-party used car fraud: Legal principles for protecting bona fide purchasers and proving plaintiff's negligence",
            "Defense against damages claims: Proving absence of aiding and abetting liability for employees",
            "Auto maintenance negligence: Successful defense against damages claims for wheel bolt maintenance negligence",
            "Flood damage cases: Defense in partial debt non-existence confirmation suits regarding public sewage backflow",
            "Title transfer suits: Advice on appointing special representatives for title transfer claim suits",
            "Convertible bond agreement claims: Representation in convertible bond agreement claims amount suits"
          ],
        },
        {
          id: "corporate",
          icon: <Briefcase className="w-16 h-16 text-[#2563EB] mb-8" />,
          title: "China Contracts & Corporate",
          cn: "(Contracts/Corporate)",
          description: "We directly analyze and review risks based on the original Chinese text.",
          items: [
            "Korea-China import/export contracts: Direct risk analysis and review based on original Chinese text",
            "Non-profit corporate advice: Drafting articles of incorporation and advising on dual-country operations",
            "Dispute resolution: Advice on unpaid balance and IP infringement litigation involving Chinese companies",
            "Bilingual documents: Drafting legal documents in Korean, Chinese, and English"
          ],
        },
        {
          id: "family",
          icon: <HeartHandshake className="w-16 h-16 text-[#2563EB] mb-8" />,
          title: "Family & Inheritance",
          cn: "(Family/Inheritance)",
          description: "We rationally resolve cross-border family issues.",
          items: [
            "Divorce & alimony: Securing the base timing for favorable property division",
            "Judgment validity review: Reviewing the validity and enforceability of Chinese divorce judgments in Korea",
            "Inheritance advice: Guidance on inheritance procedures in Korea for assets located in China"
          ],
        }
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

        <div className="mt-20 space-y-16">
          {currentContent.services.map((service) => (
            <Link
              key={service.id}
              to={`/services/${service.id}`}
              className="flex flex-col lg:flex-row bg-slate-50 border border-slate-200 group hover:border-[#2563EB] transition-colors"
            >
              <div className="lg:w-1/3 bg-white p-12 lg:p-16 border-b lg:border-b-0 lg:border-r border-slate-200 group-hover:border-[#2563EB]/30 transition-colors">
                {service.icon}
                <h3 className="text-3xl font-extrabold text-[#0f172a] mb-2 tracking-tight group-hover:text-[#2563EB] transition-colors">
                  {service.title}
                </h3>
                <span className="block text-xl font-bold text-[#2563EB] mb-6">
                  {service.cn}
                </span>
                <p className="text-slate-600 font-medium leading-relaxed text-lg">
                  {service.description}
                </p>
                <div className="mt-8 inline-flex items-center gap-2 font-display text-[12px] font-extrabold tracking-[0.22em] uppercase text-[#0f172a] border-b border-[#0f172a] pb-1 group-hover:text-[#2563EB] group-hover:border-[#2563EB] transition-colors">
                  {currentContent.detailBtn}
                  <ArrowRight size={14} strokeWidth={2.5} className="transition-transform group-hover:translate-x-1" />
                </div>
              </div>

              <div className="lg:w-2/3 p-12 lg:p-16 flex flex-col justify-center">
                <div className="grid sm:grid-cols-2 gap-x-12 gap-y-8">
                  {service.items.map((item, idx) => {
                    const [main, sub] = item.split(': ');
                    return (
                      <div key={idx} className="flex gap-4 items-start">
                        <div className="w-2 h-2 bg-[#2563EB] mt-2.5 shrink-0" />
                        <div>
                          <span className="block font-extrabold text-[#0f172a] text-lg mb-2">{main}</span>
                          {sub && <span className="block text-slate-600 text-base leading-relaxed font-medium">{sub}</span>}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-32 bg-[#0f172a] text-center text-white p-16 lg:p-24 border-t-[8px] border-[#2563EB]">
          <h3 className="text-3xl md:text-5xl font-extrabold mb-8 tracking-tight">{currentContent.ctaTitle}</h3>
          <p className="text-slate-400 mb-12 max-w-3xl mx-auto text-xl font-medium leading-relaxed">
             {currentContent.ctaDesc}
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
             <Link
                to="/#consult"
                className="bg-white text-[#0f172a] hover:bg-slate-100 px-10 py-5 font-extrabold text-xl transition-colors flex justify-center items-center gap-3"
              >
                {currentContent.onlineBtn}
              </Link>
              <WeChatDialog>
                <button
                  type="button"
                  className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white px-10 py-5 font-extrabold text-xl transition-colors flex justify-center items-center gap-3"
                >
                  {currentContent.wechatBtn} (wudongxuan002)
                </button>
              </WeChatDialog>
              <a
                href="tel:82-10-2999-6910"
                className="border border-white/30 text-white hover:bg-white hover:text-[#0f172a] px-10 py-5 font-extrabold text-xl transition-colors flex justify-center items-center gap-3"
              >
                {currentContent.phoneBtn} (82-10-2999-6910)
              </a>
          </div>
        </div>
      </div>
    </div>
  );
}

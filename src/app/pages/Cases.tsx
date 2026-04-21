import { Link } from "react-router";
import { SectionHeading } from "../components/SectionHeading";
import { ArrowRight, Scale, Briefcase, FileText } from "lucide-react";
import { WeChatDialog } from "../components/WeChatDialog";
import { useLanguage } from "../context/LanguageContext";

export function Cases() {
  const { language } = useLanguage();

  const content = {
    ko: {
      title: "업무 성공 사례",
      subtitle: "비컴의 철저한 분석과 치밀한 전략으로 만들어낸 주요 승소 및 자문 사례입니다.",
      contactTitle: "당신의 사건도 비컴의 또 다른 성공 사례가 될 수 있습니다.",
      contactPrefix: "당신의 사건도 ",
      contactHighlight: "비컴의 또 다른 성공 사례",
      contactSuffix: "가 될 수 있습니다.",
      contactDesc: "더 많은 사례와 자세한 상담을 원하시면 언제든 문의해주세요.",
      onlineBtn: "온라인 상담 접수",
      wechatBtn: "위챗 상담하기",
      categories: [
        {
          id: "financial",
          title: "금융 / 재단 사건",
          icon: <Briefcase size={40} className="text-[#2563EB] mb-6" />,
          cases: [
            "P2P 연대보증채무 청구 사건 성공적 방어",
            "보이스피싱 연루자 채무부존재확인 소송 승소",
            "대중(對中) 수출입 중문 계약서 정밀 검토 및 리스크 차단",
            "비영리 재단법인 정관 작성 및 양국 운영 구조 자문"
          ]
        },
        {
          id: "civil",
          title: "일반 민사 사건",
          icon: <FileText size={40} className="text-[#2563EB] mb-6" />,
          cases: [
            "중고차 3자 사기 사건 원고 과실 입증 및 선의의 매수인 보호",
            "정비 과실에 따른 손해배상 청구 방어 성공",
            "하수관 역류로 인한 침수 피해 사건 피고측 방어",
            "명의개서청구 관련 법률 자문 제공",
            "전환사채 약정금 청구 소송 대리"
          ]
        },
        {
          id: "criminal",
          title: "형사 사건 방어",
          icon: <Scale size={40} className="text-[#2563EB] mb-6" />,
          cases: [
            "대표이사 업무상 횡령 혐의 수사 단계 불기소 방어",
            "회사 시스템 관리자 권한 남용 정보통신망법 위반 혐의 고소",
            "작업치료사 강제추행 혐의 사건 방어 및 체류 자격 유지 전략 병행",
            "투자(주식·코인·로맨스스캠) 사기 피해자 고소 대리 및 구제",
            "성매매 알선 혐의 사건 방어",
            "교통사고처리특례법위반(치상) 혐의 사건 방어",
            "음주운전 혐의 사건 방어 및 신분 불이익 최소화"
          ]
        }
      ]
    },
    zh: {
      title: "成功案例",
      subtitle: "BECOME通过透彻的分析和缜密的战略所取得的主要胜诉及咨询案例。",
      contactTitle: "您的案件也能成为BECOME的下一个成功案例。",
      contactPrefix: "您的案件也能成为",
      contactHighlight: "BECOME的下一个成功案例",
      contactSuffix: "。",
      contactDesc: "如果您需要了解更多案例或详细咨询，请随时与我们联系。",
      onlineBtn: "在线咨询申请",
      wechatBtn: "微信咨询",
      categories: [
        {
          id: "financial",
          title: "金融 / 基金会案件",
          icon: <Briefcase size={40} className="text-[#2563EB] mb-6" />,
          cases: [
            "成功辩护P2P连带保证债务索赔案件",
            "电信诈骗涉案人员债务不存在确认诉讼胜诉",
            "精准审查对华进出口中文合同并规避风险",
            "非营利财团法人章程起草及两国运营结构咨询"
          ]
        },
        {
          id: "civil",
          title: "一般民事案件",
          icon: <FileText size={40} className="text-[#2563EB] mb-6" />,
          cases: [
            "二手车三方诈骗案原告过失举证及善意买受人保护",
            "因维修过失导致的损害赔偿索赔成功辩护",
            "下水管道倒灌导致浸水损失案件被告方辩护",
            "提供名义变更请求相关法律咨询",
            "代理可转换债券约定金索赔诉讼"
          ]
        },
        {
          id: "criminal",
          title: "刑事案件辩护",
          icon: <Scale size={40} className="text-[#2563EB] mb-6" />,
          cases: [
            "代表董事业务侵占嫌疑侦查阶段不起诉辩护",
            "起诉公司系统管理员滥用职权违反信息通信网法",
            "作业治疗师强制猥亵嫌疑案件辩护及维持居留资格双重战略",
            "代理投资（股票·虚拟货币·杀猪盘）诈骗受害者起诉及救济",
            "介绍卖淫嫌疑案件辩护",
            "违反交通事故处理特例法（致伤）嫌疑案件辩护",
            "酒后驾驶嫌疑案件辩护及将身份不利影响降至最低"
          ]
        }
      ]
    },
    en: {
      title: "Success Cases",
      subtitle: "Major success stories and consulting cases achieved through BECOME's thorough analysis and meticulous strategy.",
      contactTitle: "Your case can be BECOME's next success story.",
      contactPrefix: "Your case can be ",
      contactHighlight: "BECOME's next success story",
      contactSuffix: ".",
      contactDesc: "If you want more examples or detailed consultation, please feel free to contact us.",
      onlineBtn: "Online Consultation",
      wechatBtn: "WeChat Consultation",
      categories: [
        {
          id: "financial",
          title: "Financial / Foundation Cases",
          icon: <Briefcase size={40} className="text-[#2563EB] mb-6" />,
          cases: [
            "Successfully defended against P2P joint surety debt claims",
            "Won debt non-existence confirmation suit for voice phishing suspect",
            "Precise review of Chinese contracts for export/import to China and risk prevention",
            "Drafting articles of incorporation for non-profit foundations and advising on dual-country operation structures"
          ]
        },
        {
          id: "civil",
          title: "General Civil Cases",
          icon: <FileText size={40} className="text-[#2563EB] mb-6" />,
          cases: [
            "Proved plaintiff's negligence in used car 3-party fraud and protected bona fide purchaser",
            "Successfully defended claims for damages due to maintenance negligence",
            "Defendant side defense in flood damage case caused by sewage backflow",
            "Provided legal advice related to claims for transfer of title",
            "Represented in claims for convertible bond agreement amounts"
          ]
        },
        {
          id: "criminal",
          title: "Criminal Defense",
          icon: <Scale size={40} className="text-[#2563EB] mb-6" />,
          cases: [
            "Defended CEO against embezzlement charges, securing non-indictment at investigation stage",
            "Filed a criminal complaint against company system administrator for abuse of authority under the IT Network Act",
            "Defended occupational therapist against indecent act by compulsion charges while acting to maintain visa status",
            "Represented victims of investment (stocks, crypto, romance scams) fraud in filing complaints and seeking relief",
            "Defended against charges of mediating prostitution",
            "Defended against charges of violating the Act on Special Cases Concerning the Settlement of Traffic Accidents",
            "Defended against DUI charges minimizing negative impacts on immigration status"
          ]
        }
      ]
    }
  };

  const currentContent = content[language as keyof typeof content] || content.ko;

  return (
    <div className="bg-slate-50 min-h-screen pt-28 md:pt-36 pb-32">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title={currentContent.title} 
          subtitle={currentContent.subtitle} 
          centered={true}
        />

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {currentContent.categories.map((category) => (
            <div key={category.id} className="min-w-0 bg-white border-t-[6px] border-[#0f172a] shadow-sm hover:shadow-xl transition-shadow p-12 flex flex-col h-full group hover:border-[#2563EB]">
              {category.icon}
              <h3 className="text-2xl md:text-3xl font-extrabold text-[#0f172a] tracking-tight mb-10">{category.title}</h3>

              <ul className="space-y-5 flex-grow">
                {category.cases.map((caseItem, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-[#2563EB] mt-[11px] shrink-0" />
                    <span className="text-[16px] md:text-[17px] leading-[1.85] text-slate-700 font-medium">
                      {caseItem}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-32 bg-[#0f172a] border border-slate-800 p-12 md:p-20 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="text-center md:text-left">
            <h4 className="text-2xl md:text-3xl font-extrabold text-white mb-4 tracking-tight">
              {currentContent.contactPrefix}<span className="text-[#2563EB]">{currentContent.contactHighlight}</span>{currentContent.contactSuffix}
            </h4>
            <p className="text-base md:text-lg text-slate-400 font-medium">{currentContent.contactDesc}</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <Link
              to="/#consult"
              className="flex items-center gap-3 bg-white text-[#0f172a] hover:bg-slate-100 px-8 py-4 font-bold text-base md:text-lg transition-colors whitespace-nowrap"
            >
              {currentContent.onlineBtn} <ArrowRight size={20} />
            </Link>
            <WeChatDialog>
              <button
                type="button"
                className="flex items-center gap-3 bg-[#2563EB] hover:bg-[#1D4ED8] text-white px-8 py-4 font-bold text-base md:text-lg transition-colors whitespace-nowrap"
              >
                {currentContent.wechatBtn} <ArrowRight size={20} />
              </button>
            </WeChatDialog>
          </div>
        </div>
      </div>
    </div>
  );
}

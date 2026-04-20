import { Link } from "react-router";
import { SectionHeading } from "../components/SectionHeading";
import { FolderCheck, ArrowRight, Scale, Briefcase, FileText } from "lucide-react";
import { WeChatDialog } from "../components/WeChatDialog";

export function Cases() {
  const caseCategories = [
    {
      id: "financial",
      title: "금융 / 재단 사건",
      icon: <Briefcase size={40} className="text-[#b59a5d] mb-6" />,
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
      icon: <FileText size={40} className="text-[#b59a5d] mb-6" />,
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
      icon: <Scale size={40} className="text-[#b59a5d] mb-6" />,
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
  ];

  return (
    <div className="bg-slate-50 min-h-screen pt-24 pb-32">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="업무 성공 사례" 
          subtitle="비컴의 철저한 분석과 치밀한 전략으로 만들어낸 주요 승소 및 자문 사례입니다." 
          centered={true}
        />

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {caseCategories.map((category) => (
            <div key={category.id} className="bg-white border-t-[6px] border-[#0f172a] shadow-sm hover:shadow-xl transition-shadow p-12 flex flex-col h-full group hover:border-[#b59a5d]">
              {category.icon}
              <h3 className="text-3xl font-extrabold text-[#0f172a] tracking-tight mb-10">{category.title}</h3>
              
              <ul className="space-y-6 flex-grow">
                {category.cases.map((caseItem, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-[#b59a5d] mt-2.5 shrink-0" />
                    <span className="text-slate-700 leading-relaxed font-bold text-lg">
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
            <h4 className="text-3xl font-extrabold text-white mb-4 tracking-tight">
              당신의 사건도 <span className="text-[#b59a5d]">비컴의 또 다른 성공 사례</span>가 될 수 있습니다.
            </h4>
            <p className="text-slate-400 font-medium text-xl">더 많은 사례와 자세한 상담을 원하시면 언제든 문의해주세요.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <Link
              to="/#consult"
              className="flex items-center gap-3 bg-white text-[#0f172a] hover:bg-slate-100 px-10 py-5 font-extrabold text-xl transition-colors whitespace-nowrap"
            >
              온라인 상담 접수 <ArrowRight size={24} />
            </Link>
            <WeChatDialog>
              <button
                type="button"
                className="flex items-center gap-3 bg-[#b59a5d] hover:bg-[#a38a53] text-white px-10 py-5 font-extrabold text-xl transition-colors whitespace-nowrap"
              >
                위챗 상담하기 <ArrowRight size={24} />
              </button>
            </WeChatDialog>
          </div>
        </div>
      </div>
    </div>
  );
}

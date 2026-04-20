import { SectionHeading } from "../components/SectionHeading";
import { ShieldCheck, Scale, FileText, Briefcase, HeartHandshake, CheckCircle2, ArrowRight } from "lucide-react";
import { WeChatDialog } from "../components/WeChatDialog";

export function Services() {
  const services = [
    {
      id: "immigration",
      icon: <ShieldCheck className="w-16 h-16 text-[#b59a5d] mb-8" />,
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
      color: "border-[#b59a5d]"
    },
    {
      id: "criminal",
      icon: <Scale className="w-16 h-16 text-[#b59a5d] mb-8" />,
      title: "형사 사건",
      cn: "(刑事案件)",
      description: "억울한 혐의는 벗고, 피해는 신속히 구제받을 수 있도록 치밀하게 조력합니다.",
      items: [
        "보이스피싱 전달책 혐의 방어: 고의성 부존재 입증을 통한 불기소/무죄 목표",
        "투자 사기 피해 고소: 주식, 코인, 로맨스스캠 등 사기 피해 전 과정 지원",
        "업무상 횡령 혐의 방어: 회계 자료 분석을 통한 불법영득의사 부존재 입증",
        "정보통신망법 위반: 관리자 권한 남용, 개인정보 무단 열람 등 대응",
        "성범죄 혐의 방어: 강제추행 등 혐의 사실관계 분석 및 무고 가능성 입증",
        "교통사고 · 음주운전: 치상·음주 혐의와 체류 자격 영향 동시 분석"
      ],
      color: "border-[#0f172a]"
    },
    {
      id: "civil",
      icon: <FileText className="w-16 h-16 text-[#b59a5d] mb-8" />,
      title: "민사 · 금융 사건",
      cn: "(民事·金融案件)",
      description: "복잡한 금전 분쟁에서 의뢰인의 재산권을 끝까지 보호합니다.",
      items: [
        "채무부존재확인 소송 방어: 보이스피싱 계좌 연루 피해자의 억울한 민사 책임 방어",
        "P2P 금융 사건: 온라인투자연계금융 연대보증채무 청구 사건 대리",
        "중고차 3자 사기: 선의의 매수인 보호 법리 및 원고 과실 입증",
        "손해배상 청구 방어: 직원의 방조 책임 부존재 입증"
      ],
      color: "border-[#0f172a]"
    },
    {
      id: "corporate",
      icon: <Briefcase className="w-16 h-16 text-[#b59a5d] mb-8" />,
      title: "대중(對中) 계약 · 기업 자문",
      cn: "(涉华合同·企业)",
      description: "중국어 원문을 기준으로 리스크를 직접 분석하고 검토합니다.",
      items: [
        "한중 수출입 계약: 중국어 원문 기준으로 리스크 직접 분석 및 검토",
        "비영리 법인 자문: 재단법인 설립 정관 작성 및 양국 운영 구조 자문",
        "분쟁 해결: 중국 기업과의 대금 미지급, 지식재산권 침해 소송 자문",
        "이중언어 문서: 한·중·영 다중언어 법률 문서 작성"
      ],
      color: "border-[#0f172a]"
    },
    {
      id: "family",
      icon: <HeartHandshake className="w-16 h-16 text-[#b59a5d] mb-8" />,
      title: "가사 · 상속 사건",
      cn: "(家事·继承)",
      description: "국경을 넘나드는 가족 간의 문제를 합리적으로 해결합니다.",
      items: [
        "이혼 및 위자료: 유리한 재산분할을 위한 기준시점 확정 전략",
        "판결 효력 검토: 중국 법원 이혼 판결의 한국 내 효력 및 집행 가능성 검토",
        "상속 자문: 중국 소재 재산에 대한 한국 내 상속 절차 안내"
      ],
      color: "border-[#0f172a]"
    }
  ];

  return (
    <div className="bg-white min-h-screen pt-24 pb-32">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="주요 업무 분야" 
          subtitle="비컴은 당신의 언어로 사건을 정확히 이해하고, 한국의 법리로 완벽한 방어막을 구축합니다." 
          centered={true}
        />

        <div className="mt-20 space-y-16">
          {services.map((service, index) => (
            <div 
              key={service.id} 
              className={`flex flex-col lg:flex-row bg-slate-50 border border-slate-200 group hover:border-[#b59a5d] transition-colors`}
            >
              <div className="lg:w-1/3 bg-white p-12 lg:p-16 border-b lg:border-b-0 lg:border-r border-slate-200 group-hover:border-[#b59a5d]/30 transition-colors">
                {service.icon}
                <h3 className="text-3xl font-extrabold text-[#0f172a] mb-2 tracking-tight">
                  {service.title}
                </h3>
                <span className="block text-xl font-bold text-[#b59a5d] mb-6">
                  {service.cn}
                </span>
                <p className="text-slate-600 font-medium leading-relaxed text-lg">
                  {service.description}
                </p>
              </div>
              
              <div className="lg:w-2/3 p-12 lg:p-16 flex flex-col justify-center">
                <div className="grid sm:grid-cols-2 gap-x-12 gap-y-8">
                  {service.items.map((item, idx) => {
                    const [main, sub] = item.split(': ');
                    return (
                      <div key={idx} className="flex gap-4 items-start">
                        <div className="w-2 h-2 bg-[#b59a5d] mt-2.5 shrink-0" />
                        <div>
                          <span className="block font-extrabold text-[#0f172a] text-lg mb-2">{main}</span>
                          {sub && <span className="block text-slate-600 text-base leading-relaxed font-medium">{sub}</span>}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-32 bg-[#0f172a] text-center text-white p-16 lg:p-24 border-t-[8px] border-[#b59a5d]">
          <h3 className="text-3xl md:text-5xl font-extrabold mb-8 tracking-tight">지금 바로 전문적인 상담이 필요하십니까?</h3>
          <p className="text-slate-400 mb-12 max-w-3xl mx-auto text-xl font-medium leading-relaxed">
             한국에서의 법적 문제, 시간이 지체될수록 불리해질 수 있습니다. 
             비컴이 당신의 언어로 직접 상담하고 가장 확실한 해답을 찾아드립니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
             <WeChatDialog>
                <button
                  type="button"
                  className="bg-[#b59a5d] hover:bg-[#a38a53] text-white px-10 py-5 font-extrabold text-xl transition-colors flex justify-center items-center gap-3"
                >
                  위챗 직접 상담 (wudongxuan002)
                </button>
              </WeChatDialog>
              <a
                href="tel:82-10-2999-6910"
                className="bg-white text-[#0f172a] hover:bg-slate-100 px-10 py-5 font-extrabold text-xl transition-colors flex justify-center items-center gap-3"
              >
                전화 상담 (82-10-2999-6910)
              </a>
          </div>
        </div>
      </div>
    </div>
  );
}

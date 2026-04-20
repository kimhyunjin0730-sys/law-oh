import { Link } from "react-router";
import { useLanguage } from "../../context/LanguageContext";
import { getLegalContent, pick } from "../../../lib/legal/content";
import { LegalHero } from "../../components/legal/LegalHero";
import { VisaMapDiagram } from "../../components/legal/VisaMapDiagram";
import { DecisionTreeDiagram } from "../../components/legal/DecisionTreeDiagram";
import { ProcedureFlowDiagram } from "../../components/legal/ProcedureFlowDiagram";
import { AgencyNetworkDiagram } from "../../components/legal/AgencyNetworkDiagram";
import { DeadlineTimeline } from "../../components/legal/DeadlineTimeline";
import { SourceBlock } from "../../components/legal/SourceBlock";
import { DisclaimerBlock } from "../../components/legal/DisclaimerBlock";

export function Immigration() {
  const { language } = useLanguage();
  const c = getLegalContent("immigration");

  const tTitle = {
    ko: { visas: "체류자격 맵", tree: "내 상황에 맞는 절차", proc: "절차 플로우", agen: "기관 네트워크", dead: "시한 타임라인" },
    zh: { visas: "居留资格地图", tree: "适合我情况的程序", proc: "程序流程", agen: "机关网络", dead: "时限时间轴" },
    en: { visas: "Visa Map", tree: "My-Case Decision Tree", proc: "Procedure Flow", agen: "Agency Network", dead: "Deadline Timeline" },
  }[language];

  return (
    <div className="bg-[#faf6ef] min-h-screen legal-body">
      <LegalHero content={c} lang={language} />
      <VisaMapDiagram visas={c.visas} lang={language} title={tTitle.visas} ariaSummary="체류자격 비자 유형 5가지를 한눈에 보여주는 다이어그램" />
      <DecisionTreeDiagram rootId={c.decisionTree.rootId} nodes={c.decisionTree.nodes} lang={language} title={tTitle.tree} ariaSummary="질문에 Yes/No로 답하며 필요한 절차를 찾는 의사결정 트리" />
      <ProcedureFlowDiagram steps={c.procedure} lang={language} title={tTitle.proc} ariaSummary="체류자격 절차의 단계별 흐름과 상세 정보" />
      <AgencyNetworkDiagram agencies={c.agencies} lang={language} title={tTitle.agen} ariaSummary="의뢰인 중심으로 관련 기관들의 역할과 연락처를 보여주는 네트워크" />
      <DeadlineTimeline events={c.deadlines} lang={language} title={tTitle.dead} ariaSummary="긴급 대응 시한을 Day 0부터 시간축으로 보여주는 타임라인" />

      {/* CTA */}
      <section className="py-20 border-t border-[#e9e3d2] bg-white">
        <div className="max-w-[980px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div>
            <p className="font-display text-[10px] font-black tracking-[0.3em] uppercase text-[#b59a5d] mb-3">Need a lawyer?</p>
            <h3 className="text-3xl font-black text-[#0f172a] tracking-tight max-w-[620px] leading-snug">
              {language === "zh" ? "个案不同，建议咨询律师。" : language === "en" ? "Your case is unique. Speak with an attorney." : "개별 사안은 다릅니다. 변호사와 상담하세요."}
            </h3>
          </div>
          <Link to="/#consult" className="bg-[#0f172a] hover:bg-[#1e293b] text-white px-10 py-5 font-extrabold text-lg whitespace-nowrap">
            {language === "zh" ? "在线咨询 →" : language === "en" ? "Online consult →" : "온라인 상담 접수 →"}
          </Link>
        </div>
      </section>

      <SourceBlock content={c} lang={language} />
      <DisclaimerBlock content={c} lang={language} />
    </div>
  );
}

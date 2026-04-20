import { useLanguage } from "../../context/LanguageContext";
import { getLegalContent, pick } from "../../../lib/legal/content";
import { VisaMapDiagram } from "../../components/legal/VisaMapDiagram";
import { DecisionTreeDiagram } from "../../components/legal/DecisionTreeDiagram";
import { ProcedureFlowDiagram } from "../../components/legal/ProcedureFlowDiagram";
import { AgencyNetworkDiagram } from "../../components/legal/AgencyNetworkDiagram";
import { DeadlineTimeline } from "../../components/legal/DeadlineTimeline";

export function Immigration() {
  const { language } = useLanguage();
  const c = getLegalContent("immigration");
  return (
    <div className="bg-[#faf6ef] min-h-screen">
      <VisaMapDiagram
        visas={c.visas}
        lang={language}
        title={pick(c.title, language)}
        ariaSummary="체류자격 비자 유형 5가지를 한눈에 보여주는 다이어그램"
      />
      <DecisionTreeDiagram
        rootId={c.decisionTree.rootId}
        nodes={c.decisionTree.nodes}
        lang={language}
        title="내 상황에 맞는 절차"
        ariaSummary="질문에 Yes/No로 답하며 필요한 절차를 찾는 의사결정 트리"
      />
      <ProcedureFlowDiagram
        steps={c.procedure}
        lang={language}
        title="절차 플로우"
        ariaSummary="체류자격 절차의 4~6단계와 각 단계별 담당기관·소요일·관련 조문"
      />
      <AgencyNetworkDiagram
        agencies={c.agencies}
        lang={language}
        title="기관 네트워크"
        ariaSummary="의뢰인을 중심으로 관련 기관들의 역할과 연락처를 보여주는 네트워크 다이어그램"
      />
      <DeadlineTimeline
        events={c.deadlines}
        lang={language}
        title="시한 타임라인"
        ariaSummary="긴급 대응 시한을 Day 0부터 시간축으로 보여주는 타임라인"
      />
    </div>
  );
}

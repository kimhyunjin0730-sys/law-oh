import { useLanguage } from "../../context/LanguageContext";
import { getLegalContent, pick } from "../../../lib/legal/content";
import { VisaMapDiagram } from "../../components/legal/VisaMapDiagram";
import { DecisionTreeDiagram } from "../../components/legal/DecisionTreeDiagram";

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
    </div>
  );
}

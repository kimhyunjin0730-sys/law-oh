import { useLanguage } from "../../context/LanguageContext";
import { getLegalContent, pick } from "../../../lib/legal/content";
import { VisaMapDiagram } from "../../components/legal/VisaMapDiagram";

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
    </div>
  );
}

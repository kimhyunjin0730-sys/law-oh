import { Link } from "react-router";
import { useLanguage } from "../../context/LanguageContext";
import { getLegalContent, pick } from "../../../lib/legal/content";
import { LegalHero } from "../../components/legal/LegalHero";
import { OverviewProse } from "../../components/legal/OverviewProse";
import { VisaTable } from "../../components/legal/VisaTable";
import { ProcedureList } from "../../components/legal/ProcedureList";
import { LawArticles } from "../../components/legal/LawArticles";
import { AgencyDirectory } from "../../components/legal/AgencyDirectory";
import { DeadlineTable } from "../../components/legal/DeadlineTable";
import { SourceBlock } from "../../components/legal/SourceBlock";
import { DisclaimerBlock } from "../../components/legal/DisclaimerBlock";

export function Immigration() {
  const { language } = useLanguage();
  const c = getLegalContent("immigration");

  return (
    <div className="bg-[#faf6ef] min-h-screen legal-body">
      <LegalHero content={c} lang={language} />
      <OverviewProse text={pick(c.overview, language)} lang={language} />
      <VisaTable visas={c.visas} lang={language} />
      <ProcedureList steps={c.procedure} lang={language} />
      <LawArticles laws={c.laws} lang={language} />
      <AgencyDirectory agencies={c.agencies} lang={language} />
      <DeadlineTable events={c.deadlines} lang={language} />

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

import { Link } from "react-router";
import { useLanguage } from "../../context/LanguageContext";
import { getLegalContent, pick } from "../../../lib/legal/content";
import { SectionHeading } from "../../components/SectionHeading";
import { OverviewProse } from "../../components/legal/OverviewProse";
import { VisaTable } from "../../components/legal/VisaTable";
import { ProcedureList } from "../../components/legal/ProcedureList";
import { LawArticles } from "../../components/legal/LawArticles";
import { AgencyDirectory } from "../../components/legal/AgencyDirectory";
import { DeadlineTable } from "../../components/legal/DeadlineTable";
import { SourceBlock } from "../../components/legal/SourceBlock";
import { DisclaimerBlock } from "../../components/legal/DisclaimerBlock";
import { PageSubnav } from "../../components/legal/PageSubnav";
import { LegalSidebar } from "../../components/legal/LegalSidebar";
import { LegalQuickMenu } from "../../components/legal/LegalQuickMenu";
import { ConsultPill } from "../../components/legal/ConsultPill";

const SUBNAV_LABELS: Record<string, { ko: string; zh: string; en: string }> = {
  immigration: { ko: "체류자격·출입국", zh: "居留资格·出入境", en: "Visa & Immigration" },
  nationality: { ko: "국적·귀화", zh: "国籍·归化", en: "Nationality" },
  family: { ko: "국제결혼·가족", zh: "国际婚姻·家庭", en: "Family" },
  criminal: { ko: "외국인 형사", zh: "外国人刑事", en: "Criminal" },
  deport: { ko: "강제퇴거·이의", zh: "强制遣返·异议", en: "Deportation" },
  refugee: { ko: "난민·인도", zh: "难民·人道", en: "Refugee" },
};

export function Immigration() {
  const { language } = useLanguage();
  const c = getLegalContent("immigration");

  // Highlight phrases for the overview prose (buttercream marks)
  const overviewHighlights =
    language === "ko"
      ? ["신청·심사·결과 통보·이의신청의 네 단계", "통보일로부터 7일 이내 이의신청", "안 날로부터 90일 이내 행정소송"]
      : language === "zh"
        ? ["申请·审查·结果通知·异议申请的四个阶段", "通知日起7日内异议申请", "知晓日起90日内行政诉讼"]
        : ["four stages: application, review, decision, and appeal", "within 7 days of notice", "within 90 days of awareness"];

  // Highlight one phrase inside the H1 — falls back gracefully if not present
  const titleHighlight =
    language === "ko" ? "출입국" : language === "zh" ? "出入境" : "Immigration";

  // Page sub-nav (legal topics — only immigration is live, others coming soon)
  const subnavItems = (["immigration", "nationality", "family", "criminal", "deport", "refugee"] as const).map(
    (k) => ({
      label: SUBNAV_LABELS[k][language],
      to: k === "immigration" ? "/legal/immigration" : `/legal/${k}`,
      soon: k !== "immigration",
    })
  );

  // Sidebar TOC (matches section IDs)
  const toc = [
    { id: "overview", label: language === "ko" ? "개관" : language === "zh" ? "概述" : "Overview" },
    { id: "visas", label: language === "ko" ? "체류자격 유형" : language === "zh" ? "居留资格类型" : "Visa Types" },
    { id: "procedure", label: language === "ko" ? "신청·심사 절차" : language === "zh" ? "申请·审查 程序" : "Procedure" },
    { id: "laws", label: language === "ko" ? "관련 법령 조문" : language === "zh" ? "相关法令" : "Statutes" },
    { id: "agencies", label: language === "ko" ? "관할 기관" : language === "zh" ? "管辖机关" : "Agencies" },
    { id: "deadlines", label: language === "ko" ? "주요 시한" : language === "zh" ? "重要期限" : "Deadlines" },
  ];

  // Major cases (placeholder — real data to be wired later)
  const cases = [
    { label: language === "ko" ? "F-6 결혼이민 거부 처분, 이의신청을 통한 허가 전환" : language === "zh" ? "F-6 结婚移民拒签处分，通过异议申请转为许可" : "F-6 marriage visa denial overturned through appeal", to: "/cases" },
    { label: language === "ko" ? "D-2 유학 비자 사기 혐의 무혐의 처분" : language === "zh" ? "D-2 留学签证诈骗嫌疑无罪处分" : "D-2 study visa fraud charges dismissed", to: "/cases" },
    { label: language === "ko" ? "강제퇴거명령 집행정지 후 본안 취소 판결 확보" : language === "zh" ? "强制遣返命令中止执行后获得撤销判决" : "Secured cancellation of deportation order after suspension of execution", to: "/cases" },
    { label: language === "ko" ? "H-2 방문취업 자격 취소 처분 행정소송 승소" : language === "zh" ? "H-2 访问就业资格取消处分行政诉讼胜诉" : "Won administrative lawsuit against H-2 visa cancellation", to: "/cases" },
  ];

  // Related practices
  const practices = [
    { label: language === "ko" ? "국적 · 귀화" : language === "zh" ? "国籍 · 归化" : "Nationality", to: "/legal/nationality" },
    { label: language === "ko" ? "국제 결혼" : language === "zh" ? "国际婚姻" : "Int'l Marriage", to: "/legal/family" },
    { label: language === "ko" ? "난민 · 인도" : language === "zh" ? "难民 · 人道" : "Refugee", to: "/legal/refugee" },
    { label: language === "ko" ? "강제퇴거" : language === "zh" ? "强制遣返" : "Deportation", to: "/legal/deport" },
    { label: language === "ko" ? "외국인 형사" : language === "zh" ? "外国人刑事" : "Criminal", to: "/legal/criminal" },
    { label: language === "ko" ? "투자 비자" : language === "zh" ? "投资签证" : "Investment Visa", to: "/services" },
    { label: language === "ko" ? "고용허가제" : language === "zh" ? "雇佣许可制" : "EPS", to: "/services" },
  ];

  const metaLabels = {
    ko: { update: "최종 업데이트", revision: "최신 시행 반영", version: "버전" },
    zh: { update: "最终更新", revision: "反映最新施行", version: "版本" },
    en: { update: "Last Updated", revision: "Current Revision", version: "Version" }
  }[language];

  const ctaCopy = {
    ko: {
      title: "개별 사안은 다릅니다.\n변호사와 상담하세요.",
      body: "중국어·한국어 통역 가능. 의뢰인의 국적, 비자 이력, 사건 단계에 따라 결과가 달라집니다.",
      btn: "온라인 상담 접수 →",
      eyebrow: "Need a lawyer?",
    },
    zh: {
      title: "个案情况各异。\n请咨询律师。",
      body: "可中文·韩语沟通。结果会因当事人的国籍、签证历史、案件阶段而不同。",
      btn: "在线咨询 →",
      eyebrow: "Need a lawyer?",
    },
    en: {
      title: "Every case is unique.\nSpeak with an attorney.",
      body: "Chinese & Korean direct consultation. Outcome depends on nationality, visa history, and stage.",
      btn: "Online consultation →",
      eyebrow: "Need a lawyer?",
    },
  }[language];

  const cta = {
    ko: { eyebrow: "비컴 — 法律事務所 · BECOME", h: "체류 문제는\n시간이 결정합니다.", p: "이의신청 7일, 행정소송 90일 — 법정 시한을 놓치면 회복이 어렵습니다. 가능한 한 빨리 의뢰인의 상황을 변호사와 공유하세요.", primary: "온라인 상담 접수", secondary: "전화 상담  82-10-2999-6910" },
    zh: { eyebrow: "BECOME · BECOME Law Firm", h: "居留问题，\n时间决定结果。", p: "异议7日、行政诉讼90日 — 错过法定期限将难以挽回。请尽早将情况告知律师。", primary: "在线咨询", secondary: "电话咨询  82-10-2999-6910" },
    en: { eyebrow: "BECOME Law Firm · BECOME", h: "In immigration,\ntiming decides everything.", p: "7 days for appeal, 90 days for litigation — missing a statutory deadline is often irreversible. Share your situation with a lawyer as early as possible.", primary: "Online consultation", secondary: "Call  82-10-2999-6910" },
  }[language];

  return (
    <div className="bg-white min-h-screen pt-24 pb-32 legal-body">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title={pick(c.title, language)} 
          subtitle={pick(c.summary, language)} 
          centered={true}
        />
      </div>

      {/* 2-column main layout */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 mt-12 lg:mt-16 pb-20 grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_360px] gap-10 lg:gap-16">
        <main>
          <OverviewProse text={pick(c.overview, language)} lang={language} highlights={overviewHighlights} count={1} total={6} />
          <VisaTable visas={c.visas} lang={language} count={2} total={6} />
          <ProcedureList steps={c.procedure} lang={language} count={3} total={6} />
          <LawArticles laws={c.laws} lang={language} count={4} total={6} />
          <AgencyDirectory agencies={c.agencies} lang={language} count={5} total={6} />
          <DeadlineTable events={c.deadlines} lang={language} count={6} total={6} />
        </main>

        <LegalSidebar
          toc={toc}
          cases={cases}
          practices={practices}
          ctaTitle={ctaCopy.title}
          ctaBody={ctaCopy.body}
          ctaButtonLabel={ctaCopy.btn}
          ctaHref="/#consult"
          needsLawyerEyebrow={ctaCopy.eyebrow}
        />
      </div>

      {/* CTA band — full width slate */}
      <section className="relative overflow-hidden bg-[#020617] text-[#f4f6fa] py-20">
        <span
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 15% 50%, rgba(181,154,93,.12) 0%, transparent 50%), radial-gradient(ellipse at 85% 50%, rgba(255,243,168,.06) 0%, transparent 60%)",
          }}
        />
        <div className="relative max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-12 lg:gap-16 items-center">
          <div>
            <p className="font-mono text-[11px] font-bold tracking-[0.26em] uppercase text-[#2563EB] mb-5">
              {cta.eyebrow}
            </p>
            <h2 className="font-serif-ko font-bold text-[28px] sm:text-[34px] lg:text-[42px] leading-[1.25] tracking-tight mb-4 whitespace-pre-line">
              {cta.h}
            </h2>
            <p className="text-[16px] leading-[1.65] opacity-75 max-w-[480px]">{cta.p}</p>
          </div>
          <div className="flex flex-col gap-3.5">
            <Link
              to="/#consult"
              className="inline-flex items-center justify-between gap-4 bg-[#2563EB] text-[#020617] py-5 px-7 font-serif-ko font-bold text-[17px] tracking-tight transition-all hover:bg-[#fff3a8] hover:-translate-y-0.5 group"
            >
              <span>{cta.primary}</span>
              <span className="font-mono text-[22px] transition-transform group-hover:translate-x-1">
                →
              </span>
            </Link>
            <a
              href="tel:82-10-2999-6910"
              className="inline-flex items-center justify-between gap-4 border border-white/25 text-[#f4f6fa] py-4 px-7 font-semibold text-[14.5px] transition-colors hover:border-[#2563EB] hover:text-[#2563EB]"
            >
              <span>{cta.secondary}</span>
              <span>📞</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer-area: sources + disclaimer */}
      <section className="bg-[#eef1f7] py-14">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12">
          <SourceBlock content={c} lang={language} />
          <DisclaimerBlock content={c} lang={language} />
          <div className="md:col-span-2 mt-6 pt-4 border-t border-[#dbe1ea] flex flex-wrap gap-x-6 gap-y-2 font-mono text-[10px] tracking-wide text-[#94a3b8]">
            <span>{metaLabels.update} · {c.meta.generatedAt.slice(0, 10)}</span>
            <span>{metaLabels.revision} · {c.meta.lastRevisionAt}</span>
            <span>{metaLabels.version} · IMM-v1.0</span>
          </div>
        </div>
      </section>

      {/* Floating elements */}
      <LegalQuickMenu />
      <ConsultPill />
    </div>
  );
}

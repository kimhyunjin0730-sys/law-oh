import { Link } from "react-router";
import { Check } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";
import { SectionHeading } from "../SectionHeading";
import { SectionHeader } from "./SectionHeader";
import { LegalSidebar, type CaseLink, type PracticeTag, type TocItem } from "./LegalSidebar";
import { LegalQuickMenu } from "./LegalQuickMenu";
import { ConsultPill } from "./ConsultPill";

type Lang = "ko" | "zh" | "en";
type Localized<T = string> = Record<Lang, T>;

interface ListItem {
  title: Localized;
  body: Localized;
}

interface LawArticle {
  name: Localized;
  article: Localized;
  body: Localized;
}

export interface LegalTopicShellProps {
  /** Used for the page version label (e.g. "CRM-v1.0"). */
  versionLabel: string;

  /** Section identifiers for sidebar TOC anchors. */
  sectionLabels: { overview: Localized; scenarios: Localized; procedure: Localized; laws: Localized };

  /** Page header */
  title: Localized;
  summary: Localized;

  /** Long-form prose for the overview section. */
  overview: Localized;
  /** Optional substrings to highlight inside `overview`. */
  highlights?: Localized<string[]>;

  /** Common scenarios / situations the page addresses. */
  scenarios: ListItem[];

  /** Step-by-step initial response. */
  procedure: ListItem[];

  /** Statutes & regulations referenced. */
  laws: LawArticle[];

  /** Sidebar — major case headlines (linked to /cases). */
  cases: Localized<string>[];

  /** Sidebar — related practice areas. */
  practices: { label: Localized; to: string }[];

  /** Bottom CTA band copy. */
  cta: Localized<{ eyebrow: string; h: string; p: string; primary: string; secondary: string }>;

  /** Sidebar consult-card copy. */
  ctaCopy: Localized<{ title: string; body: string; btn: string; eyebrow: string }>;
}

export function LegalTopicShell(props: LegalTopicShellProps) {
  const { language } = useLanguage();
  const lang = language as Lang;
  const pickL = <T,>(v: Localized<T>) => v[lang] ?? v.ko;

  const overviewText = pickL(props.overview);
  const overviewHighlights = props.highlights ? pickL(props.highlights) : [];

  const toc: TocItem[] = [
    { id: "overview", label: pickL(props.sectionLabels.overview) },
    { id: "scenarios", label: pickL(props.sectionLabels.scenarios) },
    { id: "procedure", label: pickL(props.sectionLabels.procedure) },
    { id: "laws", label: pickL(props.sectionLabels.laws) },
  ];

  const cases: CaseLink[] = props.cases.map((c) => ({ label: pickL(c), to: "/cases" }));
  const practices: PracticeTag[] = props.practices.map((p) => ({ label: pickL(p.label), to: p.to }));

  const ctaCopy = pickL(props.ctaCopy);
  const cta = pickL(props.cta);

  const sourceLabel = lang === "ko" ? "출처 / Sources" : lang === "zh" ? "来源 / Sources" : "Sources";
  const disclaimerLabel = lang === "ko" ? "면책 / Disclaimer" : lang === "zh" ? "免责 / Disclaimer" : "Disclaimer";
  const updateLabel = lang === "ko" ? "최종 업데이트" : lang === "zh" ? "最终更新" : "Last Updated";
  const versionLabelText = lang === "ko" ? "버전" : lang === "zh" ? "版本" : "Version";

  const sourceText =
    lang === "ko"
      ? "법제처 국가법령정보센터 · 대한민국 법원 종합법률정보 · 보건복지부·고용노동부·법무부 공식 안내 자료를 1차 출처로 삼아 작성되었습니다."
      : lang === "zh"
        ? "以法制处国家法令信息中心、大韩民国法院综合法律信息、保健福祉部·雇佣劳动部·法务部官方资料为主要参考来源。"
        : "Drawn from the Korean Ministry of Government Legislation, Korean Supreme Court legal database, and official guidance from MOLEG, MOEL, and MOJ.";

  const disclaimerText =
    lang === "ko"
      ? "본 페이지는 법률사무소 비컴이 중국어권 고객을 위해 제공하는 일반적인 법률 정보입니다. 제공된 정보는 법적 조언을 대체할 수 없으며, 개별 사안에 대한 정확한 법률 자문을 위해서는 반드시 변호사와 상담하시기 바랍니다."
      : lang === "zh"
        ? "本页面由BECOME律师事务所为中文客户提供一般法律信息。所提供的信息不能替代法律建议，如需针对具体案件的准确法律咨询，请务必咨询律师。"
        : "This page provides general legal information for Chinese-speaking clients of BECOME Law Firm. It does not constitute legal advice; for case-specific guidance, please consult an attorney.";

  return (
    <div className="bg-white min-h-screen pt-24 pb-32 legal-body">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title={pickL(props.title)} subtitle={pickL(props.summary)} centered={true} />
      </div>

      {/* 2-column main */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 mt-12 lg:mt-16 pb-20 grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_360px] gap-10 lg:gap-16">
        <main>
          {/* OVERVIEW */}
          <section className="mb-16">
            <SectionHeader id="overview" title={pickL(props.sectionLabels.overview)} count={1} total={4} />
            <p className="text-[16.5px] leading-[1.85] text-[#1f2937] font-medium whitespace-pre-line">
              {renderWithMarks(overviewText, overviewHighlights)}
            </p>
          </section>

          {/* SCENARIOS */}
          <section className="mb-16">
            <SectionHeader id="scenarios" title={pickL(props.sectionLabels.scenarios)} count={2} total={4} />
            <ul className="space-y-5">
              {props.scenarios.map((s, i) => (
                <li
                  key={i}
                  className="border-l-2 border-slate-200 hover:border-[#2563EB] transition-colors pl-6 py-1"
                >
                  <h4 className="text-[17px] font-extrabold text-[#0f172a] tracking-tight mb-2">
                    {pickL(s.title)}
                  </h4>
                  <p className="text-[15px] leading-[1.75] text-slate-600 font-medium">{pickL(s.body)}</p>
                </li>
              ))}
            </ul>
          </section>

          {/* PROCEDURE */}
          <section className="mb-16">
            <SectionHeader id="procedure" title={pickL(props.sectionLabels.procedure)} count={3} total={4} />
            <ol className="space-y-5">
              {props.procedure.map((p, i) => (
                <li key={i} className="grid grid-cols-[40px_1fr] gap-4 items-start">
                  <span className="grid place-items-center w-9 h-9 rounded-full bg-[#0f172a] text-white text-[13px] font-extrabold tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h4 className="text-[17px] font-extrabold text-[#0f172a] tracking-tight mb-1.5">
                      {pickL(p.title)}
                    </h4>
                    <p className="text-[15px] leading-[1.75] text-slate-600 font-medium">{pickL(p.body)}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          {/* LAWS */}
          <section className="mb-4">
            <SectionHeader id="laws" title={pickL(props.sectionLabels.laws)} count={4} total={4} />
            <ul className="space-y-5">
              {props.laws.map((l, i) => (
                <li key={i} className="bg-[#fafbfc] border border-slate-200 p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <Check size={14} strokeWidth={3} className="text-[#2563EB]" />
                    <span className="font-mono text-[12px] font-bold tracking-[0.12em] text-[#2563EB]">
                      {pickL(l.name)}
                    </span>
                    <span className="font-mono text-[12px] text-slate-500">·</span>
                    <span className="font-mono text-[12px] font-bold text-slate-700">{pickL(l.article)}</span>
                  </div>
                  <p className="text-[14.5px] leading-[1.7] text-slate-700 font-medium">{pickL(l.body)}</p>
                </li>
              ))}
            </ul>
          </section>
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

      {/* CTA band */}
      <section className="relative overflow-hidden bg-[#020617] text-[#f4f6fa] py-20">
        <span
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 15% 50%, rgba(37,99,235,.18) 0%, transparent 50%), radial-gradient(ellipse at 85% 50%, rgba(255,255,255,.04) 0%, transparent 60%)",
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
              className="inline-flex items-center justify-between gap-4 bg-[#2563EB] text-white py-5 px-7 font-serif-ko font-bold text-[17px] tracking-tight transition-all hover:bg-[#1d4ed8] hover:-translate-y-0.5 group"
            >
              <span>{cta.primary}</span>
              <span className="font-mono text-[22px] transition-transform group-hover:translate-x-1">→</span>
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

      {/* Sources + disclaimer */}
      <section className="bg-[#eef1f7] py-14">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h5 className="font-mono text-[11px] font-bold tracking-[0.2em] uppercase text-[#8d7842] mb-4">
              {sourceLabel}
            </h5>
            <p className="text-[12.5px] leading-[1.7] text-[#94a3b8]">{sourceText}</p>
          </div>
          <div>
            <h5 className="font-mono text-[11px] font-bold tracking-[0.2em] uppercase text-[#8d7842] mb-4">
              {disclaimerLabel}
            </h5>
            <p className="text-[12.5px] leading-[1.7] text-[#94a3b8]">{disclaimerText}</p>
          </div>
          <div className="md:col-span-2 mt-6 pt-4 border-t border-[#dbe1ea] flex flex-wrap gap-x-6 gap-y-2 font-mono text-[10px] tracking-wide text-[#94a3b8]">
            <span>{updateLabel} · {new Date().toISOString().slice(0, 10)}</span>
            <span>{versionLabelText} · {props.versionLabel}</span>
          </div>
        </div>
      </section>

      <LegalQuickMenu />
      <ConsultPill />
    </div>
  );
}

function renderWithMarks(text: string, highlights?: string[]) {
  if (!highlights?.length) return text;
  const escaped = highlights.map((h) => h.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
  const re = new RegExp(`(${escaped.join("|")})`, "g");
  const parts = text.split(re);
  return parts.map((p, i) =>
    highlights.includes(p) ? (
      <mark key={i} className="bg-[#fff3a8]/70 text-[#0f172a] px-1 rounded-sm">
        {p}
      </mark>
    ) : (
      <span key={i}>{p}</span>
    )
  );
}

import { useParams, Navigate, Link } from "react-router";
import { Check } from "lucide-react";
import { SERVICES, getServiceById } from "../../lib/services/data";
import { PageSubnav } from "../components/legal/PageSubnav";
import { LegalSidebar } from "../components/legal/LegalSidebar";
import { LegalQuickMenu } from "../components/legal/LegalQuickMenu";
import { ConsultPill } from "../components/legal/ConsultPill";
import { SectionHeader } from "../components/legal/SectionHeader";

/** Renders a service title with the configured highlight word wrapped in a buttercream mark. */
function TitleWithMark({ title, mark }: { title: string; mark: string }) {
  if (!title.includes(mark)) return <>{title}</>;
  const [before, after] = title.split(mark);
  return (
    <>
      {before}
      <span
        className="inline px-1"
        style={{
          backgroundImage: "linear-gradient(to top, #fff3a8 38%, transparent 38%)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
        }}
      >
        {mark}
      </span>
      {after}
    </>
  );
}

export function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();
  const svc = slug ? getServiceById(slug) : undefined;
  if (!svc) return <Navigate to="/services" replace />;

  const subnavItems = SERVICES.map((s) => ({
    label: s.title.replace(/\s*[(·].*$/, "").replace(/^.*?·\s*/, ""), // short label
    to: `/services/${s.id}`,
  }));
  // Fallback: use the second word if cleanup produced an empty string
  subnavItems.forEach((it, i) => { if (!it.label) it.label = SERVICES[i].title; });

  const toc = svc.sections.map((s, i) => ({ id: `section-${i}`, label: s.title }));
  // Prepend overview entry
  toc.unshift({ id: "overview", label: "개관" });

  const cases = (svc.cases ?? []).map((label) => ({ label, to: "/cases" }));
  const practices = SERVICES.filter((s) => s.id !== svc.id).map((s) => ({
    label: s.title.replace(/\s*[(·].*$/, ""),
    to: `/services/${s.id}`,
  }));

  return (
    <div className="bg-[#f4f6fa] min-h-screen legal-body">
      {/* Sub-nav across all service practice areas */}
      <PageSubnav items={subnavItems.map((it) => ({ ...it, soon: false }))} />

      {/* Hero */}
      <section className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pt-12 lg:pt-14 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.25fr_1fr] gap-10 lg:gap-14 items-end">
          <div>
            <div className="flex items-center gap-2 mb-6 font-mono text-[11px] font-bold tracking-[0.12em] uppercase text-[#94a3b8]">
              <Link to="/" className="hover:text-[#0f172a] transition-colors">홈</Link>
              <span className="text-[#dbe1ea]">›</span>
              <Link to="/services" className="hover:text-[#0f172a] transition-colors">주요업무</Link>
              <span className="text-[#dbe1ea]">›</span>
              <span className="text-[#0f172a]">{svc.title}</span>
            </div>
            <p className="font-mono text-[11px] font-bold tracking-[0.26em] uppercase text-[#2563EB] mb-4">
              {svc.eyebrow}
            </p>
            <h1 className="font-black tracking-[-0.02em] leading-[1.08] text-[40px] sm:text-[56px] lg:text-[76px] text-[#0f172a]">
              <TitleWithMark title={svc.title} mark={svc.highlight} />
            </h1>
            <p className="mt-3 text-[18px] sm:text-[20px] text-[#2563EB] font-semibold tracking-tight">
              {svc.cn}
            </p>
            <p className="mt-5 max-w-[560px] text-[16px] sm:text-[17px] leading-relaxed text-[#475569]">
              {svc.blurb}
            </p>
            <dl className="mt-8 pt-6 border-t border-[#dbe1ea] flex flex-wrap gap-x-8 gap-y-4">
              <div>
                <dt className="font-mono text-[10px] font-bold tracking-[0.14em] uppercase text-[#94a3b8] mb-1">
                  대표 변호사
                </dt>
                <dd className="font-serif-ko font-bold text-[17px] text-[#0f172a] tracking-tight">
                  오동현
                </dd>
              </div>
              <div>
                <dt className="font-mono text-[10px] font-bold tracking-[0.14em] uppercase text-[#94a3b8] mb-1">
                  상담 언어
                </dt>
                <dd className="font-serif-ko font-bold text-[17px] text-[#0f172a] tracking-tight">
                  한국어 · 中文
                </dd>
              </div>
              <div>
                <dt className="font-mono text-[10px] font-bold tracking-[0.14em] uppercase text-[#94a3b8] mb-1">
                  긴급 위챗
                </dt>
                <dd className="font-serif-ko font-bold text-[17px] text-[#0f172a] tracking-tight">
                  24시간 대응
                </dd>
              </div>
            </dl>
          </div>

          {/* Visual */}
          <div
            className="relative aspect-[4/3] overflow-hidden shadow-[0_30px_60px_-30px_rgba(15,23,42,.5)]"
            aria-hidden
            style={{
              background:
                "radial-gradient(circle at 20% 30%, rgba(255,243,168,.10) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(181,154,93,.18) 0%, transparent 55%), linear-gradient(135deg, #0f172a 0%, #020617 100%)",
            }}
          >
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(0deg, rgba(255,255,255,.03) 0px, rgba(255,255,255,.03) 1px, transparent 1px, transparent 4px)",
              }}
            />
            <div
              className="absolute inset-0 grid place-items-center font-serif-ko font-black select-none"
              style={{
                fontSize: "clamp(80px, 14vw, 200px)",
                color: "rgba(255,243,168,.12)",
                letterSpacing: "-.05em",
              }}
            >
              {svc.kanji}
            </div>
            <div className="absolute bottom-6 left-6 font-mono text-[11px] font-semibold tracking-[0.14em] uppercase text-[#fff3a8]/60">
              Hangyo Practice — {svc.eyebrow}
            </div>
            <div
              className="absolute bottom-6 right-6 w-[78px] h-[78px] grid place-items-center font-serif-ko font-black text-[24px] tracking-tight bg-[#2563EB] text-[#020617] shadow-[0_8px_24px_-8px_rgba(0,0,0,.4)]"
              style={{ transform: "rotate(-6deg)" }}
            >
              <span aria-hidden className="absolute inset-[6px] border-2 border-[#020617]" />
              <span className="relative">{svc.stamp}</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2-col main */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pt-14 lg:pt-16 pb-20 grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_360px] gap-10 lg:gap-16">
        <main>
          {/* Overview */}
          <section className="mb-[72px]" id="overview">
            <SectionHeader id="overview" title="개관" count={1} total={svc.sections.length + 1} />
            <div className="text-[16.5px] leading-[1.85] text-[#0f172a] space-y-[18px]">
              {svc.overview.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </section>

          {/* Sub-sections */}
          {svc.sections.map((sec, i) => (
            <section className="mb-[72px]" id={`section-${i}`} key={i}>
              <SectionHeader
                id={`section-${i}`}
                title={sec.title}
                count={i + 2}
                total={svc.sections.length + 1}
              />
              <ul className="grid grid-cols-1 gap-2.5">
                {sec.items.map((item, idx) => {
                  const [main, sub] = item.split(/:\s+/);
                  return (
                    <li
                      key={idx}
                      className="bg-white border border-[#dbe1ea] border-l-[3px] border-l-[#2563EB] py-4 px-5 transition-all hover:-translate-y-px hover:shadow-[0_1px_0_rgba(15,23,42,.04),0_12px_32px_-18px_rgba(15,23,42,.18)]"
                    >
                      <div className="flex items-start gap-3">
                        <span className="grid place-items-center w-5 h-5 rounded-full bg-[#0f172a] mt-0.5 flex-shrink-0">
                          <Check size={11} strokeWidth={3} className="text-white" />
                        </span>
                        <div>
                          <p className="font-bold text-[#0f172a] text-[15.5px] leading-snug tracking-tight">
                            {main}
                          </p>
                          {sub ? (
                            <p className="mt-1 text-[14px] text-[#475569] leading-relaxed">
                              {sub}
                            </p>
                          ) : null}
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </section>
          ))}
        </main>

        <LegalSidebar
          toc={toc}
          cases={cases}
          practices={practices}
          ctaTitle={"개별 사안은 다릅니다.\n변호사와 상담하세요."}
          ctaBody="중국어 직접 상담 가능. 의뢰인의 사실관계와 사건 단계에 따라 결과가 달라집니다."
          ctaButtonLabel="온라인 상담 접수 →"
          ctaHref="/#consult"
          needsLawyerEyebrow="Need a lawyer?"
        />
      </div>

      {/* CTA band */}
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
              한교 — 法律事務所 · 韩桥
            </p>
            <h2 className="font-serif-ko font-bold text-[28px] sm:text-[34px] lg:text-[42px] leading-[1.25] tracking-tight mb-4">
              지금 상황을<br />변호사와 공유하세요.
            </h2>
            <p className="text-[16px] leading-[1.65] opacity-75 max-w-[480px]">
              사건 단계가 진행될수록 회복이 어려워집니다. 한국어가 어렵다면 중국어로 직접 설명해 드립니다.
            </p>
          </div>
          <div className="flex flex-col gap-3.5">
            <Link
              to="/#consult"
              className="inline-flex items-center justify-between gap-4 bg-[#2563EB] text-[#020617] py-5 px-7 font-serif-ko font-bold text-[17px] tracking-tight transition-all hover:bg-[#fff3a8] hover:-translate-y-0.5 group"
            >
              <span>온라인 상담 접수</span>
              <span className="font-mono text-[22px] transition-transform group-hover:translate-x-1">→</span>
            </Link>
            <a
              href="tel:82-10-2999-6910"
              className="inline-flex items-center justify-between gap-4 border border-white/25 text-[#f4f6fa] py-4 px-7 font-semibold text-[14.5px] transition-colors hover:border-[#2563EB] hover:text-[#2563EB]"
            >
              <span>전화 상담  82-10-2999-6910</span>
              <span>📞</span>
            </a>
          </div>
        </div>
      </section>

      <LegalQuickMenu />
      <ConsultPill />
    </div>
  );
}

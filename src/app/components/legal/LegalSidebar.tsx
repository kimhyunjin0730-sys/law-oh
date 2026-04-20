import { useEffect, useState } from "react";
import { Link } from "react-router";

export interface TocItem {
  id: string;
  label: string;
}

export interface CaseLink {
  label: string;
  to: string;
}

export interface PracticeTag {
  label: string;
  to: string;
}

interface Props {
  toc: TocItem[];
  cases: CaseLink[];
  practices: PracticeTag[];
  ctaTitle: string;
  ctaBody: string;
  ctaButtonLabel: string;
  ctaHref: string;
  needsLawyerEyebrow?: string;
}

/** Highlights the TOC entry currently in view via IntersectionObserver. */
function useScrollSpy(ids: string[]): string | null {
  const [active, setActive] = useState<string | null>(ids[0] ?? null);
  useEffect(() => {
    if (!ids.length) return;
    const targets = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el != null);
    if (!targets.length) return;
    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: 0 }
    );
    targets.forEach((t) => obs.observe(t));
    return () => obs.disconnect();
  }, [ids]);
  return active;
}

export function LegalSidebar({
  toc,
  cases,
  practices,
  ctaTitle,
  ctaBody,
  ctaButtonLabel,
  ctaHref,
  needsLawyerEyebrow = "Need a lawyer?",
}: Props) {
  const active = useScrollSpy(toc.map((t) => t.id));

  return (
    <aside className="sticky top-[140px] self-start flex flex-col gap-[18px] max-h-[calc(100vh-160px)] overflow-y-auto pr-1 sidebar-scroll">
      <style>{`
        .sidebar-scroll::-webkit-scrollbar { width: 4px; }
        .sidebar-scroll::-webkit-scrollbar-track { background: transparent; }
        .sidebar-scroll::-webkit-scrollbar-thumb { background: #dbe1ea; border-radius: 2px; }
      `}</style>

      {/* TOC card */}
      <div className="bg-white border border-[#dbe1ea] p-[22px]">
        <h4 className="font-serif-ko font-bold text-[17px] text-[#0f172a] tracking-tight pb-3.5 mb-4 border-b border-[#dbe1ea]">
          이 페이지 안내
        </h4>
        <ul className="flex flex-col gap-[2px]">
          {toc.map((it, i) => {
            const isActive = active === it.id;
            return (
              <li key={it.id}>
                <a
                  href={`#${it.id}`}
                  className={
                    "flex items-center gap-2.5 px-3 py-2.5 text-[13.5px] rounded-sm border-l-2 transition-colors " +
                    (isActive
                      ? "bg-[#e2e8f0] text-[#0f172a] font-bold border-l-[#0f172a]"
                      : "text-[#475569] border-l-transparent hover:bg-[#e2e8f0] hover:text-[#0f172a]")
                  }
                >
                  <span
                    className={
                      "font-mono text-[10px] font-bold tracking-tight w-5 flex-shrink-0 " +
                      (isActive ? "text-[#0f172a]" : "text-[#94a3b8]")
                    }
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {it.label}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Lawyer / consult CTA */}
      <div className="relative overflow-hidden bg-[#0f172a] text-white p-7">
        <span
          aria-hidden
          className="absolute -top-10 -right-10 w-36 h-36 rounded-full"
          style={{
            background:
              "radial-gradient(circle at center, rgba(255,243,168,.12) 0%, transparent 70%)",
          }}
        />
        <p className="font-mono text-[10px] font-bold tracking-[0.2em] uppercase text-[#fff3a8] mb-3">
          {needsLawyerEyebrow}
        </p>
        <h4 className="font-serif-ko font-bold text-[22px] leading-[1.3] tracking-tight mb-2">
          {ctaTitle}
        </h4>
        <p className="text-[13.5px] leading-relaxed opacity-80 mb-5">{ctaBody}</p>
        <Link
          to={ctaHref}
          className="relative z-10 inline-flex items-center gap-2 text-[13.5px] font-bold text-[#fff3a8] pb-1 border-b border-[#fff3a8]"
        >
          {ctaButtonLabel}
        </Link>
      </div>

      {/* Major cases */}
      {cases.length > 0 ? (
        <div className="bg-white border border-[#dbe1ea] p-[22px]">
          <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-[#dbe1ea]">
            <h4 className="font-serif-ko font-bold text-[17px] text-[#0f172a] tracking-tight">
              주요 업무사례
            </h4>
            <Link
              to="/cases"
              className="font-mono text-[10.5px] font-bold tracking-[0.1em] text-[#94a3b8] px-2.5 py-1.5 border border-[#dbe1ea] rounded-sm hover:bg-[#0f172a] hover:text-white hover:border-[#0f172a] transition-colors"
            >
              더보기 →
            </Link>
          </div>
          <ul className="flex flex-col gap-3.5">
            {cases.map((c, i) => (
              <li key={i} className="flex gap-2.5 text-[13.5px] leading-snug text-[#475569]">
                <span className="text-[#2563EB] text-[9px] flex-shrink-0 pt-[5px]">◆</span>
                <Link to={c.to} className="hover:text-[#0f172a] hover:underline">
                  {c.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      {/* Related practices */}
      {practices.length > 0 ? (
        <div className="bg-[#f8fafc] border border-[#e2e8f0] p-[22px]">
          <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-[#dbe1ea]">
            <h4 className="font-serif-ko font-bold text-[17px] text-[#0f172a] tracking-tight">
              관련 업무분야
            </h4>
            <Link
              to="/services"
              className="font-mono text-[10.5px] font-bold tracking-[0.1em] text-[#94a3b8] px-2.5 py-1.5 border border-[#dbe1ea] rounded-sm hover:bg-[#0f172a] hover:text-white hover:border-[#0f172a] transition-colors"
            >
              더보기 →
            </Link>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {practices.map((p, i) => (
              <Link
                key={i}
                to={p.to}
                className="text-[12.5px] font-semibold px-3 py-1.5 bg-white border border-[#dbe1ea] text-[#475569] rounded-full hover:bg-[#0f172a] hover:text-white hover:border-[#0f172a] transition-colors"
              >
                {p.label}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </aside>
  );
}

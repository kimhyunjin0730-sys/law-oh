import type { LegalPageContent, Lang } from "../../../lib/legal/types";
import { pick } from "../../../lib/legal/content";
import { Link } from "react-router";

interface Props {
  content: LegalPageContent;
  lang: Lang;
  /** Single word/phrase inside the title to wrap with the buttercream highlighter. */
  highlight?: string;
  /** Optional eyebrow override (English / mixed script). */
  eyebrow?: string;
}

const META_LABELS: Record<Lang, { rev: string; src: string; lic: string; sourceList: string }> = {
  ko: { rev: "최신 시행", src: "자료 출처", lic: "문서 라이선스", sourceList: "법제처 · 법무부 · 생활법령" },
  zh: { rev: "最新施行", src: "资料来源", lic: "文档许可", sourceList: "法制处 · 法务部 · 生活法令" },
  en: { rev: "Last revision", src: "Sources", lic: "License", sourceList: "MOLEG · MOJ · EasyLaw" },
};

const VISUAL_KANJI: Record<string, string> = {
  immigration: "入",
  default: "法",
};

const VISUAL_STAMP: Record<string, string> = {
  immigration: "韩桥",
  default: "韩桥",
};

/** Renders the page title with optional buttercream highlighter on a chosen substring.
 *  Uses a linear-gradient background (not z-index) so the highlight reliably renders
 *  regardless of stacking context. */
function TitleWithMark({ title, mark }: { title: string; mark?: string }) {
  if (!mark || !title.includes(mark)) {
    return <>{title}</>;
  }
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

export function LegalHero({ content, lang, highlight, eyebrow }: Props) {
  const { meta, slug } = content;
  const labels = META_LABELS[lang];
  const kanji = VISUAL_KANJI[slug] ?? VISUAL_KANJI.default;
  const stamp = VISUAL_STAMP[slug] ?? VISUAL_STAMP.default;
  const title = pick(content.title, lang);

  return (
    <section className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pt-12 lg:pt-14 pb-10">
      <div className="grid grid-cols-1 lg:grid-cols-[1.25fr_1fr] gap-10 lg:gap-14 items-end">
        {/* Text column */}
        <div>
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-6 font-mono text-[11px] font-bold tracking-[0.12em] uppercase text-[#94a3b8]">
            <Link to="/" className="hover:text-[#0f172a] transition-colors">홈</Link>
            <span className="text-[#dbe1ea]">›</span>
            <Link to="/legal" className="hover:text-[#0f172a] transition-colors">법률정보</Link>
            <span className="text-[#dbe1ea]">›</span>
            <span className="text-[#0f172a]">{title}</span>
          </div>

          {/* Eyebrow */}
          {eyebrow ? (
            <p className="font-mono text-[11px] font-bold tracking-[0.26em] uppercase text-[#2563EB] mb-4">
              {eyebrow}
            </p>
          ) : null}

          {/* Title — Pretendard sans, font-black, matches Home h1 scale */}
          <h1 className="font-black tracking-[-0.02em] leading-[1.08] text-[40px] sm:text-[56px] lg:text-[76px] text-[#0f172a]">
            <TitleWithMark title={title} mark={highlight} />
          </h1>

          {/* Lede */}
          <p className="mt-5 max-w-[560px] text-[16px] sm:text-[17px] leading-relaxed text-[#475569]">
            {pick(content.summary, lang)}
          </p>

          {/* Meta */}
          <dl className="mt-8 pt-6 border-t border-[#dbe1ea] flex flex-wrap gap-x-8 gap-y-4">
            <div>
              <dt className="font-mono text-[10px] font-bold tracking-[0.14em] uppercase text-[#94a3b8] mb-1">
                {labels.rev}
              </dt>
              <dd className="font-serif-ko font-bold text-[17px] text-[#0f172a] tracking-tight">
                {meta.lastRevisionAt || "—"}
              </dd>
            </div>
            <div>
              <dt className="font-mono text-[10px] font-bold tracking-[0.14em] uppercase text-[#94a3b8] mb-1">
                {labels.src}
              </dt>
              <dd className="font-serif-ko font-bold text-[17px] text-[#0f172a] tracking-tight">
                {labels.sourceList}
              </dd>
            </div>
            <div>
              <dt className="font-mono text-[10px] font-bold tracking-[0.14em] uppercase text-[#94a3b8] mb-1">
                {labels.lic}
              </dt>
              <dd className="font-serif-ko font-bold text-[17px] text-[#0f172a] tracking-tight">
                KOGL Type 1
              </dd>
            </div>
          </dl>
        </div>

        {/* Visual column — slate gradient card with kanji + 韩桥 stamp */}
        <div
          className="relative aspect-[4/3] overflow-hidden shadow-[0_30px_60px_-30px_rgba(15,23,42,.5)]"
          aria-hidden
          style={{
            background:
              "radial-gradient(circle at 20% 30%, rgba(255,243,168,.10) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(181,154,93,.18) 0%, transparent 55%), linear-gradient(135deg, #0f172a 0%, #020617 100%)",
          }}
        >
          {/* faint horizontal grain */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg, rgba(255,255,255,.03) 0px, rgba(255,255,255,.03) 1px, transparent 1px, transparent 4px)",
            }}
          />
          {/* big kanji */}
          <div
            className="absolute inset-0 grid place-items-center font-serif-ko font-black select-none"
            style={{
              fontSize: "clamp(80px, 14vw, 200px)",
              color: "rgba(255,243,168,.12)",
              letterSpacing: "-.05em",
            }}
          >
            {kanji}
          </div>
          {/* caption bottom-left */}
          <div className="absolute bottom-6 left-6 font-mono text-[11px] font-semibold tracking-[0.14em] uppercase text-[#fff3a8]/60">
            Hangyo Legal Brief — 出入國
          </div>
          {/* 韩桥 stamp */}
          <div
            className="absolute bottom-6 right-6 w-[78px] h-[78px] grid place-items-center font-serif-ko font-black text-[28px] tracking-tight bg-[#2563EB] text-[#020617] shadow-[0_8px_24px_-8px_rgba(0,0,0,.4)]"
            style={{ transform: "rotate(-6deg)" }}
          >
            <span aria-hidden className="absolute inset-[6px] border-2 border-[#020617]" />
            <span className="relative">{stamp}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

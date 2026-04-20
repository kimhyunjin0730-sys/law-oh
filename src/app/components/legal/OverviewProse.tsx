import type { Lang } from "../../../lib/legal/types";
import { SectionHeader } from "./SectionHeader";

interface Props {
  text: string;
  lang: Lang;
}

const TITLE: Record<Lang, string> = {
  ko: "개관",
  zh: "概述",
  en: "Overview",
};

const META_LABEL: Record<Lang, { label: string; value: string }> = {
  ko: { label: "주제", value: "체류자격·출입국" },
  zh: { label: "主题", value: "居留资格·出入境" },
  en: { label: "Topic", value: "Visa & Immigration" },
};

export function OverviewProse({ text, lang }: Props) {
  const meta = META_LABEL[lang];
  return (
    <section className="py-20 border-t border-[#e9e3d2]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          id="overview"
          eyebrow="Section 01 · Overview"
          title={TITLE[lang]}
        />
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-8">
            <p className="text-[17px] leading-[1.9] text-[#0f172a] max-w-[65ch]">
              {text}
            </p>
          </div>
          <aside className="lg:col-span-4 lg:border-l lg:border-[#e9e3d2] lg:pl-10">
            <p className="font-display text-[10px] font-black tracking-[0.3em] uppercase text-[#b59a5d] mb-3">
              {meta.label}
            </p>
            <p className="text-[20px] font-extrabold text-[#0f172a] leading-snug">
              {meta.value}
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}

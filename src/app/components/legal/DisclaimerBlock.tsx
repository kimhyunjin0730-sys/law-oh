import type { LegalPageContent, Lang } from "../../../lib/legal/types";
import { pick } from "../../../lib/legal/content";

export function DisclaimerBlock({ content, lang }: { content: LegalPageContent; lang: Lang }) {
  return (
    <section className="py-16 bg-[#0f172a] text-white">
      <div className="max-w-[980px] mx-auto px-4 sm:px-6 lg:px-8">
        <p className="font-display text-[10px] font-black tracking-[0.32em] uppercase text-[#b59a5d] mb-5">Disclaimer</p>
        <p className="text-[15px] leading-[1.9] text-white/90">{pick(content.disclaimer, lang)}</p>
      </div>
    </section>
  );
}

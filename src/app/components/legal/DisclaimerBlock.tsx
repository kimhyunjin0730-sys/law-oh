import type { LegalPageContent, Lang } from "../../../lib/legal/types";
import { pick } from "../../../lib/legal/content";

export function DisclaimerBlock({
  content,
  lang,
}: {
  content: LegalPageContent;
  lang: Lang;
}) {
  const text = pick(content.disclaimer, lang);
  const paragraphs = text.split(/\n\s*\n+/);
  return (
    <div>
      <h5 className="font-mono text-[11px] font-bold tracking-[0.2em] uppercase text-[#8d7842] mb-4">
        면책 / Disclaimer
      </h5>
      <div className="text-[12.5px] leading-[1.7] text-[#94a3b8] space-y-2.5">
        {paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </div>
  );
}

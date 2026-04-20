import type { AgencyNode, Lang } from "../../../lib/legal/types";
import { pick } from "../../../lib/legal/content";
import { SectionHeader } from "./SectionHeader";

interface Props {
  agencies: AgencyNode[];
  lang: Lang;
  count?: number;
  total?: number;
}

const TITLE: Record<Lang, string> = {
  ko: "관할 기관 안내",
  zh: "管辖机关指南",
  en: "Responsible Agencies",
};

const KEYS: Record<Lang, { phone: string; site: string; address: string }> = {
  ko: { phone: "전화", site: "사이트", address: "주소" },
  zh: { phone: "电话", site: "网站", address: "地址" },
  en: { phone: "Phone", site: "Website", address: "Address" },
};

export function AgencyDirectory({ agencies, lang, count, total }: Props) {
  const k = KEYS[lang];
  return (
    <section className="mb-[72px]" id="agencies">
      <SectionHeader id="agencies" title={TITLE[lang]} count={count} total={total} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
        {agencies.map((a) => (
          <article
            key={a.id}
            className="bg-white border border-[#dbe1ea] py-5 px-5 transition-colors hover:border-[#0f172a]"
          >
            <div className="font-mono text-[10.5px] font-semibold tracking-[0.1em] uppercase text-[#2563EB] mb-3">
              {pick(a.role, lang)}
            </div>
            <h3 className="font-serif-ko font-bold text-[16px] text-[#0f172a] tracking-tight mb-3.5">
              {pick(a.name, lang)}
            </h3>
            <dl className="flex flex-col gap-1.5 text-[13.5px] text-[#475569] leading-snug">
              {a.phone ? (
                <div className="flex items-start gap-2">
                  <dt className="font-mono text-[10px] font-bold tracking-wide text-[#94a3b8] w-9 flex-shrink-0 pt-[3px]">
                    {k.phone}
                  </dt>
                  <dd>
                    <a
                      href={`tel:${a.phone.replace(/[^0-9+]/g, "")}`}
                      className="text-[#0f172a] font-semibold hover:underline"
                    >
                      {a.phone}
                    </a>
                  </dd>
                </div>
              ) : null}
              {a.url ? (
                <div className="flex items-start gap-2">
                  <dt className="font-mono text-[10px] font-bold tracking-wide text-[#94a3b8] w-9 flex-shrink-0 pt-[3px]">
                    {k.site}
                  </dt>
                  <dd>
                    <a
                      href={a.url}
                      target="_blank"
                      rel="noreferrer"
                      className="text-[#0f172a] font-semibold hover:underline break-all"
                    >
                      {a.url.replace(/^https?:\/\//, "")} ↗
                    </a>
                  </dd>
                </div>
              ) : null}
              {pick(a.address, lang) ? (
                <div className="flex items-start gap-2">
                  <dt className="font-mono text-[10px] font-bold tracking-wide text-[#94a3b8] w-9 flex-shrink-0 pt-[3px]">
                    {k.address}
                  </dt>
                  <dd>{pick(a.address, lang)}</dd>
                </div>
              ) : null}
            </dl>
          </article>
        ))}
      </div>
    </section>
  );
}

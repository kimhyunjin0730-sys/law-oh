import type { AgencyNode, Lang } from "../../../lib/legal/types";
import { pick } from "../../../lib/legal/content";
import { SectionHeader } from "./SectionHeader";

interface Props {
  agencies: AgencyNode[];
  lang: Lang;
}

const TITLE: Record<Lang, string> = {
  ko: "담당 기관",
  zh: "相关机关",
  en: "Agencies",
};

const LABELS: Record<Lang, { phone: string; address: string; site: string }> = {
  ko: { phone: "전화", address: "주소", site: "웹사이트" },
  zh: { phone: "电话", address: "地址", site: "网站" },
  en: { phone: "Phone", address: "Address", site: "Website" },
};

export function AgencyDirectory({ agencies, lang }: Props) {
  const L = LABELS[lang];
  return (
    <section className="py-20 border-t border-[#e9e3d2]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          id="agencies"
          eyebrow="Section 05 · Directory"
          title={TITLE[lang]}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {agencies.map((a) => (
            <article
              key={a.id}
              className="border border-[#e9e3d2] bg-white p-7 flex flex-col"
            >
              <h3 className="text-lg font-extrabold text-[#0f172a] leading-snug mb-2">
                {pick(a.name, lang)}
              </h3>
              <p className="text-[13px] text-[#6b5f48] leading-relaxed mb-5 border-b border-[#e9e3d2] pb-5">
                {pick(a.role, lang)}
              </p>
              <dl className="space-y-3 text-[13px] flex-1">
                <div>
                  <dt className="font-display text-[10px] font-black tracking-[0.3em] uppercase text-[#b59a5d] mb-1">
                    {L.phone}
                  </dt>
                  <dd>
                    <a
                      href={`tel:${a.phone.replace(/[^0-9+]/g, "")}`}
                      className="font-mono font-bold text-[#0f172a] hover:text-[#b59a5d]"
                    >
                      {a.phone}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="font-display text-[10px] font-black tracking-[0.3em] uppercase text-[#b59a5d] mb-1">
                    {L.address}
                  </dt>
                  <dd className="text-[#0f172a] leading-relaxed">
                    {pick(a.address, lang)}
                  </dd>
                </div>
                <div>
                  <dt className="font-display text-[10px] font-black tracking-[0.3em] uppercase text-[#b59a5d] mb-1">
                    {L.site}
                  </dt>
                  <dd>
                    <a
                      href={a.url}
                      target="_blank"
                      rel="noreferrer"
                      className="text-[#b59a5d] underline underline-offset-4 break-all hover:text-[#8f7a47]"
                    >
                      {a.url}
                    </a>
                  </dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

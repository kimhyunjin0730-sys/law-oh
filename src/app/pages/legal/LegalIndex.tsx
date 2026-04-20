import { Link } from "react-router";
import { SectionHeading } from "../../components/SectionHeading";
import { useLanguage } from "../../context/LanguageContext";

const TOPICS = [
  { slug: "immigration", title: "체류자격·출입국", titleZh: "居留资格·出入境", titleEn: "Visa & Immigration", active: true },
  { slug: "criminal", title: "형사 초기대응", titleZh: "刑事初步应对", titleEn: "Criminal Response", active: false },
  { slug: "labor", title: "노동·임금체불", titleZh: "劳动·欠薪", titleEn: "Labor & Unpaid Wages", active: false },
  { slug: "fraud", title: "사기·보이스피싱", titleZh: "诈骗·语音钓鱼", titleEn: "Fraud & Voice Phishing", active: false },
  { slug: "china-family", title: "중국 이혼·상속", titleZh: "中国离婚·继承", titleEn: "China Divorce & Inheritance", active: false },
];

export function LegalIndex() {
  const { t, language } = useLanguage();
  const pickTitle = (x: typeof TOPICS[number]) =>
    language === "zh" ? x.titleZh : language === "en" ? x.titleEn : x.title;

  return (
    <div className="bg-white min-h-screen pt-24 pb-32">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title={t("legal.index.title")} subtitle={t("legal.index.subtitle")} centered />
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {TOPICS.map((x) => {
            const body = (
              <div className="group h-full bg-white border border-[#e9e3d2] p-8 transition-colors hover:border-[#2563EB]">
                <div className="mb-6 font-display text-[10px] font-black tracking-[0.28em] uppercase text-[#2563EB]">
                  {x.active ? "Available" : t("legal.coming_soon")}
                </div>
                <h3 className="text-2xl font-extrabold text-[#0f172a] tracking-tight mb-3">{pickTitle(x)}</h3>
              </div>
            );
            return x.active ? (
              <Link key={x.slug} to={`/legal/${x.slug}`}>{body}</Link>
            ) : (
              <div key={x.slug} className="opacity-50">{body}</div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

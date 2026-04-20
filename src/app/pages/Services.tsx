import { motion } from "motion/react";
import { ShieldCheck, Scale, FileText, Briefcase, HeartHandshake, ArrowRight, MessageCircle } from "lucide-react";
import { WeChatDialog } from "../components/WeChatDialog";

type Service = {
  id: string;
  no: string;
  icon: JSX.Element;
  title: string;
  cn: string;
  tagline: string;
  description: string;
  items: { title: string; desc: string }[];
};

export function Services() {
  const services: Service[] = [
    {
      id: "immigration",
      no: "01",
      icon: <ShieldCheck className="w-10 h-10 text-[#b59a5d]" strokeWidth={1.4} />,
      title: "체류 자격 · 출입국 법률 자문",
      cn: "签证·出入境法律咨询",
      tagline: "한국에서의 삶을 지키는 가장 중요한 법률 서비스입니다.",
      description:
        "형사 처벌·벌금형·음주운전 등 사소해 보이는 사건이 F-4(재외동포)·H-2(방문취업) 체류 자격 취소 또는 강제퇴거로 이어질 수 있습니다. 형사 사건 수임 즉시 체류 자격에 미치는 영향을 병행 분석하여, 처벌 수위를 낮추는 동시에 체류 자격 유지 전략을 수립합니다.",
      items: [
        {
          title: "F-4 · H-2 체류 자격 유지 전략",
          desc: "재외동포·방문취업 비자 유지 로드맵 수립",
        },
        {
          title: "형사 처벌 시 체류 영향 사전 진단",
          desc: "처벌 수위별 체류 자격 취소 가능성 스코어링",
        },
        {
          title: "체류 자격 변경 · 연장 자문",
          desc: "비자 카테고리 변경·연장 신청 전반",
        },
        {
          title: "강제퇴거 명령 불복 · 이의신청",
          desc: "행정소송 및 이의신청 절차 대응",
        },
        {
          title: "출입국 단속 시 긴급 대응",
          desc: "24시간 위챗 핫라인 상시 대응",
        },
      ],
    },
    {
      id: "criminal",
      no: "02",
      icon: <Scale className="w-10 h-10 text-[#b59a5d]" strokeWidth={1.4} />,
      title: "형사 사건",
      cn: "刑事案件",
      tagline: "경찰서에서 연락이 왔다면, 먼저 변호사에게.",
      description:
        "형사 사건은 초기 대응이 결과를 좌우합니다. 중국어권 의뢰인은 언어 장벽으로 수사 초기에 불리한 진술을 하거나 권리를 행사하지 못하는 경우가 많아, 수사 단계부터 변호인으로 참여하여 권리를 최대한 보호합니다.",
      items: [
        {
          title: "보이스피싱 전달책 혐의 방어",
          desc: "고의성 부존재·피해자성 주장으로 불기소·무죄 목표",
        },
        {
          title: "투자 사기 피해 고소 (주식·코인·로맨스)",
          desc: "피해 사실 입증, 피의자 특정, 수사기관 대응까지 전 과정 지원",
        },
        {
          title: "업무상 횡령 혐의 방어",
          desc: "계좌·회계 자료 분석 기반 불법영득의사 부존재 입증",
        },
        {
          title: "정보통신망법 위반",
          desc: "관리자 권한 남용·개인정보 무단 열람 — 고소·피고소 양측 경험",
        },
        {
          title: "성범죄 혐의 방어 (강제추행 등)",
          desc: "사실관계·증거 검토로 무고 가능성 및 피의자 권리 보호",
        },
        {
          title: "교통사고 · 음주운전",
          desc: "치상·음주 혐의에서 체류 자격 영향 동시 분석",
        },
      ],
    },
    {
      id: "civil",
      no: "03",
      icon: <FileText className="w-10 h-10 text-[#b59a5d]" strokeWidth={1.4} />,
      title: "민사 · 금융 사건",
      cn: "民事·金融案件",
      tagline: "복잡한 금전 분쟁에서 재산권을 끝까지 보호합니다.",
      description:
        "자금 흐름 분석과 법리 검토를 정밀하게 결합해, 억울한 피고가 되는 상황을 방어하고 채권 회수·정당한 청구 대리에서도 유리한 결과를 만들어냅니다.",
      items: [
        {
          title: "보이스피싱 피해자 채무부존재확인 소송 방어",
          desc: "자금 흐름 분석 — 피해자성 입증 / 부당이득반환의무 부존재 / 공동불법행위 책임 부존재 주장",
        },
        {
          title: "P2P 연대보증채무 청구 사건",
          desc: "온투업법 특수성 기반 연대보증계약 유효성·대표이사 책임 범위 분석 — 원·피고 양측 대리 경험",
        },
        {
          title: "중고차 3자 사기 사건",
          desc: "선의 매수인 보호 법리 + 원고 과실 입증으로 다수 성공 수행",
        },
        {
          title: "손해배상 청구 방어 (방조 책임 부존재)",
          desc: "대표이사 편취 행위에 대한 직원 방조 청구 방어 — 실질적 의사결정 관여 부존재 입증",
        },
      ],
    },
    {
      id: "corporate",
      no: "04",
      icon: <Briefcase className="w-10 h-10 text-[#b59a5d]" strokeWidth={1.4} />,
      title: "대중(對中) 계약 · 기업 자문",
      cn: "涉华合同·企业咨询",
      tagline: "중국어 원문을 직접 읽고 검토합니다. 번역본에 의존하지 않습니다.",
      description:
        "㈜한화/무역 재직 시 대중 석유화학 제품 수출입 계약을 직접 체결·검토한 실무 경험을 토대로, 중국 기업과의 계약 리스크를 원문 기준으로 분석합니다.",
      items: [
        {
          title: "한중 수출입 계약서 작성 · 검토",
          desc: "영문·중문 계약서 원문 기반 리스크 직접 분석",
        },
        {
          title: "비영리 재단법인 설립 자문",
          desc: "정관 작성 및 한·중 비영리 법인 운영 구조 이해 기반 자문",
        },
        {
          title: "중국 기업 분쟁 해결",
          desc: "대금 미지급·지식재산권 침해 — 한국 법원 소송 및 중재 절차 안내",
        },
        {
          title: "한·중·영 이중언어 법률 문서",
          desc: "계약서·내용증명·법률의견서 다중언어 작성",
        },
      ],
    },
    {
      id: "family",
      no: "05",
      icon: <HeartHandshake className="w-10 h-10 text-[#b59a5d]" strokeWidth={1.4} />,
      title: "가사 · 상속 사건",
      cn: "家事·继承案件",
      tagline: "국경을 넘나드는 가족 문제를 합리적으로 해결합니다.",
      description:
        "이혼, 상속, 판결 효력 — 한·중 양국의 가족법 교차 영역에서 양국 법리를 이해하는 변호사가 직접 자문합니다.",
      items: [
        {
          title: "이혼 및 위자료 청구",
          desc: "유책성 판단·위자료 산정·재산분할 기준시점 — 별거 장기화 시 의뢰인 유리 전략",
        },
        {
          title: "중국 법원 이혼 판결 효력",
          desc: "한국 내 효력 및 재산분할 집행 가능성 검토",
        },
        {
          title: "중국 소재 재산 상속 자문",
          desc: "한국 상속법 · 중국 상속법 교차 적용 및 한국 내 상속 절차 안내",
        },
      ],
    },
  ];

  return (
    <div className="bg-white">
      {/* ─────────── PAGE HERO ─────────── */}
      <section className="relative bg-[#050B14] text-white overflow-hidden pt-[128px] pb-20 lg:pb-24">
        <div className="absolute inset-0 pointer-events-none opacity-[0.05]">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_#b59a5d_0%,_transparent_50%)]" />
        </div>
        <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-7">
            <span className="h-px w-10 bg-[#b59a5d]" />
            <span className="font-display text-[11px] sm:text-xs font-black tracking-[0.36em] uppercase text-[#b59a5d]">
              Practice Areas
            </span>
          </div>
          <h1 className="text-[40px] sm:text-[56px] lg:text-[76px] font-black tracking-[-0.02em] leading-[1.05]">
            주요 업무 분야
          </h1>
          <p className="mt-5 font-display text-sm sm:text-base tracking-[0.18em] text-slate-400 font-semibold uppercase">
            Visa · Criminal · Civil · Contract · Family
          </p>
          <p className="mt-8 max-w-[640px] text-base lg:text-lg text-slate-300/90 font-medium leading-[1.85]">
            비컴은 당신의 언어로 사건을 정확히 이해하고, 한국의 법리로 완벽한 방어막을 구축합니다. 중국어권 의뢰인의 현실에 맞춘 5개 핵심 업무 영역을 안내합니다.
          </p>
        </div>
      </section>

      {/* ─────────── SERVICES ─────────── */}
      <section className="bg-white">
        {services.map((s, idx) => (
          <motion.article
            key={s.id}
            id={s.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.2, 0.65, 0.3, 0.9] }}
            className={`py-20 lg:py-28 ${idx % 2 === 0 ? "bg-white" : "bg-[#faf6ef] border-y border-[#e9e3d2]"}`}
          >
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-x-12 gap-y-10">
              {/* Left: header */}
              <div className="lg:col-span-5 lg:sticky lg:top-32 lg:self-start">
                <div className="flex items-center gap-4 mb-6">
                  <span className="font-display text-[#b59a5d] text-5xl lg:text-6xl font-black tracking-tight leading-none">
                    {s.no}
                  </span>
                  <div className="h-px flex-1 bg-[#b59a5d]/30 max-w-[120px]" />
                </div>
                <div className="mb-5">{s.icon}</div>
                <h2 className="text-[28px] sm:text-[34px] lg:text-[42px] font-black text-[#0f172a] tracking-tight leading-[1.1] mb-2">
                  {s.title}
                </h2>
                <p className="text-base lg:text-lg text-[#b59a5d] font-bold mb-6">{s.cn}</p>
                <p className="text-[15px] lg:text-base text-[#0f172a] font-bold italic leading-relaxed mb-5 border-l-2 border-[#b59a5d] pl-4">
                  {s.tagline}
                </p>
                <p className="text-[14px] lg:text-[15px] text-slate-600 font-medium leading-[1.85]">
                  {s.description}
                </p>
              </div>

              {/* Right: items */}
              <div className="lg:col-span-7">
                <ul className="space-y-0 border-t border-slate-200">
                  {s.items.map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.04 }}
                      className="group flex gap-5 lg:gap-7 py-6 lg:py-7 border-b border-slate-200 hover:bg-white transition-colors"
                    >
                      <span className="font-display text-[11px] font-black tracking-[0.2em] text-[#b59a5d] pt-1 min-w-[28px]">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div className="flex-1">
                        <h3 className="text-lg lg:text-xl font-extrabold text-[#0f172a] leading-tight mb-2">
                          {item.title}
                        </h3>
                        <p className="text-[14px] lg:text-[15px] text-slate-600 font-medium leading-[1.8]">
                          {item.desc}
                        </p>
                      </div>
                      <ArrowRight
                        size={18}
                        strokeWidth={1.5}
                        className="text-slate-300 group-hover:text-[#b59a5d] group-hover:translate-x-0.5 transition-all mt-1.5 shrink-0"
                      />
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.article>
        ))}
      </section>

      {/* ─────────── CTA ─────────── */}
      <section className="bg-[#0f172a] text-white py-20 lg:py-28 border-t-[6px] border-[#b59a5d]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="h-px w-10 bg-[#b59a5d]" />
            <span className="font-display text-[11px] font-black tracking-[0.36em] uppercase text-[#b59a5d]">
              Consultation
            </span>
            <span className="h-px w-10 bg-[#b59a5d]" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[52px] font-black leading-tight tracking-tight mb-6">
            지금 바로 전문적인 상담이 필요하십니까?
          </h2>
          <p className="max-w-[660px] mx-auto text-base lg:text-lg text-slate-300/80 font-medium leading-[1.85] mb-12">
            한국에서의 법적 문제, 시간이 지체될수록 불리해질 수 있습니다. 비컴이 당신의 언어로 직접 상담하고 가장 확실한 해답을 찾아드립니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <WeChatDialog>
              <button
                type="button"
                className="group inline-flex items-center justify-center gap-3 bg-[#b59a5d] hover:bg-[#c9b07e] text-[#0f172a] px-8 py-4 font-extrabold text-[15px] transition-colors"
              >
                <MessageCircle size={17} strokeWidth={2.25} />
                위챗 직접 상담
                <ArrowRight
                  size={15}
                  strokeWidth={2.5}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </button>
            </WeChatDialog>
            <a
              href="tel:82-10-2999-6910"
              className="group inline-flex items-center justify-center gap-3 bg-white hover:bg-slate-100 text-[#0f172a] px-8 py-4 font-extrabold text-[15px] transition-colors tabular-nums"
            >
              전화 상담 82-10-2999-6910
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

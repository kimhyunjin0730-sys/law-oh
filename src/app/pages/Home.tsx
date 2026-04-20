import { Link } from "react-router";
import { ArrowRight, CheckCircle2, MessageCircle, Phone, Globe, Scale, Users, FileText, Download } from "lucide-react";
import { motion } from "motion/react";
import { SectionHeading } from "../components/SectionHeading";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section — Cinematic */}
      <section className="relative bg-[#050B14] text-white min-h-[760px] lg:min-h-[860px] flex items-end overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1521791136064-7986c2920216?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=85&w=1920"
            alt="변호사 상담 이미지"
            className="w-full h-full object-cover object-center scale-[1.02]"
          />
          {/* Layered cinematic overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#050B14] via-[#050B14]/85 to-[#050B14]/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050B14] via-transparent to-[#050B14]/60" />
          <div className="absolute inset-0 bg-[#050B14]/20" />
        </div>

        {/* Ghosted outline intro line — sits above main headline */}
        <div className="absolute top-[14%] sm:top-[16%] lg:top-[18%] left-0 right-0 pointer-events-none z-10">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.2, 0.65, 0.3, 0.9] }}
              className="font-black tracking-[-0.02em] leading-[1.05] text-[36px] sm:text-[56px] lg:text-[84px] xl:text-[96px]"
              style={{
                WebkitTextStroke: "1px rgba(255,255,255,0.28)",
                color: "transparent",
              }}
            >
              한국과 중국, 두 언어로<br className="hidden sm:block" />
              <span className="opacity-70">당신의 권리를 지킵니다</span>
            </motion.h2>
          </div>
        </div>

        {/* Main content bottom-left */}
        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pb-16 lg:pb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.2, 0.65, 0.3, 0.9] }}
            className="max-w-[900px]"
          >
            {/* Tiny editorial tag */}
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-[#b59a5d]" />
              <span className="text-[11px] sm:text-xs font-bold tracking-[0.28em] uppercase text-[#b59a5d]">
                Become Law Firm · 법률사무소 비컴
              </span>
            </div>

            {/* Solid main headline — the punch */}
            <h1 className="font-black leading-[1.08] tracking-[-0.02em] text-[40px] sm:text-[56px] lg:text-[76px]">
              형사·민사·출입국에서<br className="hidden sm:block" />
              <span className="text-[#b59a5d]">명확한 해법</span>을 제시합니다
            </h1>

            {/* Chinese subtitle — restrained */}
            <p className="mt-6 text-base sm:text-lg lg:text-xl text-slate-300/90 font-medium tracking-wide">
              韩国与中国，用两种语言守护您的权利。
            </p>

            {/* Description */}
            <p className="mt-6 max-w-[640px] text-[15px] sm:text-base text-slate-300/80 leading-[1.85] font-medium">
              중국어 직접 상담이 가능한 오동현 변호사와 함께, 통역을 거치지 않고 사실관계부터 법률 분석까지 정확하게 의뢰인의 상황을 이해합니다.
            </p>

            {/* CTAs */}
            <div className="mt-10 lg:mt-12 flex flex-col sm:flex-row gap-3">
              <a
                href="tel:82-10-2999-6910"
                className="group inline-flex items-center justify-between gap-6 bg-white text-[#0a0a0a] hover:bg-slate-100 pl-6 pr-4 py-4 font-extrabold text-[15px] transition-all min-w-[280px]"
              >
                <span className="flex items-center gap-3">
                  <Phone size={18} strokeWidth={2.25} />
                  전화 상담하기
                </span>
                <span className="flex items-center gap-2 border-l border-slate-300 pl-4">
                  <span className="tabular-nums text-[13px] text-slate-500 font-bold">1660-1028</span>
                  <ArrowRight size={16} strokeWidth={2.25} className="transition-transform group-hover:translate-x-0.5" />
                </span>
              </a>
              <a
                href="https://weixin.qq.com/"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center justify-center gap-3 bg-[#b59a5d] hover:bg-[#a38a53] text-white px-8 py-4 font-extrabold text-[15px] transition-colors"
              >
                <MessageCircle size={18} strokeWidth={2.25} />
                위챗 직접상담
                <ArrowRight size={16} strokeWidth={2.25} className="transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>

            {/* Trust line */}
            <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-[12px] sm:text-[13px] text-slate-400 font-semibold">
              <span className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-[#b59a5d]" />
                중국어 직접 상담 가능
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-[#b59a5d]" />
                형사·민사·출입국 원스톱
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-[#b59a5d]" />
                24시간 긴급 위챗 대응
              </span>
            </div>
          </motion.div>
        </div>

        {/* Right-floating Quick Menu — mirrors reference */}
        <motion.aside
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="hidden lg:flex absolute right-5 top-1/2 -translate-y-1/2 z-20"
          aria-label="빠른 상담 메뉴"
        >
          <div className="bg-white/[0.06] backdrop-blur-xl border border-white/15 rounded-[28px] p-3 flex flex-col gap-2.5 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.5)]">
            <div className="text-center py-2 px-2">
              <div className="text-[10px] font-black tracking-[0.18em] uppercase text-white leading-tight">
                Quick<br />Menu
              </div>
            </div>
            <a
              href="#consultation"
              className="group w-[78px] h-[78px] flex flex-col items-center justify-center gap-1 bg-white text-[#0a0a0a] rounded-2xl hover:scale-[1.04] transition-transform"
            >
              <FileText size={20} strokeWidth={2} />
              <span className="text-[11px] font-extrabold mt-0.5">온라인상담</span>
            </a>
            <a
              href="https://weixin.qq.com/"
              target="_blank"
              rel="noreferrer"
              className="group w-[78px] h-[78px] flex flex-col items-center justify-center gap-1 bg-[#09BB07] text-white rounded-2xl hover:scale-[1.04] transition-transform"
            >
              <MessageCircle size={20} strokeWidth={2} />
              <span className="text-[11px] font-extrabold mt-0.5">위챗상담</span>
            </a>
            <a
              href="tel:82-10-2999-6910"
              className="group w-[78px] h-[78px] flex flex-col items-center justify-center gap-1 bg-[#b59a5d] text-white rounded-2xl hover:scale-[1.04] transition-transform"
            >
              <Phone size={20} strokeWidth={2} />
              <span className="text-[11px] font-extrabold mt-0.5">전화상담</span>
            </a>
          </div>
        </motion.aside>

        {/* Scroll hint */}
        <div aria-hidden className="hidden lg:flex absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex-col items-center gap-2 text-slate-400">
          <div className="h-8 w-px bg-gradient-to-b from-transparent via-slate-400/40 to-slate-400/80" />
          <span className="text-[10px] tracking-[0.3em] uppercase font-semibold">Scroll</span>
        </div>
      </section>

      {/* Core Strengths Section */}
      <section className="py-32 bg-slate-50 border-t border-slate-200">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="왜 법률사무소 비컴인가"
            subtitle="단순한 법률 지식을 넘어, 중국의 문화와 당신의 언어를 완벽하게 이해합니다."
            centered={true}
          />
          
          <div className="mt-20 grid gap-8 md:grid-cols-3">
            {[
              {
                icon: <MessageCircle className="h-12 w-12 text-[#b59a5d] mb-6" />,
                title: "직접 소통",
                num: "01",
                desc: "법률 상담에서 통역만 이용할 경우 뉘앙스가 달라지고, 중요한 사실이 누락되거나 왜곡될 수 있습니다. 오동현 변호사는 통역을 거친 후, 중국어로 직접 사실관계를 청취하고 법률 분석을 수행합니다."
              },
              {
                icon: <Globe className="h-12 w-12 text-[#b59a5d] mb-6" />,
                title: "중국 현지 경험에서 나오는 문화적 이해",
                num: "02",
                desc: "법률 문제는 단순히 조문의 해석이 아닙니다. 중국의 비즈니스 관행, 가족 문화, 사회적 맥락을 이해해야 진정한 해결책이 나옵니다. 오동현 변호사는 중국 소주·북경·광서성에서 직접 생활하고 근무한 경험을 보유하고 있습니다."
              },
              {
                icon: <Scale className="h-12 w-12 text-[#b59a5d] mb-6" />,
                title: "형사 처벌과 체류 자격의 연결고리를 아는 변호사",
                num: "03",
                desc: "한국에서 형사 처벌을 받으면 F-4, H-2 등 체류 자격이 취소되거나 강제퇴거로 이어질 수 있습니다. 비컴은 형사 사건 수임 즉시, 사건의 법적 결과뿐 아니라 체류 자격에 미치는 영향까지 종합적으로 관리합니다."
              }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-white p-10 border border-slate-200 hover:border-[#b59a5d] hover:shadow-xl transition-all group flex flex-col relative"
              >
                <div className="absolute top-8 right-8 text-6xl font-black text-slate-50 opacity-50 group-hover:text-[#b59a5d]/10 transition-colors">
                  {feature.num}
                </div>
                {feature.icon}
                <h3 className="text-2xl font-extrabold text-[#0f172a] mb-4">{feature.title}</h3>
                <div className="w-8 h-[2px] bg-[#b59a5d] mb-6" />
                <p className="text-slate-600 leading-relaxed font-medium text-lg">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Attorney Profile Snippet */}
      <section className="py-0 bg-white relative">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="h-[500px] lg:h-auto w-full relative"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1665224752123-a2ea29dddcb2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhbiUyMGxhd3llciUyMHBvcnRyYWl0JTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc3NjM5ODMxNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="오동현 대표변호사"
                className="absolute inset-0 w-full h-full object-cover grayscale"
              />
              <div className="absolute inset-0 bg-[#0f172a]/20 mix-blend-multiply" />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-[#0f172a] text-white p-12 md:p-20 lg:p-24 flex flex-col justify-center"
            >
              <div className="mb-6 flex items-center gap-4">
                <div className="w-12 h-[2px] bg-[#b59a5d]"></div>
                <span className="text-[#b59a5d] font-bold tracking-widest uppercase text-sm">오동현 대표변호사</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold mb-10 leading-tight">
                "저는 중국에서 살았고, 일했고, <br/>그 언어로 생각합니다. 
                <span className="text-[#b59a5d] block mt-2">그래서 당신의 상황을 압니다."</span>
              </h2>
              
              <div className="space-y-8 font-medium">
                <div className="flex gap-5 items-start">
                  <div className="p-3 bg-white/5 text-[#b59a5d]">
                    <Users size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-extrabold text-xl mb-2">중국 현지 실무 경험</h4>
                    <p className="text-lg leading-relaxed text-slate-400">중국 북경사범대학교 연수, 소주 건자재 기업 근무, 한화 무역 대중 수출입 담당 등 단순 어학 연수가 아닌 실제 비즈니스 경험 보유</p>
                  </div>
                </div>
                
                <div className="flex gap-5 items-start">
                  <div className="p-3 bg-white/5 text-[#b59a5d]">
                    <Scale size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-extrabold text-xl mb-2">탁월한 법률 전문성</h4>
                    <p className="text-lg leading-relaxed text-slate-400">고려대 중문학·경영학, 경북대 로스쿨 졸업. 형사 방어, 민사 분쟁부터 비자 유지까지 통합 솔루션 제공</p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <Link to="/about" className="inline-flex items-center gap-3 text-white border border-[#b59a5d] hover:bg-[#b59a5d] px-8 py-4 font-bold text-lg transition-all">
                  전체 프로필 보기 <ArrowRight size={20} />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <SectionHeading
              title="주요 업무 분야"
              subtitle="복잡한 법적 문제를 중국어권 의뢰인 맞춤형으로 해결합니다."
            />
            <Link to="/services" className="inline-flex items-center justify-center gap-2 bg-[#0f172a] hover:bg-slate-800 text-white font-extrabold px-8 py-4 transition-colors mb-6 whitespace-nowrap">
              모든 서비스 보기 <ArrowRight size={20} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "체류 자격 · 출입국 (签证·出入境)",
                desc: "형사 사건 수임 즉시 체류 자격(F-4, H-2)에 미치는 영향을 병행 분석. 강제퇴거 방어 및 24시 긴급 대응.",
                color: "border-slate-200"
              },
              {
                title: "형사 사건 (刑事案件)",
                desc: "보이스피싱 전달책, 투자 사기 고소, 업무상 횡령 등 억울한 혐의 방어 및 신속한 피해 구제.",
                color: "border-slate-200"
              },
              {
                title: "민사 · 금융 사건 (民事·金融)",
                desc: "채무부존재확인 방어, P2P 금융 연대보증, 중고차 3자 사기 방어 등 복잡한 손해배상 사건 대리.",
                color: "border-slate-200"
              },
              {
                title: "대중 계약 · 기업 (涉华合同·企业)",
                desc: "한중 수출입 계약 리스크 검토, 중국어 원문 기준 분석, 다중언어 법률 문서 및 분쟁 자문.",
                color: "border-slate-200"
              },
              {
                title: "가사 · 상속 (家事·继承)",
                desc: "이혼 재산분할, 중국 법원 이혼 판결의 국내 효력, 중국 소재 재산의 한국 내 상속 절차 안내.",
                color: "border-slate-200"
              }
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className={`bg-white border-t-4 border-slate-200 hover:border-[#b59a5d] p-10 flex flex-col h-full hover:shadow-2xl transition-all cursor-pointer`}
              >
                <div className={`text-[#b59a5d] mb-6 font-black text-3xl opacity-40`}>
                  0{i + 1}
                </div>
                <h3 className="text-2xl font-extrabold text-[#0f172a] mb-4">{service.title}</h3>
                <p className="text-slate-600 mb-8 flex-grow leading-relaxed font-medium text-lg">{service.desc}</p>
                <Link to="/services" className="text-sm font-bold text-[#0f172a] hover:text-[#b59a5d] flex items-center gap-2 mt-auto transition-colors">
                  자세히 보기 <ArrowRight size={16} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Guide / Lead Magnet Section */}
      <section className="py-24 bg-[#0f172a] relative border-t-8 border-[#b59a5d]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="md:w-2/3 text-white">
              <div className="flex items-center gap-4 mb-6">
                <span className="inline-flex items-center px-4 py-1 border border-[#b59a5d] text-[#b59a5d] font-bold text-sm tracking-widest uppercase">
                  무료 가이드북 배포
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold mb-8 leading-tight">
                한국 생활, 모르면 당하고 알면 지킨다:<br />
                <span className="text-slate-400 font-bold text-3xl md:text-4xl mt-2 block">조선족을 위한 5대 필수 법률 가이드</span>
              </h2>
              <ul className="space-y-4 mb-10 text-slate-300 font-bold text-lg">
                <li className="flex items-center gap-3"><CheckCircle2 size={24} className="text-[#b59a5d] shrink-0" /> 비자(F4, H2) 상실 피하는 법 (음주운전, 벌금형)</li>
                <li className="flex items-center gap-3"><CheckCircle2 size={24} className="text-[#b59a5d] shrink-0" /> 사장이 돈 안 줄 때 증거 남기는 법</li>
                <li className="flex items-center gap-3"><CheckCircle2 size={24} className="text-[#b59a5d] shrink-0" /> 보이스피싱 전달책 연루 시 행동 요령</li>
                <li className="flex items-center gap-3"><CheckCircle2 size={24} className="text-[#b59a5d] shrink-0" /> 중국 재산 상속 및 이혼 판결 효력</li>
                <li className="flex items-center gap-3"><CheckCircle2 size={24} className="text-[#b59a5d] shrink-0" /> 한교(韩桥)/비컴 24시 위챗 QR코드 제공</li>
              </ul>
              
              <a href="#" className="inline-flex items-center justify-center gap-3 bg-[#b59a5d] hover:bg-[#a38a53] text-white px-10 py-5 font-extrabold text-lg transition-all w-full sm:w-auto shadow-xl">
                <Download size={22} />
                가이드북 다운로드
              </a>
            </div>
            
            <div className="md:w-1/3 flex justify-center w-full">
              <div className="bg-white p-8 shadow-2xl w-full max-w-md border-t-4 border-[#b59a5d]">
                <div className="aspect-[3/4] bg-slate-50 border border-slate-200 flex flex-col items-center justify-center p-8 text-center">
                  <FileText size={56} className="mb-6 text-[#0f172a]" />
                  <p className="font-extrabold text-2xl text-[#0f172a] mb-4">한국 생존<br/>법률 가이드북</p>
                  <p className="text-base text-slate-500 font-medium mb-8">클릭하여 PDF 다운로드</p>
                  
                  <div className="w-full h-[1px] bg-slate-200 mb-8" />
                  
                  <p className="text-sm font-bold text-[#0f172a] mb-4">한교(韩桥) / 비컴 24시 위챗</p>
                  <div className="w-32 h-32 border-2 border-slate-300 p-2 flex items-center justify-center text-slate-400 font-bold">
                    QR 코드
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

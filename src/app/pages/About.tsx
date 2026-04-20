import { motion } from "motion/react";
import { GraduationCap, Briefcase, Award, MapPin } from "lucide-react";
import { SectionHeading } from "../components/SectionHeading";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function About() {
  const timeline = [
    { year: "2026. 02", title: "법률사무소 한교 파트너 변호사 (현재)" },
    { year: "2025. 07", title: "법률사무소 한교 소속변호사" },
    { year: "2025. 01", title: "법무법인 동감 소속변호사" },
    { year: "2024. 11", title: "국제지식재산연수원 변리사 연수과정 수료" },
    { year: "2024", title: "대한변호사협회 연수" },
    { year: "2022. 01", title: "동계 경찰대학 실무 수습" },
    { year: "2020. 03", title: "경북대학교 법학전문대학원 입학" },
    { year: "2016. 12 ~ 2018. 03", title: "㈜한화/무역 해외영업 근무" },
    { year: "2015. 01 ~ 2015. 06", title: "중국 북경 소재 基金會中心網 (China Foundation Center) 근무" },
    { year: "2014. 01", title: "중국 광서성 세계태권도평화봉사재단 태권도 교육 및 중국어 통역" },
    { year: "2012. 07", title: "중국 소주 소재 Suzhou Chun-Bo New Construction Material Co., Ltd. 근무" },
    { year: "2012. 02", title: "중국 북경사범대학교 연수" },
    { year: "2008. 03", title: "고려대학교 중어중문학·경영학 입학" },
  ];

  return (
    <div className="bg-white min-h-screen pt-24 pb-32">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading 
          title="대표 변호사 소개" 
          subtitle="단순한 언어 능력을 넘어, 중국의 비즈니스와 문화를 완벽히 이해하는 법률 전문가입니다." 
          centered={true}
        />

        {/* Intro paragraph */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 max-w-[900px] mx-auto text-center"
        >
          <p className="text-lg lg:text-xl text-slate-600 font-medium leading-[1.85]">
            한국에서 법적 문제에 부딪혔을 때, 가장 두려운 것은 <strong className="text-[#0f172a]">'내 말이 제대로 전달되지 않는 것'</strong>입니다.<br/>
            법률사무소 한교의 오동현 변호사는 중국어 소통에 문제가 없으며, 중국 현지에서 수년간 생활하고 일한 경험을 바탕으로 중국어권 의뢰인의 상황을 누구보다 정확하게 이해합니다.
          </p>
          <p className="mt-6 text-xl text-[#2563EB] font-black tracking-tight">
            당신의 이야기를, 당신의 언어로 들을 준비가 되어 있습니다.
          </p>
        </motion.div>

        <div className="mt-20 border border-slate-200 bg-white flex flex-col lg:flex-row shadow-sm">
          <div className="lg:w-2/5 relative min-h-[500px] lg:min-h-0 bg-slate-100">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1665224752123-a2ea29dddcb2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhbiUyMGxhd3llciUyMHBvcnRyYWl0JTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc3NjM5ODMxNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="오동현 대표 변호사"
              className="absolute inset-0 w-full h-full object-cover object-top grayscale"
            />
            <div className="absolute inset-0 bg-[#0f172a]/10 mix-blend-multiply" />
            <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-[#0f172a] to-transparent lg:hidden">
              <h3 className="text-3xl font-extrabold text-white mb-2">오동현 변호사</h3>
              <p className="text-[#2563EB] font-bold">법률사무소 한교 대표 변호사</p>
            </div>
          </div>
          
          <div className="lg:w-3/5 p-10 md:p-16 lg:p-24 bg-white">
            <div className="hidden lg:block mb-12">
              <h3 className="text-4xl font-extrabold text-[#0f172a] mb-4">오동현 <span className="text-2xl text-slate-500 font-bold ml-2">대표 변호사</span></h3>
              <div className="w-12 h-1 bg-[#2563EB] mb-8" />
              <blockquote className="text-2xl font-extrabold text-[#0f172a] leading-relaxed border-l-4 border-[#2563EB] pl-8 py-2 bg-slate-50/50 italic tracking-tight">
                "저는 중국에서 살았고, 일했고, 그 언어로 생각합니다. 
                <span className="text-[#2563EB] block mt-2">그래서 당신의 상황을 완벽히 이해합니다."</span>
              </blockquote>
            </div>

            <div className="space-y-16">
              <section>
                <h4 className="text-2xl font-extrabold text-[#0f172a] flex items-center gap-3 mb-6 pb-4 border-b-2 border-slate-900 inline-flex">
                  학력 (学历)
                </h4>
                <ul className="space-y-4 text-slate-700 font-bold text-lg">
                  <li className="flex items-center gap-4"><span className="w-2 h-2 bg-[#2563EB] rounded-full"></span> 고려대학교 중어중문학, 경영학 (복수전공)</li>
                  <li className="flex items-center gap-4"><span className="w-2 h-2 bg-[#2563EB] rounded-full"></span> 경북대학교 법학전문대학원</li>
                </ul>
              </section>

              <section>
                <h4 className="text-2xl font-extrabold text-[#0f172a] flex items-center gap-3 mb-6 pb-4 border-b-2 border-slate-900 inline-flex">
                  중국 관련 경력 (涉华经历)
                </h4>
                <p className="text-slate-600 mb-8 leading-relaxed font-medium text-lg">
                  오동현 변호사의 중국 관련 경험은 단순한 어학 연수 수준을 넘어, 실제 중국 현지 기업·기관에서의 실무 경험을 포함합니다.
                </p>
                <div className="space-y-8 text-slate-800">
                  <div className="border-l-2 border-slate-200 pl-6 hover:border-[#2563EB] transition-colors">
                    <strong className="text-xl font-extrabold text-[#0f172a] block mb-3">🏢 ㈜한화/무역 석유화학팀 사원 <span className="text-sm font-bold text-slate-400 ml-2">(2016. 12 ~ 2018. 03)</span></strong>
                    <p className="text-base leading-relaxed text-slate-600 font-medium">한국 대기업 ㈜한화의 무역 부문에서 대중(對中) 석유화학 제품 수출입 업무를 담당하였습니다. 영문·중문 계약서 작성 및 검토, 해외 지사 외국 사원과의 연락·응대 업무를 직접 수행하였으며, 이 경험은 현재 중국 기업과의 계약 자문 업무에 직접적으로 활용됩니다.</p>
                  </div>
                  <div className="border-l-2 border-slate-200 pl-6 hover:border-[#2563EB] transition-colors">
                    <strong className="text-xl font-extrabold text-[#0f172a] block mb-3">🌐 중국 북경 기금회중심망 (China Foundation Center) 인턴 <span className="text-sm font-bold text-slate-400 ml-2">(2015. 01 ~ 2015. 06)</span></strong>
                    <p className="text-base leading-relaxed text-slate-600 font-medium">중국 최대 NGO 정보 플랫폼인 基金會中心網에서 인턴으로 근무하며 한중 NGO 자료 비교조사 및 영중한 통번역 업무를 수행하였습니다. 중국의 비영리 법인 운영 구조와 사회적 맥락을 깊이 이해하게 된 계기가 되었습니다.</p>
                  </div>
                  <div className="border-l-2 border-slate-200 pl-6 hover:border-[#2563EB] transition-colors">
                    <strong className="text-xl font-extrabold text-[#0f172a] block mb-3">🥋 중국 광서성 세계태권도평화봉사재단 <span className="text-sm font-bold text-slate-400 ml-2">(2014. 01)</span></strong>
                    <p className="text-base leading-relaxed text-slate-600 font-medium">중국 광서성 현지에서 태권도 교육 및 중국어 통역 업무를 수행하며, 중국 지방 사회와의 직접적인 교류 경험을 쌓았습니다.</p>
                  </div>
                  <div className="border-l-2 border-slate-200 pl-6 hover:border-[#2563EB] transition-colors">
                    <strong className="text-xl font-extrabold text-[#0f172a] block mb-3">🏭 중국 소주(苏州) 소재 건자재 기업 인턴 <span className="text-sm font-bold text-slate-400 ml-2">(2012. 07)</span></strong>
                    <p className="text-base leading-relaxed text-slate-600 font-medium">Suzhou Chun-Bo New Construction Material Co., Ltd. (苏州天辅新型建材有限公司)에서 인턴으로 근무하며 시장 동향 파악, 자료 조사, 영중한 통번역 및 현장 실무를 수행하였습니다. 중국 제조업 현장의 비즈니스 관행을 몸으로 익혔습니다.</p>
                  </div>
                  <div className="border-l-2 border-slate-200 pl-6 hover:border-[#2563EB] transition-colors">
                    <strong className="text-xl font-extrabold text-[#0f172a] block mb-3">🎓 중국 북경사범대학교 연수 <span className="text-sm font-bold text-slate-400 ml-2">(2012. 02)</span></strong>
                    <p className="text-base leading-relaxed text-slate-600 font-medium">북경 현지 어학·법제 수업을 통해 학계 중국어 환경에 직접 노출되어 단순 어학연수를 넘어 중국 현지 생활 기반을 다진 출발점입니다.</p>
                  </div>
                </div>
              </section>

              <section>
                <h4 className="text-2xl font-extrabold text-[#0f172a] flex items-center gap-3 mb-6 pb-4 border-b-2 border-slate-900 inline-flex">
                  자격 및 기타
                </h4>
                <div className="flex flex-wrap gap-3">
                  <span className="px-5 py-3 bg-slate-100 text-[#0f172a] font-bold border border-slate-200 text-sm">남서울탐정사관학교 사립탐정사 최고위과정 강사 및 수료</span>
                  <span className="px-5 py-3 bg-slate-100 text-[#0f172a] font-bold border border-slate-200 text-sm">신용관리사</span>
                  <span className="px-5 py-3 bg-slate-100 text-[#0f172a] font-bold border border-slate-200 text-sm">지게차운전기능사</span>
                  <span className="px-5 py-3 bg-slate-100 text-[#0f172a] font-bold border border-slate-200 text-sm">굴착기운전기능사</span>
                  <span className="px-5 py-3 bg-slate-100 text-[#0f172a] font-bold border border-slate-200 text-sm">조주기능사</span>
                </div>
              </section>
            </div>
          </div>
        </div>

        {/* ─── 서비스 프로세스 섹션 ─── */}
        <div className="mt-32">
          <SectionHeading 
            title="합리적인 서비스 프로세스" 
            subtitle="접수부터 사후관리까지, 심리적 문턱을 낮추고 투명하게 진행합니다."
            centered={true}
          />
          
          <div className="max-w-[1200px] mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "접수",
                desc: "위챗/전화 접수 시 이중언어 사무장이 1차 상담",
                note: "심리적 문턱 낮춤",
              },
              {
                step: "02",
                title: "분석",
                desc: "변호사와 협력하여 초기 단계부터 '비자 영향 평가' 실시",
                note: "형사 처벌 시 강제 출국 가능성 사전 진단",
              },
              {
                step: "03",
                title: "진행",
                desc: "모든 서면 및 사건 진행 상황을 한-중 양문으로 동시 제공",
                note: "진행 상황 투명성 확보",
              },
              {
                step: "04",
                title: "사후관리",
                desc: "사건 종료 후 '체류 자격 유지 가이드' 추가 제공",
                note: "재방문 및 추천 유도",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-slate-50 border border-slate-200 hover:border-[#2563EB] p-8 flex flex-col relative group transition-colors shadow-sm hover:shadow-md"
              >
                <span className="text-5xl font-black text-slate-200 group-hover:text-[#2563EB]/10 transition-colors absolute top-6 right-6">
                  {item.step}
                </span>
                <h3 className="text-2xl font-extrabold text-[#0f172a] mb-4 relative z-10">{item.title}</h3>
                <div className="w-8 h-[3px] bg-[#2563EB] mb-5 relative z-10" />
                <p className="text-slate-600 font-bold leading-relaxed mb-6 flex-grow relative z-10 text-[15px]">{item.desc}</p>
                <div className="relative z-10 self-start">
                  <span className="text-[12px] font-black tracking-wide text-[#2563EB] bg-white px-3 py-1.5 border border-[#2563EB]/20 shadow-sm rounded-sm">
                    ✓ {item.note}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-32">
          <SectionHeading title="주요 경력 요약" centered={true} />
          
          <div className="max-w-3xl mx-auto mt-16 bg-slate-50 border border-slate-200 p-8 lg:p-12 shadow-sm mb-10">
            <ul className="space-y-4">
              {timeline.map((item, index) => (
                <li key={index} className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-8 border-b border-slate-200 pb-4 last:border-0 last:pb-0 hover:bg-slate-100 transition-colors px-2 -mx-2 rounded-sm">
                  <span className="font-bold text-[#2563EB] sm:w-[160px] shrink-0 text-[15px] tracking-wide">{item.year}</span>
                  <span className="text-[#0f172a] font-bold text-[16px] leading-snug">{item.title}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
}

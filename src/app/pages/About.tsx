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
              <p className="text-[#b59a5d] font-bold">법률사무소 한교 대표 변호사</p>
            </div>
          </div>
          
          <div className="lg:w-3/5 p-10 md:p-16 lg:p-24 bg-white">
            <div className="hidden lg:block mb-12">
              <h3 className="text-4xl font-extrabold text-[#0f172a] mb-4">오동현 <span className="text-2xl text-slate-500 font-bold ml-2">대표 변호사</span></h3>
              <div className="w-12 h-1 bg-[#b59a5d] mb-8" />
              <blockquote className="text-2xl font-extrabold text-[#0f172a] leading-relaxed border-l-4 border-[#b59a5d] pl-8 py-2 bg-slate-50/50 italic tracking-tight">
                "저는 중국에서 살았고, 일했고, 그 언어로 생각합니다. 
                <span className="text-[#b59a5d] block mt-2">그래서 당신의 상황을 완벽히 이해합니다."</span>
              </blockquote>
            </div>

            <div className="space-y-16">
              <section>
                <h4 className="text-2xl font-extrabold text-[#0f172a] flex items-center gap-3 mb-6 pb-4 border-b-2 border-slate-900 inline-flex">
                  학력 (学历)
                </h4>
                <ul className="space-y-4 text-slate-700 font-bold text-lg">
                  <li className="flex items-center gap-4"><span className="w-2 h-2 bg-[#b59a5d] rounded-full"></span> 고려대학교 중어중문학, 경영학 (복수전공)</li>
                  <li className="flex items-center gap-4"><span className="w-2 h-2 bg-[#b59a5d] rounded-full"></span> 경북대학교 법학전문대학원</li>
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
                  <div className="border-l-2 border-slate-200 pl-6 hover:border-[#b59a5d] transition-colors">
                    <strong className="text-xl font-extrabold text-[#0f172a] block mb-3">㈜한화/무역 석유화학팀 사원</strong>
                    <p className="text-base leading-relaxed text-slate-600 font-medium">한국 대기업 ㈜한화의 무역 부문에서 대중(對中) 석유화학 제품 수출입 업무 담당. 영문·중문 계약서 작성 및 검토 직접 수행.</p>
                  </div>
                  <div className="border-l-2 border-slate-200 pl-6 hover:border-[#b59a5d] transition-colors">
                    <strong className="text-xl font-extrabold text-[#0f172a] block mb-3">중국 북경 기금회중심망 (China Foundation Center) 인턴</strong>
                    <p className="text-base leading-relaxed text-slate-600 font-medium">중국 최대 NGO 정보 플랫폼에서 한중 NGO 자료 비교조사 및 영중한 통번역 업무 수행.</p>
                  </div>
                  <div className="border-l-2 border-slate-200 pl-6 hover:border-[#b59a5d] transition-colors">
                    <strong className="text-xl font-extrabold text-[#0f172a] block mb-3">중국 광서성 세계태권도평화봉사재단</strong>
                    <p className="text-base leading-relaxed text-slate-600 font-medium">중국 광서성 현지에서 태권도 교육 및 중국어 통역 업무를 수행하며, 중국 지방 사회와의 직접적인 교류 경험 확보.</p>
                  </div>
                  <div className="border-l-2 border-slate-200 pl-6 hover:border-[#b59a5d] transition-colors">
                    <strong className="text-xl font-extrabold text-[#0f172a] block mb-3">중국 소주(苏州) 소재 건자재 기업 근무</strong>
                    <p className="text-base leading-relaxed text-slate-600 font-medium">Suzhou Chun-Bo New Construction Material Co., Ltd.에서 시장 동향 파악, 영중한 통번역 및 현장 실무 수행.</p>
                  </div>
                  <div className="border-l-2 border-slate-200 pl-6 hover:border-[#b59a5d] transition-colors">
                    <strong className="text-xl font-extrabold text-[#0f172a] block mb-3">중국 북경사범대학교 연수</strong>
                    <p className="text-base leading-relaxed text-slate-600 font-medium">북경 현지 어학·법제 수업을 통해 학계 중국어 환경에 직접 노출. 단순 어학연수를 넘어 중국 현지 생활 기반을 다진 출발점.</p>
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

        <div className="mt-32">
          <SectionHeading title="주요 경력 타임라인" centered={true} />
          
          <div className="max-w-4xl mx-auto mt-16 border-t border-slate-200 pt-16">
            <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-[#0f172a]/10">
              {timeline.map((item, index) => (
                <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-[#0f172a] group-hover:bg-[#b59a5d] text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 transition-colors z-10">
                    <span className="w-2 h-2 bg-white rounded-full"></span>
                  </div>
                  
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex flex-col mb-2">
                      <span className="text-[#b59a5d] font-black text-lg mb-1">{item.year}</span>
                      <h4 className="font-extrabold text-[#0f172a] text-xl">{item.title}</h4>
                    </div>
                    {item.desc && <p className="text-base text-slate-600 font-medium leading-relaxed mt-4">{item.desc}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

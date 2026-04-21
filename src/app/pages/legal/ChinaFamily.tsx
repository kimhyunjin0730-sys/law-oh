import { LegalTopicShell } from "../../components/legal/LegalTopicShell";

export function ChinaFamily() {
  return (
    <LegalTopicShell
      versionLabel="CFM-v1.0"
      sectionLabels={{
        overview: { ko: "개관", zh: "概述", en: "Overview" },
        scenarios: { ko: "주요 사건 유형", zh: "主要案件类型", en: "Common Cases" },
        procedure: { ko: "한·중 절차 흐름", zh: "韩·中程序流程", en: "Korea–China Procedure" },
        laws: { ko: "관련 법령 조문", zh: "相关法令", en: "Statutes" },
      }}
      title={{
        ko: "중국 이혼·상속",
        zh: "中国离婚·继承",
        en: "China Divorce & Inheritance",
      }}
      summary={{
        ko: "한·중 양국에 자산·자녀·신분이 걸친 사건. 한국 법원 절차와 중국 판결의 한국 내 효력을 함께 설계해야 합니다.",
        zh: "资产·子女·身份横跨韩·中两国的案件。须同步设计韩国法院程序与中国判决在韩国境内的效力。",
        en: "Cases that cross Korea and China — assets, children, status. Korean court process and the Korean effect of Chinese judgments must be designed together.",
      }}
      overview={{
        ko: "한·중 양국에 가족과 재산이 분산된 의뢰인의 가사 사건은 단일 법원의 판결만으로 정리되지 않습니다. 한국 법원에서 이혼·재산분할·양육권 판결을 받더라도 중국에 있는 부동산이나 사업체에 강제집행하려면 별도의 승인 절차가 필요하고, 반대로 중국 법원의 이혼 판결을 한국에서 행정·민사상 효력으로 인정받는 절차도 별도로 진행해야 합니다. 비컴은 의뢰인의 국적·혼인 거행지·자산 소재지를 동시에 분석해, 한 번의 판결이 두 나라에서 모두 작동하도록 전략을 설계합니다.",
        zh: "家庭与财产分布于韩·中两国的当事人，其家事案件无法仅靠单一法院的判决解决。即使在韩国法院获得离婚·财产分割·抚养权判决，对中国境内房产或企业的强制执行仍需另行承认程序；反之，中国法院的离婚判决在韩国行政与民事上获得承认也需另行办理。BECOME律师事务所同步分析当事人的国籍、结婚缔结地、财产所在地，确保一次判决可在两国同时生效。",
        en: "For clients whose family and assets straddle Korea and China, a single judgment rarely settles everything. A Korean ruling on divorce, division of property, or custody must go through a separate recognition process to enforce against a Chinese apartment or business, and a Chinese divorce ruling needs separate Korean recognition to take administrative and civil effect. BECOME analyzes nationality, place of marriage, and asset location together so that one judgment can operate in both jurisdictions.",
      }}
      highlights={{
        ko: ["단일 법원의 판결만으로 정리되지 않습니다", "별도의 승인 절차", "한 번의 판결이 두 나라에서 모두 작동"],
        zh: ["无法仅靠单一法院的判决解决", "另行承认程序", "一次判决可在两国同时生效"],
        en: ["a single judgment rarely settles everything", "separate recognition process", "one judgment can operate in both jurisdictions"],
      }}
      scenarios={[
        {
          title: { ko: "한국 거주 부부의 이혼 — 중국 자산 포함", zh: "在韩居住夫妇的离婚 — 含中国资产", en: "Couple in Korea — includes assets in China" },
          body: {
            ko: "한국 법원이 관할권을 가지지만, 중국 소재 부동산·예금에 대한 분할 판결은 중국 법원의 승인을 받아야 집행 가능.",
            zh: "韩国法院具有管辖权，但对中国境内不动产·存款的分割判决须经中国法院承认方可执行。",
            en: "Korean courts have jurisdiction, but division of Chinese real estate or deposits requires Chinese-court recognition for enforcement.",
          },
        },
        {
          title: { ko: "중국 법원 이혼 판결을 한국에서 인정받기", zh: "在韩国承认中国法院的离婚判决", en: "Recognizing a Chinese divorce judgment in Korea" },
          body: {
            ko: "재혼·체류자격(F-6 등) 갱신·자녀 출생신고 등에 필요. 가정법원에 외국 판결 승인 청구를 통해 가족관계등록부에 반영.",
            zh: "用于再婚·居留资格（F-6等）更新·子女出生申报等。须通过家庭法院的外国判决承认请求，反映至家族关系登记簿。",
            en: "Required for remarriage, visa renewal (e.g. F-6), or child birth registration. File a recognition petition at the Family Court so it appears in the family register.",
          },
        },
        {
          title: { ko: "중국 소재 재산의 한국 내 상속", zh: "中国境内财产在韩国继承", en: "Inheritance of China-located assets in Korea" },
          body: {
            ko: "피상속인의 본국법(국적국법) 적용. 한국에 거주하는 중국인 피상속인의 경우 중국 상속법이 적용되며, 상속 신고는 양국에서 별도 진행.",
            zh: "适用被继承人本国法（国籍国法）。在韩居住的中国籍被继承人适用中国继承法，继承申报在两国分别进行。",
            en: "The decedent's national law applies. For Chinese decedents residing in Korea, Chinese inheritance law governs, and reporting is done separately in both countries.",
          },
        },
        {
          title: { ko: "양육권·면접교섭 — 자녀가 두 나라에 있는 경우", zh: "抚养权·探视 — 子女在两国时", en: "Custody / visitation — children in both countries" },
          body: {
            ko: "헤이그 국제아동탈취협약 미가입국 간 사건은 절차가 복잡. 양국 법원의 임시 보호·면접교섭 명령을 동시에 활용하는 전략이 필요.",
            zh: "海牙跨境儿童拐带公约未加入国之间的案件程序复杂。需同时运用两国法院的临时保护·探视命令。",
            en: "Disputes between non-Hague Convention parties are complex. Strategy uses both countries' interim-protection and visitation orders in parallel.",
          },
        },
      ]}
      procedure={[
        {
          title: { ko: "관할 진단 — 어느 법원이 먼저인가", zh: "管辖诊断 — 哪个法院先", en: "Jurisdiction triage — which court first" },
          body: {
            ko: "혼인 거행지, 부부의 일상 거소, 자산 소재지에 따라 한국·중국 법원 중 어디서 시작할지 결정. 잘못된 관할 선택은 절차 지연의 가장 큰 원인.",
            zh: "根据结婚缔结地、夫妻日常居所、财产所在地，决定从韩国还是中国法院开始。管辖选择错误是程序拖延的最大原因。",
            en: "Pick Korean or Chinese court depending on place of marriage, habitual residence, and asset location. Wrong forum choice is the leading cause of delay.",
          },
        },
        {
          title: { ko: "공증·번역·아포스티유 정비", zh: "公证·翻译·海牙认证整理", en: "Notarization / translation / apostille" },
          body: {
            ko: "혼인증명서·이혼증명서·호구부 등은 발급 즉시 공증과 번역, 필요한 경우 아포스티유까지 한 번에 준비.",
            zh: "结婚证·离婚证·户口簿等取得后立即进行公证·翻译，必要时连同海牙认证一并准备。",
            en: "Marriage / divorce certificates and household registers must be notarized, translated, and (when needed) apostilled in one batch right after issuance.",
          },
        },
        {
          title: { ko: "본안 진행 — 한국 측 절차", zh: "本案进行 — 韩国程序", en: "Main proceeding — Korean track" },
          body: {
            ko: "이혼·재산분할·양육권 등을 한국 가정법원에 동시에 청구. 중국에 있는 자산은 ‘기여도 평가’ 단계에서 함께 다툼.",
            zh: "离婚·财产分割·抚养权等向韩国家庭法院一并请求。中国境内资产在“贡献度评价”阶段一并主张。",
            en: "File divorce, property division, custody together at the Korean Family Court. Chinese-located assets are litigated at the contribution-assessment stage.",
          },
        },
        {
          title: { ko: "외국 판결 승인·집행 — 중국 측", zh: "外国判决承认·执行 — 中国侧", en: "Recognition & enforcement — China side" },
          body: {
            ko: "한국 판결을 중국 인민법원에 승인·집행 청구. 한·중 양국은 민·상사 사법공조 협정이 존재하나 가사 영역의 적용 범위는 사안별 검토 필요.",
            zh: "向中国人民法院申请承认·执行韩国判决。中韩两国签有民商事司法协助条约，但家事领域的适用范围需个案审查。",
            en: "Apply for recognition / enforcement of the Korean judgment at the Chinese People's Court. Korea and China have a civil & commercial judicial-assistance treaty, but its application to family matters requires case-by-case review.",
          },
        },
        {
          title: { ko: "한국 가족관계등록부 정리", zh: "整理韩国家族关系登记簿", en: "Update Korean family register" },
          body: {
            ko: "중국 판결의 한국 내 효력을 인정받는 가정법원 결정 + 신고서 제출. 이후 비자·재혼·자녀 등록 등이 가능.",
            zh: "取得家庭法院承认中国判决在韩效力的决定 + 提交申报书。其后方可办理签证·再婚·子女登记等。",
            en: "Family Court recognition of the Chinese judgment's effect in Korea + filing the registration form — only then can visa, remarriage, or child registration follow.",
          },
        },
      ]}
      laws={[
        {
          name: { ko: "국제사법", zh: "国际私法", en: "Act on Private International Law" },
          article: { ko: "제66조 (이혼)", zh: "第66条 (离婚)", en: "Art. 66 (Divorce)" },
          body: {
            ko: "이혼은 부부의 동일한 본국법, 그 다음으로 일상거소지법에 따릅니다. 한·중 부부의 경우 거주지 법원 선택의 폭이 넓어, 전략적 관할 선택이 가능합니다.",
            zh: "离婚适用夫妻共同本国法，其次适用日常居所地法。中韩夫妇可较为灵活地选择管辖法院，可进行策略性选择。",
            en: "Divorce is governed first by the spouses' common national law, then by the law of habitual residence. For Korea–China couples, this allows strategic forum selection.",
          },
        },
        {
          name: { ko: "민사소송법", zh: "民事诉讼法", en: "Civil Procedure Act" },
          article: { ko: "제217조 (외국재판의 승인)", zh: "第217条 (外国裁判的承认)", en: "Art. 217 (Recognition of foreign judgments)" },
          body: {
            ko: "외국 법원의 확정재판은 ① 관할권, ② 송달의 적법성, ③ 공서양속 부합, ④ 상호보증의 4 요건을 충족할 때 한국 내에서 효력이 인정됩니다.",
            zh: "外国法院的生效裁判，须满足 ① 管辖权、② 送达合法性、③ 公序良俗、④ 相互保证 四项要件，方可在韩国境内被承认。",
            en: "A foreign final judgment is recognized in Korea when it meets four requirements: jurisdiction, proper service, public-policy compatibility, and reciprocity.",
          },
        },
        {
          name: { ko: "국제사법", zh: "国际私法", en: "Act on Private International Law" },
          article: { ko: "제77조 (상속)", zh: "第77条 (继承)", en: "Art. 77 (Inheritance)" },
          body: {
            ko: "상속은 사망 당시 피상속인의 본국법에 따릅니다. 중국 국적자의 사망에 따른 한국 내 재산 상속은 중국 상속법이 적용되며, 등기·세무 절차는 한국 법령을 따릅니다.",
            zh: "继承适用被继承人死亡时的本国法。中国国籍人死亡涉及在韩财产继承的，适用中国继承法，登记·税务程序适用韩国法令。",
            en: "Inheritance follows the decedent's national law at the time of death. For a Chinese national, Korean inheritance assets are governed by Chinese law, while registration and tax procedures follow Korean law.",
          },
        },
      ]}
      cases={[
        { ko: "한국·중국 양국 부동산 보유 부부 이혼 — 양측 법원 동시 진행으로 1년 내 정리", zh: "在韩·中两国持有不动产的夫妇离婚 — 两国法院同步推进1年内完成", en: "Korea–China real-estate holding couple divorced — parallel courts, settled within 1 year" },
        { ko: "중국 법원 이혼 판결 한국 내 승인 + F-6 비자 재정비", zh: "中国法院离婚判决在韩获承认 + F-6签证重新整理", en: "Chinese divorce recognized in Korea + F-6 visa restructured" },
        { ko: "중국 거주 부친 사망 후 한국 내 부동산 상속 — 중국 상속법 적용 받아 등기 완료", zh: "在中国居住的父亲身故后办理在韩不动产继承 — 适用中国继承法完成登记", en: "Father resident in China deceased — Korean property inherited under Chinese inheritance law, registered" },
      ]}
      practices={[
        { label: { ko: "체류자격·출입국", zh: "居留资格·出入境", en: "Visa & Immigration" }, to: "/legal/immigration" },
        { label: { ko: "형사 초기대응", zh: "刑事初步应对", en: "Criminal Response" }, to: "/legal/criminal" },
        { label: { ko: "노동·임금체불", zh: "劳动·欠薪", en: "Labor & Wages" }, to: "/legal/labor" },
        { label: { ko: "사기·보이스피싱", zh: "诈骗·语音钓鱼", en: "Fraud / Voice Phishing" }, to: "/legal/fraud" },
      ]}
      cta={{
        ko: {
          eyebrow: "비컴 — BECOME Law Firm",
          h: "한국과 중국,\n두 절차를 한 번에 설계합니다.",
          p: "관할·승인·집행·등록까지 — 잘못된 한 단계가 1년 이상의 지연을 만듭니다. 시작 전에 전략을 함께 잡으세요.",
          primary: "온라인 상담 접수",
          secondary: "전화 상담  82-10-2999-6910",
        },
        zh: {
          eyebrow: "BECOME · BECOME Law Firm",
          h: "韩国与中国，\n两套程序同步设计。",
          p: "管辖·承认·执行·登记 — 一个步骤错位可造成一年以上延误。请在启动前共同制定策略。",
          primary: "在线咨询",
          secondary: "电话咨询  82-10-2999-6910",
        },
        en: {
          eyebrow: "BECOME Law Firm",
          h: "Korea and China —\nboth procedures designed together.",
          p: "Jurisdiction, recognition, enforcement, registration — a single misstep can cost a year. Set the strategy before you start.",
          primary: "Online consultation",
          secondary: "Call  82-10-2999-6910",
        },
      }}
      ctaCopy={{
        ko: { title: "양국에 자산·가족이 걸쳐 있나요?\n한 번에 설계하세요.", body: "중국어·한국어 직접 상담. 관할 진단부터 등기 정리까지.", btn: "온라인 상담 →", eyebrow: "Need a lawyer?" },
        zh: { title: "资产·家人横跨两国吗？\n一次性设计。", body: "可中文·韩语直接沟通。从管辖诊断到登记整理。", btn: "在线咨询 →", eyebrow: "Need a lawyer?" },
        en: { title: "Assets / family in both countries?\nDesign it once.", body: "Chinese & Korean direct consultation — from jurisdiction triage to registration.", btn: "Online consultation →", eyebrow: "Need a lawyer?" },
      }}
    />
  );
}

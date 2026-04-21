import { LegalTopicShell } from "../../components/legal/LegalTopicShell";

export function Labor() {
  return (
    <LegalTopicShell
      versionLabel="LBR-v1.0"
      sectionLabels={{
        overview: { ko: "개관", zh: "概述", en: "Overview" },
        scenarios: { ko: "주요 분쟁 유형", zh: "主要争议类型", en: "Common Disputes" },
        procedure: { ko: "진정·소송 절차", zh: "申诉·诉讼程序", en: "Complaint & Litigation" },
        laws: { ko: "관련 법령 조문", zh: "相关法令", en: "Statutes" },
      }}
      title={{
        ko: "노동·임금체불",
        zh: "劳动·欠薪",
        en: "Labor & Unpaid Wages",
      }}
      summary={{
        ko: "임금이 한 달 이상 밀렸다면 시간이 곧 권리입니다. 외국인 근로자도 동일하게 보호받는 절차와 증거 정리 가이드.",
        zh: "工资拖欠满一个月，时间就是权利。外籍劳动者同样受保护的程序与证据整理指南。",
        en: "When wages are unpaid for over a month, time is your right. The procedure that protects foreign workers equally, and how to organize evidence.",
      }}
      overview={{
        ko: "근로기준법은 국적과 체류자격을 묻지 않고 한국에서 일한 모든 사람을 보호합니다. 임금체불·퇴직금 미지급은 형사처벌이 가능한 범죄이며, 고용노동부 진정만으로도 강력한 압박이 됩니다. 다만 외국인 의뢰인의 경우 출국 시한·체류 자격 영향이 동시에 진행되므로, 진정·민사·형사 트랙을 한꺼번에 설계해야 손해가 누락되지 않습니다. 비컴은 임금명세서·근태기록·메신저 대화 등 산재된 증거를 시간순으로 재구성합니다.",
        zh: "《劳动基准法》保护所有在韩工作的人，不问国籍与签证。欠薪·未支付退休金属于刑事犯罪，仅向雇佣劳动部提交申诉本身即构成强力施压。但对外籍当事人而言，出境期限·居留资格影响同步发生，因此应同时设计申诉·民事·刑事三条线，避免损失漏项。BECOME律师事务所将工资明细·考勤记录·聊天记录等零散证据按时间顺序重构。",
        en: "Korea's Labor Standards Act protects every worker regardless of nationality or visa status. Wage and severance non-payment is a criminal offense, and a Ministry of Employment & Labor (MOEL) complaint alone applies strong pressure. For foreign clients, departure timing and visa impact run in parallel, so complaint, civil, and criminal tracks must be designed together. BECOME reconstructs scattered evidence — pay slips, attendance, messages — chronologically.",
      }}
      highlights={{
        ko: ["국적과 체류자격을 묻지 않고", "형사처벌이 가능한 범죄", "진정·민사·형사 트랙을 한꺼번에"],
        zh: ["不问国籍与签证", "刑事犯罪", "申诉·民事·刑事三条线"],
        en: ["regardless of nationality or visa status", "criminal offense", "complaint, civil, and criminal tracks"],
      }}
      scenarios={[
        {
          title: { ko: "월급·퇴직금 미지급", zh: "工资·退休金未支付", en: "Unpaid wages / severance" },
          body: {
            ko: "급여일 익일부터 지연이자 발생. 퇴직 후 14일이 지나면 형사 책임 요건이 성립합니다.",
            zh: "工资日次日起产生迟延利息。离职后超过14日即构成刑事责任要件。",
            en: "Late interest accrues from the day after payday. Once 14 days pass after departure, criminal liability is triggered.",
          },
        },
        {
          title: { ko: "최저임금·연장수당 미지급", zh: "最低工资·加班费未支付", en: "Minimum wage / overtime unpaid" },
          body: {
            ko: "근로계약서 명시 임금이 최저임금보다 낮은 경우, 차액을 소급 청구할 수 있습니다.",
            zh: "劳动合同明示工资低于最低工资时，可追溯主张差额。",
            en: "When the contract wage falls below the minimum, you can claim the gap retroactively.",
          },
        },
        {
          title: { ko: "산업재해 보상 신청", zh: "工伤补偿申请", en: "Industrial accident compensation" },
          body: {
            ko: "체류자격 여부와 무관하게 근로복지공단을 통한 산재 신청이 가능합니다. 사업주의 동의는 필요하지 않습니다.",
            zh: "无论居留资格如何，均可通过劳动福利公团申请工伤。不需要雇主同意。",
            en: "Industrial accident compensation through KCOMWEL is available regardless of visa status — employer consent is not required.",
          },
        },
        {
          title: { ko: "부당해고·근로계약 위반", zh: "不当解雇·劳动合同违反", en: "Unfair dismissal / contract breach" },
          body: {
            ko: "해고일로부터 3개월 이내 노동위원회 구제신청. 정규직·비정규직 모두 가능.",
            zh: "解雇之日起3个月内可向劳动委员会提出救济申请。无论正式或非正式雇员均适用。",
            en: "Apply for relief at the Labor Relations Commission within 3 months of dismissal — applies to regular and non-regular workers alike.",
          },
        },
      ]}
      procedure={[
        {
          title: { ko: "증거 수집", zh: "收集证据", en: "Gather evidence" },
          body: {
            ko: "근로계약서, 통장 입금내역, 출퇴근 기록(지문·CCTV·카톡), 임금명세서를 모읍니다. 한 페이지에 시간순으로 정리.",
            zh: "收集劳动合同、银行入账记录、考勤记录（指纹·CCTV·微信）、工资明细，按时间顺序在一页内整理。",
            en: "Collect employment contract, bank deposit records, attendance logs (fingerprint, CCTV, KakaoTalk), pay slips — organized chronologically on one page.",
          },
        },
        {
          title: { ko: "고용노동부 진정", zh: "向雇佣劳动部提交申诉", en: "MOEL complaint" },
          body: {
            ko: "관할 지방고용노동관서에 진정. 통상 14~21일 내 사업주 출석 조사. 변호인 동행 가능.",
            zh: "向管辖地方雇佣劳动署提交申诉。通常14~21日内雇主出席调查。可由律师陪同。",
            en: "File with the regional MOEL office. Employer typically attends inquiry within 14–21 days; counsel may attend with the worker.",
          },
        },
        {
          title: { ko: "체불금품 확인서 발급", zh: "签发欠薪确认书", en: "Issued unpaid-wage confirmation" },
          body: {
            ko: "근로감독관이 체불 사실을 확인하면 ‘체불금품 확인서’를 발급. 이 문서는 민사·형사 모두에서 핵심 증거.",
            zh: "劳动监督官确认欠薪事实后，签发“欠薪确认书”。该文件是民事与刑事程序的核心证据。",
            en: "Once labor inspectors confirm non-payment, an ‘Unpaid-Wage Confirmation’ is issued — a key piece of evidence in both civil and criminal tracks.",
          },
        },
        {
          title: { ko: "민사 — 임금청구 소송 / 가압류", zh: "民事 — 工资请求诉讼 / 假扣押", en: "Civil — wage claim / provisional attachment" },
          body: {
            ko: "사업주가 지급을 거부하면 가압류로 재산을 보전한 뒤 본안 소송. 소액사건심판으로 빠르게 진행 가능.",
            zh: "雇主拒付时，先以假扣押保全财产，再提起本案诉讼。可通过小额事件审判加速进行。",
            en: "If the employer refuses, secure assets via provisional attachment, then file the claim. Small-claim proceedings expedite the process.",
          },
        },
        {
          title: { ko: "형사 — 근로기준법 위반 고소", zh: "刑事 — 违反劳动基准法告诉", en: "Criminal — Labor Standards Act complaint" },
          body: {
            ko: "민사와 병행 진행. 사업주가 합의를 시도하는 가장 강력한 압박 수단.",
            zh: "与民事并行。是迫使雇主寻求和解的最有力施压手段。",
            en: "Filed in parallel with civil action — the strongest pressure tool to force employer settlement.",
          },
        },
      ]}
      laws={[
        {
          name: { ko: "근로기준법", zh: "劳动基准法", en: "Labor Standards Act" },
          article: { ko: "제36조 (금품청산)", zh: "第36条 (金品清算)", en: "Art. 36 (Final settlement)" },
          body: {
            ko: "사용자는 근로자가 사망 또는 퇴직한 경우 그 지급사유가 발생한 때부터 14일 이내에 임금·보상금·기타 일체의 금품을 지급하여야 합니다.",
            zh: "雇主在劳动者死亡或离职时，须自支付事由发生之日起14日内支付工资·补偿金及其他一切金品。",
            en: "An employer shall pay all wages, compensation, and other amounts within 14 days from the date of departure or death of the worker.",
          },
        },
        {
          name: { ko: "근로기준법", zh: "劳动基准法", en: "Labor Standards Act" },
          article: { ko: "제43조 (임금 지급)", zh: "第43条 (工资支付)", en: "Art. 43 (Payment of wages)" },
          body: {
            ko: "임금은 통화로 직접 근로자에게 그 전액을 매월 1회 이상 일정한 날을 정하여 지급해야 합니다. 위반 시 형사 처벌 대상.",
            zh: "工资应以货币形式，直接向劳动者按全额，每月至少一次按固定日期支付。违反时承担刑事责任。",
            en: "Wages must be paid in currency directly to the worker, in full, at least once a month on a fixed day. Violations carry criminal penalty.",
          },
        },
        {
          name: { ko: "산업재해보상보험법", zh: "工伤补偿保险法", en: "Industrial Accident Compensation Insurance Act" },
          article: { ko: "제5조 (적용 범위)", zh: "第5条 (适用范围)", en: "Art. 5 (Scope)" },
          body: {
            ko: "근로자를 사용하는 모든 사업 또는 사업장에 적용. 외국인 근로자도 동일하게 보호되며, 사업주 미가입이라도 산재 신청과 보상이 가능합니다.",
            zh: "适用于使用劳动者的所有事业或事业场。外籍劳动者同样受保护，即使雇主未参保，仍可申请工伤并获得补偿。",
            en: "Applies to all establishments employing workers. Foreign workers are equally covered; compensation can be claimed even when the employer failed to enroll.",
          },
        },
      ]}
      cases={[
        { ko: "체불 임금 6개월 + 퇴직금 — 진정 → 형사 압박 → 100% 합의 회수", zh: "欠薪6个月+退休金 — 申诉→刑事施压→100%和解收回", en: "6 months unpaid + severance — complaint → criminal pressure → 100% recovered" },
        { ko: "산재 미신고 사업장 — 직접 산재 신청 + 손해배상 별도 청구", zh: "未申报工伤事业场 — 直接申请工伤 + 另行损害赔偿请求", en: "Non-reporting employer — direct accident claim + separate damages action" },
        { ko: "최저임금 미달 차액 24개월 소급 청구 인용", zh: "最低工资差额24个月追溯请求获支持", en: "24 months of minimum-wage shortfall recovered" },
      ]}
      practices={[
        { label: { ko: "체류자격·출입국", zh: "居留资格·出入境", en: "Visa & Immigration" }, to: "/legal/immigration" },
        { label: { ko: "형사 초기대응", zh: "刑事初步应对", en: "Criminal Response" }, to: "/legal/criminal" },
        { label: { ko: "사기·보이스피싱", zh: "诈骗·语音钓鱼", en: "Fraud / Voice Phishing" }, to: "/legal/fraud" },
        { label: { ko: "민사 분쟁", zh: "民事纠纷", en: "Civil Disputes" }, to: "/services" },
      ]}
      cta={{
        ko: {
          eyebrow: "비컴 — BECOME Law Firm",
          h: "임금이 한 달 이상\n밀려 있다면.",
          p: "퇴직 후 14일이 지나면 형사처벌 요건이 성립합니다. 진정·민사·형사를 동시에 설계해 손해를 누락하지 마세요.",
          primary: "온라인 상담 접수",
          secondary: "전화 상담  82-10-2999-6910",
        },
        zh: {
          eyebrow: "BECOME · BECOME Law Firm",
          h: "工资被拖欠\n超过一个月时。",
          p: "离职14日后即构成刑事责任要件。请同步设计申诉·民事·刑事，避免损失漏项。",
          primary: "在线咨询",
          secondary: "电话咨询  82-10-2999-6910",
        },
        en: {
          eyebrow: "BECOME Law Firm",
          h: "When wages are unpaid\nfor over a month.",
          p: "After 14 days from departure, criminal liability is triggered. Design complaint, civil, and criminal tracks together — don't leave damages on the table.",
          primary: "Online consultation",
          secondary: "Call  82-10-2999-6910",
        },
      }}
      ctaCopy={{
        ko: { title: "월급이 밀려 계신가요?\n시한이 지나기 전에 상담하세요.", body: "중국어·한국어 직접 상담. 진정부터 민사·형사까지 한 번에.", btn: "온라인 상담 →", eyebrow: "Need a lawyer?" },
        zh: { title: "工资被拖欠了吗？\n请在期限届满前咨询。", body: "可中文·韩语直接沟通。从申诉到民事·刑事一并处理。", btn: "在线咨询 →", eyebrow: "Need a lawyer?" },
        en: { title: "Wages unpaid?\nConsult before the deadline.", body: "Chinese & Korean direct consultation — from MOEL complaint to civil and criminal tracks.", btn: "Online consultation →", eyebrow: "Need a lawyer?" },
      }}
    />
  );
}

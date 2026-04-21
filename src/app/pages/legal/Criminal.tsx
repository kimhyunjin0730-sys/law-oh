import { LegalTopicShell } from "../../components/legal/LegalTopicShell";

export function Criminal() {
  return (
    <LegalTopicShell
      versionLabel="CRM-v1.0"
      sectionLabels={{
        overview: { ko: "개관", zh: "概述", en: "Overview" },
        scenarios: { ko: "주요 사건 유형", zh: "主要案件类型", en: "Common Cases" },
        procedure: { ko: "초기 대응 5단계", zh: "初步应对 5 步", en: "5-Step Initial Response" },
        laws: { ko: "관련 법령 조문", zh: "相关法令", en: "Statutes" },
      }}
      title={{
        ko: "형사 초기대응",
        zh: "刑事初步应对",
        en: "Criminal Initial Response",
      }}
      summary={{
        ko: "경찰·검찰의 첫 연락이 사건의 결과를 좌우합니다. 진술 전 변호인이 개입해야 하는 이유와 외국인 의뢰인이 반드시 알아야 할 절차.",
        zh: "警方·检方的第一次联系往往决定结果。介绍陈述前必须委托律师介入的原因，以及外籍当事人务必了解的程序。",
        en: "The first contact from police or prosecutors often decides the outcome. Why counsel must intervene before any statement, and what foreign clients must know.",
      }}
      overview={{
        ko: "한국 형사절차에서 가장 결정적인 순간은 ‘피의자 신분으로 처음 진술하는 그 자리’입니다. 한 번 작성된 피의자신문조서는 이후 재판에서 결정적 증거가 됩니다. 외국인 의뢰인의 경우 통역의 누락·오역, 강제퇴거 등 체류 자격 영향이 동시에 진행되므로, 첫 연락을 받은 즉시 변호인을 선임해 진술 범위를 함께 설계해야 합니다. 비컴은 중국어로 사실관계를 직접 청취하고, 형사 결과와 비자 영향을 병렬 관리합니다.",
        zh: "在韩国刑事程序中，最关键的时刻是“以嫌疑人身份首次接受讯问”。一旦讯问笔录形成，将成为审判中的决定性证据。对外籍当事人而言，翻译遗漏或误译、强制遣返等居留资格影响同时发生，因此接到第一次联系后，应立即委托律师并共同设计陈述范围。BECOME律师事务所以中文直接听取事实关系，并行管理刑事结果与签证影响。",
        en: "The most decisive moment in Korean criminal procedure is the first interrogation as a suspect. A signed interrogation record becomes pivotal evidence at trial. For foreign clients, translation gaps and immigration consequences run in parallel, so retaining counsel at first contact and designing the scope of statement together is essential. BECOME interviews clients in Chinese and manages criminal outcome alongside visa impact.",
      }}
      highlights={{
        ko: ["피의자신문조서", "강제퇴거", "첫 연락을 받은 즉시 변호인을 선임"],
        zh: ["讯问笔录", "强制遣返", "立即委托律师"],
        en: ["interrogation record", "immigration consequences", "retaining counsel at first contact"],
      }}
      scenarios={[
        {
          title: { ko: "보이스피싱 전달책 혐의", zh: "电信诈骗取款手嫌疑", en: "Voice phishing courier charge" },
          body: {
            ko: "단순 아르바이트로 알고 가담한 사례가 다수. 고의·인식의 부존재를 입증하는 초기 증거(채팅·송금 패턴) 확보가 결정적입니다.",
            zh: "多数情况下当事人以为是普通兼职而参与。掌握早期证据（聊天记录、汇款模式）以证明无故意是关键。",
            en: "Many participate believing it was a simple part-time job. Early evidence (chats, transfer patterns) proving lack of intent is decisive.",
          },
        },
        {
          title: { ko: "음주운전·교통사고", zh: "酒驾·交通事故", en: "DUI / traffic accidents" },
          body: {
            ko: "F-4·H-2 등 외국인 체류 자격이 직접 영향을 받는 대표 유형. 양형 자료와 출입국 영향을 동시에 준비합니다.",
            zh: "直接影响F-4·H-2等外籍居留资格的典型类型。需同时准备量刑材料与出入境影响应对。",
            en: "Directly affects foreign visa statuses such as F-4 / H-2. We prepare sentencing materials and immigration impact simultaneously.",
          },
        },
        {
          title: { ko: "성범죄·성추행 혐의", zh: "性犯罪·性骚扰嫌疑", en: "Sexual offense allegations" },
          body: {
            ko: "쌍방 진술이 엇갈리는 경우가 많아 수사 초기의 진술 일관성 확보, 디지털 증거 보존이 핵심입니다.",
            zh: "双方陈述往往不一致，因此调查初期保持陈述一致性、保存数字证据是核心。",
            en: "When statements diverge, maintaining consistency early on and preserving digital evidence is critical.",
          },
        },
        {
          title: { ko: "업무상 횡령·배임", zh: "业务上侵占·背信", en: "Corporate embezzlement / breach of trust" },
          body: {
            ko: "회사 내부 자료 확보 시점, 회계 흐름 정리가 사실관계 입증의 출발점입니다.",
            zh: "确保公司内部资料的时点与会计流程的整理是事实关系举证的起点。",
            en: "The timing of internal document preservation and accounting trail organization is the starting point of fact-finding.",
          },
        },
        {
          title: { ko: "정보통신망법 위반", zh: "信息通信网法违反", en: "ICT Network Act violations" },
          body: {
            ko: "명예훼손·모욕·악성댓글 사건. 게시 경위와 IP·계정 사용 주체가 쟁점입니다.",
            zh: "名誉毁损·侮辱·恶意评论案件。发布经过与IP·账号使用主体是争点。",
            en: "Defamation, insult, malicious comment cases. The posting context and IP / account-holder are key issues.",
          },
        },
      ]}
      procedure={[
        {
          title: { ko: "첫 연락 즉시 — 진술 보류", zh: "接到第一次联系 — 暂缓陈述", en: "On first contact — withhold statement" },
          body: {
            ko: "‘일정 잡고 다시 연락드리겠다’는 입장만 전달. 출석 의무는 있어도 진술 의무는 없다는 점을 정확히 활용해야 합니다.",
            zh: "仅传达“稍后再联系敲定日程”。务必准确运用：有出席义务，但无强制陈述义务。",
            en: "Simply respond that you will call back to schedule. Use the fact that attendance is required but immediate statement is not.",
          },
        },
        {
          title: { ko: "변호인 선임 + 사실관계 정리", zh: "委托律师 + 整理事实关系", en: "Retain counsel + organize facts" },
          body: {
            ko: "시간순 사실관계 + 보유 증거 목록을 변호인과 공유. 외국어 자료는 번역본을 함께 준비합니다.",
            zh: "与律师共享按时间顺序的事实关系和持有证据清单。外文资料需附翻译。",
            en: "Share a chronological fact list and evidence inventory with counsel. Provide translations for foreign-language materials.",
          },
        },
        {
          title: { ko: "체류 자격 영향 진단", zh: "居留资格影响诊断", en: "Visa-impact diagnosis" },
          body: {
            ko: "혐의·예상 형량을 기준으로 강제퇴거·체류 자격 취소 가능성을 사전 평가하고, 입증 전략을 형사·출입국 두 축으로 동기화합니다.",
            zh: "依据指控与预期量刑，预先评估强制遣返及居留资格取消可能性，并将举证策略在刑事与出入境两条线上同步推进。",
            en: "Pre-assess deportation / visa-cancellation risk by charge and expected sentence, syncing strategy across criminal and immigration tracks.",
          },
        },
        {
          title: { ko: "조사 동행 + 진술 설계", zh: "陪同调查 + 陈述设计", en: "Counsel-attended interrogation + drafted statement" },
          body: {
            ko: "변호인 입회 하에 진술. 핵심 쟁점에 대한 답변 패턴을 사전 정리해, 통역 누락이 결과를 바꾸지 않도록 합니다.",
            zh: "在律师在场下接受讯问。事先整理核心争点的回答模式，避免翻译遗漏改变案件走向。",
            en: "Statement is given with counsel present. Answer patterns for key issues are prepared in advance so translation gaps cannot alter the outcome.",
          },
        },
        {
          title: { ko: "처분 후 후속 절차", zh: "处分后的后续程序", en: "Post-disposition follow-up" },
          body: {
            ko: "기소·불기소·약식·정식재판 결과에 따른 항고·정식재판청구·항소 일정 관리, 동시에 출입국 신고·이의신청 시한을 함께 추적합니다.",
            zh: "根据起诉·不起诉·略式·正式审判结果，管理抗告·正式审判申请·上诉日程，同时追踪出入境申报·异议申请期限。",
            en: "Manage appeal / formal-trial deadlines based on outcome (indictment, dismissal, summary, trial), while tracking immigration reporting and appeal deadlines.",
          },
        },
      ]}
      laws={[
        {
          name: { ko: "형사소송법", zh: "刑事诉讼法", en: "Criminal Procedure Act" },
          article: { ko: "제244조의2 (변호인의 조력)", zh: "第244条之2 (律师协助)", en: "Art. 244-2 (Right to counsel)" },
          body: {
            ko: "피의자는 변호인의 조력을 받을 권리를 가지며, 변호인은 신문에 참여할 수 있습니다. 외국인 의뢰인의 경우 통역인 선정과 별도로 변호인 입회권이 보장됩니다.",
            zh: "嫌疑人享有获得律师协助的权利，律师可参与讯问。对外籍当事人，除指定翻译人员外，单独保障律师在场权。",
            en: "Suspects have the right to counsel, and counsel may attend interrogation. For foreign clients, the right to counsel is guaranteed independently of interpreter assignment.",
          },
        },
        {
          name: { ko: "형사소송법", zh: "刑事诉讼法", en: "Criminal Procedure Act" },
          article: { ko: "제200조의2 (체포의 통지)", zh: "第200条之2 (逮捕通知)", en: "Art. 200-2 (Notice of arrest)" },
          body: {
            ko: "긴급체포 시 즉시 가족·변호인에 통지. 외국인의 경우 영사관 통지 권리(영사관계협약)도 함께 행사할 수 있습니다.",
            zh: "紧急逮捕时立即通知家属或律师。外籍人士还可一并行使领事通知权（《维也纳领事关系公约》）。",
            en: "Upon emergency arrest, family or counsel must be notified. Foreign nationals may also invoke consular-notification rights under the Vienna Convention.",
          },
        },
        {
          name: { ko: "출입국관리법", zh: "出入境管理法", en: "Immigration Act" },
          article: { ko: "제46조 (강제퇴거의 대상자)", zh: "第46条 (强制遣返对象)", en: "Art. 46 (Grounds for deportation)" },
          body: {
            ko: "금고 이상의 형을 선고받고 사회질서를 해친 자는 강제퇴거 대상에 포함될 수 있습니다. 형사 결과가 확정되기 전에 단계별로 영향 범위를 평가해야 합니다.",
            zh: "被判处禁锢以上刑罚且危害社会秩序者，可能成为强制遣返对象。在刑事结果确定前，应分阶段评估其影响范围。",
            en: "A person sentenced to imprisonment or above and deemed to harm public order may face deportation. Impact must be assessed in stages before the criminal outcome becomes final.",
          },
        },
      ]}
      cases={[
        {
          ko: "보이스피싱 전달책 혐의 무혐의 처분 — 인식 부존재 입증",
          zh: "电信诈骗取款手嫌疑获不起诉处分 — 证明无认识",
          en: "Voice-phishing courier suspicion dismissed — lack of awareness proven",
        },
        {
          ko: "음주운전 약식기소 → 정식재판 청구로 벌금 감액 + 체류 자격 유지",
          zh: "酒驾略式起诉 → 申请正式审判减额罚金，并维持居留资格",
          en: "DUI summary → formal-trial petition: reduced fine + visa preserved",
        },
        {
          ko: "성추행 무고 사건 — 무혐의 + 무고 역고소 진행",
          zh: "性骚扰诬告事件 — 不起诉 + 反诉诬告",
          en: "False sexual-harassment claim — dismissal + counter-complaint for false accusation",
        },
      ]}
      practices={[
        { label: { ko: "체류자격·출입국", zh: "居留资格·出入境", en: "Visa & Immigration" }, to: "/legal/immigration" },
        { label: { ko: "사기·보이스피싱", zh: "诈骗·语音钓鱼", en: "Fraud / Voice Phishing" }, to: "/legal/fraud" },
        { label: { ko: "노동·임금체불", zh: "劳动·欠薪", en: "Labor & Wages" }, to: "/legal/labor" },
        { label: { ko: "민사 분쟁", zh: "民事纠纷", en: "Civil Disputes" }, to: "/services" },
      ]}
      cta={{
        ko: {
          eyebrow: "비컴 — BECOME Law Firm",
          h: "형사 사건의 운명은\n첫 진술에서 갈립니다.",
          p: "조사 일정이 잡히기 전에 변호인을 선임하세요. 진술 범위, 증거 보존, 체류 자격 영향까지 동시에 정리해야 합니다.",
          primary: "온라인 상담 접수",
          secondary: "전화 상담  82-10-2999-6910",
        },
        zh: {
          eyebrow: "BECOME · BECOME Law Firm",
          h: "刑事案件的命运，\n在首次陈述时被决定。",
          p: "在调查日程确定前请委托律师。陈述范围、证据保全与居留资格影响必须同步整理。",
          primary: "在线咨询",
          secondary: "电话咨询  82-10-2999-6910",
        },
        en: {
          eyebrow: "BECOME Law Firm",
          h: "Criminal cases turn\non the first statement.",
          p: "Retain counsel before the interrogation is scheduled. Statement scope, evidence preservation, and visa impact must be aligned in parallel.",
          primary: "Online consultation",
          secondary: "Call  82-10-2999-6910",
        },
      }}
      ctaCopy={{
        ko: { title: "조사 통보를 받으셨나요?\n변호인 선임이 먼저입니다.", body: "중국어·한국어 직접 상담. 사실관계 정리부터 통역·체류 영향까지 한 번에.", btn: "온라인 상담 →", eyebrow: "Need a lawyer?" },
        zh: { title: "收到调查通知了吗？\n请先委托律师。", body: "可中文·韩语直接沟通。从事实整理到翻译、居留影响一并处理。", btn: "在线咨询 →", eyebrow: "Need a lawyer?" },
        en: { title: "Received an investigation notice?\nRetain counsel first.", body: "Chinese & Korean direct consultation — from facts to interpretation to visa.", btn: "Online consultation →", eyebrow: "Need a lawyer?" },
      }}
    />
  );
}

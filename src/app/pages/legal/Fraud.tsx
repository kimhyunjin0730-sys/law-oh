import { LegalTopicShell } from "../../components/legal/LegalTopicShell";

export function Fraud() {
  return (
    <LegalTopicShell
      versionLabel="FRD-v1.0"
      sectionLabels={{
        overview: { ko: "개관", zh: "概述", en: "Overview" },
        scenarios: { ko: "주요 사례 유형", zh: "主要案件类型", en: "Common Cases" },
        procedure: { ko: "초기 대응 절차", zh: "初步应对程序", en: "Initial Response" },
        laws: { ko: "관련 법령 조문", zh: "相关法令", en: "Statutes" },
      }}
      title={{
        ko: "사기·보이스피싱",
        zh: "诈骗·电信诈骗",
        en: "Fraud & Voice Phishing",
      }}
      summary={{
        ko: "피해자 입장과 가해자(전달책) 입장이 동시에 발생할 수 있는 영역. 통장 정지·기소 모두를 푸는 초기 전략.",
        zh: "受害人立场与加害人（取款手）立场可能同时发生的领域。解除银行账户冻结与起诉的初期策略。",
        en: "An area where victim and 'mule' positions can arise at once. The early strategy that lifts both account freezes and indictments.",
      }}
      overview={{
        ko: "보이스피싱·로맨스스캠·투자사기 사건은 대부분 ‘피해자가 가해자로 오인되는 단계’를 거칩니다. 사용 통장이 보이스피싱 자금 흐름에 연루되면 즉시 통장이 정지되고, 본인은 영문도 모른 채 피의자로 조사받습니다. 이 시점에 ‘인식의 부존재’를 입증하는 초기 증거(채팅·송금 패턴·근로계약서)가 결정적입니다. 비컴은 가해 혐의 방어와 피해자 권리 회복(채무부존재 확인·통장 사용 정지 해제)을 한 트랙으로 묶어 처리합니다.",
        zh: "电信诈骗·浪漫诈骗·投资诈骗案件多数会经历“受害人被误认为加害人”的阶段。所用账户被卷入电信诈骗资金流时，账户立即被冻结，本人则在毫不知情下作为嫌疑人接受调查。此时证明“无认识”的早期证据（聊天记录、汇款模式、劳动合同）至关重要。BECOME律师事务所将加害嫌疑防御与受害人权利恢复（债务不存在确认、解除账户冻结）合并为同一轨道处理。",
        en: "Voice phishing, romance, and investment-fraud cases often pass through a stage where the victim is mistaken for the perpetrator. When the account is implicated in fraud cash flow, it's frozen immediately and the holder faces interrogation. Early evidence proving lack of awareness (chats, transfer patterns, employment contracts) is decisive. BECOME handles defense and victim recovery (debt-non-existence claims, account-freeze release) on a single track.",
      }}
      highlights={{
        ko: ["피해자가 가해자로 오인되는 단계", "통장이 정지", "‘인식의 부존재’를 입증하는 초기 증거"],
        zh: ["受害人被误认为加害人", "账户立即被冻结", "证明“无认识”的早期证据"],
        en: ["victim is mistaken for the perpetrator", "account is frozen", "early evidence proving lack of awareness"],
      }}
      scenarios={[
        {
          title: { ko: "보이스피싱 전달책 혐의 + 통장 정지", zh: "电信诈骗取款手嫌疑 + 账户冻结", en: "Voice-phishing courier charge + account freeze" },
          body: {
            ko: "현금 운반·계좌 임대·인출 알바 등으로 가담. 통장 사용이 일시 정지되며, 인식 부존재 입증 + 정지 해제 신청을 동시에 진행해야 합니다.",
            zh: "因现金运输、账户出借、取现兼职等方式参与。账户暂时冻结，须同时进行无认识举证与解冻申请。",
            en: "Involvement via cash courier, account lending, or withdrawal gigs. The account is frozen — proof of unawareness and de-freeze petition must run together.",
          },
        },
        {
          title: { ko: "로맨스스캠 피해", zh: "浪漫诈骗受害", en: "Romance scam victim" },
          body: {
            ko: "결혼·투자 명목으로 송금 후 연락 두절. 송금 흐름·SNS 대화·해외 송금 정보 등을 정리해 형사 고소 + 민사 회수.",
            zh: "以结婚·投资名义汇款后失联。整理汇款流向·社交对话·跨境汇款信息后，进行刑事告诉 + 民事追偿。",
            en: "Funds sent on marriage / investment pretext, then radio silence. Map transfer flow, SNS chats, and cross-border records — criminal complaint + civil recovery.",
          },
        },
        {
          title: { ko: "코인·주식 투자사기", zh: "虚拟货币·股票投资诈骗", en: "Crypto / stock investment fraud" },
          body: {
            ko: "리딩방·고수익 보장 광고. 가입 시점 자료, 출금 거부 시점, 운영자 인적사항이 핵심 증거.",
            zh: "投顾群组·保证高收益的广告。注册时点资料、出金被拒时点、运营者身份信息为核心证据。",
            en: "Trading-room recruits, guaranteed-yield ads. Sign-up records, withdrawal-denial timestamps, and operator identities are key evidence.",
          },
        },
        {
          title: { ko: "온라인 중고거래 사기", zh: "在线二手交易诈骗", en: "Online second-hand fraud" },
          body: {
            ko: "동일 계좌·전화번호의 사기 신고 이력 조회 가능. 소액이라도 형사 고소가 가장 빠른 회수 경로.",
            zh: "可查询同一账户·号码的诈骗举报历史。即使金额小，刑事告诉也是最快的追偿路径。",
            en: "Search prior fraud reports on the same account / phone. Even small claims, criminal complaint is the fastest recovery path.",
          },
        },
      ]}
      procedure={[
        {
          title: { ko: "통장 정지 통보 시 — 즉시 변호인 선임", zh: "收到账户冻结通知 — 立即委托律师", en: "On freeze notice — retain counsel immediately" },
          body: {
            ko: "은행은 사유를 자세히 알려주지 않습니다. 변호인이 정지 사유와 관련 사건번호를 확인해야 다음 단계가 가능합니다.",
            zh: "银行不会详细告知冻结原因。须由律师查明冻结事由与相关案件编号，方可进行下一步。",
            en: "Banks won't disclose details. Counsel must identify the freeze reason and related case number before any next step.",
          },
        },
        {
          title: { ko: "사실관계 정리 + 인식 부존재 증거 수집", zh: "整理事实关系 + 收集无认识证据", en: "Organize facts + gather unawareness evidence" },
          body: {
            ko: "구인 광고, 채팅, 본인 계좌 입출금 흐름, 자신이 받은 보수 비율 등을 시간순으로 정리. 단순 가담의 경우 ‘아르바이트로 인식’한 사실의 일관성이 핵심.",
            zh: "按时间顺序整理招聘广告、聊天、本人账户的进出明细、所获报酬比例等。单纯参与时，“认知为兼职”的事实一致性最为关键。",
            en: "Chronologically organize job ads, chats, account flow, and compensation share. For passive involvement, consistency of the 'thought it was a part-time job' narrative is decisive.",
          },
        },
        {
          title: { ko: "수사기관 출석 + 입회 진술", zh: "出席侦查机关 + 律师在场陈述", en: "Attend interrogation with counsel" },
          body: {
            ko: "변호인 입회 하 진술. 통장 정지 해제 신청은 진술 직후 또는 무혐의 처분 시점에 맞춰 제출.",
            zh: "在律师在场下陈述。解除账户冻结申请应在陈述结束或获不起诉处分时提交。",
            en: "Statement with counsel present. Account-freeze release petition is filed right after the statement or upon dismissal.",
          },
        },
        {
          title: { ko: "민사 — 채무부존재확인 / 가압류", zh: "民事 — 债务不存在确认 / 假扣押", en: "Civil — debt non-existence / attachment" },
          body: {
            ko: "피해자라면 가해자 자산에 가압류, 본안 손해배상으로 회수. 가해 혐의를 받은 경우라면 ‘피해자가 청구한 채무의 부존재’를 본안에서 다툼.",
            zh: "若为受害人，对加害人资产假扣押，本案损害赔偿追偿。若被指控加害，则在本案中争辩“受害人主张债务不存在”。",
            en: "Victims attach the perpetrator's assets and recover via damages. Accused parties contest 'non-existence of debt claimed by victim' in the main proceeding.",
          },
        },
      ]}
      laws={[
        {
          name: { ko: "형법", zh: "刑法", en: "Criminal Act" },
          article: { ko: "제347조 (사기)", zh: "第347条 (诈骗)", en: "Art. 347 (Fraud)" },
          body: {
            ko: "사람을 기망하여 재물의 교부를 받거나 재산상의 이익을 취득한 자는 10년 이하의 징역 또는 2천만원 이하의 벌금에 처합니다.",
            zh: "以欺骗手段使他人交付财物或取得财产上利益的人，处10年以下徒刑或2000万韩元以下罚金。",
            en: "Anyone who, by deceit, obtains property or gains pecuniary benefit is punished by up to 10 years' imprisonment or a fine up to KRW 20 million.",
          },
        },
        {
          name: { ko: "전기통신금융사기 피해 방지 및 환급에 관한 특별법", zh: "电信通讯金融诈骗受害防止及返还特别法", en: "Special Act on Voice-Phishing Compensation" },
          article: { ko: "제4조 (지급정지)", zh: "第4条 (支付停止)", en: "Art. 4 (Payment suspension)" },
          body: {
            ko: "금융회사는 사기 피해자의 신고가 있는 경우 즉시 해당 계좌의 지급을 정지하여야 합니다. 정지 해제는 별도 절차를 거칩니다.",
            zh: "金融机构在受害人申报后须立即停止该账户的支付。解除停止须经另行程序。",
            en: "Financial institutions must immediately suspend payments from the reported account upon victim notification — release follows a separate procedure.",
          },
        },
        {
          name: { ko: "형사소송법", zh: "刑事诉讼法", en: "Criminal Procedure Act" },
          article: { ko: "제232조 (고소의 취소)", zh: "第232条 (告诉撤回)", en: "Art. 232 (Withdrawal of complaint)" },
          body: {
            ko: "피해 회복 또는 합의를 통해 고소가 취소되면 검찰은 친고죄에 대해 공소를 제기할 수 없으며, 양형에 유리한 자료가 됩니다.",
            zh: "通过赔偿或和解撤回告诉时，检察机关对亲告罪不得提起公诉，并成为有利的量刑资料。",
            en: "When a complaint is withdrawn through restitution or settlement, the prosecution cannot indict offenses requiring complaint, and it serves as favorable sentencing material.",
          },
        },
      ]}
      cases={[
        { ko: "보이스피싱 전달책 혐의 무혐의 + 통장 사용 정지 해제", zh: "电信诈骗取款手嫌疑获不起诉 + 解除账户冻结", en: "Voice-phishing courier dismissed + account-freeze lifted" },
        { ko: "로맨스스캠 1.2억원 — 형사 고소 후 가압류로 60% 회수", zh: "浪漫诈骗1.2亿韩元 — 告诉后通过假扣押追回60%", en: "Romance scam KRW 120M — 60% recovered via attachment after complaint" },
        { ko: "코인 리딩방 사기 — 운영자 신원 특정 후 사기죄 기소 + 손해배상", zh: "虚拟货币投顾群诈骗 — 锁定运营者身份后以诈骗罪起诉 + 损害赔偿", en: "Crypto trading-room scam — operator identified, fraud indictment + damages" },
      ]}
      practices={[
        { label: { ko: "체류자격·출입국", zh: "居留资格·出入境", en: "Visa & Immigration" }, to: "/legal/immigration" },
        { label: { ko: "형사 초기대응", zh: "刑事初步应对", en: "Criminal Response" }, to: "/legal/criminal" },
        { label: { ko: "노동·임금체불", zh: "劳动·欠薪", en: "Labor & Wages" }, to: "/legal/labor" },
        { label: { ko: "민사 분쟁", zh: "民事纠纷", en: "Civil Disputes" }, to: "/services" },
      ]}
      cta={{
        ko: {
          eyebrow: "비컴 — BECOME Law Firm",
          h: "통장이 정지됐다면\n해명보다 입증입니다.",
          p: "수사기관에 ‘몰랐다’는 말만으로는 부족합니다. 채팅·송금 패턴·근로계약 등 인식 부존재 증거를 같이 정리해야 합니다.",
          primary: "온라인 상담 접수",
          secondary: "전화 상담  82-10-2999-6910",
        },
        zh: {
          eyebrow: "BECOME · BECOME Law Firm",
          h: "账户被冻结时，\n比辩解更需要举证。",
          p: "对侦查机关仅说“不知情”是不够的。需同时整理聊天·汇款模式·劳动合同等无认识证据。",
          primary: "在线咨询",
          secondary: "电话咨询  82-10-2999-6910",
        },
        en: {
          eyebrow: "BECOME Law Firm",
          h: "When the account is frozen,\nit's about evidence, not excuses.",
          p: "Telling investigators 'I didn't know' isn't enough. Chats, transfer patterns, and employment contracts must be organized together as proof of unawareness.",
          primary: "Online consultation",
          secondary: "Call  82-10-2999-6910",
        },
      }}
      ctaCopy={{
        ko: { title: "통장 정지 통보를 받으셨나요?\n변호인 선임이 먼저입니다.", body: "중국어·한국어 직접 상담. 정지 사유 확인부터 해제 신청까지.", btn: "온라인 상담 →", eyebrow: "Need a lawyer?" },
        zh: { title: "收到账户冻结通知了吗？\n请先委托律师。", body: "可中文·韩语直接沟通。从查明冻结事由到提交解除申请。", btn: "在线咨询 →", eyebrow: "Need a lawyer?" },
        en: { title: "Account-freeze notice?\nRetain counsel first.", body: "Chinese & Korean direct consultation — from freeze cause to release petition.", btn: "Online consultation →", eyebrow: "Need a lawyer?" },
      }}
    />
  );
}

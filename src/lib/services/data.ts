/**
 * Service practice-area data — drives the index list (Services.tsx) and the
 * per-service detail page (ServiceDetail.tsx). Each entry carries:
 *  - id       : URL slug (/services/:id)
 *  - title    : Korean H1
 *  - cn       : Chinese parenthetical for hero
 *  - eyebrow  : ALL-CAPS English label above the title
 *  - blurb    : one-line summary (used on index card)
 *  - overview : multi-paragraph long-form intro
 *  - sections : sub-categories with bullet items
 *  - highlight: substring inside title to wrap with the buttercream mark
 *  - stamp    : 2-character stamp shown on hero visual
 *  - kanji    : large background kanji on hero visual
 *  - cases    : (optional) placeholder for related cases shown in sidebar
 */

export interface ServiceSection {
  /** Sub-category label rendered as an H3 inside the detail page. */
  title: string;
  /** Each item: leading bold phrase, optional ": " then trailing description. */
  items: string[];
}

export interface ServiceDetail {
  id: string;
  title: string;
  cn: string;
  eyebrow: string;
  blurb: string;
  overview: string[];
  sections: ServiceSection[];
  highlight: string;
  stamp: string;
  kanji: string;
  cases?: string[];
}

export const SERVICES: ServiceDetail[] = [
  {
    id: "immigration",
    title: "체류 자격 · 출입국 법률 자문",
    cn: "签证 · 出入境",
    eyebrow: "VISA · IMMIGRATION",
    blurb: "형사 사건 수임 즉시 체류 자격에 미치는 영향을 병행 분석하여 전략을 수립합니다.",
    highlight: "출입국",
    stamp: "韩桥",
    kanji: "入",
    overview: [
      "외국인의 한국 체류는 형사·민사 사건의 결과만큼이나 출입국 절차에 의해 결정됩니다. 한교는 사건 수임 단계에서부터 체류 자격에 미치는 영향을 병행 분석하고, 강제퇴거·출국명령·체류기간 만료 등 모든 시한을 의뢰인의 사건 흐름과 함께 관리합니다.",
      "F-4·F-5·F-6·H-2·D-2·D-10 등 주요 체류자격의 신청·연장·변경, 거부 처분 이의신청 7일 시한, 행정심판·행정소송 90일 시한까지 — 단계별로 어떤 서류가 필요하고 어떤 위험이 잠재하는지 중국어로 직접 설명드립니다.",
    ],
    sections: [
      {
        title: "체류 자격 신청 · 연장 · 변경",
        items: [
          "F-4 (재외동포): 본인·부·조부모 제적등본 입증, 신원증명",
          "H-2 (방문취업): 만 25세 이상 한국계 동포 자격 확인 및 재입국 전략",
          "F-5 (영주): F-2 등에서 5년 체류 후 영주 전환 요건 진단",
          "F-6 (결혼이민): 혼인관계·소득·주거 요건 충족 자문",
          "D-2/D-10: 유학·구직 비자 발급 및 연장",
        ],
      },
      {
        title: "거부 · 강제퇴거 처분 대응",
        items: [
          "거부 처분 이의신청: 통보일로부터 7일 이내 사유서 작성·제출",
          "행정심판 · 행정소송: 안 날부터 90일 이내 청구·제기",
          "강제퇴거 명령 집행정지: 본안 사건 진행 중 출국 회피",
          "보호일시해제 신청: 보호 기간 중 의료·가족 사유 해제",
          "출입국 단속 긴급 대응: 위챗 24시간 상담",
        ],
      },
      {
        title: "형사 처벌과 체류자격 동시 분석",
        items: [
          "범죄 혐의 단계에서 체류 자격 취소 가능성 사전 진단",
          "벌금형·집행유예가 체류 자격에 미치는 영향 분석",
          "강제퇴거 사유 해당 여부 검토 및 회피 전략 수립",
        ],
      },
    ],
    cases: [
      "F-6 결혼이민 거부 처분, 이의신청을 통한 허가 전환",
      "강제퇴거명령 집행정지 후 본안 취소 판결 확보",
      "H-2 방문취업 자격 취소 처분 행정소송 승소",
    ],
  },
  {
    id: "criminal",
    title: "형사 사건 방어",
    cn: "刑事案件",
    eyebrow: "CRIMINAL DEFENSE",
    blurb: "억울한 혐의는 벗고, 피해는 신속히 구제받을 수 있도록 치밀하게 조력합니다.",
    highlight: "형사 사건",
    stamp: "防御",
    kanji: "刑",
    overview: [
      "형사 사건은 사실관계의 미세한 차이가 결과를 가른다. 한교는 의뢰인의 진술과 증거를 한국어로 충실히 정리하면서, 중국어로는 본인의 상황을 깊이 공감해 듣습니다. 통역을 거치지 않기에 미묘한 사실관계의 뉘앙스가 누락되지 않습니다.",
      "보이스피싱 전달책, 사기, 횡령, 정보통신망법 위반, 성범죄, 음주운전 등 — 각 혐의별로 고의성·인식·인과관계의 핵심 쟁점을 분석하고 무혐의·불기소·집행유예를 목표로 변론 전략을 수립합니다.",
    ],
    sections: [
      {
        title: "재산범죄 방어",
        items: [
          "보이스피싱 전달책 혐의: 고의성 부존재 입증을 통한 불기소 / 무죄",
          "투자 사기: 주식·코인·로맨스스캠 피해 고소 및 합의 협상",
          "업무상 횡령: 회계 자료 분석을 통한 불법영득의사 부존재 입증",
          "사기 혐의 방어: 기망행위·재산 처분의 인과관계 다툼",
        ],
      },
      {
        title: "정보·성범죄 · 교통",
        items: [
          "정보통신망법 위반: 관리자 권한 남용·개인정보 무단 열람 대응",
          "성범죄 혐의 방어: 강제추행 등 사실관계 분석 및 무고 가능성 입증",
          "교통사고 · 음주운전: 치상·음주 혐의와 체류자격 영향 동시 분석",
        ],
      },
      {
        title: "외국인 형사 특화",
        items: [
          "한국어 미숙한 의뢰인을 위한 중국어 직접 변론·면담",
          "수사 단계 진술서 한·중 양문 작성",
          "중국 가족·기업과의 합의 협상 및 한·중 진정서 작성",
        ],
      },
    ],
    cases: [
      "보이스피싱 전달책 혐의 무혐의 처분",
      "업무상 횡령 혐의 수사 단계 불기소 방어",
      "정보통신망법 위반 사건 집행유예 확보",
    ],
  },
  {
    id: "civil",
    title: "민사 · 금융 사건",
    cn: "民事 · 金融案件",
    eyebrow: "CIVIL · FINANCE",
    blurb: "복잡한 금전 분쟁에서 의뢰인의 재산권을 끝까지 보호합니다.",
    highlight: "금융",
    stamp: "权利",
    kanji: "权",
    overview: [
      "민사·금융 사건은 입증 자료의 깊이가 결과를 결정합니다. 한교는 통장 거래내역, 계약서, 메신저 기록 등 산재된 증거를 시간순으로 재구성하고, 의뢰인의 한·중 양국 자료를 통합 분석합니다.",
      "보이스피싱 피해자의 채무부존재 확인, P2P 금융 연대보증, 중고차 3자 사기 등 — 의뢰인이 가해자가 아닌 피해자임을 입증하는 데 필요한 모든 사실관계를 변호사가 직접 추적합니다.",
    ],
    sections: [
      {
        title: "보이스피싱 · 채무 방어",
        items: [
          "채무부존재확인 소송: 보이스피싱 계좌 연루 피해자의 민사 책임 방어",
          "지급명령 이의신청: 14일 시한 내 답변서 제출",
          "강제집행 정지 신청: 가압류·가처분 대응",
        ],
      },
      {
        title: "금융 분쟁",
        items: [
          "P2P 금융 사건: 온라인투자연계금융 연대보증채무 청구 사건 대리",
          "암호화폐 거래 분쟁: 거래소 책임·손해배상 청구",
          "투자 손실 회수: 불완전판매·설명의무 위반 입증",
        ],
      },
      {
        title: "거래 사기 · 손해배상",
        items: [
          "중고차 3자 사기: 선의의 매수인 보호 법리 및 원고 과실 입증",
          "손해배상 청구 방어: 직원의 방조 책임 부존재 입증",
          "물품 거래 분쟁: 한·중 무역 거래 대금 청구·반환",
        ],
      },
    ],
    cases: [
      "보이스피싱 연루자 채무부존재확인 소송 승소",
      "P2P 연대보증채무 청구 사건 성공적 방어",
      "중고차 3자 사기 사건 원고 과실 입증",
    ],
  },
  {
    id: "corporate",
    title: "대중(對中) 계약 · 기업 자문",
    cn: "涉华合同 · 企业",
    eyebrow: "CHINA-ORIENTED CORPORATE",
    blurb: "중국어 원문을 기준으로 리스크를 직접 분석하고 검토합니다.",
    highlight: "기업 자문",
    stamp: "合同",
    kanji: "约",
    overview: [
      "한국 변호사가 중국어 원문 계약서를 직접 검토할 수 있는 사무소는 흔치 않습니다. 한교는 번역본이 아닌 원문 기준으로 조항의 모호성과 한국 법상의 해석 위험을 동시에 분석합니다.",
      "한·중 수출입 계약, 비영리 법인 설립, 지식재산권 침해 분쟁 등 — 양국 법률체계가 충돌하는 지점에서 어느 쪽이 우선하는지, 어느 법원에 제소할지를 함께 설계합니다.",
    ],
    sections: [
      {
        title: "계약 검토 · 작성",
        items: [
          "한·중 수출입 계약: 중국어 원문 기준으로 리스크 직접 분석",
          "이중언어 문서: 한·중·영 다중언어 법률 문서 작성",
          "MOU · NDA: 비밀유지·경업금지·중재조항 검토",
        ],
      },
      {
        title: "기업 · 단체 자문",
        items: [
          "비영리 법인 자문: 재단법인 설립 정관 작성 및 양국 운영 구조 자문",
          "법인 설립: 한국 진출 중국 기업 설립·세무 자문",
          "주주 분쟁: 의결권·이익배당·회계열람권 다툼 대리",
        ],
      },
      {
        title: "분쟁 해결",
        items: [
          "중국 기업과의 대금 미지급, 지식재산권 침해 소송 자문",
          "중재 절차: KCAB · CIETAC · ICC 중재 신청",
          "외국 판결 승인 · 집행: 양국 판결 효력 및 집행 가능성 검토",
        ],
      },
    ],
    cases: [
      "한·중 무역 대금 미지급 사건 중재 승소",
      "지식재산권 침해 손해배상 청구 합의 종결",
      "재단법인 설립 정관 자문 (양국 운영 구조)",
    ],
  },
  {
    id: "family",
    title: "가사 · 상속 사건",
    cn: "家事 · 继承",
    eyebrow: "FAMILY · INHERITANCE",
    blurb: "국경을 넘나드는 가족 간의 문제를 합리적으로 해결합니다.",
    highlight: "가사",
    stamp: "家事",
    kanji: "家",
    overview: [
      "한·중 가족 사건은 단순한 이혼이나 상속이 아닙니다. 양국 법원의 판결 효력, 자녀의 국적, 한국 내 재산과 중국 내 재산의 분할까지 — 두 법체계가 동시에 작동합니다.",
      "한교는 한국 가사 절차를 진행하면서 중국 법원 판결의 한국 내 효력을 사전에 검토하고, 의뢰인이 양국에서 동일한 결과를 얻을 수 있도록 통합 전략을 수립합니다.",
    ],
    sections: [
      {
        title: "이혼 · 양육",
        items: [
          "이혼 및 위자료: 유리한 재산분할을 위한 기준시점 확정 전략",
          "양육권·면접교섭권: 자녀 거소·국적과 함께 분석",
          "양육비 청구·이행: 국제 양육비 이행확보 절차",
        ],
      },
      {
        title: "양국 판결 효력 · 집행",
        items: [
          "중국 법원 이혼 판결의 한국 내 효력 및 집행 가능성 검토",
          "한국 판결의 중국 집행: 한·중 사법공조 조약 활용",
          "외국 판결 승인 신청: 가정법원 절차 대리",
        ],
      },
      {
        title: "상속 · 유언",
        items: [
          "중국 소재 재산에 대한 한국 내 상속 절차 안내",
          "유언장 효력 검토: 양국 형식 요건 및 적용 법률 분석",
          "상속 포기·한정승인: 3개월 시한 관리",
        ],
      },
    ],
    cases: [
      "중국 법원 이혼 판결의 한국 내 승인 신청 인용",
      "한·중 양국 재산분할 사건 합의 종결",
      "중국 소재 부동산 한국 상속 절차 자문",
    ],
  },
];

export function getServiceById(id: string): ServiceDetail | undefined {
  return SERVICES.find((s) => s.id === id);
}

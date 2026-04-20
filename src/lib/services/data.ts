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

export const SERVICES = {
  ko: [
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
            "성매매 알선 혐의 방어: 사실관계 분석 및 혐의 부인 전략 수립",
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
            "자동차 정비 과실: 휠 볼트 정비 과실 손해배상 청구 방어",
            "물품 거래 분쟁: 한·중 무역 거래 대금 청구·반환",
          ],
        },
        {
          title: "기타 민사 사건",
          items: [
            "침수 피해 사건: 공용 하수관 역류 일부채무부존재확인 소송 방어",
            "명의개서 소송: 명의개서청구 소송 관련 특별대리인 선임 등 자문",
            "전환사채 약정금 청구: 전환사채 관련 약정금 청구 소송 대리",
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
  ],
  zh: [
    {
      id: "immigration",
      title: "居留资格 · 出入境法律顾问",
      cn: "签证 · 出入境",
      eyebrow: "VISA · IMMIGRATION",
      blurb: "在接手刑事案件的同时，并行分析对居留资格的影响并制定应对策略。",
      highlight: "出入境",
      stamp: "韩桥",
      kanji: "入",
      overview: [
        "外国人在韩国的居留，既取决于刑事或民事案件的结果，也由出入境程序全权决定。韩桥律师事务所在接手案件阶段，便会并行分析对居留资格的影响，同时结合案件进展全程管理强制遣返、出境命令、居留期满等所有的法定应对期限。",
        "从F-4、F-5、F-6、H-2、D-2、D-10等主要签证的申请·延期·变更，到针对拒签决定需在7日内提起的异议申请，直至90日内提起的行政法庭诉讼，我们将阶段性地用中文为您直接解释：何时需要什么文件、存在什么潜在风险。",
      ],
      sections: [
        {
          title: "居留资格 申请 · 延期 · 变更",
          items: [
            "F-4 (在外同胞): 本人·父亲·祖父母除籍副本举证及身份证明",
            "H-2 (访问就业): 满25岁以上韩裔同胞资格确认及再入境策略",
            "F-5 (永驻): 从F-2等签证居留满5年后转永驻权要件诊断",
            "F-6 (结婚移民): 满足婚姻存续、收入条件、居住条件之法律顾问服务",
            "D-2/D-10: 留学生或求职签证的发放及延期",
          ],
        },
        {
          title: "拒发签证 · 强制遣返 应对策略",
          items: [
            "拒发处分异议申请: 接到通知之日起7日内起草并提交事由书",
            "行政复议 · 行政诉讼: 自知晓处分之日起90日内请求及起诉",
            "强制遣返命令执行中止: 在主诉案件处理期间避免立即被遣返出境",
            "保护期限解除申请: 在保护管留期间以医疗或家庭事由申请解除羁押",
            "应对出入境临管查处: 提供24小时微信紧急应对咨询",
          ],
        },
        {
          title: "刑事处罚与居留资格之并行分析",
          items: [
            "涉嫌犯罪初期阶段即可提前评估被吊销签证的可能性",
            "分析罚金刑罚、缓刑结果对维持居留资格之影响",
            "审查是否符合被强制遣返条件，制定合规的规避策略",
          ],
        },
      ],
      cases: [
        "成功代理因F-6结婚移民被拒签提出异议并转为许可案例",
        "先促使强制退去令中止执行后取得本案诉讼撤销判决的成功案例",
        "成功代理因H-2访问就业资格被撤销提起的行政诉讼胜诉",
      ],
    },
    {
      id: "criminal",
      title: "刑事案件辩护",
      cn: "刑事案件",
      eyebrow: "CRIMINAL DEFENSE",
      blurb: "致力于洗雪冤屈，迅速提供法律援助，切实减低当事人损害。",
      highlight: "刑事案件",
      stamp: "防御",
      kanji: "刑",
      overview: [
        "刑事案件的成败，往往系于事实细节的毫厘之差。韩桥律师事务所在以韩语忠实整理全盘陈述与物证的同时，并以中文深刻切身感受这背后的隐情与无奈。因为不经过第三方翻译，所以事实关系中的微妙语感才能被精准地传达给法官和检察官。",
        "诸如沦为语音诈骗中间人、涉嫌欺诈或贪污、违反网络通讯法、涉嫌性犯罪或酒驾肇事等各类型嫌疑，我们都会深度剥离故意性、认知程度及因果关系三大核心争议点，并确立以无嫌疑、不起诉、缓刑为目标的有效辩护策略。",
      ],
      sections: [
        {
          title: "财产犯罪防卫",
          items: [
            "防范化身诈骗取款人: 通过举证缺乏故意性促成免于起诉或无罪判决",
            "投资欺诈维权: 对借股票/数字货币乃至杀猪盘设局进行起诉并主持和解协商",
            "职场贪污: 通过对账单分析举证无非法占有之意图",
            "欺诈罪名辩护: 就其实际欺瞒行为和财产受损这两方面是否有必然关联提出质疑",
          ],
        },
        {
          title: "信息通讯法及性犯罪・交通刑事防御",
          items: [
            "违犯信息通讯法： 擅用管理员权限/擅自查阅他人隐私记录被诉应对",
            "涉及性犯罪抗辩: 抽丝剥茧事实陈述，积极发掘仙人跳及诬告之证据并举证",
            "有关拉皮条组织卖淫嫌疑: 梳理前因后果从事实角度实施无罪辩护策略",
            "交通肇事 · 醉驾判定: 同时评估人身伤害程度与醉酒量刑对延长居留的后续影响",
          ],
        },
        {
          title: "专供外国人刑事案件之特别服务",
          items: [
            "为韩语欠佳客户以其中文流利直接沟通和法庭答辩",
            "在警检调查期间同步撰写上呈双语调查供词",
            "代为向其驻中亲属乃至其就职中国企业发出和解提案",
          ],
        },
      ],
      cases: [
        "使涉嫌语音诈骗取钱车手免于起诉案",
        "在调查阶段即阻截职务侵占罪不被检方起诉案",
        "在违犯通信网络安全法一案中获从轻缓刑",
      ],
    },
    {
      id: "civil",
      title: "民事 · 金融案件",
      cn: "民事 · 金融案件",
      eyebrow: "CIVIL · FINANCE",
      blurb: "不论金钱纠纷多么盘根错节，我们都将捍卫您的财产权到底。",
      highlight: "金融",
      stamp: "权利",
      kanji: "权",
      overview: [
        "民事和金融案件的核心要义是在于深挖举证资料的厚重质量来决定成败。韩桥能够按时间顺序精准重构散乱的出入账记录明细表、复杂的商用合同及微信通讯记录，并综合分析当事人在中、韩两地留下的痕迹与资料。",
        "像是针对误入电信诈骗圈套的不知情网主主张'债务不存在'之确认，反驳P2P借贷网贷引发连带保证偿付责任，剖析倒卖二手车牵涉到第三方诈欺陷阱等等——为了证明您不是肇事者也是受害人这一立场，律师将不遗余力为您搜证还原真相。",
      ],
      sections: [
        {
          title: "防范诈骗 · 减免债务牵涉",
          items: [
            "确认无债权债务诉讼: 代受连累卷入洗钱账户的所谓“人头”或“主犯”防范民事担责索赔",
            "异议驳回借款支付令: 将坚守必须于接收14天期限内提交辩答函",
            "解除资产强制扣押: 代向法庭提出停止由于遭受假扣押及预先禁令造成财产流失",
          ],
        },
        {
          title: "金融纠纷处理",
          items: [
            "在线互联网金融案: 代办向网络贷款P2P金融借口主张偿还连带担保欠费之涉讼事宜",
            "币圈炒币虚拟资产交易: 追究交易所或网络集资头目之欺诈和赔偿损害",
            "讨回资本投资亏损: 着力查找有无违反投资须知等说明告知义务漏洞为翻盘基点",
          ],
        },
        {
          title: "欺诈交易及主张违约损害的抗辩",
          items: [
            "买卖二手车遭三方黑中介坑骗: 从《受善意买主明文保护之法理》与主张原始车主本身也有失职",
            "推脱赔偿损失连带责任索偿: 员工并非故意帮凶则不存在所谓的协助失误承担过错连带",
            "由于修脚失误或配件不良索偿: 代为应对因修理汽修厂轮胎螺栓不当产生理赔追诉",
            "跨境货款物资拖欠争议: 中韩商品跨境进出口未结款追讨之交涉和主张",
          ],
        },
        {
          title: "涉猎的其他民事",
          items: [
            "下水渗漏涉险及保险范围外的损害: 为遭受漏水倒灌索赔事件主张非本身权责",
            "更改更名及身份挂靠名册变造索诉: 针对指定相关被起诉方之选任及出庭程序代理",
            "追缴非上市可转债本息连带违约款金请求",
          ],
        },
      ],
      cases: [
        "证明电信诈骗冻结账号名义上的受害者不负民事债权确认书获得法庭认可胜诉",
        "作为挂靠法人为网贷平台保证偿付代位要求免责之辩护",
        "二手车三方买卖黑幕诈欺受害者连带责任免除的无主观故意确证辩护胜诉",
      ],
    },
    {
      id: "corporate",
      title: "涉华 合同 · 企业顾问服务",
      cn: "涉华合同 · 企业",
      eyebrow: "CHINA-ORIENTED CORPORATE",
      blurb: "从原汁原味的中文契约文本入手，直击其隐藏危机与风险规避。",
      highlight: "企业顾问服务",
      stamp: "合同",
      kanji: "约",
      overview: [
        "由韩国大律师本人不借助翻译器和字典直接对长篇幅的正式中文法律合同条文咬文嚼字并逐条审阅批注在同业内尤显稀贵难得。这不仅仅只是停留在语句翻译层面，同时结合大韩民国商法与法院一贯判定原则和偏重解析那暗藏在文字下的字眼和含糊的违约界定条款风险。",
        "除了中韩间大宗进出口代理与合作分销，跨国商会分会的非官方民办财团设立、再到针对在韩恶意抢注知识产权专利商标或因违规盗用仿制等纷争之预防与应对… 在冲突之际以孰边为主、在哪里起诉才能达到自身利益最大化，这些方方面面韩桥也将尽善尽美全程统筹构思及把控。",
      ],
      sections: [
        {
          title: "商用双语合约文件代拟 · 评估修改",
          items: [
            "进出口商业承揽合作契书等： 以母语同源级别水平，在原版汉文底稿基础上进行潜在履约障碍直陈并提意见纠偏",
            "制作中英韩三语版本交期定金细则的备忘录意向文件（MOU/NDA）",
            "涵盖防患技术外流之商业保密/限制受雇人再就职或开设同业（竞业禁止）乃至当事人互有争议时选择提交公断委仲裁的文案审查",
          ],
        },
        {
          title: "商业经济及社团财团设立运作法人挂靠顾问",
          items: [
            "针对类似韩中亲善友好或贸易振兴合作交流协会团体/非营利福利财团在两国筹备运营上及设立章程上法律指点",
            "着眼并服务赴韩直接落地内资/外商独资及借名或合作注资开设合营企业进行公司设立·法人治理之财务纳税统筹",
            "股东对合资管理控制权抗辩、公司表决权纷争/利润分配/行使财务账簿资料质询等事宜主张法定权益代理",
          ],
        },
        {
          title: "跨国法律纷争解决之执行",
          items: [
            "以企业律师身份代理向中方贸易及合作服务未结欠款发出支付勒令，发起专利设计著作侵犯索诉的保全应对措施",
            "启动仲裁申请及辩护: 提供包含对韩国大韩商事仲裁院（KCAB），中原对外经贸仲裁委员会（CIETAC），或是向国际商会仲裁院(ICC仲裁委)申请相关支持",
            "两国终局司法判定或公断结果之双边司法互承认（请求本国法院允许）及实际对隐患财产能否强制实行(查封与变现划拨)判定执行可能",
          ],
        },
      ],
      cases: [
        "通过商事纠纷调停中心，向未交付中韩双边进出口货品之中国供货商追缴还款并在抗辩裁决中获得胜诉裁决判定书",
        "作为韩方法人知识产权人对仿制仿冒侵权方发起损害补偿追究并在交涉协商中获得高额赔偿圆满终结诉求",
        "对某双边民间文化振兴及基金公益用途之两国运作构架及合资合作合同细则修订提供法务建议",
      ],
    },
    {
      id: "family",
      title: "跨国 家事 · 继承纠纷解决",
      cn: "家事 · 继承",
      eyebrow: "FAMILY · INHERITANCE",
      blurb: "跨越国界处理棘手的家庭与私人关系问题，用最体面合理的解法助您翻篇。",
      highlight: "跨国",
      stamp: "家事",
      kanji: "家",
      overview: [
        "牵扯进有别于一般韩国家庭的涉韩、涉华之离婚、争产及亲权划归绝非常规家事法领域能够处理。这牵涉两国法院出具的裁判最终是否可以对等落实并在他国也得到同等实施，以及对小孩未来常驻属地及国籍划归的综合影响。甚至是涉及到不仅在韩国国内，以及分布于中国各省的动产、有价证券期权及土地不动资产等等是否要参与及对半分摊的问题—这势必成为两国属地法理在执行力上强强碰撞的棘手纠葛。",
        "韩桥不会停留在只是代位跟进在韩国单方的各项家事申请进度程序这种表面服务；反而会站在比目前更加深邃宏观角度在先期全面核对其作为一国判决（中方或韩方判决书及调节协议下带之文案）转译拿至另一方地域后可有效贯彻的实际履行能力（有无相互约束阻断可能性）。以让被代理的海外委托及韩华群体做到两国承认和一致执行效力为先决宗旨之全面合规及利益收网行动计划制定者。",
      ],
      sections: [
        {
          title: "办理涉外诉讼离婚及探视抚养亲权划分",
          items: [
            "解除夫妻羁绊与精神损害抚慰金的核定: 通过缜密盘查家庭共有累积财富，将争取分财最佳划定日期锚点前推或后移战略安排",
            "主张自身独自拥有教养探视等专管权限：协同将小孩在日后的升学受教权和居住挂钩国籍的实地调查同时提上法庭进行有利辩驳",
            "追踪追查及索讨欠付孩子生活赡养及育儿所需月付费用及利用外事互管催收规程强行收取",
          ],
        },
        {
          title: "判词跨国之生效性及互相裁定实施指引",
          items: [
            "判定从中国法院下达/和气调解下发的有关休夫休妻书面决意文拿在韩国可否受到全盘支持与采信之审查认定",
            "在受到大韩家庭特地调审委员会出具之执行调书或判案要求强执或落实查封财产至中国内陆财产的实行：根据中韩在相关刑事民商签批的司法协作引渡公约展开之可行性指导方案",
            "将海外法庭宣讲和已成事实之判定转移或单方面要求大韩韩国家事专断裁判院再次采信接纳及走完确认审批（追认许可登记）手续",
          ],
        },
        {
          title: "两地财产财富世代传承移转 (遗产继承)",
          items: [
            "涉及滞留和扎根在本地/归化后的华人在中方名下的物业或财产如何合规地汇融至其在韩现居子女或家庭等遗产申领认领业务引导",
            "审查死者生前遗训文书及录音代笔：参照双边在对待遗嘱时要求之公证或文体字句强制限制及所要适用之遵照法理分析报告",
            "为了隔绝已故有牵扯或负有生前高息债务被连坐偿还的恶果必须遵照在被限 3 个月 内提交限额或是主动抛弃完全不继承之代交审批服务",
          ],
        },
      ],
      cases: [
        "作为指定委托人成功代理请求韩国户籍登记所及庭院批准并转册来自【中国单方面提诉下达】之破裂家庭宣判生效证文记录在案获得核准接纳引用案例",
        "居中介入夫妻中韩地带双方名下财产不便过界核查评估分配并在进入庭审之前便由韩桥穿针引线敲定各自保有或划账并出具合意完结调解宣判案",
        "向国内咨询者及常驻侨胞下达就继承遗留在国内省份县市区之各类建筑房屋等遗迹转汇或产权归属更名手续提交指点服务",
      ],
    },
  ],
  en: [
    {
      id: "immigration",
      title: "Visa & Immigration Counsel",
      cn: "签证 · 出入境",
      eyebrow: "VISA · IMMIGRATION",
      blurb: "We assess immigration impacts alongside criminal defense strictly to establish the safest compliance strategy.",
      highlight: "Immigration",
      stamp: "韩桥",
      kanji: "入",
      overview: [
        "A foreigner's residency in South Korea is profoundly decided by immigration regulations as much as the factual consequence of any civil or criminal litigations. The Hangyo Law Firm assesses from the beginning how each stage of a legal process will directly risk our client’s visa status. We rigorously track the statutory deadlines ranging from deportation & departure orders to basic renewals simultaneously to the client's litigation flow.",
        "From the standard request, prolongation, or conversion of significant visa classifications (e.g., F-4, F-5, F-6, H-2, D-2, D-10), all the way to executing the uncompromising 7-day limitation for challenging visa rejection & 90-day margin for appealing at an administrative court—we explicitly explain which document operates under what potential danger entirely and confidently in Chinese.",
      ],
      sections: [
        {
          title: "Visa Initial Applicaton · Extension · Status Switch",
          items: [
            "F-4 (Overseas Korean): Endorsing identity verification alongside paternal/grandparental familial census registries.",
            "H-2 (Working Visit): Establishing valid qualifications for older generation Korean-Chinese individuals above 25 corresponding with steady re-entry frameworks.",
            "F-5 (Permanent Residency): Auditing & establishing robust conversion conditions post a standard 5-year F-2 residency trajectory.",
            "F-6 (Marriage Migrant): Complete documentation counsel regarding authentic marriage sustainment alongside income logic & residential housing satisfaction.",
            "D-2 / D-10: Academic or proactive job-seeking permit authorization & extensions.",
          ],
        },
        {
          title: "Combating Denials & Defending From Removal Executions",
          items: [
            "Push-back against visa rejection: Submitting an extensive petition logic letter precisely within a 7-day scope following the official notification.",
            "Administrative Adjudication/Litigation: Presenting the formal counter-lawsuit strictly within 90 days from cognition.",
            "Deportation order suspension: Forestalling forced exit directives actively while the primary lawsuits continue internally within the jurisdiction.",
            "Petitions urging custodial suspension: Mitigating holding terms emphasizing pressing medical emergencies or strict family conditions.",
            "Zero-hour immigration enforcement response: Operating immediate 24-hour consultation routing via WeChat systems.",
          ],
        },
        {
          title: "Simultaneously Processing Criminal Liability Risks vs. Visa Implications",
          items: [
            "Diagnosing precise possibilities for visa nullification already at the premature suspicion and probe stage.",
            "Dissecting what a potential penalty—especially fiscal verdicts (fines) or probation—does equivalently to residency sustainability.",
            "Systematically checking whether an accused qualifies precisely within deportation categories & developing robust evasive strategies ahead of time.",
          ],
        },
      ],
      cases: [
        "Successfully overruled a finalized F-6 marriage visa denial strictly turning the decision into an authorized standing via decisive petitions.",
        "Secured a confirmed cancellation of the original deportation notice via strategic suspension requests protecting the client's domestic standing.",
        "Triumph in an administrative litigious process defending a victimized individual wrongfully accused and stripped of an H-2 visa.",
      ],
    },
    {
      id: "criminal",
      title: "Criminal Defense Solutions",
      cn: "刑事案件",
      eyebrow: "CRIMINAL DEFENSE",
      blurb: "Tireless legal defense clearing unjust accusations and rapidly recovering incurred damages.",
      highlight: "Criminal",
      stamp: "防御",
      kanji: "刑",
      overview: [
        "Slightest variations within factual circumstances dictate the definitive fate of all criminal litigations. The Hangyo Law Firm dutifully refines our client’s testimonies and physical evidence precisely utilizing standard Korean judicially, all the while resonating emotionally with our clients fully comprehending their testimonies in Chinese. Since everything is routed natively—without translator dependencies—we retain absolute nuances capturing every factual circumstance meticulously.",
        "From alleged acting as voice-phishing money mules, executing systematic corporate embezzlement, breaching IT privacy regulations, facing sexual misconduct charges, to dealing with DUI violations—we target key controversies including intent, recognition factors, and absolute causation. We design an aggressive stance ultimately prioritizing a non-charge (case dismissed), non-indictment, or at worst, conditional probation.",
      ],
      sections: [
        {
          title: "Defending Against Economic Crimes",
          items: [
            "Voice-Phishing Money Mule allegations: Solidifying a non-indictment & absolute non-guilty parameter successfully arguing the distinct absence of intentional involvement.",
            "Investment Frauds: Reporting stock, cryptocurrency scams, or romance scheme damages immediately followed by strict settlement negotiation leveraging.",
            "Professional Embezzlement matters: Disproving alleged intent of illegal possession fundamentally through thorough corporate ledger breakdowns.",
            "Fraud allegation counter-defense: Disputing explicitly the nonexistent causation logic relating deceptive behavior directly with actual asset depletion.",
          ],
        },
        {
          title: "IT Privacy, Sex Crimes, & Traffic Defensive Representation",
          items: [
            "Violating IT Network Acts: Addressing excessive administration capability abuses alongside unlawful probing of personal data parameters.",
            "Sexual misconduct suspicions: Analyzing the factual chronology & vigorously verifying counter-claims specifying false or misleading malicious accusations regarding forced harassments.",
            "Mediating Prostitution facilitation charges: Strategizing the factual denial roadmap countering prosecution angles.",
            "Traffic Accidents & DUI charges: Appraising simultaneously the ensuing implications of bodily harm/DUI charges parallel with the subsequent impacts concerning immediate visa annulment possibilities.",
          ],
        },
        {
          title: "Specialized Foreigner Crime Advocacy Module",
          items: [
            "Undertaking direct advocacy plus exhaustive private consultation utilizing native Chinese for clients possessing weak Korean comprehension.",
            "Simultaneous bilingual composition representing initial investigatory affidavits directly ensuring consistency.",
            "Taking charge forming settlements engaging family members & associated enterprises residing in China, culminating via bilingual petition summaries.",
          ],
        },
      ],
      cases: [
        "Procured an explicit 'non-charge' declaration dealing with an accused alleged as an active voice-phishing accomplice mule.",
        "Stalled entirely the potential prosecution phase of systematic professional embezzlement via extensive non-indictment defense methodologies.",
        "Managed an acquisition regarding a conditional probation verdict pertaining to violations connected strictly with the Communications Privacy IT Acts.",
      ],
    },
    {
      id: "civil",
      title: "Civil & Financial Case Representations",
      cn: "民事 · 金融案件",
      eyebrow: "CIVIL · FINANCE",
      blurb: "Relentlessly safeguarding client property rights throughout intensely entangled monetary disputes.",
      highlight: "Financial",
      stamp: "权利",
      kanji: "权",
      overview: [
        "The depth enveloping evidential arrays strictly seals the result concerning civil or financial controversies. The Hangyo firm systematically reconstructs deeply scattered timelines involving bank transmission traces, corporate agreements, and mobile chat records. We subsequently formulate universally consolidated analyses merging client records spanning both South Korea and China equivalently.",
        "Whether verifying 'absence of liability' regarding victims looped within massive voice-phishing schemes, confronting P2P joint surety claims, or addressing triple-party pre-owned automobile frauds—our attorneys directly track every underlying factual thread determining unequivocally that the client operates specifically as the victim instead of the assumed perpetrator.",
      ],
      sections: [
        {
          title: "Voice-Phishing Defenses & Debt Absolution",
          items: [
            "Confirming Non-existence of Debt protocols: Shielding the compromised account holder tied unintentionally amidst massive voice-phishing schemes averting resulting civil burdens.",
            "Objections aimed at formal Payment Orders: Establishing rapid submission schedules formulating decisive written rebuttals specifically within 14 exact operational days.",
            "Injecting immediate suspensions limiting Compulsory Executions: Operating defensive logic challenging crippling asset seizures alongside temporary court injunctions.",
          ],
        },
        {
          title: "Financial Scrutinies & Disputes",
          items: [
            "Peer-to-Peer (P2P) litigations: Standing as formal proxy tackling specific joint & several assurance claims stemming from online collateral investments.",
            "Crypto-Asset transactions discord: Requesting subsequent damage compensations pursuing active responsibilities assigned against centralized exchange negligence.",
            "Recouping drastic investment collapses: Validating formal instances illustrating incomplete sales practices combined alongside strict violations defining the 'duty of explanation' standards.",
          ],
        },
        {
          title: "Challenging Transactional Scams & Liability Representations",
          items: [
            "Used automotive tri-lateral deceits: Elaborating legal principles confirming the explicit protection covering 'third-party purchasers acting in good faith' demonstrating the original perpetrator's inherent negligence.",
            "Denying Compensation Liabilities: Establishing the evident absence regarding an employee’s deliberate aiding-and-abetting responsibilities deflecting financial hits.",
            "Automotive repair malpractices: Fighting defensive matters averting financial requests originating heavily upon supposed wheel bolt maintenance neglects.",
            "Goods trading discord: Executing definitive cross-border Sino-Korean commerce bill reclamations & mandatory transaction returns.",
          ],
        },
        {
          title: "Additional General Civil Affiliations",
          items: [
            "Flood impairment controversies: Nullifying lawsuits claiming shared liabilities due to localized communal sewer reverse inflows.",
            "Nominal replacement lawsuits: Giving specialized tutelage inclusive of appointing tailored representatives regarding name-alteration demand adjudications.",
            "Securing Convertible Bond agreements: Legally representing contractual capital redemption procedures dealing extensively with Convertible Bonds systems.",
          ],
        },
      ],
      cases: [
        "Victory established inside a non-existence of debt validation defending a targeted phishing victim from ruinous fiscal liability.",
        "Successfully repelled a massive unified lawsuit requesting joint warranty reimbursements attached severely to P2P platforms.",
        "Categorically verified a primary seller’s negligence defending a secondary good-faith buyer amidst a used-car ternary fraud structure.",
      ],
    },
    {
      id: "corporate",
      title: "Sino-Korean Contractual & Corporate Counsel",
      cn: "涉华合同 · 企业",
      eyebrow: "CHINA-ORIENTED CORPORATE",
      blurb: "Direct structural analysis and immediate vetting of underlying risks targeting original Chinese text variants exclusively.",
      highlight: "Corporate Counsel",
      stamp: "合同",
      kanji: "约",
      overview: [
        "Finding an established Korean legal attorney fully and professionally capable of executing comprehensive vetting dealing directly matching Chinese indigenous original documents remains extraordinarily rare. The Hangyo firm dissects the ambiguous phrases checking their correlated interpretative hazards directly translating identically underneath South Korean statutes—thus disregarding heavily unreliable indirect translations.",
        "From massive bilateral import-export treaties, establishing pure non-profit incorporated entities, down to solving deep-rooted intellectual property infringements—we intricately design the priority parameters specifying precisely which jurisdictional system overrules the other and optimally electing which court is best authorized to tackle claims effectively addressing clashing bilateral legal codes.",
      ],
      sections: [
        {
          title: "Contractual Drafting · Thorough Evaluations",
          items: [
            "Sino-Korean Trade Arrangements: Implementing direct intrinsic audits scrutinizing impending systematic risks actively tracking underlying native Chinese originals.",
            "Bilingual/Trilingual Legal documentation: Assembling formalized multifaceted legal records concurrently distributed across Korean, Chinese, & English templates.",
            "Execution of MOUs & NDAs: Reviewing non-compete stipulations, maintaining explicit confidentiality, combined seamlessly alongside international arbitration directives.",
          ],
        },
        {
          title: "Entity & Organizational Governance Counsel",
          items: [
            "Consultations regarding Non-Profit frameworks: Architecting foundation articles of incorporation while rendering explicit tutelage aligning mutual operating guidelines traversing dual jurisdictions.",
            "Corporate Establishment schemas: Facilitating extensive tax consultations paired flawlessly establishing Chinese corporations entering straight onto the domestic regional market.",
            "Mediating Internal Shareholder clashes: Acting as primary proxy actively contending divided proxy votes, equitable profit dividends, alongside absolute accounting transparency clearances.",
          ],
        },
        {
          title: "Formulating Dispute Resolutions",
          items: [
            "Advising aggressive litigious maneuvers targeting unpaid monetary dues paired symmetrically addressing severe IP (Intellectual Property) thefts orchestrated via mainland establishments.",
            "Arbitration Operations: Activating authorized administrative proceedings appealing globally to KCAB, CIETAC, alongside ICC regulatory panels.",
            "Handling Recognition & Executions tied uniquely to international decrees: Validating accurately the exact implementational feasibilities & binding efficacies dealing cross-border judgments.",
          ],
        },
      ],
      cases: [
        "Achieved outright victory arbitrating forcefully against a mainland entity disregarding monumental overdue compensation relating heavily upon Sino-Korean trading transactions.",
        "Concluded a massive compensatory lawsuit establishing monetary agreements successfully shielding compromised intellectual assets.",
        "Drafted structural blueprints framing explicit foundational bylaws securing extensive non-profit organizations functionally operating alongside bilateral regulations.",
      ],
    },
    {
      id: "family",
      title: "Family Law · Inheritance Complexities",
      cn: "家事 · 继承",
      eyebrow: "FAMILY · INHERITANCE",
      blurb: "Executing logical and conclusive resolutions managing intimately cross-border family dilemmas.",
      highlight: "Family Law",
      stamp: "家事",
      kanji: "家",
      overview: [
        "Sino-Korean familial entanglements far exceed the mundane boundaries typical of sheer divore or inheritance proceedings. This territory demands overlapping mechanisms connecting two fully disjointed legal frameworks concurrently assessing judicial validities produced by opposing courts, tracking offspring citizenship delineations, combined closely evaluating mutual capital division encompassing assets residing equally within both domestic domains.",
        "The Hangyo firm undertakes regularized domestic family administrative proceedings while evaluating fundamentally standard Chinese decrees pre-empting potential discrepancies occurring inside South Korea's territory. We architect a holistic synchronized plan enabling clients achieving consistent outcomes optimally standardized across identically applied jurisdictions.",
      ],
      sections: [
        {
          title: "Divorce Procedures · Custody Evaluations",
          items: [
            "Alimony & Divorces: Structuring foundational timeline parameters deliberately designed maximizing substantial property partition payouts beneficially.",
            "Absolute Custody · Scheduled Visitation alignments: Synthesizing parameters correlating residential limitations tightly paired analyzing respective citizenship factors.",
            "Securing Child-Support implementations: Instigating uncompromising international frameworks strictly procuring delayed child assistance funding.",
          ],
        },
        {
          title: "Execution & Mutual Efficacy Regarding Cross-Border Verdicts",
          items: [
            "Assessing practically the explicit validity factors confirming whether strict mainland divorce decrees inherently command binding execution capacities deeply inside Korean soil.",
            "Projecting domestic decisions aimed towards Chinese governance implementation: Capitalizing efficiently applying Sino-Korean mutually recognized judicial collaboration pacts.",
            "Application regarding explicitly the validation endorsing external foreign mandates: Becoming central proxy directing exact administrative family court protocol submissions.",
          ],
        },
        {
          title: "Inheritance Distributions · Will Implementations",
          items: [
            "Informing definitive standard protocols routing domestic inheritances focused strictly allocating external real estate assets remaining actively located within mainland provinces.",
            "Assessing absolute binding logic corresponding towards drafted Testaments: Analyzing precise formatting prerequisites coupled actively matching statutory application codes across parallel territories.",
            "Abdicating Inheritances & Imposing restrictive limits: Structuring strict chronological administration bypassing the statutory irreversible 3-month declaration deadline.",
          ],
        },
      ],
      cases: [
        "Acquired an official validation judgment recognizing seamlessly a mainland divorce stipulation smoothly executing operational acceptance internally residing within the Korean boundaries.",
        "Orchestrated a flawlessly mediated mutual closure regulating enormous marital capital demarcations fundamentally distributed uniformly spanning both respective countries.",
        "Delivered a localized roadmap detailing strictly structured Korean inheritance procedures transferring explicit property titles historically stationed entirely inside Chinese borders.",
      ],
    },
  ],
};

export function getServices(lang: string = "ko"): ServiceDetail[] {
  return SERVICES[lang as keyof typeof SERVICES] || SERVICES.ko;
}

export function getServiceById(id: string, lang: string = "ko"): ServiceDetail | undefined {
  return getServices(lang).find((s) => s.id === id);
}

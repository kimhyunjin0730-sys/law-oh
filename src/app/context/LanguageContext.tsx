import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'ko' | 'zh' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  ko: {
    'nav.home': '법률사무소 한교',
    'nav.about': '구성원 소개',
    'nav.services': '주요업무',
    'nav.cases': '성공사례',
    'nav.legal': '법률정보',
    'legal.index.title': '법률정보',
    'legal.index.subtitle': '중국어권 의뢰인을 위한 주요 실무 가이드',
    'legal.coming_soon': '준비 중',
    'nav.wechat': '위챗 직접상담',
    'top.consult': '상담문의',
    'top.wechat': '위챗상담',
    'top.slogan': '한국과 중국, 두 언어로 당신의 권리를 지킵니다.',
    'footer.desc': '한국에서 법적 문제에 부딪혔을 때, 가장 두려운 것은 \'내 말이 제대로 전달되지 않는 것\'입니다. 한교는 중국 현지 경험을 바탕으로 당신의 이야기를 당신의 언어로 직접 듣습니다.',
    'footer.contact': 'Contact Us',
    'footer.links': 'Quick Links',
    'footer.rights': 'Copyright © 2026 HANGYO Law Firm. All rights reserved.',
    'footer.disclaimer': '본 웹사이트의 내용은 일반적인 정보 제공을 목적으로 하며, 구체적인 사안에 대한 법률 자문이 아닙니다.',
  },
  zh: {
    'nav.home': '韩桥 律师事务所',
    'nav.about': '成员介绍',
    'nav.services': '主要业务',
    'nav.cases': '成功案例',
    'nav.legal': '法律信息',
    'legal.index.title': '法律信息',
    'legal.index.subtitle': '面向中文客户的主要实务指南',
    'legal.coming_soon': '准备中',
    'nav.wechat': '微信咨询',
    'top.consult': '咨询热线',
    'top.wechat': '微信咨询',
    'top.slogan': '韩国与中国，用两种语言守护您的权利。',
    'footer.desc': '在韩国遇到法律问题时，最害怕的是“我的话没有被正确传达”。韩桥 律师事务所以在中国当地的经验为基础，用您的语言直接倾听您的故事。',
    'footer.contact': '联系我们',
    'footer.links': '快速链接',
    'footer.rights': 'Copyright © 2026 韩桥 律师事务所. 保留所有权利。',
    'footer.disclaimer': '本网站内容仅供参考，不构成具体案件的法律咨询。',
  },
  en: {
    'nav.home': 'HANGYO Law Firm',
    'nav.about': 'Our Team',
    'nav.services': 'Practice Areas',
    'nav.cases': 'Success Cases',
    'nav.legal': 'Legal Info',
    'legal.index.title': 'Legal Info',
    'legal.index.subtitle': 'Practical guides for Chinese-speaking clients',
    'legal.coming_soon': 'Coming soon',
    'nav.wechat': 'WeChat Consult',
    'top.consult': 'Consultation',
    'top.wechat': 'WeChat',
    'top.slogan': 'Protecting your rights in two languages, Korea and China.',
    'footer.desc': 'When facing legal issues in Korea, the biggest fear is miscommunication. HANGYO Law Firm listens to your story directly in your language based on our local experience in China.',
    'footer.contact': 'Contact Us',
    'footer.links': 'Quick Links',
    'footer.rights': 'Copyright © 2026 HANGYO Law Firm. All rights reserved.',
    'footer.disclaimer': 'The content of this website is for general information purposes only and does not constitute legal advice for specific cases.',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('ko');

  const t = (key: string): string => {
    // @ts-ignore
    return translations[language][key] || translations['ko'][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

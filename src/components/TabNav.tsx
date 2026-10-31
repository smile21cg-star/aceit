import React, { useState, useEffect } from 'react';

interface TabItem {
  id: string;
  label: string;
}

const TABS: TabItem[] = [
  { id: 'overview', label: '과정 개요' },
  { id: 'curriculum', label: '24주 커리큘럼' },
  { id: 'simulator', label: '실습 아키텍처 랩' },
  { id: 'instructors', label: '강사진' },
  { id: 'reviews', label: '취업 성과 & 후기' },
  { id: 'subsidy', label: '국비지원 계산기' },
  { id: 'faq', label: 'FAQ' },
];

export const TabNav: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('overview');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120;
      for (let i = TABS.length - 1; i >= 0; i--) {
        const section = document.getElementById(TABS[i].id);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveTab(TABS[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setActiveTab(id);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="sticky top-16 z-30 bg-white/95 backdrop-blur-md border-b border-[#E8EAED] shadow-sm">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        <div className="flex items-center overflow-x-auto no-scrollbar gap-1 sm:gap-2">
          {TABS.map(tab => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => scrollToSection(tab.id)}
                type="button"
                className={`relative py-3.5 px-3 sm:px-4 text-xs sm:text-sm whitespace-nowrap shrink-0 transition-colors cursor-pointer font-medium ${
                  isActive
                    ? 'text-[#1A73E8] font-bold'
                    : 'text-[#5F6368] hover:text-[#202124]'
                }`}
              >
                {tab.label}
                {isActive && (
                  <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#1A73E8] rounded-t-full transition-all" />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

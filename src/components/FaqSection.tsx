import React, { useState } from 'react';
import { ChevronDown, HelpCircle, PhoneCall, MessageCircle } from 'lucide-react';
import { FaqItem } from '../types';

interface FaqSectionProps {
  faqs: FaqItem[];
  onOpenRegister: () => void;
}

const COMMON_FAQS: FaqItem[] = [
  {
    id: 'c-1',
    category: 'subsidy',
    question: '국민내일배움카드가 이미 다른 과정에 사용되어 잔액이 부족해도 전액 지원되나요?',
    answer: '네! K-디지털 트레이닝(KDT) 과정은 생애 1회에 한하여 기존 내일배움카드 계좌 잔액과 무관하게 수강료 890만 원 전액이 100% 국비 지원됩니다. 기존 카드가 있으신 분도 잔액 부족 걱정 없이 신청하실 수 있습니다.'
  },
  {
    id: 'c-2',
    category: 'curriculum',
    question: '개인 노트북 사양은 어느 정도가 필요한가요?',
    answer: '원활한 실습을 위해 Apple Silicon Mac (M1/M2/M3 RAM 16GB 이상) 또는 Windows/Linux (Intel i5/AMD Ryzen 5 이상, RAM 16GB 이상, SSD 512GB 권장)을 권장합니다. 노트북이 없는 분은 강남 캠퍼스 데스크톱 랩실을 24시간 상시 이용하실 수 있습니다.'
  },
  {
    id: 'c-3',
    category: 'selection',
    question: '선발 테스트(코딩 테스트) 난이도는 어떻게 되나요?',
    answer: '사전 테스트는 어려운 알고리즘 지식을 묻지 않습니다. 기초적인 논리력, 주어진 조건에 따라 사고하는 의사코드(Pseudocode) 이해도, 그리고 학습에 헌신할 몰입도를 평가합니다. 사전 제공되는 4주 무료 프리코스만 성실히 학습하시면 누구나 통과할 수 있습니다.'
  },
  {
    id: 'c-4',
    category: 'career',
    question: '나이가 많거나 공백기가 긴데도 신입 개발자로 취업할 수 있나요?',
    answer: '실제 에이스 IT 수료생 중 만 30대 초중반, 타 직종 4년 경력 후 비전공으로 이직한 수료생의 합격률도 91%에 달합니다. 기업 채용 담당자가 가장 중요하게 보는 것은 나이가 아닌 GitHub 커밋 내역과 10만 TPS 부하테스트를 거친 진짜 프로젝트 포트폴리오입니다.'
  },
  {
    id: 'c-5',
    category: 'curriculum',
    question: '수업 중 불가피한 경조사나 예비군 훈련 시 출석 인정이 되나요?',
    answer: '네, 고용노동부 공식 출석 인정 규정에 따라 예비군 훈련, 공결, 본인 및 직계존비속 경조사 등은 증빙 서류 제출 시 100% 공결(출석 인정) 처리됩니다. 또한 모든 수업은 4K 녹화되어 클라우드 보관함에서 당일 즉시 복습할 수 있습니다.'
  }
];

export const FaqSection: React.FC<FaqSectionProps> = ({ faqs, onOpenRegister }) => {
  const allFaqs = [...faqs, ...COMMON_FAQS.filter(cf => !faqs.some(f => f.id === cf.id))];
  const [activeCategory, setActiveCategory] = useState<'all' | 'subsidy' | 'selection' | 'curriculum' | 'career'>('all');
  const [openFaqIds, setOpenFaqIds] = useState<string[]>(['faq-1', 'c-1']);

  const toggleFaq = (id: string) => {
    setOpenFaqIds(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const filteredFaqs = allFaqs.filter(faq => {
    if (activeCategory === 'all') return true;
    return faq.category === activeCategory;
  });

  return (
    <section id="faq" className="py-12 sm:py-20 bg-white border-b border-[#E8EAED]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 space-y-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="text-xs font-bold text-[#1A73E8] tracking-wider uppercase mb-1">
              Frequently Asked Questions
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#202124] tracking-tight">
              자주 묻는 질문
            </h2>
            <p className="text-sm text-[#5F6368] mt-1">
              국비지원 자격부터 수업 환경, 취업 지원 프로그램까지 궁금하신 점을 모았습니다.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-1 p-1 bg-[#F8F9FA] rounded-lg border border-[#E8EAED] text-xs font-medium overflow-x-auto no-scrollbar">
            {[
              { id: 'all', label: '전체' },
              { id: 'subsidy', label: '국비지원/수당' },
              { id: 'selection', label: '선발/입학' },
              { id: 'curriculum', label: '수업/환경' },
              { id: 'career', label: '취업지원' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id as any)}
                type="button"
                className={`px-3 py-1.5 rounded-md cursor-pointer transition-colors whitespace-nowrap ${
                  activeCategory === tab.id
                    ? 'bg-white text-[#1A73E8] font-bold shadow-xs'
                    : 'text-[#5F6368] hover:text-[#202124]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Faq Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.map(faq => {
            const isOpen = openFaqIds.includes(faq.id);
            return (
              <div
                key={faq.id}
                className={`rounded-xl border transition-all ${
                  isOpen
                    ? 'border-[#1A73E8]/40 bg-white shadow-xs'
                    : 'border-[#E8EAED] bg-white hover:border-slate-300'
                }`}
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  type="button"
                  className="w-full px-5 py-4 flex items-center justify-between gap-4 text-left cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-blue-50 text-[#1A73E8] font-bold text-xs flex items-center justify-center shrink-0">
                      Q
                    </span>
                    <span className="font-bold text-sm sm:text-base text-[#202124]">
                      {faq.question}
                    </span>
                  </div>

                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center text-[#5F6368] transition-transform ${
                      isOpen ? 'rotate-180 text-[#1A73E8]' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#5F6368] leading-relaxed border-t border-[#E8EAED]/50">
                    <div className="flex items-start gap-3 pt-3">
                      <span className="w-6 h-6 rounded-full bg-orange-50 text-[#FF6B00] font-bold text-xs flex items-center justify-center shrink-0">
                        A
                      </span>
                      <p className="flex-1">{faq.answer}</p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Box */}
        <div className="p-6 rounded-2xl bg-[#F8F9FA] border border-[#E8EAED] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <div className="font-bold text-sm sm:text-base text-[#202124]">
              더 궁금한 점이 있으신가요? 1:1 입학 전담 매니저에게 직접 문의하세요
            </div>
            <div className="text-xs text-[#5F6368] mt-0.5">
              전화 상담 및 카카오톡 상담이 평일 09:00~21:00까지 상시 운영됩니다. (국비지원 절차 무료 원격 대행)
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenRegister}
              type="button"
              className="px-4 py-2.5 rounded-lg bg-[#FF6B00] hover:bg-[#E56000] text-white text-xs sm:text-sm font-bold shadow-sm transition-all cursor-pointer flex items-center gap-1.5"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>전화 상담 예약하기</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

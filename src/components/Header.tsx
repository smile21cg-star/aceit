import React from 'react';
import { Sparkles, PhoneCall, ChevronDown } from 'lucide-react';
import { Course } from '../types';

interface HeaderProps {
  currentCourse: Course;
  onOpenCatalog: () => void;
  onOpenRegister: () => void;
  onOpenSyllabus: () => void;
  onOpenSubsidyCalc: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentCourse,
  onOpenCatalog,
  onOpenRegister,
  onOpenSubsidyCalc,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#E8EAED] transition-all">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Brand wordmark */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="/"
            className="flex items-center gap-2 text-lg sm:text-xl font-bold tracking-tight text-[#202124] hover:text-[#1A73E8] transition-colors"
          >
            <span className="w-8 h-8 rounded-lg bg-[#1A73E8] text-white flex items-center justify-center font-black text-sm tracking-tighter shadow-sm">
              ACE
            </span>
            <span className="font-bold tracking-tight">Ace IT</span>
            <span className="hidden sm:inline text-xs font-semibold px-2 py-0.5 rounded bg-blue-50 text-[#1A73E8] border border-blue-100">
              K-Digital Training
            </span>
          </a>

          {/* Quick Track Switcher Dropdown */}
          <button
            onClick={onOpenCatalog}
            type="button"
            className="hidden lg:flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium text-[#5F6368] hover:text-[#202124] bg-[#F8F9FA] hover:bg-[#EEF2F6] rounded-md border border-[#E8EAED] transition-colors cursor-pointer"
            title="다른 부트캠프 과정 선택"
          >
            <span className="text-[#1A73E8] font-semibold">{currentCourse.cohort}</span>
            <span className="max-w-[160px] truncate">{currentCourse.title}</span>
            <ChevronDown className="w-3.5 h-3.5 text-[#5F6368]" />
          </button>
        </div>

        {/* Zone 2: 4–5 single-line clean text nav links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-[#5F6368]">
          <button
            onClick={onOpenCatalog}
            type="button"
            className="hover:text-[#1A73E8] transition-colors whitespace-nowrap shrink-0 text-left cursor-pointer"
          >
            전체 부트캠프
          </button>
          <a
            href="#curriculum"
            className="hover:text-[#1A73E8] transition-colors whitespace-nowrap shrink-0"
          >
            커리큘럼
          </a>
          <a
            href="#simulator"
            className="hover:text-[#1A73E8] transition-colors whitespace-nowrap shrink-0 flex items-center gap-1"
          >
            <span>실습 아키텍처</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#1A73E8]" />
          </a>
          <a
            href="#instructors"
            className="hover:text-[#1A73E8] transition-colors whitespace-nowrap shrink-0"
          >
            강사진
          </a>
          <a
            href="#reviews"
            className="hover:text-[#1A73E8] transition-colors whitespace-nowrap shrink-0"
          >
            취업후기
          </a>
          <button
            onClick={onOpenSubsidyCalc}
            type="button"
            className="hover:text-[#FF6B00] transition-colors whitespace-nowrap shrink-0 cursor-pointer text-left"
          >
            국비지원 진단
          </button>
          <a
            href="#faq"
            className="hover:text-[#1A73E8] transition-colors whitespace-nowrap shrink-0"
          >
            FAQ
          </a>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <button
            onClick={onOpenSubsidyCalc}
            type="button"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-[#1A73E8] hover:bg-blue-50/80 rounded-lg border border-[#1A73E8]/30 transition-colors cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#1A73E8]" />
            <span>지원금 진단</span>
          </button>

          <button
            onClick={onOpenRegister}
            type="button"
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-[#FF6B00] hover:bg-[#E56000] active:scale-[0.98] rounded-lg shadow-sm transition-all cursor-pointer whitespace-nowrap"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span>수강신청 / 상담</span>
          </button>
        </div>
      </div>
    </header>
  );
};

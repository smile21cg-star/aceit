import React from 'react';
import { ArrowRight, Flame } from 'lucide-react';
import { Course } from '../types';

interface FloatingCtaBarProps {
  course: Course;
  onOpenRegister: () => void;
  onOpenSubsidyCalc: () => void;
}

export const FloatingCtaBar: React.FC<FloatingCtaBarProps> = ({
  course,
  onOpenRegister,
  onOpenSubsidyCalc
}) => {
  const seatsLeft = course.quotaTotal - course.quotaEnrolled;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/98 backdrop-blur-md border-t border-[#E8EAED] shadow-[0_-4px_20px_rgba(32,33,36,0.08)] py-2.5 px-4 sm:px-6 transition-transform">
      <div className="max-w-[1240px] mx-auto flex items-center justify-between gap-4">
        {/* Left Column: Remaining seats & deadline */}
        <div className="flex items-center gap-3 min-w-0">
          <div className="w-8 h-8 rounded-full bg-orange-50 text-[#FF6B00] flex items-center justify-center shrink-0 border border-orange-100">
            <Flame className="w-4 h-4 fill-[#FF6B00]" />
          </div>

          <div className="min-w-0">
            <div className="flex items-center gap-1.5 flex-wrap">
              <span className="text-xs sm:text-sm font-bold text-[#202124] truncate">
                {course.cohort} {course.title}
              </span>
              <span className="text-[11px] font-bold text-[#FF6B00] bg-orange-50 px-1.5 py-0.2 rounded shrink-0">
                잔여 {seatsLeft}석
              </span>
            </div>

            <div className="text-[11px] text-[#5F6368] flex items-center gap-1.5">
              <span>수강료 전액 국비지원 0원</span>
              <span className="text-slate-300">·</span>
              <button
                onClick={onOpenSubsidyCalc}
                type="button"
                className="text-[#1A73E8] hover:underline font-semibold cursor-pointer truncate"
              >
                훈련장려금 월 31.6만원 받기
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: High-conversion Action Button */}
        <div className="shrink-0">
          <button
            onClick={onOpenRegister}
            type="button"
            className="py-2.5 sm:py-3 px-4 sm:px-6 rounded-xl bg-[#FF6B00] hover:bg-[#E56000] active:scale-[0.98] text-white font-bold text-xs sm:text-sm shadow-sm transition-all flex items-center gap-1.5 cursor-pointer whitespace-nowrap"
          >
            <span>선착순 0원 수강신청</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

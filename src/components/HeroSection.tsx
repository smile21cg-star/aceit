import React, { useState, useEffect } from 'react';
import { 
  FileText, 
  ArrowRight, 
  Calendar, 
  MapPin, 
  Users, 
  Clock, 
  CheckCircle2, 
  AlertCircle
} from 'lucide-react';
import { Course } from '../types';

interface HeroSectionProps {
  course: Course;
  onOpenRegister: () => void;
  onOpenSyllabus: () => void;
  onOpenSubsidyCalc: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  course,
  onOpenRegister,
  onOpenSyllabus,
  onOpenSubsidyCalc
}) => {
  // Live Countdown state
  const [timeLeft, setTimeLeft] = useState({
    days: 3,
    hours: 14,
    minutes: 38,
    seconds: 45
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: 59, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const seatsLeft = course.quotaTotal - course.quotaEnrolled;
  const quotaPercent = Math.round((course.quotaEnrolled / course.quotaTotal) * 100);

  return (
    <section className="relative bg-white border-b border-[#E8EAED] overflow-hidden pt-8 pb-12 sm:pt-12 sm:pb-16">
      {/* Background Accent Grid */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(#1A73E8 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      />

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 relative">
        {/* Top Kicker Bar */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm font-medium text-[#5F6368] mb-4">
          <span className="font-semibold text-[#1A73E8] bg-blue-50 px-2.5 py-1 rounded border border-blue-100">
            {course.badgeTag}
          </span>
          <span className="text-[#E8EAED]">|</span>
          <span className="inline-flex items-center gap-1.5 text-[#FF6B00] font-semibold bg-orange-50 px-2.5 py-1 rounded border border-orange-100">
            <AlertCircle className="w-3.5 h-3.5" />
            {course.statusLabel}
          </span>
          <span className="text-[#E8EAED] hidden sm:inline">|</span>
          <span className="hidden sm:inline text-[#5F6368]">
            고용노동부 인증 최우수 훈련기관 (직업능력심사평가원 5년 인증)
          </span>
        </div>

        {/* 2-Column Split Hero Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column (Headline, Value Proposition & CTA) */}
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-extrabold tracking-tight text-[#202124] leading-[1.25] text-balance">
              {course.title}
            </h1>

            <p className="text-base sm:text-lg text-[#5F6368] leading-relaxed">
              {course.summary}
            </p>

            {/* Key Benefits Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
              {course.highlights.map((highlight, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-[#202124]">
                  <CheckCircle2 className="w-4 h-4 text-[#1A73E8] shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>

            {/* Urgent Countdown Card */}
            <div className="p-4 sm:p-5 rounded-xl bg-[#F8F9FA] border border-[#E8EAED]">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-[#E8EAED]">
                <div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#FF6B00]" />
                    <span className="text-xs font-semibold text-[#FF6B00]">지원 마감 카운트다운</span>
                  </div>
                  <div className="text-xl sm:text-2xl font-bold tracking-tight text-[#202124] tabular-nums mt-0.5">
                    {String(timeLeft.days).padStart(2, '0')}일 {String(timeLeft.hours).padStart(2, '0')}시간 {String(timeLeft.minutes).padStart(2, '0')}분 {String(timeLeft.seconds).padStart(2, '0')}초
                  </div>
                </div>

                {/* Quota Gauge */}
                <div className="sm:text-right">
                  <div className="text-xs text-[#5F6368]">
                    모집 정원 <span className="font-semibold text-[#202124]">{course.quotaEnrolled}/{course.quotaTotal}명</span>
                  </div>
                  <div className="text-xs font-semibold text-[#FF6B00] mt-0.5">
                    잔여 <span className="text-sm font-bold">{seatsLeft}석</span> (선착순 면담 마감)
                  </div>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-[#E8EAED] h-2 rounded-full overflow-hidden mt-3">
                <div 
                  className="bg-gradient-to-r from-[#1A73E8] to-[#FF6B00] h-full rounded-full transition-all duration-500"
                  style={{ width: `${quotaPercent}%` }}
                />
              </div>

              {/* Tuition Free Notice */}
              <div className="mt-3 flex flex-wrap items-center justify-between gap-2 text-xs text-[#5F6368]">
                <div className="flex items-center gap-1.5">
                  <span className="line-through text-slate-400">₩{course.tuitionOriginal.toLocaleString()}원</span>
                  <span className="font-bold text-[#FF6B00] text-sm">국비지원 0원 (전액 무료)</span>
                </div>
                <button
                  onClick={onOpenSubsidyCalc}
                  type="button"
                  className="text-[#1A73E8] hover:underline font-semibold cursor-pointer"
                >
                  내일배움카드 지원금 모의계산 →
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <button
                onClick={onOpenRegister}
                type="button"
                className="flex-1 py-3.5 px-6 rounded-lg bg-[#FF6B00] hover:bg-[#E56000] active:scale-[0.99] text-white font-bold text-sm sm:text-base shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>선착순 0원 수강신청하기</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenSyllabus}
                type="button"
                className="py-3.5 px-5 rounded-lg bg-white border border-[#1A73E8] text-[#1A73E8] hover:bg-blue-50/50 active:scale-[0.99] font-semibold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <FileText className="w-4 h-4" />
                <span>커리큘럼 PDF 받기</span>
              </button>
            </div>
          </div>

          {/* Right Column: Campus & Study Environment Visual Showcase */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative rounded-2xl overflow-hidden border border-[#E8EAED] shadow-sm bg-white group">
              <div className="aspect-[16/10] overflow-hidden bg-slate-100">
                <img
                  src={course.heroImage}
                  alt="에이스 IT 강남 캠퍼스 개발자 실습 환경"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Floating Caption Overlay */}
              <div className="p-4 bg-white border-t border-[#E8EAED]">
                <div className="flex items-center justify-between text-xs text-[#5F6368] mb-1">
                  <span className="font-semibold text-[#202124] flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#1A73E8]" />
                    {course.campusLocation}
                  </span>
                  <span className="text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">
                    24시간 오픈 랩실 지원
                  </span>
                </div>
                <p className="text-xs text-[#5F6368]">
                  듀얼 모니터 완비 개인 지정석 · 전담 튜터 24시간 질의응답 · 커피/간식 무제한 라운지
                </p>
              </div>
            </div>

            {/* Quick Spec Card List */}
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-lg bg-[#F8F9FA] border border-[#E8EAED]">
                <div className="flex items-center gap-1.5 text-[#5F6368] mb-1">
                  <Calendar className="w-3.5 h-3.5 text-[#1A73E8]" />
                  <span>개강 일정</span>
                </div>
                <div className="font-bold text-[#202124]">{course.startDate} 개강</div>
                <div className="text-[11px] text-[#5F6368] mt-0.5">{course.durationWeeks}주 ({course.totalHours}시간) 집중과정</div>
              </div>

              <div className="p-3 rounded-lg bg-[#F8F9FA] border border-[#E8EAED]">
                <div className="flex items-center gap-1.5 text-[#5F6368] mb-1">
                  <Users className="w-3.5 h-3.5 text-[#1A73E8]" />
                  <span>수강 형태</span>
                </div>
                <div className="font-bold text-[#202124]">온·오프라인 하이브리드</div>
                <div className="text-[11px] text-[#5F6368] mt-0.5">평일 09:00 ~ 18:00 (전일제)</div>
              </div>
            </div>
          </div>
        </div>

        {/* Claim-to-Proof Metric Strip */}
        <div className="mt-10 sm:mt-12 pt-8 border-t border-[#E8EAED] grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          <div className="p-4 rounded-xl bg-[#F8F9FA] border border-[#E8EAED]">
            <div className="text-xs font-semibold text-[#5F6368]">6개월 내 개발자 취업률</div>
            <div className="text-2xl sm:text-3xl font-extrabold text-[#1A73E8] tabular-nums mt-1">
              {course.employmentRate}%
            </div>
            <div className="text-xs text-[#5F6368] mt-1">고용노동부 직업훈련 포털 공시 기준</div>
          </div>

          <div className="p-4 rounded-xl bg-[#F8F9FA] border border-[#E8EAED]">
            <div className="text-xs font-semibold text-[#5F6368]">신입/비전공 평균 초봉</div>
            <div className="text-2xl sm:text-3xl font-extrabold text-[#202124] tabular-nums mt-1">
              {course.averageStartingSalary}
            </div>
            <div className="text-xs text-[#5F6368] mt-1">전 기수 실제 취업자 계약 기준</div>
          </div>

          <div className="p-4 rounded-xl bg-[#F8F9FA] border border-[#E8EAED]">
            <div className="text-xs font-semibold text-[#5F6368]">국민내일배움카드 지원</div>
            <div className="text-2xl sm:text-3xl font-extrabold text-[#FF6B00] tabular-nums mt-1">
              100% 무료
            </div>
            <div className="text-xs text-[#5F6368] mt-1">수강료 890만원 전액 국비 지원</div>
          </div>

          <div className="p-4 rounded-xl bg-[#F8F9FA] border border-[#E8EAED]">
            <div className="text-xs font-semibold text-[#5F6368]">매월 훈련장려금 현금 지급</div>
            <div className="text-2xl sm:text-3xl font-extrabold text-[#1A73E8] tabular-nums mt-1">
              최대 31.6만원
            </div>
            <div className="text-xs text-[#5F6368] mt-1">출석률 80% 이상 매달 통장 입금</div>
          </div>
        </div>
      </div>
    </section>
  );
};

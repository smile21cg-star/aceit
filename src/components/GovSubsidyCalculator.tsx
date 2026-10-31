import React, { useState } from 'react';
import { 
  Calculator, 
  CheckCircle2, 
  Sparkles, 
  HelpCircle, 
  ArrowRight, 
  Wallet,
  CreditCard
} from 'lucide-react';
import { Course } from '../types';

interface GovSubsidyCalculatorProps {
  course: Course;
  onOpenRegister: () => void;
}

export const GovSubsidyCalculator: React.FC<GovSubsidyCalculatorProps> = ({
  course,
  onOpenRegister
}) => {
  const [userStatus, setUserStatus] = useState<'job_seeker' | 'student' | 'employed' | 'unemployed_youth'>('job_seeker');
  const [cardStatus, setCardStatus] = useState<'have_card' | 'no_card' | 'expired'>('have_card');
  const [participatingKdtBefore, setParticipatingKdtBefore] = useState<boolean>(false);

  // Subsidy logic
  const isEligible = !participatingKdtBefore;
  const selfPayAmount = isEligible ? 0 : course.tuitionOriginal * 0.2;
  const subsidyAmount = course.tuitionOriginal - selfPayAmount;
  const monthlyStipend = isEligible ? course.stipendMonthlyMax : 0;
  const totalStipend6Months = monthlyStipend * 6;

  return (
    <section id="subsidy" className="py-12 sm:py-20 bg-white border-b border-[#E8EAED]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 space-y-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="text-xs font-bold text-[#1A73E8] tracking-wider uppercase mb-1">
              Government K-Digital Training Subsidy Calculator
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#202124] tracking-tight">
              내 국민내일배움카드 국비지원 자격 & 수당 진단기
            </h2>
            <p className="text-sm text-[#5F6368] mt-1">
              본인의 현재 상황을 선택하면 100% 국비 전액 무료 지원 여부와 매월 지급받는 훈련장려금을 즉시 모의 계산해 드립니다.
            </p>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-orange-50 text-[#FF6B00] border border-orange-200 text-xs font-bold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>K-디지털 트레이닝 평생 1회 100% 전액 지원</span>
          </div>
        </div>

        {/* Calculator Interactive Board */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Form (7 cols) */}
          <div className="lg:col-span-7 bg-[#F8F9FA] rounded-2xl border border-[#E8EAED] p-6 sm:p-8 space-y-6">
            {/* Step 1: Status */}
            <div className="space-y-3">
              <label className="text-xs font-bold text-[#202124] uppercase tracking-wider block">
                1. 현재 본인의 신분을 선택해주세요
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {[
                  { id: 'job_seeker', title: '구직자 / 취업 준비생', desc: '현재 취업 준비 중인 미취업자' },
                  { id: 'student', title: '대학 졸업예정자 / 휴학생', desc: '졸업까지 수업연한 2년 이내' },
                  { id: 'unemployed_youth', title: '청년 취업도전자', desc: '만 18세 이상 ~ 34세 이하 청년' },
                  { id: 'employed', title: '직장인 (이직 준비)', desc: '월 300만원 미만 / 중소기업 재직' },
                ].map(opt => (
                  <button
                    key={opt.id}
                    onClick={() => setUserStatus(opt.id as any)}
                    type="button"
                    className={`p-3.5 rounded-xl border text-left cursor-pointer transition-all ${
                      userStatus === opt.id
                        ? 'bg-white border-[#1A73E8] ring-2 ring-blue-100 shadow-xs'
                        : 'bg-white/80 border-[#E8EAED] hover:border-slate-300'
                    }`}
                  >
                    <div className="font-bold text-xs sm:text-sm text-[#202124]">{opt.title}</div>
                    <div className="text-[11px] text-[#5F6368] mt-0.5">{opt.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Card status */}
            <div className="space-y-3 pt-2 border-t border-[#E8EAED]">
              <label className="text-xs font-bold text-[#202124] uppercase tracking-wider block">
                2. 국민내일배움카드를 소지하고 계신가요?
              </label>
              <div className="grid grid-cols-3 gap-2.5">
                {[
                  { id: 'have_card', label: '카드 소지 중' },
                  { id: 'no_card', label: '카드 없음 (신규)' },
                  { id: 'expired', label: '발급 이력 있음' },
                ].map(opt => (
                  <button
                    key={opt.id}
                    onClick={() => setCardStatus(opt.id as any)}
                    type="button"
                    className={`p-3 rounded-xl border text-center cursor-pointer transition-all ${
                      cardStatus === opt.id
                        ? 'bg-white border-[#1A73E8] ring-2 ring-blue-100 shadow-xs text-[#1A73E8] font-bold'
                        : 'bg-white/80 border-[#E8EAED] text-[#5F6368] hover:border-slate-300'
                    }`}
                  >
                    <span className="text-xs">{opt.label}</span>
                  </button>
                ))}
              </div>
              <div className="text-[11px] text-[#5F6368]">
                * 카드가 없어도 에이스 IT가 10분 만에 온라인(HRD-Net)으로 당일 발급받는 절차를 1:1로 원격 지원해 드립니다.
              </div>
            </div>

            {/* Step 3: Prior KDT Check */}
            <div className="space-y-3 pt-2 border-t border-[#E8EAED]">
              <label className="text-xs font-bold text-[#202124] uppercase tracking-wider block">
                3. 과거에 K-디지털 트레이닝(KDT) 과정을 수료하신 적이 있나요?
              </label>
              <div className="grid grid-cols-2 gap-2.5">
                <button
                  onClick={() => setParticipatingKdtBefore(false)}
                  type="button"
                  className={`p-3 rounded-xl border text-center cursor-pointer transition-all ${
                    !participatingKdtBefore
                      ? 'bg-white border-[#1A73E8] ring-2 ring-blue-100 shadow-xs text-[#1A73E8] font-bold'
                      : 'bg-white/80 border-[#E8EAED] text-[#5F6368]'
                  }`}
                >
                  <span className="text-xs">아니오 (최초 참여) 🎁</span>
                </button>
                <button
                  onClick={() => setParticipatingKdtBefore(true)}
                  type="button"
                  className={`p-3 rounded-xl border text-center cursor-pointer transition-all ${
                    participatingKdtBefore
                      ? 'bg-white border-[#1A73E8] ring-2 ring-blue-100 shadow-xs text-[#1A73E8] font-bold'
                      : 'bg-white/80 border-[#E8EAED] text-[#5F6368]'
                  }`}
                >
                  <span className="text-xs">예 (과거 수료 이력 있음)</span>
                </button>
              </div>
            </div>
          </div>

          {/* Results Summary Card (5 cols) */}
          <div className="lg:col-span-5 bg-white rounded-2xl border-2 border-[#1A73E8] p-6 sm:p-8 shadow-md space-y-6 relative overflow-hidden">
            {/* Top Badge */}
            <div className="flex items-center justify-between pb-4 border-b border-[#E8EAED]">
              <div className="flex items-center gap-2">
                <Wallet className="w-5 h-5 text-[#1A73E8]" />
                <h3 className="text-base font-bold text-[#202124]">진단 결과 요약표</h3>
              </div>
              <span className="px-2.5 py-1 rounded font-bold text-xs bg-emerald-50 text-emerald-700 border border-emerald-100">
                {isEligible ? '전액 국비지원 대상자' : '일부 자부담 과정'}
              </span>
            </div>

            {/* Price Calculations */}
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs sm:text-sm">
                <span className="text-[#5F6368]">과정 정규 수강료</span>
                <span className="font-semibold text-slate-400 line-through tabular-nums">
                  ₩{course.tuitionOriginal.toLocaleString()}원
                </span>
              </div>

              <div className="flex items-center justify-between text-xs sm:text-sm">
                <span className="text-[#5F6368]">정부 지원금 (고용노동부)</span>
                <span className="font-bold text-[#1A73E8] tabular-nums">
                  - ₩{subsidyAmount.toLocaleString()}원
                </span>
              </div>

              <div className="p-4 rounded-xl bg-orange-50/60 border border-orange-100 flex items-center justify-between">
                <div>
                  <div className="text-xs font-semibold text-[#5F6368]">실제 본인 부담 수강료</div>
                  <div className="text-[11px] text-[#FF6B00]">내일배움카드 결제 시</div>
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold text-[#FF6B00] tabular-nums">
                  ₩{selfPayAmount.toLocaleString()}원
                </div>
              </div>

              {/* Monthly Cash Stipend */}
              <div className="p-4 rounded-xl bg-blue-50/50 border border-blue-100 space-y-2">
                <div className="flex items-center justify-between text-xs font-semibold">
                  <span className="text-[#202124]">매월 현금 훈련장려금</span>
                  <span className="text-[#1A73E8] font-bold text-base tabular-nums">
                    최대 ₩{monthlyStipend.toLocaleString()}원 / 월
                  </span>
                </div>
                <div className="flex items-center justify-between text-[11px] text-[#5F6368]">
                  <span>6개월 수강 기간 누적 지급액</span>
                  <span className="font-bold text-[#202124] tabular-nums">
                    최대 ₩{totalStipend6Months.toLocaleString()}원
                  </span>
                </div>
                <div className="text-[10px] text-slate-500 pt-1 border-t border-blue-100">
                  * 단위기간(1개월) 출석률 80% 이상 충족 시 본인 계좌로 현금 입금됩니다.
                </div>
              </div>
            </div>

            {/* Direct Action */}
            <div className="space-y-2 pt-2">
              <button
                onClick={onOpenRegister}
                type="button"
                className="w-full py-3.5 px-4 rounded-xl bg-[#FF6B00] hover:bg-[#E56000] text-white font-bold text-sm shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>이 자격으로 0원 수강신청하기</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="text-center text-[11px] text-[#5F6368]">
                신청서 작성 후 전담 상담사가 카드 발급과 수당 신청을 전액 무료로 안내해 드립니다.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { Quote, Briefcase, TrendingUp, Award, ExternalLink, CheckCircle } from 'lucide-react';
import { STUDENT_REVIEWS } from '../data/coursesData';
import { StudentReview } from '../types';

export const AlumniReviewsSection: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'non_major' | 'job_changer' | 'cs_major'>('all');

  const filteredReviews = STUDENT_REVIEWS.filter(rev => {
    if (filter === 'all') return true;
    return rev.background === filter;
  });

  return (
    <section id="reviews" className="py-12 sm:py-20 bg-[#F8F9FA] border-b border-[#E8EAED]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 space-y-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="text-xs font-bold text-[#1A73E8] tracking-wider uppercase mb-1">
              Verified Career Placement Outcomes
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#202124] tracking-tight">
              실제 취업 성공 선배들의 생생한 후기
            </h2>
            <p className="text-sm text-[#5F6368] mt-1">
              비전공자, 이직 준비생, 취업 재도전자 모두가 증명한 에이스 IT만의 차별화된 취업 결과입니다.
            </p>
          </div>

          {/* Background Filter Tabs */}
          <div className="flex items-center gap-1 p-1 bg-white rounded-lg border border-[#E8EAED] text-xs font-medium self-start md:self-auto">
            {[
              { id: 'all', label: '전체 후기' },
              { id: 'non_major', label: '비전공/문과 출신' },
              { id: 'job_changer', label: '개발직 이직 성공' },
              { id: 'cs_major', label: '전공자 취준 완성' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id as any)}
                type="button"
                className={`px-3 py-1.5 rounded-md cursor-pointer transition-colors whitespace-nowrap ${
                  filter === tab.id
                    ? 'bg-[#1A73E8] text-white font-bold shadow-xs'
                    : 'text-[#5F6368] hover:text-[#202124]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {filteredReviews.map((review: StudentReview) => (
            <div
              key={review.id}
              className="rounded-2xl border border-[#E8EAED] bg-white p-6 shadow-sm flex flex-col justify-between space-y-5 hover:border-[#1A73E8]/40 transition-all"
            >
              <div className="space-y-4">
                {/* Header: Company & Role */}
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl overflow-hidden border border-[#E8EAED] bg-slate-100 shrink-0">
                      <img
                        src={review.avatar}
                        alt={review.name}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="font-bold text-[#202124] text-sm">{review.name} 수료생</span>
                        <CheckCircle className="w-3.5 h-3.5 text-[#1A73E8]" />
                      </div>
                      <div className="text-xs text-[#5F6368]">{review.backgroundLabel}</div>
                    </div>
                  </div>

                  <span className="text-[11px] font-bold text-[#1A73E8] bg-blue-50 px-2 py-0.5 rounded border border-blue-100 shrink-0">
                    {review.cohort}
                  </span>
                </div>

                {/* Placed Company Badge Box */}
                <div className="p-3 rounded-xl bg-[#F8F9FA] border border-[#E8EAED] space-y-1.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-[#5F6368]">합격 기업</span>
                    <span className="font-bold text-base text-[#1A73E8]">{review.placedCompany}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-[#5F6368]">직무</span>
                    <span className="text-[#202124] font-medium">{review.role}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs pt-1 border-t border-[#E8EAED]">
                    <span className="font-semibold text-[#FF6B00]">연봉 상승/초봉</span>
                    <span className="font-bold text-[#FF6B00] tabular-nums">{review.salaryGrowth}</span>
                  </div>
                </div>

                {/* Core Quote */}
                <div className="relative pt-2">
                  <Quote className="w-6 h-6 text-slate-300 absolute -top-1 -left-1 opacity-40 pointer-events-none" />
                  <p className="text-xs sm:text-sm font-semibold text-[#202124] leading-relaxed relative z-10">
                    "{review.quote}"
                  </p>
                </div>

                {/* Detailed Review Text */}
                <p className="text-xs text-[#5F6368] leading-relaxed">
                  {review.detailedReview}
                </p>
              </div>

              {/* Portfolio Project Footnote */}
              <div className="pt-3 border-t border-[#E8EAED] text-xs">
                <div className="font-semibold text-[#5F6368] text-[11px] mb-1">합격 포트폴리오 핵심 주제:</div>
                <div className="text-xs text-[#202124] font-medium line-clamp-2">
                  {review.portfolioHighlight}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 100% Transparency Footnote */}
        <div className="text-center text-xs text-[#5F6368]">
          * 모든 취업 후기는 고용노동부 및 HRD-Net 취업 증빙 서류를 검증 완료한 실제 수료생의 자필 수기입니다.
        </div>
      </div>
    </section>
  );
};

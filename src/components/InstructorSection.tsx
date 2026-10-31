import React from 'react';
import { Award, Star, CheckCircle, Code2, Users } from 'lucide-react';
import { Instructor } from '../types';

interface InstructorSectionProps {
  instructors: Instructor[];
  onOpenRegister: () => void;
}

export const InstructorSection: React.FC<InstructorSectionProps> = ({
  instructors,
  onOpenRegister
}) => {
  return (
    <section id="instructors" className="py-12 sm:py-20 bg-white border-b border-[#E8EAED]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 space-y-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="text-xs font-bold text-[#1A73E8] tracking-wider uppercase mb-1">
              Top-Tier Industry Leaders & Mentors
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#202124] tracking-tight">
              네카라쿠배 현직 10년차 이상 시니어 직강
            </h2>
            <p className="text-sm text-[#5F6368] mt-1">
              검증되지 않은 강사가 아닌, 실제 대규모 서비스를 직접 운영하고 아키텍처를 설계한 베테랑 개발자가 밀착 코칭합니다.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-semibold text-[#5F6368] bg-[#F8F9FA] px-3 py-1.5 rounded-lg border border-[#E8EAED]">
            <Star className="w-4 h-4 text-[#FF6B00] fill-[#FF6B00]" />
            <span>수강생 평균 강의 만족도 4.97 / 5.0</span>
          </div>
        </div>

        {/* Instructor Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {instructors.map(instructor => (
            <div
              key={instructor.id}
              className="rounded-2xl border border-[#E8EAED] bg-white p-6 sm:p-8 shadow-sm flex flex-col justify-between space-y-6 hover:border-[#1A73E8]/50 transition-all group"
            >
              <div className="space-y-6">
                {/* Header Profile Row */}
                <div className="flex items-start gap-4">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 border-white shadow-md bg-slate-100 shrink-0">
                    <img
                      src={instructor.avatar}
                      alt={instructor.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  <div className="space-y-1 flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-lg sm:text-xl font-bold text-[#202124]">
                        {instructor.name}
                      </span>
                      <span className="text-xs font-semibold px-2 py-0.5 rounded bg-blue-50 text-[#1A73E8] border border-blue-100">
                        경력 {instructor.careerYears}년
                      </span>
                    </div>

                    <div className="text-xs sm:text-sm font-semibold text-[#1A73E8]">
                      {instructor.role}
                    </div>

                    <div className="text-xs text-[#5F6368]">
                      {instructor.company}
                    </div>

                    <div className="flex items-center gap-3 pt-1 text-xs text-[#5F6368]">
                      <span className="flex items-center gap-1 font-semibold text-[#202124]">
                        <Star className="w-3.5 h-3.5 text-[#FF6B00] fill-[#FF6B00]" />
                        {instructor.rating}
                      </span>
                      <span>·</span>
                      <span className="flex items-center gap-1">
                        <Users className="w-3.5 h-3.5 text-slate-400" />
                        누적 멘토링 {instructor.mentoredCount}명+
                      </span>
                    </div>
                  </div>
                </div>

                {/* Bio Prose */}
                <p className="text-xs sm:text-sm text-[#5F6368] leading-relaxed">
                  "{instructor.bio}"
                </p>

                {/* Key Career Milestones */}
                <div className="space-y-2 pt-2 border-t border-[#E8EAED]">
                  <div className="text-xs font-bold text-[#202124] uppercase tracking-wider">
                    주요 약력 & 실적
                  </div>
                  <div className="space-y-1.5 text-xs text-[#5F6368]">
                    {instructor.careerHistory.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-[#1A73E8] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Primary Subjects */}
                <div className="p-3 rounded-lg bg-[#F8F9FA] border border-[#E8EAED] text-xs">
                  <span className="font-bold text-[#202124]">담당 핵심 강의: </span>
                  <span className="text-[#1A73E8] font-semibold">{instructor.keyLecture}</span>
                </div>
              </div>

              {/* Mentoring Commitment */}
              <div className="pt-2">
                <div className="flex items-center justify-between text-xs text-[#5F6368] border-t border-[#E8EAED] pt-4">
                  <span>주 3회 1:1 코드 리뷰 & 오피스아워 배정</span>
                  <span className="font-semibold text-[#1A73E8]">실시간 질의응답</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

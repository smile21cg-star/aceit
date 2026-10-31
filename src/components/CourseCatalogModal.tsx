import React from 'react';
import { X, Check, ArrowRight, Clock, Users, Award, Sparkles } from 'lucide-react';
import { Course } from '../types';
import { COURSES } from '../data/coursesData';

interface CourseCatalogModalProps {
  currentCourseId: string;
  isOpen: boolean;
  onClose: () => void;
  onSelectCourse: (course: Course) => void;
}

export const CourseCatalogModal: React.FC<CourseCatalogModalProps> = ({
  currentCourseId,
  isOpen,
  onClose,
  onSelectCourse
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
      <div 
        className="w-full max-w-3xl bg-white rounded-2xl border border-[#E8EAED] shadow-2xl overflow-hidden flex flex-col max-h-[90vh] animate-in fade-in zoom-in-95 duration-200"
        role="dialog"
      >
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-[#E8EAED] flex items-center justify-between bg-[#F8F9FA]">
          <div>
            <div className="text-xs font-bold text-[#1A73E8] uppercase tracking-wider">
              ACE IT Bootcamp Catalog
            </div>
            <h3 className="text-lg font-bold text-[#202124] mt-0.5">
              전체 IT 전문 취업 부트캠프 과정 목록
            </h3>
          </div>

          <button
            onClick={onClose}
            type="button"
            className="w-8 h-8 rounded-full flex items-center justify-center text-[#5F6368] hover:bg-slate-200 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Course Cards List */}
        <div className="p-6 overflow-y-auto space-y-4">
          <p className="text-xs sm:text-sm text-[#5F6368]">
            모든 과정은 고용노동부 K-디지털 트레이닝(KDT) 지원으로 국민내일배움카드 발급 시 <strong className="text-[#FF6B00]">수강료 100% 무료</strong>로 참여할 수 있습니다.
          </p>

          <div className="space-y-3">
            {COURSES.map(course => {
              const isSelected = course.id === currentCourseId;
              const seatsLeft = course.quotaTotal - course.quotaEnrolled;

              return (
                <div
                  key={course.id}
                  className={`p-5 rounded-xl border transition-all ${
                    isSelected
                      ? 'border-[#1A73E8] bg-blue-50/20 ring-2 ring-blue-100 shadow-xs'
                      : 'border-[#E8EAED] bg-white hover:border-slate-300 hover:shadow-xs'
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                    <div className="space-y-1.5 flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-blue-50 text-[#1A73E8] border border-blue-100">
                          {course.badgeTag}
                        </span>
                        <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-orange-50 text-[#FF6B00] border border-orange-100">
                          {course.statusLabel}
                        </span>
                        {isSelected && (
                          <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-slate-900 text-white">
                            현재 보고 있는 과정
                          </span>
                        )}
                      </div>

                      <h4 className="text-base sm:text-lg font-bold text-[#202124]">
                        {course.title}
                      </h4>

                      <p className="text-xs text-[#5F6368] line-clamp-2">
                        {course.summary}
                      </p>

                      {/* Tech Chips */}
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {course.techStack.slice(0, 6).map(tech => (
                          <span
                            key={tech.name}
                            className="px-2 py-0.5 rounded bg-[#F8F9FA] border border-[#E8EAED] text-[11px] font-medium text-[#202124]"
                          >
                            {tech.name}
                          </span>
                        ))}
                        {course.techStack.length > 6 && (
                          <span className="px-2 py-0.5 rounded bg-[#F8F9FA] text-[11px] text-[#5F6368]">
                            +{course.techStack.length - 6}개 더보기
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Stats & Select Button */}
                    <div className="sm:text-right shrink-0 flex flex-col justify-between items-start sm:items-end gap-3 pt-3 sm:pt-0 border-t sm:border-t-0 border-[#E8EAED]">
                      <div>
                        <div className="text-xs text-[#5F6368]">취업률 / 잔여석</div>
                        <div className="text-sm font-bold text-[#1A73E8]">
                          {course.employmentRate}% · 잔여 {seatsLeft}석
                        </div>
                        <div className="text-[11px] text-[#FF6B00] font-bold">
                          국비 0원 (전액 무료)
                        </div>
                      </div>

                      <button
                        onClick={() => {
                          onSelectCourse(course);
                          onClose();
                        }}
                        type="button"
                        className={`px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                          isSelected
                            ? 'bg-[#1A73E8] text-white'
                            : 'bg-[#F8F9FA] hover:bg-slate-200 text-[#202124] border border-[#E8EAED]'
                        }`}
                      >
                        {isSelected ? (
                          <>
                            <Check className="w-3.5 h-3.5" />
                            <span>선택됨</span>
                          </>
                        ) : (
                          <>
                            <span>과정 살펴보기</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

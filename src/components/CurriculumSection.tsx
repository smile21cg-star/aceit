import React, { useState } from 'react';
import { 
  ChevronDown, 
  ChevronUp, 
  Search, 
  Download, 
  CheckCircle2, 
  FolderGit2, 
  Clock, 
  Sparkles,
  Layers
} from 'lucide-react';
import { Course, CurriculumWeek } from '../types';

interface CurriculumSectionProps {
  course: Course;
  onOpenSyllabus: () => void;
  onOpenRegister: () => void;
}

export const CurriculumSection: React.FC<CurriculumSectionProps> = ({
  course,
  onOpenSyllabus,
  onOpenRegister,
}) => {
  const [expandedWeeks, setExpandedWeeks] = useState<number[]>([1, 2, 5, 10, 11]);
  const [searchQuery, setSearchQuery] = useState('');
  const [phaseFilter, setPhaseFilter] = useState<'all' | 'foundation' | 'backend' | 'cloud' | 'project' | 'career'>('all');

  const toggleWeek = (weekNumber: number) => {
    setExpandedWeeks(prev =>
      prev.includes(weekNumber)
        ? prev.filter(w => w !== weekNumber)
        : [...prev, weekNumber]
    );
  };

  const expandAll = () => {
    setExpandedWeeks(course.curriculum.map(c => c.weekNumber));
  };

  const collapseAll = () => {
    setExpandedWeeks([]);
  };

  // Filter weeks
  const filteredCurriculum = course.curriculum.filter(week => {
    // Phase filter
    if (phaseFilter === 'foundation' && (week.weekNumber < 1 || week.weekNumber > 4)) return false;
    if (phaseFilter === 'backend' && (week.weekNumber < 5 || week.weekNumber > 8)) return false;
    if (phaseFilter === 'cloud' && (week.weekNumber < 9 || week.weekNumber > 15)) return false;
    if (phaseFilter === 'project' && (week.weekNumber < 16 || week.weekNumber > 21)) return false;
    if (phaseFilter === 'career' && (week.weekNumber < 22 || week.weekNumber > 24)) return false;

    // Search query
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    const matchTitle = week.title.toLowerCase().includes(q);
    const matchTopics = week.topics.some(t => t.toLowerCase().includes(q));
    const matchTools = week.tools.some(t => t.toLowerCase().includes(q));
    const matchDeliverable = week.deliverable.toLowerCase().includes(q);
    return matchTitle || matchTopics || matchTools || matchDeliverable;
  });

  return (
    <section id="curriculum" className="py-12 sm:py-20 bg-white border-b border-[#E8EAED]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 space-y-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="text-xs font-bold text-[#1A73E8] tracking-wider uppercase mb-1">
              Structured 24-Week Syllabus
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#202124] tracking-tight">
              실무 100% 반영 주차별 상세 커리큘럼
            </h2>
            <p className="text-sm text-[#5F6368] mt-1">
              기초 문법부터 10만 TPS 분산 트랜잭션과 K8s 클라우드 오케스트레이션까지 단계별로 체계화되어 있습니다.
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={onOpenSyllabus}
              type="button"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs sm:text-sm font-semibold text-[#1A73E8] bg-blue-50 hover:bg-blue-100/70 rounded-lg border border-blue-200 transition-colors cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>전체 커리큘럼 상세 PDF 다운로드</span>
            </button>
          </div>
        </div>

        {/* Phase Navigation & Search Bar */}
        <div className="p-4 rounded-xl bg-[#F8F9FA] border border-[#E8EAED] space-y-4">
          {/* Phase Filter Buttons */}
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-1 text-xs font-medium">
            <span className="text-[#5F6368] whitespace-nowrap shrink-0 pr-1">단계별 보기:</span>
            {[
              { id: 'all', label: '전체 (24주)' },
              { id: 'foundation', label: '1~4주: 모던 프론트 & 객체지향' },
              { id: 'backend', label: '5~8주: Spring Boot & DB 인덱싱' },
              { id: 'cloud', label: '9~15주: Docker, K8s & Kafka MSA' },
              { id: 'project', label: '16~21주: 대용량 파이널 프로젝트' },
              { id: 'career', label: '22~24주: 코테 & 1:1 취업 완성' },
            ].map(p => (
              <button
                key={p.id}
                onClick={() => setPhaseFilter(p.id as any)}
                type="button"
                className={`px-3 py-1.5 rounded-lg whitespace-nowrap cursor-pointer transition-all ${
                  phaseFilter === p.id
                    ? 'bg-[#1A73E8] text-white font-bold shadow-xs'
                    : 'bg-white text-[#5F6368] border border-[#E8EAED] hover:text-[#202124]'
                }`}
              >
                {p.label}
              </button>
            ))}
          </div>

          {/* Search Input & Expand Toggles */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-2 border-t border-[#E8EAED]">
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 text-[#5F6368] absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="기술 스택 또는 키워드 검색 (예: Kafka, Docker, JPA, Saga...)"
                className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm rounded-lg bg-white border border-[#E8EAED] text-[#202124] placeholder:text-slate-400 focus:outline-none focus:border-[#1A73E8] focus:ring-2 focus:ring-blue-100 transition-all"
              />
            </div>

            <div className="flex items-center gap-2 self-end sm:self-auto text-xs text-[#5F6368]">
              <span className="font-medium text-[#202124]">
                총 {filteredCurriculum.length}개 모듈 검색됨
              </span>
              <span className="text-[#E8EAED]">|</span>
              <button
                onClick={expandAll}
                type="button"
                className="hover:text-[#1A73E8] font-semibold cursor-pointer underline decoration-dotted"
              >
                모두 펼치기
              </button>
              <span>·</span>
              <button
                onClick={collapseAll}
                type="button"
                className="hover:text-[#1A73E8] font-semibold cursor-pointer underline decoration-dotted"
              >
                모두 접기
              </button>
            </div>
          </div>
        </div>

        {/* Curriculum Accordion List */}
        <div className="space-y-3">
          {filteredCurriculum.length === 0 ? (
            <div className="text-center py-12 bg-[#F8F9FA] rounded-xl border border-[#E8EAED]">
              <p className="text-sm font-semibold text-[#5F6368]">
                검색어 "{searchQuery}"와 일치하는 커리큘럼 모듈이 없습니다.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setPhaseFilter('all');
                }}
                className="mt-3 text-xs text-[#1A73E8] font-bold underline cursor-pointer"
              >
                필터 초기화하기
              </button>
            </div>
          ) : (
            filteredCurriculum.map(week => {
              const isExpanded = expandedWeeks.includes(week.weekNumber);
              return (
                <div
                  key={week.weekNumber}
                  className={`rounded-xl border transition-all duration-200 overflow-hidden ${
                    isExpanded
                      ? 'border-[#1A73E8]/40 bg-white shadow-xs'
                      : 'border-[#E8EAED] bg-white hover:border-slate-300'
                  }`}
                >
                  {/* Accordion Header */}
                  <button
                    onClick={() => toggleWeek(week.weekNumber)}
                    type="button"
                    className="w-full px-4 sm:px-6 py-4 flex items-center justify-between gap-3 text-left cursor-pointer transition-colors"
                  >
                    <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 flex-1 min-w-0">
                      {/* Week Badge */}
                      <span className="px-2.5 py-1 rounded font-mono text-xs font-bold bg-blue-50 text-[#1A73E8] border border-blue-100 shrink-0">
                        Week {String(week.weekNumber).padStart(2, '0')}
                      </span>

                      {/* Title */}
                      <span className="text-sm sm:text-base font-bold text-[#202124] truncate">
                        {week.title}
                      </span>
                    </div>

                    <div className="flex items-center gap-3 shrink-0">
                      <div className="hidden sm:flex items-center gap-1.5 text-xs text-[#5F6368]">
                        <Clock className="w-3.5 h-3.5 text-slate-400" />
                        <span>{week.hours}시간</span>
                      </div>

                      <div
                        className={`w-7 h-7 rounded-full flex items-center justify-center transition-transform ${
                          isExpanded ? 'bg-blue-50 text-[#1A73E8] rotate-180' : 'text-[#5F6368]'
                        }`}
                      >
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </div>
                  </button>

                  {/* Expanded Panel */}
                  {isExpanded && (
                    <div className="px-4 sm:px-6 py-5 border-t border-[#E8EAED] bg-[#F8F9FA]/60 space-y-5">
                      {/* Practical Project Deliverable Box */}
                      <div className="p-3.5 rounded-lg bg-white border border-[#E8EAED] flex items-start gap-3 shadow-2xs">
                        <FolderGit2 className="w-5 h-5 text-[#FF6B00] shrink-0 mt-0.5" />
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="text-[11px] font-bold text-[#FF6B00] uppercase tracking-wider">
                              주차별 산출물 과제
                            </span>
                          </div>
                          <div className="text-xs sm:text-sm font-bold text-[#202124] mt-0.5">
                            {week.deliverable}
                          </div>
                          {week.projectDescription && (
                            <p className="text-xs text-[#5F6368] mt-1 leading-relaxed">
                              {week.projectDescription}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Detailed Learning Outcomes */}
                      <div>
                        <div className="text-xs font-bold text-[#5F6368] uppercase tracking-wider mb-2.5">
                          학습 주제 및 실무 달성 목표
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm">
                          {week.topics.map((topic, idx) => (
                            <div key={idx} className="flex items-start gap-2 text-[#202124]">
                              <CheckCircle2 className="w-4 h-4 text-[#1A73E8] shrink-0 mt-0.5" />
                              <span className="leading-snug">{topic}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Tech Stack Chips for this week */}
                      <div className="pt-2 flex flex-wrap items-center gap-2 text-xs">
                        <span className="text-[#5F6368] font-medium text-xs">사용 도구:</span>
                        {week.tools.map(tool => (
                          <span
                            key={tool}
                            className="px-2 py-0.5 rounded bg-white border border-[#E8EAED] text-xs font-semibold text-[#202124]"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Bottom Banner within Curriculum */}
        <div className="p-6 rounded-2xl bg-[#005BFF]/5 border border-[#1A73E8]/20 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#1A73E8] text-white flex items-center justify-center shrink-0 shadow-sm">
              <Layers className="w-6 h-6" />
            </div>
            <div>
              <div className="text-base font-bold text-[#202124]">
                정규 커리큘럼 외에도 100시간의 온라인 사전 기초 학습(Pre-Course)이 제공됩니다
              </div>
              <div className="text-xs text-[#5F6368] mt-0.5">
                지원 확정 즉시 파이썬/자바 기본 문법, Git 기초 마스터 클래스가 무료 오픈됩니다.
              </div>
            </div>
          </div>

          <button
            onClick={onOpenRegister}
            type="button"
            className="px-5 py-2.5 rounded-lg bg-[#FF6B00] hover:bg-[#E56000] text-white text-xs sm:text-sm font-bold shadow-sm transition-all whitespace-nowrap cursor-pointer"
          >
            프리코스 포함 0원 수강신청
          </button>
        </div>
      </div>
    </section>
  );
};

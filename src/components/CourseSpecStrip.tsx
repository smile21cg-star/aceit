import React, { useState } from 'react';
import { 
  Layers, 
  Clock, 
  Award, 
  Terminal, 
  CheckCircle, 
  Sparkles,
  Building2
} from 'lucide-react';
import { Course } from '../types';
import { PARTNER_COMPANIES } from '../data/coursesData';

interface CourseSpecStripProps {
  course: Course;
  onOpenSyllabus: () => void;
  onOpenRegister: () => void;
}

export const CourseSpecStrip: React.FC<CourseSpecStripProps> = ({
  course,
  onOpenSyllabus,
  onOpenRegister
}) => {
  const [activeStackTab, setActiveStackTab] = useState<'all' | 'frontend' | 'backend' | 'database' | 'cloud'>('all');

  const filteredTech = course.techStack.filter(item => {
    if (activeStackTab === 'all') return true;
    if (activeStackTab === 'frontend') return item.category === 'frontend';
    if (activeStackTab === 'backend') return item.category === 'backend';
    if (activeStackTab === 'database') return item.category === 'database';
    if (activeStackTab === 'cloud') return item.category === 'cloud' || item.category === 'devops';
    return true;
  });

  return (
    <div id="overview" className="py-12 sm:py-16 bg-[#FAFAF9] border-b border-[#E8EAED]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="text-xs font-bold text-[#1A73E8] tracking-wider uppercase mb-1">
              Course Specification & Daily Routine
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#202124] tracking-tight">
              실무형 커리큘럼 & 몰입형 학습 환경
            </h2>
          </div>
          <p className="text-sm text-[#5F6368] max-w-lg">
            단순 강의 시청을 넘어 실제 스타트업 및 유니콘 기업의 개발 프로세스를 그대로 이식한 1일 8시간 풀타임 집중 트레이닝입니다.
          </p>
        </div>

        {/* 3 Grid Modules: Daily Routine, Tech Stack, and Hiring Partners */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* 1. Daily Bootcamp Schedule (5 cols) */}
          <div className="lg:col-span-5 bg-white rounded-xl border border-[#E8EAED] p-5 sm:p-6 shadow-sm">
            <div className="flex items-center gap-2 pb-4 border-b border-[#E8EAED] mb-4">
              <Clock className="w-5 h-5 text-[#1A73E8]" />
              <h3 className="text-base font-bold text-[#202124]">하루 8시간 몰입형 학습 루틴</h3>
            </div>

            <div className="space-y-4 text-xs sm:text-sm">
              <div className="flex items-start gap-3">
                <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-blue-50 text-[#1A73E8] border border-blue-100 shrink-0">
                  09:00 - 10:00
                </span>
                <div>
                  <div className="font-semibold text-[#202124]">모닝 스크럼 & 데일리 알고리즘 코테</div>
                  <div className="text-xs text-[#5F6368] mt-0.5">매일 1문제 백준/프로그래머스 필수 코테 풀이 및 코드 리뷰</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-blue-50 text-[#1A73E8] border border-blue-100 shrink-0">
                  10:00 - 13:00
                </span>
                <div>
                  <div className="font-semibold text-[#202124]">코어 테크 라이브 강의 & 아키텍처 분석</div>
                  <div className="text-xs text-[#5F6368] mt-0.5">네카라쿠배 시니어 아키텍트 직강, 이론 및 핵심 설계 원리</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-600 shrink-0">
                  13:00 - 14:00
                </span>
                <div>
                  <div className="font-semibold text-[#202124]">점심 식사 및 캠퍼스 휴식</div>
                  <div className="text-xs text-[#5F6368] mt-0.5">동료 수강생들과의 테크 네트워킹 및 라운지 휴식</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-blue-50 text-[#1A73E8] border border-blue-100 shrink-0">
                  14:00 - 18:00
                </span>
                <div>
                  <div className="font-semibold text-[#202124]">실전 핸즈온 프로젝트 & 1:1 테크 멘토링</div>
                  <div className="text-xs text-[#5F6368] mt-0.5">현직 튜터 상주, 막히는 버그 즉시 화면 공유 및 페어 프로그래밍</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-orange-50 text-[#FF6B00] border border-orange-100 shrink-0">
                  18:00 - 22:00
                </span>
                <div>
                  <div className="font-semibold text-[#202124]">자율 심화 스터디 (선택)</div>
                  <div className="text-xs text-[#5F6368] mt-0.5">강남 24시간 랩실 개방, 팀원들과의 파이널 스프린트 구현</div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#E8EAED] flex items-center justify-between text-xs text-[#5F6368]">
              <span>총 24주 (960시간 정규 과정)</span>
              <span className="font-semibold text-[#1A73E8]">출석률 80% 이상 수료 조건</span>
            </div>
          </div>

          {/* 2. Interactive Tech Stack Explorer (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-xl border border-[#E8EAED] p-5 sm:p-6 shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[#E8EAED]">
              <div className="flex items-center gap-2">
                <Terminal className="w-5 h-5 text-[#1A73E8]" />
                <h3 className="text-base font-bold text-[#202124]">습득하는 최신 테크 스택 (12개 핵심 기술)</h3>
              </div>

              {/* Stack Category Filter Tabs */}
              <div className="flex items-center gap-1 p-1 bg-[#F8F9FA] rounded-lg border border-[#E8EAED] overflow-x-auto text-xs">
                {(['all', 'frontend', 'backend', 'database', 'cloud'] as const).map(tab => (
                  <button
                    key={tab}
                    onClick={() => setActiveStackTab(tab)}
                    type="button"
                    className={`px-2.5 py-1 rounded font-medium whitespace-nowrap cursor-pointer transition-colors ${
                      activeStackTab === tab
                        ? 'bg-white text-[#1A73E8] font-bold shadow-xs'
                        : 'text-[#5F6368] hover:text-[#202124]'
                    }`}
                  >
                    {tab === 'all' && '전체'}
                    {tab === 'frontend' && '프론트엔드'}
                    {tab === 'backend' && '백엔드'}
                    {tab === 'database' && '데이터/캐시'}
                    {tab === 'cloud' && '클라우드/DevOps'}
                  </button>
                ))}
              </div>
            </div>

            {/* Tech Chips Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              {filteredTech.map(tech => (
                <div
                  key={tech.name}
                  className="p-2.5 rounded-lg border border-[#E8EAED] bg-[#F8F9FA] hover:bg-white hover:border-[#1A73E8] transition-all flex items-center justify-between group"
                >
                  <span className="text-xs font-semibold text-[#202124] group-hover:text-[#1A73E8]">
                    {tech.name}
                  </span>
                  <span className="text-[10px] font-medium text-[#5F6368] uppercase">
                    {tech.category}
                  </span>
                </div>
              ))}
            </div>

            {/* Practical Quality Standard Box */}
            <div className="p-4 rounded-xl bg-blue-50/50 border border-blue-100 flex items-start gap-3">
              <Sparkles className="w-5 h-5 text-[#1A73E8] shrink-0 mt-0.5" />
              <div className="text-xs leading-relaxed text-[#202124]">
                <strong className="font-semibold text-[#1A73E8]">현업 수준의 실전 아키텍처 보장:</strong> 모든 수강생은 단순 로컬 호스트 테스트가 아닌, AWS EKS 실제 클라우드 환경에 Docker 이미지를 빌드하고 Kubernetes 오토스케일링(HPA)과 Kafka 비동기 큐를 직접 배포해 포트폴리오를 완성합니다.
              </div>
            </div>

            {/* 450+ Partner Network */}
            <div className="pt-2">
              <div className="flex items-center gap-2 text-xs font-bold text-[#5F6368] mb-3">
                <Building2 className="w-4 h-4 text-[#1A73E8]" />
                <span>에이스 IT 수료생 진출 주요 기업 (450+ 제휴사)</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {PARTNER_COMPANIES.map(partner => (
                  <div key={partner.name} className="p-2 rounded border border-[#E8EAED] bg-white text-center">
                    <div className="text-xs font-bold text-[#202124]">{partner.name}</div>
                    <div className="text-[10px] text-[#5F6368] truncate mt-0.5">{partner.role}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { X, FileText, Download, CheckCircle2, Mail, Sparkles, BookOpen } from 'lucide-react';
import { Course } from '../types';

interface SyllabusModalProps {
  course: Course;
  isOpen: boolean;
  onClose: () => void;
}

export const SyllabusModal: React.FC<SyllabusModalProps> = ({ course, isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [downloaded, setDownloaded] = useState(false);

  if (!isOpen) return null;

  const handleDownload = (e: React.FormEvent) => {
    e.preventDefault();
    setDownloaded(true);

    // Create and trigger browser download of syllabus summary document
    const content = `[에이스 IT 아카데미 - ${course.title} 공식 24주 커리큘럼]\n\n` +
      `■ 총 교육 시간: ${course.totalHours}시간 (${course.durationWeeks}주)\n` +
      `■ 수강료: ₩${course.tuitionOriginal.toLocaleString()}원 (국비 전액 지원 시 0원)\n` +
      `■ 훈련 장려금: 매월 최대 ₩${course.stipendMonthlyMax.toLocaleString()}원 현금 지급\n\n` +
      `----------------------------------------\n` +
      `[주차별 핵심 학습 모듈 및 산출물 과제]\n` +
      course.curriculum.map(c => `Week ${c.weekNumber}: ${c.title}\n - 과제: ${c.deliverable}\n - 주요 기술: ${c.tools.join(', ')}\n`).join('\n') +
      `\n\n■ 취업 지원: 수료 후 1년 간 1:1 테크 레주메 첨삭 및 450개 협력사 추천 채용 연계\n` +
      `■ 문의: 02-588-1234 / support@ace-it.kr`;

    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `AceIT_${course.id}_Syllabus_2026.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
      <div 
        className="w-full max-w-xl bg-white rounded-2xl border border-[#E8EAED] shadow-2xl overflow-hidden flex flex-col max-h-[90vh] animate-in fade-in zoom-in-95 duration-200"
        role="dialog"
      >
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-[#E8EAED] flex items-center justify-between bg-[#F8F9FA]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#1A73E8] flex items-center justify-center">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-[#202124]">
                상세 커리큘럼 & 취업 가이드북 다운로드
              </h3>
              <p className="text-xs text-[#5F6368]">
                {course.title} (총 36페이지 풀 패키지)
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            type="button"
            className="w-8 h-8 rounded-full flex items-center justify-center text-[#5F6368] hover:bg-slate-200 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-6">
          {downloaded ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-lg font-bold text-[#202124]">
                다운로드가 시작되었습니다!
              </h4>
              <p className="text-xs sm:text-sm text-[#5F6368] max-w-sm mx-auto">
                입력하신 이메일({email || '등록 이메일'})로도 전체 PDF 브로슈어와 [2026 빅테크 코딩테스트 기출 50선]이 즉시 발송되었습니다.
              </p>
              <button
                onClick={onClose}
                type="button"
                className="py-2.5 px-6 rounded-lg bg-[#1A73E8] hover:bg-blue-700 text-white font-bold text-xs sm:text-sm transition-all cursor-pointer"
              >
                닫기
              </button>
            </div>
          ) : (
            <>
              {/* PDF Preview Summary Card */}
              <div className="p-4 rounded-xl bg-[#F8F9FA] border border-[#E8EAED] space-y-3">
                <div className="flex items-center justify-between text-xs font-bold text-[#202124]">
                  <span className="flex items-center gap-1.5">
                    <BookOpen className="w-4 h-4 text-[#1A73E8]" />
                    <span>자료집 포함 내역 (36 Pages)</span>
                  </span>
                  <span className="text-[#1A73E8]">PDF 문서</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#5F6368]">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>24주차 일자별 세부 강의 계획서</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>파이널 프로젝트 4개 도메인 명세서</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>실제 수료생 합격 포트폴리오 3선</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>빅테크 기술면접 빈출 질문 100선</span>
                  </div>
                </div>
              </div>

              {/* Form */}
              <form onSubmit={handleDownload} className="space-y-4">
                <div>
                  <label className="text-xs font-bold text-[#202124] block mb-1">
                    이메일 주소 입력 (자료집 발송용)
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-[#5F6368] absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      placeholder="자료를 수신할 이메일을 입력하세요"
                      className="w-full pl-9 pr-3 py-2.5 text-xs sm:text-sm rounded-lg border border-[#E8EAED] focus:outline-none focus:border-[#1A73E8] focus:ring-2 focus:ring-blue-100"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-4 rounded-xl bg-[#1A73E8] hover:bg-blue-700 active:scale-[0.99] text-white font-bold text-xs sm:text-sm shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                  <span>즉시 다운로드 & 이메일 받기 (무료)</span>
                </button>

                <div className="text-[11px] text-[#5F6368] text-center">
                  * 스팸 메일은 절대 발송되지 않으며, 언제든지 수신을 거부할 수 있습니다.
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

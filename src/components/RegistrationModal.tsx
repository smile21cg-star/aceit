import React, { useState } from 'react';
import { 
  X, 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft, 
  Calendar, 
  Clock, 
  Sparkles, 
  PhoneCall, 
  ShieldCheck,
  Send
} from 'lucide-react';
import { Course, RegistrationData } from '../types';

interface RegistrationModalProps {
  course: Course;
  isOpen: boolean;
  onClose: () => void;
}

export const RegistrationModal: React.FC<RegistrationModalProps> = ({
  course,
  isOpen,
  onClose
}) => {
  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState<RegistrationData>({
    courseId: course.id,
    courseTitle: course.title,
    studyMode: 'hybrid_gangnam',
    hasNaeilBaeumCard: 'yes',
    applicantName: '',
    applicantPhone: '',
    applicantEmail: '',
    background: 'non_major',
    interviewTimeSlot: '내일 오후 14:00',
    agreedToTerms: true
  });

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [registrationCode, setRegistrationCode] = useState<string>('');

  if (!isOpen) return null;

  const handleNext = () => {
    if (step === 3) {
      if (!formData.applicantName.trim() || !formData.applicantPhone.trim()) {
        alert('이름과 연락처를 입력해 주세요.');
        return;
      }
    }
    setStep(prev => prev + 1);
  };

  const handleBack = () => {
    setStep(prev => Math.max(1, prev - 1));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      const code = 'ACE-' + Math.floor(100000 + Math.random() * 900000);
      setRegistrationCode(code);
    }, 900);
  };

  const resetAndClose = () => {
    setStep(1);
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
      <div 
        className="w-full max-w-xl bg-white rounded-2xl border border-[#E8EAED] shadow-2xl overflow-hidden flex flex-col max-h-[90vh] animate-in fade-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
      >
        {/* Modal Header */}
        <div className="p-4 sm:p-5 border-b border-[#E8EAED] flex items-center justify-between bg-[#F8F9FA]">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FF6B00]" />
              <span className="text-xs font-bold text-[#FF6B00]">선착순 정원 마감 임박</span>
            </div>
            <h3 className="text-base sm:text-lg font-bold text-[#202124] mt-0.5">
              {course.title} 수강신청
            </h3>
          </div>

          <button
            onClick={resetAndClose}
            type="button"
            className="w-8 h-8 rounded-full flex items-center justify-center text-[#5F6368] hover:bg-slate-200 transition-colors cursor-pointer"
            aria-label="닫기"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Progress Indicator */}
        {!isSubmitted && (
          <div className="px-6 pt-4 bg-white border-b border-[#E8EAED]">
            <div className="flex items-center justify-between text-xs font-semibold text-[#5F6368] mb-2">
              <span className={step >= 1 ? 'text-[#1A73E8]' : ''}>1. 학습 형태</span>
              <span className={step >= 2 ? 'text-[#1A73E8]' : ''}>2. 국비 카드</span>
              <span className={step >= 3 ? 'text-[#1A73E8]' : ''}>3. 지원자 정보</span>
              <span className={step >= 4 ? 'text-[#1A73E8]' : ''}>4. 면담 예약</span>
            </div>
            <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
              <div 
                className="bg-[#1A73E8] h-full transition-all duration-300"
                style={{ width: `${(step / 4) * 100}%` }}
              />
            </div>
          </div>
        )}

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto flex-1">
          {isSubmitted ? (
            /* Success State */
            <div className="py-6 text-center space-y-5">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div>
                <h4 className="text-xl font-bold text-[#202124]">
                  {formData.applicantName}님, 수강신청이 성공적으로 접수되었습니다!
                </h4>
                <p className="text-xs sm:text-sm text-[#5F6368] mt-1.5">
                  접수 번호: <span className="font-mono font-bold text-[#1A73E8]">{registrationCode}</span>
                </p>
              </div>

              {/* Confirmation Details Card */}
              <div className="p-4 rounded-xl bg-[#F8F9FA] border border-[#E8EAED] text-left text-xs space-y-2.5 max-w-md mx-auto">
                <div className="flex justify-between">
                  <span className="text-[#5F6368]">신청 과정:</span>
                  <span className="font-semibold text-[#202124]">{course.title}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#5F6368]">수강 형태:</span>
                  <span className="font-semibold text-[#202124]">
                    {formData.studyMode === 'hybrid_gangnam' ? '강남 캠퍼스 현장 오프라인' : '100% 온라인 실시간 라이브'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#5F6368]">수강료 본인 부담금:</span>
                  <span className="font-bold text-[#FF6B00]">₩0원 (100% 국비 전액 무료)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#5F6368]">배정된 1:1 상담 일정:</span>
                  <span className="font-semibold text-[#1A73E8]">{formData.interviewTimeSlot}</span>
                </div>
                <div className="flex justify-between pt-2 border-t border-[#E8EAED]">
                  <span className="text-[#5F6368]">안내 문자 발송:</span>
                  <span className="font-mono text-emerald-700">{formData.applicantPhone} (전송 완료)</span>
                </div>
              </div>

              <div className="p-3 bg-blue-50/60 rounded-lg text-xs text-[#1A73E8] max-w-md mx-auto">
                💡 담당 어드바이저가 1시간 이내로 전화를 드려 국민내일배움카드 발급 및 프리코스 계정을 즉시 발급해 드립니다.
              </div>

              <button
                onClick={resetAndClose}
                type="button"
                className="w-full max-w-md mx-auto py-3 rounded-xl bg-[#1A73E8] hover:bg-blue-700 text-white font-bold text-sm shadow-sm transition-all cursor-pointer"
              >
                확인 및 메인 화면으로 돌아가기
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Step 1: Study Mode */}
              {step === 1 && (
                <div className="space-y-4">
                  <div className="text-xs font-bold text-[#202124] uppercase tracking-wider">
                    희망하시는 수강 방식을 선택해주세요
                  </div>

                  <div className="space-y-3">
                    <label 
                      onClick={() => setFormData(p => ({ ...p, studyMode: 'hybrid_gangnam' }))}
                      className={`p-4 rounded-xl border flex items-start justify-between cursor-pointer transition-all ${
                        formData.studyMode === 'hybrid_gangnam'
                          ? 'border-[#1A73E8] bg-blue-50/40 ring-2 ring-blue-100'
                          : 'border-[#E8EAED] hover:bg-[#F8F9FA]'
                      }`}
                    >
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-sm text-[#202124]">강남 캠퍼스 현장 온·오프라인 (추천)</span>
                          <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-blue-50 text-[#1A73E8] border border-blue-100">
                            인기
                          </span>
                        </div>
                        <p className="text-xs text-[#5F6368]">
                          강남역 2번 출구 캠퍼스 지정석 제공, 24시간 랩실 이용, 현직 튜터 1:1 대면 질문
                        </p>
                      </div>
                      <input 
                        type="radio" 
                        name="studyMode" 
                        checked={formData.studyMode === 'hybrid_gangnam'} 
                        onChange={() => {}} 
                        className="w-4 h-4 accent-[#1A73E8] mt-1" 
                      />
                    </label>

                    <label 
                      onClick={() => setFormData(p => ({ ...p, studyMode: 'online_live' }))}
                      className={`p-4 rounded-xl border flex items-start justify-between cursor-pointer transition-all ${
                        formData.studyMode === 'online_live'
                          ? 'border-[#1A73E8] bg-blue-50/40 ring-2 ring-blue-100'
                          : 'border-[#E8EAED] hover:bg-[#F8F9FA]'
                      }`}
                    >
                      <div className="space-y-1">
                        <span className="font-bold text-sm text-[#202124]">100% 온라인 실시간 라이브 스트리밍</span>
                        <p className="text-xs text-[#5F6368]">
                          지방 거주자 및 비수도권 학생 대상, 디스코드 24시간 게더타운 가상 캠퍼스 출석
                        </p>
                      </div>
                      <input 
                        type="radio" 
                        name="studyMode" 
                        checked={formData.studyMode === 'online_live'} 
                        onChange={() => {}} 
                        className="w-4 h-4 accent-[#1A73E8] mt-1" 
                      />
                    </label>
                  </div>
                </div>
              )}

              {/* Step 2: Card Status */}
              {step === 2 && (
                <div className="space-y-4">
                  <div className="text-xs font-bold text-[#202124] uppercase tracking-wider">
                    국민내일배움카드 소지 여부를 알려주세요
                  </div>

                  <div className="grid grid-cols-1 gap-2.5">
                    {[
                      { id: 'yes', title: '내일배움카드를 이미 가지고 있습니다', desc: '즉시 수강 등록 및 0원 결제가 가능합니다.' },
                      { id: 'no', title: '아직 카드가 없습니다 (신규 발급 필요)', desc: '에이스 IT에서 HRD-Net 온라인 원스톱 발급을 100% 무료 대행해 드립니다.' },
                      { id: 'pending', title: '발급 신청 후 심사 중입니다', desc: '수령 즉시 연동해 드립니다.' }
                    ].map(cardOpt => (
                      <button
                        key={cardOpt.id}
                        type="button"
                        onClick={() => setFormData(p => ({ ...p, hasNaeilBaeumCard: cardOpt.id as any }))}
                        className={`p-4 rounded-xl border text-left cursor-pointer transition-all ${
                          formData.hasNaeilBaeumCard === cardOpt.id
                            ? 'border-[#1A73E8] bg-blue-50/40 ring-2 ring-blue-100'
                            : 'border-[#E8EAED] hover:bg-[#F8F9FA]'
                        }`}
                      >
                        <div className="font-bold text-xs sm:text-sm text-[#202124]">{cardOpt.title}</div>
                        <div className="text-[11px] text-[#5F6368] mt-0.5">{cardOpt.desc}</div>
                      </button>
                    ))}
                  </div>

                  <div className="p-3 rounded-lg bg-orange-50/70 border border-orange-100 text-xs text-[#FF6B00]">
                    💰 수강료 890만 원 전액 국비 지원 + 매월 최대 316,000원 훈련장려금 지급 혜택이 적용됩니다.
                  </div>
                </div>
              )}

              {/* Step 3: Applicant info */}
              {step === 3 && (
                <div className="space-y-4">
                  <div className="text-xs font-bold text-[#202124] uppercase tracking-wider">
                    지원자 기본 정보를 입력해 주세요
                  </div>

                  <div className="space-y-3">
                    <div>
                      <label className="text-xs font-semibold text-[#202124] block mb-1">
                        성명 (실명 입력) *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.applicantName}
                        onChange={e => setFormData(p => ({ ...p, applicantName: e.target.value }))}
                        placeholder="예: 홍길동"
                        className="w-full px-3 py-2 text-xs sm:text-sm rounded-lg border border-[#E8EAED] focus:outline-none focus:border-[#1A73E8] focus:ring-2 focus:ring-blue-100"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-[#202124] block mb-1">
                        연락처 (휴대전화 번호) *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.applicantPhone}
                        onChange={e => setFormData(p => ({ ...p, applicantPhone: e.target.value }))}
                        placeholder="예: 010-1234-5678"
                        className="w-full px-3 py-2 text-xs sm:text-sm rounded-lg border border-[#E8EAED] focus:outline-none focus:border-[#1A73E8] focus:ring-2 focus:ring-blue-100"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-[#202124] block mb-1">
                        이메일 주소 (선발 안내 및 프리코스 수신)
                      </label>
                      <input
                        type="email"
                        value={formData.applicantEmail}
                        onChange={e => setFormData(p => ({ ...p, applicantEmail: e.target.value }))}
                        placeholder="예: developer@example.com"
                        className="w-full px-3 py-2 text-xs sm:text-sm rounded-lg border border-[#E8EAED] focus:outline-none focus:border-[#1A73E8] focus:ring-2 focus:ring-blue-100"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-[#202124] block mb-1">
                        현재 본인의 전공/배경
                      </label>
                      <select
                        value={formData.background}
                        onChange={e => setFormData(p => ({ ...p, background: e.target.value as any }))}
                        className="w-full px-3 py-2 text-xs sm:text-sm rounded-lg border border-[#E8EAED] bg-white focus:outline-none focus:border-[#1A73E8]"
                      >
                        <option value="non_major">비전공자 (문과 / 사회 / 예체능 등)</option>
                        <option value="cs_major">컴퓨터공학 / IT 전공자</option>
                        <option value="employed">타 직종 직장인 (이직 준비)</option>
                        <option value="job_seeker">IT 취업 준비생 (부트캠프 재수강)</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 4: Interview & Terms */}
              {step === 4 && (
                <div className="space-y-4">
                  <div className="text-xs font-bold text-[#202124] uppercase tracking-wider">
                    사전 1:1 진로 상담 & 입학 면담 일정 선택
                  </div>

                  <p className="text-xs text-[#5F6368]">
                    신청서 접수 후 희망하시는 시간대에 전담 커리어 매니저가 유선으로 10분간 맞춤 상담을 진행합니다.
                  </p>

                  <div className="grid grid-cols-2 gap-2 text-xs">
                    {[
                      '내일 오전 10:30',
                      '내일 오후 14:00',
                      '내일 오후 16:30',
                      '내일 저녁 19:30',
                      '모레 오전 11:00',
                      '모레 오후 15:00'
                    ].map(slot => (
                      <button
                        key={slot}
                        type="button"
                        onClick={() => setFormData(p => ({ ...p, interviewTimeSlot: slot }))}
                        className={`p-3 rounded-lg border text-center cursor-pointer transition-all ${
                          formData.interviewTimeSlot === slot
                            ? 'border-[#1A73E8] bg-blue-50 text-[#1A73E8] font-bold ring-1 ring-[#1A73E8]'
                            : 'border-[#E8EAED] hover:bg-[#F8F9FA] text-[#202124]'
                        }`}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>

                  <div className="pt-3 border-t border-[#E8EAED]">
                    <label className="flex items-center gap-2 text-xs text-[#5F6368] cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.agreedToTerms}
                        onChange={e => setFormData(p => ({ ...p, agreedToTerms: e.target.checked }))}
                        className="w-4 h-4 accent-[#1A73E8]"
                      />
                      <span>(필수) 개인정보 수집 및 K-디지털 트레이닝 지원 상담 연락에 동의합니다.</span>
                    </label>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex items-center justify-between pt-4 border-t border-[#E8EAED]">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={handleBack}
                    className="px-4 py-2 text-xs font-semibold text-[#5F6368] hover:text-[#202124] cursor-pointer flex items-center gap-1"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>이전</span>
                  </button>
                ) : (
                  <div />
                )}

                {step < 4 ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="px-5 py-2.5 rounded-lg bg-[#1A73E8] hover:bg-blue-700 text-white font-bold text-xs sm:text-sm shadow-sm transition-all flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>다음 단계</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={isSubmitting || !formData.agreedToTerms}
                    className="px-6 py-2.5 rounded-lg bg-[#FF6B00] hover:bg-[#E56000] disabled:bg-slate-300 text-white font-bold text-xs sm:text-sm shadow-sm transition-all flex items-center gap-1.5 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span>신청서 전송 중...</span>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>선착순 수강신청 제출</span>
                      </>
                    )}
                  </button>
                )}
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

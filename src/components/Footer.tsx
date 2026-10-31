import React from 'react';
import { Shield, Award, CheckCircle, ExternalLink } from 'lucide-react';

interface FooterProps {
  onOpenCatalog: () => void;
  onOpenSubsidyCalc: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenCatalog, onOpenSubsidyCalc }) => {
  return (
    <footer className="bg-white border-t border-[#E8EAED] pb-24 pt-12 sm:pt-16 text-[#5F6368] text-xs">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 space-y-10">
        {/* Top Badges Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pb-8 border-b border-[#E8EAED]">
          <div className="flex items-center gap-3 p-3 rounded-xl bg-[#F8F9FA] border border-[#E8EAED]">
            <Award className="w-5 h-5 text-[#1A73E8] shrink-0" />
            <div>
              <div className="font-bold text-[#202124]">고용노동부 최우수 훈련기관</div>
              <div className="text-[11px] text-[#5F6368]">직업능력심사평가원 5년 인증 획득</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-xl bg-[#F8F9FA] border border-[#E8EAED]">
            <Shield className="w-5 h-5 text-emerald-600 shrink-0" />
            <div>
              <div className="font-bold text-[#202124]">K-Digital Training 공식 운영사</div>
              <div className="text-[11px] text-[#5F6368]">디지털 신기술 핵심 실무 인재 양성</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-xl bg-[#F8F9FA] border border-[#E8EAED]">
            <CheckCircle className="w-5 h-5 text-[#FF6B00] shrink-0" />
            <div>
              <div className="font-bold text-[#202124]">수강생 취업 사후관리 1년 보장</div>
              <div className="text-[11px] text-[#5F6368]">수료 후 450개 파트너사 단독 추천 채용</div>
            </div>
          </div>
        </div>

        {/* Corporate Details */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand & Mission */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-[#1A73E8] text-white flex items-center justify-center font-black text-xs">
                ACE
              </span>
              <span className="text-base font-bold text-[#202124]">Ace IT Learning System</span>
            </div>
            <p className="text-xs text-[#5F6368] leading-relaxed max-w-md">
              (주)에이스아이티아카데미는 대한민국 IT 인재의 성장을 지원하며, 실무 중심의 엔지니어링 역량 개발과 지속 가능한 소프트웨어 커리어를 만들어갑니다.
            </p>
            <div className="text-xs space-y-1 text-[#5F6368]">
              <div>대표이사: 박준형 | 사업자등록번호: 214-88-01948 | 통신판매업신고: 제2024-서울강남-1049호</div>
              <div>직업정보제공사업신고: 서울청 제2024-12호 | 개인정보관리책임자: 김도현 (privacy@ace-it.kr)</div>
              <div>고객센터: 02-588-1234 (평일 09:00 ~ 21:00, 주말/공휴일 휴무)</div>
            </div>
          </div>

          {/* Campuses */}
          <div className="space-y-2">
            <div className="font-bold text-[#202124] text-xs uppercase tracking-wider">
              캠퍼스 안내
            </div>
            <div className="space-y-2 text-xs">
              <div>
                <strong className="text-[#202124] block">강남 본원 캠퍼스</strong>
                <span>서울특별시 강남구 테헤란로 142 아케이드빌딩 4~6층 (강남역 2번 출구 도보 3분)</span>
              </div>
              <div className="pt-1">
                <strong className="text-[#202124] block">판교 테크 캠퍼스</strong>
                <span>경기도 성남시 분당구 판교역로 192 테크노원빌딩 8층</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-2">
            <div className="font-bold text-[#202124] text-xs uppercase tracking-wider">
              관련 사이트 & 서비스
            </div>
            <div className="space-y-1.5 text-xs flex flex-col">
              <button
                onClick={onOpenCatalog}
                type="button"
                className="hover:text-[#1A73E8] text-left cursor-pointer transition-colors"
              >
                전체 부트캠프 목록
              </button>
              <button
                onClick={onOpenSubsidyCalc}
                type="button"
                className="hover:text-[#1A73E8] text-left cursor-pointer transition-colors"
              >
                국민내일배움카드 자격진단
              </button>
              <a
                href="https://www.hrd.go.kr"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#1A73E8] flex items-center gap-1 transition-colors"
              >
                <span>고용노동부 HRD-Net 바로가기</span>
                <ExternalLink className="w-3 h-3 text-slate-400" />
              </a>
              <a
                href="#curriculum"
                className="hover:text-[#1A73E8] transition-colors"
              >
                24주 세부 커리큘럼
              </a>
              <a
                href="#reviews"
                className="hover:text-[#1A73E8] transition-colors"
              >
                선배 합격자 취업후기
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-6 border-t border-[#E8EAED] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#5F6368]">
          <div>
            © 2026 Ace IT Learning System Inc. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <a href="#terms" className="hover:text-[#202124]">이용약관</a>
            <span>·</span>
            <a href="#privacy" className="hover:text-[#202124] font-semibold text-[#202124]">개인정보처리방침</a>
            <span>·</span>
            <a href="#refund" className="hover:text-[#202124]">수강료 환불규정</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

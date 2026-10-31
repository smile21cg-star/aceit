import React, { useState } from 'react';
import { 
  Cpu, 
  Database, 
  Activity, 
  Zap, 
  Server, 
  CheckCircle, 
  AlertTriangle,
  RotateCcw,
  Sliders
} from 'lucide-react';

export const ArchitectureLabSimulator: React.FC = () => {
  const [rps, setRps] = useState<number>(15000);
  const [redisCache, setRedisCache] = useState<boolean>(true);
  const [kafkaQueue, setKafkaQueue] = useState<boolean>(true);
  const [autoScaleHpa, setAutoScaleHpa] = useState<boolean>(true);

  // Compute simulated dynamic metrics
  // Base latency without cache: 200ms + rps/100
  // With cache: 8ms + (rps/2000)
  const simulatedLatency = redisCache 
    ? Math.round(8 + (rps / 4000) * (kafkaQueue ? 1 : 1.8))
    : Math.round(180 + (rps / 120));

  const dbCpu = redisCache
    ? Math.min(99, Math.round(15 + (rps / 3000)))
    : Math.min(100, Math.round(35 + (rps / 400)));

  const podCount = autoScaleHpa
    ? Math.max(2, Math.min(24, Math.ceil(rps / 2500)))
    : 3;

  const isOverloaded = dbCpu > 85 || simulatedLatency > 300;

  const resetParams = () => {
    setRps(15000);
    setRedisCache(true);
    setKafkaQueue(true);
    setAutoScaleHpa(true);
  };

  return (
    <section id="simulator" className="py-12 sm:py-20 bg-[#F8F9FA] border-b border-[#E8EAED]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 space-y-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="text-xs font-bold text-[#1A73E8] tracking-wider uppercase mb-1">
              Hands-on Architecture Lab Experience
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#202124] tracking-tight">
              수강생이 직접 구축하는 분산 MSA 아키텍처 실시간 시뮬레이터
            </h2>
            <p className="text-sm text-[#5F6368] mt-1">
              트래픽 부하와 분산 인프라 옵션을 변경해보며 Redis 캐시, Kafka 이벤트 큐, K8s HPA의 실제 성능 차이를 체감해보세요.
            </p>
          </div>

          <button
            onClick={resetParams}
            type="button"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-[#5F6368] hover:text-[#202124] bg-white border border-[#E8EAED] rounded-lg transition-colors cursor-pointer self-start md:self-auto"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>기본값 초기화</span>
          </button>
        </div>

        {/* Simulator Grid (Controls & Live Telemetry) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Column: Interactive Controls (5 cols) */}
          <div className="lg:col-span-5 bg-white rounded-xl border border-[#E8EAED] p-5 sm:p-6 shadow-sm space-y-6">
            <div className="flex items-center gap-2 pb-4 border-b border-[#E8EAED]">
              <Sliders className="w-5 h-5 text-[#1A73E8]" />
              <h3 className="text-base font-bold text-[#202124]">트래픽 부하 및 분산 인프라 컨트롤</h3>
            </div>

            {/* RPS Slider */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-[#202124]">초당 요청수 (RPS / Traffic Load)</span>
                <span className="font-mono font-bold text-[#1A73E8] text-sm tabular-nums">
                  {rps.toLocaleString()} RPS
                </span>
              </div>
              <input
                type="range"
                min="500"
                max="50000"
                step="500"
                value={rps}
                onChange={e => setRps(Number(e.target.value))}
                className="w-full accent-[#1A73E8] cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-[#5F6368]">
                <span>500 RPS (소규모)</span>
                <span>20,000 RPS (티켓팅)</span>
                <span>50,000 RPS (블랙프라이데이)</span>
              </div>
            </div>

            {/* Architecture Feature Switches */}
            <div className="space-y-3 pt-2">
              <div className="text-xs font-bold text-[#5F6368] uppercase tracking-wider">
                인프라 컴포넌트 활성화
              </div>

              {/* Redis Cache Toggle */}
              <label className="flex items-center justify-between p-3 rounded-lg border border-[#E8EAED] hover:bg-[#F8F9FA] cursor-pointer transition-colors">
                <div className="flex items-center gap-2.5">
                  <Database className="w-4 h-4 text-[#1A73E8]" />
                  <div>
                    <div className="text-xs font-bold text-[#202124]">Redis 인메모리 캐싱 (Cache-Aside)</div>
                    <div className="text-[11px] text-[#5F6368]">DB 직격 쿼리를 85% 이상 차단</div>
                  </div>
                </div>
                <input
                  type="checkbox"
                  checked={redisCache}
                  onChange={e => setRedisCache(e.target.checked)}
                  className="w-4 h-4 accent-[#1A73E8] cursor-pointer"
                />
              </label>

              {/* Kafka Event Queue Toggle */}
              <label className="flex items-center justify-between p-3 rounded-lg border border-[#E8EAED] hover:bg-[#F8F9FA] cursor-pointer transition-colors">
                <div className="flex items-center gap-2.5">
                  <Zap className="w-4 h-4 text-[#FF6B00]" />
                  <div>
                    <div className="text-xs font-bold text-[#202124]">Apache Kafka 비동기 이벤트 큐</div>
                    <div className="text-[11px] text-[#5F6368]">주문/결제 트랜잭션 버퍼링 & 장애 격리</div>
                  </div>
                </div>
                <input
                  type="checkbox"
                  checked={kafkaQueue}
                  onChange={e => setKafkaQueue(e.target.checked)}
                  className="w-4 h-4 accent-[#FF6B00] cursor-pointer"
                />
              </label>

              {/* K8s HPA Toggle */}
              <label className="flex items-center justify-between p-3 rounded-lg border border-[#E8EAED] hover:bg-[#F8F9FA] cursor-pointer transition-colors">
                <div className="flex items-center gap-2.5">
                  <Server className="w-4 h-4 text-emerald-600" />
                  <div>
                    <div className="text-xs font-bold text-[#202124]">K8s Pod 오토스케일링 (HPA)</div>
                    <div className="text-[11px] text-[#5F6368]">CPU 70% 초과 시 컨테이너 자동 증설</div>
                  </div>
                </div>
                <input
                  type="checkbox"
                  checked={autoScaleHpa}
                  onChange={e => setAutoScaleHpa(e.target.checked)}
                  className="w-4 h-4 accent-emerald-600 cursor-pointer"
                />
              </label>
            </div>

            {/* Architecture Tip */}
            <div className="p-3.5 rounded-lg bg-blue-50/60 border border-blue-100 text-xs text-[#202124] leading-relaxed">
              <span className="font-semibold text-[#1A73E8]">실무 포인트:</span> Redis 캐시를 끄고 30,000 RPS를 주입해보세요. DB 부하가 99%에 달하며 응답 속도가 300ms 이상 치솟는 장애 상태를 직접 확인할 수 있습니다.
            </div>
          </div>

          {/* Right Column: Live Telemetry & Blueprint Diagram (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Live Telemetry KPI Cards */}
            <div className="grid grid-cols-3 gap-3">
              {/* Latency */}
              <div className={`p-4 rounded-xl border transition-all ${
                simulatedLatency > 200
                  ? 'bg-red-50/60 border-red-200'
                  : 'bg-white border-[#E8EAED]'
              }`}>
                <div className="flex items-center justify-between text-xs text-[#5F6368]">
                  <span>P99 응답 지연</span>
                  <Activity className={`w-3.5 h-3.5 ${simulatedLatency > 200 ? 'text-red-500' : 'text-[#1A73E8]'}`} />
                </div>
                <div className={`text-xl sm:text-2xl font-extrabold mt-1 tabular-nums ${
                  simulatedLatency > 200 ? 'text-red-600' : 'text-[#202124]'
                }`}>
                  {simulatedLatency}ms
                </div>
                <div className="text-[11px] text-[#5F6368] mt-1">
                  {simulatedLatency < 25 ? '초고속 (Nominal)' : simulatedLatency < 100 ? '양호' : '병목 발생 (Lag)'}
                </div>
              </div>

              {/* DB CPU Load */}
              <div className={`p-4 rounded-xl border transition-all ${
                dbCpu > 80
                  ? 'bg-red-50/60 border-red-200'
                  : 'bg-white border-[#E8EAED]'
              }`}>
                <div className="flex items-center justify-between text-xs text-[#5F6368]">
                  <span>PostgreSQL CPU</span>
                  <Cpu className={`w-3.5 h-3.5 ${dbCpu > 80 ? 'text-red-500' : 'text-[#1A73E8]'}`} />
                </div>
                <div className={`text-xl sm:text-2xl font-extrabold mt-1 tabular-nums ${
                  dbCpu > 80 ? 'text-red-600' : 'text-[#202124]'
                }`}>
                  {dbCpu}%
                </div>
                <div className="text-[11px] text-[#5F6368] mt-1">
                  {dbCpu < 40 ? '안정권' : dbCpu < 80 ? '주의' : 'DB 락 경합 위기'}
                </div>
              </div>

              {/* Pod Replicas */}
              <div className="p-4 rounded-xl bg-white border border-[#E8EAED]">
                <div className="flex items-center justify-between text-xs text-[#5F6368]">
                  <span>K8s 활성 Pod</span>
                  <Server className="w-3.5 h-3.5 text-emerald-600" />
                </div>
                <div className="text-xl sm:text-2xl font-extrabold text-[#202124] mt-1 tabular-nums">
                  {podCount}대
                </div>
                <div className="text-[11px] text-[#5F6368] mt-1">
                  {autoScaleHpa ? '오토스케일링 가동' : '고정 3대 (HPA 해제)'}
                </div>
              </div>
            </div>

            {/* Architecture Diagram Card */}
            <div className="rounded-xl border border-[#E8EAED] bg-white overflow-hidden shadow-sm">
              <div className="p-3.5 border-b border-[#E8EAED] bg-[#F8F9FA] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  <span className="text-xs font-bold text-[#202124]">
                    엔터프라이즈 마이크로서비스 설계 청사진 (Kubernetes & Kafka)
                  </span>
                </div>
                <span className="text-[11px] text-[#5F6368]">
                  실제 파이널 프로젝트 배포 도면
                </span>
              </div>

              <div className="relative aspect-[16/9] bg-slate-950 overflow-hidden">
                <img
                  src="/src/assets/images/project_cloud_diagram_1793443716910.jpg"
                  alt="High-Performance Microservices Architecture Blueprint"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />

                {/* Status Indicator Scrim */}
                {isOverloaded && (
                  <div className="absolute inset-0 bg-red-950/40 backdrop-blur-[1px] flex items-center justify-center p-4">
                    <div className="p-3 rounded-lg bg-red-900/90 border border-red-500 text-white text-center shadow-lg max-w-sm">
                      <AlertTriangle className="w-6 h-6 text-yellow-300 mx-auto mb-1" />
                      <div className="text-xs font-bold">시스템 경보: DB 과부하 임계치 초과</div>
                      <div className="text-[11px] text-red-200 mt-0.5">
                        Redis 캐시 또는 Kafka 비동기 큐를 활성화하여 트래픽을 분산시키세요.
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Architecture Node Legend */}
              <div className="p-4 bg-white grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                <div className="flex items-center gap-1.5 text-[#5F6368]">
                  <span className="w-2 h-2 rounded-full bg-[#1A73E8]" />
                  <span>NGINX API Gateway</span>
                </div>
                <div className="flex items-center gap-1.5 text-[#5F6368]">
                  <span className="w-2 h-2 rounded-full bg-[#FF6B00]" />
                  <span>Apache Kafka 브로커</span>
                </div>
                <div className="flex items-center gap-1.5 text-[#5F6368]">
                  <span className="w-2 h-2 rounded-full bg-red-500" />
                  <span>Redis 분산 캐시 클러스터</span>
                </div>
                <div className="flex items-center gap-1.5 text-[#5F6368]">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span>PostgreSQL Master/Replica</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

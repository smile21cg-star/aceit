import { Course, StudentReview } from '../types';

export const COURSES: Course[] = [
  {
    id: 'fullstack-msa',
    title: '클라우드 & 풀스택 마이크로서비스 취업 부트캠프',
    badgeTag: 'K-디지털트레이닝 8기',
    cohort: '8기',
    status: 'closing_soon',
    statusLabel: '마감임박 (잔여 4석)',
    deadlineDate: '2026-11-15T23:59:59',
    startDate: '2026-11-24',
    durationWeeks: 24,
    totalHours: 960,
    format: '온·오프라인 하이브리드 (강남 캠퍼스)',
    campusLocation: '에이스 IT 강남 캠퍼스 (강남역 2번 출구 도보 3분)',
    tuitionOriginal: 8900000,
    tuitionGovernment: 8900000,
    tuitionSelfPay: 0,
    stipendMonthlyMax: 316000,
    quotaTotal: 30,
    quotaEnrolled: 26,
    employmentRate: 94.2,
    averageStartingSalary: '4,850만원',
    heroImage: '/src/assets/images/hero_bootcamp_campus_1793443695009.jpg',
    summary: '단순 CRUD 웹 개발을 넘어 대규모 트래픽을 처리하는 Spring Boot 3, React 19, Kafka 이벤트 스트리밍, Kubernetes 클라우드 네이티브 MSA 아키텍처를 직접 구축합니다.',
    highlights: [
      '네카라쿠배 현직 10년차 이상 시니어 아키텍트 직강',
      '월 최대 31.6만원 훈련장려금 매월 현금 지급',
      '실제 10만 TPS 부하테스트를 견디는 프로덕션 MSA 프로젝트',
      '기업 연계 모의 면접 및 1:1 테크 레주메 무제한 첨삭'
    ],
    techStack: [
      { name: 'TypeScript', category: 'frontend' },
      { name: 'React 19', category: 'frontend' },
      { name: 'Next.js 15', category: 'frontend' },
      { name: 'Java 21', category: 'backend' },
      { name: 'Spring Boot 3', category: 'backend' },
      { name: 'PostgreSQL', category: 'database' },
      { name: 'Redis', category: 'database' },
      { name: 'Apache Kafka', category: 'backend' },
      { name: 'Docker', category: 'devops' },
      { name: 'Kubernetes', category: 'cloud' },
      { name: 'AWS EKS', category: 'cloud' },
      { name: 'GitHub Actions', category: 'devops' }
    ],
    curriculum: [
      {
        weekNumber: 1,
        title: 'Modern Web Architecture & TypeScript 기초 심화',
        hours: 40,
        deliverable: 'TypeScript Strict Mode 유틸리티 라이브러리 제작',
        topics: [
          '웹 표준, 브라우저 렌더링 파이프라인 (CRP) 완벽 분석',
          'TypeScript 타입 시스템, 제네릭, 조건부 타입, 유틸리티 타입',
          'Modern JavaScript 비동기 제어 (Event Loop, Promises, Microtasks)',
          'Git Branching Strategy (GitFlow, Trunk-based) & 협업 컨벤션'
        ],
        tools: ['TypeScript', 'Node.js', 'ESLint', 'Git'],
        projectTitle: 'Strict-Type Safe 상태 머신 패키지',
        projectDescription: '순수 TypeScript로 비동기 상태 전이를 보장하는 경량 상태 관리 패키지를 작성하고 npm 로컬 레지스트리에 배포합니다.'
      },
      {
        weekNumber: 2,
        title: 'React 19 코어 엔진 & 컴포넌트 아키텍처',
        hours: 40,
        deliverable: 'Compound Component 기반 고성능 UI 디자인 시스템',
        topics: [
          'React 19 렌더링 라이프사이클 및 Fiber 아키텍처 심층 탐구',
          'Custom Hooks 패턴, 상태 정규화 및 불변성 최적화 전략',
          'Server Components(RSC) 개념 및 Client Component 하이브리드 설계',
          'Web Vitals (LCP, INP, CLS) 측정 및 프론트엔드 성능 튜닝'
        ],
        tools: ['React 19', 'Tailwind CSS', 'Vite', 'Vitest'],
        projectTitle: '디자인 시스템 & 복합 폼 컴포넌트',
        projectDescription: '접근성(a11y) 기준을 준수하는 모달, 셀렉트, 드래그앤드롭 카드 UI 라이브러리를 구축합니다.'
      },
      {
        weekNumber: 3,
        title: 'Next.js 15 App Router & 풀스택 렌더링 전략',
        hours: 40,
        deliverable: 'SSR/ISR 하이브리드 테크 블로그 및 상품 카탈로그',
        topics: [
          'Next.js 15 App Router 디렉터리 구조 및 병렬 라우팅, 인터셉팅 라우트',
          'Server Actions를 활용한 데이터 뮤테이션 및 낙관적 UI 업데이트',
          'Streaming SSR with React Suspense 및 에러 바운더리 격리',
          'Edge 런타임 미들웨어 기반 인증 세션 처리'
        ],
        tools: ['Next.js 15', 'React Server Actions', 'Tailwind CSS'],
        projectTitle: '고속 콘텐츠 허브 & SEO 최적화 포털',
        projectDescription: '구글 Lighthouse 성능 점수 98점 이상을 달성하는 고속 서버사이드 렌더링 플랫폼을 구현합니다.'
      },
      {
        weekNumber: 4,
        title: 'Java 21 문법 혁신 & 모던 객체지향 설계 (OOP)',
        hours: 40,
        deliverable: 'Virtual Threads 기반 병렬 웹 크롤링 & 데이터 파서',
        topics: [
          'Java 21의 가상 스레드(Virtual Threads)와 Project Loom 아키텍처',
          'Record Patterns, Pattern Matching, Sealed Classes 등 현대적 문법',
          'SOLID 원칙과 디자인 패턴 (Strategy, Factory, Decorator)',
          'JVM 메모리 구조 (Heap, Stack, Metaspace) 및 가비지 컬렉션(GC) 튜닝'
        ],
        tools: ['Java 21', 'Gradle', 'JUnit 5', 'AssertJ'],
        projectTitle: '멀티스레드 금융 거래 엔진 코어',
        projectDescription: '가상 스레드를 활용해 수천 개의 동시 요청을 논블로킹으로 처리하는 트랜잭션 시뮬레이터를 개발합니다.'
      },
      {
        weekNumber: 5,
        title: 'Spring Boot 3 핵심 아키텍처 & RESTful API 표준',
        hours: 40,
        deliverable: '계층형 아키텍처 엔터프라이즈 백엔드 API 서비스',
        topics: [
          'Spring IoC/DI 컨테이너 및 Bean 라이프사이클의 내부 동작 원리',
          'Spring MVC 요청 처리 흐름 및 AOP 기반 공통 관심사 분리',
          'RESTful API 설계 가이드라인 및 OpenAPI/Swagger 자동 문서화',
          '글로벌 예외 처리기(ControllerAdvice) 및 표준 응답 래퍼 패턴'
        ],
        tools: ['Spring Boot 3', 'Spring MVC', 'Lombok', 'Swagger'],
        projectTitle: '커머스 플랫폼 회원 및 주문 API',
        projectDescription: '엄격한 유효성 검증과 통일된 에러 규격을 갖춘 주문 처리 백엔드 서버를 제작합니다.'
      },
      {
        weekNumber: 6,
        title: 'Spring Data JPA & ORM 성능 최적화 심화',
        hours: 40,
        deliverable: 'N+1 문제 완전 해결 및 Querydsl 동적 쿼리 엔진',
        topics: [
          '영속성 컨텍스트(Persistence Context) 1차 캐시와 Dirty Checking',
          'JPA 연관관계 매핑 (단방향/양방향, 지연 로딩 vs 즉시 로딩)',
          'N+1 문제 원인 및 Fetch Join, EntityGraph를 통한 해결 전략',
          'Querydsl을 활용한 복합 검색 필터 및 타입 세이프 동적 쿼리'
        ],
        tools: ['Spring Data JPA', 'Querydsl', 'Hibernate 6', 'H2/PostgreSQL'],
        projectTitle: '대규모 상품 검색 & 다면 필터링 백엔드',
        projectDescription: '복잡한 다중 카테고리, 가격대, 재고 상태 필터를 실시간 처리하는 고성능 쿼리 레이어를 구축합니다.'
      },
      {
        weekNumber: 7,
        title: '관계형 데이터베이스 인덱싱 & 트랜잭션 격리수준',
        hours: 40,
        deliverable: 'PostgreSQL 실행 계획(EXPLAIN ANALYZE) 튜닝 리포트',
        topics: [
          'B-Tree 인덱스 내부 구조, 복합 인덱스 컬럼 순서 설계 법칙',
          'ACID 원칙과 트랜잭션 격리 수준 (Read Committed, Repeatable Read)',
          '비관적 락(Pessimistic Lock) vs 낙관적 락(Optimistic Lock) 동시성 제어',
          '데이터베이스 커넥션 풀(HikariCP) 튜닝 및 슬로우 쿼리 모니터링'
        ],
        tools: ['PostgreSQL', 'DBeaver', 'pg_stat_statements'],
        projectTitle: '선착순 쿠폰 발급 동시성 제어 시스템',
        projectDescription: '동시에 1만 명이 클릭하는 선착순 이벤트에서 락 경합을 방지하고 정확한 재고 차감을 보장합니다.'
      },
      {
        weekNumber: 8,
        title: 'Redis 인메모리 캐싱 & 분산 세션 관리',
        hours: 40,
        deliverable: 'Redis 캐시 스탬피드 방지 분산 락(Redisson) 시스템',
        topics: [
          'Redis 데이터 구조 (Strings, Hashes, Lists, Sets, Sorted Sets)',
          '캐시 읽기/쓰기 전략 (Cache-Aside, Write-Through, Write-Behind)',
          'Cache Stampede 방지를 위한 분산 락 및 유효시간(TTL) 분산 기법',
          'Spring Security & Redis 기반 무상태 JWT 인증 인프라'
        ],
        tools: ['Redis', 'Redisson', 'Spring Security', 'JWT'],
        projectTitle: '실시간 검색어 순위 & 초고속 토큰 블랙리스트',
        projectDescription: 'Sorted Set을 이용한 실시간 트렌드 집계 및 Redis 기반 분산 토큰 인증 서버를 완성합니다.'
      },
      {
        weekNumber: 9,
        title: 'Docker 컨테이너라이제이션 & 멀티스테이지 빌드',
        hours: 40,
        deliverable: '경량 프로덕션 Docker 이미지 & Docker Compose 로컬 MSA',
        topics: [
          'Linux 컨테이너 기초 (Namespace, cgroups, Union File System)',
          'Dockerfile 최적화 기법 및 멀티스테이지 빌드를 통한 이미지 다이어트',
          'Docker 네트워킹 및 볼륨 영속성 관리 전략',
          'Docker Compose를 활용한 멀티 컨테이너 로컬 개발 환경 오케스트레이션'
        ],
        tools: ['Docker', 'Docker Compose', 'Alpine Linux'],
        projectTitle: '단일 명령어로 구동되는 풀스택 개발 환경',
        projectDescription: '프론트엔드, 백엔드, DB, Redis, 로컬 스토리지를 일괄 부트스트랩하는 인프라 템플릿을 제작합니다.'
      },
      {
        weekNumber: 10,
        title: 'Kubernetes 클러스터 아키텍처 & 오브젝트 관리',
        hours: 40,
        deliverable: 'Pod, Deployment, Service, Ingress 구성 매니페스트',
        topics: [
          'K8s 컨트롤 플레인 (API Server, etcd, Scheduler) 및 워커 노드 구조',
          'Deployment 롤링 업데이트, 롤백 및 HPA(Horizontal Pod Autoscaler)',
          'ClusterIP, NodePort, LoadBalancer 서비스 네트워킹과 Ingress NGINX',
          'ConfigMap, Secret을 통한 환경 설정 격리 및 보안 관리'
        ],
        tools: ['Kubernetes', 'Minikube/k3s', 'kubectl', 'Helm'],
        projectTitle: '무중단 배포(Zero-Downtime) K8s 파이프라인',
        projectDescription: '트래픽 유실 없이 새로운 컨테이너 버전을 교체하는 카나리/블루그린 배포 시나리오를 구성합니다.'
      },
      {
        weekNumber: 11,
        title: 'Apache Kafka 이벤트 기반 비동기 아키텍처 (EDA)',
        hours: 40,
        deliverable: '대용량 결제/주문 이벤트 파이프라인 브로커 클러스터',
        topics: [
          'Kafka 토픽, 파티션, 오프셋, 컨슈머 그룹의 내부 동작 메커니즘',
          'At-Least-Once, Exactly-Once 트랜잭션 전송 보장 전략',
          'Idempotent Producer 및 Consumer 멱등성 처리 패턴',
          'Kafka Connect 및 Schema Registry를 통한 데이터 계약 관리'
        ],
        tools: ['Apache Kafka', 'Zookeeper/KRaft', 'Spring Kafka'],
        projectTitle: '실시간 주문-배송-알림 이벤트 디스패처',
        projectDescription: '주문이 생성되면 결제 승인, 재고 차감, 카카오 알림톡 발송을 비동기 이벤트로 분산 처리합니다.'
      },
      {
        weekNumber: 12,
        title: 'AWS 클라우드 인프라 & CI/CD 자동화 파이프라인',
        hours: 40,
        deliverable: 'GitHub Actions → AWS ECR → EKS 자동 배포 파이프라인',
        topics: [
          'AWS 핵심 네트워크 설계 (VPC, Public/Private Subnet, NAT Gateway, IGW)',
          'AWS EKS(Elastic Kubernetes Service) 구축 및 IAM Role for Service Accounts',
          'GitHub Actions 워크플로를 이용한 자동 테스트 및 컨테이너 빌드/푸시',
          'ArgoCD를 활용한 선언적 GitOps 배포 자동화'
        ],
        tools: ['AWS EKS', 'AWS RDS', 'GitHub Actions', 'ArgoCD'],
        projectTitle: '엔터프라이즈 CI/CD & GitOps 인프라',
        projectDescription: '코드 푸시부터 실서버 배포까지 3분 내에 자동으로 완료되는 엔터프라이즈급 배포 파이프라인을 구축합니다.'
      },
      {
        weekNumber: 13,
        title: '마이크로서비스 아키텍처 (MSA) 분해 & Saga 패턴',
        hours: 40,
        deliverable: '분산 트랜잭션 보상 트랜잭션(Saga Pattern) 오케스트레이터',
        topics: [
          '모놀리식 분해 전략과 도메인 주도 설계(DDD) 바운디드 컨텍스트 도출',
          '분산 트랜잭션의 한계(2PC)와 Saga 패턴 (Choreography vs Orchestration)',
          'API Gateway (Spring Cloud Gateway) 라우팅, 인증 필터 및 Rate Limiter',
          'Resilience4j를 이용한 서킷 브레이커(Circuit Breaker) & 폴백 격리'
        ],
        tools: ['Spring Cloud Gateway', 'Resilience4j', 'Axon Framework'],
        projectTitle: '고가용성 마이크로서비스 게이트웨이 코어',
        projectDescription: '외부 공격 및 특정 서비스 장애가 전체 시스템으로 전파되지 않도록 차단하는 장애 격리 시스템을 개발합니다.'
      },
      {
        weekNumber: 14,
        title: '관측 가능성(Observability): Prometheus, Grafana & Jaeger',
        hours: 40,
        deliverable: '분산 트레이싱 APM 대시보드 및 실시간 경보 시스템',
        topics: [
          'OpenTelemetry 표준 메트릭, 로그, 트레이스 3대 축 통합',
          'Prometheus 메트릭 수집 및 Grafana를 통한 실시간 인프라 대시보드 시각화',
          'Jaeger / Zipkin을 활용한 분산 마이크로서비스 간 병목 구간 추적',
          'Slack Webhook 연동 실시간 서버 에러 임계치 알람(Alertmanager)'
        ],
        tools: ['Prometheus', 'Grafana', 'Jaeger', 'OpenTelemetry'],
        projectTitle: '실시간 인프라 헬스 & 분산 트레이스 센터',
        projectDescription: '트래픽 급증 시 CPU/메모리 부하 및 API 지연 구간을 1초 단위로 감지하는 모니터링 환경을 완성합니다.'
      },
      {
        weekNumber: 15,
        title: '대용량 부하 테스트 & nGrinder 성능 튜닝',
        hours: 40,
        deliverable: '10만 TPS 가상 유저 스트레스 테스트 보고서',
        topics: [
          '성능 테스트 방법론 (Smoke, Load, Stress, Soak Test)',
          'nGrinder / k6를 활용한 시나리오 기반 가상 유저 트래픽 생성',
          'DB 쿼리 최적화, 스레드 풀 튜닝, 네트워크 소켓 고갈 해결',
          'TPS(초당 처리량) 1,200에서 25,000으로의 실제 20배 개선 실습'
        ],
        tools: ['nGrinder', 'k6', 'JMeter', 'VisualVM'],
        projectTitle: '블랙프라이데이 트래픽 극한 부하 테스트',
        projectDescription: '동시 접속 5만 명의 집중 요청 환경에서 서버가 다운되지 않도록 병목을 찾아 개선합니다.'
      },
      {
        weekNumber: 16,
        title: '파이널 팀 프로젝트 기획 & 시스템 아키텍처 수립',
        hours: 40,
        deliverable: 'WBS 일정표, ERD, 시스템 아키텍처 다이어그램 (C4 Model)',
        topics: [
          '실제 유니콘 스타트업 비즈니스 모델 기반 프로젝트 주제 선정',
          'DDD 이벤트 스토밍(Event Storming)을 통한 도메인 모델링',
          'Git 브랜치 보호 규칙 및 Jira/Linear 기반 애자일 스프린트 설계',
          '현직 테크 리드 1:1 아키텍처 리뷰 및 구조적 결함 사전 피드백'
        ],
        tools: ['Figma', 'dbdocs', 'Miro', 'Linear'],
        projectTitle: '엔터프라이즈 서비스 설계 청사진',
        projectDescription: '대규모 사용자 트래픽을 상정한 도메인별 마이크로서비스 경계와 API 명세서를 완벽히 정의합니다.'
      },
      {
        weekNumber: 17,
        title: '파이널 프로젝트 Sprint 1: 코어 백엔드 & 이벤트 파이프라인',
        hours: 40,
        deliverable: '도메인 서비스 독립 배포 및 Kafka 비동기 통신 구현',
        topics: [
          '회원, 상품, 주문, 결제 도메인 서비스별 독립 데이터베이스 분리',
          'Kafka 프로듀서/컨슈머 연동 및 Outbox 패턴을 통한 신뢰성 보장',
          'Docker 컨테이너화 및 개발 서버 K8s 배포',
          '단위 테스트(Unit Test) 커버리지 80% 이상 강제'
        ],
        tools: ['Spring Boot 3', 'Kafka', 'PostgreSQL', 'Docker'],
        projectTitle: '독립 도메인 마이크로서비스 연동',
        projectDescription: '서비스 간 직접적인 HTTP 의존성을 끊고 비동기 이벤트 기반으로 트랜잭션을 전파합니다.'
      },
      {
        weekNumber: 18,
        title: '파이널 프로젝트 Sprint 2: 반응형 프론트엔드 & 실시간 웹소켓',
        hours: 40,
        deliverable: 'Next.js 15 기반 실시간 경매/주문 웹 애플리케이션',
        topics: [
          'Next.js 15 프론트엔드와 백엔드 API Gateway 통합 연동',
          'WebSocket / STOMP를 활용한 실시간 알림 및 상태 변경 브로드캐스팅',
          'React Query(TanStack Query)를 활용한 서버 상태 캐싱 및 무효화',
          '반응형 모바일 & 데스크톱 레이아웃 최적화'
        ],
        tools: ['Next.js 15', 'TypeScript', 'TanStack Query', 'WebSocket'],
        projectTitle: '고반응성 인터랙티브 클라이언트',
        projectDescription: '0.1초 단위의 가격 변동과 재고 현황을 실시간으로 화면에 갱신하는 사용자 인터페이스를 구축합니다.'
      },
      {
        weekNumber: 19,
        title: '파이널 프로젝트 Sprint 3: 클라우드 인프라 배포 & 오토스케일링',
        hours: 40,
        deliverable: 'AWS EKS 실서버 운영 환경 구성 및 HPA 동작 검증',
        topics: [
          'AWS EKS 상용 클러스터 배포 및 Route 53 도메인 SSL 인증서 적용',
          'Horizontal Pod Autoscaler(HPA) 트래픽 급증 시 Pod 자동 확장 검증',
          'AWS S3 & CloudFront 정적 에셋 CDN 배포 최적화',
          '보안 취약점 점검 (OWASP Top 10) 및 SQL Injection/XSS 방어'
        ],
        tools: ['AWS EKS', 'Route 53', 'CloudFront', 'Cert-Manager'],
        projectTitle: '프로덕션 클라우드 인프라 완성',
        projectDescription: '실제 인터넷 사용자가 접속 가능한 안전하고 확장성 높은 클라우드 운영 환경을 구축합니다.'
      },
      {
        weekNumber: 20,
        title: '파이널 프로젝트 Sprint 4: 부하테스트, 장애 복구 시연 & 최종 튜닝',
        hours: 40,
        deliverable: '최종 프로젝트 완성본 및 실운영 트래픽 스트레스 리포트',
        topics: [
          'Chaos Engineering: 의도적으로 특정 Pod 강제 종료 시 서비스 생존 테스트',
          'Redis 장애 시 인메모리 로컬 캐시 폴백 메커니즘 검증',
          '대용량 데이터(1,000만 건 더미 데이터) 대상 인덱스 튜닝 및 쿼리 최적화',
          '최종 데모 시연 준비 및 코드 품질 리팩터링'
        ],
        tools: ['k6', 'Chaos Mesh', 'Grafana', 'SonarQube'],
        projectTitle: '프로덕션 레디 고가용성 서비스',
        projectDescription: '어떠한 비정상 장애 상황에서도 결제와 핵심 비즈니스가 중단되지 않는 회복 탄력성(Resilience)을 증명합니다.'
      },
      {
        weekNumber: 21,
        title: '빅테크 데모데이 & 현직자 프로젝트 공개 발표',
        hours: 40,
        deliverable: '기술 발표 영상, 테크 블로그 포스팅 5편, 프로젝트 GitHub Wiki',
        topics: [
          '기업 인사담당자 및 CTO 초청 온라인/오프라인 데모데이',
          '문제를 기술로 해결한 과정(트러블슈팅) 중심의 기술 프레젠테이션',
          '1:1 실시간 Q&A 및 아키텍처 설계 의도 디펜스',
          '우수 프로젝트 시상 및 채용 연계 패스트트랙 인터뷰 진행'
        ],
        tools: ['GitHub Wiki', 'Velog/Medium', 'Keynote', 'YouTube'],
        projectTitle: '기술 포트폴리오 공개 릴리즈',
        projectDescription: '실제 채용 결정권자가 감탄하는 깊이 있는 기술 문서와 라이브 데모 웹사이트를 공개합니다.'
      },
      {
        weekNumber: 22,
        title: 'CS 지식 총정리 & 모의 코딩 테스트 집중 트레이닝',
        hours: 40,
        deliverable: '알고리즘 코테 합격 보증 문제 풀이집 (200제 완성)',
        topics: [
          '백준/프로그래머스 고득점 키트 (BFS/DFS, DP, 이분탐색, 투포인터)',
          '운영체제 핵심 (프로세스/스레드, 가상메모리, 페이지 폴트, 문맥교환)',
          '컴퓨터 네트워크 (TCP 3-Way Handshake, HTTP 1.1/2/3, DNS 흐름)',
          '데이터베이스 이론 (B+Tree, 격리수준, NoSQL vs RDBMS)'
        ],
        tools: ['Java/Python', 'Programmers', 'LeetCode'],
        projectTitle: 'CS & 코딩 테스트 마스터 패키지',
        projectDescription: '빅테크 1차 기술 코딩 테스트 통과율 90% 이상을 달성하는 실전 문제 풀이 훈련을 진행합니다.'
      },
      {
        weekNumber: 23,
        title: '1:1 테크 레주메 첨삭 & 직무 기술서 완벽 매칭',
        hours: 40,
        deliverable: '서류 합격률 40% 이상 검증된 맞춤형 개발자 이력서',
        topics: [
          '개발자 채용 시장 동향 분석 및 타겟 기업군 선정 (유니콘/시리즈B+)',
          '밋밋한 기능 나열이 아닌 정량적 성과 중심의 경험 서술법',
          'GitHub 커밋 기록 및 오픈소스 기여 내역 관리법',
          '전담 테크 커리어 매니저와의 1:1 무제한 대면 이력서 리뷰'
        ],
        tools: ['Notion', 'Overleaf(LaTeX)', 'GitHub Readme'],
        projectTitle: '최적화된 테크 포트폴리오 레주메',
        projectDescription: '기술 키워드 검색 엔진과 채용 담당자의 눈길을 단 10초 만에 사로잡는 이력서를 완성합니다.'
      },
      {
        weekNumber: 24,
        title: '실전 모의 기술 면접 & 기업 매칭 채용 패스트트랙',
        hours: 40,
        deliverable: '실전 모의 면접 영상 녹화 피드백 및 15개 협력사 추천 매칭',
        topics: [
          '네카라쿠배 전현직 개발 리드와의 1:1 심층 라이브 기술 면접 (60분)',
          '라이브 코딩 & 화이트보드 시스템 디자인 면접 실전 훈련',
          '컬처핏(인성/협업) 면접 예상 질문 및 압박 질문 대처법',
          '에이스 IT 450개 파트너 기업 단독 수시 채용 추천 매칭 진행'
        ],
        tools: ['Zoom', 'Google Meet', 'Interview Rubric'],
        projectTitle: '최종 합격 및 연봉 협상 가이드',
        projectDescription: '원하는 기업에 복수 합격하고 최선의 처우를 받을 수 있도록 전담 코치가 연봉 협상까지 동행합니다.'
      }
    ],
    instructors: [
      {
        id: 'inst-kim',
        name: '김도현',
        role: '총괄 테크 리드 & 백엔드/클라우드 디렉터',
        company: '전 Toss Payments / 네이버 클라우드',
        careerYears: 12,
        avatar: '/src/assets/images/instructor_lead_architect_1793443717059.jpg',
        bio: 'Toss Payments 결제 코어 플랫폼 아키텍처를 총괄하고 일 거래액 수천억 원의 트래픽을 견디는 분산 시스템을 구축했습니다. 실무에서 부딪히는 진짜 엔지니어링 문제를 해결하는 방법을 지도합니다.',
        careerHistory: [
          '전) Toss Payments 플랫폼 아키텍트 (6년)',
          '전) Naver Cloud 대규모 분산 스토리지 팀 수석 엔지니어',
          '저서: <현업에서 바로 쓰는 대규모 분산 마이크로서비스 설계>',
          'AWS Certified Solutions Architect - Professional 취득'
        ],
        keyLecture: 'Spring Boot 3, Kafka 분산 트랜잭션, 고가용성 K8s',
        rating: 4.98,
        mentoredCount: 840
      },
      {
        id: 'inst-park',
        name: '박수진',
        role: '프론트엔드 아키텍처 & 성능 튜닝 리드',
        company: '전 당근마켓 / 카카오 스타일',
        careerYears: 9,
        avatar: '/src/assets/images/alumni_developer_avatar_1793443718060.jpg',
        bio: '월간 활성 사용자 1,800만 명의 대규모 트래픽 프론트엔드 서비스를 최적화했습니다. 컴포넌트 설계 원칙, Server Components, Web Vitals 성능 개선을 전문으로 가르칩니다.',
        careerHistory: [
          '전) 당근마켓 피드 엔지니어링 리드',
          '전) 카카오스타일 지그재그 코어 웹 플랫폼',
          'FEConf 발표 연사: <React 19 마이그레이션과 번들 크기 40% 절감기>'
        ],
        keyLecture: 'TypeScript, React 19, Next.js 15 App Router, Web Vitals',
        rating: 4.95,
        mentoredCount: 620
      }
    ],
    faqs: [
      {
        id: 'faq-1',
        category: 'subsidy',
        question: '정말 수강료 890만 원이 전액 100% 무료인가요?',
        answer: '네, 고용노동부 K-디지털 트레이닝(KDT) 지원 과정으로 국민내일배움카드 발급 대상자라면 수강료 8,900,000원이 전액 국비 지원되어 본인부담금이 0원입니다. 또한 출석률 80% 이상 충족 시 매월 최대 316,000원의 훈련장려금(훈련수당)이 본인 통장으로 현금 지급됩니다.'
      },
      {
        id: 'faq-2',
        category: 'selection',
        question: '비전공자나 코딩을 전혀 모르는 초보자도 지원 가능한가요?',
        answer: '수강생의 약 62%가 비전공자 및 문과/예체능 출신입니다. 개강 전 4주간 무료 기초 프리코스(Pre-Course: 파이썬/자바 기본기)와 온라인 멘토링을 제공하여 누구나 본과정 진도를 차근차근 따라올 수 있도록 설계되었습니다. 중요한 것은 실력보다 학습에 몰입할 열정과 성실함입니다.'
      },
      {
        id: 'faq-3',
        category: 'selection',
        question: '선발 절차는 어떻게 진행되나요?',
        answer: '1단계 온라인 수강 신청서 접수 → 2단계 사전 역량 진단 및 온라인 적성 테스트(논리력/학습 의지 평가) → 3단계 1:1 비대면 면담(15분 내외) 순으로 진행됩니다. 지원서 접수 순서대로 선착순 심사가 진행되므로 정원(30명) 마감 전 빠른 지원을 권장합니다.'
      },
      {
        id: 'faq-4',
        category: 'curriculum',
        question: '수업 운영 방식과 시간표는 어떻게 되나요?',
        answer: '평일 월~금 오전 09:00 ~ 오후 18:00 (1일 8시간, 주 40시간) 전일제(Full-Time)로 운영됩니다. 강남 캠퍼스 현장 강의와 실시간 온라인 라이브 스트리밍이 병행되는 하이브리드 형태로, 전 강의는 4K 녹화되어 당일 복습 영상으로 영구 제공됩니다.'
      },
      {
        id: 'faq-5',
        category: 'career',
        question: '수료 후 취업 지원은 언제까지 유지되나요?',
        answer: '수료 후 최대 1년 동안 무제한 취업 지원 프로그램을 제공합니다. 전담 커리어 코치가 배정되어 이력서/포트폴리오 무제한 첨삭, 네카라쿠배 현직자 1:1 모의 기술 면접, 에이스 IT 450여 개 협력사 단독 추천 채용 패스트트랙을 지원합니다.'
      }
    ]
  },
  {
    id: 'ai-llm-engineer',
    title: '생성형 AI & LLM 에이전트 엔지니어링 집중과정',
    badgeTag: 'K-디지털트레이닝 4기',
    cohort: '4기',
    status: 'recruiting',
    statusLabel: '모집중 (선착순)',
    deadlineDate: '2026-11-30T23:59:59',
    startDate: '2026-12-08',
    durationWeeks: 20,
    totalHours: 800,
    format: '온·오프라인 하이브리드 (강남 캠퍼스)',
    campusLocation: '에이스 IT 강남 캠퍼스 (강남역 2번 출구 도보 3분)',
    tuitionOriginal: 9400000,
    tuitionGovernment: 9400000,
    tuitionSelfPay: 0,
    stipendMonthlyMax: 316000,
    quotaTotal: 25,
    quotaEnrolled: 18,
    employmentRate: 96.1,
    averageStartingSalary: '5,200만원',
    heroImage: '/src/assets/images/hero_bootcamp_campus_1793443695009.jpg',
    summary: '오픈소스 파운데이션 모델 파인튜닝, LoRA/QLoRA 최적화, LangChain/LangGraph 다중 에이전트 워크플로 및 고속 RAG 검색 인프라를 프로덕션 환경에 서빙합니다.',
    highlights: [
      'H100/A100 GPU 클러스터 1인 1실습 인프라 전액 지원',
      '최신 멀티모달 & Autonomous Agent 프레임워크 실전 개발',
      'vLLM, TensorRT-LLM 기반 고성능 서빙 파이프라인 구축',
      'AI 스타트업 및 빅테크 AI 연구소 채용 추천 연계'
    ],
    techStack: [
      { name: 'Python 3.12', category: 'ai' },
      { name: 'PyTorch 2', category: 'ai' },
      { name: 'Hugging Face', category: 'ai' },
      { name: 'LangChain', category: 'ai' },
      { name: 'LangGraph', category: 'ai' },
      { name: 'ChromaDB / Qdrant', category: 'database' },
      { name: 'vLLM', category: 'ai' },
      { name: 'FastAPI', category: 'backend' },
      { name: 'Docker / Triton', category: 'devops' }
    ],
    curriculum: [
      {
        weekNumber: 1,
        title: 'Python 고급 프로그래밍 & AI 수학 / 텐서 연산',
        hours: 40,
        deliverable: 'NumPy/PyTorch 기반 Custom AutoGrad 엔진 제작',
        topics: [
          'Python 3.12 신규 기능, 비동기 AsyncIO, 데코레이터와 메타클래스',
          '선형대수학 핵심 (행렬 분해, 고유값, 벡터 공간, 코사인 유사도)',
          '미적분 및 경사하강법(SGD, AdamW) 수식 증명 및 직접 구현',
          'PyTorch Tensor 연산 가속화 및 CUDA 메모리 관리'
        ],
        tools: ['Python 3.12', 'PyTorch', 'NumPy', 'JupyterLab']
      },
      {
        weekNumber: 2,
        title: '트랜스포머(Transformer) 아키텍처 밑바닥부터 구현',
        hours: 40,
        deliverable: 'Multi-Head Attention & Decoder-Only LLM 코어',
        topics: [
          'Self-Attention 메커니즘 수식 전개 및 Scaled Dot-Product 계산',
          'RoPE(Rotary Position Embedding) 및 FlashAttention 가속 기법',
          'BPE(Byte-Pair Encoding) 토크나이저 직접 학습 및 어휘집 구축',
          'Llama 3 / Mistral 오픈소스 모델 레이어 구조 전수 분석'
        ],
        tools: ['PyTorch', 'Hugging Face Transformers', 'Tiktoken']
      },
      {
        weekNumber: 3,
        title: 'Advanced RAG (검색 증강 생성) & 벡터 데이터베이스',
        hours: 40,
        deliverable: '하이브리드 검색(Dense+Sparse) 엔터프라이즈 사내 지식봇',
        topics: [
          '임베딩 모델 비교 (BGE-M3, OpenAI text-embedding-3) 및 차원 축소',
          '문서 청킹 전략 (Semantic Chunking, Recursive Text Splitting)',
          'Vector DB (Qdrant, Milvus) HNSW 인덱싱 및 필터링 튜닝',
          'Re-ranker (Cohere, Cross-Encoder)를 활용한 검색 정밀도 향상'
        ],
        tools: ['Qdrant', 'LangChain', 'ChromaDB', 'FastAPI']
      },
      {
        weekNumber: 4,
        title: 'LangGraph 기반 Multi-Agent 자율 협업 시스템',
        hours: 40,
        deliverable: '자율 웹 서칭, 코드 작성 및 검증 에이전트 플랫폼',
        topics: [
          'Function Calling & Tool Use 프로토콜 설계',
          'LangGraph 상태 그래프(StateGraph) 기반 분기 및 루프 제어',
          'Human-in-the-Loop 승인 단계 및 에이전트 메모리(Buffer, Summary)',
          '평가 프레임워크 (Ragas, TruLens)를 활용한 할루시네이션 정량 측정'
        ],
        tools: ['LangGraph', 'LangSmith', 'OpenAI API', 'FastAPI']
      }
    ],
    instructors: [
      {
        id: 'inst-lee',
        name: '이준호',
        role: 'AI 수석 리서처 & MLOps 아키텍트',
        company: '전 카카오 엔터프라이즈 / 네이버 Clova',
        careerYears: 10,
        avatar: '/src/assets/images/instructor_lead_architect_1793443717059.jpg',
        bio: '국내 최고 수준의 대형 언어 모델 파인튜닝 및 GPU 분산 서빙 인프라를 직접 설계했습니다. 연구실 이론을 넘어 현업 서비스에 통하는 AI 엔지니어링을 전수합니다.',
        careerHistory: [
          '전) 카카오엔터프라이즈 초대규모 AI 인프라 팀장',
          '전) Naver Clova 자연어 처리(NLP) 연구원',
          'NeurIPS 및 ACL 학회 논문 4편 등재'
        ],
        keyLecture: 'LLM Fine-Tuning, vLLM High-Throughput Serving, Multi-Agent',
        rating: 4.97,
        mentoredCount: 450
      }
    ],
    faqs: [
      {
        id: 'faq-ai-1',
        category: 'curriculum',
        question: '실습용 고사양 GPU는 어떻게 지원되나요?',
        answer: '학생 전원에게 클라우드 H100/A100 GPU 인스턴스 전용 실습 크레딧이 전액 무료로 지급됩니다. 개인 노트북 사양과 무관하게 웹 브라우저를 통해 고성능 분산 학습 환경에 접속할 수 있습니다.'
      }
    ]
  },
  {
    id: 'cloud-devops',
    title: 'Cloud DevOps & SRE 플랫폼 엔지니어링 마스터',
    badgeTag: 'K-디지털트레이닝 5기',
    cohort: '5기',
    status: 'recruiting',
    statusLabel: '모집중 (선착순)',
    deadlineDate: '2026-11-20T23:59:59',
    startDate: '2026-12-01',
    durationWeeks: 20,
    totalHours: 800,
    format: '온·오프라인 하이브리드',
    campusLocation: '에이스 IT 강남 캠퍼스 (강남역 2번 출구 도보 3분)',
    tuitionOriginal: 8700000,
    tuitionGovernment: 8700000,
    tuitionSelfPay: 0,
    stipendMonthlyMax: 316000,
    quotaTotal: 25,
    quotaEnrolled: 21,
    employmentRate: 95.4,
    averageStartingSalary: '5,000만원',
    heroImage: '/src/assets/images/hero_bootcamp_campus_1793443695009.jpg',
    summary: 'IaC(Terraform), Kubernetes 멀티 클러스터, GitOps(ArgoCD), 카오스 엔지니어링 및 99.99% 가용성을 달성하는 사이트 신뢰성 공학(SRE) 전문가로 성장합니다.',
    highlights: [
      'Terraform을 이용한 AWS/GCP 멀티 클라우드 프로비저닝',
      'ArgoCD & Vault를 통한 안전한 엔터프라이즈 GitOps',
      'Prometheus, Grafana, OpenTelemetry 풀스택 APM 구축',
      '국내외 유수 테크 기업 DevOps/인프라팀 수료생 배출'
    ],
    techStack: [
      { name: 'Terraform', category: 'cloud' },
      { name: 'Kubernetes', category: 'cloud' },
      { name: 'AWS', category: 'cloud' },
      { name: 'ArgoCD', category: 'devops' },
      { name: 'Helm', category: 'devops' },
      { name: 'Prometheus', category: 'devops' },
      { name: 'Grafana', category: 'devops' },
      { name: 'Linux', category: 'devops' }
    ],
    curriculum: [
      {
        weekNumber: 1,
        title: 'Linux 시스템 내부 & 네트워크 패킷 분석',
        hours: 40,
        deliverable: 'eBPF 기반 시스템 콜 및 커널 이벤트 트레이서',
        topics: [
          'Linux 프로세스 스케줄링, 파일 시스템, 메모리 페이지 관리',
          'iptables, eBPF, TCP 튜닝 및 소켓 상태 다이어그램 분석',
          'Bash 쉘 스크립팅 자동화 및 정규 표현식 마스터'
        ],
        tools: ['Linux', 'eBPF', 'Wireshark', 'Bash']
      }
    ],
    instructors: [
      {
        id: 'inst-choi',
        name: '최원우',
        role: '수석 SRE & 클라우드 아키텍트',
        company: '전 쿠팡 인프라팀 / 메가존클라우드',
        careerYears: 13,
        avatar: '/src/assets/images/instructor_lead_architect_1793443717059.jpg',
        bio: '쿠팡 대규모 트래픽 데이(쿠팡플레이 축구 중계 등) 인프라 오토스케일링과 장애 복구 자동화를 이끌었습니다.',
        careerHistory: [
          '전) 쿠팡 클라우드 플랫폼 팀장',
          'AWS Community Hero 선정'
        ],
        keyLecture: 'Terraform IaC, K8s Multi-Cluster, Chaos Engineering',
        rating: 4.96,
        mentoredCount: 510
      }
    ],
    faqs: []
  },
  {
    id: 'data-engineering',
    title: '빅데이터 파이프라인 & 데이터 플랫폼 엔지니어링',
    badgeTag: 'K-디지털트레이닝 3기',
    cohort: '3기',
    status: 'recruiting',
    statusLabel: '모집중 (선착순)',
    deadlineDate: '2026-12-05T23:59:59',
    startDate: '2026-12-15',
    durationWeeks: 20,
    totalHours: 800,
    format: '온·오프라인 하이브리드',
    campusLocation: '에이스 IT 강남 캠퍼스 (강남역 2번 출구 도보 3분)',
    tuitionOriginal: 8800000,
    tuitionGovernment: 8800000,
    tuitionSelfPay: 0,
    stipendMonthlyMax: 316000,
    quotaTotal: 25,
    quotaEnrolled: 15,
    employmentRate: 93.8,
    averageStartingSalary: '4,750만원',
    heroImage: '/src/assets/images/hero_bootcamp_campus_1793443695009.jpg',
    summary: 'Apache Spark, Kafka, Airflow, Snowflake, Iceberg 기반의 레이크하우스(Lakehouse)와 페타바이트급 실시간 데이터 처리 인프라를 구축합니다.',
    highlights: [
      'Kafka 실시간 스트리밍 & Spark 분산 컴퓨팅 클러스터 구축',
      'dbt & Airflow를 활용한 현대적 데이터 스택(MDS) 오케스트레이션',
      'Iceberg 오픈 테이블 포맷 기반 데이터 레이크하우스 설계',
      '금융/커머스 대규모 데이터 분석가 및 엔지니어 취업 매칭'
    ],
    techStack: [
      { name: 'Python', category: 'ai' },
      { name: 'Apache Spark', category: 'database' },
      { name: 'Apache Kafka', category: 'backend' },
      { name: 'Apache Airflow', category: 'devops' },
      { name: 'Snowflake', category: 'database' },
      { name: 'dbt', category: 'database' },
      { name: 'PostgreSQL', category: 'database' }
    ],
    curriculum: [
      {
        weekNumber: 1,
        title: '대용량 SQL 튜닝 & 분석 쿼리 최적화',
        hours: 40,
        deliverable: '윈도우 함수 & 파티셔닝 기반 1억 건 데이터 집계',
        topics: [
          '고급 SQL (Window Functions, CTE, PIVOT, ROLLUP)',
          'OLTP vs OLAP 아키텍처 및 컬럼 기반 스토리지(Parquet, ORC)',
          'Star Schema & Snowflake Schema 데이터 모델링 기법'
        ],
        tools: ['PostgreSQL', 'DuckDB', 'Parquet']
      }
    ],
    instructors: [
      {
        id: 'inst-jung',
        name: '정민규',
        role: '데이터 플랫폼 리드',
        company: '전 뱅크샐러드 / 야놀자',
        careerYears: 11,
        avatar: '/src/assets/images/instructor_lead_architect_1793443717059.jpg',
        bio: '국내 최초 마이데이터 금융 데이터 파이프라인을 구축하고 초당 5만 건의 금융 트랜잭션 레이크하우스를 운영했습니다.',
        careerHistory: ['전) 뱅크샐러드 데이터 엔지니어링 리드', '전) 야놀자 R&D'],
        keyLecture: 'Spark Streaming, Iceberg Lakehouse, Airflow DAG',
        rating: 4.94,
        mentoredCount: 390
      }
    ],
    faqs: []
  }
];

export const STUDENT_REVIEWS: StudentReview[] = [
  {
    id: 'rev-1',
    name: '이지은',
    track: '클라우드 & 풀스택 마이크로서비스 6기 수료',
    cohort: '6기',
    background: 'non_major',
    backgroundLabel: '비전공자 (경영학과)',
    placedCompany: '카카오페이',
    role: '정산 플랫폼 백엔드 개발자',
    salaryGrowth: '+1,800만원 (초봉 5,100만원)',
    initialSalary: '3,300만원',
    placedSalary: '5,100만원',
    avatar: '/src/assets/images/alumni_developer_avatar_1793443718060.jpg',
    quote: '단순한 Todo-list 클론 코딩이 아니라, Kafka 분산 트랜잭션과 nGrinder 10만 TPS 부하테스트를 직접 해본 경험이 면접관들의 마음을 열었습니다.',
    detailedReview: '문과 출신이라 기술 면접에 대한 두려움이 컸습니다. 하지만 에이스 IT에서 김도현 강사님께 장애 시나리오별 트러블슈팅과 Saga 패턴을 1:1로 피드백 받으면서 자신감이 생겼습니다. 면접 당시 "신입인데 이 정도 분산 아키텍처를 직접 구성해봤냐"는 질문을 받고 합격을 확신했습니다.',
    portfolioHighlight: 'Saga 패턴 기반 가상화폐 실시간 주문 및 정산 마이크로서비스 (Kafka, Redis, K8s)'
  },
  {
    id: 'rev-2',
    name: '강태욱',
    track: '클라우드 & 풀스택 마이크로서비스 5기 수료',
    cohort: '5기',
    background: 'job_changer',
    backgroundLabel: 'SI 2년차 이직 성공',
    placedCompany: '토스증권',
    role: '코어 클라우드 플랫폼 엔지니어',
    salaryGrowth: '+42% 인상 (연봉 6,400만원)',
    initialSalary: '4,500만원',
    placedSalary: '6,400만원',
    avatar: '/src/assets/images/instructor_lead_architect_1793443717059.jpg',
    quote: '반복적인 레거시 유지보수에서 벗어나 진짜 대규모 트래픽을 처리하는 엔지니어로 거듭났습니다.',
    detailedReview: 'SI 회사에서 매일 야근하며 기술적 성장이 멈췄다는 위기감에 국비지원으로 수강했습니다. 주말까지 강남 캠퍼스 스터디룸에서 동료들과 새벽까지 K8s 매니페스트를 다듬었던 6개월이 제 커리어의 가장 큰 전환점이었습니다.',
    portfolioHighlight: 'AWS EKS 기반 무중단 카나리 배포 파이프라인 및 OpenTelemetry 분산 APM 센터'
  },
  {
    id: 'rev-3',
    name: '윤성민',
    track: '생성형 AI & LLM 엔지니어링 2기 수료',
    cohort: '2기',
    background: 'cs_major',
    backgroundLabel: '컴퓨터공학 학사 졸업',
    placedCompany: '업스테이지 (Upstage AI)',
    role: 'LLM 서빙 & Agent 엔지니어',
    salaryGrowth: '신입 초봉 5,400만원',
    initialSalary: '0원 (취준생)',
    placedSalary: '5,400만원',
    avatar: '/src/assets/images/alumni_developer_avatar_1793443718060.jpg',
    quote: '대학 4년 동안 배우지 못한 H100 GPU 분산 파인튜닝과 vLLM 최적화 실무를 5개월 만에 완성했습니다.',
    detailedReview: '이론 중심의 대학 수업과 달리, 에이스 IT는 첫 주부터 오픈소스 파운데이션 모델을 직접 서빙하고 Qdrant 벡터 검색 엔진의 HNSW 인덱스를 튜닝했습니다. 과제 결과물이 그대로 기술 블로그와 깃허브 포트폴리오가 되어 서류 통과율 80%를 기록했습니다.',
    portfolioHighlight: '의료 도메인 특화 LoRA 파인튜닝 LLM 및 Qdrant 멀티모달 RAG 검색 솔루션'
  }
];

export const PARTNER_COMPANIES = [
  { name: '토스', role: '플랫폼 / 백엔드 엔지니어 42명 합격' },
  { name: '카카오', role: '인프라 / 풀스택 38명 합격' },
  { name: '네이버', role: '클라우드 / 웹 플랫폼 31명 합격' },
  { name: '쿠팡', role: '이커머스 MSA 백엔드 27명 합격' },
  { name: '당근', role: '코어 시스템 개발자 19명 합격' },
  { name: '라인', role: '글로벌 핀테크 개발 16명 합격' },
  { name: '배달의민족', role: '주문/배달 시스템 엔지니어 22명 합격' },
  { name: '야놀자', role: '클라우드 아키텍처 14명 합격' }
];

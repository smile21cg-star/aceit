export interface TechBadge {
  name: string;
  category: 'frontend' | 'backend' | 'devops' | 'database' | 'ai' | 'cloud';
}

export interface CurriculumWeek {
  weekNumber: number;
  title: string;
  hours: number;
  deliverable: string;
  topics: string[];
  tools: string[];
  projectTitle?: string;
  projectDescription?: string;
}

export interface Instructor {
  id: string;
  name: string;
  role: string;
  company: string;
  careerYears: number;
  avatar: string;
  bio: string;
  careerHistory: string[];
  keyLecture: string;
  rating: number;
  mentoredCount: number;
}

export interface StudentReview {
  id: string;
  name: string;
  track: string;
  cohort: string;
  background: 'non_major' | 'job_changer' | 'cs_major';
  backgroundLabel: string;
  placedCompany: string;
  role: string;
  salaryGrowth: string;
  initialSalary?: string;
  placedSalary?: string;
  avatar: string;
  quote: string;
  detailedReview: string;
  portfolioHighlight: string;
}

export interface FaqItem {
  id: string;
  category: 'selection' | 'curriculum' | 'subsidy' | 'career';
  question: string;
  answer: string;
}

export interface Course {
  id: string;
  title: string;
  badgeTag: string;
  cohort: string;
  status: 'recruiting' | 'closing_soon' | 'completed';
  statusLabel: string;
  deadlineDate: string;
  startDate: string;
  durationWeeks: number;
  totalHours: number;
  format: string;
  campusLocation: string;
  tuitionOriginal: number;
  tuitionGovernment: number;
  tuitionSelfPay: number;
  stipendMonthlyMax: number;
  quotaTotal: number;
  quotaEnrolled: number;
  employmentRate: number;
  averageStartingSalary: string;
  heroImage: string;
  summary: string;
  highlights: string[];
  techStack: TechBadge[];
  curriculum: CurriculumWeek[];
  instructors: Instructor[];
  faqs: FaqItem[];
}

export interface RegistrationData {
  courseId: string;
  courseTitle: string;
  studyMode: 'hybrid_gangnam' | 'online_live';
  hasNaeilBaeumCard: 'yes' | 'no' | 'pending';
  applicantName: string;
  applicantPhone: string;
  applicantEmail: string;
  background: 'non_major' | 'cs_major' | 'employed' | 'job_seeker';
  interviewTimeSlot: string;
  agreedToTerms: boolean;
}

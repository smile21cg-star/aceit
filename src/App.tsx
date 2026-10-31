import React, { useState } from 'react';
import { COURSES } from './data/coursesData';
import { Course } from './types';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { TabNav } from './components/TabNav';
import { CourseSpecStrip } from './components/CourseSpecStrip';
import { CurriculumSection } from './components/CurriculumSection';
import { ArchitectureLabSimulator } from './components/ArchitectureLabSimulator';
import { InstructorSection } from './components/InstructorSection';
import { AlumniReviewsSection } from './components/AlumniReviewsSection';
import { GovSubsidyCalculator } from './components/GovSubsidyCalculator';
import { FaqSection } from './components/FaqSection';
import { RegistrationModal } from './components/RegistrationModal';
import { SyllabusModal } from './components/SyllabusModal';
import { CourseCatalogModal } from './components/CourseCatalogModal';
import { FloatingCtaBar } from './components/FloatingCtaBar';
import { Footer } from './components/Footer';

export default function App() {
  const [currentCourse, setCurrentCourse] = useState<Course>(COURSES[0]);
  const [isCatalogOpen, setIsCatalogOpen] = useState<boolean>(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState<boolean>(false);
  const [isSyllabusOpen, setIsSyllabusOpen] = useState<boolean>(false);

  const handleOpenSubsidyCalc = () => {
    const el = document.getElementById('subsidy');
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-[#202124] flex flex-col font-sans selection:bg-[#1A73E8]/10 selection:text-[#1A73E8]">
      {/* Top Bar Contract (3 zones) */}
      <Header
        currentCourse={currentCourse}
        onOpenCatalog={() => setIsCatalogOpen(true)}
        onOpenRegister={() => setIsRegisterOpen(true)}
        onOpenSyllabus={() => setIsSyllabusOpen(true)}
        onOpenSubsidyCalc={handleOpenSubsidyCalc}
      />

      <main className="flex-1">
        {/* Hero Section with campus visual, metrics, urgency timer */}
        <HeroSection
          course={currentCourse}
          onOpenRegister={() => setIsRegisterOpen(true)}
          onOpenSyllabus={() => setIsSyllabusOpen(true)}
          onOpenSubsidyCalc={handleOpenSubsidyCalc}
        />

        {/* Sticky Segment Control Navigation */}
        <TabNav />

        {/* Course Overview & Daily Routine */}
        <CourseSpecStrip
          course={currentCourse}
          onOpenSyllabus={() => setIsSyllabusOpen(true)}
          onOpenRegister={() => setIsRegisterOpen(true)}
        />

        {/* Week-by-Week Expandable Curriculum Accordion */}
        <CurriculumSection
          course={currentCourse}
          onOpenSyllabus={() => setIsSyllabusOpen(true)}
          onOpenRegister={() => setIsRegisterOpen(true)}
        />

        {/* Hands-on Architecture & Lab Simulator */}
        <ArchitectureLabSimulator />

        {/* Top-Tier Mentors & Instructors */}
        <InstructorSection
          instructors={currentCourse.instructors}
          onOpenRegister={() => setIsRegisterOpen(true)}
        />

        {/* Verified Alumni Employment Outcomes & Stories */}
        <AlumniReviewsSection />

        {/* Interactive Government Subsidy & Stipend Calculator */}
        <GovSubsidyCalculator
          course={currentCourse}
          onOpenRegister={() => setIsRegisterOpen(true)}
        />

        {/* Frequently Asked Questions Accordion */}
        <FaqSection
          faqs={currentCourse.faqs}
          onOpenRegister={() => setIsRegisterOpen(true)}
        />
      </main>

      {/* Floating Registration Bar (Bottom with safe-area padding) */}
      <FloatingCtaBar
        course={currentCourse}
        onOpenRegister={() => setIsRegisterOpen(true)}
        onOpenSubsidyCalc={handleOpenSubsidyCalc}
      />

      {/* Footer */}
      <Footer
        onOpenCatalog={() => setIsCatalogOpen(true)}
        onOpenSubsidyCalc={handleOpenSubsidyCalc}
      />

      {/* Multi-Step Registration Modal */}
      <RegistrationModal
        course={currentCourse}
        isOpen={isRegisterOpen}
        onClose={() => setIsRegisterOpen(false)}
      />

      {/* Syllabus Download Modal */}
      <SyllabusModal
        course={currentCourse}
        isOpen={isSyllabusOpen}
        onClose={() => setIsSyllabusOpen(false)}
      />

      {/* Course Catalog Track Switcher Modal */}
      <CourseCatalogModal
        currentCourseId={currentCourse.id}
        isOpen={isCatalogOpen}
        onClose={() => setIsCatalogOpen(false)}
        onSelectCourse={(course) => {
          setCurrentCourse(course);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />
    </div>
  );
}

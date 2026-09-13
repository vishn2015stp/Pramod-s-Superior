"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Founder from "@/components/Founder";
import Courses from "@/components/Courses";
import WhyUs from "@/components/WhyUs";
import Testimonials from "@/components/Testimonials";
import EnrollModal from "@/components/EnrollModal";
import Footer from "@/components/Footer";

export default function Home() {
  const [isEnrollModalOpen, setIsEnrollModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<string | undefined>(undefined);

  const handleOpenEnrollModal = (courseName?: string) => {
    setSelectedCourse(courseName);
    setIsEnrollModalOpen(true);
  };

  const handleCloseEnrollModal = () => {
    setIsEnrollModalOpen(false);
    setSelectedCourse(undefined);
  };

  return (
    <main className="min-h-screen bg-[#FDFBF7] text-[#1A1A1A] font-sans antialiased overflow-x-hidden selection:bg-[#F3E5AB] selection:text-[#1A1A1A]">
      {/* Sticky Header */}
      <Navbar onOpenEnrollModal={() => handleOpenEnrollModal()} />

      {/* Hero Section */}
      <Hero onOpenEnrollModal={() => handleOpenEnrollModal()} />

      {/* Founder / About Section */}
      <Founder />

      {/* Course Offerings 3-Column Responsive Grid */}
      <Courses onOpenEnrollModal={(course) => handleOpenEnrollModal(course)} />

      {/* Value Propositions / Why Superior */}
      <WhyUs />

      {/* Testimonials & Transformations */}
      <Testimonials />

      {/* Interactive Enrollment Modal */}
      <EnrollModal
        isOpen={isEnrollModalOpen}
        onClose={handleCloseEnrollModal}
        selectedCourse={selectedCourse}
      />

      {/* Footer */}
      <Footer />
    </main>
  );
}

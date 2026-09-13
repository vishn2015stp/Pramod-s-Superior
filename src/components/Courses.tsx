"use client";

import React, { useState } from "react";
import { BookOpen, Calculator, Atom, TestTube, Globe, Sparkles, ChevronRight, Check, Clock, Users } from "lucide-react";

interface CoursesProps {
  onOpenEnrollModal: (courseName?: string) => void;
}

export default function Courses({ onOpenEnrollModal }: CoursesProps) {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Programs" },
    { id: "secondary", name: "Secondary / O-Levels" },
    { id: "jc", name: "JC / A-Levels" },
    { id: "primary", name: "Primary Mastery" },
  ];

  const courseCards = [
    {
      id: 1,
      title: "Elementary & Additional Mathematics",
      category: "secondary",
      icon: Calculator,
      level: "Secondary 1 - 4 / O-Levels",
      description: "Master algebraic manipulation, trigonometry, calculus, and problem-solving techniques with step-by-step guidance.",
      highlights: ["Calculus & Algebra Mastery", "Exam Heuristics & Speed Techniques", "Weekly Drill & Diagnostic Tests"],
      popular: true,
      duration: "2 Hrs / Week",
      classSize: "Max 8 Students",
    },
    {
      id: 2,
      title: "Pure & Combined Physics",
      category: "secondary",
      icon: Atom,
      level: "Secondary 3 - 4 / O-Levels",
      description: "Deep dive into physical principles, formula applications, practical skills, and structured question answering frameworks.",
      highlights: ["Newtonian Mechanics & Electricity", "Formula Memory Maps", "Past Year Paper Analysis"],
      popular: false,
      duration: "2 Hrs / Week",
      classSize: "Max 8 Students",
    },
    {
      id: 3,
      title: "Pure & Combined Chemistry",
      category: "secondary",
      icon: TestTube,
      level: "Secondary 3 - 4 / O-Levels",
      description: "Demystify stoichiometry, organic chemistry, periodic trends, and chemical bonding with visual concept maps.",
      highlights: ["Organic Chemistry Simplification", "Lab Skill Guidance", "Targeted Weak-Spot Remediation"],
      popular: true,
      duration: "2 Hrs / Week",
      classSize: "Max 8 Students",
    },
    {
      id: 4,
      title: "H1 / H2 Mathematics (JC)",
      category: "jc",
      icon: Calculator,
      level: "Junior College 1 - 2 / A-Levels",
      description: "Comprehensive coverage of vectors, complex numbers, statistics, and differential equations tailored for A-Level distinctions.",
      highlights: ["H2 Calculus & Statistics", "Graphic Calculator Shortcuts", "Time Management Strategies"],
      popular: true,
      duration: "2.5 Hrs / Week",
      classSize: "Max 6 Students",
    },
    {
      id: 5,
      title: "English Language & Literature",
      category: "secondary",
      icon: Globe,
      level: "Secondary 1 - 4 / O-Levels",
      description: "Sharpen comprehension synthesis, essay structure, vocabulary expression, and oral communication skills.",
      highlights: ["Argumentative Essay Writing", "Comprehension Answering Formulas", "Oral & Listening Mastery"],
      popular: false,
      duration: "2 Hrs / Week",
      classSize: "Max 8 Students",
    },
    {
      id: 6,
      title: "Primary PSLE Math & Science",
      category: "primary",
      icon: BookOpen,
      level: "Primary 4 - 6 / PSLE",
      description: "Build strong foundational concepts and model drawing techniques early to guarantee PSLE AL1/AL2 achievement.",
      highlights: ["Model Drawing Techniques", "Open-Ended Science Answering", "Mock PSLE Exam Simulations"],
      popular: false,
      duration: "1.5 Hrs / Week",
      classSize: "Max 8 Students",
    },
  ];

  const filteredCourses = activeCategory === "all" 
    ? courseCards 
    : courseCards.filter(c => c.category === activeCategory);

  return (
    <section id="courses" className="py-20 md:py-28 bg-[#FDFBF7] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F3E5AB]/40 border border-[#D4AF37]/30 text-xs font-bold text-[#1A1A1A] tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Curriculum Excellence</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif-header text-[#1A1A1A]">
            Our Specialized <span className="gold-gradient-text">Course Offerings</span>
          </h2>
          <p className="text-base sm:text-lg text-neutral-600">
            Tailored academic modules designed to instill confidence, master exam techniques, and secure top grades.
          </p>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                  activeCategory === cat.id
                    ? "bg-[#D4AF37] text-[#1A1A1A] shadow-gold scale-105"
                    : "bg-white text-neutral-700 hover:bg-[#F3E5AB]/40 border border-neutral-200"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* 3-Column Responsive Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => {
            const IconComponent = course.icon;
            return (
              <div
                key={course.id}
                className="group relative bg-white rounded-2xl p-6 sm:p-8 border-2 border-neutral-100 hover:border-[#D4AF37] shadow-sm hover:shadow-gold-hover transition-all duration-300 transform hover:-translate-y-2 flex flex-col justify-between"
              >
                {/* Popular Badge */}
                {course.popular && (
                  <div className="absolute -top-3 right-6 bg-gradient-to-r from-[#D4AF37] to-[#F3E5AB] text-[#1A1A1A] text-[11px] font-bold px-3 py-1 rounded-full shadow-sm flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-[#1A1A1A]" />
                    Most Popular
                  </div>
                )}

                <div>
                  {/* Card Icon & Level */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#F3E5AB]/40 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-[#1A1A1A] transition-colors duration-300">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-semibold text-neutral-500 bg-[#FDFBF7] px-3 py-1 rounded-md border border-neutral-200">
                      {course.level}
                    </span>
                  </div>

                  {/* Course Title */}
                  <h3 className="text-xl font-bold font-serif-header text-[#1A1A1A] group-hover:text-[#D4AF37] transition-colors duration-200 mb-3">
                    {course.title}
                  </h3>

                  {/* Course Description */}
                  <p className="text-sm text-neutral-600 leading-relaxed mb-6">
                    {course.description}
                  </p>

                  {/* Course Key Highlights */}
                  <div className="space-y-2 mb-6 pt-4 border-t border-neutral-100">
                    {course.highlights.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs font-medium text-neutral-700">
                        <Check className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Footer Details & Action Button */}
                <div className="pt-4 border-t border-neutral-100 space-y-4">
                  <div className="flex items-center justify-between text-xs text-neutral-500 font-medium">
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5 text-[#D4AF37]" />
                      <span>{course.classSize}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => onOpenEnrollModal(course.title)}
                    className="w-full py-3 rounded-xl font-bold text-sm text-[#1A1A1A] bg-[#FDFBF7] group-hover:bg-[#D4AF37] border border-[#D4AF37]/30 group-hover:border-[#D4AF37] transition-all duration-300 shadow-sm flex items-center justify-center gap-2"
                  >
                    <span>Enroll in Subject</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

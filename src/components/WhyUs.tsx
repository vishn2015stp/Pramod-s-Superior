"use client";

import React from "react";
import { Target, Users, BookMarked, Award, CheckCircle, BarChart3 } from "lucide-react";

export default function WhyUs() {
  const features = [
    {
      icon: Target,
      title: "Targeted Exam Pedagogy",
      description: "Our proprietary answering frameworks decode Cambridge/MOE marking schemes so students know exactly what examiners look for.",
    },
    {
      icon: Users,
      title: "Intimate Small Classes",
      description: "Capped at 6 to 8 students per group to guarantee that no student is left behind and every question is answered immediately.",
    },
    {
      icon: BookMarked,
      title: "Curated Summary Notes",
      description: "Concise, high-yield summary booklets and formula maps designed for quick revision before major exams.",
    },
    {
      icon: BarChart3,
      title: "Weekly Diagnostic Tracking",
      description: "Parents receive regular performance updates and diagnostic feedback after every module evaluation.",
    },
    {
      icon: Award,
      title: "Master Educators",
      description: "Led by founder Pramodh Prabakaran and top subject experts with years of proven distinction track records.",
    },
    {
      icon: CheckCircle,
      title: "After-Class Consultation",
      description: "Dedicated WhatsApp and 1:1 consultation support for student homework queries outside regular lesson hours.",
    },
  ];

  return (
    <section id="why-us" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#F3E5AB]/40 px-3.5 py-1 rounded-full border border-[#D4AF37]/30">
            The Superior Edge
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif-header text-[#1A1A1A]">
            Why Parents & Students Choose <span className="gold-gradient-text">Superior Family</span>
          </h2>
          <p className="text-base sm:text-lg text-neutral-600">
            We deliver more than just lessons—we cultivate mindset, mastery, and top academic honors.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className="bg-[#FDFBF7] p-8 rounded-2xl border border-[#D4AF37]/25 hover:border-[#D4AF37] hover:shadow-gold transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-white border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-[#1A1A1A] transition-all duration-300 mb-6 shadow-sm">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold font-serif-header text-[#1A1A1A] mb-3 group-hover:text-[#D4AF37] transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

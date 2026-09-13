"use client";

import React from "react";
import { UserCheck, Award, HeartHandshake, Quote, ShieldCheck, GraduationCap } from "lucide-react";

export default function Founder() {
  return (
    <section id="founder" className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* Background Subtle Accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#F3E5AB]/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#D4AF37]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F3E5AB]/40 border border-[#D4AF37]/30 text-xs font-bold text-[#1A1A1A] tracking-wider uppercase">
            <GraduationCap className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Leadership & Vision</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif-header text-[#1A1A1A]">
            Meet Our Founder: <span className="gold-gradient-text">Pramodh Prabakaran</span>
          </h2>
          <p className="text-base sm:text-lg text-neutral-600">
            Pioneering academic excellence through empathetic mentorship and rigorous conceptual clarity.
          </p>
        </div>

        {/* Founder Golden Card Wrapper */}
        <div className="relative rounded-3xl p-1 bg-gradient-to-br from-[#D4AF37] via-[#F3E5AB] to-[#D4AF37] shadow-gold-lg">
          <div className="bg-[#FDFBF7] rounded-[23px] p-6 sm:p-10 lg:p-14 border border-[#D4AF37]/20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              
              {/* Image Placeholder Block (Left Side) */}
              <div className="lg:col-span-5 relative">
                <div className="relative mx-auto max-w-sm lg:max-w-none">
                  {/* Subtle Glow Behind Frame */}
                  <div className="absolute -inset-2 bg-[#D4AF37]/20 rounded-2xl blur-lg" />
                  
                  {/* Founder Image Frame Container */}
                  <div className="relative rounded-2xl overflow-hidden bg-white p-3 border-2 border-[#D4AF37]/40 shadow-xl space-y-4">
                    
                    {/* Visual Image Placeholder */}
                    <div className="relative h-80 sm:h-96 w-full rounded-xl overflow-hidden bg-gradient-to-t from-[#1A1A1A] via-[#2A2A2A] to-[#3A3A3A] flex flex-col items-center justify-center p-6 text-center group">
                      
                      {/* Avatar Placeholder Icon */}
                      <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#F3E5AB] p-1 shadow-lg mb-4 flex items-center justify-center">
                        <div className="w-full h-full bg-[#1A1A1A] rounded-full flex items-center justify-center">
                          <UserCheck className="w-12 h-12 text-[#D4AF37]" />
                        </div>
                      </div>

                      <span className="text-xs font-semibold text-[#F3E5AB] uppercase tracking-widest bg-black/40 px-3 py-1 rounded-full border border-[#D4AF37]/30 mb-2">
                        Founder & Principal Tutor
                      </span>
                      
                      <h4 className="text-xl font-bold font-serif-header text-white">
                        Pramodh Prabakaran
                      </h4>
                      
                      <p className="text-xs text-neutral-300 mt-1 max-w-xs">
                        [Founder Photo Placeholder]
                      </p>

                      <div className="mt-4 pt-3 border-t border-neutral-700/60 w-full flex items-center justify-center gap-2 text-xs text-[#D4AF37]">
                        <Award className="w-4 h-4" />
                        <span>Master Educator & Academic Director</span>
                      </div>
                    </div>

                    {/* Badge below photo */}
                    <div className="bg-[#F3E5AB]/30 p-3 rounded-lg border border-[#D4AF37]/30 flex items-center justify-around text-center">
                      <div>
                        <p className="text-xs font-bold text-[#1A1A1A]">100% Dedicated</p>
                        <p className="text-[10px] text-neutral-600">Student First Mindset</p>
                      </div>
                      <div className="h-6 w-px bg-[#D4AF37]/30" />
                      <div>
                        <p className="text-xs font-bold text-[#1A1A1A]">Proven Method</p>
                        <p className="text-[10px] text-neutral-600">Step-by-Step Mastery</p>
                      </div>
                    </div>

                  </div>
                </div>
              </div>

              {/* Visionary Text Block (Right Side) */}
              <div className="lg:col-span-7 space-y-6 text-left">
                
                {/* Quote Icon */}
                <div className="w-12 h-12 rounded-2xl bg-[#D4AF37]/15 flex items-center justify-center text-[#D4AF37]">
                  <Quote className="w-6 h-6" />
                </div>

                {/* Subtitle */}
                <span className="text-xs font-bold tracking-widest text-[#D4AF37] uppercase">
                  A Message From The Founder
                </span>

                {/* Main Vision Heading */}
                <h3 className="text-2xl sm:text-3xl font-bold font-serif-header text-[#1A1A1A] leading-snug">
                  &quot;Education is not just about scoring marks; it is about building unwavering confidence and lifelong critical thinking.&quot;
                </h3>

                {/* Visionary Text Body */}
                <div className="space-y-4 text-neutral-700 text-base sm:text-lg leading-relaxed font-normal">
                  <p>
                    Welcome to <strong className="text-[#1A1A1A] font-semibold">Superior Family</strong>. When I founded this tuition center, my core goal was simple yet transformative: to create an educational sanctuary where every student receives the individual focus, encouragement, and academic rigor they deserve.
                  </p>
                  <p>
                    Over the years, we have guided hundreds of students from struggling grades to distinction-level confidence. We break down complex concepts into intuitive, digestible insights, making learning an empowering experience rather than a daunting chore.
                  </p>
                  <p className="text-sm sm:text-base text-neutral-600 italic border-l-2 border-[#D4AF37] pl-4 py-1">
                    &quot;At Superior Family, every student is treated like family. We take personal ownership of their growth, celebrate their milestones, and walk every step of their academic journey alongside them.&quot;
                  </p>
                </div>

                {/* Core Pillars Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#D4AF37]/20">
                  <div className="flex items-start gap-3">
                    <ShieldCheck className="w-5 h-5 text-[#D4AF37] mt-1 flex-shrink-0" />
                    <div>
                      <h5 className="font-bold text-sm text-[#1A1A1A]">Curated Syllabus</h5>
                      <p className="text-xs text-neutral-600">Constantly updated to align with modern MOE exam frameworks.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <HeartHandshake className="w-5 h-5 text-[#D4AF37] mt-1 flex-shrink-0" />
                    <div>
                      <h5 className="font-bold text-sm text-[#1A1A1A]">Empathetic Mentorship</h5>
                      <p className="text-xs text-neutral-600">Nurturing environment that encourages questions and builds resilience.</p>
                    </div>
                  </div>
                </div>

                {/* Signature */}
                <div className="pt-4 flex items-center justify-between">
                  <div>
                    <p className="font-serif-header text-xl font-bold text-[#1A1A1A]">Pramodh Prabakaran</p>
                    <p className="text-xs font-semibold text-[#D4AF37]">Founder & Lead Educator, Superior Family</p>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

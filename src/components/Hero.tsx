"use client";

import React from "react";
import { Sparkles, ArrowRight, BookOpen, Award, Users, CheckCircle2, Star } from "lucide-react";

interface HeroProps {
  onOpenEnrollModal: () => void;
}

export default function Hero({ onOpenEnrollModal }: HeroProps) {
  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-cream">
      {/* Decorative Golden Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D4AF37]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-72 h-72 bg-[#F3E5AB]/30 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F3E5AB]/40 border border-[#D4AF37]/30 text-xs sm:text-sm font-semibold text-[#1A1A1A]">
              <Sparkles className="w-4 h-4 text-[#D4AF37]" />
              <span>Kerala&apos;s Premier Tuition — Anchalummood &amp; Alummoodu</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse" />
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#1A1A1A] font-serif-header leading-[1.15]">
              Elevating Education, <br className="hidden sm:inline" />
              <span className="gold-gradient-text">Empowering Futures.</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-neutral-700 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              High-quality tuition services designed for student excellence. We combine personalized pedagogy, proven exam methodologies, and elite mentorship to transform potential into outstanding achievement.
            </p>

            {/* Hero CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              {/* Primary Button (Solid Gold) */}
              <button
                onClick={onOpenEnrollModal}
                className="w-full sm:w-auto px-8 py-4 rounded-full font-bold text-base text-[#1A1A1A] bg-[#D4AF37] hover:bg-[#B38F24] hover:text-white transition-all duration-300 shadow-gold hover:shadow-gold-lg flex items-center justify-center gap-3 border border-[#D4AF37]/50 group"
              >
                <span>Enroll Now</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Secondary Button (White bg with Gold border) */}
              <a
                href="#courses"
                className="w-full sm:w-auto px-8 py-4 rounded-full font-semibold text-base text-[#1A1A1A] bg-white hover:bg-[#FDFBF7] border-2 border-[#D4AF37] transition-all duration-300 shadow-sm flex items-center justify-center gap-2 hover:border-[#B38F24]"
              >
                <span>Explore Offerings</span>
              </a>
            </div>

            {/* Key Trust Signals */}
            <div className="pt-6 grid grid-cols-3 gap-4 border-t border-[#D4AF37]/20 max-w-lg mx-auto lg:mx-0">
              <div className="text-center lg:text-left">
                <p className="text-2xl sm:text-3xl font-extrabold text-[#1A1A1A] font-serif-header">98%</p>
                <p className="text-xs sm:text-sm text-neutral-600 font-medium">Distinction Rate</p>
              </div>
              <div className="text-center lg:text-left">
                <p className="text-2xl sm:text-3xl font-extrabold text-[#1A1A1A] font-serif-header">10+ Yrs</p>
                <p className="text-xs sm:text-sm text-neutral-600 font-medium">Proven Excellence</p>
              </div>
              <div className="text-center lg:text-left">
                <p className="text-2xl sm:text-3xl font-extrabold text-[#1A1A1A] font-serif-header">1:1</p>
                <p className="text-xs sm:text-sm text-neutral-600 font-medium">Custom Mentorship</p>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visuals / Image Placeholder Frame */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer Golden Glow Card */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#D4AF37] rounded-3xl blur-md opacity-70 animate-pulse" />
              
              {/* Inner Image Placeholder Card */}
              <div className="relative bg-white rounded-3xl p-4 sm:p-6 shadow-2xl border border-[#D4AF37]/30 space-y-6">
                
                {/* Visual Placeholder Header */}
                <div className="relative h-64 sm:h-72 w-full rounded-2xl overflow-hidden bg-gradient-to-br from-[#FDFBF7] via-[#F3E5AB]/40 to-[#D4AF37]/20 flex flex-col items-center justify-center p-6 text-center border border-[#D4AF37]/20 group">
                  <div className="w-16 h-16 rounded-full bg-white shadow-gold flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <BookOpen className="w-8 h-8 text-[#D4AF37]" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#D4AF37] bg-white/90 px-3 py-1 rounded-full shadow-sm">
                    Hero Visual Placeholder
                  </span>
                  <h3 className="text-xl font-bold font-serif-header text-[#1A1A1A] mt-2">
                    Superior Learning Environment
                  </h3>
                  <p className="text-xs text-neutral-600 mt-1 max-w-xs">
                    State-of-the-art interactive classrooms designed to ignite curiosity and foster academic mastery.
                  </p>
                </div>

                {/* Floating Badge 1: Top Scorers */}
                <div className="bg-[#FDFBF7] p-4 rounded-xl border border-[#D4AF37]/30 flex items-center gap-4 shadow-sm">
                  <div className="w-12 h-12 rounded-lg bg-[#D4AF37]/15 flex items-center justify-center text-[#D4AF37] flex-shrink-0">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-[#D4AF37] text-[#D4AF37]" />
                      ))}
                    </div>
                    <p className="text-xs font-bold text-[#1A1A1A] mt-0.5">Top Tier Educator Ratings</p>
                    <p className="text-[11px] text-neutral-500">Trusted by over 500+ satisfied families</p>
                  </div>
                </div>

                {/* Floating Badge 2: Small Class Guarantee */}
                <div className="flex items-center justify-between px-2 pt-1 text-xs text-neutral-600 font-medium">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                    <span>Max 8 Students Per Class</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                    <span>Custom Study Workbooks</span>
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

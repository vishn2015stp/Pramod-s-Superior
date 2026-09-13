"use client";

import React from "react";
import { Star, Quote, TrendingUp } from "lucide-react";

export default function Testimonials() {
  const reviews = [
    {
      name: "Marcus Tan",
      role: "Sec 4 O-Level Student",
      subject: "A-Maths & Physics",
      improvement: "Improved from C6 to A1",
      quote: "Before joining Pramod's Superior, I struggled with Additional Math formulas. Mr. Pramodh's method of breaking down complex questions made everything click. Got an A1 in my O-Levels!",
    },
    {
      name: "Mrs. Evelyn Lim",
      role: "Parent of JC Student",
      subject: "H2 Chemistry & H2 Math",
      improvement: "Distinction in A-Levels",
      quote: "The personalized attention at Pramod's Superior is top-tier. My daughter regained her confidence in Chemistry within weeks. The small class size made a huge difference.",
    },
    {
      name: "Siddharth R.",
      role: "Sec 3 Pure Chemistry",
      subject: "Pure Chemistry",
      improvement: "Jumped 3 Grade Bands",
      quote: "The summary notes provided by Pramod's Superior are absolute gold! They cut through the clutter and helped me revise effectively before exams.",
    },
  ];

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-[#FDFBF7] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#F3E5AB]/40 px-3.5 py-1 rounded-full border border-[#D4AF37]/30">
            Proven Results
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif-header text-[#1A1A1A]">
            Student Transformations & <span className="gold-gradient-text">Success Stories</span>
          </h2>
          <p className="text-base sm:text-lg text-neutral-600">
            Hear from our students and parents who turned academic challenges into distinction honors.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-2xl border-2 border-neutral-100 hover:border-[#D4AF37] shadow-sm hover:shadow-gold-hover transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Rating Stars & Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]" />
                    ))}
                  </div>
                  <div className="inline-flex items-center gap-1 text-[11px] font-bold text-[#1A1A1A] bg-[#F3E5AB]/40 px-2.5 py-1 rounded-full border border-[#D4AF37]/30">
                    <TrendingUp className="w-3 h-3 text-[#D4AF37]" />
                    <span>{rev.improvement}</span>
                  </div>
                </div>

                {/* Quote */}
                <p className="text-sm sm:text-base text-neutral-700 italic leading-relaxed mb-6">
                  &quot;{rev.quote}&quot;
                </p>
              </div>

              {/* Author Footer */}
              <div className="pt-4 border-t border-neutral-100 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-[#1A1A1A] font-serif-header">{rev.name}</h4>
                  <p className="text-xs text-neutral-500">{rev.role} • <span className="text-[#D4AF37] font-semibold">{rev.subject}</span></p>
                </div>
                <Quote className="w-6 h-6 text-[#D4AF37]/30" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

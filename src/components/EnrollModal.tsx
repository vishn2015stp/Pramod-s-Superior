"use client";

import React, { useState, useEffect } from "react";
import { X, Send, Sparkles, CheckCircle2, Phone, Mail, User, GraduationCap, BookOpen } from "lucide-react";

interface EnrollModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedCourse?: string;
}

export default function EnrollModal({ isOpen, onClose, selectedCourse }: EnrollModalProps) {
  const [formData, setFormData] = useState({
    parentName: "",
    studentName: "",
    email: "",
    phone: "",
    level: "Secondary 3 / 4 (O-Level)",
    subject: selectedCourse || "Mathematics (Elementary / Additional)",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (selectedCourse) {
      setFormData((prev) => ({ ...prev, subject: selectedCourse }));
    }
  }, [selectedCourse]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-fadeIn">
      
      {/* Modal Container */}
      <div className="relative w-full max-w-xl bg-white rounded-3xl p-1 bg-gradient-to-br from-[#D4AF37] via-[#F3E5AB] to-[#D4AF37] shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
        <div className="bg-[#FDFBF7] rounded-[23px] p-6 sm:p-8 overflow-y-auto max-h-[85vh]">
          
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 text-neutral-400 hover:text-[#1A1A1A] hover:bg-neutral-100 rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          {!submitted ? (
            <>
              {/* Modal Header */}
              <div className="mb-6 space-y-2 text-left">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F3E5AB]/40 text-xs font-bold text-[#1A1A1A] border border-[#D4AF37]/30">
                  <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Start Your Academic Excellence Journey</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold font-serif-header text-[#1A1A1A]">
                  Enroll at <span className="gold-gradient-text">Superior Family</span>
                </h3>
                <p className="text-sm text-neutral-600">
                  Fill in the form below. Principal Tutor Pramodh Prabakaran or our admissions counselor will reach out within 24 hours.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4 text-left">
                
                {/* Parent & Student Names Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase text-neutral-700 mb-1">
                      Parent&apos;s Full Name *
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-[#D4AF37] absolute left-3 top-3" />
                      <input
                        type="text"
                        required
                        placeholder="e.g. David Tan"
                        value={formData.parentName}
                        onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                        className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-neutral-300 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] outline-none text-sm text-[#1A1A1A]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-neutral-700 mb-1">
                      Student&apos;s Name *
                    </label>
                    <div className="relative">
                      <GraduationCap className="w-4 h-4 text-[#D4AF37] absolute left-3 top-3" />
                      <input
                        type="text"
                        required
                        placeholder="e.g. Alex Tan"
                        value={formData.studentName}
                        onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                        className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-neutral-300 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] outline-none text-sm text-[#1A1A1A]"
                      />
                    </div>
                  </div>
                </div>

                {/* Email & Phone Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase text-neutral-700 mb-1">
                      Contact Email *
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-[#D4AF37] absolute left-3 top-3" />
                      <input
                        type="email"
                        required
                        placeholder="parent@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-neutral-300 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] outline-none text-sm text-[#1A1A1A]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-neutral-700 mb-1">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-[#D4AF37] absolute left-3 top-3" />
                      <input
                        type="tel"
                        required
                        placeholder="+65 9123 4567"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-neutral-300 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] outline-none text-sm text-[#1A1A1A]"
                      />
                    </div>
                  </div>
                </div>

                {/* Level Select */}
                <div>
                  <label className="block text-xs font-bold uppercase text-neutral-700 mb-1">
                    Student Level / Grade
                  </label>
                  <select
                    value={formData.level}
                    onChange={(e) => setFormData({ ...formData, level: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl border border-neutral-300 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] outline-none text-sm text-[#1A1A1A] bg-white"
                  >
                    <option value="Primary 4 - 6 (PSLE Prep)">Primary 4 - 6 (PSLE Prep)</option>
                    <option value="Secondary 1 / 2 (Lower Sec)">Secondary 1 / 2 (Lower Sec Foundations)</option>
                    <option value="Secondary 3 / 4 (O-Level)">Secondary 3 / 4 (O-Level Mastery)</option>
                    <option value="JC 1 / 2 (A-Level)">Junior College 1 / 2 (A-Level Distinction)</option>
                  </select>
                </div>

                {/* Subject Interest */}
                <div>
                  <label className="block text-xs font-bold uppercase text-neutral-700 mb-1">
                    Primary Subject of Interest
                  </label>
                  <div className="relative">
                    <BookOpen className="w-4 h-4 text-[#D4AF37] absolute left-3 top-3" />
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Additional Mathematics, Chemistry, Physics"
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-neutral-300 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] outline-none text-sm text-[#1A1A1A]"
                    />
                  </div>
                </div>

                {/* Additional Message */}
                <div>
                  <label className="block text-xs font-bold uppercase text-neutral-700 mb-1">
                    Additional Notes / Target Goals
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Tell us about your student&apos;s current grades or specific academic goals..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full p-3 rounded-xl border border-neutral-300 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] outline-none text-sm text-[#1A1A1A]"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl font-bold text-base text-[#1A1A1A] bg-[#D4AF37] hover:bg-[#B38F24] hover:text-white transition-all duration-300 shadow-gold flex items-center justify-center gap-2 border border-[#D4AF37]/50 mt-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Enrollment Application</span>
                </button>
              </form>
            </>
          ) : (
            /* Confirmation Screen */
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#D4AF37]/20 border-2 border-[#D4AF37] text-[#D4AF37] flex items-center justify-center mx-auto animate-bounce">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold font-serif-header text-[#1A1A1A]">
                Application Received!
              </h3>
              <p className="text-sm text-neutral-600 max-w-md mx-auto">
                Thank you, <strong className="text-[#1A1A1A]">{formData.parentName}</strong>. We have received your inquiry for <strong className="text-[#D4AF37]">{formData.studentName}</strong> regarding <strong className="text-[#1A1A1A]">{formData.subject}</strong>.
              </p>
              <p className="text-xs text-neutral-500 bg-[#F3E5AB]/40 p-3 rounded-xl border border-[#D4AF37]/30 max-w-md mx-auto">
                Pramodh Prabakaran and our team will contact you shortly via email or WhatsApp at <strong>{formData.phone}</strong>.
              </p>
              <button
                onClick={handleReset}
                className="px-6 py-2.5 rounded-full font-bold text-sm text-[#1A1A1A] bg-[#D4AF37] hover:bg-[#B38F24] hover:text-white transition-colors"
              >
                Close Window
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}

"use client";

import React from "react";
import { Instagram, Facebook, MapPin, Phone, Mail, ChevronRight, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#1A1A1A] text-white pt-16 pb-12 border-t-4 border-[#D4AF37] relative overflow-hidden">
      
      {/* Background Decorative Gold Radial */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-neutral-800">
          
          {/* Brand Info & Vision */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#D4AF37] to-[#F3E5AB] p-[1.5px]">
                <div className="w-full h-full bg-[#1A1A1A] rounded-[10px] flex items-center justify-center">
                  <span className="text-[#D4AF37] font-bold text-xl font-serif-header">SF</span>
                </div>
              </div>
              <span className="font-serif-header text-2xl font-bold tracking-tight text-white">
                Superior <span className="text-[#D4AF37]">Family</span>
              </span>
            </div>
            
            <p className="text-sm text-neutral-400 max-w-sm leading-relaxed">
              Elevating Education, Empowering Futures. A premier tuition center dedicated to academic distinction, individual mentorship, and holistic student growth founded by Pramodh Prabakaran.
            </p>

            {/* Social Links Integration with Hardcoded URLs */}
            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://www.instagram.com/superior___family?stkn=MWVubzBycGV0aDN0Mw=="
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-neutral-800 hover:bg-[#D4AF37] hover:text-[#1A1A1A] text-neutral-300 transition-all duration-300 flex items-center justify-center border border-neutral-700 hover:border-[#D4AF37] shadow-sm hover:scale-110"
              >
                <Instagram className="w-5 h-5" />
              </a>

              <a
                href="https://www.facebook.com/pramodh.prabakaran"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full bg-neutral-800 hover:bg-[#D4AF37] hover:text-[#1A1A1A] text-neutral-300 transition-all duration-300 flex items-center justify-center border border-neutral-700 hover:border-[#D4AF37] shadow-sm hover:scale-110"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#D4AF37] font-serif-header">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm text-neutral-300">
              <li>
                <a href="#hero" className="hover:text-[#D4AF37] transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Home</span>
                </a>
              </li>
              <li>
                <a href="#founder" className="hover:text-[#D4AF37] transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>About Founder</span>
                </a>
              </li>
              <li>
                <a href="#courses" className="hover:text-[#D4AF37] transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Course Offerings</span>
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-[#D4AF37] transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Why Choose Superior</span>
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-[#D4AF37] transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Student Success Stories</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#D4AF37] font-serif-header">
              Connect With Us
            </h4>
            <ul className="space-y-3 text-sm text-neutral-300">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                <span>Superior Family Learning Center, Singapore</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#D4AF37] flex-shrink-0" />
                <a href="tel:+6591234567" className="hover:text-[#D4AF37] transition-colors">
                  +65 9123 4567
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#D4AF37] flex-shrink-0" />
                <a href="mailto:contact@superiorfamily.edu.sg" className="hover:text-[#D4AF37] transition-colors">
                  contact@superiorfamily.edu.sg
                </a>
              </li>
            </ul>

            <div className="pt-2">
              <p className="text-xs text-neutral-400">
                Founding Director: <strong className="text-white">Pramodh Prabakaran</strong>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 gap-4">
          <p>© 2026 Superior Family Tuition Center. All rights reserved.</p>
          <div className="flex items-center gap-1 text-neutral-400">
            <span>Designed with excellence for</span>
            <span className="text-[#D4AF37] font-semibold">Superior Family</span>
          </div>
        </div>

      </div>
    </footer>
  );
}

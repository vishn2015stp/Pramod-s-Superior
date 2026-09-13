"use client";

import React from "react";
import Image from "next/image";
import { Instagram, Facebook, MapPin, Phone, Mail, ChevronRight } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#1A1A1A] text-white pt-16 pb-12 border-t-4 border-[#D4AF37] relative overflow-hidden">

      {/* Background Decorative Gold Radial */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-neutral-800">

          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-[#D4AF37]/70 shadow-gold flex-shrink-0">
                <Image
                  src="/logo.jpg"
                  alt="Pramod's Superior Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <span className="font-serif-header text-2xl font-bold tracking-tight text-white">
                  Pramod&apos;s <span className="text-[#D4AF37]">Superior</span>
                </span>
                <p className="text-[10px] text-neutral-400 uppercase tracking-widest font-semibold mt-0.5">
                  Be Superior with Superior
                </p>
              </div>
            </div>

            <p className="text-sm text-neutral-400 max-w-sm leading-relaxed">
              Elevating Education, Empowering Futures. A premier tuition center dedicated to academic distinction,
              individual mentorship, and holistic student growth founded by Pramodh Prabakaran.
              Serving students across Anchalummood &amp; Alummoodu, Kollam, Kerala.
            </p>

            {/* Social Links */}
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

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#D4AF37] font-serif-header">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm text-neutral-300">
              {[
                { label: "Home", href: "#hero" },
                { label: "About Founder", href: "#founder" },
                { label: "Course Offerings", href: "#courses" },
                { label: "Why Choose Superior", href: "#why-us" },
                { label: "Student Success Stories", href: "#testimonials" },
              ].map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="hover:text-[#D4AF37] transition-colors flex items-center gap-1.5">
                    <ChevronRight className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#D4AF37] font-serif-header">
              Our Branches
            </h4>
            <ul className="space-y-3 text-sm text-neutral-300">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">Main Branch</p>
                  <p>Anchalummood, Kollam, Kerala, India</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">Branch</p>
                  <p>Alummoodu, Kollam, Kerala, India</p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#D4AF37] flex-shrink-0" />
                <a href="tel:+919876543210" className="hover:text-[#D4AF37] transition-colors">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#D4AF37] flex-shrink-0" />
                <a href="mailto:contact@pramodssuperior.in" className="hover:text-[#D4AF37] transition-colors">
                  contact@pramodssuperior.in
                </a>
              </li>
            </ul>

            <div className="pt-2">
              <p className="text-xs text-neutral-400">
                Founded by: <strong className="text-white">Pramodh Prabakaran</strong>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 gap-4">
          <p>© 2026 Pramod&apos;s Superior Tuition Center. All rights reserved.</p>
          <div className="flex items-center gap-1 text-neutral-400 italic text-[11px]">
            <span className="text-[#D4AF37] font-semibold">Be Superior with Superior</span>
          </div>
        </div>

      </div>
    </footer>
  );
}

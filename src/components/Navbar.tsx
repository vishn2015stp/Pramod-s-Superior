"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X, ChevronRight, PhoneCall } from "lucide-react";

interface NavbarProps {
  onOpenEnrollModal: () => void;
}

export default function Navbar({ onOpenEnrollModal }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About Founder", href: "#founder" },
    { name: "Courses", href: "#courses" },
    { name: "Why Superior", href: "#why-us" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "glass-nav py-2 shadow-sm"
          : "bg-[#FDFBF7]/80 backdrop-blur-md py-3 border-b border-[#D4AF37]/15"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">

          {/* Logo — actual uploaded image */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#D4AF37]/60 shadow-gold group-hover:scale-105 transition-transform duration-300">
              <Image
                src="/logo.jpg"
                alt="Pramod's Superior Logo"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-serif-header text-lg font-extrabold tracking-tight text-[#1A1A1A] group-hover:text-[#D4AF37] transition-colors duration-200">
                Pramod&apos;s <span className="text-[#D4AF37]">Superior</span>
              </span>
              <span className="text-[9px] tracking-widest text-neutral-500 uppercase font-semibold">
                Anchalummood &amp; Alummoodu, Kollam
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-[#1A1A1A]/80 hover:text-[#D4AF37] transition-colors duration-200 relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-[#D4AF37] transition-all duration-300 transform -translate-x-1/2 group-hover:w-3/4" />
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+919876543210"
              className="text-xs font-semibold text-neutral-600 hover:text-[#D4AF37] flex items-center gap-1.5 transition-colors"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Inquiries</span>
            </a>
            <button
              onClick={onOpenEnrollModal}
              className="px-5 py-2.5 rounded-full font-semibold text-sm text-[#1A1A1A] bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#D4AF37] bg-[length:200%_auto] hover:bg-right transition-all duration-500 shadow-sm hover:shadow-gold hover:-translate-y-0.5 flex items-center gap-2 border border-[#D4AF37]/40"
            >
              <span>Enroll Now</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Controls */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenEnrollModal}
              className="px-3 py-1.5 rounded-full text-xs font-bold text-[#1A1A1A] bg-[#D4AF37] shadow-sm"
            >
              Enroll
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#1A1A1A] hover:bg-[#D4AF37]/10 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-nav border-t border-[#D4AF37]/20 px-4 pt-3 pb-6 space-y-3 mt-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-[#1A1A1A] hover:bg-[#D4AF37]/10 hover:text-[#D4AF37] transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2 border-t border-neutral-200">
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenEnrollModal(); }}
              className="w-full py-3 rounded-xl font-bold text-[#1A1A1A] bg-gradient-to-r from-[#D4AF37] to-[#F3E5AB] shadow-gold flex items-center justify-center gap-2"
            >
              <span>Enroll Now</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

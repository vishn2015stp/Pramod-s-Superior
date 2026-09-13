"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

export default function LoadingScreen() {
  const [phase, setPhase] = useState<"visible" | "fading" | "done">("visible");

  useEffect(() => {
    // Start fade-out after 2.4s, fully remove after 3s
    const fadeTimer = setTimeout(() => setPhase("fading"), 2400);
    const doneTimer = setTimeout(() => setPhase("done"), 3100);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(doneTimer);
    };
  }, []);

  if (phase === "done") return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#1A1A1A] transition-opacity duration-700 ${
        phase === "fading" ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Radial gold glow behind logo */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[420px] h-[420px] rounded-full bg-[#D4AF37]/10 blur-[100px] animate-pulse" />
      </div>

      {/* Outer spinning gold ring */}
      <div className="relative flex items-center justify-center mb-8">
        {/* Spinning dashed ring */}
        <div
          className="absolute w-40 h-40 rounded-full border-4 border-transparent"
          style={{
            borderTopColor: "#D4AF37",
            borderRightColor: "#F3E5AB",
            borderBottomColor: "#D4AF37",
            animation: "spin 1.8s linear infinite",
          }}
        />

        {/* Static outer thin ring */}
        <div className="absolute w-36 h-36 rounded-full border border-[#D4AF37]/25" />

        {/* Logo circle */}
        <div
          className="relative w-28 h-28 rounded-full overflow-hidden border-2 border-[#D4AF37]/70 shadow-[0_0_40px_rgba(212,175,55,0.4)]"
          style={{ animation: "fadeScaleIn 0.8s ease-out forwards" }}
        >
          <Image
            src="/logo.jpg"
            alt="Pramod's Superior"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Brand Name */}
      <div
        className="text-center space-y-1.5 relative z-10"
        style={{ animation: "slideUpFade 0.9s ease-out 0.3s both" }}
      >
        <h1 className="font-serif-header text-3xl sm:text-4xl font-extrabold tracking-wide text-white">
          Pramod&apos;s{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #D4AF37 0%, #F3E5AB 50%, #D4AF37 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Superior
          </span>
        </h1>

        <p className="text-[11px] tracking-[0.35em] text-[#D4AF37]/70 uppercase font-semibold">
          Be Superior with Superior
        </p>

        {/* Location line */}
        <p className="text-[10px] text-neutral-500 tracking-widest uppercase">
          Anchalummood &amp; Alummoodu · Kollam, Kerala
        </p>
      </div>

      {/* Animated progress bar */}
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 w-40 h-[2px] bg-neutral-800 rounded-full overflow-hidden"
        style={{ animation: "slideUpFade 1s ease-out 0.5s both" }}
      >
        <div
          className="h-full bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#D4AF37] rounded-full"
          style={{ animation: "progressBar 2.2s ease-in-out forwards" }}
        />
      </div>

      {/* Gold particle dots */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-[#D4AF37]"
          style={{
            top: `${20 + Math.sin(i * 1.05) * 30}%`,
            left: `${10 + i * 15}%`,
            opacity: 0.3 + (i % 3) * 0.1,
            animation: `float ${2 + i * 0.4}s ease-in-out infinite alternate`,
            animationDelay: `${i * 0.2}s`,
          }}
        />
      ))}

      {/* Keyframe styles injected */}
      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes fadeScaleIn {
          from { opacity: 0; transform: scale(0.7); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes slideUpFade {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes progressBar {
          from { width: 0%; }
          to { width: 100%; }
        }
        @keyframes float {
          from { transform: translateY(0px) scale(1); }
          to { transform: translateY(-12px) scale(1.4); }
        }
      `}</style>
    </div>
  );
}

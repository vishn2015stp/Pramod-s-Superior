import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pramod's Superior | Premium Tuition Center",
  description: "Elevating Education, Empowering Futures. High-quality tuition services designed for student excellence by Pramodh Prabakaran. Located in Anchalummood & Alummoodu, Kollam, Kerala.",
  keywords: ["Pramod's Superior", "Tuition Center", "Pramodh Prabakaran", "Anchalummood", "Alummoodu", "Kollam", "Kerala", "Academic Excellence", "Maths Tuition", "Science Tuition"],
  icons: {
    icon: "/logo.jpg",
    apple: "/logo.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-[#FDFBF7] text-[#1A1A1A]">
        {children}
      </body>
    </html>
  );
}

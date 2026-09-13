import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Superior Family | Premium Tuition Center",
  description: "Elevating Education, Empowering Futures. High-quality tuition services designed for student excellence by Pramodh Prabakaran.",
  keywords: ["Tuition Center", "Superior Family", "Pramodh Prabakaran", "Academic Excellence", "O Level Tuition", "A Level Tuition", "Math Physics Chemistry Tuition"],
  icons: {
    icon: "/favicon.svg",
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

import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "600", "700", "800"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "Sathvik Allipuram",
  description:
    "Finance + Math + CS @ Ohio State · ML & Fintech · Incoming Nationwide Technology Intern",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${syne.variable} ${dmSans.variable} font-body bg-[#0a0f1e] text-slate-300 antialiased`}
      >
        <Navbar />
        {children}
        <footer className="border-t border-slate-900">
          <div className="max-w-5xl mx-auto px-6 py-8">
            <p className="text-slate-700 text-xs font-mono">
              © {new Date().getFullYear()} Sathvik Allipuram
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}

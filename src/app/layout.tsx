import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import Link from "next/link";
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

const siteUrl = "https://sathv1ka.github.io";
const description =
  "Finance + Math + CS @ Ohio State · ML & Fintech · AI & Automation Intern @ Nationwide";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Sathvik Allipuram — SWE · ML & Fintech",
    template: "%s · Sathvik Allipuram",
  },
  description,
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Sathvik Allipuram",
    title: "Sathvik Allipuram — SWE · ML & Fintech",
    description,
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sathvik Allipuram — SWE · ML & Fintech",
    description,
    images: ["/opengraph-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${syne.variable} ${dmSans.variable} page-shell font-body bg-slate-50 text-slate-700 antialiased`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-blue-600 focus:shadow-lg focus:ring-2 focus:ring-blue-500"
        >
          Skip to content
        </a>
        <Navbar />
        {children}
        <footer className="border-t border-slate-200 bg-white">
          <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="text-slate-400 text-xs font-mono">
              © {new Date().getFullYear()} Sathvik Allipuram
            </p>
            <nav className="flex items-center gap-5" aria-label="Footer navigation">
              <Link href="/" className="text-slate-400 hover:text-slate-600 text-xs font-mono transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded">Home</Link>
              <Link href="/about" className="text-slate-400 hover:text-slate-600 text-xs font-mono transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded">About</Link>
              <Link href="/projects" className="text-slate-400 hover:text-slate-600 text-xs font-mono transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded">Projects</Link>
              <a href="https://github.com/Sathv1kA" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-slate-600 text-xs font-mono transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded">GitHub ↗</a>
              <a href="https://linkedin.com/in/sathvik-allipuram" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-slate-600 text-xs font-mono transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded">LinkedIn ↗</a>
            </nav>
          </div>
        </footer>
      </body>
    </html>
  );
}

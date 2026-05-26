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
        <Navbar />
        {children}
        <footer className="border-t border-slate-200 bg-white">
          <div className="max-w-5xl mx-auto px-6 py-8">
            <p className="text-slate-400 text-xs font-mono">
              © {new Date().getFullYear()} Sathvik Allipuram
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}

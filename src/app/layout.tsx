import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import "./globals.css";

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
      <body className="page-shell font-body bg-[#f5f5f7] text-[#1d1d1f] antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-[#0066cc] focus:shadow-lg"
        >
          Skip to content
        </a>
        <Navbar />
        {children}
        <footer className="bg-[#f5f5f7] border-t border-[#e0e0e0]">
          <div className="max-w-5xl mx-auto px-6 py-8">
            <p className="text-[#7a7a7a] text-xs">
              © {new Date().getFullYear()} Sathvik Allipuram
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}

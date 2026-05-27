"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-[44px] bg-black">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 h-full flex items-center justify-between">
        <Link
          href="/"
          className="font-heading text-sm font-medium flex items-center gap-1 tracking-tight"
        >
          <span className="text-white">sathvik</span>
          <span className="text-[#0066cc]">/</span>
          <span className="text-[#86868b]">dev</span>
        </Link>

        <nav className="flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-xs transition-colors duration-200 ${
                pathname === link.href
                  ? "text-white"
                  : "text-[#86868b] hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

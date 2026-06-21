"use client";

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const sectionIds = navLinks.map((l) => l.href.slice(1));

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => {
      const progress =
        window.scrollY /
        (document.documentElement.scrollHeight - window.innerHeight);
      setScrollProgress(Math.min(progress, 1));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (!el) continue;
      const observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              setActiveSection(id);
            }
          }
        },
        { rootMargin: "-40% 0px -55% 0px", threshold: 0 },
      );
      observer.observe(el);
      observers.push(observer);
    }
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-[#1f1f1f]">
      <nav className="container-main flex items-center justify-between h-16 relative">
        <a
          href="#"
          className="text-sm font-semibold tracking-[0.15em] uppercase border border-[#1f1f1f] px-3 py-1.5"
        >
          <span className="text-muted-foreground">[ </span>
          <span className="text-foreground">AA</span>
          <span className="text-muted-foreground"> ]</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.slice(1);
            return (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  "text-[0.75rem] tracking-[0.15em] uppercase transition-colors duration-150",
                  isActive
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {isActive && (
                  <span className="text-[#e8500a] mr-1">▸</span>
                )}
                {link.label}
              </a>
            );
          })}
        </div>

        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      <div
        className="h-[2px] bg-[#e8500a] transition-all duration-150 ease-out"
        style={{ width: `${scrollProgress * 100}%` }}
      />

      {open && (
        <div className="md:hidden border-t border-[#1f1f1f] bg-[#0a0a0a]">
          <div className="container-main flex flex-col py-6 gap-4">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.slice(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "text-[0.75rem] tracking-[0.15em] uppercase transition-colors duration-150 py-2",
                    isActive
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {isActive && (
                    <span className="text-[#e8500a] mr-1">▸</span>
                  )}
                  {link.label}
                </a>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}

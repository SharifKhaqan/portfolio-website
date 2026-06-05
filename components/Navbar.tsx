"use client";

import * as React from "react";
import { useState, useEffect } from "react";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetHeader, SheetDescription } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { HugeiconsIcon } from "@hugeicons/react";
import { Menu01Icon, ArrowUpRight01Icon } from "@hugeicons/core-free-icons";
import { motion } from "framer-motion";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Section tracking logic
      const sections = navLinks.map(link => document.querySelector(link.href));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && (section as HTMLElement).offsetTop <= scrollPosition) {
          setActiveSection(navLinks[i].href.substring(1));
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
      setActiveSection(href.substring(1));
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "glass-premium py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "#home")}
          className="relative group flex items-center gap-2"
        >
          <div className="size-9 rounded-lg bg-gradient-to-tr from-indigo-500 to-cyan-400 flex items-center justify-center font-bold text-white text-base shadow-lg shadow-indigo-500/20 group-hover:shadow-cyan-400/30 transition-all duration-300">
            SK
          </div>
          <span className="font-heading text-sm font-semibold tracking-wider text-white hidden sm:block">
            SHARIF <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400 font-normal">KHAQAN</span>
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="relative px-4 py-2 text-xs font-medium text-zinc-400 hover:text-white transition-colors duration-200"
            >
              {link.name}
              {activeSection === link.href.substring(1) && (
                <motion.span
                  layoutId="activeNavIndicator"
                  className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-indigo-400 to-cyan-400 rounded-full"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </a>
          ))}
        </nav>

        {/* Action Button */}
        <div className="hidden md:block">
          <Button
            variant="outline"
            size="sm"
            className="rounded-full border-zinc-800 hover:border-zinc-700 bg-zinc-950/40 text-white hover:bg-zinc-900 group"
            onClick={() => {
              const target = document.querySelector("#contact");
              if (target) target.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Hire Me
            <HugeiconsIcon
              icon={ArrowUpRight01Icon}
              className="size-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
            />
          </Button>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon-sm"
                className="text-zinc-400 hover:text-white focus-visible:ring-0"
              >
                <HugeiconsIcon icon={Menu01Icon} strokeWidth={2} className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-80 border-l border-zinc-900 bg-[#070708]/95 p-6 flex flex-col backdrop-blur-xl"
            >
              <SheetHeader className="text-left mb-8">
                <SheetTitle className="text-white font-bold flex items-center gap-2">
                  <div className="size-8 rounded-lg bg-gradient-to-tr from-indigo-500 to-cyan-400 flex items-center justify-center font-bold text-white text-sm">
                    SK
                  </div>
                  <span>Sharif Khaqan</span>
                </SheetTitle>
                <SheetDescription className="text-zinc-500 text-xs">
                  Full Stack Web & Mobile Developer
                </SheetDescription>
              </SheetHeader>

              <div className="flex flex-col gap-4 mt-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`py-2 text-sm font-medium transition-colors border-b border-zinc-900/60 pb-3 ${
                      activeSection === link.href.substring(1)
                        ? "text-cyan-400"
                        : "text-zinc-400 hover:text-white"
                    }`}
                  >
                    {link.name}
                  </a>
                ))}
              </div>

              <div className="mt-auto">
                <Button
                  className="w-full rounded-md bg-gradient-to-r from-indigo-500 to-cyan-500 hover:from-indigo-600 hover:to-cyan-600 text-white text-xs font-semibold py-5"
                  onClick={() => {
                    const target = document.querySelector("#contact");
                    if (target) {
                      target.scrollIntoView({ behavior: "smooth" });
                      setIsMobileMenuOpen(false);
                    }
                  }}
                >
                  Get In Touch
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}

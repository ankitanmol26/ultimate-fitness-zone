"use client";

import { useState, useEffect } from "react";
import { siteConfig } from "@/data/config";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

const navLinks = [
  { name: "HOME", href: "#home" },
  { name: "ABOUT", href: "#about" },
  { name: "TRAINING", href: "#training" },
  { name: "FACILITIES", href: "#facilities" },
  { name: "GALLERY", href: "#gallery" },
  { name: "MEMBERSHIP", href: "#membership" },
  { name: "CONTACT", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
        isScrolled ? "bg-black/90 backdrop-blur-md border-white/10 py-4" : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <a href="#home" className="text-2xl md:text-3xl font-heading font-bold tracking-wider text-white">
          ULTIMATE <span className="text-primary">FITNESS</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-bold tracking-widest text-gray-300 hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center space-x-4">
          <Button onClick={() => document.getElementById("membership")?.scrollIntoView({ behavior: "smooth" })}>
            JOIN NOW
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 max-h-[calc(100dvh-5rem)] overflow-y-auto bg-zinc-900 border-b border-white/10 p-4 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-bold tracking-widest text-white py-2 border-b border-white/5"
            >
              {link.name}
            </a>
          ))}
          <Button 
            className="w-full mt-4" 
            onClick={() => {
              setMobileMenuOpen(false);
              document.getElementById("membership")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            JOIN NOW
          </Button>
        </div>
      )}
    </header>
  );
}

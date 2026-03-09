"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { BookingModal } from "./BookingModal";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Services", href: "#services" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 md:px-12 py-8",
        isScrolled ? "glass-morphism py-4" : "bg-transparent"
      )}
    >
      <div className="max-w-[1400px] mx-auto flex items-center justify-between">
        <a href="#" className="font-headline text-xl md:text-2xl font-bold tracking-[0.1em]">
          AMAN MALHOTRA<span className="text-primary">.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-12">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[0.9rem] font-medium tracking-[0.1em] uppercase text-muted-foreground hover:text-foreground transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-foreground after:transition-all hover:after:w-full"
            >
              {link.name}
            </a>
          ))}
          <BookingModal trigger={<Button className="bg-transparent hover:bg-primary border border-primary text-primary hover:text-background rounded-[2px] px-8 h-12 tracking-[0.1em] uppercase text-[0.8rem] font-medium transition-all duration-300">Book a Session</Button>} />
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-white/5 p-8 space-y-6 animate-in fade-in slide-in-from-top-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-lg font-headline tracking-[0.1em] uppercase hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4">
            <BookingModal trigger={<Button className="w-full bg-primary hover:bg-primary/90 text-background rounded-[2px] h-14 tracking-[0.1em] uppercase text-[0.8rem] font-medium">Book a Session</Button>} />
          </div>
        </div>
      )}
    </nav>
  );
}
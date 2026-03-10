"use client";

import { useState, useEffect } from "react";
import { Home, LayoutGrid, Camera, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

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

  const mobileNavLinks = [
    { name: "Home", href: "#home", icon: <Home className="w-5 h-5" /> },
    { name: "Portfolio", href: "#portfolio", icon: <LayoutGrid className="w-5 h-5" /> },
    { name: "Services", href: "#services", icon: <Camera className="w-5 h-5" /> },
  ];

  const whatsappUrl = "https://wa.me/919910333813";

  return (
    <>
      {/* Top Navbar (Desktop & Mobile Logo) */}
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
            <Button asChild className="bg-transparent hover:bg-primary border border-primary text-primary hover:text-background rounded-[2px] px-8 h-12 tracking-[0.1em] uppercase text-[0.8rem] font-medium transition-all duration-300">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">Book a Session</a>
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile Bottom Navigation Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-[60] bg-background/95 backdrop-blur-lg border-t border-white/5 px-6 py-3">
        <div className="flex items-center justify-between max-w-md mx-auto">
          {mobileNavLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="flex flex-col items-center gap-1 text-muted-foreground hover:text-primary transition-colors"
            >
              {link.icon}
              <span className="text-[10px] uppercase tracking-widest font-medium">{link.name}</span>
            </a>
          ))}
          <a 
            href={whatsappUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex flex-col items-center gap-1 text-muted-foreground hover:text-primary transition-colors"
          >
            <Calendar className="w-5 h-5" />
            <span className="text-[10px] uppercase tracking-widest font-medium">Book</span>
          </a>
        </div>
      </div>
    </>
  );
}

"use client";

import { Instagram, Linkedin, Figma } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-background py-16 border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div className="space-y-6">
            <a href="#" className="font-headline text-2xl font-bold tracking-tighter block">
              AMAN MALHOTRA<span className="text-secondary">.</span>
            </a>
            <p className="text-muted-foreground font-light text-sm max-w-xs leading-relaxed">
              Crafting visual legacies for modern brands and visionary entrepreneurs. 
              Based in India, available globally.
            </p>
          </div>

          <div className="space-y-6">
            <h4 className="font-headline text-sm font-bold tracking-[0.3em] uppercase text-secondary">Quick Links</h4>
            <ul className="space-y-4 text-sm font-light">
              <li><a href="#about" className="hover:text-secondary transition-colors">About</a></li>
              <li><a href="#portfolio" className="hover:text-secondary transition-colors">Portfolio</a></li>
              <li><a href="#services" className="hover:text-secondary transition-colors">Services</a></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="font-headline text-sm font-bold tracking-[0.3em] uppercase text-secondary">Connect</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 border border-white/10 flex items-center justify-center hover:bg-secondary hover:text-background transition-all duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 border border-white/10 flex items-center justify-center hover:bg-secondary hover:text-background transition-all duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 border border-white/10 flex items-center justify-center hover:bg-secondary hover:text-background transition-all duration-300">
                <Figma className="w-5 h-5" />
              </a>
            </div>
            <p className="text-xs text-muted-foreground tracking-widest pt-2">
              aman@example.com <br />
              +91 98219 21465
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] tracking-[0.2em] uppercase text-muted-foreground">
          <p>© 2026 AMAN MALHOTRA PHOTOGRAPHY. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-foreground">Privacy Policy</a>
            <a href="#" className="hover:text-foreground">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

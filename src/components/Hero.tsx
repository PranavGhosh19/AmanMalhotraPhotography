"use client";

import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/app/lib/placeholder-images";
import { cn } from "@/lib/utils";
import { BeforeAfterSlider } from "./BeforeAfterSlider";

export function Hero() {
  const [scrolled, setScrolled] = useState(false);
  const beforeImage = PlaceHolderImages.find(img => img.id === 'hero-before');
  const afterImage = PlaceHolderImages.find(img => img.id === 'hero-after');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden max-w-[1400px] mx-auto px-6 md:px-12">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-32 items-center w-full">
        <div className="z-10 space-y-8 text-center lg:text-left animate-fade-up">
          <div className="space-y-4">
            <p className="text-muted-foreground text-[0.9rem] uppercase tracking-[0.2em] font-medium opacity-0 animate-fade-up [animation-fill-mode:forwards]">
              Aman Malhotra Photography
            </p>
            <h1 className="font-headline text-[clamp(2rem, 5vw, 4rem)] font-medium leading-[1.2] tracking-tight">
              Elevate Your <br />
              Visual <span className="text-primary italic">Identity</span>.
            </h1>
          </div>
          <p className="text-muted-foreground text-[1.2rem] max-w-xl mx-auto lg:mx-0 font-light leading-relaxed opacity-0 animate-fade-up delay-100 [animation-fill-mode:forwards]">
            Crafting compelling imagery that captures the essence of your brand and
            connects with your audience through cinematic storytelling.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4 opacity-0 animate-fade-up delay-200 [animation-fill-mode:forwards]">
            <Button asChild className="group h-14 px-8 rounded-[2px] bg-foreground text-background hover:bg-transparent hover:text-foreground border border-foreground text-[0.9rem] tracking-[0.1em] uppercase font-medium btn-transition">
              <a href="#portfolio">
                View Portfolio <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button variant="outline" asChild className="h-14 px-8 rounded-[2px] border-white/10 text-foreground hover:border-foreground text-[0.9rem] tracking-[0.1em] uppercase font-medium btn-transition">
              <a href="https://wa.me/919910333813" target="_blank" rel="noopener noreferrer">
                Let's Talk
              </a>
            </Button>
          </div>
        </div>

        <div className="relative aspect-[3/4] lg:aspect-square w-full max-w-2xl mx-auto lg:mx-0 animate-fade-up delay-200">
          <div className="absolute inset-0 border border-primary/20 translate-x-4 translate-y-4 -z-10"></div>
          {beforeImage && afterImage && (
            <div className="relative w-full h-full overflow-hidden rounded-[2px]">
              <BeforeAfterSlider before={beforeImage} after={afterImage} />
            </div>
          )}
        </div>
      </div>

      <div className={cn(
        "absolute bottom-10 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 text-muted-foreground transition-all duration-700 ease-in-out animate-bounce",
        scrolled ? "opacity-0 translate-y-8 pointer-events-none" : "opacity-50 translate-y-0"
      )}>
        <span className="text-[0.7rem] uppercase tracking-[0.2em]">Scroll</span>
        <div className="mouse w-6 h-9 border border-muted-foreground rounded-[12px] relative">
          <div className="wheel w-0.5 h-1.5 bg-muted-foreground rounded-full absolute top-1.5 left-1/2 -translate-x-1/2 animate-[scroll_1.5s_infinite]"></div>
        </div>
      </div>
      <style jsx>{`
        @keyframes scroll {
          0% { top: 6px; opacity: 1; }
          100% { top: 18px; opacity: 0; }
        }
      `}</style>
    </section>
  );
}

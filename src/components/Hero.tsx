
"use client";

import { ArrowRight, MousePointer2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { PlaceHolderImages } from "@/app/lib/placeholder-images";

export function Hero() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-bg');

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="z-10 space-y-8 text-center lg:text-left animate-fade-up">
          <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] tracking-tight">
            Elevate Your <br />
            Visual <span className="text-secondary italic">Identity</span>.
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-xl mx-auto lg:mx-0 font-light leading-relaxed">
            We craft compelling imagery that captures the essence of your brand and
            connects with your audience through cinematic storytelling.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
            <Button asChild className="group h-14 px-8 rounded-none bg-primary text-white hover:bg-primary/90 text-sm tracking-[0.2em] uppercase">
              <a href="#portfolio">
                View Portfolio <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button variant="outline" asChild className="h-14 px-8 rounded-none border-secondary/50 text-secondary hover:bg-secondary hover:text-background text-sm tracking-[0.2em] uppercase transition-all">
              <a href="https://wa.me/919821921465" target="_blank" rel="noopener noreferrer">
                Let's Talk
              </a>
            </Button>
          </div>
        </div>

        <div className="relative aspect-[3/4] lg:aspect-square w-full max-w-2xl mx-auto lg:mx-0 animate-fade-up delay-200">
          <div className="absolute inset-0 border-2 border-secondary/20 translate-x-4 translate-y-4 -z-10"></div>
          <div className="relative h-full w-full overflow-hidden shadow-2xl">
            <Image
              src={heroImage?.imageUrl || ""}
              alt={heroImage?.description || "Photography Studio"}
              fill
              className="object-cover transition-transform duration-1000 hover:scale-105"
              priority
              data-ai-hint="professional photography"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-card p-6 border border-white/5 hidden md:block">
            <p className="font-headline text-xl font-bold tracking-widest uppercase">Est. 2018</p>
            <p className="text-xs text-muted-foreground tracking-widest uppercase">Premium Visuals</p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 text-muted-foreground opacity-50 animate-bounce">
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <div className="w-px h-12 bg-muted-foreground/30"></div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";

export function About() {
  return (
    <section id="about" className="py-32 bg-card max-w-none">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center max-w-[1400px]">
        
        <div className="relative aspect-[3/4] w-full max-w-lg mx-auto lg:mx-0">
          <div className="absolute inset-0 border border-primary/20 -translate-x-6 translate-y-6 -z-10"></div>

          <Image
            src="/p.png"
            alt="Aman Malhotra"
            fill
            className="object-cover shadow-2xl rounded-[4px]"
          />
        </div>

        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="font-headline text-[clamp(2.5rem,5vw,4rem)] font-medium tracking-tight">
              The Art of <span className="text-primary italic">Storytelling</span>
            </h2>
            <div className="w-20 h-px bg-primary"></div>
          </div>

          <div className="space-y-6 text-muted-foreground text-[1.1rem] leading-relaxed font-light">
            <p>
              Your brand is more than just a logo; it's a feeling, a promise, and an experience. 
              Our mission is to translate that essence into stunning visuals that speak volumes.
            </p>
            <p>
              With years of experience working alongside industry-leading creators and entrepreneurs, 
              we understand exactly what it takes to make you stand out in a crowded digital landscape.
            </p>
            <p>
              Every click of the shutter is a deliberate choice to capture authentic moments that resonate. 
              Whether it's a high-impact branding session or a quiet portrait, we focus on the narrative 
              that makes your identity unique.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 pt-4">
            <div>
              <p className="font-headline text-4xl font-medium text-primary">5+</p>
              <p className="text-[0.75rem] uppercase tracking-widest text-muted-foreground">Years Experience</p>
            </div>
            <div>
              <p className="font-headline text-4xl font-medium text-primary">487+</p>
              <p className="text-[0.75rem] uppercase tracking-widest text-muted-foreground">Projects Delivered</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

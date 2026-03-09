"use client";

import { useState } from "react";
import { PlaceHolderImages } from "@/app/lib/placeholder-images";
import Image from "next/image";
import { cn } from "@/lib/utils";

const CATEGORIES = ["All", "Brand", "Portrait", "Events"];

const PORTFOLIO_ITEMS = [
  { id: 1, category: "Brand", image: "portfolio-1", title: "Minimal Elegance", span: "span-8" },
  { id: 2, category: "Brand", image: "portfolio-2", title: "Urban Lifestyle", span: "span-4" },
  { id: 3, category: "Portrait", image: "portfolio-3", title: "The Executive", span: "span-4" },
  { id: 4, category: "Portrait", image: "portfolio-4", title: "Natural Soul", span: "span-8" },
  { id: 5, category: "Events", image: "portfolio-5", title: "Gala Night", span: "span-6" },
  { id: 6, category: "Events", image: "portfolio-6", title: "Modern Wedding", span: "span-6" },
];

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems = activeCategory === "All"
    ? PORTFOLIO_ITEMS
    : PORTFOLIO_ITEMS.filter(item => item.category === activeCategory);

  return (
    <section id="portfolio" className="py-32 bg-background max-w-[1400px] mx-auto px-6 md:px-12">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center space-y-4 mb-24">
          <h2 className="font-headline text-[clamp(2.5rem,5vw,4rem)] font-medium tracking-tight">
            Selected <span className="text-primary italic">Works</span>
          </h2>
          <p className="text-muted-foreground text-lg font-light max-w-2xl">
            A curated collection of visual stories capturing human emotion and brand identity across diverse landscapes.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 pt-8">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "px-8 py-2 text-[0.8rem] tracking-[0.1em] uppercase border transition-all duration-300 rounded-[2px]",
                  activeCategory === cat
                    ? "bg-foreground text-background border-foreground font-medium"
                    : "border-white/10 text-muted-foreground hover:border-foreground"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {filteredItems.map((item) => {
            const imageData = PlaceHolderImages.find(img => img.id === item.image);
            return (
              <div 
                key={item.id} 
                className={cn(
                  "group relative overflow-hidden bg-muted rounded-[4px] opacity-0 animate-fade-up [animation-fill-mode:forwards]",
                  item.span === "span-8" ? "md:col-span-8 h-[500px]" : "md:col-span-4 h-[500px]",
                  item.span === "span-6" ? "md:col-span-6 h-[500px]" : ""
                )}
              >
                <Image
                  src={imageData?.imageUrl || ""}
                  alt={imageData?.description || "Portfolio item"}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  data-ai-hint={`${item.category.toLowerCase()} photography`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <p className="text-[0.8rem] text-primary tracking-[0.1em] uppercase mb-1">
                    {item.category}
                  </p>
                  <h3 className="font-headline text-[1.5rem] font-medium tracking-tight text-white">
                    {item.title}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
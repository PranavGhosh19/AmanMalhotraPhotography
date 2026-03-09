
"use client";

import { useState } from "react";
import { PlaceHolderImages } from "@/app/lib/placeholder-images";
import Image from "next/image";
import { cn } from "@/lib/utils";

const CATEGORIES = ["All", "Brand", "Portrait", "Events"];

const PORTFOLIO_ITEMS = [
  { id: 1, category: "Brand", image: "portfolio-1", title: "Minimal Elegance" },
  { id: 2, category: "Brand", image: "portfolio-2", title: "Urban Lifestyle" },
  { id: 3, category: "Portrait", image: "portfolio-3", title: "The Executive" },
  { id: 4, category: "Portrait", image: "portfolio-4", title: "Natural Soul" },
  { id: 5, category: "Events", image: "portfolio-5", title: "Gala Night" },
  { id: 6, category: "Events", image: "portfolio-6", title: "Modern Wedding" },
];

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems = activeCategory === "All"
    ? PORTFOLIO_ITEMS
    : PORTFOLIO_ITEMS.filter(item => item.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="space-y-4 max-w-2xl">
            <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tight">
              Selected <span className="text-secondary italic">Works</span>
            </h2>
            <p className="text-muted-foreground text-lg font-light leading-relaxed">
              A curated collection of visual stories capturing human emotion and brand identity across diverse landscapes.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "px-6 py-2 text-xs tracking-[0.2em] uppercase border transition-all duration-300",
                  activeCategory === cat
                    ? "bg-secondary text-background border-secondary font-bold"
                    : "border-white/10 text-muted-foreground hover:border-secondary/50"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => {
            const imageData = PlaceHolderImages.find(img => img.id === item.image);
            return (
              <div key={item.id} className="group relative overflow-hidden aspect-[4/5] bg-muted animate-in fade-in zoom-in-95 duration-500">
                <Image
                  src={imageData?.imageUrl || ""}
                  alt={imageData?.description || "Portfolio item"}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  data-ai-hint={`${item.category.toLowerCase()} photography`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <p className="text-xs text-secondary tracking-[0.3em] uppercase mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    {item.category}
                  </p>
                  <h3 className="font-headline text-2xl font-bold tracking-widest uppercase transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
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

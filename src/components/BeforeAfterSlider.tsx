
"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { ImagePlaceholder } from "@/app/lib/placeholder-images";

interface BeforeAfterSliderProps {
  before: ImagePlaceholder;
  after: ImagePlaceholder;
}

export function BeforeAfterSlider({ before, after }: BeforeAfterSliderProps) {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = (x / rect.width) * 100;
    setSliderPos(percent);
  };

  const onMouseMove = (e: React.MouseEvent) => handleMove(e.clientX);
  const onTouchMove = (e: React.TouchEvent) => handleMove(e.touches[0].clientX);

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-full cursor-col-resize select-none overflow-hidden rounded-[4px] border border-white/5 shadow-2xl"
      onMouseMove={onMouseMove}
      onTouchMove={onTouchMove}
    >
      {/* After Image (Base) */}
      <div className="absolute inset-0">
        <Image
          src={after.imageUrl}
          alt={after.description}
          fill
          className="object-cover"
          data-ai-hint={after.imageHint}
        />
        <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-sm px-3 py-1 text-[10px] tracking-widest uppercase text-white font-medium border border-white/10">
          After
        </div>
      </div>

      {/* Before Image (Clipped) */}
      <div 
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${sliderPos}%` }}
      >
        <div className="absolute inset-0 w-[1000%] h-full"> {/* Parent width is effectively the sliderPos, so we need to ensure the inner image is full container size */}
          <div className="relative w-full h-full" style={{ width: containerRef.current?.offsetWidth || '100vw' }}>
             <Image
              src={before.imageUrl}
              alt={before.description}
              fill
              className="object-cover"
              data-ai-hint={before.imageHint}
            />
          </div>
        </div>
        <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-sm px-3 py-1 text-[10px] tracking-widest uppercase text-white font-medium border border-white/10">
          Before
        </div>
      </div>

      {/* Slider Line & Handle */}
      <div 
        className="absolute top-0 bottom-0 w-px bg-primary z-10"
        style={{ left: `${sliderPos}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-primary/20 backdrop-blur-md rounded-full border border-primary flex items-center justify-center shadow-2xl">
          <div className="flex gap-1">
            <div className="w-0.5 h-3 bg-primary"></div>
            <div className="w-0.5 h-3 bg-primary"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

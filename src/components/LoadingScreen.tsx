
"use client";

import { useEffect, useState } from "react";

export function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background transition-opacity duration-700">
      <div className="text-center space-y-6">
        <h1 className="font-headline text-3xl md:text-4xl tracking-[0.2em] animate-pulse-subtle">
          AMAN MALHOTRA<span className="text-secondary">.</span>
        </h1>
        <div className="w-48 h-1 bg-muted mx-auto rounded-full overflow-hidden">
          <div className="h-full bg-secondary animate-[loading_1.5s_ease-in-out_infinite]" style={{ width: '40%' }}></div>
        </div>
        <p className="text-muted-foreground font-body text-sm tracking-widest uppercase">
          Loading Visuals
        </p>
      </div>
      <style jsx>{`
        @keyframes loading {
          0% { transform: translateX(-150%); }
          50% { transform: translateX(100%); }
          100% { transform: translateX(-150%); }
        }
      `}</style>
    </div>
  );
}

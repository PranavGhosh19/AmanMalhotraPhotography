
"use client";

import { Camera, User, Users, Briefcase } from "lucide-react";

const SERVICES = [
  {
    icon: <Briefcase className="w-8 h-8 text-secondary" />,
    title: "Brand Strategy",
    description: "Visual identity consultations to align your imagery with your business core values and target audience."
  },
  {
    icon: <Camera className="w-8 h-8 text-secondary" />,
    title: "Commercial Shoots",
    description: "High-end product and service photography designed for marketing campaigns and digital storefronts."
  },
  {
    icon: <User className="w-8 h-8 text-secondary" />,
    title: "Portraiture",
    description: "Professional headshots and personal branding portraits that convey authority, warmth, and authenticity."
  },
  {
    icon: <Users className="w-8 h-8 text-secondary" />,
    title: "Event Narrative",
    description: "Cinematic coverage of corporate events, conferences, and luxury celebrations that captures every key moment."
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-background border-y border-white/5">
      <div className="container mx-auto px-6 md:px-12 text-center mb-16">
        <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tight mb-4">
          Tailored <span className="text-secondary italic">Services</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg font-light">
          Comprehensive photography solutions designed to amplify your presence and tell your story with precision.
        </p>
      </div>

      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {SERVICES.map((service, index) => (
          <div 
            key={index} 
            className="group p-8 bg-card border border-white/5 hover:border-secondary/30 transition-all duration-300 hover:-translate-y-2"
          >
            <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
              {service.icon}
            </div>
            <h3 className="font-headline text-xl font-bold tracking-widest uppercase mb-4">
              {service.title}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed font-light">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

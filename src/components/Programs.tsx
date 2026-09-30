"use client";

import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/data/config";

export function Programs() {
  return (
    <section id="training" className="py-16 md:py-24 bg-zinc-950">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="mb-2 flex items-center justify-center space-x-4">
            <div className="h-[2px] w-8 bg-primary" />
            <span className="text-primary font-bold tracking-widest uppercase text-sm">TRAINING</span>
            <div className="h-[2px] w-8 bg-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold uppercase mb-6 text-white">
            OUR PROGRAMS
          </h2>
          <p className="text-gray-400 text-lg">
            Whether your goal is to build strength, lose weight, or improve overall fitness, we have the right program for you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteConfig.programs.map((program, idx) => (
            <div 
              key={idx} 
              className="group relative bg-zinc-900 border border-white/5 overflow-hidden transition-all duration-300 hover:border-primary/50"
            >
              <div className="h-64 overflow-hidden relative">
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300 z-10" />
                <img 
                  src={program.image} 
                  alt={program.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" 
                />
              </div>
              <div className="p-6 relative z-20 bg-zinc-900 border-t border-white/10 group-hover:border-primary transition-colors">
                <h3 className="text-xl font-heading font-bold uppercase text-white mb-3">{program.title}</h3>
                <p className="text-sm text-gray-400 mb-6">{program.description}</p>
                <button 
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                  className="flex items-center space-x-2 text-primary font-bold tracking-wider text-sm uppercase group-hover:text-white transition-colors"
                >
                  <span>JOIN NOW</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

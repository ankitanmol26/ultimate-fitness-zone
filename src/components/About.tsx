"use client";

import { CheckCircle2 } from "lucide-react";
import { Button } from "./ui/button";

export function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-black overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2">
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/20 blur-2xl rounded-full" />
              <img
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1470&auto=format&fit=crop"
                alt="About Ultimate Fitness Zone"
                className="relative z-10 w-full h-[400px] lg:h-[600px] object-cover rounded-sm grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute bottom-6 -right-6 lg:-right-12 bg-zinc-900 border border-white/10 p-6 rounded-sm shadow-xl z-20 hidden md:block">
                <div className="text-4xl font-heading font-bold text-white mb-2">ULTIMATE</div>
                <div className="text-primary font-bold tracking-widest uppercase">Community</div>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2">
            <div className="mb-2 flex items-center space-x-4">
              <div className="h-[2px] w-12 bg-primary" />
              <span className="text-primary font-bold tracking-widest uppercase text-sm">ABOUT US</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold uppercase mb-6 text-white text-balance">
              MORE THAN A WORKOUT.
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-xl">
              Ultimate Fitness Zone is built for those who are serious about their progress. We provide the environment, equipment, and community you need to build discipline, strength, and consistency.
            </p>
            
            <ul className="space-y-4 mb-10">
              {[
                "TRAIN WITH PURPOSE",
                "BUILD STRENGTH",
                "STAY CONSISTENT",
                "RESULTS DRIVEN APPROACH"
              ].map((feature, idx) => (
                <li key={idx} className="flex items-center space-x-3">
                  <CheckCircle2 className="text-primary" size={20} />
                  <span className="font-bold tracking-wider text-white uppercase">{feature}</span>
                </li>
              ))}
            </ul>
            
            <Button size="lg" onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
              LEARN MORE
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

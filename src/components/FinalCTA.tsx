"use client";

import { siteConfig } from "@/data/config";
import { Button } from "./ui/button";

export function FinalCTA() {
  return (
    <section className="relative py-32 overflow-hidden bg-black">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/70 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/80 z-10" />
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop"
          alt="Gym interior"
          className="w-full h-full object-cover object-center grayscale opacity-50"
        />
      </div>
      
      <div className="container relative z-20 mx-auto px-4 md:px-6 text-center">
        <h2 className="text-5xl md:text-6xl lg:text-8xl font-heading font-bold uppercase tracking-tight mb-6 text-white text-balance mx-auto max-w-5xl">
          YOUR STRONGER SELF <span className="text-primary">STARTS HERE</span>.
        </h2>
        
        <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-10">
          Stop waiting for the right time. Start building the right habits.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <Button size="lg" onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
            ENQUIRE NOW
          </Button>
          <Button size="lg" variant="outline" onClick={() => window.open(siteConfig.mapUrl, "_blank")}>
            GET DIRECTIONS
          </Button>
        </div>
      </div>
    </section>
  );
}

"use client";

import { siteConfig } from "@/data/config";
import { Button } from "./ui/button";
import { Check } from "lucide-react";

export function Membership() {
  return (
    <section id="membership" className="py-16 md:py-24 bg-black">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="mb-2 flex items-center justify-center space-x-4">
            <div className="h-[2px] w-8 bg-primary" />
            <span className="text-primary font-bold tracking-widest uppercase text-sm">MEMBERSHIP</span>
            <div className="h-[2px] w-8 bg-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold uppercase text-white mb-6">
            CHOOSE YOUR PLAN
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {siteConfig.membership.map((plan, idx) => (
            <div 
              key={idx} 
              className="bg-zinc-900 border border-white/10 p-8 flex flex-col hover:border-primary transition-colors group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-150" />
              
              <h3 className="text-2xl font-heading font-bold uppercase text-white mb-2 relative z-10">{plan.name}</h3>
              <div className="mb-6 relative z-10">
                <span className="text-3xl font-bold text-primary">{plan.price}</span>
                <span className="text-gray-400 text-sm ml-2">/ {plan.period}</span>
              </div>
              
              <ul className="space-y-4 mb-8 flex-1 relative z-10">
                {plan.benefits.map((benefit, bIdx) => (
                  <li key={bIdx} className="flex items-start space-x-3 text-sm text-gray-300">
                    <Check size={18} className="text-primary shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                variant={idx === 3 ? "default" : "outline"} 
                className="w-full relative z-10"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                ENQUIRE ABOUT MEMBERSHIP
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

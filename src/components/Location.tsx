"use client";

import { MapPin, Phone, MessageCircle } from "lucide-react";
import { siteConfig } from "@/data/config";
import { Button } from "./ui/button";

export function Location() {
  return (
    <section className="py-16 md:py-24 bg-zinc-950 border-t border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <div className="mb-2 flex items-center justify-center space-x-4">
            <div className="h-[2px] w-8 bg-primary" />
            <span className="text-primary font-bold tracking-widest uppercase text-sm">VISIT US</span>
            <div className="h-[2px] w-8 bg-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold uppercase text-white mb-6">
            FIND YOUR WAY TO <span className="text-primary">ULTIMATE FITNESS ZONE</span>.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-primary/10 flex items-center justify-center shrink-0">
                <MapPin className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white uppercase tracking-wider mb-2">Location</h3>
                <p className="text-gray-300 leading-relaxed max-w-sm">
                  {siteConfig.address}
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-primary/10 flex items-center justify-center shrink-0">
                <Phone className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white uppercase tracking-wider mb-2">Call Us</h3>
                <p className="text-gray-300">
                  <a href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`} className="hover:text-primary transition-colors">
                    {siteConfig.phone}
                  </a>
                </p>
              </div>
            </div>

            <div className="pt-8 flex flex-wrap gap-4">
              <Button size="lg" className="w-full sm:w-auto" onClick={() => window.open(siteConfig.mapUrl, "_blank")}>
                <MapPin size={18} className="mr-2" /> GET DIRECTIONS
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="w-full sm:w-auto"
                onClick={() => window.open(`https://wa.me/${siteConfig.whatsapp.replace(/\s+/g, '')}`, "_blank")}
              >
                <MessageCircle size={18} className="mr-2" /> WHATSAPP
              </Button>
            </div>
          </div>

          <div className="bg-zinc-900 border border-white/10 p-2 rounded-sm aspect-video w-full relative overflow-hidden group">
            {/* Visual representation of a map since iframe embeds can sometimes be tricky without API keys */}
            <div className="absolute inset-2 bg-zinc-800 flex flex-col items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1474&auto=format&fit=crop')] bg-cover bg-center" />
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4 shadow-[0_0_30px_rgba(220,38,38,0.5)] animate-pulse">
                  <MapPin size={32} className="text-white" />
                </div>
                <div className="text-xl font-bold text-white uppercase tracking-widest">{siteConfig.location}</div>
              </div>
            </div>
            
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20">
              <Button onClick={() => window.open(siteConfig.mapUrl, "_blank")}>
                OPEN IN GOOGLE MAPS
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

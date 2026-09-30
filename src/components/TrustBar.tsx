"use client";

import { Star, Users, MapPin } from "lucide-react";
import { siteConfig } from "@/data/config";

export function TrustBar() {
  return (
    <div className="bg-zinc-900 border-y border-white/5 py-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
          <div className="flex flex-col items-center justify-center pt-4 md:pt-0">
            <div className="flex items-center space-x-1 mb-2 text-primary">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={24} fill="currentColor" />
              ))}
            </div>
            <div className="text-3xl font-heading font-bold text-white">{siteConfig.rating}★</div>
            <div className="text-sm font-bold tracking-widest text-gray-400 mt-1">GOOGLE RATING</div>
          </div>
          
          <div className="flex flex-col items-center justify-center pt-8 md:pt-0">
            <Users size={32} className="text-primary mb-3" />
            <div className="text-3xl font-heading font-bold text-white">{siteConfig.reviewCount}</div>
            <div className="text-sm font-bold tracking-widest text-gray-400 mt-1">MEMBER REVIEWS</div>
          </div>
          
          <div className="flex flex-col items-center justify-center pt-8 md:pt-0">
            <MapPin size={32} className="text-primary mb-3" />
            <div className="text-3xl font-heading font-bold text-white uppercase">{siteConfig.location.split(',')[0]}</div>
            <div className="text-sm font-bold tracking-widest text-gray-400 mt-1 uppercase">{siteConfig.location.split(',')[1]?.trim() || "LOCATION"}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

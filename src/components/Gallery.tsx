"use client";

import { useState } from "react";
import { siteConfig } from "@/data/config";
import { X } from "lucide-react";

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-16 md:py-24 bg-zinc-950">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <div className="mb-2 flex items-center justify-center space-x-4">
            <div className="h-[2px] w-8 bg-primary" />
            <span className="text-primary font-bold tracking-widest uppercase text-sm">GALLERY</span>
            <div className="h-[2px] w-8 bg-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold uppercase text-white mb-4">
            INSIDE THE GYM
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {siteConfig.gallery.map((image, idx) => (
            <div 
              key={idx} 
              className={`relative group cursor-pointer overflow-hidden bg-zinc-900 ${
                idx === 0 || idx === 3 ? 'row-span-2' : ''
              }`}
              onClick={() => setSelectedImage(image)}
            >
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
              <img 
                src={image} 
                alt={`Gallery image ${idx + 1}`} 
                className="w-full h-full object-cover aspect-square transition-transform duration-700 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4">
          <button 
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X size={32} />
          </button>
          <img 
            src={selectedImage} 
            alt="Fullscreen view" 
            className="max-w-full max-h-[90vh] object-contain"
          />
        </div>
      )}
    </section>
  );
}

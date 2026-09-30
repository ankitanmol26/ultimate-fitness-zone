"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { siteConfig } from "@/data/config";
import { Button } from "./ui/button";

export function Hero() {
  return (
    <section id="home" className="relative h-[100dvh] min-h-[500px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-10" />
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop"
          alt="Ultimate Fitness Zone Gym"
          className="w-full h-full object-cover object-center scale-105 animate-[pulse_10s_ease-in-out_infinite_alternate]"
        />
      </div>

      <div className="container relative z-20 mx-auto px-4 md:px-6 text-center mt-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-1.5 rounded-full mb-6 border border-white/10"
        >
          <MapPin size={16} className="text-primary" />
          <span className="text-sm font-bold tracking-widest uppercase">{siteConfig.location}</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold uppercase tracking-tight mb-6 text-balance"
        >
          BUILD YOUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-dark">ULTIMATE</span> SELF.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 text-balance"
        >
          Train with purpose. Build strength. Create a healthier, stronger version of yourself.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
        >
          <Button size="lg" className="w-full sm:w-auto" onClick={() => document.getElementById("membership")?.scrollIntoView({ behavior: "smooth" })}>
            JOIN NOW
          </Button>
          <Button size="lg" variant="outline" className="w-full sm:w-auto" onClick={() => window.open(siteConfig.mapUrl, "_blank")}>
            GET DIRECTIONS
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

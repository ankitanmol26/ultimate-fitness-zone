"use client";

import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/data/config";

export function WhatsAppButton() {
  const handleWhatsAppClick = () => {
    const phoneNumber = siteConfig.whatsapp.replace(/\s+/g, '');
    const message = encodeURIComponent("Hi Ultimate Fitness Zone, I would like to know more about your membership plans.");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 bg-[#25D366] hover:bg-[#128C7E] text-white p-3 md:p-4 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={32} />
      {/* Tooltip */}
      <span className="absolute right-full top-1/2 -translate-y-1/2 mr-4 bg-black text-white text-xs font-bold whitespace-nowrap py-2 px-4 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none uppercase tracking-widest border border-white/10 hidden md:block">
        Chat with us
      </span>
    </button>
  );
}

"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { CheckCircle2 } from "lucide-react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would send data to a backend
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-black relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto bg-zinc-900 border border-white/10 p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[80px] pointer-events-none" />
          
          <div className="text-center mb-10 relative z-10">
            <h2 className="text-3xl md:text-4xl font-heading font-bold uppercase text-white mb-4">
              READY TO START?
            </h2>
            <p className="text-gray-400">
              Leave your details and our team will get back to you with more information about memberships and training.
            </p>
          </div>

          {submitted ? (
            <div className="flex flex-col items-center justify-center py-12 text-center animate-in fade-in zoom-in duration-500 relative z-10">
              <CheckCircle2 size={64} className="text-primary mb-6" />
              <h3 className="text-2xl font-bold text-white uppercase mb-2">Enquiry Received</h3>
              <p className="text-gray-400">Thanks! Your enquiry has been received. We'll be in touch soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-bold tracking-widest text-gray-400 uppercase">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    required 
                    className="w-full bg-black border border-white/10 p-4 text-white focus:border-primary focus:outline-none transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-bold tracking-widest text-gray-400 uppercase">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    required 
                    className="w-full bg-black border border-white/10 p-4 text-white focus:border-primary focus:outline-none transition-colors"
                    placeholder="+91 00000 00000"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="goal" className="text-sm font-bold tracking-widest text-gray-400 uppercase">Fitness Goal</label>
                  <select 
                    id="goal" 
                    className="w-full bg-black border border-white/10 p-4 text-white focus:border-primary focus:outline-none transition-colors appearance-none"
                  >
                    <option value="general">General Fitness</option>
                    <option value="weight-loss">Weight Loss</option>
                    <option value="muscle-gain">Muscle Gain</option>
                    <option value="strength">Strength Training</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label htmlFor="time" className="text-sm font-bold tracking-widest text-gray-400 uppercase">Preferred Time</label>
                  <select 
                    id="time" 
                    className="w-full bg-black border border-white/10 p-4 text-white focus:border-primary focus:outline-none transition-colors appearance-none"
                  >
                    <option value="morning">Morning (6AM - 11AM)</option>
                    <option value="afternoon">Afternoon (11AM - 4PM)</option>
                    <option value="evening">Evening (4PM - 10PM)</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-bold tracking-widest text-gray-400 uppercase">Message (Optional)</label>
                <textarea 
                  id="message" 
                  rows={4}
                  className="w-full bg-black border border-white/10 p-4 text-white focus:border-primary focus:outline-none transition-colors resize-none"
                  placeholder="Any specific questions?"
                ></textarea>
              </div>

              <Button type="submit" size="lg" className="w-full">
                SEND ENQUIRY
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

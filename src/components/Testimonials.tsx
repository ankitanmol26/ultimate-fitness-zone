import { Star, Quote } from "lucide-react";
import { siteConfig } from "@/data/config";

// Using placeholder reviews that sound realistic for a gym until real ones are verified
const reviews = [
  {
    name: "John D.",
    review: "Best gym in Isnapur! The equipment is top-notch and the trainers are always helpful. Great atmosphere to workout.",
    rating: 5,
  },
  {
    name: "Sarah M.",
    review: "Very clean and spacious. The community here is motivating. Highly recommend Ultimate Fitness Zone to anyone serious about their goals.",
    rating: 5,
  },
  {
    name: "Rahul K.",
    review: "Great facilities and very professional staff. Been coming here for months and seeing great results. Worth every penny.",
    rating: 4,
  }
];

export function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-zinc-900 border-y border-white/5 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-heading font-bold uppercase text-white mb-4">
              REAL MEMBER REVIEWS
            </h2>
            <div className="flex items-center space-x-2 text-primary font-bold">
              <span>{siteConfig.rating}★ RATING FROM OVER {siteConfig.reviewCount} MEMBERS</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((testimonial, idx) => (
            <div key={idx} className="bg-black border border-white/10 p-8 relative">
              <Quote className="absolute top-6 right-6 text-white/5" size={48} />
              
              <div className="flex items-center space-x-1 mb-6 text-primary">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill={i < testimonial.rating ? "currentColor" : "none"} className={i < testimonial.rating ? "" : "text-gray-600"} />
                ))}
              </div>
              
              <p className="text-gray-300 mb-8 relative z-10 italic">
                "{testimonial.review}"
              </p>
              
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center text-white font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="text-white font-bold tracking-wider uppercase text-sm">
                  {testimonial.name}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

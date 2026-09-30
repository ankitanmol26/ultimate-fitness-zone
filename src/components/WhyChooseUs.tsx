import { siteConfig } from "@/data/config";

const features = [
  { id: "01", title: "TRAIN WITH PURPOSE" },
  { id: "02", title: "CONSISTENT PROGRESS" },
  { id: "03", title: "QUALITY TRAINING ENVIRONMENT" },
  { id: "04", title: "FITNESS FOR EVERY GOAL" },
  { id: "05", title: "SUPPORTIVE COMMUNITY" },
  { id: "06", title: "RESULT-FOCUSED APPROACH" },
];

export function WhyChooseUs() {
  return (
    <section className="py-16 md:py-24 bg-zinc-950 border-t border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold uppercase text-white mb-4">
            WHY <span className="text-primary">{siteConfig.name}</span>?
          </h2>
          <div className="h-[2px] w-16 bg-primary mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {features.map((feature) => (
            <div key={feature.id} className="relative group">
              <div className="absolute -left-4 -top-6 text-7xl font-heading font-bold text-white/5 group-hover:text-primary/10 transition-colors duration-300">
                {feature.id}
              </div>
              <div className="relative z-10">
                <div className="text-primary font-heading font-bold text-xl mb-2">{feature.id}.</div>
                <h3 className="text-xl md:text-2xl font-bold uppercase text-white tracking-wide group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

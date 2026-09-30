import { siteConfig } from "@/data/config";

export function Facilities() {
  return (
    <section id="facilities" className="py-16 md:py-24 bg-black">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <div className="mb-2 flex items-center space-x-4">
              <div className="h-[2px] w-8 bg-primary" />
              <span className="text-primary font-bold tracking-widest uppercase text-sm">FACILITIES</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold uppercase text-white">
              PREMIUM EQUIPMENT
            </h2>
          </div>
          <p className="text-gray-400 max-w-md md:text-right">
            Train with professional-grade equipment designed to handle your toughest workouts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {siteConfig.facilities.map((facility, idx) => (
            <div 
              key={idx} 
              className={`relative overflow-hidden group ${idx === 0 || idx === 3 ? 'md:col-span-2 md:h-96' : 'md:h-80'} h-64`}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10 transition-opacity duration-300 group-hover:opacity-80" />
              <img 
                src={facility.image} 
                alt={facility.name}
                className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105" 
              />
              <div className="absolute bottom-6 left-6 z-20 flex items-center space-x-4">
                <div className="w-12 h-[2px] bg-primary scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100" />
                <h3 className="text-2xl md:text-3xl font-heading font-bold uppercase text-white tracking-wider">
                  {facility.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

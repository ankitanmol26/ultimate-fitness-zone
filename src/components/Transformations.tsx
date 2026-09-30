export function Transformations() {
  return (
    <section className="py-16 md:py-24 bg-black overflow-hidden relative">
      <div className="absolute top-1/2 left-0 w-full h-64 bg-primary/20 blur-[100px] -translate-y-1/2 pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold uppercase mb-4 text-white">
            YOUR JOURNEY STARTS <span className="text-primary">WITH ONE DECISION</span>.
          </h2>
          <p className="text-gray-400 text-lg">
            Consistency creates results. See what happens when you commit to the process.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Transformation Placeholder 1 */}
          <div className="bg-zinc-900 border border-white/10 p-4 rounded-sm flex flex-row gap-4 group hover:border-primary/50 transition-colors">
            <div className="flex-1 relative">
              <div className="absolute top-2 left-2 bg-black/80 px-2 py-1 text-xs font-bold tracking-widest text-white z-10">BEFORE</div>
              <img 
                src="https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=1469&auto=format&fit=crop" 
                alt="Before Training" 
                className="w-full aspect-[4/5] object-cover grayscale opacity-70"
              />
            </div>
            <div className="flex-1 relative">
              <div className="absolute top-2 left-2 bg-primary px-2 py-1 text-xs font-bold tracking-widest text-white z-10">AFTER</div>
              <img 
                src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=1470&auto=format&fit=crop" 
                alt="After Training" 
                className="w-full aspect-[4/5] object-cover"
              />
            </div>
          </div>
          
          {/* Transformation Placeholder 2 */}
          <div className="bg-zinc-900 border border-white/10 p-4 rounded-sm flex flex-row gap-4 group hover:border-primary/50 transition-colors">
            <div className="flex-1 relative">
              <div className="absolute top-2 left-2 bg-black/80 px-2 py-1 text-xs font-bold tracking-widest text-white z-10">BEFORE</div>
              <img 
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1470&auto=format&fit=crop" 
                alt="Before Training" 
                className="w-full aspect-[4/5] object-cover grayscale opacity-70"
              />
            </div>
            <div className="flex-1 relative">
              <div className="absolute top-2 left-2 bg-primary px-2 py-1 text-xs font-bold tracking-widest text-white z-10">AFTER</div>
              <img 
                src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1470&auto=format&fit=crop" 
                alt="After Training" 
                className="w-full aspect-[4/5] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

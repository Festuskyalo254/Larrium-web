import { useState } from 'react';
import { Laptop, Smartphone, ShieldCheck, ChevronRight } from 'lucide-react';

const slides = [
  {
    title: 'Premium Laptops',
    description: 'High-performance devices ready for business, gaming, and remote work. Expert setup included.',
    accent: 'Electronics & Sales',
    icon: Laptop,
    color: 'from-cyan-500/20 to-blue-500/20',
  },
  {
    title: 'Mobile Repair Lab',
    description: 'Fast diagnosis and component-level mobile repair with expert care and genuine parts.',
    accent: 'Expert Repair',
    icon: Smartphone,
    color: 'from-emerald-500/20 to-teal-500/20',
  },
  {
    title: 'CCTV & Security',
    description: 'Professional surveillance systems designed for every space. Remote monitoring setup.',
    accent: 'Security Solutions',
    icon: ShieldCheck,
    color: 'from-purple-500/20 to-indigo-500/20',
  },
];

function ServiceCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeSlide = slides[activeIndex];
  const Icon = activeSlide.icon;

  return (
    <div className="space-y-6">
      {/* Featured Card */}
      <div className={`relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-slate-900/40 p-8 transition-all duration-500`}>
        <div className={`absolute inset-0 bg-gradient-to-br ${activeSlide.color} opacity-30`} />
        
        <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-4 max-w-lg">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-3 py-1 text-[10px] uppercase tracking-widest text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              {activeSlide.accent}
            </div>
            
            <h3 className="text-3xl font-bold text-white heading-mono tracking-tight sm:text-4xl">
              {activeSlide.title}
            </h3>
            
            <p className="text-base leading-relaxed text-slate-300">
              {activeSlide.description}
            </p>
            
            <button className="group mt-2 flex items-center gap-2 text-sm font-semibold text-primary transition-all hover:gap-3">
              Learn more about this service
              <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          <div className="flex h-32 w-32 shrink-0 items-center justify-center rounded-[2rem] bg-slate-950/80 border border-white/5 shadow-2xl sm:h-40 sm:w-40">
            <Icon className="h-16 w-16 text-primary/80" strokeWidth={1.5} />
          </div>
        </div>
      </div>

      {/* Navigation Grid */}
      <div className="grid gap-4 sm:grid-cols-3 text-sm">
        {slides.map((slide, index) => {
          const SlideIcon = slide.icon;
          return (
            <button
              key={slide.title}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`group relative flex items-center gap-4 overflow-hidden rounded-[1.75rem] border p-4 text-left transition-all duration-300 ${
                index === activeIndex
                  ? 'border-primary/50 bg-primary/10 shadow-[0_0_25px_rgba(0,212,255,0.15)]'
                  : 'border-white/5 bg-slate-950/40 text-slate-400 hover:border-white/20 hover:bg-slate-900/60'
              }`}
            >
              <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl transition-all duration-300 ${
                index === activeIndex ? 'bg-primary text-slate-950' : 'bg-slate-900 text-slate-500 group-hover:text-slate-300'
              }`}>
                <SlideIcon className="h-6 w-6" />
              </div>
              <div className="min-w-0">
                <p className="line-clamp-1 text-[10px] uppercase font-bold tracking-widest opacity-60">
                  {slide.accent}
                </p>
                <p className={`line-clamp-1 font-bold tracking-tight transition-colors ${index === activeIndex ? 'text-white' : 'text-slate-300'}`}>
                  {slide.title}
                </p>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default ServiceCarousel;

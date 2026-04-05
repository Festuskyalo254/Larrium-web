import { useState } from 'react';

const slides = [
  {
    title: 'Premium Laptops',
    description: 'High-performance devices ready for business, gaming, and remote work.',
    accent: 'Electronics & Laptop Sales',
  },
  {
    title: 'Mobile Repair Lab',
    description: 'Fast diagnosis and component-level mobile repair with expert care.',
    accent: 'Mobile Repair Services',
  },
  {
    title: 'CCTV & Security',
    description: 'Professional surveillance systems designed for every space.',
    accent: 'CCTV Installation',
  },
];

function ServiceCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeSlide = slides[activeIndex];

  return (
    <div className="space-y-6 rounded-3xl border border-white/10 bg-slate-900/75 p-6 shadow-glow backdrop-blur-xl">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.32em] text-primary">Featured Service</p>
          <h3 className="mt-3 text-2xl font-semibold text-white heading-mono sm:text-3xl">
            {activeSlide.title}
          </h3>
          <p className="mt-3 text-sm leading-6 text-slate-300">{activeSlide.description}</p>
          <span className="mt-4 inline-flex rounded-full border border-primary/15 bg-primary/10 px-3 py-1 text-xs text-primary">
            {activeSlide.accent}
          </span>
        </div>
        <div className="hidden h-24 w-24 rounded-3xl bg-gradient-to-br from-primary/30 to-neon/20 p-2 sm:block">
          <div className="h-full w-full rounded-3xl bg-slate-950 shadow-glow"></div>
        </div>
      </div>
      <div className="grid gap-3 sm:grid-cols-3">
        {slides.map((slide, index) => (
          <button
            key={slide.title}
            type="button"
            onClick={() => setActiveIndex(index)}
            className={`rounded-3xl border p-4 text-left transition ${
              index === activeIndex
                ? 'border-primary bg-primary/10 text-white shadow-glow'
                : 'border-white/10 bg-slate-950/80 text-slate-300 hover:border-primary/50 hover:bg-slate-900/95'
            }`}
          >
            <p className="text-sm uppercase tracking-[0.28em] text-slate-400">{slide.accent}</p>
            <p className="mt-3 text-base font-semibold text-white">{slide.title}</p>
          </button>
        ))}
      </div>
    </div>
  );
}

export default ServiceCarousel;

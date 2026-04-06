import {
  Cpu,
  Wrench,
  Shield,
  Smartphone,
  CheckCircle2,
  Clock,
  Award,
  Zap,
} from 'lucide-react';

const serviceCards = [
  {
    title: 'Hardware Sales',
    description: 'Explore our curated selection of high-performance laptops and workstations. From business ultrabooks to gaming rigs, we provide pre-configured and tested hardware with full warranty support.',
    icon: Cpu,
    tags: ['Sales', 'Consultancy'],
  },
  {
    title: 'Precision Repair Lab',
    description: 'Beyond basic part swaps, we specialize in component-level diagnostics and repair for laptops and mobile devices. Micro-soldering, board repairs, and data recovery services delivered with speed.',
    icon: Wrench,
    tags: ['Repairs', 'BGA Work'],
  },
  {
    title: 'CCTV & Security',
    description: 'Expert surveillance drafting and installation. We deploy smart IP cameras, enterprise NVR systems, and remote monitoring applications for homes and business premises.',
    icon: Shield,
    tags: ['Security', 'Installation'],
  },
  {
    title: 'Mobile Solutions',
    description: 'Professional mobile service ranging from screen replacements to software flashing and unlocked services. We use premium grade parts to ensure your device feels like new.',
    icon: Smartphone,
    tags: ['Mobile', 'Parts'],
  },
];

function Services() {
  return (
    <section className="space-y-16 rounded-[2.5rem] border border-white/10 bg-slate-900/40 p-8 shadow-2xl backdrop-blur-xl sm:p-12">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.4em] text-primary">Technical Expertise</p>
          <h2 className="mt-6 text-4xl font-bold text-white heading-mono tracking-tight sm:text-5xl">
            Core capabilities for a <span className="text-primary">seamless</span> tech life.
          </h2>
        </div>
        <p className="max-w-md text-base leading-8 text-slate-400">
          Our specialized service grid is engineered for precision, accountability, and ultra-fast turnaround times.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {serviceCards.map((item) => {
          const Icon = item.icon;
          return (
            <article
              key={item.title}
              className="group flex flex-col justify-between rounded-[2rem] border border-white/5 bg-slate-950/60 p-8 transition-all duration-300 hover:border-primary/30 hover:bg-slate-900/80"
            >
              <div>
                <div className="mb-8 inline-flex h-14 w-14 items-center justify-center rounded-[1.25rem] bg-slate-900 text-primary transition-all group-hover:scale-110 group-hover:bg-primary group-hover:text-slate-950 group-hover:shadow-[0_0_20px_rgba(0,212,255,0.4)]">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-sm leading-7 text-slate-400 mb-6">{item.description}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {item.tags.map(tag => (
                  <span key={tag} className="text-[10px] font-mono uppercase tracking-widest text-primary/60 border border-primary/20 px-2 py-1 rounded-md">
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          );
        })}
      </div>

      <div className="pt-8 text-center sm:pt-12">
        <div className="inline-flex flex-wrap justify-center gap-12 rounded-[2.5rem] border border-white/5 bg-slate-950/40 px-10 py-10">
          {[
            { label: 'Certified Engineers', icon: Award },
            { label: 'Fast Turnarounds', icon: Clock },
            { label: 'Original Parts', icon: CheckCircle2 },
            { label: 'Modern Workflow', icon: Zap }
          ].map((feature) => (
            <div key={feature.label} className="flex items-center gap-3">
              <feature.icon className="h-5 w-5 text-primary" />
              <span className="text-sm font-bold text-slate-300">{feature.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;

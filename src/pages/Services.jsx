import {
  Cpu,
  Wrench,
  Shield,
  Smartphone,
} from 'lucide-react';

const serviceCards = [
  {
    title: 'Hardware Sales',
    description: 'Laptops, components, and premium electronics curated for power and durability.',
    icon: Cpu,
  },
  {
    title: 'Repair Lab',
    description: 'Mobile and laptop repairs with diagnostics, board-level service, and fast turnarounds.',
    icon: Wrench,
  },
  {
    title: 'Security Systems',
    description: 'CCTV installation with smart monitoring, cabling, and system configuration.',
    icon: Shield,
  },
  {
    title: 'Tech Gear',
    description: 'Accessories for every setup, from charging hubs to ergonomic peripherals.',
    icon: Smartphone,
  },
];

function Services() {
  return (
    <section className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-6 shadow-glow backdrop-blur-xl sm:p-8">
      <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-primary">Services</p>
          <h2 className="mt-4 text-3xl font-semibold text-white heading-mono sm:text-4xl">
            Core capabilities built for modern tech environments.
          </h2>
        </div>
        <p className="max-w-xl text-sm leading-7 text-slate-300">
          From repair work to sales and security, our service grid is designed for clarity, speed, and a strong professional finish.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {serviceCards.map((item) => {
          const Icon = item.icon;
          return (
            <article
              key={item.title}
              className="group rounded-[2rem] border border-white/10 bg-slate-950/85 p-6 transition duration-300 hover:border-primary/60 hover:bg-slate-900/95 hover:shadow-glow"
            >
              <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-slate-800/70 text-primary transition group-hover:bg-primary/10">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">{item.description}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Services;

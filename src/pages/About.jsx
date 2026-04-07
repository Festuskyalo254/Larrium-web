import { Link } from 'react-router-dom';
import { Target, Shield, Users, Zap } from 'lucide-react';

function About() {
  return (
    <section className="space-y-12 rounded-[2.5rem] border border-white/10 bg-slate-900/40 p-8 shadow-2xl backdrop-blur-xl sm:p-12">
      <div className="grid gap-12 lg:grid-cols-[1fr,1.2fr] lg:items-start">
        <div className="space-y-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.4em] text-primary">Our Story</p>
            <h2 className="mt-6 text-4xl font-bold text-white heading-mono tracking-tight sm:text-5xl">
              Precision Engineering Meets <span className="text-primary">Reliable</span> Support.
            </h2>
          </div>
          
          <div className="space-y-6 text-base leading-8 text-slate-300">
            <p>
              Founded on the principles of technical excellence and transparent service, Larrium Office Solutions has evolved from a specialized repair lab into a comprehensive technology partner for businesses and individuals in Nairobi.
            </p>
            <p>
              We understand that in today's digital age, your devices and security systems are critical to your success. That's why we've built a workflow focused on speed without compromising on the meticulous detail required for component-level repairs and professional-grade installations.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <div className="rounded-2xl border border-white/5 bg-slate-950/60 px-6 py-4">
              <p className="text-2xl font-bold text-white">500+</p>
              <p className="text-[10px] uppercase tracking-widest text-slate-500">Repairs Monthly</p>
            </div>
            <div className="rounded-2xl border border-white/5 bg-slate-950/60 px-6 py-4">
              <p className="text-2xl font-bold text-white">98%</p>
              <p className="text-[10px] uppercase tracking-widest text-slate-500">Success Rate</p>
            </div>
            <div className="rounded-2xl border border-white/5 bg-slate-950/60 px-6 py-4">
              <p className="text-2xl font-bold text-white">24/7</p>
              <p className="text-[10px] uppercase tracking-widest text-slate-500">Support Ready</p>
            </div>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {[
            {
              title: 'Our Mission',
              desc: 'To provide high-tier technical solutions that empower our clients through reliability, innovation, and expert craftsmanship.',
              icon: Target,
            },
            {
              title: 'Security First',
              desc: 'We prioritize the integrity of your data and the physical security of your premises through state-of-the-art surveillance.',
              icon: Shield,
            },
            {
              title: 'Client Focus',
              desc: 'Building long-term relationships through transparent pricing, clear communication, and personalized tech support.',
              icon: Users,
            },
            {
              title: 'Fast Execution',
              desc: 'Optimized workflows and advanced diagnostic tools ensure your tech is back in action with minimal downtime.',
              icon: Zap,
            }
          ].map((item) => (
            <div key={item.title} className="group rounded-[2rem] border border-white/5 bg-slate-950/40 p-8 transition-all hover:bg-slate-900/60 hover:border-primary/20">
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-slate-950">
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-4">{item.title}</h3>
              <p className="text-sm leading-6 text-slate-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-[2rem] bg-gradient-to-r from-primary/10 via-transparent to-primary/5 p-1">
        <div className="rounded-[1.9rem] bg-slate-950/90 p-8 text-center sm:p-12">
          <h3 className="text-2xl font-bold text-white heading-mono mb-4">Ready to upgrade your tech experience?</h3>
          <p className="mx-auto max-w-2xl text-slate-400 mb-8">
            Whether you need a new laptop, a security overhaul, or a precision repair, our team is standing by at Jimlizer Building, Buruburu.
          </p>
          <Link to="/contact" className="inline-flex items-center justify-center rounded-full bg-primary px-10 py-4 text-sm font-bold text-slate-950 transition hover:bg-white hover:scale-105 active:scale-95">
            Get Technical Support Now
          </Link>
        </div>
      </div>
    </section>
  );
}

export default About;

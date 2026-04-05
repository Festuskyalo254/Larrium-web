import ServiceCarousel from '../components/ServiceCarousel';

function Home() {
  return (
    <section className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/80 px-6 py-10 shadow-glow mesh-bg sm:px-10 lg:px-16 lg:py-16">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,212,255,0.18),_transparent_28%)] opacity-70" />
      <div className="relative grid gap-12 lg:grid-cols-[1.2fr,0.9fr] lg:items-center min-w-0">
        <div className="space-y-8 max-w-2xl min-w-0">
          <span className="inline-flex rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-xs uppercase tracking-[0.35em] text-primary">
            Smart Tech Services
          </span>
          <div className="space-y-4">
            <h1 className="text-4xl font-semibold leading-tight text-white heading-mono sm:text-5xl">
              Your Digital World, Repaired & Secured.
            </h1>
            <p className="max-w-xl text-base leading-8 text-slate-300">
              From CCTV installation and laptop sales to mobile repair and premium accessories, we deliver fast, modern tech service for homes and businesses.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-slate-950/80 p-5">
              <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Live status</p>
              <p className="mt-3 text-2xl font-semibold text-neon">Online</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-slate-950/80 p-5">
              <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Next available estimate</p>
              <p className="mt-3 text-2xl font-semibold text-white">15 mins</p>
            </div>
          </div>
        </div>
        <div className="space-y-6 min-w-0">
          <div className="rounded-[2rem] border border-white/10 bg-slate-950/85 p-6 shadow-glow min-w-0 break-words">
            <div className="mb-4 flex items-center justify-between gap-3 rounded-3xl bg-slate-900/90 px-4 py-3 text-slate-300">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-slate-400">Service Showcase</p>
                <p className="text-sm text-white">Tap cards to preview.</p>
              </div>
              <div className="rounded-full bg-slate-800/90 px-3 py-1 text-xs uppercase tracking-[0.25em] text-primary">
                High-Tech
              </div>
            </div>
            <ServiceCarousel />
          </div>
          <div className="grid gap-4 sm:grid-cols-2 min-w-0">
            <div className="rounded-3xl border border-white/10 bg-slate-950/85 p-5 min-w-0 break-words">
              <p className="text-sm uppercase tracking-[0.35em] text-slate-400">CCTV Installations</p>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                Secure every angle with pro-grade cameras and remote monitoring.
              </p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-slate-950/85 p-5 min-w-0 break-words">
              <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Laptop Sales</p>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                Shop powerful notebooks and accessories with expert setup support.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;

function About() {
  return (
    <section className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-6 shadow-glow backdrop-blur-xl sm:p-8">
      <div className="grid gap-8 lg:grid-cols-[0.9fr,1.1fr] lg:items-center">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.35em] text-primary">About Us</p>
          <h2 className="text-3xl font-semibold text-white heading-mono sm:text-4xl">
            Trusted technical expertise with a bold service mindset.
          </h2>
          <p className="max-w-xl text-sm leading-7 text-slate-300">
            Larrium Tech combines electronics sales, mobile repair, and CCTV installation into one polished service experience. We focus on fast diagnostics, reliable installations, and transparent communication.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-slate-950/85 p-5">
            <p className="text-xs uppercase tracking-[0.35em] text-slate-400">Precision</p>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              Component-level repairs and quality electronics sourced for durability.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-slate-950/85 p-5">
            <p className="text-xs uppercase tracking-[0.35em] text-slate-400">Reliability</p>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              Transparent quotes, on-time service, and security systems installed by certified engineers.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-slate-950/85 p-5">
            <p className="text-xs uppercase tracking-[0.35em] text-slate-400">Support</p>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              24/7 support messaging, online status monitoring, and real-time repair tracking.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-slate-950/85 p-5">
            <p className="text-xs uppercase tracking-[0.35em] text-slate-400">Innovation</p>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              A modern aesthetic, fast workflows, and technology designed around your business priorities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

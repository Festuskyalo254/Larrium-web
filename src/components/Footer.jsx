const footerLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
];

function Footer() {
  return (
    <footer className="mt-24 border-t border-white/10 bg-slate-950/90 py-10 text-slate-300">
      <div className="mx-auto grid max-w-[1400px] gap-10 px-4 lg:grid-cols-[1fr,auto] lg:px-8">
        <div className="space-y-4">
          <p className="text-xl font-semibold text-white">Larrium Tech</p>
          <p className="max-w-xl leading-7 text-slate-400">
            Electronics, repair and security services built for businesses and customers who want fast, reliable support with a modern tech edge.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <p className="mb-3 uppercase tracking-[0.24em] text-xs text-slate-400">Links</p>
            <div className="flex flex-col gap-2">
              {footerLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-slate-300 transition hover:text-primary"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-primary/10 bg-slate-900/80 p-5 shadow-glow">
            <p className="text-sm uppercase tracking-[0.3em] text-primary">24/7 Support</p>
            <p className="mt-2 text-sm leading-6 text-slate-300">
              Live diagnostics, repair scheduling, and remote estimates available around the clock.
            </p>
            <div className="mt-4 rounded-2xl border border-dashed border-primary/30 bg-slate-950/80 p-4 text-sm text-slate-300">
              Status: <span className="text-neon">Online / Live</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

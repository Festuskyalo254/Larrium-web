import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

const footerLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Contact', href: '/contact' },
];

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-white/5 bg-[#080B11] py-16 text-slate-400">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.5fr,1fr,1.2fr]">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 border border-primary/20">
                <span className="text-xl font-bold text-primary">L</span>
              </div>
              <p className="text-2xl font-bold tracking-tight text-white heading-mono">
                Larrium<span className="text-primary">.</span>Office <span className="text-primary">.</span> Solutions
              </p>
            </div>
            <p className="max-w-md text-sm leading-8 text-slate-400">
              Premium electronics sales, expert mobile & laptop repairs, and professional CCTV security solutions. We deliver fast, reliable, and modern tech support for your digital world.
            </p>
            <div className="flex gap-4">
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/5 bg-white/5 transition hover:border-primary/50 hover:bg-primary/10 hover:text-primary">
                <Mail className="h-5 w-5" />
              </a>
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/5 bg-white/5 transition hover:border-primary/50 hover:bg-primary/10 hover:text-primary">
                <Phone className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Links Section */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <p className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-white">Navigation</p>
              <ul className="space-y-4">
                {footerLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm transition hover:text-primary hover:translate-x-1 inline-block"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-white">Support</p>
              <ul className="space-y-4 text-sm">
                <li><a href="#" className="hover:text-primary">Repair Tracking</a></li>
                <li><a href="#" className="hover:text-primary">Price Estimates</a></li>
                <li><a href="#" className="hover:text-primary">Warranty Polices</a></li>
              </ul>
            </div>
          </div>

          {/* Contact/Status Section */}
          <div className="rounded-[2.5rem] border border-white/5 bg-slate-900/40 p-8 shadow-2xl backdrop-blur-sm">
            <div className="mb-6 flex items-center justify-between">
              <span className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-emerald-400">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Live Status
              </span>
              <span className="text-xs font-mono text-slate-500">24/7 Monitoring</span>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-primary" />
                <p className="text-sm leading-6 text-slate-300">
                  Buruburu Jimlizer building,<br />Ground Floor, Nairobi
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 shrink-0 text-primary" />
                <p className="text-sm text-slate-300">0720418250</p>
              </div>
            </div>
            <button className="mt-8 w-full rounded-2xl bg-primary py-3 text-sm font-bold text-slate-950 transition hover:bg-white hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]">
              Book a Service
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-white/5 pt-8 text-xs sm:flex-row">
          <p> Larrium Office Solutions.</p>
          <div className="flex items-center gap-2 text-slate-500">
            <span className="hidden sm:inline">Developed and Maintained by</span>
            <a href="https://jambobyte.co.ke" className="flex items-center gap-1 font-bold text-slate-300 transition hover:text-primary">
              Jambobyte Technologies {currentYear} <ExternalLink className="h-3 w-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

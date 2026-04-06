import { NavLink } from 'react-router-dom';

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/contact', label: 'Contact' },
];

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div className="text-lg font-semibold tracking-wide text-white">Larrium Office Solutions</div>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end
              className={({ isActive }) =>
                `text-sm font-medium transition ${
                  isActive ? 'text-primary' : 'text-slate-300 hover:text-primary'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
        <NavLink
          to="/contact"
          className="rounded-full bg-primary px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
        >
          Request Quote
        </NavLink>
      </div>
    </header>
  );
}

export default Navbar;

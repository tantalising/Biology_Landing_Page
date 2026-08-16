import { Network } from 'lucide-react';

const navLinks = ["Science", "Platform", "Capabilities", "Investors"];

export default function Navigation() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-lg border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Network className="text-emerald-500" size={28} />
          <span className="text-2xl font-bold tracking-tighter text-white">Bioldea.</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          {navLinks.map((link) => (
            <a key={link} href="#" className="hover:text-emerald-400 transition-colors">{link}</a>
          ))}
        </div>
        <button className="hidden md:block border border-slate-700 hover:border-emerald-500 hover:text-emerald-400 px-5 py-2 rounded-full text-sm font-semibold transition-all cursor-pointer">
          Access Portal
        </button>
      </div>
    </nav>
  );
}

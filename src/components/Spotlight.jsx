import { ArrowUpRight } from 'lucide-react';


export default function Spotlight() {
  return (
    <section className="py-24 bg-slate-900 border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-xs font-bold tracking-widest text-slate-500 uppercase">Innovation Spotlight</span>
          <h2 className="text-3xl font-light text-white mt-2">Building the Bridge to Breakthrough</h2>
        </div>

        <div className="flex flex-col md:flex-row bg-slate-950 border border-slate-800 overflow-hidden group">
          <div className="md:w-1/2 relative min-h-[400px] flex items-center justify-center bg-black overflow-hidden">
             <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-90 mix-blend-screen group-hover:scale-105 transition-transform duration-1000" src="/spotlight-network.mp4" />
             <div className="absolute inset-0 bg-gradient-to-r from-transparent to-slate-950/20" />
          </div>

          <div className="md:w-1/2 p-12 md:p-16 flex flex-col justify-center">
            <div className="text-emerald-500 font-semibold text-sm mb-4">NEURAL NETWORK MODELING</div>
            <h3 className="text-3xl md:text-4xl font-light text-white mb-6 leading-tight">
              Decoding complex networks through algorithmic mapping.
            </h3>
            <p className="text-slate-400 mb-8 leading-relaxed">
              Our proprietary neural models map millions of interconnected data points in real-time. By visualizing these complex relationships, we can accurately predict structural behaviors and synthesize non-organic frameworks with unprecedented precision.
            </p>
            <button className="w-fit bg-white text-slate-950 px-6 py-3 font-bold hover:bg-emerald-400 transition-colors flex items-center gap-2 cursor-pointer">
              Read the Technical Paper <ArrowUpRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

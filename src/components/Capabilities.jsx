import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { fadeUp } from '../utils/animations';

const capabilitiesData = [
  {
    title: "Genomic Sequencing",
    desc: "Algorithmic extraction of structural data.",
    color: "from-emerald-900/40 to-slate-900",
    media: "/icon-genomic.mp4"
  },
  {
    title: "Molecular Architecture",
    desc: "Synthesizing non-organic frameworks.",
    color: "from-cyan-900/40 to-slate-900",
    media: "/icon-molecular.mp4"
  },
  {
    title: "Data Structures",
    desc: "High-density computational storage.",
    color: "from-indigo-900/40 to-slate-900",
    media: "/icon-data.mp4"
  }
];

export default function Capabilities() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-light mb-4">Core <span className="font-semibold text-white">Capabilities</span></h2>
        <p className="text-slate-400 max-w-2xl mx-auto">We maintain a deep, diverse pipeline across computational sequencing, molecular mapping, and synthetic generation.</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {capabilitiesData.map((area) => (
          <motion.div key={area.title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-slate-900 border border-slate-800 flex flex-col group cursor-pointer hover:border-emerald-500/50 transition-colors">
            <div className={`h-48 bg-gradient-to-br ${area.color} relative overflow-hidden flex items-center justify-center`}>
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] z-0" />
              <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover mix-blend-screen opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 z-10" src={area.media} />
            </div>
            <div className="p-8 flex flex-col flex-grow relative z-20">
              <h3 className="text-2xl font-semibold text-white mb-3">{area.title}</h3>
              <p className="text-slate-400 mb-8 flex-grow">{area.desc}</p>
              <div className="flex items-center text-emerald-500 font-bold text-sm uppercase tracking-wider group-hover:text-emerald-400 transition-colors">
                View Research <ArrowUpRight size={18} className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

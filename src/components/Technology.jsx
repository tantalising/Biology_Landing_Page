import { motion } from 'framer-motion';
import { Cpu, Layers, GitBranch } from 'lucide-react';
import { fadeUp } from '../utils/animations';

const researchAreas = [
  { name: "Algorithmic Synthesis", icon: <Cpu size={20} /> },
  { name: "Structural Mapping", icon: <Layers size={20} /> },
  { name: "Neural Sequencing", icon: <GitBranch size={20} /> }
];

export default function Technology() {
  return (
    <section className="py-24 px-6 bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center">

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="md:w-1/2">
          <span className="text-xs font-bold tracking-widest text-slate-500 uppercase">Technology & Research</span>
          <h2 className="text-3xl md:text-5xl font-light mt-2 mb-6 text-white">Decentralized Infrastructure.</h2>
          <p className="text-slate-400 mb-8 leading-relaxed">
            By isolating variables in purely virtual computational environments, we eliminate physical trial and error from the research pipeline, achieving synthetic stability before physical execution.
          </p>
          <div className="flex flex-col gap-4">
            {researchAreas.map((area) => (
              <div key={area.name} className="flex items-center gap-4 bg-slate-900 border border-slate-800 p-4 rounded-xl">
                <div className="text-emerald-500">{area.icon}</div>
                <span className="text-white font-medium">{area.name}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="md:w-1/2 w-full h-[400px] border border-slate-800 rounded-2xl bg-slate-900 overflow-hidden relative group">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-800 via-slate-950 to-slate-950 z-0" />

            <video
              autoPlay loop muted playsInline
              className="absolute inset-0 w-full h-full object-cover opacity-70 mix-blend-screen group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 z-10"
              src="/tech-infrastructure.mp4"
            />
        </motion.div>

      </div>
    </section>
  );
}

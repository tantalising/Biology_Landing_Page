import { motion } from 'framer-motion';
import { Database, Activity, Microscope, Dna } from 'lucide-react';

const statsData = [
  { stat: "25+", label: "Algorithms Deployed", icon: <Database size={24} /> },
  { stat: "53", label: "Research Programs", icon: <Activity size={24} /> },
  { stat: "99%", label: "Mapping Accuracy", icon: <Microscope size={24} /> },
  { stat: "#1", label: "In Synthetic Models", icon: <Dna size={24} /> }
];

export default function Statistics() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-slate-800 border border-slate-800">
        {statsData.map((item, index) => (
          <motion.div key={item.label} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: index * 0.1 }} viewport={{ once: true }} className="bg-slate-950 p-10 flex flex-col items-center text-center group hover:bg-slate-900 transition-colors">
            <div className="text-emerald-500 mb-6 opacity-70 group-hover:scale-110 group-hover:opacity-100 transition-all">{item.icon}</div>
            <div className="text-5xl font-light text-white mb-4 tracking-tighter">{item.stat}</div>
            <div className="text-sm text-slate-400 font-medium">{item.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

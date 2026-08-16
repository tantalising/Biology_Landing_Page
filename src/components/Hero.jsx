import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { fadeUp, staggerContainer } from '../utils/animations';

export default function Hero() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 pt-20">
      <div className="absolute inset-0 z-0 bg-slate-950">
        <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-50">
          <source src="/bg-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/30 via-slate-950/70 to-slate-950" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="mb-6">
          <h1 className="text-5xl md:text-7xl font-light tracking-tight text-white flex flex-col gap-2">
            <motion.span variants={fadeUp}>Discovering the</motion.span>
            <motion.span variants={fadeUp} className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">
              Future of Genomics.
            </motion.span>
          </h1>
        </motion.div>

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 1 }} className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10">
          Pioneering synthetic biology solutions through purely computational architecture and advanced algorithmic modeling.
        </motion.p>

        <motion.button
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}
          whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
          onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}
          className="bg-emerald-500 text-slate-950 px-8 py-4 rounded-full font-bold flex items-center gap-2 mx-auto transition-colors hover:bg-emerald-400 cursor-pointer"
        >
          Explore Our Research
          <motion.div animate={{ x: isHovered ? 5 : 0 }}><ChevronRight size={20} /></motion.div>
        </motion.button>
      </div>
    </section>
  );
}

import { motion } from 'framer-motion';

export default function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[9999] bg-slate-950 flex flex-col items-center justify-center"
    >
      <div className="relative w-24 h-24 flex items-center justify-center mb-8">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 border-t-2 border-r-2 border-emerald-500/30 rounded-full"
        />

        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="absolute inset-2 border-b-2 border-l-2 border-cyan-500/40 rounded-full"
        />

        <motion.div
          animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-2 h-2 bg-emerald-400 rounded-full"
        />
      </div>

      <div className="flex flex-col items-center gap-2">
        <span className="text-xs font-bold tracking-[0.3em] text-emerald-500 uppercase">
          Bioldea Systems
        </span>
        <span className="text-[10px] tracking-widest text-slate-500 uppercase animate-pulse">
          Initializing Environment...
        </span>
      </div>
    </motion.div>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto text-center mb-24">
         <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Driven by Data. Delivering Innovation.</h2>
         <p className="text-slate-400 mb-10 max-w-xl mx-auto">Access our global structural database and integrate our models directly into your workflow.</p>
         <button className="px-8 py-4 bg-emerald-500 text-slate-950 font-bold rounded-full hover:bg-emerald-400 transition-colors cursor-pointer">
           View Developer Resources
         </button>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-xs text-slate-600 border-t border-slate-800 pt-8">
        <p>© {new Date().getFullYear()} Bioldea Scientific Systems. All rights reserved.</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-slate-300">Privacy Policy</a>
          <a href="#" className="hover:text-slate-300">Terms of Use</a>
          <a href="#" className="hover:text-slate-300">API Documentation</a>
        </div>
      </div>
    </footer>
  );
}

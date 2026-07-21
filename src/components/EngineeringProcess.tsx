import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { PROCESS_STEPS } from '../data';

export default function EngineeringProcess() {
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const activeStep = PROCESS_STEPS[activeIdx];

  const handleNext = () => {
    setActiveIdx(prev => (prev + 1) % PROCESS_STEPS.length);
  };

  const handlePrev = () => {
    setActiveIdx(prev => (prev - 1 + PROCESS_STEPS.length) % PROCESS_STEPS.length);
  };

  return (
    <section id="process" className="relative py-28 bg-slate-50 border-b border-slate-200/60 overflow-hidden">
      {/* Decorative Blueprint Layout */}
      <div className="absolute inset-0 bg-grid-blueprint-fine opacity-[0.25] pointer-events-none z-0" />
      <div className="absolute top-1/2 right-1/4 w-100 h-100 rounded-full bg-red/5 blur-[140px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Title Block with Entrance Animation */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mb-16"
        >
          <h2 className="font-sans text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight mb-4">
            How we deliver.
          </h2>
          <p className="font-sans text-slate-600 font-light text-base sm:text-lg max-w-xl">
            A systematic, 9-stage engineering workflow ensuring safety, quality, and complete compatibility at every turn.
          </p>
        </motion.div>

        {/* Phase Stepper Line with Entrance Animation */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="relative w-full mb-12 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm"
        >
          {/* Progress bar backbone */}
          <div className="absolute top-11 left-10 right-10 h-0.5 bg-slate-100 z-0" />
          <div 
            className="absolute top-11 left-10 h-0.5 bg-red z-0 transition-all duration-500 ease-out"
            style={{ width: `calc(${(activeIdx / (PROCESS_STEPS.length - 1)) * 100}% - 20px)` }}
          />

          <div className="flex justify-between items-center relative z-10 overflow-x-auto gap-4 no-scrollbar">
            {PROCESS_STEPS.map((step, idx) => {
              const isActive = idx === activeIdx;
              const isPast = idx < activeIdx;

              return (
                <button
                  key={step.phase}
                  onClick={() => setActiveIdx(idx)}
                  className="flex flex-col items-center shrink-0 focus:outline-none"
                >
                  <span className="font-mono text-[10px] text-slate-400 mb-2 font-medium">Stage</span>
                  <div className={`w-10 h-10 rounded-full border-2 flex items-center justify-center font-mono text-xs font-bold transition-all duration-300 ${
                    isActive 
                      ? 'bg-red border-red text-white shadow-glow-red scale-110' 
                      : isPast
                        ? 'bg-slate-100 border-slate-300 text-slate-700'
                        : 'bg-white border-slate-200 text-slate-400 hover:border-slate-400 hover:text-slate-700'
                  }`}>
                    {step.phase}
                  </div>
                  <span className={`font-sans text-[11px] font-bold mt-3 transition-colors ${
                    isActive ? 'text-slate-900' : 'text-slate-400'
                  }`}>
                    {step.title}
                  </span>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Focus Detail Panel Card with Entrance Animation */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="bg-white p-8 md:p-12 rounded-3xl border border-slate-200 relative overflow-hidden min-h-75 flex flex-col justify-between shadow-sm"
        >
          <div className="absolute inset-0 bg-grid-blueprint opacity-[0.15] pointer-events-none" />

          {/* Top category label & interactive arrows */}
          <div className="flex justify-between items-center border-b border-slate-100 pb-6 mb-8">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-slate-500">PHASE {activeStep.phase} / 09</span>
              <div className="w-1.5 h-1.5 rounded-full bg-red animate-pulse" />
              <span className="font-mono text-xs text-red font-bold uppercase tracking-wider">SYSTEMATIC ALIGNMENT</span>
            </div>
            
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                className="p-2 rounded-xl border border-slate-200 hover:border-slate-400 hover:text-slate-900 text-slate-600 bg-slate-50 transition-all cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="p-2 rounded-xl border border-slate-200 hover:border-slate-400 hover:text-slate-900 text-slate-600 bg-slate-50 transition-all cursor-pointer"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Details */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIdx}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
            >
              <div className="md:col-span-8 space-y-4">
                <span className="font-sans text-xs font-bold text-slate-400 tracking-widest uppercase block">CURRENT WORKFLOW</span>
                <h3 className="font-sans font-black text-3xl sm:text-4xl text-slate-900 tracking-tight">
                  {activeStep.title} Stage
                </h3>
                <p className="font-sans text-slate-600 text-base sm:text-lg font-light leading-relaxed max-w-2xl">
                  {activeStep.desc} — Complete execution of this critical milestone under strict supervisor checks, meeting standard Indian grid compliance codes.
                </p>
              </div>

              <div className="md:col-span-4 flex justify-end">
                <div className="w-full max-w-xs p-6 bg-slate-50 border border-slate-200 rounded-2xl relative overflow-hidden text-center shadow-inner">
                  <div className="absolute top-0 bottom-0 left-0 w-1 bg-red" />
                  <span className="block font-mono text-[10px] text-slate-400 uppercase tracking-widest mb-2 font-medium">STATUS CHECK</span>
                  <span className="block font-sans text-2xl font-black text-slate-900 tracking-tight mb-1">STABILIZED</span>
                  <span className="block font-sans text-xs text-slate-500 font-light">Stage {activeStep.phase} complete ready</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Quick instructions foot */}
          <div className="flex justify-between items-center text-slate-400 font-mono text-[9px] uppercase tracking-widest border-t border-slate-100 pt-6 mt-8">
            <span>ENGINEERING PROCESS // ODISHA</span>
            <span>PRIYANSHI ENGINEERING &amp; SERVICES</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

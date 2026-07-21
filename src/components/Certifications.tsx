import { ShieldAlert, CheckCircle2, Award, Quote } from 'lucide-react';
import { motion } from 'motion/react';
import { QUALITY_COMMITMENTS, SAFETY_COMMITMENTS, STATS } from '../data';

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-28 bg-slate-50 border-b border-slate-200/60 overflow-hidden">
      {/* Background blueprint details */}
      <div className="absolute inset-0 bg-grid-blueprint opacity-[0.25] pointer-events-none z-0" />
      <div className="absolute top-1/4 left-1/4 w-125 h-125 rounded-full bg-red/5 blur-[160px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* ============================ STATS ============================ */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {STATS.map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: idx * 0.08 }}
              className="bg-white border border-slate-200 p-6 md:p-8 rounded-3xl relative overflow-hidden group hover:border-red/35 transition-colors shadow-sm"
            >
              <div className="absolute inset-0 bg-grid-blueprint-fine opacity-[0.15] pointer-events-none" />
              <span className="block font-sans text-5xl sm:text-6xl font-black text-red tracking-tight leading-none mb-2">
                {stat.value}<span className="text-slate-900 text-4xl">{stat.suffix}</span>
              </span>
              <span className="block font-sans text-xs sm:text-sm text-slate-600 font-medium leading-normal">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>

        {/* ============================ QHSE POLICY ============================ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Block: Intro */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4"
          >
            <h2 className="font-sans text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight mb-4">
              Our commitment to quality &amp; safety.
            </h2>
            <p className="font-sans text-slate-600 font-light text-base leading-relaxed mb-6">
              Priyanshi Engineering &amp; Services is committed to maintaining the highest standards of Quality, Health, Safety, and Environment across all substation and switchgear projects.
            </p>
            
            {/* The Quote Block */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <Quote className="w-8 h-8 text-red/60" />
              <p className="font-serif italic text-base sm:text-lg text-slate-700">
                “Zero injuries. Consistent quality. Every project, every day.”
              </p>
            </div>
          </motion.div>

          {/* Right Block: Commitments Split */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8 lg:pl-6"
          >
            {/* Safety block */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 border-b border-slate-200 pb-4 mb-4">
                <div className="w-10 h-10 rounded-xl bg-red/10 border border-red/25 flex items-center justify-center text-red">
                  <ShieldAlert className="w-5 h-5" />
                </div>
                <h3 className="font-sans font-bold text-xl text-slate-900">Safety Commitments</h3>
              </div>

              <div className="space-y-5">
                {SAFETY_COMMITMENTS.map((item, idx) => (
                  <div key={idx} className="space-y-1">
                    <h4 className="font-sans font-bold text-base text-slate-900 flex items-center gap-2">
                      <span className="text-red font-mono text-xs">●</span> {item.title}
                    </h4>
                    <p className="font-sans text-xs text-slate-600 font-light leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Quality block */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 border-b border-slate-200 pb-4 mb-4">
                <div className="w-10 h-10 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-700">
                  <Award className="w-5 h-5" />
                </div>
                <h3 className="font-sans font-bold text-xl text-slate-900">Quality Commitments</h3>
              </div>

              <div className="space-y-5">
                {QUALITY_COMMITMENTS.map((item, idx) => (
                  <div key={idx} className="space-y-1">
                    <h4 className="font-sans font-bold text-base text-slate-900 flex items-center gap-2">
                      <span className="text-slate-500 font-mono text-xs">●</span> {item.title}
                    </h4>
                    <p className="font-sans text-xs text-slate-600 font-light leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}

import { motion } from 'motion/react';
import { FileText, Building2 } from 'lucide-react';
import { IMAGES } from '../constants';
import { FLAGSHIP_PROJECT, PROJECTS } from '../data';

export default function ProjectShowcase() {
  return (
    <section id="projects" className="relative py-28 bg-white border-b border-slate-200/60 overflow-hidden">
      {/* Structural background layers */}
      <div className="absolute inset-0 bg-grid-blueprint opacity-[0.22] pointer-events-none z-0" />
      <div className="absolute top-1/4 right-1/4 w-100 h-100 rounded-full bg-red/5 blur-[120px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Title with Entrance Animation */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mb-16"
        >
          <h2 className="font-sans text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight mb-4">
            Major projects &amp; work experience.
          </h2>
          <p className="font-sans text-slate-600 font-light text-base sm:text-lg max-w-2xl">
            A proven history of successful switchgear services, VCB repairing, parts supply, and annual maintenance contracts (AMC) across Odisha's distribution networks and heavy complexes.
          </p>
        </motion.div>

        {/* Flagship Project Showcase Frame with Entrance Animation */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="bg-slate-50 border border-slate-200 rounded-3xl p-8 md:p-12 mb-12 relative overflow-hidden group hover:border-slate-300 transition-colors shadow-sm"
        >
          <div className="absolute inset-0 bg-grid-blueprint-fine opacity-[0.15] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Block: Flagship Info */}
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-flex items-center gap-2 font-mono text-[9px] font-bold text-red bg-red/10 border border-red/25 px-2.5 py-1 rounded tracking-widest uppercase">
                ★ FLAGSHIP ANNUAL MAINTENANCE CONTRACT
              </span>
              <h3 className="font-sans font-black text-3xl sm:text-4xl text-slate-900 tracking-tight leading-tight">
                {FLAGSHIP_PROJECT.title}
              </h3>

              <div className="h-px bg-slate-200 w-full" />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 font-sans">
                <div className="space-y-1">
                  <span className="block text-[10px] text-slate-500 uppercase tracking-widest font-semibold">Client Authority</span>
                  <span className="text-slate-900 font-bold text-base flex items-center gap-1.5">
                    <Building2 className="w-4 h-4 text-red shrink-0" /> {FLAGSHIP_PROJECT.client}
                  </span>
                </div>
                <div className="space-y-1">
                  <span className="block text-[10px] text-slate-500 uppercase tracking-widest font-semibold">Asset Location</span>
                  <span className="text-slate-900 font-bold text-base flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-red animate-ping shrink-0" /> {FLAGSHIP_PROJECT.site} · {FLAGSHIP_PROJECT.location}
                  </span>
                </div>
              </div>

              <div className="p-4 bg-white border border-slate-200 rounded-2xl flex justify-between items-center">
                <span className="font-mono text-xs text-slate-500">CONTRACT SCOPE</span>
                <span className="font-sans text-xs font-bold text-slate-800 bg-slate-50 border border-slate-200 px-3 py-1 rounded-lg">
                  {FLAGSHIP_PROJECT.scope}
                </span>
              </div>
            </div>

            {/* Right Block: Image frame with micro tech overlays */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-4/3 w-full rounded-2xl overflow-hidden border border-slate-200 bg-slate-50">
                <div className="absolute inset-0 bg-linear-to-t from-slate-900/60 via-transparent to-transparent z-10 opacity-70" />
                <img 
                  src={IMAGES.hero || IMAGES.gridTexture} 
                  alt="Airport Substation" 
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    // Fallback to Unsplash if local image fails
                    (e.target as HTMLImageElement).src = IMAGES.gridTexture;
                  }}
                />
                <div className="absolute inset-0 bg-grid-blueprint opacity-15" />
                <div className="absolute bottom-4 left-4 z-20 font-mono text-[9px] text-white bg-red/90 border border-red/40 px-2.5 py-1 rounded-md shadow-sm">
                  ACTIVE AMC SUBSTATION PHOTO
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 8 Other Major Projects List */}
        <div className="space-y-4">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-sans text-xs font-bold text-slate-500 tracking-widest uppercase block mb-6"
          >
            Other Major Projects &amp; Work Experience
          </motion.span>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {PROJECTS.map((proj, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: (idx % 2) * 0.08 + Math.floor(idx / 2) * 0.04 }}
                className="bg-white border border-slate-200 p-6 rounded-2xl relative flex items-start gap-4 hover:border-slate-300 transition-colors shadow-sm"
              >
                <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-500">
                  <FileText className="w-4 h-4" />
                </div>
                <div className="space-y-1 flex-1">
                  <div className="flex justify-between items-center">
                    <span className="font-mono text-[9px] text-red font-bold uppercase tracking-wider">PROJECT 0{idx + 1}</span>
                    <span className="font-mono text-[8px] text-slate-400">COMPLETED</span>
                  </div>
                  <h4 className="font-sans font-bold text-base text-slate-900">
                    {proj.title}
                  </h4>
                  <p className="font-sans text-xs text-slate-600 font-light flex items-center gap-1">
                    Client/Utility: <strong className="text-slate-800 font-semibold">{proj.client}</strong>
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

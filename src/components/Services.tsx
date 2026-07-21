import { ShieldAlert, Cpu, Sparkles, Wrench, ShieldCheck, HeartPulse } from 'lucide-react';
import { motion } from 'motion/react';
import { ALSO_OFFERED, SERVICES } from '../data';

export default function Services() {
  const getIcon = (n: string) => {
    switch (n) {
      case '01': return <Cpu className="w-5 h-5 text-red" />;
      case '02': return <Wrench className="w-5 h-5 text-red" />;
      case '03': return <ShieldCheck className="w-5 h-5 text-red" />;
      case '04': return <Sparkles className="w-5 h-5 text-red" />;
      case '05': return <ShieldAlert className="w-5 h-5 text-red" />;
      case '06': return <HeartPulse className="w-5 h-5 text-red" />;
      default: return <Wrench className="w-5 h-5 text-red" />;
    }
  };

  return (
    <section id="services" className="relative py-28 bg-slate-50 border-b border-slate-200/60 overflow-hidden">
      {/* Structural background layers */}
      <div className="absolute inset-0 bg-grid-blueprint-fine opacity-[0.25] pointer-events-none z-0" />
      <div className="absolute bottom-1/4 right-1/4 w-100 h-100 rounded-full bg-red/5 blur-[130px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Head Block with Entrance Animation */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mb-16"
        >
          <h2 className="font-sans text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight mb-4">
            Lifecycle service, up to 33 kV.
          </h2>
          <p className="font-sans text-slate-600 font-light text-base sm:text-lg max-w-2xl">
            Our specialized engineering team delivers comprehensive on-site diagnostics, preventative maintenance, and mechanical overhauls.
          </p>
        </motion.div>

        {/* 6 Core Services Grid with Staggered Entrance Animations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {SERVICES.map((srv, index) => (
            <motion.div 
              key={srv.n}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: index * 0.08 }}
              className="bg-white border border-slate-200 p-8 rounded-3xl relative overflow-hidden group hover:border-red/40 hover:shadow-glow-red transition-all duration-300"
            >
              {/* Corner Number */}
              <div className="absolute top-0 right-0 p-6 font-mono text-xl font-bold text-slate-200 group-hover:text-red/30 transition-colors">
                {srv.n}
              </div>

              {/* Service Icon */}
              <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center mb-6 group-hover:border-red/40 transition-colors">
                {getIcon(srv.n)}
              </div>

              {/* Tag Pill */}
              <span className="inline-block font-mono text-[9px] font-bold text-slate-500 uppercase tracking-widest bg-slate-100 border border-slate-200/60 px-2 py-0.5 rounded-md mb-4 font-medium">
                {srv.tag}
              </span>

              {/* Content */}
              <h3 className="font-sans font-bold text-xl text-slate-900 mb-3 group-hover:text-red transition-colors">
                {srv.title}
              </h3>
              <p className="font-sans text-sm text-slate-600 leading-relaxed font-light">
                {srv.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Also Offered Section with Entrance Animation */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          className="bg-white p-8 rounded-3xl border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm"
        >
          <div className="space-y-1">
            <span className="font-mono text-[9px] text-red font-bold tracking-widest uppercase">SPECIALIZED OFFERINGS</span>
            <h4 className="font-sans font-bold text-lg text-slate-900">Also offered by our maintenance division</h4>
          </div>
          <div className="flex flex-wrap gap-2.5">
            {ALSO_OFFERED.map((offer, i) => (
              <span 
                key={i} 
                className="px-4.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200/80 font-sans text-xs text-slate-700 font-semibold tracking-wide hover:border-red/40 hover:text-red transition-colors cursor-default"
              >
                {offer}
              </span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}

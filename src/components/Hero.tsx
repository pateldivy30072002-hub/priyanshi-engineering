import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const handleScrollToNext = () => {
    const el = document.querySelector('#about');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <section 
        id="top"
        className="relative min-h-screen flex flex-col justify-end pb-12 overflow-hidden bg-linear-to-b from-[#091122] via-navy to-[#0F1C36] isolation-isolate"
      >
        {/* Faint blueprint grid printed on the dark background */}
        <div className="absolute inset-0 bg-grid-blueprint opacity-35 mask-[radial-gradient(130%_100%_at_50%_20%,#000_55%,transparent_100%)]] pointer-events-none z-0" />

        {/* Ambient Lightning and glow lights */}
        <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_78%_6%,rgba(255,206,31,0.18),transparent_55%)] pointer-events-none z-0" />
        <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_15%_20%,rgba(46,123,255,0.22),transparent_55%)] pointer-events-none z-0" />

        {/* CSS/SVG substation + transmission scene on dark blueprint paper, parallax layers */}
        <div className="absolute inset-0 z-10 pointer-events-none select-none">
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMax slice">
            <defs>
              <linearGradient id="towerG" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#5a7db5" />
                <stop offset="1" stopColor="#253e6b" />
              </linearGradient>
            </defs>

            {/* Far transmission line */}
            <g 
              stroke="rgba(219,163,154,0.14)" 
              strokeWidth="1.4" 
              fill="none"
            >
              <path d="M120 480 Q300 430 480 480 T840 480 T1200 480 T1560 480" />
              <path d="M120 505 Q300 458 480 505 T840 505 T1200 505 T1560 505" />
            </g>

            {/* Transmission towers (mid) */}
            <g 
              fill="none" 
              stroke="url(#towerG)" 
              strokeWidth="1.6"
            >
              <g transform="translate(360,300)">
                <path d="M0 0 L-46 300 M0 0 L46 300 M-30 100 L30 100 M-38 190 L38 190 M-16 40 L16 40 M-46 300 L46 300" />
                <path d="M-70 60 L70 60 M-58 120 L58 120" strokeWidth="2.4" stroke="#4a6ca3" />
              </g>
              <g transform="translate(1080,320)">
                <path d="M0 0 L-46 280 M0 0 L46 280 M-30 96 L30 96 M-38 180 L38 180 M-16 38 L16 38 M-46 280 L46 280" />
                <path d="M-70 58 L70 58 M-58 116 L58 116" strokeWidth="2.4" stroke="#4a6ca3" />
              </g>
            </g>

            {/* Live conductors between towers with animated current sparkles */}
            <g 
              fill="none"
            >
              <path id="cond1" d="M290 360 Q720 470 1010 380" stroke="rgba(226,59,54,0.6)" strokeWidth="1.8" />
              <path id="cond2" d="M290 418 Q720 520 1010 436" stroke="rgba(226,59,54,0.4)" strokeWidth="1.8" />
              
              <circle r="3.4" fill="var(--color-red)">
                <animateMotion dur="3.2s" repeatCount="indefinite" path="M290 360 Q720 470 1010 380" />
              </circle>
              <circle r="2.6" fill="var(--color-red-deep)">
                <animateMotion dur="4.1s" repeatCount="indefinite" begin="1s" path="M290 418 Q720 520 1010 436" />
              </circle>
              <circle r="3" fill="var(--color-red)">
                <animateMotion dur="3.8s" repeatCount="indefinite" begin="1.6s" path="M290 360 Q720 470 1010 380" />
              </circle>
            </g>

            {/* LIGHTNING - electric blue & yellow bolts striking from sky */}
            <g strokeWidth="3">
              {/* Blue bolt, left */}
              <path className="bolt-b1 stroke-bolt-blue fill-none" d="M300 -20 L272 150 L318 170 L250 360 L300 210 L262 192 Z" strokeWidth="3.2" />
              <path className="bolt-b1 stroke-bolt-blue fill-none" d="M300 -20 L272 150 L318 170 L250 360" strokeWidth="5" opacity="0.35" />
              {/* Yellow bolt, right */}
              <path className="bolt-b2 stroke-bolt-yellow fill-none" d="M1090 -20 L1116 140 L1074 158 L1140 340 L1092 200 L1128 184 Z" strokeWidth="3.2" />
              <path className="bolt-b2 stroke-bolt-yellow fill-none" d="M1090 -20 L1116 140 L1074 158 L1140 340" strokeWidth="5" opacity="0.35" />
              {/* Blue bolt, center */}
              <path className="bolt-b3 stroke-bolt-blue fill-none" d="M720 -20 L700 120 L742 138 L690 300 L726 176 L692 160 Z" strokeWidth="2.8" />
              {/* Small branch bolts */}
              <path className="bolt-b3 stroke-bolt-blue fill-none" d="M250 360 L214 300 M250 360 L286 320" strokeWidth="2" />
              <path className="bolt-b2 stroke-bolt-yellow fill-none" d="M1140 340 L1176 300 M1140 340 L1108 306" strokeWidth="2" />
            </g>

            {/* Foreground substation */}
            <g 
              fill="rgba(16,31,61,0.5)" 
              stroke="rgba(219,163,154,0.30)" 
              strokeWidth="1.5"
            >
              <rect x="620" y="640" width="200" height="150" />
              <rect x="640" y="600" width="10" height="44" />
              <rect x="790" y="600" width="10" height="44" />
              <path d="M600 640 L840 640 M645 600 L645 560 M795 600 L795 560" fill="none" />
              <circle cx="645" cy="556" r="6" fill="none" />
              <circle cx="795" cy="556" r="6" fill="none" />
              <rect x="470" y="700" width="120" height="90" />
              <rect x="850" y="690" width="150" height="100" />
              <path d="M470 700 L590 700 M850 690 L1000 690" fill="none" />
            </g>
          </svg>
          
          {/* Ambient flasher overlay that mirrors the lightning bolts */}
          <div className="flash-b1 absolute inset-0 bg-linear-to-r from-bolt-blue/20 to-transparent mix-blend-screen opacity-0 pointer-events-none" />
          <div className="flash-b2 absolute inset-0 bg-linear-to-l from-bolt-yellow/15 to-transparent mix-blend-screen opacity-0 pointer-events-none" />
        </div>

        {/* Gradient fade down into clean light white background below */}
        <div className="absolute inset-0 bg-linear-to-t from-white via-transparent to-transparent opacity-100 pointer-events-none z-15" />

        <div className="max-w-7xl mx-auto px-6 relative z-20 w-full mt-24">
          <div className="flex flex-col md:flex-row items-center gap-4 mb-8">
            <span className="font-sans text-[11px] font-bold tracking-[0.3em] text-cream-dim/70 uppercase text-center md:text-left">
              ◉ ELECTRICAL ENGINEERING · JAJPUR, ODISHA
            </span>
            <div className="hidden md:block h-px flex-1 bg-cream-dim/15" />
            <span className="font-sans text-[11px] font-bold tracking-[0.3em] text-cream-dim/70 uppercase text-center md:text-right">
              EST. 2016 · GST 21AZAPD4967A1Z1
            </span>
          </div>

          <h1 className="font-sans text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-[140px] font-black text-cream tracking-tight leading-[0.9] sm:leading-[0.86] [text-shadow:0_2px_30px_rgba(226,59,54,0.18)] mb-8">
            <span className="block overflow-hidden py-1">
              <motion.span 
                initial={{ y: '115%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="block"
              >
                Powering
              </motion.span>
            </span>
            <span className="block overflow-hidden py-1">
              <motion.span 
                initial={{ y: '115%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="block"
              >
                Odisha’s <span className="font-serif italic font-light text-red">Grid.</span>
              </motion.span>
            </span>
          </h1>

          <div className="flex flex-wrap gap-8 items-end justify-between mt-12">
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="font-serif italic text-lg sm:text-xl md:text-2xl text-cream-dim/90 max-w-[42ch] leading-relaxed"
            >
              Switchgear, transformers & protection relays — sourced, serviced and engineered to keep critical power running.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-3.5"
            >
              <a 
                href="#portfolio"
                className="btn-p px-6 py-4 rounded-xl font-sans font-bold text-xs tracking-wider text-white bg-red flex items-center gap-2 shadow-glow-red cursor-pointer"
              >
                Explore the range <ArrowRight className="w-4 h-4" />
              </a>
              <a 
                href="#contact"
                className="btn-g px-6 py-4 rounded-xl font-sans font-bold text-xs tracking-wider text-cream border border-cream/35 bg-white/10 backdrop-blur-sm cursor-pointer"
              >
                Talk to an engineer
              </a>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator cue */}
        <div 
          onClick={handleScrollToNext}
          className="absolute left-1/2 bottom-8 -translate-x-1/2 flex flex-col items-center gap-2 text-cream/55 cursor-pointer z-20 group"
        >
          <div className="w-px h-10 bg-cream/20 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1/2 bg-red animate-bounce" />
          </div>
          <span className="font-sans text-[9px] font-bold tracking-[0.3em] uppercase">SCROLL</span>
        </div>
      </section>

      {/* Ticker marquee just below the hero — Light crisp theme to transition into About */}
      <div className="relative bg-slate-100 border-y border-slate-200 py-4.5 overflow-hidden z-25" aria-hidden="true">
        <div className="flex whitespace-nowrap min-w-full animate-marquee gap-14">
          <div className="flex gap-14 shrink-0 text-xs font-semibold uppercase tracking-[0.24em] text-slate-800">
            <span>SOURCING</span> <i>●</i>
            <span>CONSULTING</span> <i>●</i>
            <span>SERVICE &amp; AMC</span> <i>●</i>
            <span>VCB OVERHAULING</span> <i>●</i>
            <span>NUMERICAL RELAYS</span> <i>●</i>
            <span>TRANSFORMER SPARES</span> <i>●</i>
            <span className="text-red font-bold">UP TO 33 kV</span> <i>●</i>
          </div>
          <div className="flex gap-14 shrink-0 text-xs font-semibold uppercase tracking-[0.24em] text-slate-800">
            <span>SOURCING</span> <i>●</i>
            <span>CONSULTING</span> <i>●</i>
            <span>SERVICE &amp; AMC</span> <i>●</i>
            <span>VCB OVERHAULING</span> <i>●</i>
            <span>NUMERICAL RELAYS</span> <i>●</i>
            <span>TRANSFORMER SPARES</span> <i>●</i>
            <span className="text-red font-bold">UP TO 33 kV</span> <i>●</i>
          </div>
        </div>
      </div>
    </>
  );
}

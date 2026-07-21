import { ShieldCheck, Award } from 'lucide-react';
import { CLIENTS } from '../data';

export default function ClientsSlider() {
  // Split clients into two rows for the dual-direction marquee scroller
  const half = Math.ceil(CLIENTS.length / 2);
  const row1 = CLIENTS.slice(0, half);
  const row2 = CLIENTS.slice(half);

  // Helper to generate dynamic, razor-sharp SVG vector logos for each major brand/client
  const renderClientLogo = (name: string, role: string) => {
    const cleanName = name.toLowerCase();

    if (cleanName.includes('airports authority')) {
      return (
        <svg className="w-8 h-8 sm:w-10 sm:h-10 transition-all duration-300" viewBox="0 0 40 40" fill="none">
          <circle cx="20" cy="20" r="18" stroke="var(--color-red)" strokeWidth="1" strokeDasharray="3 2" />
          <path d="M12 20 L28 20 M20 12 L20 28 M15 15 L25 25 M15 25 L25 15" stroke="#cbd5e1" strokeWidth="1" opacity="0.6" />
          <path d="M10 24 L20 14 L30 24" stroke="var(--color-red)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    }
    if (cleanName.includes('optcl')) {
      return (
        <svg className="w-8 h-8 sm:w-10 sm:h-10 transition-all duration-300" viewBox="0 0 40 40" fill="none">
          <path d="M12 32 L20 8 L28 32 M15 22 H25 M18 15 H22" stroke="#b25d51" strokeWidth="1.6" />
          <line x1="20" y1="8" x2="20" y2="34" stroke="#b25d51" strokeWidth="1" strokeDasharray="2 2" />
          <circle cx="20" cy="8" r="2" fill="var(--color-red)" />
        </svg>
      );
    }
    if (cleanName.includes('tpnodl') || cleanName.includes('tpwodl')) {
      const isWestern = cleanName.includes('tpwodl');
      return (
        <svg className="w-8 h-8 sm:w-10 sm:h-10 transition-all duration-300" viewBox="0 0 40 40" fill="none">
          <rect x="8" y="8" width="24" height="24" rx="4" fill="rgba(178,93,81,0.05)" stroke="#b25d51" strokeWidth="1" />
          <path d="M13 14 H22 M17 14 V26" stroke={isWestern ? '#b25d51' : 'var(--color-red)'} strokeWidth="2" strokeLinecap="round" />
          <path d="M21 17 Q27 17 27 21 T21 25" stroke="#1e293b" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    }
    if (cleanName.includes('crompton greaves')) {
      return (
        <svg className="w-8 h-8 sm:w-10 sm:h-10 transition-all duration-300" viewBox="0 0 40 40" fill="none">
          <path d="M26 14 C23 11, 17 11, 14 14 C11 17, 11 23, 14 26 C17 29, 23 29, 26 26" stroke="var(--color-red)" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M23 20 H18" stroke="#1e293b" strokeWidth="2" />
          <circle cx="20" cy="20" r="18" stroke="rgba(178,93,81,0.1)" />
        </svg>
      );
    }
    if (cleanName.includes('abb')) {
      return (
        <svg className="w-8 h-8 sm:w-10 sm:h-10 transition-all duration-300" viewBox="0 0 40 40" fill="none">
          <rect x="6" y="13" width="28" height="14" rx="2" fill="rgba(226,59,54,0.1)" stroke="var(--color-red)" strokeWidth="1" />
          <text x="50%" y="60%" textAnchor="middle" dominantBaseline="middle" fill="var(--color-red)" fontSize="9" fontFamily="sans-serif" fontWeight="900" letterSpacing="1">ABB</text>
        </svg>
      );
    }
    if (cleanName.includes('siemens')) {
      return (
        <svg className="w-8 h-8 sm:w-10 sm:h-10 transition-all duration-300" viewBox="0 0 40 40" fill="none">
          <text x="50%" y="55%" textAnchor="middle" dominantBaseline="middle" fill="#1e293b" fontSize="7" fontFamily="monospace" fontWeight="900" letterSpacing="0.5">SIEMENS</text>
          <line x1="8" y1="26" x2="32" y2="26" stroke="#b25d51" strokeWidth="1.5" />
        </svg>
      );
    }
    if (cleanName.includes('schneider')) {
      return (
        <svg className="w-8 h-8 sm:w-10 sm:h-10 transition-all duration-300" viewBox="0 0 40 40" fill="none">
          <path d="M12 15 H28 M12 20 H24 M12 25 H20" stroke="#b25d51" strokeWidth="2.2" strokeLinecap="round" />
          <circle cx="26" cy="25" r="3" fill="var(--color-red)" />
        </svg>
      );
    }
    if (cleanName.includes('larsen')) {
      return (
        <svg className="w-8 h-8 sm:w-10 sm:h-10 transition-all duration-300" viewBox="0 0 40 40" fill="none">
          <rect x="10" y="10" width="20" height="20" rx="3" fill="rgba(0,0,0,0.02)" stroke="#b25d51" strokeWidth="1.2" />
          <text x="50%" y="58%" textAnchor="middle" dominantBaseline="middle" fill="#1e293b" fontSize="8" fontFamily="sans-serif" fontWeight="bold">L&T</text>
        </svg>
      );
    }
    if (cleanName.includes('hitachi') || cleanName.includes('ge multilin')) {
      return (
        <svg className="w-8 h-8 sm:w-10 sm:h-10 transition-all duration-300" viewBox="0 0 40 40" fill="none">
          <circle cx="20" cy="20" r="10" fill="none" stroke="var(--color-red)" strokeWidth="1.8" />
          <path d="M17 20 L23 20 M20 17 L20 23" stroke="#1e293b" strokeWidth="1.2" />
        </svg>
      );
    }

    // Default neat fallback logo based on initials
    const initials = name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
    return (
      <svg className="w-8 h-8 sm:w-10 sm:h-10 transition-all duration-300" viewBox="0 0 40 40" fill="none">
        <rect x="8" y="8" width="24" height="24" rx="6" fill="rgba(178,93,81,0.03)" stroke="rgba(178,93,81,0.2)" strokeWidth="1" />
        <text x="50%" y="58%" textAnchor="middle" dominantBaseline="middle" fill="#b25d51" fontSize="8" fontFamily="monospace" fontWeight="bold">{initials}</text>
      </svg>
    );
  };

  return (
    <section id="clients" className="relative py-24 sm:py-28 bg-slate-50 border-b border-slate-200/60 overflow-hidden">
      {/* Decorative grids */}
      <div className="absolute inset-0 bg-grid-blueprint-fine opacity-[0.25] pointer-events-none z-0" />
      <div className="absolute top-1/2 right-1/4 w-100 h-100 rounded-full bg-red/5 blur-[120px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 mb-12">
        {/* Section title */}
        <div className="max-w-3xl">

          <h2 className="font-sans text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight mb-4">
            Trusted across Odisha's power sector.
          </h2>
          <p className="font-sans text-slate-600 font-light text-base sm:text-lg max-w-2xl">
            A selection of the major power distribution utilities, infrastructure contractors, and leading global OEM brands we source, service, and support.
          </p>
        </div>
      </div>

      {/* Marquee Ticker Rows */}
      <div className="relative space-y-6 w-full overflow-hidden select-none z-10">
        
        {/* Row 1: Leftward Marquee */}
        <div className="flex overflow-hidden w-full relative">
          <div className="flex whitespace-nowrap gap-4 sm:gap-6 animate-marquee hover:[animation-play-state:paused] cursor-pointer">
            {/* Duplicated 3 times to guarantee seamless wrapping */}
            {[...row1, ...row1, ...row1].map((client, idx) => (
              <div 
                key={idx}
                className="inline-flex flex-row items-center gap-3 sm:gap-4 w-70 sm:w-85 h-23.75 sm:h-27.5 p-4 sm:p-5 bg-white border border-slate-200/80 rounded-2xl shrink-0 hover:border-red/40 transition-colors shadow-sm"
              >
                {/* Logo Frame */}
                <div className="w-11 h-11 sm:w-14 sm:h-14 bg-slate-50 border border-slate-200/80 rounded-xl flex items-center justify-center shrink-0">
                  {renderClientLogo(client.name, client.role)}
                </div>

                {/* Text Content */}
                <div className="flex-1 min-w-0 flex flex-col justify-between h-full py-0.5 sm:py-1">
                  <div className="flex items-center justify-between gap-2">
                    <span className={`font-mono text-[7.5px] sm:text-[8px] font-bold px-1.5 sm:px-2 py-0.5 rounded uppercase tracking-wider shrink-0 ${
                      client.role === 'CLIENT' 
                        ? 'bg-red/10 border border-red/20 text-red' 
                        : 'bg-slate-100 border border-slate-200 text-slate-600'
                    }`}>
                      {client.role}
                    </span>
                    {client.role === 'CLIENT' ? (
                      <ShieldCheck className="w-3.5 h-3.5 text-red shrink-0" />
                    ) : (
                      <Award className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                    )}
                  </div>
                  <div>
                    <h4 className="font-sans font-bold text-xs sm:text-sm text-slate-900 leading-tight mb-0.5 truncate">
                      {client.name}
                    </h4>
                    <p className="font-sans text-[9px] sm:text-[10px] text-slate-500 font-light truncate">
                      {client.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Rightward Marquee */}
        <div className="flex overflow-hidden w-full relative">
          <div className="flex whitespace-nowrap gap-4 sm:gap-6 animate-marquee-rev hover:[animation-play-state:paused] cursor-pointer">
            {/* Duplicated 3 times to guarantee seamless wrapping */}
            {[...row2, ...row2, ...row2].map((client, idx) => (
              <div 
                key={idx}
                className="inline-flex flex-row items-center gap-3 sm:gap-4 w-70 sm:w-85 h-23.75 sm:h-27.5 p-4 sm:p-5 bg-white border border-slate-200/80 rounded-2xl shrink-0 hover:border-red/40 transition-colors shadow-sm"
              >
                {/* Logo Frame */}
                <div className="w-11 h-11 sm:w-14 sm:h-14 bg-slate-50 border border-slate-200/80 rounded-xl flex items-center justify-center shrink-0">
                  {renderClientLogo(client.name, client.role)}
                </div>

                {/* Text Content */}
                <div className="flex-1 min-w-0 flex flex-col justify-between h-full py-0.5 sm:py-1">
                  <div className="flex items-center justify-between gap-2">
                    <span className={`font-mono text-[7.5px] sm:text-[8px] font-bold px-1.5 sm:px-2 py-0.5 rounded uppercase tracking-wider shrink-0 ${
                      client.role === 'CLIENT' 
                        ? 'bg-red/10 border border-red/20 text-red' 
                        : 'bg-slate-100 border border-slate-200 text-slate-600'
                    }`}>
                      {client.role}
                    </span>
                    {client.role === 'CLIENT' ? (
                      <ShieldCheck className="w-3.5 h-3.5 text-red shrink-0" />
                    ) : (
                      <Award className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                    )}
                  </div>
                  <div>
                    <h4 className="font-sans font-bold text-xs sm:text-sm text-slate-900 leading-tight mb-0.5 truncate">
                      {client.name}
                    </h4>
                    <p className="font-sans text-[9px] sm:text-[10px] text-slate-500 font-light truncate">
                      {client.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
